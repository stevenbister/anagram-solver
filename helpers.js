export const convertAnagramToWord = (anagram, wordsList) => {
  // To start with we need to order all of the strings so they match
  // Split them into an array, sort, and join them back together
  const sortString = str => str.split('').sort().join('');
  // Loop over each of the words in the array and compare their sorted selves agains the word we want to check
  // outputting a new array of items
  return wordsList.filter(word => {
    // Only return words that are the same length as the input
    if (anagram.length === word.length) {
      return sortString(word.toLowerCase()).includes(sortString(anagram.toLowerCase()))
    }
  })
}
