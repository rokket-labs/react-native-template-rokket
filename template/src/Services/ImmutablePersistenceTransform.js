import R from 'ramda'
import Immutable from 'seamless-immutable'

// is this object already Immutable?
const isImmutable = R.has('asMutable')

// change this Immutable object into a JS object
const convertToJs = state => state.asMutable({ deep: true })

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs)

const hasFetching = R.has('fetching')
const setFetchingToFalse = raw => R.mergeRight(raw, { fetching: false })
const ignoredFetching = R.when(hasFetching, setFetchingToFalse)

// convert this JS object into an Immutable object
const toImmutable = R.compose(Immutable, ignoredFetching)

// the transform interface that redux-persist is expecting
export default {
  out: state => {
    return toImmutable(state)
  },
  in: raw => {
    // console.log({ storing: raw })
    return fromImmutable(raw)
  },
}
