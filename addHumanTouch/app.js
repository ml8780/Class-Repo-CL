console.log('loading...');

window.addEventListener('load', function () {
    console.log("Loaded!");
    fetch("data.json")
        .then(response => response.json())
        .then(function (data) {
            console.log(data);

            let children = data.data.children;
            console.log(children);
            
            //access random post
            let randomPost = Math.floor(Math.random() * children.length);
            console.log(randomPost);
            
            //access image-- issue: there are images, videos, and image gallery links
            let dispImg = document.getElementById('img');
            dispImg.src = data.data.children[randomPost].data.url;
            
            //access name of software to create
            let dispName = document.getElementById('name');
            dispName.innerHTML = data.data.children[randomPost].data.link_flair_richtext[0].t;

            //access link
            let dispUrl = document.getElementById('link');
            dispUrl.href = data.data.children[randomPost].data.url;

            //access title of the work
            let dispTitle = document.getElementById('title');
            dispTitle.innerHTML = data.data.children[randomPost].data.title;

        })
})

/*
To do:

1. decide which interaction to use: scroll through image or click for random image
- scroll working as a method to scroll through images in gallery view: new images keep appearing as scroll down happens
2. p5.js- doodle on top of the artwork
3. export button

*/
