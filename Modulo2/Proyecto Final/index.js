
const cardsInfo = [
    {
        pais : "France",
        description : "France is a place where you will dwoiajhdoiwhakjdhwkahdljwahldjwhakldhwlakdhkl wahdklwhlakhdklwakldhwlkahdlkwhadlkhwalkdh it is really beautiful",
        ImageLocation : "./Imagenes/f1card.jpg"
    },
    {
        pais : "Chile",
        description : "Chile is a place where you can dioahjdoiwahl jdwakdawñldañldwñ dwoadwjauiodwa odwaoiuhdwaohdwoahd it has great places for tourists",
        ImageLocation : "./Imagenes/f2card.jpg"
    },
    {
        pais : "Spain",
        description : "Spain is a place where many people awouhadljwhajldhwalkhdkwahdkla and dwahjwladlhawdhawldhwalpawdoowapdiw everyone leaves happy from there.",
        ImageLocation : "./Imagenes/f1card.jpg"
    }
]

// Visit place funcionalidad de boton

let mInfoButtons = document.querySelectorAll(".bvisit");
let mainSection = document.querySelector(".main");

let openTag = false;

for (let i = 0; i < mInfoButtons.length; i++){
    let boton = mInfoButtons[i];
    let infoPais = cardsInfo[i];

    boton.addEventListener("click", function(event){

        if(openTag)
        {
            return;
        }
        openTag = true;


        let newDiv = document.createElement("div");

        newDiv.className = "infoDiv"


        newDiv.innerHTML = `
            <div class= infoImageTop>
            <button class="exit" >x</button>
            </div>
            
            <div class = "infoTitleDiv">
                <h2 class = "infoTitle">${infoPais.pais}</h2>
            </div>
            <div class = "infoTextDiv">
                <p class = "infoParagraph">${infoPais.description}</p>
                <p class = "mailToText">To get a all-included trip to ${infoPais.pais}, please text: Text@gmail.com</p>
            </div>
        `



        mainSection.appendChild(newDiv);

        let imageDiv = document.querySelector(".infoImageTop")
        let buttonExit = document.querySelector(".exit")
        imageDiv.style.backgroundImage = `url("${infoPais.ImageLocation}")`

        buttonExit.addEventListener("click", function(event){

            newDiv.remove()
            openTag = false;

        })




    })
}



// Favorite funcionalidad de boton 

let favButton = document.querySelectorAll(".bfav");
let favourites = {
    france: false,
    chile: false,
    spain: false
};



for(let i = 0; i < favButton.length; i++){
    let info = cardsInfo[i]

    favButton[i].addEventListener("click", function(event){
        if(info.pais == "France"){
            if(favourites.france){
                alert( `Has quitado de favoritos el pais: ${info.pais} `)
                favourites.france = false;
                
            }else{
                alert( `Has agregado a favoritos el pais: ${info.pais} `)
                favourites.france = true;
            } 
        }else if(info.pais == "Chile"){
            if(favourites.chile){
                alert( `Has quitado de favoritos el pais: ${info.pais} `)
                favourites.chile = false;
                
            }else{
                alert( `Has agregado a favoritos el pais: ${info.pais} `)
                favourites.chile = true;
            } 
        }else{
            if(favourites.spain){
                alert( `Has quitado de favoritos el pais: ${info.pais} `)
                favourites.spain = false;
                
            }else{
                alert( `Has agregado a favoritos el pais: ${info.pais} `)
                favourites.spain = true;
            } 
        }

        if(checkFav){
            alert( `Has quitado de favoritos el pais: ${info.pais} `)
            checkFav = false;
            
        }else{
            alert( `Has agregado a favoritos el pais: ${info.pais} `)
            checkFav = true;
        } 
    })
}


// transport Learn more button action

let servicesInfo = [
    {   name: "Acommodation",
        details: "We offer... jdajwlpopdo djwoiadjj djdajlkj jdaodjw  jdalsk and jadiowaj type of accomodations that will help you with....",
        ImageLocation: "./Imagenes/hotel.jpg",
        specifications: [
            "buffets", "5 star hotels", "Tour guides", "Free wifi", "working stations"
        ]
    },
    {   name: "Transport",
        details: "We offer... jdajwlpopdo djwoiadjj djdajlkj jdaodjw  jdalsk and jadiowaj type of services with tour guides and expert drivers.",
        ImageLocation: "./Imagenes/taxi.jpg",
        specifications: [
            "24/7 private drivers", "Special app to call your driver", "Map of all the country", "PickUp from airport", "free drinks in the car/bus"
        ]
        }
]

