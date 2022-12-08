
const form=document.getElementById("form");
const UserName=document.getElementsByName("UserName")[0];
const Password=document.getElementsByName("Password")[0];


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(UserName.value=="" || Password.value=="")
    {
    alert("Please Enter UserName and Password : ");
    }
    else
    {
    console.log("Logined...");
    }   
});

