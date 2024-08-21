/* eslint-disable react/jsx-key */
// render keyboard

// handleKeypress (evt)

const Keyboard = ({ onClick }) => {
  const letters = "qwertyuiopasdfghjkl#zxcvbnm*";
  const handleClick = (evt) => {
    const val = evt.target.innerText;
    evt.stopPropagation();
    onClick(val);
  };

  const map = {
    "#": "Enter",
    "*": "DEL",
  };

  return (
    <div onClick={handleClick}>
      {letters.split("").map((c, i) => {
        if (c in map) {
          return (
            <button key={"btn-" + i} className="keyboardBtn">
              {map[c]}
            </button>
          );
        }
        return (
          <button key={"btn-" + i} className="keyboardBtn">
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
