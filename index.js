// TODO: Could be fun to add a switch that allows users to change between any words that contain the letter(s) and strict anagrams
// TODO: Input must only accept letters (no numbers, other characters etc.)
import { handleSubmit } from './handlers'

const form = document.querySelector('#anagram-unscrambler')

// When button is clicked call the getData function
form.addEventListener('submit', (e) => handleSubmit(e) )
