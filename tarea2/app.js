exports.computeAverageLengthOfWords = function computeAverageLengthOfWords (firstWord, secondWord) {
    let word1 = firstWord.toString();
    let word2 = secondWord.toString(); 
    var promedio = (word1.length + word2.length) / 2;
    return promedio;
  };