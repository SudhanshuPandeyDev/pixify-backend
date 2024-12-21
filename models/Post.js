const mongoose = require("mongoose");


const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    purchasedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

postSchema.index({ author: 1 });
postSchema.index({ price: 1 });
postSchema.index({ authorId: 1 });
postSchema.index({ purchasedBy: 1 });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
