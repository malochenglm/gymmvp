const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {

    try {
        const { email, name, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            name,
            password: hashedPassword
        });

        res.status(201).json(user);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
    }

};

exports.getUsers = async (req, res) => {

    try {

        const user = await User.findAll();

        res.json(user);
    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};
