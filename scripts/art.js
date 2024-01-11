//BUTTONS

function TurnOnAllArt() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('all')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'all') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnGalleries() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('gallery')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'gallery') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnIllus() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('illustration')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'illustration') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnConcept() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('conceptart')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'conceptart') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnModels() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('model')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'model') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnRenders() {
    const elements = document.querySelectorAll('.art_cards');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('render')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'render') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}


//IMG VIEWERS

function openViewer() {
    const imgViewer = document.getElementById('img-viewer');
    imgViewer.style.display = 'flex';
}

function closeViewer() {
    const imgViewer = document.getElementById('img-viewer');
    imgViewer.style.display = 'none';
}

function schoolAmiya() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/amiyaschool_lowres.png';
    imgSrc.style.boxShadow = 'none';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original character: Arknights (2019)';
    credits.href = 'https://www.arknights.global/';

    const highResImg = new Image();
    highResImg.src = 'images/amiyaschool.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/amiyaschool.png';
    };
}

function ravenDTIYS() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/ravendtiys_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original illustration: Twitter @otagoth';
    credits.href = 'https://twitter.com/otagoth';

    const highResImg = new Image();
    highResImg.src = 'images/ravendtiys.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/ravendtiys.png';
    };
}

function flipFlappers() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/flipflappers_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original scene: Flip Flappers (2016)';
    credits.href = 'https://en.wikipedia.org/wiki/Flip_Flappers';

    const highResImg = new Image();
    highResImg.src = 'images/flipflappers.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/flipflappers.png';
    };
}

function deerGirl() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/deergirl_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original character: Twitter @kharaS';
    credits.href = 'https://twitter.com/kharhaS';

    const highResImg = new Image();
    highResImg.src = 'images/deergirl.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/deergirl.png';
    }
}

function armoredAurea() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/armoredaurea_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original suit design: Genshin Impact (2020)';
    credits.href = 'https://genshin.hoyoverse.com/en/';

    const highResImg = new Image();
    highResImg.src = 'images/armoredaurea.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/armoredaurea.png';
    }
}

function badBehavior() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/badbehavior_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/badbehavior.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/badbehavior.png';
    }
}

function sillyIncident() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/sillyincident_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/sillyincident.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/sillyincident.png';
    }
}

function annya() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/annya_lowres.png';
    imgSrc.style.boxShadow = '';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/annya.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/annya.png';
    }
}

function aliceAtNight() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/aliceatnight_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = 'Original frame: Callaita (2019)';
    credits.href = 'https://www.youtube.com/watch?v=acEOASYioGY';

    const highResImg = new Image();
    highResImg.src = 'images/aliceatnight.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/aliceatnight.png';
    }
}

function devohra() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/devohra_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/devohra.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/devohra.png';
    }
}

function theLakeMonster() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/thelakemonster_lowres.jpg';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/thelakemonster.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/thelakemonster.png';
    }
}

function lampAndBucket() {
    openViewer();

    const imgSrc = document.getElementById('img-src');
    imgSrc.src = 'images/lampandbucket_lowres.png';
    imgSrc.style.boxShadow = '0 0 30px 5px #ffffff30';

    const credits = document.getElementById('img-credits');
    credits.textContent = '';
    credits.href = '';

    const highResImg = new Image();
    highResImg.src = 'images/lampandbucket.png';

    highResImg.onload = function () {
        imgSrc.src = 'images/lampandbucket.png';
    }
}