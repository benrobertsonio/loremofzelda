/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _quotes2 = __webpack_require__(2);

var _quotes3 = _interopRequireDefault(_quotes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attributes = {
    pTags: false,
    paragraphNumber: Math.floor(Math.random() * 10) + 3,
    sentencesMin: 1,
    sentencesMax: 5
};

var inputs = Array.from(document.querySelectorAll('input'));
inputs.forEach(function (item) {
    item.addEventListener('change', function (ev) {
        updateAttrs(ev.target.name, ev.target.value);
    });
});

function updateAttrs(name, value) {
    if (name !== 'pTags') {
        attributes[name] = parseInt(value);
    } else {
        attributes[name] = !attributes[name];
    }

    console.log(attributes);
}

function lorem(attributes) {
    var pTags = attributes.pTags,
        paragraphNumber = attributes.paragraphNumber,
        sentencesMin = attributes.sentencesMin,
        sentencesMax = attributes.sentencesMax;


    console.log(_quotes3.default);

    var _quotes = { quotes: _quotes3.default },
        text = _quotes.text;


    var textarea = '';

    for (var i = 0; i <= paragraphNumber - 1; i++) {

        var game = Object.keys(text)[Math.floor(Math.random() * Object.keys(text).length)];

        var paragraph = '';
        var sentences = Math.floor(Math.random() * 10) + sentencesMin;
        var random = Math.floor(Math.random() * Object.keys(text).length);

        for (var x = 0; x <= sentencesMax - 1; x++) {
            var _random = Math.floor(Math.random() * text[game].length);
            if (text[game][_random]) {
                paragraph += text[game][_random] + ' ';
                text[game].splice(_random, 1);
            }
        }

        if (paragraph.length > 0) {
            textarea += pTags ? '<p>' + paragraph + '</p>\n\n' : paragraph + '\n\n';
        }
    }

    var element = document.querySelector('#text');
    element.innerHTML = textarea;
}

lorem(attributes);

function copyToClipboard() {
    var target = document.querySelector('#text');

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

var generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', function (e) {
    lorem(attributes);
});

var copyButton = document.querySelector('#copy');
copyButton.addEventListener('click', copyToClipboard);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var quotes = {
    'Legend of Zelda': ['It\'s dangerous to go alone! Take this.', 'It\'s a secret to everybody.', 'Grumble, grumble.', 'Dodongo dislikes smoke.', 'WHEN ALL ELSE FAILS USE FIRE.'],
    'A Link to the Past': ['But what a mischievous thing to leave lying around... The Power Of Gold... Triforce...', 'Well, my mind is getting hazy... Please let me hear the sound of the flute one last time.', 'After Agahnim took over, everyone began to act strangely. I suppose it\'s only a matter of time before I\'m affected, too.', 'May the way of the Hero lead to the Triforce.', 'If a person who has an evil heart gets the Triforce, a Hero is destined to appear... and he alone must face the person who began the Great Cataclysm. If the evil one destroys the Hero, nothing can save the world from his wicked reign. Only a person of the Knights Of Hyrule, who protected the royalty of Hylia, can become the Hero...', 'The man who last claimed the Power Of Gold wished for this world. It reflects his heart. Yes, I came here because of greed for the Golden Power, and look what happened to me...', 'You are perhaps the last one to carry on the blood-line of the Knights... It is ironic that the last one in the line has the potential to become the Hero of legend.'],
    'Wind Waker': ['Are you him? Are you the one who was speaking through my stone without my permission? Answer me!', 'Long ago, there existed a kingdom, where a golden power lay hidden...', 'It was a prosperous land, blessed with green forests, tall mountains, and peace...', 'But one day, a man of great evil found the golden power and took it for himself...', 'With its strength, he commanded darkness across the kingdom...', 'But then, when all hope had died and the hour of doom was at hand, a young boy in green appeared as if from nowhere...', 'Wielding the blade of evil\'s bane, he sealed the dark one away and gave the land light...', 'This boy, who traveled through time to save the land, was known as the Hero of Time...', 'The boy\'s tale was passed down through generations until it became legend...', 'But then, a day came when a fell wind began to blow across the kingdom...'],
    'Ocarina of Time': ['Hey!', 'Listen!', 'Heh heh heh... You want a piece of me?! Very funny! I like your attitude!', 'Watch Out!', 'What\'s that? Oh. So you\'ve got a Deku Shield...', 'And what\'s THAT? Is that the Kokiri Sword? GOOD GRIEF!!!', 'What\'s your name? ...Link... Strange, it sounds... familiar. Okay, Link...', 'I underestimated that boy.', 'No... it was not the boy I underestimated, it was the Triforce of Courage.', 'The Great Deku Tree wants to talk to you!', 'Can Hyrule\'s destiny really depend on such a lazy boy?', '! Who...? Who are you? How did you get past the guards?', 'The flow of time is always cruel... its speed seems different for each person, but no one can change it... A thing that does not change with time is a memory of younger days...', 'I wish I could roll down the mountain like a rock, with a Bomb Flower and... BOOOOOOM! If I could do that with a Bomb Flower, I could become a real man.']
};

exports.default = quotes;

/***/ })
/******/ ]);