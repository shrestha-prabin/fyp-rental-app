import "./App.css";

// package
import { Switch, Route } from "react-router-dom";

// Component
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import Search from "./Pages/Search";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={() => <Registration />} />
				<Route path="/home" component={() => <Home />} />
				<Route
					path="/singleproduct"
					component={() => <SingleProduct />}
				/>

				<Route path="/search" component={() => <Search />} />
				<Route component={() => <h1>Page Not Found</h1>} />
			</Switch>
		</div>
	);
}

export default App;
