// userRouter.js
const { Router } = require('express');
const { getAllUsers, register, deleteUser, updateUser } = require("../controllers/userController");
const upload = require('../middleware/multerMiddelware');

const router = Router();

router.get("/users", getAllUsers);
router.post("/users", register);
router.delete("/users/:id", deleteUser); 
router.put("/users/:id", updateUser);    
 
router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

module.exports = router;
