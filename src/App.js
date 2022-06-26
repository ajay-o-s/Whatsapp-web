import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from "./components/Load/index.js";
//import Home from "./home/index";
import Login from "./components/Login/index.js"
import './css/App.css';
//import fs from "fs";

function App() {
	const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);
	//const [authjson, setauthjson] = useState()

	const stopLoad = () => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), 3000);
	};

	useEffect(() => {
		stopLoad();
		//const loggedInUser = localStorage.getItem("auth");
    	//if (loggedInUser) {
    	//  const foundUser = JSON.parse(loggedInUser);
		//  console.log(foundUser)
    	//  setUser(foundUser);
    	//}
	  }, []);


	if (!appLoaded) return <Loader done={startLoadProgress} />;

	//if (!user)  {
	//	return  (
	//		<div className="app">
	//			<p className="app__mobile-message"> Only available on desktop 😊. </p>
	//			<Router>
	//				<div className="app-content">
	//					<Routes>
	//						<Route component={Login} />
	//					</Routes>
	//				</div>
	//			</Router>
	//		</div>
	//	  );
	//	}

	return (
		<div className="app">	
		<p className="app__mobile-message"> Only available on desktop. </p> 
			<Router>
				<div className="app-content">
					<Login />
				</div>
			</Router>
		</div>
	);
}

export default App;