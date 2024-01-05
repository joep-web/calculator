
const number = document.querySelectorAll("[data-num]");
const operator = document.querySelectorAll("[data-operator]");
const currNum = document.querySelector(".curr-num");
const prevNum = document.querySelector(".prev-num")
const AC = document.querySelector("#clear");
const DEL = document.querySelector("#del");
const EQ = document.querySelector("[data-equals]");
const PERCENT = document.querySelector("[data-percent]");
let cN = "";
let pN = "";
let op = undefined;

const solve = () => {
    let result;
    const prev = parseFloat(pN);
    const curr = parseFloat(cN);
    if(isNaN(prev) || isNaN(curr))return;
    
    
    switch(op) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "x":
            result = prev * curr;
            break;
        case "÷":
            result = prev / curr;
            break;
        default:
            return;
    }
    cN = result;
    op = "";
    pN = "";
}

const numAppend = (num) => {
  if(num === "." && currNum.innerText.includes(".")) return;
  cN += num;
};

const chooseOp = (ope) => {
    if(cN === "") return;
    if(pN !== "") {
        solve();
    }
    op = ope;
    pN = cN;
    cN = "";
}


const updateDisplay = () => {
    currNum.innerText = cN;
    if(op != null) {
        prevNum.innerText = `${pN} ${op}`;
    }
}

number.forEach(num => {
  num.addEventListener("click", (e) => {
    numAppend(e.target.value);
    updateDisplay();
  });
});

operator.forEach(op => {
  op.addEventListener("click", (e) => {
    chooseOp(e.target.value);
    updateDisplay();
  });
});

AC.addEventListener("click", () => {
  cN= "";
  pN = "";
  op = "";
  updateDisplay();
});

DEL.addEventListener("click", () => {
  if(!Number.isInteger(cN)){
      cN = String(cN);
  }
  cN = cN.slice(0, -1);
  updateDisplay();
});;

EQ.addEventListener("click", () => {
    solve();
    updateDisplay();
});

PERCENT.addEventListener("click", () => {
    cN = parseFloat(cN) / 100;
    updateDisplay();
});
