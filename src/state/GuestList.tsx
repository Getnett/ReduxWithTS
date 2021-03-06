import React, { useState } from 'react';
const GuestList: React.FC = () => {
	const [name, setName] = useState('');
    const [guests, setGeuests] = useState<string[]>([]);
    const onClick = () =>{
          setName('')
          setGeuests([...guests,name])
    }
	return (
		<div>
			<h3>Guest List</h3>
			<ul>
				{guests.map((guest,key) => (
					<li key={key}>{guest}</li>
				))}
			</ul>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Add Guest</button>
		</div>
	);
};

export default GuestList