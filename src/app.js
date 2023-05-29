/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "Aliens",
    "The neighbor"
  ];
  let action = ["ate", "peed on", "crushed", "broke", "hid", "burned"];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "the laptop",
    "the project files"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while I was sleeping"
  ];

  const randomWhoIndex = Math.floor(Math.random() * who.length);
  const randomActionIndex = Math.floor(Math.random() * action.length);
  const randomWhatIndex = Math.floor(Math.random() * what.length);
  const randomWhenIndex = Math.floor(Math.random() * when.length);

  const excuse =
    who[randomWhoIndex] +
    " " +
    action[randomActionIndex] +
    " " +
    what[randomWhatIndex] +
    " " +
    when[randomWhenIndex];
  return excuse;
}

window.onload = function() {
  const generatedExcuse = generateExcuse();
  const excusePlaceholder = document.getElementById("excuse");
  excusePlaceholder.textContent = generatedExcuse;
};
