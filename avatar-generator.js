var avatarGenerator = document.querySelector('.editor-wrap');

//======================== Switch Tabs ========================

var partsTabs = avatarGenerator.querySelector('.ed-parts-tabs'),
    parts     = avatarGenerator.querySelector('.ed-parts-box');

function processTabs() {
    for (let i = 0; i < partsTabs.children.length; i++) {
        partsTabs.children[i].addEventListener('click', function(evt) {
            evt.preventDefault();
            for (let j = 0; j < partsTabs.children.length; j++) {
                partsTabs.children[j].classList.remove('active');
                parts.children[j].classList.remove('active');
            }
            partsTabs.children[i].classList.add('active');
            parts.children[i].classList.add('active');
        });
    } 
    return;
}
processTabs();

//======================== Select a Preset ========================

var presetsBGs = [
    // head
    'url(\'img/preset-sprite.png\') -355px -5px no-repeat #e3cbba',   // 1
    'url(\'img/preset-sprite.png\') -355px -75px no-repeat #e3cbba',  // 2
    'url(\'img/preset-sprite.png\') -355px -145px no-repeat #e3cbba', // 3

    // eyes
    'url(\'img/preset-sprite.png\') -145px -5px no-repeat #e3cbba',   // 1
    'url(\'img/preset-sprite.png\') -145px -75px no-repeat #e3cbba',  // 2
    'url(\'img/preset-sprite.png\') -5px -145px no-repeat #e3cbba',   // 3

    // mouth
    'url(\'img/preset-sprite.png\') -355px -215px no-repeat #e3cbba', // 1
    'url(\'img/preset-sprite.png\') -355px -285px no-repeat #e3cbba', // 2
    'url(\'img/preset-sprite.png\') -5px -355px no-repeat #e3cbba',   // 3
    'url(\'img/preset-sprite.png\') -75px -355px no-repeat #e3cbba',  // 4
    'url(\'img/preset-sprite.png\') -145px -355px no-repeat #e3cbba', // 5

    // hair-front
    'url(\'img/preset-sprite.png\') -145px -285px no-repeat #e3cbba', // 4
    'url(\'img/preset-sprite.png\') -285px -215px no-repeat #e3cbba', // 1
    'url(\'img/preset-sprite.png\') -5px -285px no-repeat #e3cbba',   // 2
    'url(\'img/preset-sprite.png\') -75px -285px no-repeat #e3cbba',  // 3
    'url(\'img/preset-sprite.png\') -215px -285px no-repeat #e3cbba', // 5
    'url(\'img/preset-sprite.png\') -285px -285px no-repeat #e3cbba', // 6

    // hair-back
    '#e3cbba',
    'url(\'img/preset-sprite.png\') -5px -215px no-repeat #e3cbba',   // 1-1
    'url(\'img/preset-sprite.png\') -215px -145px no-repeat #e3cbba', // 1
    'url(\'img/preset-sprite.png\') -75px -215px no-repeat #e3cbba',  // 2
    'url(\'img/preset-sprite.png\') -145px -215px no-repeat #e3cbba', // 2-1
    'url(\'img/preset-sprite.png\') -215px -215px no-repeat #e3cbba', // 3
    'url(\'img/preset-sprite.png\') -285px -5px no-repeat #e3cbba',   // 4
    'url(\'img/preset-sprite.png\') -285px -75px no-repeat #e3cbba',  // 5
    'url(\'img/preset-sprite.png\') -285px -145px no-repeat #e3cbba', // 6

    // glasses
    '#e3cbba',
    'url(\'img/preset-sprite.png\') -75px -145px no-repeat #e3cbba',  // 1
    'url(\'img/preset-sprite.png\') -145px -145px no-repeat #e3cbba', // 2
    'url(\'img/preset-sprite.png\') -215px -5px no-repeat #e3cbba',   // 3
    'url(\'img/preset-sprite.png\') -215px -75px no-repeat #e3cbba',  // 4

    // earrings
    '#e3cbba',
    'url(\'img/preset-sprite.png\') -5px -5px no-repeat #e3cbba',     // 1
    'url(\'img/preset-sprite.png\') -75px -5px no-repeat #e3cbba',    // 2
    'url(\'img/preset-sprite.png\') -5px -75px no-repeat #e3cbba',    // 3
    'url(\'img/preset-sprite.png\') -75px -75px no-repeat #e3cbba'    // 4
];

