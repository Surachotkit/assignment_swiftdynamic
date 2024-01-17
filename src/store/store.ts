import { createStore, combineReducers } from 'redux'
import {notesReducer} from '../reducer/notesReducer'

const rootReducer = combineReducers({
    notes: notesReducer
  });
  
  export const store = createStore(rootReducer);
