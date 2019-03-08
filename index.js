const translit = require('translit')
const dictionary = require('./dictionary')

function transliterationSorting (list, field, languages = 'en_ru') {
  const vocabruary = getDictionary(languages)
  const tr = translit(vocabruary)

  return list.map(it => ({ ...it, translit: tr(it[field]) })).sort(compare)
}

function getDictionary (langs) {
  switch (langs) {
    case 'en_ru': return dictionary.en_ru
      break
    case 'ru_en': return dictionary.ru_en
      break
    default: return dictionary.en_ru
  }
}

function compare (a, b) {
  if (a.translit < b.translit)
    return -1
  if (a.translit > b.translit)
    return 1
  return 0
}

module.exports = {
  transliterationSorting
}
