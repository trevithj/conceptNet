// Tier1 version
const usage = `Required argument is missing.
Usage:
> node concept-net.js <searchTerm>
If running via npm:
> npm run tierX <searchTerm>

Examples:
> node concept-net.js "sausage"
> node concept-net.js "save me" > output.json
> npm run tier1 "testing"
`;

if (process.argv.length < 3) {
	console.log(usage);
	process.exit(0);
}
const term = process.argv[2];
/////////////////////////////////////////
const doProcess = require('./process');
console.log(doProcess(term));

