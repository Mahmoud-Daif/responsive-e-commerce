
//store register form in localstorage
var user_record=new Array();
var regExpName=new RegExp(/^[a-zA-Z]{3,}\w*/i);
var regExpEmail=new RegExp("^[a-z|\.]+.*\@(gmail|yahoo|)\.(com)$")
var regExpPass=new RegExp(/(?=.{5,})/);

function saveUserData(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let repassword=document.getElementById("repassword").value;
   
    // let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_record.some((v)=>{return v.email==email})){
        alert("This email already exists you can use another email")
    }else if (name==""||!regExpName.test(name)){
        alert("Please enter valide name");
    }else if (email=="" || !regExpEmail.test(email)){
        alert("Please enter your email");
    }
    else if (password==""|| !regExpPass.test(password)){
        alert("Please enter valid password");
    }else if (repassword==""){
        alert("Please confirm your password");
    }
    else{
        user_record.push({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users", JSON.stringify(user_record));
    }
    
}



//check if user exist login else invalide login 
//login page check
//on click on login button
function checkLogin(){
    

    const email=document.getElementById("emailLogin").value;
    const paw=document.getElementById("passwordLogin").value;
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_record.some((v)=>{return v.email==email && v.password==paw})){
// alert("success login")
// location.reload("home.html")
// location.href="home.html";
// document.getElementById("loginId").addEventListener("click",()=>{
    var url = 'home.html?validationResult=true'
    // console.log(us)
    window.open(url,"_self");
    
      
    return false;
// })
    }else{

        alert("invalide login failed");
        return false;
    }

}
;


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// قم بتغيير نص العنصر h2 بناءً على نتيجة الفاليديشن المرسلة كباراميتر في العنوان URL
var validationResult = getQueryParam('validationResult');

var welcomeHeading = document.getElementById('welcome-heading');

console.log(validationResult)
if (validationResult) {
    welcomeHeading.innerText = 'welcome'
    welcomeHeading.setAttribute("href","#")
} 




//validation on registration form//
const form=document.getElementById("form");
const name1=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const repassword=document.getElementById("repassword");


 form.addEventListener("submit",(e)=>{
    e.preventDefault();
     checkInput();
     saveUserData();
   
});
function checkInput(event){
    const nameValue =name1.value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();
    const repasswordValue =repassword.value.trim();
   



    if(nameValue==""|| !regExpName.test(nameValue)){
        setError(name1," Please enter a valid name")
        name1.focus();
    }else{setSuccess(name1)}
    if(emailValue==""|| !regExpEmail.test(emailValue)){
        setError(email," please enter a valid email")
        email.focus();
    }
    // else if(!isMail(emailValue)){
    //      setError(email,"not a valid email");}

    else{
        setSuccess(email);
    }
    if(passwordValue=="" ||!regExpPass.test(passwordValue)){
        setError(password," password enter valid paasword  ")
    }else{setSuccess(password);}
    if(repasswordValue==""){
        setError(password," password can not empty  ")
    }else if(repasswordValue!==passwordValue){
        setError(password," confirm password does not match");
        e.preventDefault();

    }
    else{setSuccess(password);}
}
function setError(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small");
    formControl.className="input-box error";
    small.innerText=message;
}
function setSuccess(input){
    const formControl=input.parentElement;
    formControl.className="input-box success";


}
// function isMail(email){
//     return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// }