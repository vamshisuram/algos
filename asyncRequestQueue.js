async function requestQueue(apis) {
  // 2nd should wait until first is done
  const out = [];
  for (let api of apis) {
    const res = await fetch(api);
    out.push(res);
  }
  return out;
}
