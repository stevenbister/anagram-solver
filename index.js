// TODO: Could be fun to add a switch that allows users to change between any words that contain the letter(s) and strict anagrams
// TODO: Input must only accept letters (no numbers, other characters etc.)
import { getData } from './api'
import { convertAnagramToWord } from './helpers'

const form = document.querySelector('#anagram-unscrambler')
const output = document.querySelector('.output')

const handleSubmit = async (e) => {
  e.preventDefault()
  const inputValue = e.currentTarget.textInput.value
  // TODO: Add a spinner or some indicator it's thinking when there's a large output (i.e. if just one letter is entered)
  output.innerHTML = '<li>Thinking...</li>'
  // Compare the input value with the returned data from the fetch call and print to the output <ul>
  await getData().then(data => {
    const solution = convertAnagramToWord(inputValue, Object.keys(data))

    if (solution.length > 0) {
      // Convert filtered list into list items
      return output.innerHTML = solution.map(word => `<li>${word}</li>`).join('')
    }
    return output.innerHTML = '<li>There are no words</li>'

  })
  .catch(err => console.error(err))
}

// When button is clicked call the getData function
form.addEventListener('submit', (e) => handleSubmit(e) )
