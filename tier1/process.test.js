const doProcess = require('./process');

describe('Tier 1 processing', () => {

	it('should return empty net when no results are found', () => {
		const result = doProcess('unknown');
		expect(result.net).toEqual({});
		expect(result.deepest.depth).toEqual(0);
		//console.log(result);
	});

	it('should return populated net and data', () => {
		const result = doProcess('saturn');
		const nodes = Object.keys(result.net);
		expect(nodes.length).toBeGreaterThan(0);
		expect(result.deepest.depth).toBeGreaterThan(0);
		//console.log(result);
		//console.log(JSON.stringify(result.json, null, 2));
	});
});
