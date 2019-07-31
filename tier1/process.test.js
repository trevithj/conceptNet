const doProcess = require('./process');

describe('Tier 1 processing', () => {

	it('should', () => {
		const result = doProcess('unknown');
		expect(result.edges).toEqual([]);
		expect(result.deepest.depth).toEqual(0);
		console.log(result);
	});

	it('should', () => {
		const result = doProcess('idea');
		expect(result.edges.length).toBeGreaterThan(0);
		expect(result.deepest.depth).toBeGreaterThan(0);
		console.log(result);
	});
});
