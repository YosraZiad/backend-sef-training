const asyncHandler = require("express-async-handler");
const ArticleCategory = require("../Models/ArticleCategory");
const validateArticleCategory = require("../validation/articleCategoryVaildation");

/**-----------------------------------------------
 * @desc    Create New ArticleCategory
 * @route   /api/ArticleCategory
 * @method  POST
 * @access  (only admin and owner of the ArticleCategory)
 ------------------------------------------------*/

module.exports.CreateArticleCategoryCtrl = asyncHandler(async (req, res) => {
  // 1. Validation for data
  const { error } = validateArticleCategory(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // 2. Create articleCategory and save it to DB
  const articleCategory = await ArticleCategory.create({
    categoryName: req.body.categoryName,
    categoryDescription: req.body.categoryDescription,
  });

  // 3. Send response to the client
  res.status(201).json(articleCategory);
});

/**-----------------------------------------------
 * @desc    view All articleCategory
 * @route  /api/ArticleCategory
 * @method  GET
 * @access  public
 ------------------------------------------------*/
module.exports.getAllArticleCategoryCtrl = asyncHandler(async (req, res) => {
  //1. the articleCategory from DB
  const articleCategory = await ArticleCategory.find();
  // 2. Send response to the client
  res.status(200).json(articleCategory);
});

/**-----------------------------------------------
 * @desc    Get articleCategory index
 * @route   /api/articleCategory/index
 * @method  GET
 * @access  (only admin and owner of the ArticleCategory)
 ------------------------------------------------*/
module.exports.getArticleCategoryIndexCtrl = asyncHandler(async (req, res) => {
  const articleCategory = await ArticleCategory.countDocuments();
  res.status(200).json(articleCategory);
});

/**-----------------------------------------------
 * @desc    Update ArticleCategory
 * @route   /api/ArticleCategory:id
 * @method  PUT
 * @access  private (only admin and owner of the ArticleCategory)
 ------------------------------------------------*/
module.exports.updateArticleCategoryCtrl = asyncHandler(async (req, res) => {
  // 1. Validation
  const { error } = validateArticleCategory(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // 2. Get the articleCategory from DB and check if articleCategory exist
  const articleCategory = await ArticleCategory.findById(req.params.id);
  if (!articleCategory) {
    return res.status(404).json({ message: "ArticleCategory not found" });
  }

  // 3. Update articleCategory
  const updatedArticleCategory = await ArticleCategory.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        categoryName: req.body.categoryName,
        categoryDescription: req.body.categoryDescription,
      },
    },
    { new: true }
  );

  // 4. Send response to the client
  res.status(200).json(updatedArticleCategory);
});

/**-----------------------------------------------
 * @desc    Delete articleCategory
 * @route   /api/ArticleCategory:id
 * @method  DELETE
 * @access  private (only admin and owner of the ArticleCategory)
 ------------------------------------------------*/
module.exports.deletearticleCategoryCtrl = asyncHandler(async (req, res) => {
  // 1. Get the articleCategory from DB and check if articleCategory exist

  const articleCategory = await ArticleCategory.findById(req.params.id);
  if (!articleCategory) {
    return res.status(404).json({ message: "ArticleCategory not found" });
  }

  // 2. delete articleCategory
  await ArticleCategory.findByIdAndDelete(req.params.id);

  // 3. Send response to the client
  res.status(200).json({
    message: "articleCategory has been deleted successfully",
  });
});
