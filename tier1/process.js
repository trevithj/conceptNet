// Tier1 version
const Data = require('./Data');
const getTerm = new Data().getTerm;

const doProcess = term => {
	return getTerm(term);
};

module.exports = doProcess;

