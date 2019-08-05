const exec = require('child_process').exec;
const axios = require('axios');

const data = {};
jest.mock('axios');
axios.get.mockResolvedValue({data});


describe('Tier2 test', () => {
	it('should log usage info if argument is missing', (done) => {
		exec('npm run tier2', (err, stdout, stderr) => {
			expect(err).toBeFalsy();
			expect(stderr).toEqual('');
			expect(stdout).toContain('Required argument is missing');
			done();
		});
	});
	it('should NOT log usage when given argument', (done) => {
		exec('npm run tier2 some_arg', (err, stdout, stderr) => {
			expect(err).toBeFalsy();
			expect(stderr).toEqual('');
			expect(stdout).not.toContain('Required argument is missing');
			done();
		});
	});
});

