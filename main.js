var id;
var password;

function getIdPw(){
   id = prompt('ID 입력', '');
   password = prompt(id+'가 사용할 초기 비번 입력', '');
}

function SetNull(){
  localStorage.setItem('id',null);
  localStorage.setItem('password',null);
}

SetNull();

document.querySelector('html').onclick = function() {
  getIdPw();


  if(password === '1234'){
    localStorage.setItem('id',id);
    alert('로그인 되었습니다.');
    var myHeading = document.querySelector('h1');
    myHeading.innerHTML = id + '<br>Homepage';
  
  }else{
    alert('패스워드가 틀렸습니다.');
    getIdPw();
  }
}