//-------------- Presets --------------
var presets = parts.querySelectorAll('.presets');

function processPresets() {
    let bgNumber = 0;
    for (let i = 0; i < presets.length; i++) {
        for (let j = 0; j < presets[i].children.length; j++) {
            presets[i].children[j].style.background = presetsBGs[bgNumber];
            bgNumber++;
            presets[i].children[j].addEventListener('click', function() {
                for (let n = 0; n < presets[i].children.length; n++) {
                    presets[i].children[n].classList.remove('selected-preset');
                }
                presets[i].children[j].classList.add('selected-preset');
            });
        }
        presets[i].addEventListener('wheel', function (ev) {
            ev.preventDefault();
            if (ev.deltaY > 0) {
                presets[i].scrollLeft += 71;
            } else {
                presets[i].scrollLeft -= 71;
            }
        });
    }
    return;
}
processPresets();

var headPresets = avatarGenerator.querySelectorAll('.head-preset'),
    headParts   = avatarGenerator.querySelectorAll('.head-part'),

    eyesPresets = avatarGenerator.querySelectorAll('.eyes-preset'),
    eyesParts   = avatarGenerator.querySelectorAll('.eyes-part'),

    mouthPresets = avatarGenerator.querySelectorAll('.mouth-preset'),
    mouthParts   = avatarGenerator.querySelectorAll('.mouth-part')
    
    hairFrontPresets = avatarGenerator.querySelectorAll('.hair-front'),
    hairFrontParts   = avatarGenerator.querySelectorAll('.hair-front-part'),
    
    hairBackPresets = avatarGenerator.querySelectorAll('.hair-back'),
    hairBackParts   = avatarGenerator.querySelectorAll('.hair-back-part'),
    
    glassesPresets = avatarGenerator.querySelectorAll('.glasses-preset'),
    glassesParts   = avatarGenerator.querySelectorAll('.glasses-part'), 
    
    earringsPresets = avatarGenerator.querySelectorAll('.earrings-preset'),
    earringsParts   = avatarGenerator.querySelectorAll('.earrings-part');
    
function selectPart(presetsGroup, partsGroup) {
    for (let i = 0; i < presetsGroup.length; i++) {
        partsGroup[i].classList.add('hidden');
    }
    for (let j = 0; j < presetsGroup.length; j++) {
        if (presetsGroup[j].classList.contains('selected-preset')) {
            partsGroup[j].classList.remove('hidden');
        }
    }
}

function addChoosePresetHandler (presets, parts) {
    for (let i = 0; i < presets.length; i++) {
        presets[i].addEventListener('click', function (ev) {
            selectPart(presets, parts);
        })
    }
}

addChoosePresetHandler(headPresets, headParts);
addChoosePresetHandler(eyesPresets, eyesParts);
addChoosePresetHandler(mouthPresets, mouthParts);
addChoosePresetHandler(hairFrontPresets, hairFrontParts);
addChoosePresetHandler(hairBackPresets, hairBackParts);
addChoosePresetHandler(glassesPresets, glassesParts);
addChoosePresetHandler(earringsPresets, earringsParts);

//========================= Select Gender =========================

var genderMaleBtn   = avatarGenerator.querySelector('.gender-male'),
    genderFemaleBtn = avatarGenerator.querySelector('.gender-female'),
    malePreset      = avatarGenerator.querySelector('.male-preset'),
    maleEyebrows    = avatarGenerator.querySelector('.male-eyebrows'),
    femalePreset    = avatarGenerator.querySelector('.female-preset'),
    femaleEyebrows  = avatarGenerator.querySelector('.female-eyebrows');

genderMaleBtn.addEventListener('click', function() {
    malePreset.classList.remove('hidden');
    maleEyebrows.classList.remove('hidden');
    genderMaleBtn.classList.add('selected-gender');
    genderFemaleBtn.classList.remove('selected-gender');
    femalePreset.classList.add('hidden');
    femaleEyebrows.classList.add('hidden');
});
genderFemaleBtn.addEventListener('click', function() {
    femalePreset.classList.remove('hidden');
    femaleEyebrows.classList.remove('hidden');
    genderFemaleBtn.classList.add('selected-gender');
    genderMaleBtn.classList.remove('selected-gender');
    malePreset.classList.add('hidden');
    maleEyebrows.classList.add('hidden');
});

