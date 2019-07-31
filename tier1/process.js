// Tier1 version
const Data = require('./Data');
const getTerm = new Data().getTerm;

const getVisitCount = map => node => {
	const count = map[node] || 0;
	map[node] = count + 1;
	return map[node];
};

const recursiveDFS = (props) => {
	const {node, visitCount, leafDepth, edges, depth = 0} = props;
	if (!node) return; //non-existent. Just in case.
	if (visitCount(node) > 1) return; //already visited

	const tgts = getTerm(node) || []; //Hmm... need to note nulls?
	if(tgts.length === 0) {
		//node is a leaf, so note node and depth
		leafDepth(node, depth);
		return;
	}
	//else carry on searching down each path
	tgts.forEach(tgt => {
		recursiveDFS({ ...props, node:tgt, depth: depth + 1 });
		//add to edges as we return up the tree
		edges.push({ tgt, src:node });
	});
}

const examineTree = term => {
	const visitCount = getVisitCount({});
	const deepest = { node: term, depth: 0 };
	const leafDepth = (node, depth) => {
		if(depth < deepest.depth) return;
		deepest.node = node;
		deepest.depth = depth;
	};
	const edges = [];
	recursiveDFS({ node:term, visitCount, leafDepth, edges });
	return { deepest, edges };
};

const doProcess = term => {
	const result = examineTree(term);
	//todo: form JSON structure
	return result;
};

module.exports = doProcess;

