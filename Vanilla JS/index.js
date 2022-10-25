function submit() {
    let fname =  document.getElementById("firstName").value;
    let lname =  document.getElementById("lastName").value;
    let email =  document.getElementById("email").value;

    let h = 	   document.getElementById("h");
    let i = 	   document.getElementById("i");
    let j = 	   document.getElementById("j");

   
    h.innerHTML = fname;
    i.innerHTML = lname;
    j.innerHTML = email;
   }

   function toggle(){
    
    let body = document.getElementById("body");
    let color = body.style.backgroundColor;
    console.log(color);

    let dark = 	   document.getElementById("dark");
    let light = 	   document.getElementById("light");


    if(color == "lightgrey"){
    body.style.backgroundColor = "grey";
    body.style.color = "white";

    dark.style.display="none"
    light.style.display="block"
   }else{
    body.style.backgroundColor = "lightgrey";
    body.style.color = "black";

    light.style.display="none"
    dark.style.display="block"
   }
}