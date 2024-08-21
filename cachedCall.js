const existingCache = JSON.parse(localStorage.get("ApiCache"));

const cache =
  existingCache ||
  {
    // endpoint, payload - hash => {value, timestamp}
  };

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 1000);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 5000);

function cachedApiCall(cacheDuration) {
  return function (endPoint, payload) {
    const currTime = Date.now();
    console.log("currTime: ", currTime);
    // check in cache, if present, check crossed cacheDuration
    if (endPoint in cache) {
      const deltaTime = currTime - cache[endPoint].timestamp;
      console.log("deltaTime: >> ", deltaTime);
      if (deltaTime < cacheDuration) {
        console.log("Cache Return");
        return Promise.resolve({ ...cache[endPoint].value });
      }
    }

    const p = fetch(endPoint, payload)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched");
        cache[endPoint] = {
          value: data,
          timestamp: Date.now(),
        };
        return data;
      });
    return p;
  };
}
