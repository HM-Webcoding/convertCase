let textarea = document.getElementById("textarea");
let showtext = document.getElementById("showtext");
let textAreaValue;
textarea.addEventListener("input", (e) => {
  textAreaValue = e.target.value;
});

const handleSentence = document.getElementById("handleSentence");
handleSentence.addEventListener("click", () => {
  let sentenceCase = textAreaValue
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
  textarea.value = sentenceCase;
});

const handleLowerCase = document.getElementById("handleLowerCase");
handleLowerCase.addEventListener("click", () => {
  let lowerCase = textAreaValue.toLowerCase();
  textarea.value = lowerCase;
});

const handleUpperCase = document.getElementById("handleUpperCase");
handleUpperCase.addEventListener("click", () => {
  let upperCase = textAreaValue.toUpperCase();
  console.log(upperCase);
  textarea.value = upperCase;
});

const handleCapitalize = document.getElementById("handleCapitalize");
handleCapitalize.addEventListener("click", () => {
  let capitalize = (" " + textAreaValue)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => " " + chr.toUpperCase())
    .trim();
  textarea.value = capitalize;
});

const handleTitleCase = document.getElementById("handleTitleCase");
handleCapitalize.addEventListener("click", () => {
  let titleCase = (" " + textAreaValue)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => " " + chr.toUpperCase())
    .trim();
  textarea.value = titleCase;
});

const handleAlternating = document.getElementById("handleAlternating");
handleAlternating.addEventListener("click", () => {
  let chars = textAreaValue.toLowerCase().split("");
  for (let i = 1; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  chars = chars.join("");
  textarea.value = chars;
});
const handleInverse = document.getElementById("handleInverse");
handleInverse.addEventListener("click", () => {
  let chars = textAreaValue.toLowerCase().split("");
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  chars = chars.join("");
  textarea.value = chars;
});

const handleSelect = document.getElementById("handleSelect");
handleSelect.addEventListener("click", () => {
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
});

const handleCopy = document.getElementById("handleCopy");
handleCopy.addEventListener("click", () => {
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
});
