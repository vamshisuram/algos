// client id, more than 100 reqs in a sec, block
// expose isAllow

const limit = 2;

const DB = {
  // clientId: [] // reqtimestamps, anything outside that timestamp will remove - we can check array size
};

function isAllow(clientId) {
  const currtime = Date.now();

  const lowerlimit = currtime - 1000;

  if (!(clientId in DB)) {
    DB[clientId] = [];
  }
  const reqs = DB[clientId];

  const slotReqs = reqs.filter((timestamp) => timestamp > lowerlimit);
  const ok = slotReqs.length < limit;
  console.log(ok);
  if (ok) {
    slotReqs.push(currtime);
    DB[clientId] = slotReqs;
  }
  return ok;
}

isAllow("abc"); // true
setTimeout(() => isAllow("abc"), 500); // true
setTimeout(() => isAllow("abc"), 700); // false
setTimeout(() => isAllow("abc"), 2700); // true
