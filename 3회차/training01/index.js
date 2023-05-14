/* DOM 요소 불러오기 */
const form = document.querySelector(".form");
const scoreInput = form.querySelector(".score");
const submitBtn = form.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // submit했을 때 새로고침되는 현상을 막습니다.
  const score = scoreInput.innerText; // 입력한 점수를 불러옵니다.

  /** @TODO : 조건문 만들어 학점 출력하기 */
  /**
   * 90점 이상은 "A",
   * 80점 이상은 "B",
   * 70점 이상은 "C",
   * 그 이하는 "F"를 출력하기
   * */
});
