const background = document.querySelector("body")
const img = [
    "0.jpg", "1.jpg", "2.jpg",
    "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.jpg", "11.jpg"
]

function getRandImgBySeason() {
    const date = new Date();
    const month = date.getMonth() + 1;
    let imgInterval = Math.floor(Math.random() * 3);
    if (month > 2 && month < 6){
        return imgInterval;
    }else if (month > 5 && month <9){
        return 3 + imgInterval;
    }else if (month > 8 && month < 12){
        return 6 + imgInterval;
    }else {
        return 9 + imgInterval;
    }
}

const chosenImg = img[getRandImgBySeason()];
background.style.backgroundImage = `url(img/${chosenImg})`;