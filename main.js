// dropdowns

const famBtn = document.getElementById('fontFamBtn');
const sizeBtn = document.getElementById('fontSizeBtn');
const famList = document.getElementById('fontFam');
const sizeList = document.getElementById('fontSize');
const fontItems = document.querySelectorAll('[class="font__item"]');
const fontSizeItems = document.querySelectorAll('[class="font_size-item"]')


famBtn.addEventListener('click', e => {
    famList.classList.toggle('hidden');
    sizeList.classList.add('hidden');
})

sizeBtn.addEventListener('click', e => {

    sizeList.classList.toggle('hidden');
    famList.classList.add('hidden')
});


for (let i = 0; i < fontItems.length; i++) {
    fontItems[i].addEventListener('click', e => {
        famList.classList.add('hidden');
    })
}
for (let x = 0; x < fontSizeItems.length; x++) {
    fontSizeItems[x].addEventListener('click', e => {
        sizeList.classList.add('hidden');
    })
};


for (let x = 0; x < fontSizeItems.length; x++) {
    fontSizeItems[x].addEventListener('click', e => {
        contentBlock.style.fontSize = fontSizeItems[x].value;
    })
}

for (let q = 0; q < fontItems.length; q++) {
    fontItems[q].addEventListener('click', e => {
        contentBlock.style.fontFamily = fontItems[q].value;
    })
}

//text position

const textPos = document.querySelectorAll('[name="position"]');
const content = document.getElementById('contentBlock');


for (let i = 0; i < textPos.length; i++) {
    textPos[i].addEventListener("change", e => {
        if (textPos[i].checked) {
            content.style.textAlign = textPos[i].value;

        }
    })
};

//font-style

const boldTxt = document.getElementById('bold');
const cursiveTxt = document.getElementById('italic');
const textDecoration = document.querySelectorAll('[name="text-decor"]');
for (let i = 0; i < textDecoration.length; i++) {
    textDecoration[i].addEventListener("change", e => {
        if (textDecoration[i].checked) {
            content.style.textDecoration = textDecoration[i].value;

        }
    })
};

function clickRadio(el) {
    let siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] != el)
            siblings[i].oldChecked = false;
    }
    if (el.oldChecked)
        el.checked = false;
    el.oldChecked = el.checked;
    content.style.textDecoration = 'none';
}

boldTxt.addEventListener('change', e => {

    boldTxt.checked ? content.style.fontWeight = 'bold' : content.style.fontWeight = 'normal';
});
cursiveTxt.addEventListener('change', e => {

    cursiveTxt.checked ? content.style.fontStyle = 'italic' : content.style.fontStyle = 'normal';
});