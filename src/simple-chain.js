const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length

  },
  addLink(value) {
    let tempStr = `( ${value} )`
    this.chain.push(tempStr)
    return this

  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error;
    } else {
      this.chain.splice(position - 1,1)
      return this
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let output = this.chain.join('~~');
    this.chain = [];
    return output
  }
};

module.exports = chainMaker;
