import "./App.css";

// package
import { Switch, Route } from "react-router-dom";

// Component
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import Chat from "./Pages/Chat";
import AdminPanel from "./Pages/AdminPanel";
import UserTable from "./Components/UserTable";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";

function App() {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={() => <Home />} />
				<Route path="/user" component={() => <Registration />} />
				<Route path="/message" component={() => <Chat />} />
				<Route path="/details/:id" component={SingleProduct} />
				<Route path="/adminpanel" component={() => <AdminPanel />} />
				<Route path="/usertable" component={() => <UserTable />} />
				<Route path="/aboutus" component={() => <Aboutus />} />
				<Route path="/contactus" component={() => <Contactus />} />
				<Route component={() => <h1>Page Not Found</h1>} />
			</Switch>
		</div>
	);
}

export default App;
