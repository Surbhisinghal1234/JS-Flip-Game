// const card = document.querySelector(".card")
// card.addEventListener("click", ()=>{
//     card.children[0].style.transform= "rotateY(180deg)"
// })

const card = document.querySelectorAll(".card")
const temp = [
    "ada sharma.jpg",
    "aishwarya rai.jpg",
    "anne hathaway.jpg",
    "Chris Evans.jpg",
    "daniel radcliffe.webp",
    "dwayne johnson.jpg",
];
const actualPhotos = [...temp, ...temp];
const alreadyExist = [];
const photoStore = [];
let counter = 0

for (let i = 0; i < actualPhotos.length; i++) {
    const img = document.createElement("img")
    img.src = "image/" + actualPhotos[getARandomValue()]
    card[i].children[0].children[1].append(img)
}
function getARandomValue() {
    const randomValue = Math.floor(Math.random() * actualPhotos.length)
    if (alreadyExist.includes(randomValue)) {
        return getARandomValue()
    }
    else {
        alreadyExist.push(randomValue)
    }
    return randomValue
}
card.forEach((card) => {
    card.addEventListener("click", () => {
        card.children[0].style.transform = "rotateY(180deg)"
        // store the photo
        photoStore.push(card.children[0].children[1].children[0])
        console.log(card.children[0].children[1].children[0])
        // increment open photo counter
        counter++
        setTimeout(() => {
            // console.log(openPhotoStore)
            // if 2 photos are open. strat matching
            if (counter > 1) {
                if (photoStore[0].src === photoStore[1].src) {
                    counter = 0;
                    photoStore.length = 0;
                    // reset open photo counter, empty store
                }
                else {
                    // reset open photo counter, empty store
                    // close the photos

                    counter = 0;

                    photoStore.forEach((openPhoto) => {
                        openPhoto.parentElement.parentElement.style.transform = "rotateY(0)"
                    })
                    photoStore.length = 0;
                }
            }
        }, 500)
    });
})






