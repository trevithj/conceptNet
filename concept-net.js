//main version
const usage = `Required argument is missing.
Usage:
> node concept-net.js <searchTerm> [<tier1|tier2>]
If running via npm:
> npm run tierX <searchTerm>

Examples:
> node concept-net.js "sausage" "tier2"
> node concept-net.js "save me" > output.json
> npm run tier1 "testing"
`;

if (process.argv.length < 3) {
	console.log(usage);
	process.exit(0);
}
const term = process.argv[2];
const tier = process.argv[3] || 'tier1';
/////////////////////////////////////////
let processPath = './tier1/process';

if(tier === 'tier2') {
	processPath = './tier2/process';
}

const doProcess = require(processPath);
const result = doProcess(term);
if (typeof result.then === 'function') {
	result.then(res => console.log(JSON.stringify(res.json, null, 2)));
} else {
	console.log(JSON.stringify(result.json, null, 2))
}

