import TestDriver from "./core/TestDriver.js";

let test = new TestDriver();

new p5(function (p: p5) {

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    test.run();
  };

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  p.draw = function () {
    p.background(0);
  };

});