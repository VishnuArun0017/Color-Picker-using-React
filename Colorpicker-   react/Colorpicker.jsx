import React, { useState } from 'react';

function Colorpicker() {
    const [color, setColor] = useState('#FFFFFF');

    function hcc(event) {
        setColor(event.target.value);
    }

    return (
        <div className='colcontainer'>
            <h1>Color Picker</h1>
            <div className="colordisplay" style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label>SELECT:</label>
            <input type="color" value={color} onChange={hcc} />
        </div>);
}

export default Colorpicker;

