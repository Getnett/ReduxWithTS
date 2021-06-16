import React, { useState } from 'react';

const users = [
	{ name: 'Chala', age: 11 },
	{ name: 'Abebe', age: 14 },
	{ name: 'Mohammed', age: 13 },
];
type User = { name: string; age: number } | undefined;

const UserSearch = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<User>();
	const onClick = () => {
		const searchedUser = users.find((user) => user.name === name);
		setUser(searchedUser);
	};
	return (
		<div>
			<h1> User Search</h1>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>

			<ul>
				<li>
					{user && user.name} <br /> {user && user.age}
				</li>
			</ul>
		</div>
	);
};

export default UserSearch;
