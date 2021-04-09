$(function(){


    document.onkeyup = fnEnterChk;                                 // 함수의 호출 = 함수의 실행

    function fnEnterChk(){                        // 함수의 정의
        var keycode = window.event.keyCode;
        // alert("code :" + code); 엔터키의 키코드는 13번!
        if (keycode == 13) {
            fnSubmit();
        }
    }
    function fnSubmit() {
        var uID = $("#uID").val().trim();
        var uPW = $("#uPW").val().trim();
        var regExpID = /[^a-z|A-Z|0-9|_]/;      // ID 정규표현식 유효성 검사 조건
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;     // PW 정규표현식 유효성 검사 조건




        if (uID == "" || regExpID.test(uID)) {          // or 조건
            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val("");
        } else if (uPW == "" || regExpPW.test(uPW)) {
            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");

        } else {
                alert("ok!!!");
        }
    }

    $("button").click(function(){
        var uID = $("#uID").val().trim();
        var uPW = $("#uPW").val().trim();
        var regExpID = /[^a-z|A-Z|0-9|_]/;      // ID 정규표현식 유효성 검사 조건
        var regExpPW = /[^a-z|A-Z|0-9|_#]/;     // PW 정규표현식 유효성 검사 조건




        if (uID == "" || regExpID.test(uID)) {          // or 조건
            alert("아이디를 올바르게 입력해주세요.");
            $("#uID").focus().val("");
        } else if (uPW == "" || regExpPW.test(uPW)) {
            alert("비밀번호를 올바르게 입력해주세요.");
            $("#uPW").focus().val("");

        } else {
                alert("ok!!!");
        }

    });


});
