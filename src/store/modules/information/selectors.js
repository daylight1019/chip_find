import fp from 'lodash/fp'

const subSelector = (subName, defaultValue = null) =>
  fp.compose(
    fp.defaultTo(defaultValue),
    fp.get(subName),
    fp.get('information')
  )

export const informationSelector = subSelector('information');