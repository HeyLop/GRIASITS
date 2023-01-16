// ==UserScript==
// @name         GRIASITS
// @namespace    https://trade.rapnet.*/
// @version      0.2.1
// @description  GRIASITS(Get  Request Info And Send Info to Server)
// @author       HeyLop
// @match        https://trade.rapnet.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      AGPL-3.0
// @run-at       context-menu


// ==/UserScript==

(function() {
    'use strict';


    // Your code here...

    //给原有搜索按钮增加ID
    let SearchButton = document.querySelector('.search__footerButton.button__callToAction.button__callToAction--hollow')
    SearchButton.id = 'sbt'

    //生成按钮NewButton //todo 增加form="advancedSearchFilter"属性
    var NewButton = document.createElement('button')
    NewButton.innerText = "搜索并发送"
    NewButton.id = 'nbt'
    NewButton.type = 'submit'
    NewButton.className='search__footerButton button__callToAction button__callToAction--hollow'

    //将生成的按钮NewButton插入到网页里的ul标签中
    var DefaultDiv = document.querySelector('.flexboxgrid2__center-xs.search__footerRow.flexboxgrid2__row>div')
    console.log('GRIASITS-Console-log----------------------------------'+DefaultDiv)
    DefaultDiv.appendChild(NewButton)

    //获取新添加按钮的点击事件
    NewButton.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log("==============click NewButton-================="+e.target.innerText)
    })

})();