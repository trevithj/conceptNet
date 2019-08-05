// Tier1 version
const Data = require('./Data');
const getTerm = new Data().getTerm;
const cloneDeep = require('lodash/cloneDeep');

const getVisitCount = map => node => {
	const count = map[node] || 0;
	map[node] = count + 1;
	return map[node];
};

const recursiveDFS = (props) => {
	const {node, visitCount, leafDepth, noteEdges, depth = 0} = props;
	if (!node) return; //non-existent. Just in case.
	if (visitCount(node) > 1) return; //already visited

	const tgts = getTerm(node) || []; //Hmm... need to note nulls?
	if(tgts.length === 0) return; //node is a leaf
	//else carry on searching down each path

	tgts.forEach(tgt => {
		recursiveDFS({ ...props, node:tgt, depth: depth + 1 });
		//add to edges as we return up the tree
		noteEdges({ tgt, src:node, depth: depth +1 });
	});
}

const examineTree = term => {
	//note if a node has been visited already during processing
	const visitCount = getVisitCount({});
	//find the deepest path in the network
	const deepest = { node: term, depth: 0 };
	//create a reverse-mapped network: tgt => [src...]
	const net = {};

	const noteEdges = ({src, tgt, depth}) => {
		const sourceList = net[tgt] || [];
		sourceList.push(src);
		net[tgt] = sourceList;
		//note deepest so far
		if(depth > deepest.depth) {
			deepest.node = tgt;
			deepest.depth = depth;
		};
	}
	//search the network
	recursiveDFS({ node:term, visitCount, noteEdges });
	return { deepest, net };
};

const getRecursiveBuildJSON = (net, visited) => {
	const recursiveBuildJSON = (json, node) => {
		const children = net[node] || [];
		children.forEach(child => {
			const vChild = visited[child];
			if(vChild) {
				json[child] = cloneDeep(vChild);
			} else {
				visited[child] = {};
				json[child] = visited[child];
				recursiveBuildJSON(json[child], child);
			}
		});
	}
	return recursiveBuildJSON;
}

const doProcess = term => {
	const { deepest, net } = examineTree(term);
	const json = {};
	if (deepest.depth > 0) {
		//assume the deepest node is the most general concept
		const root = deepest.node;
		const visited = {};
		json[root] = {};
		console.log('net', net);
		console.log('deepest', deepest);
		const recursiveBuildJSON = getRecursiveBuildJSON(net, visited);
		recursiveBuildJSON(json[root], deepest.node);
		console.log('visited', JSON.stringify(visited, null, 2));
	}

	return { deepest, net, json };
};

module.exports = doProcess;

