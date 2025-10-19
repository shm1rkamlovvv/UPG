import jwt from 'jsonwebtoken';
import { Users } from '../users/userModel.js';
const signToken = id => {
	return jwt.sign({ id }, 'mediapark-firdavs-2025', {
		expiresIn: '30d',
	});
};

export const login = async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (!username || !password) {
		return res.status(400).json({
			status: 'error',
			message: 'Username and password not provided',
		});
	} else {
		const user = await Users.findOne({ username: username }).select(
			'+password'
		);

		if (!user || !user.correctPassword(password, user.password)) {
			res.status(400).json({
				status: 'error',
				message: 'Invalid username or password',
			});
		} else {
			const token = signToken(user._id);
			res.status(200).json({
				status: 'success',
				token,
			});
		}
	}
};
