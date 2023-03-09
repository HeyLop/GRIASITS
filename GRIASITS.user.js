// ==UserScript==
// @name         CatAndNew
// @namespace    https://trade.rapnet.*/
// @version      0.1
// @description  try to take over the world!
// @author       HeyLop
// @match        https://trade.rapnet.cn/*
// @match        https://trade.rapnet.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      AGPL-3.0
// @run-at       context-menu
// @grant        none
// ==/UserScript==

//context-menu

/**时间获取函数 */
function HM_Time() {
    let date = new Date();
    let year = date.getFullYear(); //获取完整的年份(4位)
    let mon = (date.getMonth() + 1); //获取当前月份(0-11,0代表1月)
    let day = date.getDate(); //获取当前日(1-31)
    let h = date.getHours(); //获取当前小时数(0-23)
    let m = date.getMinutes(); //获取当前分钟数(0-59)
    let s = date.getSeconds(); //获取当前秒数(0-59)
    return year + '/' + mon + '/' + day+ '-' + h+ ':' + m+ ':' + s;
}


//冒泡排序算法
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


(function() {

    'use strict';

    //生成按钮CatButton
    var CatButton = document.createElement('button')
    CatButton.id = "newbut"
    CatButton.innerText = "已看"
    CatButton.style.fontSize = '14px';
    CatButton.style.cursor = "pointer";
    CatButton.style.backgroundColor='#FFFF00' //蓝色

    //生成按钮NewButton
    var NewButton = document.createElement('button')
    NewButton.id = "catbut"
    NewButton.innerText = "新上"
    NewButton.style.fontSize = '14px';
    NewButton.style.cursor = "pointer";
    NewButton.style.backgroundColor='#70DB93' //碧绿色

    //公共数组，存储当前页面刷新后列表
    var current_page = []

    document.querySelectorAll('.table-body__StyledTableBody-sc-ziy12y-0.hRLmcu.tableBody .tableRowWrapper').forEach(element => {

        var current_id = element.firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.firstChild.id
            current_page.push(current_id)
            console.log(current_page)
            // var target = document.getElementById(current_id)
            // target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("wasExpanded")
            var current_input = document.getElementById(current_id)
            current_input.before(CatButton)

        element.addEventListener('click', (e)=>{
            e.preventDefault()
            console.log("点击了")
            


            var id = element.firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.firstChild.id
            current_page.push(id)
            console.log(current_page)
            // var target = document.getElementById(id)
            // console.log(target.parentNode.parentNode.parentNode.parentNode.parentNode)
            // console.log(target.parentElement.parentElement.parentElement.parentElement.parentElement)
            // console.log(target.parentElement.parentElement.parentElement.parentElement.parentElement.classList)
            // target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("wasExpanded-----")
            // console.log(target.parentElement.parentElement.parentElement.parentElement.parentElement.classList)
           

            var storage = window.localStorage;
            var time_now =HM_Time();
            storage.setItem("fly-read-label", id);//存储
            storage.setItem("fly-read-time", time_now);//存储
            console.log(storage.getItem("fly-read-label"));//获取
            //storage.removeItem("name");//删除单项
            //storage.clear();//清除所有数据
            //遍历所有的值localStorage
            //var localKeys = Object.keys(localStorage)
            //for (var i=0;i<localKeys.length;i++) {
            //    console.log(localStorage.getItem(localKeys[i]))
            //}

        } )

        // console.log(element)
        // var id = element.firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.firstChild.id
        // console.log("select-info:"+id)
        // var idiput1 = document.getElementById(id)
        // idiput1.before(CatButton)
        // console.log("add-button"+id)


    });
    /**

    var storage = window.localStorage;
    var time_now =HM_Time();
    storage.setItem("fly-read-label", time_now);//存储
    storage.setItem("fly-read-time", time_now);//存储
    alert(storage.getItem("fly-read-label"));//获取
    //storage.removeItem("name");//删除单项
    //storage.clear();//清除所有数据
    //遍历所有的值localStorage
    var localKeys = Object.keys(localStorage)
    for (var i=0;i<localKeys.length;i++) {
        console.log(localStorage.getItem(localKeys[i]))
    }
    */
})();