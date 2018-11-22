var express = require('express');
var router = express.Router();
var productService = require('../services/product');
/* 查询产品 */
router.post('/find', function (req, res, next) {
    let { queryString, customerId, pageIndex, pageSize } = req.body;
    productService.find(queryString, customerId, pageIndex, pageSize, function (err, docs) {
        if (err) {
            return res.next(err);
        }
        res.send(JSON.stringify({ code: 10000, data: docs }));
    });
});
/* 加载一个 */
router.post('/load', function (req, res, next) {
    let {id}=req.body;
    productService.load(id, function (err, docs) {
        if (err) {
            return res.next(err);
        }
        res.send(JSON.stringify({ code: 10000, data: docs }));
    });
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
