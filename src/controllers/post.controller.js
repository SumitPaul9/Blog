import { Post } from "../models/Post.model.js";

export const createPost = async(req, res, next) =>{
    try {
        const result = req.body;
        console.log(result)
        const post = new Post(result);
        console.log(post)
        const savedPost = await post.save();
        res.send(savedPost);
    } catch (error) {
        next(error);
    }
}

export const getPost = async(req, res, next)=>{
    try {
        const result = await Post.find({});
        res.send(result);
        
    } catch (error) {
        next(error);
    }
}

export const updatePost = async(req, res, next)=>{
    try {  
        const result  = req.params;
        console.log()
        const post = await Post.findOneAndUpdate(
            {_id: result.id},
            {$set: { title: req.body.title,
                     body: req.body.body}},
                     { new: true}
            )
            res.send(post);
        
    } catch (error) {
        next(error);
    }
}

export const deletePost = async(req, res, next)=>{
    try {
        const result = req.params;
        const resultDelete = await Post.findOneAndDelete({_id: result.id});
        res.send(resultDelete);
    } catch (error) {
        next(error);
    }
}