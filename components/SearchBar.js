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
						<label className="label">Recipe Search</label>
						<input
							type="text"
							value={term}
							onChange={e => setTerm(e.target.value)}
							placeholder={props.placeholder}
							className="searchBar input"
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchBar;
