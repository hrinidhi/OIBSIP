let input = document.getElementById("input");
let result = document.getElementById("result");
let expression = "";

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      expression = "";
      input.textContent = "";
      result.textContent = "0";
    } else if (value === "del") {
      expression = expression.slice(0, -1);
      input.textContent = expression;
    } else if (value === "ENTER") {
      try {
        let final = expression.replace(/x/g, "*").replace(/÷/g, "/");
        result.textContent = eval(final);
      } catch {
        result.textContent = "Error";
      }
    } else {
      expression += value;
      input.textContent = expression;
    }
  });
});
