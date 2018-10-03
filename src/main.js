import uniqueId from 'lodash.uniqueid';

class Test {
  constructor() {
    this.uuid = uniqueId();
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const instance = new Test();

  console.log(instance.uuid);
});

export default Test;
