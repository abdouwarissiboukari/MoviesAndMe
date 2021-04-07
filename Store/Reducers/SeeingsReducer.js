// Store/Reducers/SeeingsReducer.js

const initialState = { seeingsFilm: [] }

function toggleseeing(state= initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEEING':
      const seeingFilmIndex = state.seeingsFilm.findIndex(item => item.id === action.value.id)
      if (seeingFilmIndex !== -1) {
        nextState = {
          ...state,
          seeingsFilm: state.seeingsFilm.filter( (item, index) => index !== seeingFilmIndex)
        }
      }
      else {
        nextState = {
          ...state,
          seeingsFilm: [...state.seeingsFilm, action.value]
        }
      }
      return nextState || State
  default:
    return state
  }
}

export default toggleseeing
