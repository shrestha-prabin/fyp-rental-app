import React from "react";

import "../css/searchlist.css";
import Card from "./Card";

function SearchList({ title, description }) {
	return (
		<div className="searchlist">
			<div className="text1">Search Results</div>
			<div className="horizontal"></div>
			<div className="search__list">
				<Card title={title} description={description} />
				<Card title={title} description={description} />
				<Card title={title} description={description} />
				<Card title={title} description={description} />
				<Card title={title} description={description} />
				<Card title={title} description={description} />
			</div>
		</div>
	);
}

export default SearchList;
