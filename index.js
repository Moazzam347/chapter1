const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

let position = 0;

function handleKeyPress(e) {
  if (e.code === "KeyA") {
    position = position - 50;
    refreshHorizotal();
  } else if (e.code === "KeyD") {
    position = position + 50;
    refreshHorizotal();
  } else if (e.code === "KeyW") {
    position = position - 50;
    refreshVertical();
  } else if (e.code === "KeyS") {
    position = position + 50;

    refreshVertical();
  } else if (e.code === "KeyE") {
    position = position + 50;
    refreshVertical();
    refreshHorizotal();
  } else if (e.code === "KeyQ") {
    position = position - 50;
    refreshVertical();
    refreshHorizotal();
  } else if (position < 0) {
    position = 0;
    refreshHorizotal();
    refreshVertical();
  }

  refresh();
}

let refreshHorizotal = () => {
  ball.style.left = position + "px";
  //   ball.style.top = position + "px";
};
let refreshVertical = () => {
  //   ball.style.left = position + "px";
  ball.style.top = position + "px";
};
