// TODO: Could be fun to add a switch that allows users to change between any words that contain the letter(s) and strict anagrams
// TODO: Add a spinner or some indicator it's thinking when there's a large output (i.e. if just one letter is entered)
// TODO: Input must only accept letters (no numbers, other characters etc.)

const getData = async () => {
  const res = await fetch('https://raw.githubusercontent.com/stevenbister/anagram-solver/master/words_dictionary.json')
  const json = await res.json()
  return json
}

const convertAnagramToWord = (anagram, wordsList) => {
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
  
const Solver = solver => {
  const input = solver.querySelector('[name=textInput]')
  const solve = solver.querySelector('[name=solve]')
  const output = solver.querySelector('.output')

  // When button is clicked call the getData function
  solve.addEventListener('click', () => getData()
    // Compare the input value with the returned data from the fetch call and print to the output <ul>
    .then(data => {
      output.innerHTML = convertAnagramToWord(input.value, Object.keys(data))
        // Convert filtered list into list items
        .map(word => `<li>${word}</li>`).join('')
    })
    .catch(err => console.error(err))
  )
}

const mySolver = Solver(document.querySelector('.solver'))
