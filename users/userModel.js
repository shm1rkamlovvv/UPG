import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	phoneNumber: {
		type: String,
	},
	role: {
		type: ['admin', 'user'],
		default: 'user',
	},
});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next(); // faqat password o‘zgargan bo‘lsa

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return bcrypt.compareSync(candidatePassword, userPassword);
};

export const Users = mongoose.model('Users', userSchema);
