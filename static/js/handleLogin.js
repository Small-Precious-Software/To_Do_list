const loginBtn = document.querySelector(".logIn");
const okBtn = document.querySelector(".okBtn");

function handleClickBtn(event) {
    event.preventDefault();
    const modal = document.querySelector("#modal-container");
    modal.classList.toggle("opaque");

    
    modal.classList.toggle("unstaged");

    
    //가입 정보 존재하면 location.href = "main.html"; 메인 페이지로 이동

}

loginBtn.addEventListener("click", handleClickBtn);
okBtn.addEventListener("click", handleClickBtn);