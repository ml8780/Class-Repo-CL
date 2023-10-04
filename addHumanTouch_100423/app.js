
// p5 code------------------------------------------------------------------
let test1;
let imgW;
let imgH;

function preload() {
    let dataset = 'data.json';
    test1 = loadJSON(dataset);
    console.log(test1);
}

function setup() {

    let children = test1.data.children;
    let validImageInfo = [];

    // -------------------code from chatgpt-----start--------------------------
    // Function to check if a URL is a valid JPG or PNG
    function isValidImageUrl(url) {
        return /\.(jpg|jpeg|png)$/i.test(url);
    }

    // Iterate through child posts and add valid image URLs with their titles to the array
    children.forEach(function (child) {
        if (isValidImageUrl(child.data.url)) {
            validImageInfo.push({
                url: child.data.url,
                // -------------------code from chatgpt----------end---------------------
                title: child.data.title,
                artist: child.data.link_flair_richtext[0].t
            });
        }
    });

    console.log(validImageInfo);

    let currentIndex = 0;

    function display(index) {
        let validItem = validImageInfo[index];

        // image url -> html doc
        let dispImg = document.getElementById('img');
        dispImg.src = validItem.url;

        //artist name -> html doc
        let dispName = document.getElementById('name');
        dispName.innerHTML = validItem.artist;

        // img url -> html doc
        let dispUrl = document.getElementById('link');
        dispUrl.href = validItem.url;

        // title -> html doc
        let dispTitle = document.getElementById('title');
        dispTitle.innerHTML = validItem.title;

        // image size- width and heigh
        imgW = document.getElementById('img').width;
        // console.log(imgW);
        imgH = document.getElementById('img').height;
        // console.log(imgH);
    }

    display(currentIndex);

    let canvas = createCanvas(imgW, imgH);
    // background(0, 199, 40, 30)
    canvas.parent('canvasForHTML');

    // button to move to the next element
    button = document.getElementById('nextB');
    button.addEventListener('click', function () {
        currentIndex = currentIndex + 1;
        if (currentIndex == validImageInfo.length) {
            currentIndex = 0
        }
        display(currentIndex);
    });


}

function draw() {
}

function keyPressed() {
    if (key === 'e') {
        clear();
    //reset canvas size to current image size
    imgW = document.getElementById('img').width;
    imgH = document.getElementById('img').height;
    resizeCanvas(imgW, imgH)
    }
}

function mouseDragged() {
    line(pmouseX, pmouseY, mouseX, mouseY)
    // stroke(0, random(0,255));
    stroke(random(100,255), random(60,200), random(15,200));
    // stroke(random(100,255), random(60,200), random(15,200), random(0,255));
    strokeWeight(random(1,4));
}


function windowResized() {
    imgW = document.getElementById('img').width;
    imgH = document.getElementById('img').height;
    resizeCanvas(imgW, imgH)
    // background(0, 199, 40, 30)
}