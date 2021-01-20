const getRandValueFromArray = (ARRAY = []) => {
  return ARRAY[Math.floor(Math.random() * Math.floor(ARRAY.length - 1))];
};

module.exports = {
  getRandValueFromArray,
}
