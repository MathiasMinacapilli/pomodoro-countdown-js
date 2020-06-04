// Set minutes (in seconds) we are counting down to
const countDownStart = 90000; // 25 minutes in seconds
let actualCountDownValue = countDownStart;

// Update the count down every 1 second
const x = setInterval(() => {
  // Time calculations for minutes and seconds
  const minutes = Math.floor(actualCountDownValue / 60 / 60);
  const seconds = actualCountDownValue - minutes * 60 * 60;

  // Display the result in the element with id="demo"
  document.querySelector("#countdown").innerHTML = `${minutes}:${seconds}`;

  // If the count down is finished, write some text
  if (actualCountDownValue === 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  } else {
    actualCountDownValue -= 1;
  }
}, 1000);
