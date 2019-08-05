const Data = require('./Data');
const example = require('./testExample');

const data = new Data(example);

it('should define getTerm', () => {
	expect(typeof data.getTerm).toEqual('function');
	expect(data.getTerm('sample')).toEqual(['example']);
});
