import './App.css';
import ColorBox from './ColorBox';
import InputColor from './InputColor';
import { useState } from 'react';

function App() {
	const [boxColor, setBoxColor] = useState('Empty Value');

	const handleColorChange = () => {
		const updateColor = boxColor.slice();
		setBoxColor(updateColor);
	};

	return (
		<div className="App">
			{/*  */}
			<ColorBox boxColor={boxColor} setBoxColor={setBoxColor} handleColorChange={handleColorChange} />

			<InputColor newColor={boxColor} setBoxColor={setBoxColor} />
		</div>
	);
}

export default App;
