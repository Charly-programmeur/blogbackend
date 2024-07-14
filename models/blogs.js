import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  fileUpload: {
    type: String,
    required: true,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  creator: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogPost = mongoose.model("BlogArticle", blogSchema);

export default BlogPost;