//======================== Change Language ========================

var russianText = avatarGenerator.querySelectorAll('.ru'),
    englishText = avatarGenerator.querySelectorAll('.en'),
    langToggle  = avatarGenerator.querySelector('.toggle-lang');

function changeLanguage() {
    for (let i = 0; i < russianText.length; i++) {
        russianText[i].classList.toggle('active');
        englishText[i].classList.toggle('active');
    }
    if (langToggle.textContent === 'RU') {
        langToggle.textContent = 'EN';
    } else {
        langToggle.textContent = 'RU';
    }
    return;
}

langToggle.addEventListener('click', changeLanguage);

//======================== Info Container ========================

var editorContainer = avatarGenerator.querySelector('.editor-container'),
    infoBtn         = avatarGenerator.querySelector('.info-btn'),
    infoBox         = avatarGenerator.querySelector('.info-box'),
    closeInfoBtn    = avatarGenerator.querySelector('.close-info-btn'),
    infoTexts       = avatarGenerator.querySelectorAll('.info-text');

infoBtn.addEventListener('click', function() {
    infoBox.classList.toggle('hidden');
    if (!infoBox.classList.contains('hidden')) {
        editorContainer.style.filter = 'brightness(0.7) blur(1px)';
    } else {
        editorContainer.style.filter = 'brightness(1) blur(0)';
    }
});

closeInfoBtn.addEventListener('click', function() {
    infoBox.classList.add('hidden');
    editorContainer.style.filter = 'brightness(1)';
});

function closeIfClickOutside (e) {
    if (e.currentTarget !== infoBox) {
        if (e.target == langToggle) {
            document.removeEventListener('click', closeIfClickOutside, true);
            return;
        }
        infoBox.classList.add('hidden');
        editorContainer.style.filter = 'brightness(1) blur(0)';
        document.removeEventListener('click', closeIfClickOutside, true);
    }
};

//======================== Change Colors ========================

var regexColor = /^[a-f0-9]{6}$|^[a-f0-9]{3}$/i;

var skinColorInput  = avatarGenerator.querySelector('.skin-color-input'),
    skinSwatchInput = avatarGenerator.querySelector('#skin-color-input'),
    skinColorPreset = avatarGenerator.querySelector('.skin-color-preset'),
    skinItems       = avatarGenerator.querySelectorAll('.skin'),
    skinShadows     = avatarGenerator.querySelectorAll('.skin-shadow'),
    
    hairColorInput  = avatarGenerator.querySelector('.hair-color-input'),
    hairSwatchInput = avatarGenerator.querySelector('#hair-color-input'),
    hairColorPreset = avatarGenerator.querySelector('.hair-color-preset'),
    hairItems       = avatarGenerator.querySelectorAll('.hair'),
    hairDark        = avatarGenerator.querySelectorAll('.hair-dark'),
    
    eyeColorInput  = avatarGenerator.querySelector('.eye-color-input'),
    eyeSwatchInput = avatarGenerator.querySelector('#eye-color-input'),
    eyeColorPreset = avatarGenerator.querySelector('.eye-color-preset'),
    irises         = avatarGenerator.querySelectorAll('.iris'),
    irisShadows    = avatarGenerator.querySelectorAll('.iris-shadow');
    cosmetics      = avatarGenerator.querySelector('.cosmetics');

    bgColorInput  = avatarGenerator.querySelector('.bg-color-input'),
    bgSwatchInput = avatarGenerator.querySelector('#bg-color-input'),
    bgColorPreset = avatarGenerator.querySelector('.bg-color-preset'),
    portraitBox   = avatarGenerator.querySelector('.portrait-box'),

    clothesColorInput  = avatarGenerator.querySelector('.shirt-color-input'),
    clothesSwatchInput = avatarGenerator.querySelector('#shirt-color-input'),
    clothesColorPreset = avatarGenerator.querySelector('.shirt-color-preset'),
    clothes            = avatarGenerator.querySelectorAll('.shirt'),

    collarColorInput  = avatarGenerator.querySelector('.collar-color-input'),
    collarSwatchInput = avatarGenerator.querySelector('#collar-color-input'),
    collarColorPreset = avatarGenerator.querySelector('.collar-color-preset'),
    collars           = avatarGenerator.querySelectorAll('.collar'),

    glassesColorInput  = avatarGenerator.querySelector('.glasses-color-input'),
    glassesSwatchInput = avatarGenerator.querySelector('#glasses-color-input'),
    glassesColorPreset = avatarGenerator.querySelector('.glasses-color-preset'),
    glasses            = avatarGenerator.querySelectorAll('.glasses'),

    earringsColorInput  = avatarGenerator.querySelector('.earrings-color-input'),
    earringsSwatchInput = avatarGenerator.querySelector('#earrings-color-input'),
    earringsColorPreset = avatarGenerator.querySelector('.earrings-color-preset'),
    earrings            = avatarGenerator.querySelectorAll('.earrings');

