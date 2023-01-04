import React from "react";
import { useMediaQuery } from "react-responsive";

const SnakeGame = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  // if screen size less than 400px return this message to user to use desktop
  if (isMobile) {
    return (
      <>
        <div className="container pt-5">
          <h1 className="text-center">Please use desktop to play this game</h1>
        </div>
      </>
    );
  }

  // let's make a snake game
 
// const btnUp = document.querySelector(".btnUp");
// const btnDown = document.querySelector(".btnDown");
// const btnLeft = document.querySelector(".btnLeft");
// const btnRight = document.querySelector(".btnRight");

const snakeBoard = document.querySelector(".snakeBoard");
// snakeBoarrd width and height is 350px

const ctx = snakeBoard.getContext("2d");
const box = 32

// create a snake
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// create food
let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

// display food and snake
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
}

function drawSnake() {
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function main(){
  window.requestAnimationFrame(main);
  ctx.clearRect(0, 0, 350, 350);
  drawFood();
  drawSnake();


}

main();

 
 

  return (
    <>
      <div className={isTablet ? "container-fluid" : "container"}>
        <h3 className="text-center mt-5">Snake Game</h3>
        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="first-section">
              <div className="row">
                <div className="col-12">
                  <h5 className="float-start">
                    Score : <span className="score">00</span>
                  </h5>
                  <h5 className="float-end">
                    High : <span className="highScore">00</span>
                  </h5>
                </div>
              </div>
              <canvas
                className="snakeBoard"
                style={{
                  width: "350px",
                  height: "350px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  position: "relative",
                  overflow: "hidden",
                }}
              ></canvas>
            </div>
          </div>

          {/* controls */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="controls">
              <div className="startBtn">
                <button className="btn btn-primary">Start</button>
                <button className="btn btn-primary">Pause</button>
                <button className="btn btn-primary">Restart</button>
              </div>

              <div className="controlsBtn mt-3">
                <div className="row">
                  <div className="first-line col-12 d-flex justify-content-center">
                    <button className="btn btn-primary btnUp">Up</button>
                  </div>
                  <div className="second-line col-12  ">
                    <button className="btn btn-primary float-start btnLeft">
                      Left
                    </button>
                    <button className="btn btn-primary float-end btnRight">
                      Right
                    </button>
                  </div>
                  <div className="third-line col-12  d-flex justify-content-center">
                    <button className="btn btn-primary btnDown">Down</button>
                  </div>
                </div>
              </div>
              <h4>Controls</h4>

              <ul>
                <li>Use arrow keys to move the snake</li>
                <li>Use spacebar to pause the game</li>
                <li>Use enter to start the game</li>
              </ul>

              <h4>Rules</h4>
              <ul>
                <li>Don't hit the walls</li>
                <li>Don't hit yourself</li>
                <li>Don't hit the snake</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnakeGame;
