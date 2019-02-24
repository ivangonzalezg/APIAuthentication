const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');
const passportSingIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
const bodyValidation = validateBody(schemas.authSchema);

router.route('/signup').post(bodyValidation, UsersController.signUp);
router.route('/signin').post(bodyValidation, passportSingIn, UsersController.signIn);
router.route('/secret').get(passportJWT, UsersController.secret);

module.exports = router;