let store = Redux.createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//below is the function that renders the entire application
const renderApp = () => {
	let navBar = document.getElementById("nav-bar");
	let mainContent = document.getElementById("main-content");

	let state = store.getState();

	navBar.innerHTML = renderNavBar();
	mainContent.innerHTML = renderMainContent();
}

store.subscribe(()=>{
	renderApp();//notice render app is the only thing that was called
});
//what we are saying here is ok, we have the state, we know everything, now we just make sure everything changes when actions go off
renderApp();