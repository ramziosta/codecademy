function submit() {
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  let h = document.getElementById("h");
  let i = document.getElementById("i");
  let j = document.getElementById("j");

  h.innerHTML = fname;
  i.innerHTML = lname;
  j.innerHTML = email;
}

function toggle() {
  let body = document.getElementById("body");
  let color = body.style.backgroundColor;
  console.log(color);

  let dark = document.getElementById("dark");
  let light = document.getElementById("light");

  if (color == "rgb(222, 222, 222)") {
    body.style.backgroundColor = "rgb(52, 51, 51)";
    body.style.color = "white";

    dark.style.display = "none";
    light.style.display = "block";
  } else {
    body.style.backgroundColor = "rgb(222, 222, 222)";
    body.style.color = "rgb(42, 42, 42)";

    light.style.display = "none";
    dark.style.display = "block";
  }
}
const fortunes = ["You Will Win The Lottory!", " Your shall meet your soulmate today!", "Always carry an umbrella!", "Stay away from the dairy today!"]


const showFortune = () => {
    const todaysFortune = fortunes[ Math.floor(Math.random()*4)];
    let fortune = document.getElementById("fortune");
    const paragraph = document.createElement("h3")
    const fortuneText = document.createTextNode(todaysFortune);
    paragraph.appendChild(fortuneText);
    fortune.appendChild(paragraph);

};
