const users = require("../models/userModel")

//create
exports.createUser = (req, res) => {
    const user = req.body;
    user.push(user);
    res.json(user)
};

// READ
exports.getUsers = (req, res) => {
    res.json(users);
}

// UPDATE
exports.updateUser = (req, res) => {
    const id = req.params.id;
    users(id) = req.body;
    res.json(users[id]);
};

// DELETE
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    user.splice(id, 1)
    res.json("Usuario Apagado")
};