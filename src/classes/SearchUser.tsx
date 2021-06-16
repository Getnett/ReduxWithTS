import * as React from 'react';
import { Component } from 'react';

const users = [
	{ name: 'Chala', age: 11 },
	{ name: 'Abebe', age: 14 },
	{ name: 'Mohammed', age: 13 },
];

type User = { name: string; age: number } | undefined;

interface Props {}

interface State {
	user: User;
	name: string;
	age: number;
}

class UserSearch extends Component<Props, State> {
	state = {
		user: undefined,
		name: '',
		age: 0,
	};

	onClick = () => {
		const searchedUser = users.find((user) => user.name === this.state.name);
		this.setState({ user: searchedUser });
	};

	render() {
		const { user, name } = this.state;
		return (
			<div>
				<h1> User Search</h1>
				<input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
				<button onClick={this.onClick}>Find User</button>

				<ul>
					<li>
						{user && user.name} <br /> {user && user.age}
					</li>
				</ul>
			</div>
		);
	}
}

export default UserSearch;
