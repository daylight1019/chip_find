import fp from 'lodash/fp'
import set from 'lodash/set'
import { handleActions } from 'redux-actions'
import {LOAD_INFORMATION_SUCCESS} from './types'

const init = {
  informationData: 'initial data'
}

export default handleActions({
  [LOAD_INFORMATION_SUCCESS]:(state, {payload}) => fp.set('informationData', payload)(state)
}, init)
