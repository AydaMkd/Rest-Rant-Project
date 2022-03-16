const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    //rant: { type: Boolean, default: false },
    stars: { type: Number, required: false },
    content: { type: String, default: '' }
   
})
commentSchema.virtual("comments",{
    ref: "Comment",
    localField:"_id",
    foreignField: "comments"
}
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports= Comment