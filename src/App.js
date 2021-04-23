import "./App.css";

// package
import { Switch, Route } from "react-router-dom";

// Component
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={() => <Home />} />
				<Route path="/user" component={() => <Registration />} />
				<Route path="/message" component={() => <Chat />} />
				<Route component={() => <h1>Page Not Found</h1>} />
			</Switch>
		</div>
	);
}

export default App;
