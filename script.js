let coin = localStorage.getItem("coin") || 0;
coin = parseInt(coin);
updateCoinDisplay();

function gainCoins() {
  coin += 50;
  localStorage.setItem("coin", coin);
  updateCoinDisplay();
}

function updateCoinDisplay() {
  const el = document.getElementById("coin-count");
  if (el) el.innerText = coin;
}
