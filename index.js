const translit = require('translit')
const dictionary = require('./dictionary')

function transliterationSorting (list, field, languages = 'en_ru') {
  const vocabruary = getDictionary(languages)
  const tr = translit(vocabruary)
  console.log(list.map(it => ({ ...it, translit: tr(it[field]) })).sort(compare))
  return list.map(it => ({ ...it, translit: tr(it[field]) })).sort(compare)
}

function getDictionary (langs) {
  return dictionary[langs] ? dictionary[langs] : dictionary.en_ru
}

function compare (a, b) {
  if (a.translit.toLowerCase() < b.translit.toLowerCase())
    return -1
  if (a.translit.toLowerCase() > b.translit.toLowerCase())
    return 1
  return 0
}

module.exports = {
  transliterationSorting
}
