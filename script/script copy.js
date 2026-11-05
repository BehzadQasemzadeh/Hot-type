const persianarray = ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'ش', 'س', 'ی', 'ب', 'ل', 'ت', 'ن', 'م', 'ک', 'گ', 'ظ', 'ط', 'پ', 'ك', 'ئ', 'ي', 'ة'];
const persianarray1 = ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ', 'ش', 'س', 'ی', 'ب', 'ل', 'ت', 'ن', 'م', 'ک', 'گ', 'ظ', 'ط', 'پ', 'ك', 'ئ', 'ي', 'ة', 'ؤ', 'ئ', 'ي', 'إ', 'أ', 'آ', 'ژ', '‌', 'ا', 'و', 'د', 'ذ', 'ر', 'ز'];
const menuDesignEL = document.querySelectorAll('.menu__design');
const themeCheckbox = document.querySelectorAll('.theme_checkbox');
const startBtnEL = document.querySelector('.input_btn');
const addSvg = document.querySelector('.add_svg');
const startMenu = document.querySelector('.start_menu');
const aboutMe = document.querySelector('.about_me');
const typeHistory = document.querySelector('.type_history');
const settings = document.querySelector('.settings');
const startType = document.querySelector('.start_type');
const infoBar = document.querySelector('.info_bar');
const colorSvg = document.querySelector('.color_svg');
const addText = document.querySelector('.add_text');
const addTextareaLabel = document.querySelector('.add_text_area_label');
const testingBox = document.querySelector('.testing_box')
const themeColors = document.querySelector('.theme_colors');
const faFontChose = document.querySelector('.fa_font_chose');
const enFontChose = document.querySelector('.en_font_chose');
const body = document.querySelector('body');
const choserF = document.querySelector('.fa_choser');
const choserE = document.querySelector('.en_choser');
const addingEL = document.querySelector('.adding');
const addingIcon = document.querySelector('.adding_icon');
const addingIcon1 = document.querySelector('.adding_line1');
const addingIcon2 = document.querySelector('.adding_line2');
const textareaEL = document.querySelector('#add_text_area');
const personalThemeInput = document.querySelector('#personal_theme_input');
const testingBoxProtector = document.querySelector('.testing_box_protector');
const forTestSize = document.querySelector('.for_test_size');
const textMiniBox = document.querySelector('.text_mini_box');
const miniContainer = document.querySelector('.mini_container');
const testingContainer = document.querySelector('.testing_container');
const usernameDiv = document.querySelector('.username_div');
const speedSvg = document.querySelector('.speed_svg');
const km = document.querySelector('.km');
const kmNumber = document.querySelector('.km_number');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let oldTheme = document.querySelector('#theme0');
let texttext;
let textCode = '';
let textCodeforsize = '';
let isPersian;
let timer_key = null;
let km_key = null;
let time_real = 1;
let count_second = 0;
let count_minute = 0;
let trues = 0;
let km_value = 0;

mini_focus = () => textMiniBox.focus();

const km_update = () => {
    if (km_key) return;
    km_key = setInterval(() => {
        km_value = parseInt(trues * 12 / time_real);
        kmNumber.innerHTML = km_value;
        km.style.transform = `rotate(${km_value % 180}deg)`;
    }, 100)
};


const start = () => {
    if (timer_key) return;
    timer_key = setInterval(() => {
        time_real++;
        count_second++;
        if (count_second === 60) {
            count_second = 0;
            count_minute++;
            count_minute < 10 ? minute.innerHTML = `0${count_minute}` : minute.innerHTML = count_minute;
        }
        count_second < 10 ? second.innerHTML = `0${count_second}` : second.innerHTML = count_second;
    }, 1000)
};

// function checkingAll(checkBox, changeEL) {
//     if (checkBox.checked) {
//         changeEL.forEach((event) => {
//             event.style.opacity = '1';
//             event.style.pointerEvents = 'initial';
//         });
//     }
//     else {
//         changeEL.forEach((event) => {
//             event.style.opacity = '0';
//             event.style.pointerEvents = 'none';
//         });
//     }
// }

// startBtnEL.addEventListener('change', ()=> checkingAll(startBtnEL, menuDesignEL));

