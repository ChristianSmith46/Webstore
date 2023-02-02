const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'testsecret';
const expiration = '30d';

module.exports = {
    authMiddleware: function (req, res, next) {
        let token;

        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ').pop().trim();
        }

        if (!token) {
            res.status(401).json({ error: "Invalid Token" });
            throw new Error('Not authorized, no token')
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch (error) {
            console.error(error);
            res.status(401).json({ error: "Invalid Token" });
            throw new Error('Not authorized, token failed');
        }

        next();
    },
    signToken: function ({ first_name, email, id }) {
        const payload = { first_name, email, id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};
