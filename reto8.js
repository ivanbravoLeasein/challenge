let giftsPerBox = 10;
let boxesPerPale = 5;

let input = `${Math.floor(Math.random() * 900 + 100)}${String.fromCharCode(Math.floor(Math.random() * 26) + 97)}${Math.floor(Math.random() * 900 + 100)}${String.fromCharCode(Math.floor(Math.random() * 26) + 97)}${Math.random() < 0.5 ? `${Math.floor(Math.random() * 900 + 100)}${String.fromCharCode(Math.floor(Math.random() * 26) + 97)}` : ''}`;

console.log("el string de entrada es " + input);
console.log(organizeGifts(input));
function isItNumber(valor) {
  return Number.isFinite(Number(valor));
}
function organizeBlock(numberAsString, word) {
  let blockString = "";
  let numberToAnalyze = Number(numberAsString);
  let pales = Math.floor(numberToAnalyze / (giftsPerBox * boxesPerPale));
  let boxes = Math.floor(
    (numberToAnalyze - pales * giftsPerBox * boxesPerPale) / giftsPerBox
  );
  let aditionalGifts =
    numberToAnalyze -
    pales * giftsPerBox * boxesPerPale -
    boxes * giftsPerBox;
  blockString =
    (pales > 0 ? ("[" + word + "]").repeat(pales) : "") +
    (boxes > 0 ? ("{" + word + "}").repeat(boxes) : "") +
    (aditionalGifts > 0 ? "(" + word.repeat(aditionalGifts) + ")" : "");
  return blockString;
}

function organizeGifts(gifts) {
  let numberAsString = "";
  let word;
  let finalString = "";
  for (let index = 0; index < gifts.length; index++) {
    if (isItNumber(gifts[index])) {
      numberAsString += gifts[index];
    } else {
      word = gifts[index];
      finalString += organizeBlock(numberAsString, word);
      numberAsString = "";
    }
  }
  return finalString;
}
