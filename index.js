//TODO: this should be the json file so we have all the words
const testList = ['happy', 'sad', 'overjoyed', 'greatful']

function Solver(solver) {
  const input = solver.querySelector('[name=textInput]')
  const solve = solver.querySelector('[name=solve]')
  const output = solver.querySelector('.output')

  const convertAnagramToWord = (anagram, wordsList) => {
    // To start with we need to order all of the strings so they match
    // Split them into an array, sort, and join them back together
    const sortString = str => str.split('').sort().join('');
    // Loop over each of the words in the array and compare their sorted selves agains the word we want to check
    return wordsList
      .filter(word => {
        // Only return strings which are of equal length
        return sortString(word.toLowerCase()).includes(sortString(anagram.toLowerCase()))
      })
      // Convert filtered list into list items
      .map(word => {
        return `<li>${word}</li>`
      })
      // Use join to convert array to string
      .join('')
  }

  // Output the result 
  solve.addEventListener('click', () => output.innerHTML = convertAnagramToWord(input.value, testList) )
}

const mySolver = Solver(document.querySelector('.solver'))
