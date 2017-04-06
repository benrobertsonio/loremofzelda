import quotes from './quotes';

let attributes = {
    pTags: false,
    paragraphNumber: Math.floor(Math.random() * 10) + 3,
    sentencesMin: 1,
    sentencesMax: 5,
}


const inputs = Array.from(document.querySelectorAll('input'));
inputs.forEach((item) => {
    item.addEventListener('change', ev => {
        updateAttrs(ev.target.name, ev.target.value)
    });
})

function updateAttrs(name, value) {
    if(name !== 'pTags') {
        attributes[name] = parseInt(value);
    } else {
        attributes[name] = !attributes[name];
    }

    console.log(attributes);
}

function lorem(attributes) {
    let { pTags, paragraphNumber, sentencesMin, sentencesMax } = attributes;

    console.log(quotes);

    let { text } = { quotes };

    let textarea = '';

    for (let i = 0; i <= paragraphNumber - 1; i++) {

        let game = Object.keys(text)[Math.floor(Math.random() * Object.keys(text).length)];

        let paragraph = '';
        let sentences = Math.floor(Math.random() * 10) + sentencesMin;
        let random = Math.floor(Math.random() * Object.keys(text).length);


        for (let x = 0; x <= sentencesMax - 1; x++) {
            let random = Math.floor((Math.random() * text[game].length));
            if(text[game][random]) {
                paragraph += `${text[game][random]} `;
                text[game].splice(random, 1);
            }
        }

        if(paragraph.length > 0) {
            textarea += pTags ? `<p>${paragraph}</p>\n\n` : `${paragraph}\n\n`
        }


    }

    const element = document.querySelector('#text');
    element.innerHTML = textarea;
}

lorem(attributes);

function copyToClipboard() {
    const target = document.querySelector('#text');

    // make it visible, so can be focused
    target.focus();
    // select all the text
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        console.error(e);
        succeed = false;
    }

    target.setSelectionRange(0, 0);
    target.blur();

    return succeed;
}

const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', (e) => {
    lorem(attributes);
});

const copyButton = document.querySelector('#copy');
copyButton.addEventListener('click', copyToClipboard);
