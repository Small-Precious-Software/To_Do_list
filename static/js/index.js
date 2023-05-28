$(function(){function c(){p();var e=h();
    var r=0;var u=false;l.empty();while(!u){if(s[r]==e[0].weekday){u=true}else{l.append('<div class="blank"></div>');r++}}
    for(var c=0;c<42-r;c++){if(c>=e.length){l.append('<div class="blank"></div>')}
    else{var v=e[c].day;var m=g(new Date(t,n-1,v))?'<div class="today">':"<div>";l.append(m+""+v+"</div>")}}var y=o[n-1];
    a.css("background-color",y).find("h1").text(i[n-1]+" "+t);f.find("div").css("color",y);l.find(".today").css("background-color",y);
    d()}function h(){var e=[];for(var r=1;r<v(t,n)+1;r++){e.push({day:r,weekday:s[m(t,n,r)]})}return e}function p(){f.empty();
    for(var e=0;e<7;e++){f.append("<div>"+s[e].substring(0,3)+"</div>")}}function d(){var t;var n=$("#calendar").css("width",e+"px");
    n.find(t="#calendar_weekdays, #calendar_content").css("width",e+"px").find("div").css({width:e/7+"px",height:e/7+"px","line-height":e/7+"px"});
    n.find("#calendar_header").css({height:e*(1/7)+"px"}).find('i[class^="icon-chevron"]').css("line-height",e*(1/7)+"px")}function v(e,t){return(new Date(e,t,0)).getDate()}function m(e,t,n){return(new Date(e,t-1,n)).getDay()}function g(e){return y(new Date)==y(e)}function y(e){return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()}function b(){var e=new Date;
    t=e.getFullYear();n=e.getMonth()+1}var e=480;var t=2013;var n=9;
    var r=[];
    var o = [];
    var i=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var u=$("#calendar");var a=u.find("#calendar_header");var f=u.find("#calendar_weekdays");var l=u.find("#calendar_content");b();c();a.find('i[class^="icon-chevron"]').on("click",function(){var e=$(this);var r=function(e){n=e=="next"?n+1:n-1;if(n<1){n=12;t--}else if(n>12){n=1;t++}c()};if(e.attr("class").indexOf("left")!=-1){r("previous")}else{r("next")}})})


//카테고리 추가
function addCategory(){
    var category = prompt("카테고리를 추가해주세요!");
    if(category==''){     /*''도 가능 */
        alert('내용을 입력하세요!');
    }else if(category==null){
        return null;
    
    }else{
 
    let list = document.createElement("li");
    let del = document.createElement('IMG');
    list.innerHTML = category;
    result.appendChild(list); //추가된 할일에 할일 리스트 추가하기
    list.appendChild(del);    //할일 리스트 추가시 삭제버튼도 추가    
    del.setAttribute("src", "./../static/img/삭제 아이콘.png");     //삭제버튼에 들어갈 'x'자 문자
    result.style.float="left";
    del.style.fontSize = "10px";
    list.style.color = "#9D4D4D";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteCategory); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.style.position='relative';
    }
}
//카테고리 삭제시
function deleteCategory(e){ //삭제 버튼(x) 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
    //db에 있는 할 일 삭제작업도 추가로 해야할 듯
}

function star(){
   //즐겨찾기 on

   //즐겨찾기 off
}


function calender(){
    
    //rightbox display none -> calender none 지우기
}
