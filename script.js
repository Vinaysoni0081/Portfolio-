
document.getElementById("switch-theme").addEventListener('click',function(){
    document.body.classList.toggle("dark-theme");
})

function showadminlogin(){
    document.getElementById("admin").style.display="block";
}

// scroll button 
/*function scrolltotop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

function scrolltodown()
{
    window.scrollTo({
        top:1000,
        behavior:'smooth'
    });
}*/



//contact me
document.getElementById("contact").addEventListener('submit',function(e){
    e.preventDefault();
    
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let message=document.getElementById("msg").value.trim();
   
    if(name && email && message){
    let dummydatabase=JSON.parse(localStorage.getItem("tempdb"))||[];
    dummydatabase.push({
            name,
            email,
            message,
             date : new Date().toLocaleString() 
        })
        localStorage.setItem("tempdb",JSON.stringify(dummydatabase));
        alert("message submited sucessfully!");
        this.reset();
}
else{
    alert("please fill all fields");
}
});
//admin login 
document.getElementById("admin").addEventListener("submit", function(e)
{
    e.preventDefault();
    let username=document.getElementById("usr").value.trim();
    let password=document.getElementById("pas").value.trim();
    
    if(password === "password"&& username === "vinay")
    {
      alert("login successfully!!");
document.getElementById("admin").parentElement.style.display="none";
document.getElementById("user").style.display="block";
displayusermessages();
    }
    else{
        alert("enter correct credentials!!");
    }

});


//user-responses
function displayusermessages(){
   
    
    let  usersection=document.getElementById("user-section");
    
    usersection.innerHTML="";
     
    let dummydatabase=JSON.parse(localStorage.getItem("tempdb"))||[];
    
    if(dummydatabase.length === 0)
     {
        usersection.innerHTML="<p>no user responses yet</p>";
        return;
     }
     dummydatabase.forEach(data => {
        const div = document.createElement("div");
        div.innerHTML=`
        <p><strong>Name:</strong>${data.name}</p>
        <p><strong>Email:</strong>${data.email}</p>
        <p><strong>Message:</strong>${data.message}</p>
        <p><strong>Date:</strong>${data.date}</p>
        <hr>
        `;
        
        usersection.appendChild(div);
     });
}

   
