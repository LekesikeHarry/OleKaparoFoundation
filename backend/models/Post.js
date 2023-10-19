import { Schema, model } from "mongoose"

const PostSchema = new Schema (
    {
        title: { type: String, required: true },
        summary: { type: String, required: true },
        content: { type: String, required: true },
        image: {type: String},
        author: { type: Schema.Types.ObjectId, ref:'User' },
    }, {
        timestamps: true,
    }
);

const Post = model("Post", PostSchema)
export default Post;