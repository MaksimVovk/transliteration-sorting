# transliteration-sorting

Transliteration and sorting list by set field.

## Installation

```
npm i transliteration-sorting --save
```

## Usage

```
const { transliterationSorting } = require('../index')

const users = [
  { id: 1, name: 'Anton' },
  { id: 2, name: 'Ян' },
  { id: 3, name: 'Phil' },
  { id: 4, name: 'Андрей' },
]

const result = transliterationSorting(actual.ru_en, 'name', 'ru_en')

/*
  result = [
    { id: 4, name: 'Андрей', translit: 'Andrey' },
    { id: 1, name: 'Anton', translit: 'Anton' },
    { id: 3, name: 'Phil', translit: 'Phil' },
    { id: 2, name: 'Ян', translit: 'Yan' },
  ]
*/
```