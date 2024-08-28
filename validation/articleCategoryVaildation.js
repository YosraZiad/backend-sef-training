const ArticleCategory = require("../Models/ArticleCategory");
const Joi = require("joi");

// Validate Create Article Category

function validateArticleCategory(ArticleCategory) {
  const schema = Joi.object({
    categoryName: Joi.string().min(4).max(150).required(),
    categoryDescription: Joi.string().min(4).max(150).required(),
  });
  return schema.validate(ArticleCategory);
}

module.exports = validateArticleCategory;
