import React from "react";

import "../css/searchlist.css";
import Card from "./Card";

function SearchList({ data }) {
	return (
		<div className="searchlist">
			<div className="text1">Search Results</div>
			<div className="horizontal"></div>
			<div className="search__list">
				{
					data.map((item) => {
						return (
							<Card
								id={item.id}
								img={item.image}
								title={item.name}
								price={item.price}
								location={item.location}
								description={item.description}
							/>
						);
					})
				}
			</div>
		</div>
	);
}

export default SearchList;
