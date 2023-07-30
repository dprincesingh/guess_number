const secretnumber = Math.floor(Math.random() * 100);
let attempt = 0;
function check() {
  attempt++;
  let inputvalue = document.getElementById("input").value;
  inputvalue = parseInt(inputvalue);
  if (inputvalue === secretnumber) {
    document.getElementById("result").innerText = `Congratulations You guessed the number ${secretnumber} in ${attempt} attempts.`;
  } else if (inputvalue > secretnumber) {
    document.getElementById("result").innerText = "Too high! Try again.";
  } else {
    document.getElementById("result").innerText = "Too low! Try again.";
  }
}
