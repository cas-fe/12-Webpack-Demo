class Greeting {
  constructor(name) {
    this.name = name;
  }

  get() {
    // Example for possible async operation
    return Promise.resolve(`<h1>Hello ${this.name}!</h1>`);
  }
}

export default Greeting
