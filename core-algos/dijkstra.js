const graph = {
  A: [["B", 1], ["C", 4]],
  B: [["C", 2]],
  C: []
};

console.log(dijkstra(graph, "A"));
// { A: 0, B: 1, C: 3 }


function dijkstra(g, src) {
    const d = {}
    const q = [src]
    while (q.length) {
        const curr = q.shift()
        
    }
}