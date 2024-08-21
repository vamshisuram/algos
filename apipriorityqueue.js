function fetchAll(apis) {
  const promises = apis.map((api) => fetch(api));
  return Promise.allSettled(promises).then((responses) => {
    for (const res of responses) {
      if (res.status === "fulfilled") {
        return res.value;
      }
    }
    throw new Error("APIs failed");
  });
}
