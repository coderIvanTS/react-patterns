import React, { useState, FormEvent, ChangeEvent } from 'react';
import './style.scss';

interface FormProps {
	onUserAddition: (user: any) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

export const Form: React.FC<FormProps> = ({ onUserAddition }) => {
	const [username, setUsername] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [website, setWebsite] = useState<string>('');

	const handleFieldUpdate = (event: ChangeEvent<HTMLInputElement>) => {
		switch (event.target.name) {
			case "username":
				setUsername(event.target.value);
				break;
			case "phone":
				setPhone(event.target.value);
				break;
			case "website":
				setWebsite(event.target.value);
				break;
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify({
				username,
				phone,
				website,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((user) => onUserAddition(user));
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<div>
				<label>
					Username:
					<input type="text" name="username" value={username} onChange={handleFieldUpdate} />
				</label>
			</div>
			<div>
				<label>
					Phone:
					<input type="text" name="phone" value={phone} onChange={handleFieldUpdate} />
				</label>
			</div>
			<div>
				<label>
					Website:
					<input type="email" name="website" value={website} onChange={handleFieldUpdate} />
				</label>
			</div>
			<button className='button' type="submit">Submit</button>
		</form>
	);
};