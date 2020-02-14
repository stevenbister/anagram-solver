export const getData = async () => {
  const res = await fetch('https://raw.githubusercontent.com/stevenbister/anagram-solver/master/words_dictionary.json')
  const json = await res.json()
  return json
}
