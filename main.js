const { createStore } = Redux

const ADD_PLAYER_ONE_POINT = 'ADD_PLAYER_ONE_POINT'
const ADD_PLAYER_TWO_POINT = 'ADD_PLAYER_TWO_POINT'

const playerOneScoreButton = document.getElementById('add-player-one-point')
const playerTwoScoreButton = document.getElementById('add-player-two-point')

playerOneScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_ONE_POINT
  })
})
playerTwoScoreButton.addEventListener('click', () => {
  store.dispatch({
    type: ADD_PLAYER_TWO_POINT
  })
})

const initialState = {
  player1Score: 0,
  player2Score: 0
}

const scoreReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLAYER_ONE_POINT:
      let new1Score = state.player1Score + 1
      return Object.assign({}, state, {
        player1Score: new1Score
      })
    case ADD_PLAYER_TWO_POINT:
      let new2Score = state.player2Score + 1
      return Object.assign({}, state, {
        player2Score: new2Score
      })
    default:
      return state
  }
}

const store = createStore(scoreReducer)
const playerOneScoreSection = document.getElementById('player-one-score')
const playerTwoScoreSection = document.getElementById('player-two-score')
const render = () => {
  playerOneScoreSection.innerHTML = store.getState().player1Score
  playerTwoScoreSection.innerHTML = store.getState().player2Score
}

render()
store.subscribe(render)
