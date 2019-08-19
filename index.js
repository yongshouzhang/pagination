
import test from './pagination.less';

/*
*@container: 必须为原生dom 对象
*/
function pagination(container) {
    var fn = Object.prototype.toString;
    var isNode = function (obj) {
        return fn.call(obj) === fn.call(document.body);
    }, isObject = function (obj) {
        return fn.call(obj) === fn.call({});
    };

    var addClass = function (ele, className) {
        if (hasClass(ele, className)) {
            return false;
        }
        ele.className = ele.className.split(" ")
            .filter(function (obj) {
                return obj.trim();
            }).concat([className]).join(" ");
    },
        removeClass = function (ele, className) {
            var reg = new RegExp("\\b" + className + "\\b", 'i');
            ele.className = ele.className.replace(reg, "");
        },
        hasClass = function (ele, className) {
            return new RegExp("\\b" + className + "\\b", 'i').test(ele.className);
        };
        

    var div = document.createElement("div");
    addClass(div, "_pagination_");

    var options = {};

    div.style.display="none";
    div.addEventListener("click", function (evt) {
        var ele = evt.target;
        if (hasClass(ele, "_first_")) {
            if(options.pi===1) return false;
            options.cb(1, options.ps);
            return false;
        }
        if (hasClass(ele, "_last_")) {
            if(options.pi===options.pageCount) 
            return false;
            options.cb(options.pageCount, options.ps);
            return false;
        }
        if (hasClass(ele, "_prev_")) {
            if(options.pi===1) return false;
            options.cb(options.pi - 1, options.ps);
            return false;
        }
        if (hasClass(ele, "_next_")) {
            if(options.pi===options.pageCount) 
            return false;
            options.cb(options.pi + 1, options.ps);
            return false;
        }
        if (hasClass(ele, "_prev_five_")) {
            if(options.pi===1) return false;
            options.cb(options.begin-1,options.ps);
            return false;
        }
        if (hasClass(ele, "_next_five_")) {
            if(options.pi===options.pageCount) 
            return false;
            options.cb(options.end+1,options.ps);
            return false;
        }
        if(hasClass(ele,"_num_")){
           if(hasClass(ele,"_current_")) {
               return false;
           }
           if(isNaN(ele.innerText)){
               return false;
           }
           options.cb(+ele.innerText,options.ps);
           return false;
        }
    },false);

    var txtList = ["<<", "<","", ">", ">>"];
    ["_first_", "_prev_", "_body_", "_next_", "_last_"].map(function (obj, index) {
        let ele = document.createElement((index === 2 ? "ul" : "span"));
        ele.innerText = txtList[index];
        addClass(ele, obj);
        return ele;
    }).forEach(function (obj) {
        div.appendChild(obj);
    });

    container.appendChild(div);

    var showNum = 5;
    var ul = div.getElementsByTagName("ul")[0];

    this.update = function (param) {
        ul.innerHTML='';
        if (!isObject(param)) {
            throw (" update 参数应为对象{pi:[number],ps:[number],cb:[function],count:[number]}");
        }

        var pi = param.pi || 1, ps = param.ps || 10, count = param.count || 0, cb = param.cb || function () { };
        var pageCount = Math.ceil(count / ps);
        // 小于2页不渲染
        if (pageCount < 2){
            div.style.display = "none";
            return false;
        }


        pi = pi > pageCount ? pageCount : pi;
        var eleList = [];

        var t = Math.ceil(pi / showNum);

        var begin = (t - 1) * showNum + 1, end = t * showNum;
        end = end > pageCount ? pageCount : end;

        options.pi = pi;
        options.ps = ps;
        options.cb = cb;
        options.pageCount = pageCount;
        options.begin = begin;
        options.end = end;
        

        for (let i = begin; i <= end; i++) {
            let ele = document.createElement("li");
            ele.innerText = i;
            addClass(ele,"_num_");
            if (i === pi) {
                addClass(ele, "_current_");
            }
            eleList.push(ele);
        }

        if (begin !== 1) {
            let prevFive = document.createElement("li");
            prevFive.innerText = "...";
            addClass(prevFive, "_prev_five_");
            eleList.unshift(prevFive);
        }

        if (end !== pageCount) {
            let nextFive = document.createElement("li");
            nextFive.innerText = "...";
            addClass(nextFive, "_next_five_");
            eleList.push(nextFive);
        }

        eleList.forEach(function(obj){
            ul.appendChild(obj);
        });
        div.style.display="inline-block";
    };

}

export {pagination}