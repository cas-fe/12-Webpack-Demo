import Greeting from './greeting.js';

document.addEventListener('DOMContentLoaded', async () => {
  const instance = new Greeting('Thomas');
  const greeting = await instance.get();

  document.body.innerHTML += greeting;
});
