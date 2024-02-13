import { characterMaps } from "./maps";

function invertMap(map: any) {
    for (var i = 0; i < map.length; i++) {
        map[map[i]] = i;
    }
    return map;
}

function reMap(text: string, map: any) {
    var ret = [],
        ch;
    for (var i = 0, len = text.length; i < len; i++) {
        ch = text.charAt(i);
        if (i > 0 && (ch == '\u0324' ||
            ch == '\u0317' ||
            ch == '\u0316' ||
            ch == '\u032e')) {
            ch = map[text.charAt(i - 1) + ch];
            ret.pop();
        } else {
            ch = map[ch];
            if (typeof (ch) == "undefined") {
                ch = text.charAt(i);
            }
        }
        ret.push(ch);
    }
    return ret.join("");
}

function creepify(v: string) {
    let diacriticsBottom = [];
    let diacriticsMiddle = [];
    let diacriticsTop = [];

    var options = {
        top: true,
        middle: true,
        bottom: true,
        maxHeight: 2,   // How many diacritic marks shall we put on top/bottom?
        randomization: 50 // 0-100%. maxHeight 100 and randomization 20%: the height goes from 80 to 100. randomization 70%, height goes from 30 to 100.
    }

    for (var i = 768; i <= 789; i++) {
        diacriticsTop.push(String.fromCharCode(i));
    }

    for (var i = 790; i <= 819; i++) {
        if (i != 794 && i != 795) {
            diacriticsBottom.push(String.fromCharCode(i));
        }
    }
    diacriticsTop.push(String.fromCharCode(794));
    diacriticsTop.push(String.fromCharCode(795));

    for (var i = 820; i <= 824; i++) {
        diacriticsMiddle.push(String.fromCharCode(i));
    }

    for (var i = 825; i <= 828; i++) {
        diacriticsBottom.push(String.fromCharCode(i));
    }

    for (var i = 829; i <= 836; i++) {
        diacriticsTop.push(String.fromCharCode(i));
    }
    diacriticsTop.push(String.fromCharCode(836));
    diacriticsBottom.push(String.fromCharCode(837));
    diacriticsTop.push(String.fromCharCode(838));
    diacriticsBottom.push(String.fromCharCode(839));
    diacriticsBottom.push(String.fromCharCode(840));
    diacriticsBottom.push(String.fromCharCode(841));
    diacriticsTop.push(String.fromCharCode(842));
    diacriticsTop.push(String.fromCharCode(843));
    diacriticsTop.push(String.fromCharCode(844));
    diacriticsBottom.push(String.fromCharCode(845));
    diacriticsBottom.push(String.fromCharCode(846));
    diacriticsTop.push(String.fromCharCode(848));
    diacriticsTop.push(String.fromCharCode(849));
    diacriticsTop.push(String.fromCharCode(850));
    diacriticsBottom.push(String.fromCharCode(851));
    diacriticsBottom.push(String.fromCharCode(852));
    diacriticsBottom.push(String.fromCharCode(853));
    diacriticsBottom.push(String.fromCharCode(854));
    diacriticsTop.push(String.fromCharCode(855));
    diacriticsTop.push(String.fromCharCode(856));
    diacriticsBottom.push(String.fromCharCode(857));
    diacriticsBottom.push(String.fromCharCode(858));
    diacriticsTop.push(String.fromCharCode(859));
    diacriticsBottom.push(String.fromCharCode(860));
    diacriticsTop.push(String.fromCharCode(861));
    diacriticsTop.push(String.fromCharCode(861));
    diacriticsBottom.push(String.fromCharCode(863));
    diacriticsTop.push(String.fromCharCode(864));
    diacriticsTop.push(String.fromCharCode(865));

    var newText = '',
        newChar;
    var text = v.split("");
    for (var a in text) {
        newChar = text[a];
        if (options.middle) {
            newChar += diacriticsMiddle[Math.floor(Math.random() * diacriticsMiddle.length)]
        }
        if (options.top) {
            var diacriticsTopLength = diacriticsTop.length - 1;
            for (var count = 0,
                len = options.maxHeight - Math.random() * ((options.randomization / 100) * options.maxHeight); count < len; count++) {
                newChar += diacriticsTop[Math.floor(Math.random() * diacriticsTopLength)]
            }
        }
        if (options.bottom) {
            var diacriticsBottomLength = diacriticsBottom.length - 1;
            for (var count = 0,
                len = options.maxHeight - Math.random() * ((options.randomization / 100) * options.maxHeight); count < len; count++) {
                newChar += diacriticsBottom[Math.floor(Math.random() * diacriticsBottomLength)]
            }
        }
        newText += newChar;
    }
    return newText;
}

export const textModifiers: { name: string, textFunction: Function }[] = [
    {
        name: "Upside Down",
        textFunction: (text: string) => {
            var map = invertMap(characterMaps.upsideDown);
            var encode = reMap(text, map);
            return encode;
        }
    },
    {
        name: "Mirror",
        textFunction: (text: string) => {
            var map = invertMap(characterMaps.mirror);
            var encode = reMap(text, map);
            return encode;
        }
    },
    {
        name: "empty",
        textFunction: (v: string) => {
            return v;
        }
    },
    {
        name: "Creepify",
        textFunction: (v: string) => {
            return creepify(v);
        }
    }
]