let sButtons = document.querySelectorAll(".sbutton");

for (let i = 0; i < sButtons.length; i++){
    let boton = sButtons[i];
    let infoServicio = servicesInfo[i];

    boton.addEventListener("click", function(event){

        if(openTag)
        {
            return;
        }
        openTag = true;


        let newDiv = document.createElement("div");

        newDiv.className = "infoDiv"


        newDiv.innerHTML = `
            <div class= infoImageTop>
            <button class="exit" >x</button>
            </div>
            
            <div class = "infoTitleDiv">
                <h2 class = "infoTitle">${infoServicio.name}</h2>
            </div>
            <div class = "infoTextDiv servicesInfoDiv">
                <p class = "infoParagraphServices">${infoServicio.details}</p>
                <div class = "specifications">
                    <h3>Exclusive things we offer:</h3>
                    <ul>
                        <li>${infoServicio.specifications[0]}</li>
                        <li>${infoServicio.specifications[1]}</li>
                        <li>${infoServicio.specifications[2]}</li>
                        <li>${infoServicio.specifications[3]}</li>
                        <li>${infoServicio.specifications[4]}</li>
                    </ul>
                </div>
                <p class = "mailToTextServices">To get a all-included trip with ${infoServicio.name}, please text: Text@gmail.com</p>
            </div>
        `



        mainSection.appendChild(newDiv);

        let imageDiv = document.querySelector(".infoImageTop")
        let buttonExit = document.querySelector(".exit")
        imageDiv.style.backgroundImage = `url("${infoServicio.ImageLocation}")`

        buttonExit.addEventListener("click", function(event){

            newDiv.remove()
            openTag = false;

        })




    })
}


// register now boton
let registerButton = document.querySelector(".rnow")
let registeredMailList = []

registerButton.addEventListener("click", register)

function register(){
    if(openTag){
        return
    }
    openTag = true;

    let registerDiv = document.createElement("div");

    registerDiv.className = "registerDiv"

    registerDiv.innerHTML = `

        <div class="registerDivTitle">
            <div class="exitDiv">
                <button class="exit exitRegister">x</button>
            </div>
            <h2 class="registerNowTitle">Register Now!</h2>
        </div>

        <div class= info>
        <p class="infoParagraphRegister">if you want to register, fill the info bellow. Registering to this program will send you email each time we get a new service and give you disccounts.</p>
        </div>

        <div class="preguntas">

            <div class="mailInp">
              <p class= "mailText"> Mail: </p>
              <input type="text" class = "textInput userMail" placeholder = "mymail@gmail.com"></input>
            </div>

            <div class="nameInp">
             <p class= "nameText"> Name: </p>
                <input type="text" class = "textInput userName" placeholder = "Pedro Perez"></input>
            </div>
        
        </div>



        <input type="button" value="Submit" class="buttonInput">  </input>
    ` 
    mainSection.appendChild(registerDiv)

    let submitButton = document.querySelector(".buttonInput")
    let exitButton = document.querySelector(".exitRegister")
    
    submitButton.addEventListener("click", function(){

        let registered = false;
        let userName = document.querySelector(".userName")
        let userMail = document.querySelector(".userMail")

        if(userMail.value == "" || userName.value == ""){
            alert("you need to fill every box!")
            return;
        }

    
        for(let i = 0; i<registeredMailList.length; i++){
            if(registeredMailList[i] == userMail.value){
                registered = true;
            }
        }
    
        if(!registered){
            registerDiv.remove();
            alert(`Thanks for registering, ${userName.value}, you will recieve a mail to ${userMail.value} soon!`)
            registeredMailList.push(userMail.value)
        }else{
            registerDiv.remove();
            alert(`The mail ${userMail.value} has already been registered!`)
        }

        openTag = false;
    })

    exitButton.addEventListener("click", function(){
        registerDiv.remove();
        openTag = false;
    })


}

function submitedRegister(){

}
