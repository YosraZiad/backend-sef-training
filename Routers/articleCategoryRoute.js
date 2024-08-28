const router =require("express").Router()

const {CreateArticleCategoryCtrl ,
  getAllArticleCategoryCtrl ,
  deletearticleCategoryCtrl, 
  updateArticleCategoryCtrl,
  getArticleCategoryIndexCtrl} =require("../Controllers/articleCategoryCtrl")



// /api/ArticleCategory
router
  .route("/")
  .post(CreateArticleCategoryCtrl)
  .get(getAllArticleCategoryCtrl);

  // /api/ArticleCategory/index
router.route("/index").get(getArticleCategoryIndexCtrl);


  // /api/ArticleCategory/:id
router
.route("/:id")
.delete(deletearticleCategoryCtrl)
.put(updateArticleCategoryCtrl);
  

  module.exports = router;
