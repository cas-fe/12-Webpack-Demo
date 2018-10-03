class Test {
  constructor() {
    this.foo = 'bar';
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const instance = new Test();

  console.log(instance.foo);
});

export default Test;
