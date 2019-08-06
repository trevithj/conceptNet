const get = require("lodash/get");

const formatData = (map = {}, conceptData) => {
  conceptData.edges.forEach(edge => {
    const src = get(edge, "start.label", "");
    const tgt = get(edge, "end.label", "");
    const wgt = get(edge, "weight", 0);
    const tgts = map[src] || [];
    tgts.push({ tgt, wgt });
    map[src] = tgts;
    // console.log(src, tgts);
  });
  return map;
};

const byWeight = (a, b) => b.wgt - a.wgt;

class Data {
  constructor() {
    this.internalData = {};
  }

  addData(data) {
    try {
      formatData(this.internalData, data);
    } catch (err) {
      console.error(err);
      console.log("Invalid data", data);
    }
  }

  getTerm(term) {
    const map = this.internalData;
    const tgts = get(map, [term], []);
    // console.log(tgts);
    return tgts.sort(byWeight).map(obj => obj.tgt);
  }
}

module.exports = Data;
