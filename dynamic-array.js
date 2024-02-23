class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if(this.length === this.capacity) {
      this.resize()
    }
    
    
    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {

    // Your code here
    if(this.length === 0) return undefined;
    let lastElem = this.data[this.length - 1];
    this.data[this.length] = undefined;
    this.length -= 1;
    return lastElem;
  }

  shift() {

    // Your code here
    if(this.length === 0) return undefined;
    let firstElement = this.data[0];
    for(let i = 0; i < this.length; i += 1) {
      this.data[i] = this.data[i + 1]
    }
    
    this.length -= 1;
    this.data[this.length] = undefined;
    return firstElement;
  }

  unshift(val) {

    // Your code here
    if(this.length === this.capacity) {
      this.resize();
    }
    for(let i = this.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length += 1;
  }

  indexOf(val) {

    // Your code here
    for(let i = 0; i < this.length; i += 1) {
      if(this.data[i] === val) {
        return i
      }
    }

    return -1;
  }

  resize() {

    let newArr = [...this.data];
    this.data = new Array(this.capacity *= 2)
    // Your code here

    for(let i = 0; i < this.length; i += 1) {
      this.data[i] = newArr[i]
    }
  }



}


module.exports = DynamicArray;