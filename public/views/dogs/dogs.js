const renderDogsApp = () => {
	let { dogs } = store.getState();//conditionally renders app
	let { isLoading, dog, error } = dogs;
	console.log(dogs)
	console.log(dogs.message)
	return `
	<button onclick="dogsAction()">Generate Doggo</button>
			${isLoading
		? `<h1> LOADING... </h1>`
		: error
			? `<h1>${error}</h1>`
			: `<div>
						<img src=${dog} /><br>
				</div>`	
		}

	`
}