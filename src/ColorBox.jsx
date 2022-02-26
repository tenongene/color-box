import React from 'react';
import './ColorBox.css';

const ColorBox = ({ boxColor, handleColorChange }) => {
	return (
		<div className="colorBox" style={{ backgroundColor: boxColor }} onChange={() => handleColorChange()}>
			<p>{boxColor ? boxColor : 'Empty Value'}</p>
		</div>
	);
};

export default ColorBox;
