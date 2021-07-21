//make a function to check if the word is an anagram

const checkAnagram = (word1, word2) => {
  /**
   * coverts a string like "AYUSH" into an array ---> ["A" , "Y" , "U" , "S" , "H"]
   */
  word1 = word1.split(''); // takes an argument as delimiter which is separator
  word2 = word2.split('');

  /**
   * EDGE CASES
   * 1. When Length of the both words is not same.
   * 2. When either of the words is not defined.
   * 3. When each of the word is empty.
   */
  if (word1.length !== word2.length) return false;
  if (!word1 || !word1) return false;
  if (word1 === '' && word2 === '') return true;

  const frequencyOfWord1 = {};
  const frequencyOfWord2 = {};

  word1.forEach((letter) => {
    frequencyOfWord1[letter] = (frequencyOfWord1[letter] || 0) + 1;
  });

  word2.forEach((letter) => {
    frequencyOfWord2[letter] = (frequencyOfWord2[letter] || 0) + 1;
  });

  /**
   * Trivial Solution
   */
  for (let key in frequencyOfWord1) {
    if (!frequencyOfWord2[key]) return false;
    if (frequencyOfWord1[key] !== frequencyOfWord2[key]) return false;
  }
  return true;

  /**
   * Out of the box / Improvised Solution
   * NOTE: Works only when the --->"order of data is Same As Well"
   * for eg : { d: 2, a: 1 } and { a: 1, d: 2 } will return false as order of keys is different
   */
  // return JSON.stringify(frequencyOfWord1) === JSON.stringify(frequencyOfWord2);
};

console.log('Are the two words Anagrams ?: ', checkAnagram('cinema', 'iceman'));
