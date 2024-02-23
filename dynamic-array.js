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
      this.capacity *= 2;
    }
    
    
    this.data[this.length] = val;
    this.length += 1;
  }


  pop() {

    // Your code here

  }

  shift() {

    // Your code here
    for(let i = this.data.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length += 1;
  }

  unshift(val) {

    // Your code here
    if(this.length === this.capacity) {
      this.capacity *= 2;
    }
    for(let i = this.data.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
    this.length += 1;
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;