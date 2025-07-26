const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  createUservalidator: createUserValidator,
  updateUserValidator,
} = require("../validators/userValidator");
const validate = require("../middleware/validate");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", createUserValidator, validate, userController.createUser);
router.put("/users/:id", updateUserValidator, validate, userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