// % of persian char
const persiandarsad = (text) => {
    if (!text) return 0;
    const persian = text.match(/[\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF]/g) || [];
    return (persian.length / text.length) * 100;
}

// change theme
themeColors.addEventListener('click', (event) => {
    const choseTheme = event.target;

    if (choseTheme.classList.contains('theme_checkbox')) {
        document.documentElement.style.setProperty('--bgc', choseTheme.value);
        document.documentElement.style.setProperty('--bxsh-out', choseTheme.getAttribute('bxsh-out'));
        document.documentElement.style.setProperty('--bxsh-in', choseTheme.getAttribute('bxsh-in'));
        document.documentElement.style.setProperty('--fill', choseTheme.getAttribute('color'));
        document.documentElement.style.setProperty('--bxsh-in-rev', choseTheme.getAttribute('bxsh-in-rev'));
        document.documentElement.style.setProperty('--bxsh-hov', choseTheme.getAttribute('bxsh-hov'));
        document.documentElement.style.setProperty('--cursor', choseTheme.getAttribute('cursor'));
        oldTheme.checked = false;
        oldTheme = choseTheme;
    }
});

// fa change font
faFontChose.addEventListener('change', (event) => {
    textareaEL.style.direction = 'rtl';
    const faChoser = event.target;
    body.style.setProperty('font-family', faChoser.getAttribute('font'));
    textareaEL.style.setProperty('font-family', faChoser.getAttribute('font'));
    choserF.style.setProperty('right', faChoser.getAttribute('position'));
    choserF.style.boxShadow = 'var(--bxsh-in-rev), var(--bxsh-out)';
    choserE.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';

});

// en change font
enFontChose.addEventListener('change', (event) => {
    textareaEL.style.direction = 'ltr';
    const enChoser = event.target;
    body.style.setProperty('font-family', enChoser.getAttribute('font'));
    textareaEL.style.setProperty('font-family', enChoser.getAttribute('font'));
    choserE.style.setProperty('right', enChoser.getAttribute('position'));
    choserE.style.boxShadow = 'var(--bxsh-in-rev), var(--bxsh-out)';
    choserF.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';

});

