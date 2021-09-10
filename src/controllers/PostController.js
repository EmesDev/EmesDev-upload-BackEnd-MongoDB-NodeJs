const Post = require('../models/Post.js');

class PostController {
  async create(req, res) {
    const { originalname: name, size, filename: key } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url: " ",
    });

    //     const post = await Post.Create({
    //     name: req.file.originalname,
    //     size: req.file.size,
    //     key: req.file.filename,
    //     url: ' ',
    // })
    return res.json({ post });
  }
};

module.exports = new PostController();
