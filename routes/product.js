var express = require('express');
var router = express.Router();

/* 查询产品 */
router.post('/find', function (req, res, next) {
    res.send('All Product');
});
/* 加载一个 */
router.post('/load', function (req, res, next) {
    res.send('Load One Product');
});

/* 创建一个 */
router.post('/create', function (req, res, next) {
    res.send('Create One Product');
});

/* 删除一个 */
router.post('/remove', function (req, res, next) {
    res.send('Remove One Product');
});

/* 保存 */
router.post('/save', function (req, res, next) {
    res.send('Save Product');
});



module.exports = router;
