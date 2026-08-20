const express = require("express");
// const {body} =require ('express-validator')
const router = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
router.delete("/users/id", deleteUser);
module.exports = router;
