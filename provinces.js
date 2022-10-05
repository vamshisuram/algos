var findCircleNum = function (isConnected) {
  var visited = new Map();
  var numberOfCities = isConnected.length;
  var provinces = 0;
  for (var i = 0; i < numberOfCities; i++) {
    if (!visited.has(i)) {
      provinces++;
      visit(i);
    }
  }

  function visit(currentCityIndex) {
    for (var i = 0; i < numberOfCities; i++) {
      if (isConnected[currentCityIndex][i] === 1 && !visited.has(i)) {
        visited.set(i, 1);
        visit(i, visited, isConnected);
      }
    }
  }

  return provinces;
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum1 = function(isConnected) {

  // visited

  // loop, if 1, explore further

  const r = isConnected.length
  const c = isConnected[0].length

  const visited = {};
  let count = 0;

  for (let i = 0; i < r; i++) {
    if (visited[i]) continue;
    count++;
    const stack = [i];
    while (stack.length) {
      const curr = stack.pop()
      if (visited[curr]) continue;
      visited[curr] = true;
      for (let j = 0; j < c; j++) {
        if (isConnected[curr][j]) {
          stack.push(j)
        }
      }
    }
  }
  return count;

};


isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

console.log(findCircleNum(isConnected));