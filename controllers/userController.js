const { User } = require('../models');

class userController {
    static async register(req, res) {
        try {
            const { email, full_name, username, password, profile_image_url, age, phone_number } = req.body

            const data = await User.findAll();
            for (var key in data) {
                if (email == data[key].email) {
                    return res.status(500).json({
                        message: 'This email is already in use '
                    })
                }
            }
            for (var key in data) {
                if (username == data[key].username) {
                    return res.status(500).json({
                        message: 'This username is already in use '
                    })
                }
            }

            const user = await User.create(
                {
                    full_name,
                    email,
                    username,
                    password,
                    profile_image_url,
                    age,
                    phone_number
                }
            );
            return res.status(201).json({
                user: {
                    email: user.dataValues.email,
                    full_name: user.dataValues.full_name,
                    username: user.dataValues.username,
                    profile_image_url: user.dataValues.profile_image_url,
                    age: user.dataValues.age,
                    phone_number: user.dataValues.phone_number
                }
            })
        } catch (error) {
            const errObj = {};
            error.errors.map(error => {
                errObj[error.path] = error.message;
            })
            return res.status(500).json(errObj);
        }
    }
}

module.exports = userController;