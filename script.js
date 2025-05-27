// 항상 0부터 시작하도록 설정
let coin = 0;
updateCoinDisplay();

function gainCoins() {
  coin += 50;
  updateCoinDisplay();
}

function updateCoinDisplay() {
  const el = document.getElementById("coin-count");
  if (el) el.innerText = coin;
}