//for adding button
addingEL.addEventListener('click', () => {
    textareaEL.focus();
    const textvalue = textareaEL.value;
    const inputtext = textvalue.length;

    // test string len
    if (200 <= inputtext && inputtext <= 1000) {
        testingBox.style.boxShadow = 'var(--bxsh-in), var(--bxsh-out)';
        addText.style.boxShadow = 'none';
        texttext = textvalue.replaceAll('\n', ' ').replaceAll('‌', ' ').split(" ").map(event => event.trim());
        texttext.forEach(event => event !== "" ? textCode += `<span class="letter">${event} </span>` : null);
        texttext.forEach(event => event !== "" ? textCodeforsize += `<span class="letter_size">${event} </span>` : null);
        forTestSize.innerHTML = textCodeforsize;

        //empty textarea
        textareaEL.value = " ";
        testingBox.innerHTML = textCode;
        textareaEL.style.opacity = '0';
        addSvg.style.opacity = '0';
        let texttextclasses = document.querySelectorAll('.letter');
        console.log(texttextclasses[0].innerText);

        // testingBox.style.boxShadow= 'var(--bxsh-in)';
        // testingBox.style.border= '10px solid var(--bgc)';

        // every time focus after oking
        // textareaEL.addEventListener('blur', () => {
        //     textareaEL.focus();
        // });

        //clean string

        //change direction
        if (persiandarsad(textvalue) > 50) {
            testingBox.style.direction = 'rtl';
            isPersian = true;
        }

        // string to html code for persian
        // if (isPersian) {
        //     textCode += texttext[0];
        //     console.log(persianarray);
        //     for (let i = 0; i < texttext.length - 1; i++) {
        //         if (persianarray.includes(texttext[i]) && persianarray1.includes(texttext[i + 1])) {
        //             textCode += `&zwj;</span><span class="letter">&zwj;${texttext[i + 1]}`;
        //         }
        //         else if (texttext[i] === " ") {
        //             textCode += ` </span></span><span class="word"><span class="letter">${texttext[i + 1]}`;
        //         }
        //         else {
        //             textCode += `</span><span class="letter">${texttext[i + 1]}`;
        //         }
        //     }
        //     textCode += "</span>";
        // }

        // // string to html code for persian
        // else {
        //     textCode = '<span class="word">';
        //     texttext.split("").forEach(event => {
        //         if (event === " ") {
        //             textCode += `</span></span><span class="word">`;
        //         }
        //         else {
        //             textCode += `<span class="letter">           ${event}</span>`;
        //         }
        //     });
        // }



        // animations for transform to type mode
        settings.style.opacity = '0';
        settings.classList.remove('starter');
        typeHistory.classList.remove('starter');
        aboutMe.classList.remove('starter');
        startType.classList.remove('starter');
        miniContainer.style.opacity = '1';
        addingEL.style.transform = 'scale(1.1)';
        addingIcon.style.transform = 'rotate(45deg) scale(1.1)';
        addingIcon2.style.transform = 'translate(1px , -1px)';
        addingIcon1.style.height = '15px';
        addingIcon1.style.transform = 'translate(-5px, 19px) rotate(90deg)';
        startMenu.style.opacity = '0';
        testingBox.style.backgroundColor = 'var(--bgc)';

        setTimeout(() => {

            addingEL.style.opacity = '0';
            addingEL.style.pointerEvents = 'none';

            setTimeout(() => {

                testingContainer.style.bottom = '125px';
                testingContainer.style.width = 'calc(100vw - 60px)'
                testingContainer.style.height = 'calc(72vh - 60px)'
                testingBoxProtector.style.zIndex = '100';
                testingBox.style.height = forTestSize.offsetHeight + 'px';

                // usernameDiv.style.transform = 'translateX(26vw)';
                // usernameDiv.style.width = '50%';
                // usernameDiv.style.fontSize = '24px';

                window.addEventListener('resize', () => testingBox.style.height = forTestSize.offsetHeight + 'px');
                setTimeout(() => {
                    mini_focus();
                    textMiniBox.addEventListener('blur', mini_focus);
                }, 1000);

                textMiniBox.style.transitionDuration = '.2s'
                let step = 0;
                let inputI = "";
                let falsein = false;
                let start_time = true;

                texttextclasses[step].style.outline = '1px solid';


                textMiniBox.addEventListener('input', event => {
                    inputI = textMiniBox.value;
                    if (start_time) {
                        start();
                        km_update();
                        start_time = false;
                    }
                    if (event.data === ' ') {
                        texttextclasses[step].style.outline = 'none';

                        try { texttextclasses[step + 1].style.outline = '1px solid'; }
                        catch {
                            // textMiniBox.removeEventListener('blur', mini_focus);
                            // textMiniBox.blur();
                            km_value = parseInt(trues * 12 / time_real);
                            kmNumber.innerHTML = km_value;
                            km.style.transform = `rotate(${km_value % 180}deg)`;
                            textMiniBox.readOnly = true;
                            clearInterval(timer_key);
                            clearInterval(km_key);

                        }

                        if (texttextclasses[step].innerHTML === inputI) {
                            texttextclasses[step].classList.add('true');
                            trues += textMiniBox.value.length;
                            textMiniBox.value = '';
                            step++;
                        }
                        else {
                            texttextclasses[step].classList.add('false');
                            textMiniBox.value = '';
                            step++;
                            textMiniBox.classList.remove('wrong');
                        }

                    }
                    else {
                        for (let i = 0; i < inputI.length; i++) {
                            if (inputI[i] !== texttextclasses[step].innerText[i]) {
                                falsein = true;
                                break;
                            }
                            else if (falsein === true && inputI[i] === texttextclasses[step].innerText[i]) {
                                falsein = false;
                            }
                        }
                        if (inputI === '') falsein = false;
                        if (falsein === true) textMiniBox.classList.add('wrong');
                        else textMiniBox.classList.remove('wrong');
                    }
                });

            }, 100);
        }, 100);
    }

    else {
        addingEL.style.transform = 'scale(1.1)';
        addingIcon.style.transform = 'rotate(45deg) scale(1.1)';
        setTimeout(() => {
            addingEL.style.transform = 'scale(1)';
            addingIcon.style.transform = 'rotate(0) scale(1)';
        }, 1000);
    }

});

personalThemeInput.addEventListener('input', event => {
    document.documentElement.style.setProperty('--bgc', event.target.value);
    colorSvg.style.fill = event.target.value;
});