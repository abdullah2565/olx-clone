import { combineReducers } from 'redux'
import Likeslice from './Likeslice'
const rootReducer = combineReducers({

    cartReducer: Likeslice.reducer
})

export default rootReducer