/* eslint-disable */

$(function(){


    $("button.tabBtn").click(function(){

        /* 탭버튼 CSS 적용 시작 */
        $("button.tabBtn").css({
            "border": "1px solid #aaa",
            "background-color": "#eee"
        });

        $(this).css({
            "border-bottom-color": "#fff",
            "background-color": "#fff"
        });
        /* 탭버튼 CSS 적용 끝 */


        /* 탭버튼에 일치하는 내용 CSS 적용 시작 */
        $("div.tabContents").css({"display": "none"});

        /* 탭버튼 클릭했을 경우 클릭한 버튼의 data-link
        속성의 속성값을 가져와서 저장함*/
        var dataLink = $(this).attr("data-link");
        $("#" + dataLink).css({"display": "block"});
        /* 탭버튼에 일치하는 내용 CSS 적용 끝 */




    });


});
