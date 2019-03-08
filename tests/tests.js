const actual = {
  ru_en: [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Ян' },
    { id: 3, name: 'Phil' },
    { id: 4, name: 'Андрей' },
  ],
  en_ru: [
    { id: 1, name: 'Anton', },
    { id: 2, name: 'Ян', },
    { id: 3, name: 'Phil', },
    { id: 4, name: 'Андрей', },
  ]
}

const expected = {
  ru_en: [
    { id: 4, name: 'Андрей', translit: 'Andrey' },
    { id: 1, name: 'Anton', translit: 'Anton' },
    { id: 3, name: 'Phil', translit: 'Phil' },
    { id: 2, name: 'Ян', translit: 'Yan' }
  ],
  en_ru: [
    { id: 4, name: 'Андрей', translit: 'Андрей' },
    { id: 1, name: 'Anton', translit: 'Антон' },
    { id: 3, name: 'Phil', translit: 'Фил' },
    { id: 2, name: 'Ян', translit: 'Ян' },
  ]
}

module.exports = {
  actual,
  expected,
}