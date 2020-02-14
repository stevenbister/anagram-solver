import { getData } from './api'
import { convertAnagramToWord } from './helpers'

const output = document.querySelector('.output')

// Create a short description outputting how many results have been found
const createDescription = (arr) => {
  const results = document.createElement('div')

  const s = arr.length > 1 ? 's' : ''

  results.classList.add('description')
  results.innerHTML = `<p>We've found ${arr.length} result${s}:</p>`
  return results
}

export const handleSubmit = async (e) => {
  e.preventDefault()
  
  const inputValue = e.currentTarget.textInput.value
  const description = document.querySelector('.description')

  if (description) description.remove()

  // TODO: Add a spinner or some indicator it's thinking when there's a large output (i.e. if just one letter is entered)
  output.innerHTML = '<li>Thinking...</li>'
  // Compare the input value with the returned data from the fetch call and print to the output <ul>
  await getData().then(data => {
    const solution = convertAnagramToWord(inputValue, Object.keys(data))

    // Insert the description just before the output
    output.insertAdjacentElement('beforebegin', createDescription(solution))

    if (solution.length > 0) {
      // Convert filtered list into list items
      return output.innerHTML = solution.map(word => `<li>${word}</li>`).join('')
    }
    return output.innerHTML = '<li>There are no words</li>'

  })
  .catch(err => console.error(err))
}
