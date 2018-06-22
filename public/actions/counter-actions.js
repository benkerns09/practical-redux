let decrementAction = () => {
	store.dispatch({
		type: "DECREMENT_COUNTER"
	})
}

let incrementAction = () => {
	store.dispatch({
		type: "INCREMENT_COUNTER"
	})
}

//only will be dispatched when somone calls the action