/* eslint-disable */


const who = [
  "The dog",
  "The ferret",
  "The neighbour",
  "My cousin",
  "Great cthulhu"
];
const action = [
  "ate",
  "peed on",
  "stole",
  "broke",
  "opened a portal because of"
];
const what = ["my homework", "the keys", "the car", "my coding skills"];
const when = [
  "before the class.",
  "when I left the house.",
  "when I was not looking.",
  "a few seconds ago."
];

function generateExcuse() {

  let whoRand = Math.floor(Math.random() * who.length);
  let actionRand = Math.floor(Math.random() * action.length);
  let whatRand = Math.floor(Math.random() * what.length);
  let whenRand = Math.floor(Math.random() * when.length);

  const theExcuse =
    who[whoRand] +
    " " +
    action[actionRand] +
    " " +
    what[whatRand] +
    " " +
    when[whenRand];
  document.getElementById("excuse").innerText = theExcuse;

};

generateExcuse()
