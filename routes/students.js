const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/index");

router.get("/", StudentController.getAllStudents);

router.get("/:id", StudentController.getSingleStudent);

router.post("/", StudentController.createStudent);

router.delete("/:id", StudentController.deleteStudent);

router.put("/:id", StudentController.updateStudent);

module.exports = router;
