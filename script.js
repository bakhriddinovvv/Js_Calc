const display = document.querySelector("#display");

function getBtnValue(btn) {
  display.value = display.value + btn;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
