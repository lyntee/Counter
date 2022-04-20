const counterDisplay = document.querySelector("#counter-value");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
let count = 0;


const addCounter = () => {
  count++;
  counterDisplay.textContent = count;
};

const minusCounter = () => {
  count--;
  counterDisplay.textContent = count;
};

const resetCounter = () => {
  count = 0;
  counterDisplay.textContent = count;
};

increaseBtn.addEventListener("click", addCounter);
decreaseBtn.addEventListener("click", minusCounter);
resetBtn.addEventListener("click", resetCounter);