export default function Board({ grid }) {
  return grid.map((row, i) => {
    return (
      <div key={"row" + i} className="row">
        {row.map((col, j) => {
          return (
            <div key={i + "," + j} id={i + "," + j} className="col">
              {col}
            </div>
          );
        })}
      </div>
    );
  });
}
