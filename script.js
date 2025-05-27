// 세션 스토리지에서 coin 가져오기 (없으면 0으로 시작)
let coin = sessionStorage.getItem("coin") || 0;
coin = parseInt(coin);
updateCoinDisplay();

// 버튼 클릭 시 재화 증가
function gainCoins() {
  coin += 50;
  sessionStorage.setItem("coin", coin);  // 세션에 저장
  updateCoinDisplay();
}

// 화면에 코인 표시
function updateCoinDisplay() {
  const el = document.getElementById("coin-count");
  if (el) el.innerText = coin;
}
