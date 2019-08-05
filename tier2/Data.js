const get = require('lodash/get');

const formatData = conceptData => {
	const map = {};
	conceptData.edges.forEach(edge => {
		const src = get(edge, 'start.label', '');
		const tgt = get(edge, 'end.label', '');
		const tgts = map[src] || [];
		tgts.push(tgt);
		map[src] = tgts;
	});
	return map;
};

class Data {
	constructor(conceptData) {
		//assume correct format for conceptData
		this.internalData = formatData(conceptData);
	}

	getTerm(term) {
		const map = this.internalData;
		return get(map, [term], null);
	}
};

module.exports = Data;
