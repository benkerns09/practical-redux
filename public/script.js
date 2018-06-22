let store = Redux.createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

renderApp();