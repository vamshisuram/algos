// Any game - config/rules, state, behavior

class LeaderBoard {
  static state = {
    top10: this.getTop(10),
    players: {
      abc: {
        score: 0,
      },
      xyz: {
        score: 0,
      },
    }, // name, score, thumbnail
  };
  static getTop(limit) {
    // filter top limit
    LeaderBoard.players = []; // create a max heap, and get top 10
  }
}

class TicTacToe {
  config = {
    boardSize: 3,
  };
  state = {
    status: "", // notstarted, inprogress, paused, ended, canceled
    step: null, // which step of game - starts at 1 on start.
    player1: "abc", // generate random names, else new game will have form fields OR play options
    player2: "xyz",
    winner: null,
    startTime: null,
    duration: null,
    matchHistory: [], // position, player, moveTime
    markings: ["X", "O"],
    grid: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  };

  // configs/rules, initialize state
  constructor() {
    console.log("LeaderBoard.players", LeaderBoard.state.players);
    this.buildGame();
    this.start();
  }
  buildGame() {
    this.buildDOM();
    this.attachListeners();
  }
  buildDOM() {
    const template = document.getElementById("game-template");
    const gameNode = template.content.cloneNode(true);
    const page = document.getElementById("root");
    page.appendChild(gameNode);
  }
  attachListeners() {
    const gameNode = document.getElementById("game");
    this.state.gameNode = gameNode;
    gameNode.addEventListener("click", this.makeMove);
  }

  start() {
    this.state.step = 1;
    this.state.status = "inprogress";
  }
  pause() {}
  stop() {}

  makeMove = (evt) => {
    // why, when capture phase?
    // check valid move?
    // update move/board, history
    // isGameOver check
    // step++;

    if (!this.isValidMove(evt)) {
      this.warnPlayer();
      return;
    }
    const target = evt.target;
    const [r, c] = target.id.split(",");
    const [first, second] = this.state.markings;
    const { step } = this.state;
    const mark = step % 2 ? first : second;
    target.innerText = mark;
    this.state.grid[r][c] = mark;
    this.updateHistory(evt);

    if (this.isGameOver(evt)) {
      this.state.gameNode.removeEventListener("click", this.makeMove);
      this.updateLeaderBoard();
      setTimeout(() => window.alert(this.getPlayer() + " won!!"), 0);
      return;
    }

    this.state.step++;
  };

  getPlayer() {
    const { player1, player2, step } = this.state;
    const player = step % 2 ? player1 : player2;
    return player;
  }

  updateHistory(evt) {
    const [r, c] = this.getMarkPosition(evt);
    const target = evt.target;
    const { player1, player2, step } = this.state;
    this.state.matchHistory.push({
      timestamp: Date.now(),
      player: step % 2 ? player1 : player2,
      position: target.id,
    });
  }
  updateLeaderBoard() {
    const player = this.getPlayer();
    LeaderBoard.state.players[player].score++;
  }

  // utils
  // togglePlayer() {}
  isValidMove(evt) {
    const target = evt.target;
    return target.classList.contains("cell") && target.innerText === "";
  }
  warnPlayer(message = "please make a valid move") {
    window.alert(message);
  }
  getMarkPosition(evt) {
    const target = evt.target;
    return target.id.split(",");
  }
  isGameOver(evt) {
    const { step } = this.state;
    const [r, c] = this.getMarkPosition(evt);
    const [first, second] = this.state.markings;
    const mark = step % 2 ? first : second;
    // r same, c diff || r diff, c same || (r,c same then diagonal check)
    const targetVal = mark.repeat(3);
    return (
      this.getRowCheck(r, targetVal) ||
      this.getColumnCheck(c, targetVal) ||
      this.getDiagonalCheck(targetVal)
    );
  }
  getRowCheck(i, val) {
    const { grid } = this.state;
    const out = grid[i][0] + grid[i][1] + grid[i][2];
    return val === out;
  }

  getColumnCheck(j, val) {
    const { grid } = this.state;
    const out = grid[0][j] + grid[1][j] + grid[2][j];
    return val === out;
  }

  getDiagonalCheck(val) {
    const { grid } = this.state;
    const out = grid[0][0] + grid[1][1] + grid[2][2];
    return val === out;
  }
}

// New Game button - create a new game & start
new TicTacToe();
