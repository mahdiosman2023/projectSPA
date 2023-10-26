let popup = document.getElementById("popup");

            function openPopup(){
                popup.classList.add("open-popup");
            }

            function closePopup(){
                popup.classList.remove("open-popup");
            }




fetch("./project.json")
    .then((res) => res.json())
    .then((hotels) =>{
    console.log(hotels)
    let container = document.querySelector(".project")

    let cards = ""
for (let hotel of hotels){
console.log(hotel)
let div = `
<div>  
<img src=${hotel["URL"]}>
<p>${hotel["Room Type"]}</p>
<p>${hotel["Room Rate"]}</p>
<p>${hotel["Includes"]}</p>
<span class="likeCount">0</span>
<button class="material-icons">thumb_up_alt</button>
<span class="dislikeCount">0</span>
<button class="material-icons">thumb_down_alt</button>


            


</div>`



cards+=div


}


container.innerHTML+=cards    






})





 
