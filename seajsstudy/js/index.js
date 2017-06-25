/**
 * Created by hcq on 2017/6/25.
 */
seajs.config({
    alias: { 'jquery': 'jquery-2.0.0.min' }
});
define(function(require, exports, module) {
    //引用jQuery模块
});
seajs.use("jquery",function (ex) {
    debugger;
    console.log("123");
})