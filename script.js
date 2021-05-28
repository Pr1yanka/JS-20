//const body = document.querySelector(body);

const projectMap = {
    "Generate Quotes": "/JS-20/Generate Quotes/index.html",
    "Infinite Scroll": "/JS-20/Infinite Scroll/index.html",
    "Picture in Picture": "/JS-20/Picture in Picture/index.html",
    "Joke Teller": "/JS-20/Joke-Teller/index.html",
    "Light Dark Mode": "/JS-20/Light Dark Mode/index.html",
    "Animated Template": "/JS-20/animated-template/index.html",
    "Animated Navigation": "/JS-20/animated-navigation/index.html",
    "Music Player": "/JS-20/music-player/index.html",
    "Countdown": "/JS-20/custom-countdown/index.html",
    "Bookmark keeper": "/JS-20/Bookmark keeper/index.html",
    "Video Player": "/JS-20/video-player/index.html",
    "Form Validator": "/JS-20/form-validator/index.html",
    "Spock Rock Game": "/JS-20/spock-rock-game/index.html"
};
function cardClick(e) {
    const target = e.target.alt;
    let url ='';
    if(projectMap[target] != '' && projectMap[target] != undefined && projectMap[target] != null){
        let link = projectMap[target];
        url = `${window.location.origin}${link}`;
        console.log(url);
    window.open(url, '_blank').focus();
    }
    
    

}

window.addEventListener('click', cardClick);



