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

    let text = {
                'Legend of Zelda': [
                    'It\'s dangerous to go alone! Take this.',
                    'It\'s a secret to everybody.',
                    'Grumble, grumble.',
                    'Dodongo dislikes smoke.',
                    'WHEN ALL ELSE FAILS USE FIRE.',


                ],
                'A Link to the Past': [
                    'But what a mischievous thing to leave lying around... The Power Of Gold... Triforce...',
                    'Well, my mind is getting hazy... Please let me hear the sound of the flute one last time.',
                    'After Agahnim took over, everyone began to act strangely. I suppose it\'s only a matter of time before I\'m affected, too.',
                    'May the way of the Hero lead to the Triforce.',
                    'If a person who has an evil heart gets the Triforce, a Hero is destined to appear... and he alone must face the person who began the Great Cataclysm. If the evil one destroys the Hero, nothing can save the world from his wicked reign. Only a person of the Knights Of Hyrule, who protected the royalty of Hylia, can become the Hero...',
                    'The man who last claimed the Power Of Gold wished for this world. It reflects his heart. Yes, I came here because of greed for the Golden Power, and look what happened to me...',
                    'You are perhaps the last one to carry on the blood-line of the Knights... It is ironic that the last one in the line has the potential to become the Hero of legend.'
                ],
                'Wind Waker': [
                    'Are you him? Are you the one who was speaking through my stone without my permission? Answer me!',
                    'Long ago, there existed a kingdom, where a golden power lay hidden...',
                    'It was a prosperous land, blessed with green forests, tall mountains, and peace...',
                    'But one day, a man of great evil found the golden power and took it for himself...',
                    'With its strength, he commanded darkness across the kingdom...',
                    'But then, when all hope had died and the hour of doom was at hand, a young boy in green appeared as if from nowhere...',
                    'Wielding the blade of evil\'s bane, he sealed the dark one away and gave the land light...',
                    'This boy, who traveled through time to save the land, was known as the Hero of Time...',
                    'The boy\'s tale was passed down through generations until it became legend...',
                    'But then, a day came when a fell wind began to blow across the kingdom...'

                ],
                'Ocarina of Time': [
                    'Hey!',
                    'Listen!',
                    'Heh heh heh... You want a piece of me?! Very funny! I like your attitude!',
                    'Watch Out!',
                    'What\'s that? Oh. So you\'ve got a Deku Shield...',
                    'And what\'s THAT? Is that the Kokiri Sword? GOOD GRIEF!!!',
                    'What\'s your name? ...Link... Strange, it sounds... familiar. Okay, Link...',
                    'I underestimated that boy.',
                    'No... it was not the boy I underestimated, it was the Triforce of Courage.',
                    'The Great Deku Tree wants to talk to you!',
                    'Can Hyrule\'s destiny really depend on such a lazy boy?',
                    '! Who...? Who are you? How did you get past the guards?',
                    'The flow of time is always cruel... its speed seems different for each person, but no one can change it... A thing that does not change with time is a memory of younger days...',
                    'I wish I could roll down the mountain like a rock, with a Bomb Flower and... BOOOOOOM! If I could do that with a Bomb Flower, I could become a real man.'
                ]
            }

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
