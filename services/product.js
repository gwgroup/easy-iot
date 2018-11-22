var modelProduct = require('../models').modelProduct;
/**
 * 查询
 * @param {String} queryString 
 * @param {String} customer 客户
 * @param {Number} pageIndex 
 * @param {Number} pageSize 
 * @param {Function} cb 
 */
var find = function (queryString, customer, pageIndex, pageSize, cb) {
    let qparams = {};
    if (queryString) {
        let treg = new RegExp(queryString, 'i')
        qparams['$or'] = [
            { name: { '$regex': treg } },
            { desc: { '$regex': treg } }
        ];
    }
    if (customer) {
        qparams.customer = customer;
    }
    modelProduct.find(qparams).populate('customer',['username','mobile','display_name']).skip(pageIndex - 1 * pageSize).limit(pageSize).exec(cb);
};
/**
 * 加载
 * @param {String} id 
 * @param {Function} cb
 */
var load = function (id, cb) {
    modelProduct.findById(id).populate('customer',['username','mobile','display_name']).findOne(cb);
};
module.exports = { find, load };
