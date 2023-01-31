// ==UserScript==
// @name         CatAndNew
// @namespace    https://trade.rapnet.*/
// @version      0.1
// @description  try to take over the world!
// @author       HeyLop
// @match        https://trade.rapnet.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      AGPL-3.0
// @run-at       context-menu
// @grant        unsafeWindow
// ==/UserScript==

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

    // //添加NewButton
    // var idiput = document.getElementById('147687448checkbox')
    // idiput.after(NewButton )

    // //添加CatButton
    // var idiput1 = document.getElementById('147687447checkbox')
    // idiput1.after(CatButton)

    //查找搜索结果的table列表
     
    document.querySelectorAll('.table-body__StyledTableBody-sc-ziy12y-0.hRLmcu.tableBody .tableRowWrapper').forEach(element => {

        element.addEventListener('click', (e)=>{
            e.preventDefault()
            console.log("点击了")
              var id = element.firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.firstChild.id
        console.log("select-info:"+id)
        var idiput1 = document.getElementById(id)
        idiput1.before(CatButton)
        console.log("add-button"+id)
        } )
        // console.log(element)
        // var id = element.firstElementChild.firstElementChild.firstElementChild.firstChild.firstElementChild.firstChild.id
        // console.log("select-info:"+id)
        // var idiput1 = document.getElementById(id)
        // idiput1.before(CatButton)
        // console.log("add-button"+id)


    });

})();