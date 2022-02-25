import React from 'react';
import './InputColor.css';

const InputColor = () => {
	return (
		<form className="form">
			<input type="text" autoFocus id="addColor" placeholder="Add color name" required />
		</form>
	);
};

export default InputColor;
