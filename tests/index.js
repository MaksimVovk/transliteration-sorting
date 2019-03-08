const { describe } = require('ava-spec')
const { transliterationSorting } = require('../index')
const { actual, expected } = require('./tests')

describe('transliterationSorting', it => {
  it('ru_en', t => {
    const expectedList = expected.ru_en
    const actualList = transliterationSorting(actual.ru_en, 'name', 'ru_en')

    t.deepEqual(actualList, expectedList)
  })

  it('en_ru', t => {
    const expectedList = expected.en_ru
    const actualList = transliterationSorting(actual.en_ru, 'name', 'en_ru')

    t.deepEqual(actualList, expectedList)
  })
})
