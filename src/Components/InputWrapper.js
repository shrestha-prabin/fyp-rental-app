import React from "react";

import "../css/inputwrapper.css";

function InputWrapper({
	label,
	error,
	prefixIcon,
	suffixIcon,
	onFocus,
	type,
	value,
	onChangeText,
}) {
	return (
		<div className="inputwrapper">
			<div className="row" style={{marginLeft: 4}}>
				<div className="label">{label}</div>
				<div className="error">{error}</div>
			</div>
			<div className="input">
				<div className="prefix__icon">{prefixIcon}</div>
				<input
					type={type}
					onFocus={onFocus}
					placeholder={`Enter ${label}`}
					value={value}
					onChange={onChangeText}
				/>
				<div className="suffix__icon">{suffixIcon}</div>
			</div>
		</div>
	);
}

export default InputWrapper;
