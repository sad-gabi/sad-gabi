let intervalId;

function checkViewportWidthContinuously() {

    clearInterval(intervalId);

    intervalId = setInterval(() => {
        const viewportWidth = window.innerWidth;
        const container = document.getElementById('mainvp_div')

        if (1500 > viewportWidth) {
            container.style.overflow = 'auto';
        } else {
            container.style.overflow = 'hidden';
            container.scroll({ top: 0 })
        }
    }, 1000);
}

function stopCheckingViewportWidth() {
    clearInterval(intervalId);
}

function TurnOnAll() {

    const a2 = document.getElementById('2a')
    const a1 = document.getElementById('1a')

    a2.style.display = "block"
    a1.style.display = "block"

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    clearInterval(intervalId);
    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'auto';
    container.scroll({ top: 0 })

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('all')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('all')) {
            element.style = ('display: block; padding: 10px;')
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

function TurnOnDesign() {
    const a2 = document.getElementById('2a')

    a2.style.display = "none"

    const viewportWidth = window.innerWidth;
    const container = document.getElementById('mainvp_div')

    if (1500 < viewportWidth) {
        container.style.overflow = 'hidden';
    }

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('design')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('design')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'design') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnProg() {
    const a2 = document.getElementById('2a')

    a2.style.display = "none"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('programming')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('programming')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'programming') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnWeb() {
    const a2 = document.getElementById('2a')

    a2.style.display = "block"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('web_design')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('web_design')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'web_design') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnUx() {
    const a2 = document.getElementById('2a')

    a2.style.display = "none"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('ux')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('ux')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'ux') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnPy() {
    const a2 = document.getElementById('2a')

    a2.style.display = "block"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('python')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('python')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'python') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnBrand() {
    const a2 = document.getElementById('2a')

    a2.style.display = "block"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('branding')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('branding')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'branding') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnJs() {
    const a2 = document.getElementById('2a')

    a2.style.display = "none"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('javascript')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('javascript')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'javascript') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnPhp() {
    const a2 = document.getElementById('2a')

    a2.style.display = "block"

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'hidden';

    const elements = document.querySelectorAll('.proj_cardsa');
    const dates = document.querySelectorAll('.tagsdate');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('php')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    dates.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('php')) {
            element.style = ('display: block; padding: 10px;')
        } else {
            element.style = ('display: none;')
        }
    });

    buttons.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category === 'php') {
            element.style = ('background-image: linear-gradient(to right, #b923ff, #3341ff); color: white; border: none; padding: 6px; padding-left: 11px; padding-right: 11px');
        } else {
            element.style = ('backgrounf-image: none; background-color: #1a1a1a; color: #c9c9c9; border: solid; padding: 5px; padding-left: 10px; padding-right: 10px; border-style: solid; border-width: 1px; border-color: gray');
        }
    });
}

function TurnOnAllArt() {

    const container = document.getElementById('mainvp_div')
    container.style.overflow = 'auto';

    const elements = document.querySelectorAll('.proj_cardsa');
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


function TurnOnAllArt() {
    const elements = document.querySelectorAll('.proj_cardsa');
    const titles = document.querySelectorAll('.art_title');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('all')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    titles.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('all')) {
            element.style = ('display: block;')
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
    const elements = document.querySelectorAll('.proj_cardsa');
    const titles = document.querySelectorAll('.art_title');
    const buttons = document.querySelectorAll('.tag_bt');

    elements.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('gallery')) {
            element.style = ('display: block; position: relative; margin-bottom: 25px;')
        } else {
            element.style = ('display: none;')
        }
    });

    titles.forEach(element => {
        const category = element.getAttribute('data-category');

        if (category.includes('gallery')) {
            element.style = ('display: block;')
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