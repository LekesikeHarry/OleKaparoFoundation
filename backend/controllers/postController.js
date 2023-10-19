import Post from '../models/Post.js'



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

export { createPost }