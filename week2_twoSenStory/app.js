let button;

//button to change background color to turn off light: background color to black, button disappear, change opacity for bed and light
button = document.getElementById('button');
button.addEventListener('click', function(){
    document.body.style.background = "black";
    document.getElementById('button').style.opacity = 0;
    document.getElementById('bed').style.opacity = 0.1;
    document.getElementById('light').style.opacity = 0.1;
});

//text reveal/flickering by scrolling down
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    document.getElementById('revealText').style.opacity = (window.scrollY%0.4);
});