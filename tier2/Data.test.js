const Data = require("./Data");
const example = require("./testExample");

const data = new Data();
data.addData(example);

it("should define getTerm", () => {
  expect(typeof data.getTerm).toEqual("function");
  const result = data.getTerm("sample");
  expect(result).toEqual(["example"]);
});

it("should return targets in order of weight", () => {
  const result = data.getTerm("example");
  // console.log(result);
  expect(result.length).toBe(3);
  //lowest weight last
  expect(result[2]).toEqual("musical artist");
});
