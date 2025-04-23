// declaring a variable & creating function to increase passenger count
let countEl = document.getElementById("count-el");
let count = 0;
// declaring a variable to grab the save-el paragraph, store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1; // count += 1; is the same as count = count + 1;
  countEl.textContent = count;
}

// Create a function save() which shows the previous saved increments
function save() {
  let prevSave = count + " -- ";
  saveEl.textContent += prevSave;
  count = 0; // reset the count back to zero
  countEl.textContent = count; // update the display
}
