/*
Into to the FETCH API 

        - The Fetch API provides a fetch() method defined on the window object.
         This method used to send requests and returns a Promise that retrieved from the response.
          A Promise object represents a value that may not be available now but, will be resolved in the future.
           It allows us to write asynchronous code.

*/



// get our button

let button = document.getElementById("button");

//add an eventlistener to our button

button.addEventListener('click', async() => {


    // get the value from our user inut field (ie the text box)
    let inputValue = document.getElementById("field").value;


    // send a request to the pokemon api
    // to do that we have to wrap our code in a try catch


    try {

        // this fetch method implicitly returns a Promise
        const raw_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);

        if(!raw_response.ok){
            // throw new Error(raw_response.status);
            alert(`Error Status: ${raw_response.status}`)
        }

        const json_data = await raw_response.json();

        console.log(json_data);

            // here we are calling our 'addPokemonToPage' helper function
            //this helper funtion is specifically to manipuate our DOM
            // and passin in the 'json-data' we receieve from our api call
            addPokemonToPage(json_data);



    }catch(error){
        console.log(error);

    }

}

)

function addPokemonToPage(json_data){

    // this is where we will manipulate our DOM

    var input = document.getElementById("input");
    var pokeName = document.createElement('h2');

    ///note: append vs appendChild

    pokeName.innerHTML = `Name: ${json_data.name}`
    input.append(pokeName);

    var br = document.createElement('br');
    input.append(br);

    var pokeId = document.createElement('h3');
    pokeId.innerHTML = `ID: ${json_data.id}`;
    input.append(pokeId);
    input.append(br);

    var image = document.createElement('img');
    image.setAttribute('src', json_data.sprites.front_default);
    image.setAttribute('height',"300");
    image.setAttribute('width',"300")

    input.append(image);
    input.append(br);

    var line = document.createElement('hr');
    input.append(line);
}

let div1 = document.getElementById("one");
let div2 = document.getElementById("two");
let div3 = document.getElementById("three");

let li1 = document.getElementById("tab1");
let li2 = document.getElementById("tab2");
let li3 = document.getElementById("tab3");





let tab1 = document.getElementById("tab1");

tab1.addEventListener('click', function(){
    div1.style.display === "block"? div1.style.display = "none": div1.style.display = "block";

    li1.style.backgroundColor === "green" ? li1.style.backgroundColor = "white" : li1.style.backgroundColor = "green";
    
    if(div3.style.display === "block" || div2.style.display === "block"){
    div3.style.display = "none";
    div2.style.display = "none";
      }
   
      if(li3.style.backgroundColor === "green"){
        li3.style.backgroundColor = "white";
          }
        if(li2.style.backgroundColor === "green"){
            li2.style.backgroundColor = "white";
        }
    console.log("clicked");
});

let tab2 = document.getElementById("tab2");

tab2.addEventListener("click",function(){
    div2.style.display === "block"? div2.style.display = "none": div2.style.display = "block";
    li2.style.backgroundColor === "green" ? li2.style.backgroundColor = "white" : li2.style.backgroundColor = "green";

    if(div1.style.display === "block"){
    div1.style.display = "none";
      }
    if(div3.style.display === "block"){
        div3.style.display = "none";
    }

    if(li1.style.backgroundColor === "green"){
    li1.style.backgroundColor = "white";
      }
    if(li3.style.backgroundColor === "green"){
        li3.style.backgroundColor = "white";
    }
    console.log("clicked");
});

let tab3 = document.getElementById("tab3");

tab3.addEventListener('click', function(){
    div3.style.display === "block"? div3.style.display = "none": div3.style.display = "block";
    li3.style.backgroundColor === "green" ? li3.style.backgroundColor = "white" : li3.style.backgroundColor = "green";

    if(div1.style.display === "block"){
    div1.style.display = "none";
      }
    if(div2.style.display === "block"){
        div2.style.display = "none";
    }

    
    if(li1.style.backgroundColor === "green"){
        li1.style.backgroundColor = "white";
          }
        if(li2.style.backgroundColor === "green"){
            li2.style.backgroundColor = "white";
        }
    console.log("clicked");

});


