const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration');

signToken = (user) => {
    return JWT.sign({
        iss: 'find-room',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).send({ error: 'Email is already in used' })
        };

        const newUser = new User({
            email,
            password
        });
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {

        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    secret: async (req, res, next) => {
        console.log('Tengo acceso!!!');
        res.json({ secret: "Resource" });
    }
}