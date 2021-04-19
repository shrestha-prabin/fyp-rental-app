import "./App.css";

// package
import { Switch, Route } from "react-router-dom";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

import InputWrapper from "./Components/InputWrapper";
import Registration from "./Pages/Registration";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={() => <Registration />} />
				<Route path="/home" component={() => <h1>Home</h1>} />
				{/* <Route component={() => <h1>Page Not Found</h1>} /> */}
			</Switch>
		</div>
	);
}

export default App;
