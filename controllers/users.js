module.exports = {
    signUp: async (req, res, next) => {
        console.log('Signup called');
                
    },

    signIn: async (req, res, next) => {
        console.log('Signin called');
    },

    secret: async (req, res, next) => {
        console.log('Secret called');
    }
}