const mongoose=require("mongoose")

//Article Category Schema

const  ArticleCategorySchema=new mongoose.Schema({
  categoryName: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    minlength: 4,
    maxlength: 150,
    unique: true
  
  },
  categoryDescription:{
    type:String,
    trim: true,
    minlength: 5,
    maxlength: 1024,
    
  },
/*  CreatedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
    
  },
  updatedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true,
  
  },*/

},{
  timestamps:true,
});

//Article Category  model

const ArticleCategory=mongoose.model("ArticleCategory",ArticleCategorySchema)

module.exports =ArticleCategory;