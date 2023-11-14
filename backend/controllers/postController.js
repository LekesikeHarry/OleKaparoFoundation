import Post from '../models/Post.js'
import fs from 'fs';
import path from 'path'; // Add this line
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const createPost = async (req, res, next) => {
    try {
        const ImagePath = req.file.path;
        const { title, summary, content } = req.body;
        const post = new Post({
            title,
            summary,
            content,
            image: ImagePath,
            author: req.user._id
        })

        const createPost = await post.save()

        res.status(201).json(createPost)
    } catch (error) {
        next(error)
    };

}

const updatePost =  async (req, res, next) => {
    try {
        const postId  = req.params.id;
    //check if it exists
    const post = await Post.findById(postId);

    if(!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    const oldImagePath = post.image;
    const {title, summary, content} = req.body;
    const updateFields = {
        title,
        summary,
        content,
    };

    if(req.file) {
        updateFields.image = req.file.path

        // Delete the old image file
        if (oldImagePath) {
            const currentFile = fileURLToPath(import.meta.url);
            const currentDir = dirname(currentFile);
            const oldImagePathOnServer = path.join(currentDir, '..', oldImagePath);
            fs.unlinkSync(oldImagePathOnServer);
          }
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, updateFields, { new: true });

    res.status(200).json(updatedPost)
    }catch (error) {
        next(error)
    }
}

const getAllPost = async (req, res, next) => {
    const posts = await Post.find({}).populate('author', ['username']);
    res.json(posts);
}

const getPostById = async (req, res, next) => {

    const post = await Post.findById(req.params.id).populate('author', ['username']);

    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error("Post not found")
    }
}

const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            const error = new Error("Post was not found");
            return next(error);
        }

        await post.deleteOne()
        res.json({message: 'Post removed'});
        //     res.json({message: 'Post removed'});
        // if(Post) {
        //     await post.deleteOne()
        //     res.json({message: 'Post removed'});
        // } else {
        //     res.status(404);
        //     throw new Error('Post not found')
        // }
    } catch (error) {
        next(error);
      }
    }
export { createPost, getAllPost, getPostById, deletePost, updatePost }