const myFun = async () => {
  try {
    const resolve = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resolve.json();
    console.log(data);
  } catch (err) {
    console.log(Error(err));
  }
};
