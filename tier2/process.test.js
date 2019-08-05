const doProcess = require('./process');
const axios = require('axios');
const data = require('./testExample');

jest.mock('axios');
axios.get.mockResolvedValue({data});

describe('Tier 2 processing', () => {

	it('should return empty net when no results are found', async () => {
		const result = await doProcess('unknown');
		expect(result.net).toEqual({});
		expect(result.deepest.depth).toEqual(0);
		//console.log(result);
	});

	it('should return populated net and data', async () => {
		const result = await doProcess('example');
		const nodes = Object.keys(result.net);
		expect(nodes.length).toBeGreaterThan(0);
		expect(result.deepest.depth).toBeGreaterThan(0);
//		console.log(result);
//		console.log(JSON.stringify(result.json, null, 2));
	});
});
