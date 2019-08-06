// Tier2 version
const Data = require("./Data");
const axios = require("axios");

const getVisitCount = map => node => {
  const count = map[node] || 0;
  map[node] = count + 1;
  return map[node];
};

const getRecursiveDFS = (getTerm, visitCount, noteEdges) => {
  const recursiveDFS = props => {
    const { node, depth = 0 } = props;
    if (!node) return; //non-existent. Just in case.
    if (visitCount(node) > 1) return; //already visited

    const tgts = getTerm(node) || []; //Hmm... need to note nulls?
    if (tgts.length === 0) return; //node is a leaf
    //else carry on searching down each path

    tgts.forEach(tgt => {
      recursiveDFS({ ...props, node: tgt, depth: depth + 1 });
      //add to edges as we return up the tree
      noteEdges({ tgt, src: node, depth: depth + 1 });
    });
  };
  return recursiveDFS;
};

const examineTree = (term, getTerm) => {
  //note if a node has been visited already during processing
  const visitCount = getVisitCount({});
  //find the deepest path in the network
  const deepest = { node: term, depth: 0 };
  //create a reverse-mapped network: tgt => [src...]
  const net = {};

  const noteEdges = ({ src, tgt, depth }) => {
    const sourceList = net[tgt] || [];
    sourceList.push(src);
    net[tgt] = sourceList;
    //note deepest so far
    if (depth > deepest.depth) {
      deepest.node = tgt;
      deepest.depth = depth;
    }
  };
  //search the network
  const runDFS = getRecursiveDFS(getTerm, visitCount, noteEdges);
  runDFS({ node: term, depth: 0 });
  return { deepest, net };
};

const getRecursiveBuildJSON = (net, visited = {}) => {
  const recursiveBuildJSON = (json, node) => {
    const children = net[node] || [];
    children.forEach(child => {
      if (!visited[child]) {
        json[child] = {};
        visited[child] = true;
        recursiveBuildJSON(json[child], child);
      }
    });
  };
  return recursiveBuildJSON;
};

const base = "http://api.conceptnet.io";

const doProcess = term => {
  const data = new Data();
  const getTerm = term => data.getTerm(term);
  //Quick work-around, follow 'best' child, three deep
  //TODO: make depth variable. Recursive calls?
  return doFetch(term)
    .then(d => {
      data.addData(d);
      return data.getTerm(term)[0];
    })
    .then(childTerm => {
      return childTerm ? doFetch(childTerm) : { edges: [] };
    })
    .then(d => {
      data.addData(d);
      return data.getTerm(term)[0];
    })
    .then(childTerm => {
      return childTerm ? doFetch(childTerm) : { edges: [] };
    })
    .then(d => {
      data.addData(d);
    })
    .then(() => {
      const { deepest, net } = examineTree(term, getTerm);
      // console.log(net);
      const recursiveBuildJSON = getRecursiveBuildJSON(net);
      const json = {};
      if (deepest.depth > 0) {
        //assume the deepest node is the most general concept
        //Not really needed here as we only follow one path
        const root = deepest.node;
        json[root] = {};
        recursiveBuildJSON(json[root], deepest.node);
      }
      return { deepest, net, json };
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = doProcess;

const doFetch = term => {
  const url = `${base}/query?rel=/r/IsA&start=/c/en/${term}`;
  // const url = `${base}/c/en/${term}?format=json`;
  // console.log(url);
  return axios.get(url).then(result => result.data);
};
