import React, { useState } from "react";

const SearchBar = props => {
	const [term, setTerm] = useState("");

	const onFormSubmit = e => {
		e.preventDefault();
		props.onSubmit(term);
	};

	return (
		<>
			<div className="ui segment">
				<form onSubmit={onFormSubmit} className=" ui form">
					<div className="field">
						<label>Recipe Search</label>
						<br />
						<input
							type="text"
							value={term}
							onChange={e => setTerm(e.target.value)}
							placeholder="What do you want to cook today?"
							className="searchBar"
						/>
					</div>
				</form>
			</div>
			<style jsx>
				{`
					.searchBar {
						width: 50%;
					}
				`}
			</style>
		</>
	);
};

export default SearchBar;
