// ==UserScript==
// @name         GRIASITS
// @namespace    https://trade.rapnet.*/
// @version      0.2.1
// @description  GRIASITS(Get  Request Info And Send Info to Server)
// @author       HeyLop
// @match        https://trade.rapnet.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license      AGPL-3.0
// @run-at       context-menu
// @grant        unsafeWindow
// @grant        GM_info


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

function CreateButton() {
    //给原有搜索按钮增加ID
    let SearchButton = document.querySelector('.search__footerButton.button__callToAction.button__callToAction--hollow')
    SearchButton.id = 'sbt'

    //生成按钮NewButton //todo 增加form="advancedSearchFilter"属性
    var NewButton = document.createElement('button')
    NewButton.innerText = "搜索并发送"
    NewButton.id = 'nbt'
    NewButton.type = 'submit'
    NewButton.className = 'search__footerButton button__callToAction button__callToAction--hollow'

    //将生成的按钮NewButton插入到网页里的ul标签中
    var DefaultDiv = document.querySelector('.flexboxgrid2__center-xs.search__footerRow.flexboxgrid2__row>div')
    var nowtime = HM_Time()
    console.log(`Info||${nowtime}||GRIASITS-Console-log----: + ${DefaultDiv}`)
    DefaultDiv.appendChild(NewButton)

    //获取新添加按钮的点击事件
    //NewButton.addEventListener('click', () => {
    //    fetch('http://api.rapnet.com//api/Search/v2')
    //        .then(function (response) {
    //        return response.json();
    //    })
    //        .then(function (myJson) {
    //        console.log(myJson);
    //    });
    //})

    //var xhrinfo = window.XMLHttpRequest
    //console.log(`Info||${yyyy_mm_dd}||XHR-INFO----:' + ${xhrinfo}`)
}



(function () {
    'use strict';
    //插入自定义按钮并给原提交按钮增加ID值
    CreateButton()



})();