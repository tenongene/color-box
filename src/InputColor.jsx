import React from 'react';
import './InputColor.css';

const InputColor = ({ boxColor, setBoxColor }) => {
	return (
		<form className="form">
			<input
				type="text"
				id="addColor"
				placeholder="Add color name"
                autoFocus
				required
				value={boxColor}
				onChange={(e) => setBoxColor(e.target.value)}
			/>
		</form>
	);
};

export default InputColor;
