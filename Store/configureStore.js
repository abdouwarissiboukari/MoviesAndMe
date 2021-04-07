// Store/configureStore.js

//import { createStore, combineReducers } from 'redux'
import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'
import toggleseeing from './Reducers/SeeingsReducer'
import { persistCombineReducers } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar, toggleseeing}))
