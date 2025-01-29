# workshop-task-2
FA205_Workshop_2

Project link: [link]()

## Task
-Try using an IDE running locally on your own computer, rather than the p5.js web editor. VSCodium or VSCode are recommended. If you use  VSCodium, see this workaround to install the p5.vscode extension Links to an external site. and use this file Download this file (you can install the Live Preview extension through the application's extension manager). For VSCode, you can install both extensions from the application's extension manager.

<img width="251" alt="截屏2025-01-28 下午12 11 28" src="https://github.com/user-attachments/assets/0f059981-12b0-48c3-a68a-c850b3c7b3c7" />

-Make a p5.js sketch using the setTimeout and setInterval functions.
-Experiment with at least one new item from the from the p5.js documentation Links to an external site..
-Create a GitHub login Links to an external site., make repositories for your three p5.js sketches (for workshop tasks 0, 1 and 2), and publish these projects as webpages using GitHub pages. Include a README file in each repository with a link to the webpage. Use the README files to document your work clearly.
-Post a link to your GitHub account on the course discussion board on Canvas.


## Overview
- Following the instruction on the workshop
- Learn to SetTimeout for animation
- Create shapes that add overtime
- Learn to SetInterval for animation
- Learn Time based function



### SetTimeout

This blue square will appear 3 seconds after the programme is launched
  
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);

//3000 is the time in milliseconds, execute 3 seconds after the programme is launched
setTimeout(MakeBlueSquare, 2000);
}

function MakeBlueSquare(){
  //Draw the Square
  fill(0,0,250);
  noStroke();
  rect(150,150,150,150);
}
```
<img width="399" alt="截屏2025-01-29 上午6 09 31" src="https://github.com/user-attachments/assets/d971ff24-7a66-4e95-9457-f6a9b9b199b8" />

### Added mouse-pressed function, the square appears 3 seconds after the mouse-pressed.
  
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);
}
function mousePressed(){
  //3000 is the time in milliseconds, execute 3 seconds after the program is launched
setTimeout(MakeBlueSquare, 3000);
}

function MakeBlueSquare(){
  //Draw the Square
  fill(0,0,250);
  noStroke();
  rect(150,150,150,150);
}
```
<img width="399" alt="截屏2025-01-29 上午6 13 06" src="https://github.com/user-attachments/assets/77f05e5b-28c2-4281-81f7-84e44a137cda" />

### Added a loop function, Shorten the settime. Instead of a square, it makes a house.
  
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);
}
function mousePressed(){
  //1000 is the time in milliseconds, execute 1 seconds after the programme is launched
  setTimeout(makeblueHouse, 1000, random(0,width), random(0,height), random(10,100), color(0,0,255));
}
function makeblueHouse(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  rect(xPos,yPos,50,stories);
  triangle(xPos, yPos, xPos+25, yPos -20, xPos +50, yPos);

//loop
  setTimeout(makeHouse, 1000, random(0,width), random(0,height), random(10,100), color(0,0,250));
}
```
<img width="399" alt="截屏2025-01-29 上午7 27 34" src="https://github.com/user-attachments/assets/7295a1d3-ebb2-48d7-b4be-592bcfb4af76" />
<img width="399" alt="截屏2025-01-29 上午7 27 51" src="https://github.com/user-attachments/assets/4027cab0-4405-4a2a-bd13-f471adc91d7e" />

###SetInterval, adding random color and transparency
```ruby
function setup() {
  createCanvas(400, 400);
  background(220);

  setInterval(() => {
    makeCircle(
      random(0, width), // Random x position
      random(0, height), // Random y position
      random(10, 100), // Random stories
      color(random(255), random(255), random(255),random(150,255)) // Random color and transparency
    );
  }, 1000);
  }

  function makeCircle(xPos, yPos, stories, colour){
  fill(colour);
  noStroke();
  circle(xPos,yPos,50,stories);
  
  }
```
<img width="399" alt="截屏2025-01-29 上午7 44 03" src="https://github.com/user-attachments/assets/6f91eed5-4331-4a3d-b636-5049f5e8a57c" />
<img width="399" alt="截屏2025-01-29 上午7 46 33" src="https://github.com/user-attachments/assets/5a98963d-ca63-4ae5-82a1-1620b7ba8af7" />
### Notes
- Counter ++ (Counter add one each times)
- let counter = 0; 
- counter = 0; (Reset counter)
- For github:
  - Readmefile : # as level.1 heading ## level 2 heading ### level 3 heading

### Pratice
The circle changes the size and color
```ruby
let circles = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  setInterval(() => {
    let x = random(width);
    let y = random(height);
    let size = random(10, 100);
    let col = color(random(255), random(255), random(255), random(150, 255));
    circles.push({ x, y, size, col, growing: true });
  }, 1000);

  setInterval(() => {
    for (let circle of circles) {
      circle.col = color(random(255), random(255), random(255), random(150, 255));
    }
  }, 2000);
}

function draw() {
  background(220);
  for (let circle of circles) {
    if (circle.growing) {
      circle.size += 0.5;
      if (circle.size > 100) circle.growing = false;
    } else {
      circle.size -= 0.5;
      if (circle.size < 10) circle.growing = true;
    }
    fill(circle.col);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
}
```
-Circles Array: Stores circle objects with properties for position, size, color, and growth state.

-Setup Function:

--setInterval: Adds a new circle every second with random properties.

--setInterval: Changes the color of all circles every 2 seconds.

-Draw Function:

--Clears the canvas each frame.

--Updates the size of each circle (growing or shrinking).

--Draws each circle with its current properties.

-if (circle.growing) { ... } else { ... }: Adjusts the size of the circle. If the circle is growing, it increases in size until it reaches 100, then starts shrinking. If it's shrinking, it decreases in size until it reaches 10, then starts growing again.


<img width="399" alt="截屏2025-01-29 上午8 28 58" src="https://github.com/user-attachments/assets/7e803cc3-0e4e-4391-a714-cea4c466bdd5" />
<img width="399" alt="截屏2025-01-29 上午8 28 55" src="https://github.com/user-attachments/assets/0eff3980-f2e8-4bc7-81d7-f6d0cbfec7a7" />

###New things learned in p5js documentation

##setInterval

-Purpose: Executes a function repeatedly at specified intervals.

-Syntax: setInterval(function, delay)

-function: The function to be executed.

-delay: The time interval (in milliseconds) between each execution of the function.


##setTimeout
-Purpose: Executes a function once after a specified delay.

-Syntax: setTimeout(function, delay)

-function: The function to be executed.

-delay: The time delay (in milliseconds) before the function is executed.

##Key Differences

Repetition: setInterval repeats the function execution at regular intervals, while setTimeout executes the function only once after the delay.

Use Cases:

setInterval: Ideal for tasks that need to be repeated, such as animations, updating data, or polling.

setTimeout: Useful for delayed actions, such as showing a message after a certain time or delaying the execution of a function.

