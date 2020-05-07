"use strict";
const express = require('express');
var bodyParser = require("body-parser");//为了获取前端参数   需要设置
const path = require('path');
var fs = require("fs");//为了读取本地文件
const history = require('connect-history-api-fallback');//为了history模式下，刷新页面空白问题
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//这句代码需要在express.static上面
app.use(history(
    {
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }
));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/getAllData', (req, res) => {
    var customInfoPath = "./json/customInfo.json";
    var allData = fs.readFileSync(customInfoPath, "utf-8");
    allData === "" ? allData = "[]" : null;//->为了防止我们的JSON文件中什么东西都没有,这样使用JSON.parse("")会报错,我们把空字符串替换成存储空数组的字符串
    allData = JSON.parse(allData);
    try {
        var pageNo = req.body.pageNo;
        var pageSize = req.body.pageSize;
        var pageType = req.body.type;

        var resObj;
        resObj = {};
        var ary = [];
        for (var i = 0; i < allData.length; i++) {
            if (allData[i].type == pageType) {
                ary.push(allData[i]);
            }
            if (pageType == "全部") {
                ary.push(allData[i]);
            }
        }
        var newAry = [];
        if (pageSize !== "all") {
            var count = (pageNo - 1) * pageSize;
            if (ary.length < pageSize) {
                count = 0;
            }
            for (var i = count; i < ary.length; i++) {
                newAry.push(ary[i]);
                if (newAry.length == pageSize) {
                    break;
                }
            }
            var mLength = ary.length;
            var mFirst = parseInt(mLength / pageSize);
            var b;
            if (mLength % pageSize != 0) {
                b = mFirst + 1;
            } else {
                b = mFirst;
            }
            resObj.totalPage = b;
        } else {
            newAry = ary;
        }
        resObj.pageNo = pageNo;
        resObj.pageSise = pageSize;
        resObj.totalCount = newAry.length;
        resObj.data = newAry;
        res.send(resObj);
    } catch (e) {
        res.status(e.status | 500)
        res.render('error')
    }
});
app.use("/api/recruitData", (req, res) => {
    var customInfoPath = "./json/recruitData.json";
    var allData = fs.readFileSync(customInfoPath, "utf-8");
    allData === "" ? allData = "[]" : null;//->为了防止我们的JSON文件中什么东西都没有,这样使用JSON.parse("")会报错,我们把空字符串替换成存储空数组的字符串
    allData = JSON.parse(allData);
    try {
        res.send(allData);
    } catch (e) {
        res.status(e.status | 500)
        res.render('error')
    }
});
app.use("/api/getTechnology", (req, res) => {//核心技术
    var customInfoPath = "./json/technology.json";
    var allData = fs.readFileSync(customInfoPath, "utf-8");
    allData === "" ? allData = "[]" : null;//->为了防止我们的JSON文件中什么东西都没有,这样使用JSON.parse("")会报错,我们把空字符串替换成存储空数组的字符串
    allData = JSON.parse(allData);
    try {
        res.send(allData);
    } catch (e) {
        res.status(e.status | 500);
        res.render('error')
    }
});
app.use("/api/getsolution", (req, res) => {//核心技术
    var customInfoPath = "./json/solution.json";
    var allData = fs.readFileSync(customInfoPath, "utf-8");
    allData === "" ? allData = "[]" : null;//->为了防止我们的JSON文件中什么东西都没有,这样使用JSON.parse("")会报错,我们把空字符串替换成存储空数组的字符串
    allData = JSON.parse(allData);
    try {
        res.send(allData);
    } catch (e) {
        res.status(e.status | 500);
        res.render('error')
    }
});
app.use("/api/getqualifications", (req, res) => {//核心技术
    var customInfoPath = "./json/qualifications.json";
    var allData = fs.readFileSync(customInfoPath, "utf-8");
    allData === "" ? allData = "[]" : null;
    allData = JSON.parse(allData);
    try {
        res.send(allData);
    } catch (e) {
        res.status(e.status | 500);
        res.render('error')
    }
});

app.listen(8888, () => {
    console.log('访问地址为：localhost:8888')
});




