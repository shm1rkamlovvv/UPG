import express from 'express';
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from './userController.js'; // kichik harf bilan

export const usersRouter = express.Router();

usersRouter.get('/', getAllUsers); // Barcha foydalanuvchilarni olish
usersRouter.get('/:id', getUserById);
usersRouter.post('/', createUser); // Foydalanuvchi yaratish
usersRouter.patch('/:id', updateUser); // Foydalanuvchini yangilash
usersRouter.delete('/:id', deleteUser); // Foydalanuvchini o'chirish
