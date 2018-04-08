let TicTacToe = {
  rows: document.querySelectorAll(".row"),
  cells: [],
  playerOne: "",
  playerTwo: "",
  winner: "",
  isPlayerOne: true,
  startTwoPlayerGame() {
    for (let i = 0; i < this.rows.length; i++) {
      this.cells.push(Array.from(this.rows[i].children));
    }
    this.addEventListeners();
    this.chooseToken();
  },
  startOnePlayerGame() {},
  chooseToken() {
    let choice = prompt("Pick your token. X or O?");
    this.playerOne = choice;
    if (choice === "X") {
      this.playerTwo = "O";
    } else {
      this.playerTwo = "X";
    }
  },
  addEventListeners() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].addEventListener(
          "click",
          function(e) {
            console.log(e.target);
            e.target.innerHTML = this.isPlayerOne
              ? this.playerOne
              : this.playerTwo;
            this.isPlayerOne = !this.isPlayerOne;
            this.checkColumns();
            this.checkLeftDiag();
            this.checkRightDiag();
            this.checkRows();
          }.bind(this)
        );
      }
    }
  },
  evalWin() {},
  checkRightDiag() {
    let j = this.cells.length - 1;
    let k = 0;
    let xWin = 0;
    let oWin = 0;
    //right diag
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i][j].innerHTML === "X") xWin++;
      if (this.cells[i][j].innerHTML === "O") oWin++;
      console.log(this.cells[i][j]);
      j--;
    }
    if (xWin === 3) {
      alert("Winner X");
    }
    if (oWin === 3) {
      alert("Winner O");
    }
  },
  checkLeftDiag() {
    //left diag
    let xWin = 0;
    let oWin = 0;
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i][i].innerHTML === "X") xWin++;
      if (this.cells[i][i].innerHTML === "O") oWin++;
    }
    if (xWin === 3) {
      alert("Winner X");
    }
    if (oWin === 3) {
      alert("Winner O");
    }
  },
  checkColumns() {
    //columns
    for (let i = 0; i < this.cells.length; i++) {
      let xWin = 0;
      let oWin = 0;
      for (let h = 0; h < this.cells[i].length; h++) {
        if (this.cells[h][i].innerHTML === "X") xWin++;
        if (this.cells[h][i].innerHTML === "O") oWin++;
      }
      if (xWin === 3) {
        alert("Winner X");
      }
      if (oWin === 3) {
        alert("Winner O");
      }
    }
  },
  checkRows() {
    for (let i = 0; i < this.cells.length; i++) {
      let xWin = 0;
      let oWin = 0;
      for (let j = 0; j < this.cells[i].length; j++) {
        if (this.cells[i][j].innerHTML === "X") xWin++;
        if (this.cells[i][j].innerHTML === "O") oWin++;
      }
      if (xWin === 3) {
        alert("Winner X");
      }
      if (oWin === 3) {
        alert("Winner O");
      }
    }
  }
};

document
  .getElementById("two-player")
  .addEventListener("click", TicTacToe.startTwoPlayerGame.bind(TicTacToe));
