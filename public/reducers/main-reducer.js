let mainReducer = Redux.combineReducers({//generates new reducer, we tell it what the keys are of the big state. Combine reducers lets us take multiple reducers and combine
	counter: counterReducer,
	dogs: dogsReducer,
	movies: moviesReducer,
	navigation: navigationReducer
});