function checkColorCode(colorInput) {
    if (regexColor.test(colorInput.value)) {
        colorInput.classList.remove('wrong-color-code');
        return true;
    } else {
        colorInput.classList.add('wrong-color-code');
        return false;
    }
}

function addPresetShadow(colorInput, colorPreset) {
    if (colorInput.value === 'ffffff' || colorInput.value.toLowerCase === 'fff') {
        colorPreset.style.boxShadow = 'inset 0 -2px 0 1px #e3cbba';
    } else {
        colorPreset.style.boxShadow = '';
    }
}

function darkenColor(hexCode, diff) {
    colorNumbers = [
        hexCode.substr(0, 2),
        hexCode.substr(2, 2),
        hexCode.substr(4, 2)
    ];
    for (let i = 0; i < colorNumbers.length; i++) {
        colorNumbers[i] = parseInt(colorNumbers[i], 16);
        if (colorNumbers[i] - diff >= 0) {
            colorNumbers[i] -= diff;
        } else {
            colorNumbers[i] = 0;
        }
        colorNumbers[i] = colorNumbers[i].toString(16);
        if (colorNumbers[i].length < 2) {
            colorNumbers[i] = '0' + colorNumbers[i];
        }
    }
    var newColor = colorNumbers.join('');
    return newColor;
}

function addColorHandler(colorInput, swatchInput, colorPreset, setColorFunction) {
    colorInput.addEventListener('blur', function(ev) {
        checkColorCode(ev.target, colorPreset);
        if (checkColorCode(ev.target)) {
            setColorFunction();
        }
        swatchInput.value = '#' + colorInput.value;
    });
    swatchInput.addEventListener('change', function() {
        colorInput.value = swatchInput.value.slice(1);
        setColorFunction();
    });
}

//-------------- setColor functions --------------

function setColor(items, colorInput, swatchInput, colorPreset, isDark, diff) {
    swatchInput.value = '#' + colorInput.value;
    if (isDark) {
        for (let i = 0; i < items.length; i++) {
            items[i].style.fill = '#' + darkenColor(colorInput.value, diff);
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.fill = '#' + colorInput.value;
        }
    }
    colorPreset.style.backgroundColor = '#' + colorInput.value;
    addPresetShadow(colorInput, colorPreset);
}

function setSkinColor() {
    setColor(skinItems, skinColorInput, skinSwatchInput, skinColorPreset);
    setColor(skinShadows, skinColorInput, skinSwatchInput, skinColorPreset, true, 30);
}

function setHairColor() {
    setColor(hairItems, hairColorInput, hairSwatchInput, hairColorPreset);
    setColor(hairDark, hairColorInput, hairSwatchInput, hairColorPreset, true, 30);
}

function setEyeColor() {
    setColor(irises, eyeColorInput, eyeSwatchInput, eyeColorPreset);
    setColor(irisShadows, eyeColorInput, eyeSwatchInput, eyeColorPreset, true, 60);
}

function setBgColor() {
    bgSwatchInput.value = '#' + bgColorInput.value;
    portraitBox.style.backgroundColor = '#' + bgColorInput.value;
    bgColorPreset.style.backgroundColor = '#' + bgColorInput.value;
    addPresetShadow(bgColorInput, bgColorPreset);
}

function setClothesColor() {
    setColor(clothes, clothesColorInput, clothesSwatchInput, clothesColorPreset);
}

function setCollarColor() {
    setColor(collars, collarColorInput, collarSwatchInput, collarColorPreset);
}

function setGlassesColor() {
    setColor(glasses, glassesColorInput, glassesSwatchInput, glassesColorPreset);
}

function setEarringsColor() {
    setColor(earrings, earringsColorInput, earringsSwatchInput, earringsColorPreset);
}

