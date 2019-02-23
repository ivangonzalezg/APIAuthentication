const User = require('../models/user');

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;          

        const foundUser = await User.findOne({ email });
        if (foundUser) { 
            return res.status(403).send({ error: 'Email is already in used'})
        };

        const newUser = new User({
            email,
            password
        });
        await newUser.save();
        res.json({ user: 'Created'})
    },

    signIn: async (req, res, next) => {
        console.log('Signin called');
    },

    secret: async (req, res, next) => {
        console.log('Secret called');
    }
}