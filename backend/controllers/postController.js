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
export { createPost, getAllPost, getPostById, deletePost }