import React, { useEffect, useState } from "react";
import fs from "fs";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from "./components/Load/index.js";
//import Home from "./home/index";
import './css/App.css';

function App() {
	const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);
	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");
  	const [user, setUser] = useState()

	  const stopLoad = () => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), 3000);
	};
	useEffect(() => {
		stopLoad();
		const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
	  console.log(foundUser)
      setUser(foundUser);
    }
	  }, []);

	  //const loggedInUser = localStorage.getItem("user");
	  //if (loggedInUser) {
	//	return console.log(JSON.stringify(loggedInUser))
	//	// 
	//	  // <div>loggged {loggedInUser} in <button onClick={handleLogout}>logout</button></div>
	  //}

	if (!appLoaded) return <Loader done={startLoadProgress} />;
	const handleSubmit = async e => {
		e.preventDefault();
		const user = { username, password };
		// send the username and password to the server
		// set the state of the user
		const uer_data = {name:user.username, password:user.password}
		setUser(JSON.stringify(uer_data))
		// store the user in localStorage
		localStorage.setItem('user', JSON.stringify(uer_data))
		console.log(uer_data)
	  };
	  const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
	  };

	if (!user)  {
		return  (
			<div className="app">
				<p className="app__mobile-message"> Only available on desktop 😊. </p>
				<Router>
					<div className="app-content">
						<Routes>
							<Route component={Login} />
						</Routes>
					</div>
				</Router>
			</div>
		  );
		}

		return (
			<form onSubmit={handleSubmit}>
			  <label htmlFor="username">Username: </label>
			  <input
				type="text"
				value={username}
				placeholder="enter a username"
				onChange={({ target }) => setUsername(target.value)}
			  />
			  <div>
				<label htmlFor="password">password: </label>
				<input
				  type="password"
				  value={password}
				  placeholder="enter a password"
				  onChange={({ target }) => setPassword(target.value)}
				/>
			  </div>
			  <button type="submit">Login</button>
			</form>
		  );
}

export default App;




    //const handleSubmit = async e => {
	//	e.preventDefault();
	//	const user = { username, password };
	//	const uer_data = {name:user.username, password:user.password}
	//	setUser(JSON.stringify(uer_data))
	//	localStorage.setItem('auth', JSON.stringify(uer_data))
	//	console.log(uer_data)
	//  };