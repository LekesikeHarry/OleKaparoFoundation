import express from "express";
import { createPost, deletePost, getAllPost, getPostById } from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the relative path
  },
  filename: function (req, file, cb) {
    // Generate a unique filename based on the current timestamp and original file name
    const uniqueFilename = "UploadedOn" + Date.now() + "fileOrigName" + file.originalname;
    cb(null, uniqueFilename);
  }
});

const upload = multer({ storage: storage });
const router = express.Router();

router.route("/").post(protect, upload.single('image'), createPost).get(getAllPost);
router.route('/:id').get(getPostById)
                    .delete(protect, deletePost)


export default router;