function downloadImage() {            
    var element = document.getElementById('asdfg');
    var getCanvas;

    domtoimage.toPng(element)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    /*
    html2canvas(element, {
        // ignoreElements: elementaa.getElementsByClassName("hidden"),
        // flashcanvas: "../external/flashcanvas.min.js",
        logging: true,
        profile: true,
        useCORS: true,
        allowTaint: true,
        ignoreElements: function( element ) {
            console.log(element.classList);
            if( element.classList.contains('hidden') ) {
                return true;
            }
        }
    }).then(function (canvas) {
        // document.body.appendChild(elementaa);
        document.body.appendChild(canvas);
        // var a = document.createElement('a');
        // a.href = canvas.toDataURL();
        // a.download = 'test.png';
        // a.click();
        // $canvas.remove();
    });
    */
    // html2canvas(element, {
    //     // ignoreElements: function (el) {return el.tagName.toLowerCase() === 'h1';}
    //     // ignoreElements: function (el) {}
    //     ignoreElements: function( element ) {
    //         if( element.classList.contains('hidden') ) {
    //             // console.log(element.classList);
    //             return true;
    //         }
    //     }
    // }).then(function (canvas) {
    //     // document.body.appendChild(elementaa);
    //     document.body.appendChild(canvas);
    //     // const body = document.getElementsByTagName('BODY')[0];
    //     // body.appendChild(canvas); 
    //     // getCanvas = canvas; 
    // });

    // var imgageData = getCanvas.toDataURL("image/png");
    // var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    // $("#btn-Convert-Html2Image").attr("download", "GeeksForGeeks.png").attr("href", newData);
}

//-------------- toggle cosmetics --------------

var cosmeticsList = avatarGenerator.querySelectorAll('.cosmetics'),
    cosmeticsToggle = avatarGenerator.querySelector('.cosmetics-label');

cosmeticsToggle.addEventListener('click', function () {
    for (let i = 0; i < cosmeticsList.length; i++) {
        cosmeticsList[i].classList.toggle('skin');
        cosmeticsList[i].classList.toggle('hair-dark');
        hairDark = avatarGenerator.querySelectorAll('.hair-dark');
        skinItems = avatarGenerator.querySelectorAll('.skin');
        setHairColor();
        setSkinColor();
    }
});

//---------- toggle rubber band color ----------

var rubberBands = avatarGenerator.querySelectorAll('.r-band'),
    rBandToggle = avatarGenerator.querySelector('.r-band-label');

rBandToggle.addEventListener('click', function () {
    for (let i = 0; i < rubberBands.length; i++) {
        rubberBands[i].classList.toggle('shirt');
        rubberBands[i].classList.toggle('collar');
        collars = avatarGenerator.querySelectorAll('.collar');
        clothes = avatarGenerator.querySelectorAll('.shirt');
        setClothesColor();
        setCollarColor();
    }
});

//---------- me-text ----------

var meImg  = avatarGenerator.querySelector('.me-img'),
    meText = avatarGenerator.querySelector('.me-text');

meImg.addEventListener('click', function () {
    meText.style.animation  = '0.9s fadeInOut, 0.9s moveAway';
    setTimeout(function () {
        meText.style.animation  = '';
    }, 900);
});

//-------------- on the page --------------

setSkinColor();
setHairColor();
setEyeColor();
setBgColor();
setClothesColor();
setCollarColor();
setGlassesColor();
setEarringsColor();

addPresetShadow(bgColorInput, bgColorPreset);

addColorHandler(skinColorInput, skinSwatchInput, skinColorPreset, setSkinColor);
addColorHandler(hairColorInput, hairSwatchInput, hairColorPreset, setHairColor);
addColorHandler(eyeColorInput, eyeSwatchInput, eyeColorPreset, setEyeColor);
addColorHandler(bgColorInput, bgSwatchInput, bgColorPreset, setBgColor);
addColorHandler(clothesColorInput, clothesSwatchInput, clothesColorPreset, setClothesColor);
addColorHandler(collarColorInput,collarSwatchInput, collarColorPreset, setCollarColor);
addColorHandler(glassesColorInput, glassesSwatchInput, glassesColorPreset, setGlassesColor);
addColorHandler(earringsColorInput, earringsSwatchInput, earringsColorPreset, setEarringsColor);
