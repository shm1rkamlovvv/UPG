import { Users } from './userModel.js';

export const getAllUsers = async (req, res) => {
	try {
		const users = await Users.find();

		res.status(200).json({
			status: 'Barcha foydalanuvchilar',
			data: {
				users,
			},
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			message: err.message,
		});
	}
};
export const getUserById = async (req, res) => {
	try {
		const user = await Users.findById(req.params.id);

		if (!user) {
			return res.status(404).json({ message: 'User topilmadi' });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: 'Server xatosi', error: error.message });
	}
};

export const createUser = async (req, res) => {
	try {
		const newUser = await Users.create(req.body);

		res.status(201).json({
			status: 'Foydalanuvchi yaratildi',
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'error',
			message: err.message,
		});
	}
};
export const updateUser = async (req, res) => {
	try {
		const user = await Users.findByIdAndUpdate({ _id: req.params.id });

		if (!user) {
			return res.status(404).json({
				status: 'error',
				message: 'Foydalanuvchi topilmadi',
			});
		}

		await user.updateOne(req.body);

		res.status(200).json({
			status: 'success',
			message: 'Foydalanuvchi yangilandi',
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			message: err.message,
		});
	}
};
export const deleteUser = async (req, res) => {
	try {
		const user = await Users.findByIdAndDelete({ _id: req.params.id });

		if (!user) {
			return res.status(404).json({
				status: 'error',
				message: 'Foydalanuvchi topilmadi',
			});
		}

		await user.deleteOne(req.body);

		res.status(204).json({
			status: 'success',
			message: "Foydalanuvchi o'chirildi",
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			message: err.message,
		});
	}
};
