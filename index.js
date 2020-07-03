const randomNumber = require("random-number-csprng");
const number = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "-_+;></";
const loweralphanumeric = alphanumeric;
const upperalphanumeric = number + uppercase;
const allalphanumeric = number + lowercase + uppercase;
const all = allalphanumeric + symbols;
const sets = {
  number,
  lowercase,
  uppercase,
  alphanumeric,
  loweralphanumeric,
  upperalphanumeric,
  allalphanumeric,
  all,
};
async function makePassCode(length = 6, key = "number") {
  const set = sets[key];
  const a = await Promise.all(
    new Array(length).fill("").map(() => randomNumber(0, set.length - 1))
  );
  return a.map((i) => set[i]).join("");
}
module.exports = makePassCode;
