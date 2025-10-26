let availableNumbers = [];

function initialize() {
  availableNumbers = [];
  for (let i = 1; i <= 100; i++) {
    availableNumbers.push(i);
  }
  updateRemaining();
  document.getElementById("number").textContent = "?";
}

function generateNumber() {
  if (availableNumbers.length === 0) {
    document.getElementById("number").textContent = "終了！";
    return;
  }

  const index = Math.floor(Math.random() * availableNumbers.length);
  const number = availableNumbers.splice(index, 1)[0]; // 取り出して削除
  document.getElementById("number").textContent = number;
  updateRemaining();
}

function restart() {
  initialize();
}

function updateRemaining() {
  document.getElementById("remaining").textContent =
    `残り: ${availableNumbers.length}個`;
}

// 初期化
initialize();