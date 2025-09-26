function buildIOSMeta() {
    for (var n, i, r = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], t = 0; t < r.length; t++) n = document.createElement("meta"), n.name = r[t].name, n.content = r[t].content, i = window.document.head.querySelector('meta[name="' + n.name + '"]'), i && i.parentNode.removeChild(i), window.document.head.appendChild(n)
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    var n = "";
    n += '<div class="xxx-ios-fullscreen-message">';
    n += '<div class="xxx-ios-fullscreen-swipe">';
    n += "<\/div>";
    n += "<\/div>";
    n += '<div class="xxx-ios-fullscreen-scroll">';
    n += "<\/div>";
    jQuery("body").append(n)
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    if (window.scrollTo(0, 0), console.log(window.devicePixelRatio), console.log(window.innerWidth), console.log(window.innerHeight), platform.product === "iPhone") switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    window.innerHeight === 320 || jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (n) {
        return !0
    }
}

function isIOSLessThen13() {
    var n = platform.os,
        t = n.family.toLowerCase(),
        i = parseFloat(n.version);
    return t === "ios" && i < 13 ? !0 : !1
}

function trace(n) {
    console.log(n)
}

function getSize(n) {
    var u, e = n.toLowerCase(),
        f = window.document,
        t = f.documentElement,
        i, r;
    return window["inner" + n] === undefined ? u = t["client" + n] : window["inner" + n] != t["client" + n] ? (i = f.createElement("body"), i.id = "vpw-test-b", i.style.cssText = "overflow:scroll", r = f.createElement("div"), r.id = "vpw-test-d", r.style.cssText = "position:absolute;top:-1000px", r.innerHTML = "<style>@media(" + e + ":" + t["client" + n] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}<\/style>", i.appendChild(r), t.insertBefore(i, f.head), u = r["offset" + n] == 7 ? t["client" + n] : window["inner" + n], t.removeChild(i)) : u = window["inner" + n], u
}

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIpad() {
    var n = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        t = navigator.userAgent.includes("Intel Mac OS X");
    return n && t
}

function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}

function isIOS() {
    var n, t;
    if (isIpad()) return !0;
    for (n = ["iPad", "iPhone", "iPod", "Mac"]; n.length;) {
        let i = navigator ?.userAgentData ?.platform || navigator ?.platform;
        if (i = i.toLowerCase(), t = n.pop(), i && i.includes(t.toLowerCase())) return !0
    }
    return !1
}

function getIOSWindowHeight() {
    var n = document.documentElement.clientWidth / window.innerWidth;
    return window.innerHeight * n
}

function getHeightOfIOSToolbars() {
    var n = (window.orientation === 0 ? screen.height : screen.width) - getIOSWindowHeight();
    return n > 1 ? n : 0
}

function sizeHandler() {
    var i, r, f;
    if (window.scrollTo(0, 1), $("#canvas")) {
        i = platform.name !== null && platform.name.toLowerCase() === "safari" ? getIOSWindowHeight() : getSize("Height");
        r = getSize("Width");
        s_bFocus && _checkOrientation(r, i);
        var e = Math.min(i / CANVAS_HEIGHT, r / CANVAS_WIDTH),
            n = CANVAS_WIDTH * e,
            t = CANVAS_HEIGHT * e;
        t < 540 ? document.querySelector("#div_display_id").style.display = "none" : s_oMenu !== null && (document.querySelector("#div_display_id").style.display = "block");
        f = 0;
        t < i ? (f = i - t, t += f, n += f * (CANVAS_WIDTH / CANVAS_HEIGHT)) : n < r && (f = r - n, n += f, t += f * (CANVAS_HEIGHT / CANVAS_WIDTH));
        var u = i / 2 - t / 2,
            o = r / 2 - n / 2,
            s = CANVAS_WIDTH / n;
        (o * s < -EDGEBOARD_X || u * s < -EDGEBOARD_Y) && (e = Math.min(i / (CANVAS_HEIGHT - EDGEBOARD_Y * 2), r / (CANVAS_WIDTH - EDGEBOARD_X * 2)), n = CANVAS_WIDTH * e, t = CANVAS_HEIGHT * e, u = (i - t) / 2, o = (r - n) / 2, s = CANVAS_WIDTH / n);
        s_iOffsetX = -1 * o * s;
        s_iOffsetY = -1 * u * s;
        u >= 0 && (s_iOffsetY = 0);
        o >= 0 && (s_iOffsetX = 0);
        s_oInterface !== null && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oMenu !== null && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        document.querySelector("#canvas").style.width = n + "px";
        document.querySelector("#canvas").style.height = t + "px";
        u < 0 ? $("#canvas").css("top", u + "px") : (u = (i - t) / 2, $("#canvas").css("top", u + "px"));
        $("#canvas").css("left", o + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(n, t) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (n > t ? $(".orientation-msg-container").attr("data-orientation") === "landscape" ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : $(".orientation-msg-container").attr("data-orientation") === "portrait" ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}

function createBitmap(n, t, i) {
    var u = new createjs.Bitmap(n),
        r = new createjs.Shape;
    return t && i ? r.graphics.beginFill("#fff").drawRect(0, 0, t, i) : r.graphics.beginFill("#ff0").drawRect(0, 0, n.width, n.height), u.hitArea = r, u
}

function createSprite(n, t, i, r, u, f) {
    var e, o;
    return e = t !== null ? new createjs.Sprite(n, t) : new createjs.Sprite(n), o = new createjs.Shape, o.graphics.beginFill("#000000").drawRect(-i, -r, u, f), e.hitArea = o, e
}

function randomFloatBetween(n, t, i) {
    return typeof i == "undefined" && (i = 2), parseFloat(Math.min(n + Math.random() * (t - n), t).toFixed(i))
}

function shuffle(n) {
    for (var t = n.length, r, i; 0 !== t;) i = Math.floor(Math.random() * t), t -= 1, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function bubbleSort(n) {
    var i, t, r;
    do
        for (i = !1, t = 0; t < n.length - 1; t++) n[t] > n[t + 1] && (r = n[t], n[t] = n[t + 1], n[t + 1] = r, i = !0); while (i)
}

function easeLinear(n, t, i, r) {
    return i * n / r + t
}

function easeInQuad(n, t, i, r) {
    return i * (n /= r) * n + t
}

function easeInSine(n, t, i, r) {
    return -i * Math.cos(n / r * (Math.PI / 2)) + i + t
}

function easeInCubic(n, t, i, r) {
    return i * (n /= r) * n * n + t
}

function getTrajectoryPoint(n, t) {
    var i = new createjs.Point,
        r = (1 - n) * (1 - n),
        u = n * n;
    return i.x = r * t.start.x + 2 * (1 - n) * n * t.traj.x + u * t.end.x, i.y = r * t.start.y + 2 * (1 - n) * n * t.traj.y + u * t.end.y, i
}

function formatTime(n) {
    var i, t, r;
    return n /= 1e3, i = Math.floor(n / 60), t = n - i * 60, t = parseFloat(t).toFixed(1), r = "", r += i < 10 ? "0" + i + ":" : i + ":", r + (t < 10 ? "0" + t : t)
}

function degreesToRadians(n) {
    return n * Math.PI / 180
}

function checkRectCollision(n, t) {
    var i, r;
    return i = getBounds(n, .9), r = getBounds(t, .98), calculateIntersection(i, r)
}

function calculateIntersection(n, t) {
    var u, f, i = {},
        r = {};
    return i.cx = n.x + (i.hw = n.width / 2), i.cy = n.y + (i.hh = n.height / 2), r.cx = t.x + (r.hw = t.width / 2), r.cy = t.y + (r.hh = t.height / 2), u = Math.abs(i.cx - r.cx) - (i.hw + r.hw), f = Math.abs(i.cy - r.cy) - (i.hh + r.hh), u < 0 && f < 0 ? (u = Math.min(Math.min(n.width, t.width), -u), f = Math.min(Math.min(n.height, t.height), -f), {
        x: Math.max(n.x, t.x),
        y: Math.max(n.y, t.y),
        width: u,
        height: f,
        rect1: n,
        rect2: t
    }) : null
}

function getBounds(n, t) {
    var i = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        },
        l, v, u, c, f, e, o, s, r, a, h;
    if (n instanceof createjs.Container) {
        for (i.x2 = -Infinity, i.y2 = -Infinity, l = n.children, v = l.length, c = 0; c < v; c++) u = getBounds(l[c], 1), u.x < i.x && (i.x = u.x), u.y < i.y && (i.y = u.y), u.x + u.width > i.x2 && (i.x2 = u.x + u.width), u.y + u.height > i.y2 && (i.y2 = u.y + u.height);
        i.x == Infinity && (i.x = 0);
        i.y == Infinity && (i.y = 0);
        i.x2 == Infinity && (i.x2 = 0);
        i.y2 == Infinity && (i.y2 = 0);
        i.width = i.x2 - i.x;
        i.height = i.y2 - i.y;
        delete i.x2;
        delete i.y2
    } else r = {}, n instanceof createjs.Bitmap ? (a = n.sourceRect || n.image, r.width = a.width * t, r.height = a.height * t) : n instanceof createjs.Sprite ? n.spriteSheet._frames && n.spriteSheet._frames[n.currentFrame] && n.spriteSheet._frames[n.currentFrame].image ? (h = n.spriteSheet.getFrame(n.currentFrame), r.width = h.rect.width, r.height = h.rect.height, r.regX = h.regX, r.regY = h.regY) : (i.x = n.x || 0, i.y = n.y || 0) : (i.x = n.x || 0, i.y = n.y || 0), r.regX = r.regX || 0, r.width = r.width || 0, r.regY = r.regY || 0, r.height = r.height || 0, i.regX = r.regX, i.regY = r.regY, f = n.localToGlobal(0 - r.regX, 0 - r.regY), e = n.localToGlobal(r.width - r.regX, r.height - r.regY), o = n.localToGlobal(r.width - r.regX, 0 - r.regY), s = n.localToGlobal(0 - r.regX, r.height - r.regY), i.x = Math.min(Math.min(Math.min(f.x, e.x), o.x), s.x), i.y = Math.min(Math.min(Math.min(f.y, e.y), o.y), s.y), i.width = Math.max(Math.max(Math.max(f.x, e.x), o.x), s.x) - i.x, i.height = Math.max(Math.max(Math.max(f.y, e.y), o.y), s.y) - i.y;
    return i
}

function NoClickDelay(n) {
    this.element = n;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(n) {
    for (var t = n.length, r, i; t > 0;) i = Math.floor(Math.random() * t), t--, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function ctlArcadeResume() {
    s_oMain !== null && s_oMain.startUpdate()
}

function ctlArcadePause() {
    s_oMain !== null && s_oMain.stopUpdate()
}

function getParamValue(n) {
    for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
        if (i = r[t].split("="), i[0] == n) return i[1]
}

function playSound(n, t, i) {
    return DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (s_aSounds[n].play(), s_aSounds[n].volume(t), s_aSounds[n].loop(i), s_aSounds[n]) : null
}

function stopSound(n) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].stop()
}

function setVolume(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].volume(t)
}

function setMute(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].mute(t)
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, s_oInterface !== null && s_oInterface.resetFullscreenBut(), s_oMenu !== null && s_oMenu.resetFullscreenBut())
}

function CSpriteLibrary() {
    var t = {},
        n, i, u, f, e, r;
    this.init = function(t, o, s) {
        n = {};
        i = 0;
        u = 0;
        f = t;
        e = o;
        r = s
    };
    this.addSprite = function(r, u) {
        if (!t.hasOwnProperty(r)) {
            var f = new Image;
            t[r] = n[r] = {
                szPath: u,
                oSprite: f,
                bLoaded: !1
            };
            i++
        }
    };
    this.getSprite = function(n) {
        return t.hasOwnProperty(n) ? t[n].oSprite : null
    };
    this._onSpritesLoaded = function() {
        i = 0;
        e.call(r)
    };
    this._onSpriteLoaded = function() {
        f.call(r);
        ++u === i && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var t in n) n[t].oSprite.oSpriteLibrary = this, n[t].oSprite.szKey = t, n[t].oSprite.onload = function() {
            this.oSpriteLibrary.setLoaded(this.szKey);
            this.oSpriteLibrary._onSpriteLoaded(this.szKey)
        }, n[t].oSprite.onerror = function(t) {
            var i = t.currentTarget;
            setTimeout(function() {
                n[i.szKey].oSprite.src = n[i.szKey].szPath
            }, 500)
        }, n[t].oSprite.src = n[t].szPath
    };
    this.setLoaded = function(n) {
        t[n].bLoaded = !0
    };
    this.isLoaded = function(n) {
        return t[n].bLoaded
    };
    this.getNumSprites = function() {
        return i
    }
}

function CTLText(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    this._oContainer = n;
    this._x = t;
    this._y = i;
    this._iWidth = r;
    this._iHeight = u;
    this._bMultiline = p;
    this._iFontSize = f;
    this._szAlign = e;
    this._szColor = o;
    this._szFont = s;
    this._iPaddingH = c;
    this._iPaddingV = l;
    this._bVerticalAlign = y;
    this._bFitText = v;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = h;
    this._oText = null;
    a && this.__createText(a)
}

function CPreloader() {
    var s, o, r, t, u, f, i, e, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.png");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function() {
        n.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var c = new createjs.Shape,
            h;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(c);
        h = s_oSpriteLibrary.getSprite("200x200");
        i = createBitmap(h);
        i.regX = h.width * .5;
        i.regY = h.height * .5;
        i.x = CANVAS_WIDTH / 2;
        i.y = CANVAS_HEIGHT / 2 - 180;
        n.addChild(i);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(i.x - 100, i.y - 100, 200, 200, 10);
        n.addChild(e);
        i.mask = e;
        h = s_oSpriteLibrary.getSprite("progress_bar");
        t = createBitmap(h);
        t.x = CANVAS_WIDTH / 2 - h.width / 2;
        t.y = CANVAS_HEIGHT / 2 + 50;
        n.addChild(t);
        s = h.width;
        o = h.height;
        u = new createjs.Shape;
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, 1, o);
        n.addChild(u);
        t.mask = u;
        r = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 + 100;
        r.textBaseline = "alphabetic";
        r.textAlign = "center";
        n.addChild(r);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            n.removeChild(f)
        })
    };
    this.refreshLoader = function(n) {
        r.text = n + "%";
        n === 100 && (s_oMain._onRemovePreloader(), r.visible = !1, t.visible = !1);
        u.graphics.clear();
        var i = Math.floor(n * s / 100);
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, i, o)
    };
    this._init()
}

function CMain(n) {
    var r, u = 0,
        f = 0,
        t = STATE_LOADING,
        o, e, h, c, l, s, i;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage, !0);
        s_bMobile = isMobile();
        s_bMobile === !1 && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && this._initSounds();
        r = !0
    };
    this.soundLoaded = function() {
        u++;
        var n = Math.floor(u / f * 100);
        e.refreshLoader(n)
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card_dealing",
            loop: !1,
            volume: 1,
            ingamename: "card_dealing"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "snap",
            loop: !1,
            volume: 1,
            ingamename: "snap"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card",
            loop: !1,
            volume: 1,
            ingamename: "card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        f += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var n = 0; n < s_aSoundsInfo.length; n++) this.tryToLoadSound(s_aSoundsInfo[n], !1)
    };
    this.tryToLoadSound = function(n, t) {
        setTimeout(function() {
            s_aSounds[n.ingamename] = new Howl({
                src: [n.path + n.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: n.loop,
                volume: n.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (s_aSounds[s_aSoundsInfo[t].ingamename]._sounds.length > 0 && n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[t], !0);
                            break
                        } else document.querySelector("#block_game").style.display = "none"
                },
                onplayerror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                s_aSoundsInfo[t].ingamename === "soundtrack" && s_oGame !== null && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, t ? 200 : 0)
    };
    this._loadImages = function() {
        var n, t;
        for (s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this), s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png"), s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg"), s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg"), s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png"), s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png"), s_oSpriteLibrary.addSprite("hintpanel", "./sprites/hint_panel.png"), s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png"), s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png"), s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png"), s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png"), s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png"), s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png"), s_oSpriteLibrary.addSprite("moves_display", "./sprites/moves_display.png"), s_oSpriteLibrary.addSprite("score_display", "./sprites/score_display.png"), s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png"), s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png"), s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png"), s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png"), s_oSpriteLibrary.addSprite("but_lang", "./sprites/but_lang.png"), s_oSpriteLibrary.addSprite("but_more_solitaires", "./sprites/but_more_solitaires.png"), s_oSpriteLibrary.addSprite("msg_box_small", "./sprites/msg_box_small.png"), n = 0; n < NUM_LANGUAGES; n++) s_oSpriteLibrary.addSprite("logo_" + n, "./sprites/logo_" + n + ".png");
        for (t = 0; t < 53; t++) s_oSpriteLibrary.addSprite("card_" + t, "./sprites/cards/card_" + t + ".png");
        f += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        u++;
        var n = Math.floor(u / f * 100);
        e.refreshLoader(n)
    };
    this._onRemovePreloader = function() {
        try {
            checkMoreGames(s_szGameID, "middle-left", ["cards", "board", "multiplayer"], [], -1, "blue")
        } catch (n) {}
        e.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        try {
            showMoreGames()
        } catch (n) {}
        h = new CMenu;
        t = STATE_MENU
    };
    this.goToModeMenu = function() {
        c = new CModeMenu;
        t = STATE_MENU
    };
    this.gotoGame = function(n) {
        s_bEasyMode = n;
        s = new CGame(o);
        t = STATE_GAME
    };
    this.gotoHelp = function() {
        l = new CHelp;
        t = STATE_HELP
    };
    this.stopUpdate = function() {
        r = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        r = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_bAudioActive && !s_bAdShown && Howler.mute(!1)
    };
    this._update = function(n) {
        if (r !== !1) {
            var i = (new Date).getTime();
            s_iTimeElaps = i - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = i;
            s_iCntTime >= 1e3 && (s_iCurFps = s_iCntFps, s_iCntTime -= 1e3, s_iCntFps = 0);
            t === STATE_GAME && s.update();
            s_oStage.update(n)
        }
    };
    s_oMain = this;
    o = n;
    ENABLE_FULLSCREEN = n.fullscreen;
    ENABLE_CHECK_ORIENTATION = n.check_orientation;
    s_bAudioActive = n.audio_enable_on_startup;
    i = navigator.language.split("-")[0];
    console.log("iLang " + i);
    LANG_CODES[i] === undefined && (i = "en");
    s_iCurLang = LANG_CODES[i];
    this.initContainer();
    refreshLanguage()
}

function CTextButton(n, t, i, r, u, f, e, o, s) {
    var l, a, nt, tt, c, v, p, y, w, b, h, k, d, g = s,
        it = this;
    this._init = function(n, t, i, r, u, f, e, o) {
        l = !1;
        a = 1;
        c = [];
        v = [];
        h = new createjs.Container;
        h.x = n;
        h.y = t;
        h.regX = i.width / 2;
        h.regY = i.height / 2;
        h.cursor = "pointer";
        g.addChild(h);
        d = createBitmap(i);
        nt = i.width;
        tt = i.height;
        h.addChild(d);
        var s = 0,
            y = i.height - 10;
        o || (s = i.height / 2 - e / 2, y = e);
        k = new CTLText(h, 30, s, i.width - 60, y, e, "center", f, u, 1, 0, 0, r, !0, !0, o, !1);
        this._initListener()
    };
    this.unload = function() {
        if (h.off("mousedown", p), !s_bMobile) h.on("rollout", w);
        g.removeChild(h)
    };
    this.setVisible = function(n) {
        h.visible = n
    };
    this.setScale = function(n) {
        h.scale = n;
        a = n
    };
    this.enable = function() {
        l = !1
    };
    this.disable = function() {
        l = !0
    };
    this._initListener = function() {
        p = h.on("mousedown", this.buttonDown);
        s_bMobile || (w = h.on("rollout", this.buttonOut))
    };
    this.addEventListener = function(n, t, i) {
        c[n] = t;
        v[n] = i
    };
    this.addEventListenerWithParams = function(n, t, i, r) {
        c[n] = t;
        v[n] = i;
        b = r
    };
    this.buttonRelease = function() {
        l || (h.off("pressup", y), h.scale = a, c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(v[ON_MOUSE_UP], b))
    };
    this.buttonDown = function() {
        l || (playSound("click", 1, !1), y = h.on("pressup", it.buttonRelease), h.scale = a * .9, c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))
    };
    this.buttonOut = function() {
        h.off("pressup", y);
        h.scale = a
    };
    this.setPosition = function(n, t) {
        h.x = n;
        h.y = t
    };
    this.tweenPosition = function(n, t, i, r, u, f, e) {
        createjs.Tween.get(h).wait(r).to({
            x: n,
            y: t
        }, i, u).call(function() {
            f !== undefined && f.call(e)
        })
    };
    this.changeText = function(n) {
        k.refreshText(n)
    };
    this.setX = function(n) {
        h.x = n
    };
    this.setY = function(n) {
        h.y = n
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this.getSprite = function() {
        return h
    };
    this.getScale = function() {
        return h.scale
    };
    this._init(n, t, i, r, u, f, e, o)
}

function CToggle(n, t, i, r, u) {
    var e, o, s, f, h, c, l;
    this._init = function(n, t, i, r) {
        o = [];
        s = [];
        var u = {
                images: [i],
                frames: {
                    width: i.width / 2,
                    height: i.height,
                    regX: i.width / 4,
                    regY: i.height / 2
                },
                animations: {
                    state_true: [0],
                    state_false: [1]
                }
            },
            c = new createjs.SpriteSheet(u);
        e = r;
        f = createSprite(c, "state_" + e, i.width / 4, i.height / 2, i.width / 2, i.height);
        f.x = n;
        f.y = t;
        f.stop();
        s_bMobile || (f.cursor = "pointer");
        h.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", c);
        f.off("pressup", l);
        h.removeChild(f)
    };
    this._initListener = function() {
        c = f.on("mousedown", this.buttonDown);
        l = f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(n, t, i) {
        o[n] = t;
        s[n] = i
    };
    this.setActive = function(n) {
        e = n;
        f.gotoAndStop("state_" + e)
    };
    this.setPosition = function(n, t) {
        f.x = n;
        f.y = t
    };
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        f.gotoAndStop("state_" + e);
        o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(s[ON_MOUSE_UP], e)
    };
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN])
    };
    h = u;
    this._init(n, t, i, r)
}

function CGfxButton(n, t, i, r) {
    var o, f, e, s, l = [],
        u, a, y, h, v, c;
    return this._init = function(n, t, i, r) {
        o = !1;
        f = 1;
        e = [];
        s = [];
        u = createBitmap(i);
        u.x = n;
        u.y = t;
        u.scaleX = u.scaleY = f;
        u.regX = i.width / 2;
        u.regY = i.height / 2;
        r.addChild(u);
        this._initListener()
    }, this.unload = function() {
        s_bMobile ? (u.off("mousedown", h), u.off("pressup", c)) : (u.off("mousedown", h), u.off("mouseover", v), u.off("pressup", c));
        r.removeChild(u)
    }, this.setVisible = function(n) {
        u.visible = n
    }, this.setClickable = function(n) {
        o = !n
    }, this._initListener = function() {
        s_bMobile ? (h = u.on("mousedown", this.buttonDown), c = u.on("pressup", this.buttonRelease)) : (h = u.on("mousedown", this.buttonDown), v = u.on("mouseover", this.buttonOver), c = u.on("pressup", this.buttonRelease))
    }, this.addEventListener = function(n, t, i) {
        e[n] = t;
        s[n] = i
    }, this.addEventListenerWithParams = function(n, t, i, r) {
        e[n] = t;
        s[n] = i;
        l = r
    }, this.buttonRelease = function() {
        o || (u.scaleX = f, u.scaleY = f, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(s[ON_MOUSE_UP], l))
    }, this.buttonDown = function() {
        o || (u.scaleX = f * .9, u.scaleY = f * .9, playSound("click", 1, !1), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN], l))
    }, this.buttonOver = function(n) {
        if (!s_bMobile) {
            if (o) return;
            n.target.cursor = "pointer"
        }
    }, this.pulseAnimation = function() {
        a = createjs.Tween.get(u, {
            loop: !0
        }).to({
            scaleX: f * 1.1,
            scaleY: f * 1.1
        }, 850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: f
        }, 650, createjs.Ease.quadIn)
    }, this.trembleAnimation = function() {
        a = createjs.Tween.get(u, {
            loop: !0
        }).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750)
    }, this.setPosition = function(n, t) {
        u.x = n;
        u.y = t
    }, this.setX = function(n) {
        u.x = n
    }, this.setY = function(n) {
        u.y = n
    }, this.getButtonImage = function() {
        return u
    }, this.getX = function() {
        return u.x
    }, this.getY = function() {
        return u.y
    }, y = this, this._init(n, t, i, r), this
}

function CMenu() {
    var l, f, e, o, a, s, v, h, n, t = null,
        y = null,
        i, r, c, u;
    this._init = function() {
        var d, k, p, w, b;
        s_bMobile || (document.querySelector("#div_display_id").style.display = "block");
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(l);
        d = s_oSpriteLibrary.getSprite("logo_" + s_iCurLang);
        n = createBitmap(d);
        n.regX = d.width / 2;
        n.x = CANVAS_WIDTH / 2;
        n.y = 150;
        s_oStage.addChild(n);
        p = s_oSpriteLibrary.getSprite("but_generic");
        f = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 320, p, TEXT_PLAY, PRIMARY_FONT, "#fff", 40, !0, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        k = s_oSpriteLibrary.getSprite("but_lang");
        DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (p = s_oSpriteLibrary.getSprite("audio_icon"), i = {
            x: CANVAS_WIDTH - p.height / 2 - 10,
            y: p.height / 2 + 10
        }, o = new CToggle(i.x, i.y, p, s_bAudioActive, s_oStage), o.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), u = {
            x: i.x - k.width / NUM_LANGUAGES - 10,
            y: i.y - 4
        }) : u = {
            x: CANVAS_WIDTH - p.width / 4 - 10,
            y: k.height / 2 + 10
        };
        h = new CButLang(u.x, u.y, NUM_LANGUAGES, s_iCurLang, k, s_oStage);
        h.addEventListener(ON_SELECT_LANG, this._onSelectLang, this);
        p = s_oSpriteLibrary.getSprite("but_credits");
        r = {
            x: p.height / 2 + 10,
            y: p.height / 2 + 10
        };
        a = new CGfxButton(r.x, r.y, p, s_oStage);
        a.addEventListener(ON_MOUSE_UP, this._onButCreditRelease, this);
        w = window.document;
        b = w.documentElement;
        t = b.requestFullscreen || b.mozRequestFullScreen || b.webkitRequestFullScreen || b.msRequestFullscreen;
        y = w.exitFullscreen || w.mozCancelFullScreen || w.webkitExitFullscreen || w.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (t = !1);
        t && screenfull.isEnabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), c = {
            x: r.x + p.width / 2 + 10,
            y: r.y
        }, s = new CToggle(c.x, c.y, p, s_bFullscreen, s_oStage), s.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        v = new CLangPanel(s_oStage);
        v.addEventListener(ON_SELECT_LANG, this._onChangeLang, this);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 1e3).call(function() {
            e.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(n, f) {
        a.setPosition(r.x + s_iOffsetX, s_iOffsetY + r.y);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && o.setPosition(i.x - n, f + i.y);
        t && screenfull.isEnabled && s.setPosition(c.x + s_iOffsetX, c.y + s_iOffsetY);
        h.setPosition(u.x - s_iOffsetX, u.y + s_iOffsetY)
    };
    this.unload = function() {
        f.unload();
        f = null;
        a.unload();
        h.unload();
        v.unload();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (o.unload(), o = null);
        t && screenfull.isEnabled && s.unload();
        s_oStage.removeChild(l);
        l = null;
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        typeof gdsdk != "undefined" && gdsdk.showAd !== "undefined" && gdsdk.showAd();
        document.querySelector("#div_display_id").style.display = "none";
        try {
            hideMoreGames()
        } catch (n) {}
        this.unload();
        $(s_oMain).trigger("start_session");
        $(s_oMain).trigger("start_level", 1);
        s_oMain.gotoGame()
    };
    this._onButCreditRelease = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        t && screenfull.isEnabled && s.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? y.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onSelectLang = function() {
        v.show()
    };
    this._onChangeLang = function(t) {
        s_iCurLang = t;
        h.setLang(t);
        refreshLanguage();
        f.changeText(TEXT_PLAY);
        var i = s_oSpriteLibrary.getSprite("logo_" + s_iCurLang);
        n.image = i;
        n.regX = i.width / 2
    };
    s_oMenu = this;
    this._init()
}

function CGame(n) {
    var et, p, b, k, nt, l, tt, h, it, u, ft, w, c, e, rt, o, i, s, a, t, f, v, ut = null,
        y, d, r, g;
    this._init = function() {
        var g, u, n, r;
        for (et = !1, p = !0, b = !0, k = !1, nt = !1, h = 25, it = 0, w = 5, l = START_SCORE, tt = 0, a = [], f = [], i = [], n = 0; n < 4; n++) i[n] = null;
        for (g = createBitmap(s_oSpriteLibrary.getSprite("bg_game")), s_oStage.addChild(g), y = new createjs.Container, s_oStage.addChild(y), v = new CInterface, v.refreshScore(l), e = [], n = 0; n < 4; n++) e[n] = 1;
        for (c = [], c[SUIT_HEARTS] = {
                x: 1294,
                y: 211
            }, c[SUIT_SPADES] = {
                x: 1294,
                y: 349
            }, c[SUIT_DIAMONDS] = {
                x: 1294,
                y: 483
            }, c[SUIT_CLUBS] = {
                x: 1294,
                y: 618
            }, rt = [], n = 0; n < 4; n++) rt[n] = new createjs.Rectangle(c[n].x - CARD_LOGIC_WIDTH / 2, c[n].y - CARD_LOGIC_HEIGHT / 2, CARD_LOGIC_WIDTH, CARD_LOGIC_HEIGHT);
        for (o = [], o[0] = {
                x: 304,
                y: 211
            }, o[1] = {
                x: 304,
                y: 349
            }, o[2] = {
                x: 304,
                y: 483
            }, o[3] = {
                x: 304,
                y: 618
            }, d = {
                x: CANVAS_WIDTH / 2,
                y: CANVAS_HEIGHT - 164
            }, u = 0, s = [], n = 0; n < 7; n++)
            for (r = 0; r < 8; r++) s[u] = {
                x: 449 + r * 100,
                y: 212 + n * h
            }, u++;
        for (t = [], n = 0; n < 25; n++)
            for (t[n] = [], r = 0; r < 8; r++) t[n][r] = {
                status: LABEL_EMPTY,
                oCard: null
            };
        this._shuffleCard(!0);
        this._setBoard();
        s_oStage.addEventListener("stagemousemove", this.dragCard, !1);
        s_oStage.addEventListener("stagemouseup", this.releaseCard, !1)
    };
    this._shuffleCard = function(n) {
        for (var u, f, i, t, o = -1, r = [], e = 0; e < 52; e++) u = (e + 1) % 13, u === 1 ? o++ : u === 0 && (u = 13), r.push({
            fotogram: e,
            rank: u,
            suit: o
        });
        for (f = [], t = 0; t < r.length; t++) f[t] = r[t];
        for (i = []; f.length > 0;) i.push(f.splice(Math.round(Math.random() * (f.length - 1)), 1)[0]);
        if (n)
            for (t = 0; t < i.length; t++) a[t] = new CCard(d.x, d.y, y, i[t].fotogram, i[t].rank, i[t].suit);
        else
            for (t = 0; t < i.length; t++) a[t] = new CCard(d.x, d.y, y, r[t].fotogram, r[t].rank, r[t].suit)
    };
    this._setBoard = function() {
        for (var i, u = 0, r = a.length - 1, n = 0; n < 52; n++) a[51 - n].moveCard(s[n].x, s[n].y, 100, u), a[51 - n].setType("board"), u += 100;
        for (n = 0; n < 7; n++)
            for (i = 0; i < 8; i++)
                if (t[n][i].oCard = a[r], t[n][i].status = LABEL_SHOWN, r--, r < 0) break
    };
    this.scaleDepth = function(n) {
        y.setChildIndex(n.getSprite(), it);
        it++;
        n.showCard();
        it === 52 && (p = !1, b = !1, v.setVisibleButHelp())
    };
    this.pickCard = function(n, i) {
        var d, s, b, a, e, o;
        if (f.length === 0 && !p) {
            for (d = !1, p = !0, u = {
                    x: n.getPos().x,
                    y: n.getPos().y
                }, ft = {
                    x: i.stageX / s_iScaleFactor - u.x,
                    y: i.stageY / s_iScaleFactor - u.y
                }, s = 0; s < 8; s++)
                for (e = t.length - 1; e >= 0; e--) t[e][s].oCard === n && (r = {
                    row: e,
                    column: s
                });
            if (n.checkType() === "freecell") o = n.saveInfo(), f[0] = new CCard(u.x, u.y, y, o.szFotogram, o.iRank, o.iSuit), f[0].setType("freecell"), f[0].instantShow(), n.unload();
            else if (n.checkType() === "board") {
                if (d)
                    for (b = 0, e = r.row; e < t.length; e++)
                        if (t[e][r.column].status === LABEL_SHOWN) b++;
                        else break;
                else {
                    var b = 1,
                        c = n.getRank(),
                        l = n.getColor(),
                        g = r.row + w,
                        k = !1;
                    if (t[g][r.column].status === LABEL_SHOWN) {
                        for (e = r.row; e < t.length - 1; e++) {
                            if (t[e + 1][r.column].status === LABEL_EMPTY) break;
                            if (t[e + 1][r.column].oCard.getColor() !== l && t[e + 1][r.column].oCard.getRank() === c - 1) k = !0, c--, l = t[e + 1][r.column].oCard.getColor();
                            else {
                                k = !1;
                                break
                            }
                        }
                        k && v.showHint("drag", w);
                        return
                    }
                    for (c = n.getRank(), l = n.getColor(), e = r.row; e < g; e++)
                        if (t[e + 1][r.column].status === LABEL_SHOWN && t[e + 1][r.column].oCard.getColor() !== l && t[e + 1][r.column].oCard.getRank() === c - 1) b++, c--, l = t[e + 1][r.column].oCard.getColor();
                        else if (t[e + 1][r.column].status === LABEL_EMPTY) break;
                    else return
                }
                for (a = [], e = 0; e < b; e++) a[e] = t[r.row + e][r.column].oCard.saveInfo(), f[e] = new CCard(u.x, u.y + e * h, y, a[e].szFotogram, a[e].iRank, a[e].iSuit), f[e].setType("board"), t[r.row + e][r.column].oCard.unload(), f[e].instantShow()
            } else o = n.saveInfo(), f[0] = new CCard(u.x, u.y, y, o.szFotogram, o.iRank, o.iSuit), f[0].setType("suit"), f[0].instantShow(), n.unload()
        }
    };
    this.dragCard = function(n) {
        var i = parseInt(n.stageX / s_iScaleFactor),
            r = parseInt(n.stageY / s_iScaleFactor),
            t;
        if (!b && p)
            for (t = 0; t < f.length; t++) f[t].setPos(i - ft.x, r - ft.y + t * h)
    };
    this.releaseCard = function() {
        if (b === !1 && f.length > 0) p = !1;
        else {
            p = !1;
            return
        }
        g._checkFreeCellCollision(f);
        k || g._checkSuitCollision(f);
        k || nt || g._checkCardCollision(f);
        g._controlBoard();
        r = null;
        f = [];
        k = !1;
        nt = !1
    };
    this._checkCardCollision = function(n) {
        for (var a, f, v = 0, y = [], c = [], l = 0; l < 8; l++)
            for (f = t.length - 1; f >= 0; f--)
                if (t[f][l].status === LABEL_SHOWN) {
                    y[v] = t[f][l].oCard.getLogicRect();
                    c[v] = {
                        oCard: t[f][l].oCard,
                        x: t[f][l].oCard.getPos().x,
                        y: t[f][l].oCard.getPos().y,
                        row: f,
                        column: l
                    };
                    v++;
                    break
                } else f === 0 && (y[v] = new createjs.Rectangle(s[l].x - CARD_LOGIC_WIDTH / 2, s[l].y - CARD_LOGIC_HEIGHT / 2, CARD_LOGIC_WIDTH, CARD_LOGIC_HEIGHT), v++);
        var p = 0,
            o = -1,
            w = n[0].getLogicRect();
        for (f = 0; f < y.length; f++) a = w.intersection(y[f]), a !== null && p < a.width * a.height && (p = a.width * a.height, o = f);
        if (o < 0)
            if (n[0].checkType() === "freecell") n[0].stackInPlace(u.x, u.y, 200);
            else if (n[0].checkType() === "board")
            for (f = 0; f < n.length; f++) n[f].stackInPlace(u.x, u.y + f * h, 200), t[r.row + f][r.column].oCard = n[f];
        else n[0].stackInPlace(u.x, u.y, 200);
        else if (t[0][o].status === LABEL_EMPTY) {
            if (n[0].checkType() === "freecell")
                for (n[0].stackInPlace(s[o].x, s[o].y, 200), n[0].setType("board"), t[0][o].status = LABEL_SHOWN, t[0][o].oCard = n[0], f = 0; f < i.length; f++) i[f] === null || n[0].getRank() === i[f].getRank() && n[0].getSuit() === i[f].getSuit() && (i[f] = null);
            else if (n[0].checkType() === "board")
                for (f = 0; f < n.length; f++) n[f].stackInPlace(s[o].x, s[o].y + f * h, 200), n[f].setType("board"), t[f][o].status = LABEL_SHOWN, t[r.row + f][r.column].status = LABEL_EMPTY, t[f][o].oCard = n[f];
            else n[0].stackInPlace(s[o].x, s[o].y, 200), n[0].setType("board"), t[0][o].status = LABEL_SHOWN, t[0][o].oCard = n[0], e[n[0].getSuit()]--;
            this._updateMoves();
            this._removeScore()
        } else if (c[o].oCard.getRank() - n[0].getRank() == 1 && c[o].oCard.getColor() !== n[0].getColor()) {
            if (n[0].checkType() === "freecell")
                for (n[0].stackInPlace(c[o].x, c[o].y + h, 200), n[0].setType("board"), t[c[o].row + 1][o].status = LABEL_SHOWN, t[c[o].row + 1][o].oCard = n[0], f = 0; f < i.length; f++) i[f] === null || n[0].getRank() === i[f].getRank() && n[0].getSuit() === i[f].getSuit() && (i[f] = null);
            else if (n[0].checkType() === "board")
                for (f = 0; f < n.length; f++) n[f].stackInPlace(c[o].x, c[o].y + h + f * h, 200), t[c[o].row + 1 + f][c[o].column].status = LABEL_SHOWN, t[r.row + f][r.column].status = LABEL_EMPTY, t[c[o].row + 1 + f][c[o].column].oCard = n[f];
            else n[0].stackInPlace(c[o].x, c[o].y + h, 200), n[0].setType("board"), t[c[o].row + 1][o].status = LABEL_SHOWN, t[c[o].row + 1][o].oCard = n[0], e[n[0].getSuit()]--;
            this._updateMoves();
            this._removeScore()
        } else if (n[0].checkType() === "freecell") n[0].stackInPlace(u.x, u.y, 200);
        else if (n[0].checkType() === "board")
            for (f = 0; f < n.length; f++) n[f].stackInPlace(u.x, u.y + f * h, 200), t[r.row + f][r.column].oCard = n[f];
        else n[0].stackInPlace(u.x, u.y, 200)
    };
    this._checkFreeCellCollision = function(n) {
        var h, s, u;
        if (!(n.length > 1)) {
            for (h = [], u = 0; u < 4; u++) h[u] = i[u] === null ? new createjs.Rectangle(o[u].x - CARD_LOGIC_WIDTH / 2, o[u].y - CARD_LOGIC_HEIGHT / 2, CARD_LOGIC_WIDTH, CARD_LOGIC_HEIGHT) : new createjs.Rectangle(o[u].x - CARD_LOGIC_WIDTH / 2, o[u].y - CARD_LOGIC_HEIGHT / 2, 0, 0);
            var c = 0,
                f = -1,
                l = n[0].getLogicRect();
            for (u = 0; u < h.length; u++) s = l.intersection(h[u]), s !== null && c < s.width * s.height && (c = s.width * s.height, f = u);
            if (!(f < 0)) {
                if (n[0].checkType() === "freecell") {
                    for (u = 0; u < i.length; u++) i[u] === null || n[0].getRank() === i[u].getRank() && n[0].getSuit() === i[u].getSuit() && (i[u] = null);
                    n[0].stackInPlace(o[f].x, o[f].y, 200);
                    i[f] = n[0]
                } else n[0].checkType() === "board" ? (n[0].setType("freecell"), n[0].stackInPlace(o[f].x, o[f].y, 200), t[r.row][r.column].status = LABEL_EMPTY, i[f] = n[0]) : (n[0].setType("freecell"), n[0].stackInPlace(o[f].x, o[f].y, 200), i[f] = n[0], e[n[0].getSuit()]--);
                k = !0;
                this._updateMoves();
                this._removeScore()
            }
        }
    };
    this._checkSuitCollision = function(n) {
        var o, u;
        if (!(n.length > 1) && n[0].checkType() !== "suit") {
            var s = 0,
                f = -1,
                h = n[0].getLogicRect();
            for (u = 0; u < rt.length; u++) o = h.intersection(rt[u]), o !== null && s < o.width * o.height && (s = o.width * o.height, f = u);
            if (!(f < 0) && n[0].getRank() === e[n[0].getSuit()] && f === n[0].getSuit()) {
                if (playSound("snap", 1, !1), n[0].checkType() === "freecell") {
                    for (u = 0; u < i.length; u++) i[u] === null || n[0].getRank() === i[u].getRank() && n[0].getSuit() === i[u].getSuit() && (i[u] = null);
                    n[0].stackInPlace(c[f].x, c[f].y, 200)
                } else n[0].stackInPlace(c[f].x, c[f].y, 200), t[r.row][r.column].status = LABEL_EMPTY;
                e[n[0].getSuit()]++;
                n[0].setType("suit");
                nt = !0;
                this._updateMoves();
                this._removeScore()
            }
        }
    };
    this._controlBoard = function() {
        for (var u, y, s, c, a, l, f, o, k, d, n, b = 0, r = 0; r < i.length; r++) i[r] === null && b++;
        if (w = b + 1, e[0] === 14 && e[1] === 14 && e[2] === 14 && e[3] === 14) {
            this.gameOver();
            return
        }
        for (u = [], y = [], n = 0; n < 8; n++)
            for (r = t.length - 1; r >= 0; r--)
                if (t[r][n].status === LABEL_SHOWN) {
                    u.push(t[r][n].oCard);
                    y.push({
                        row: r,
                        column: n
                    });
                    break
                }
        if (!(u.length < 8)) {
            for (s = [], c = [], n = 0; n < 8; n++)
                for (a = u[n].getRank(), l = u[n].getColor() === "red" ? "black" : "red", r = y[n].row; r >= y[n].row - w + 1; r--)
                    if (r < 0) {
                        c.push(t[0][n].oCard);
                        break
                    } else if (t[r][n].oCard.getRank() === a && t[r][n].oCard.getColor() !== l) s.push({
                oCard: t[r][n].oCard,
                row: r,
                column: n
            }), l = t[r][n].oCard.getColor(), a++;
            else {
                c.push(t[r + 1][n].oCard);
                break
            }
            for (r = 0; r < i.length; r++) {
                if (i[r] === null) return;
                for (n = 0; n < u.length; n++)
                    if (i[r].getRank() === u[n].getRank() - 1 && i[r].getColor() !== u[n].getColor()) return;
                if (i[r].getRank() === e[i[r].getSuit()]) return
            }
            for (r = 0; r < u.length; r++) {
                if (u[r].getRank() === e[u[r].getSuit()]) return;
                for (n = 0; n < s.length; n++)
                    if (u[r].getRank() === s[n].oCard.getRank() + 1 && u[r].getColor() !== s[n].oCard.getColor()) {
                        if (s[n].row === 0) return;
                        var h = [],
                            p = {
                                oCard: t[s[n].row - 1][s[n].column].oCard,
                                row: s[n].row - 1
                            },
                            a = p.oCard.getRank(),
                            l;
                        for (l = p.oCard.getColor() === "red" ? "black" : "red", f = p.row; f >= p.row - w + 1; f--)
                            if (f < 0) break;
                            else if (t[f][n].oCard.getRank() === a && t[f][n].oCard.getColor() !== l) h.push({
                            oCard: t[f][n].oCard,
                            row: f,
                            column: n
                        }), l = t[f][n].oCard.getColor(), a++;
                        else break;
                        for (f = 0; f < h.length; f++) {
                            if (f === 0)
                                for (o = 0; o < c.length; o++)
                                    if (h[f].oCard.getRank() === c[o].getRank() + 1 && h[f].oCard.getColor() === c[o].getColor()) return;
                            if (h[f].oCard.getRank() === e[h[f].oCard.getSuit()]) return;
                            for (o = 0; o < u.length; o++)
                                if (h[f].oCard.getRank() === u[o].getRank() - 1 && h[f].oCard.getColor() !== u[o].getColor() && r !== o) return
                        }
                    }
            }
            for (r = 0; r < e.length; r++)
                for (k = r % 2, d = k === 0 ? "red" : "black", n = 0; n < u.length; n++)
                    if (e[r] === u[n].getRank() && d !== u[n].getColor()) return;
            v.showHint("move", w)
        }
    };
    this._removeScore = function() {
        l -= POINTS_TO_LOSE;
        l < 0 && (l = 0);
        var n = 750,
            t = new CScore;
        t.removeScore(l, n);
        v.fadeScore(l, n)
    };
    this.updateScore = function(n) {
        l += n
    };
    this.updateVisualScore = function() {
        v.refreshScore(l)
    };
    this._updateMoves = function() {
        tt++;
        var n = 750,
            t = new CScore;
        t.displayMoves(tt, n);
        v.fadeMove(tt, n)
    };
    this.restartGame = function() {
        this.unload();
        this._init()
    };
    this.unload = function() {
        b = !1;
        for (var n = 0; n < a.length; n++) a[n].unload();
        v.unload();
        ut !== null && ut.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        _bStartGame = !0
    };
    this.gameOver = function() {
        playSound("game_over", 1, !1);
        ut = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        ut.show(l)
    };
    this.update = function() {};
    s_oGame = this;
    POINTS_TO_LOSE = n.points_to_lose;
    START_SCORE = n.starting_points;
    g = this;
    this._init()
}

function CInterface() {
    var f, v, u, y, p = null,
        e, t, w, i, b, d, n, o, k, g, r = null,
        nt = null,
        s, h, c, l, a;
    return this._init = function() {
        var g, p = s_oSpriteLibrary.getSprite("but_exit"),
            tt, ut, rt;
        s = {
            x: CANVAS_WIDTH - p.height / 2 - 10,
            y: p.height / 2 + 10
        };
        v = new CGfxButton(s.x, s.y, p, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onExit, this);
        g = CANVAS_WIDTH - p.width / 2 - 80;
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (p = s_oSpriteLibrary.getSprite("audio_icon"), h = {
            x: g,
            y: p.height / 2 + 10
        }, f = new CToggle(h.x, h.y, p, s_bAudioActive, s_oStage), f.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        g = g - 68;
        p = s_oSpriteLibrary.getSprite("but_help");
        c = {
            x: g,
            y: p.height / 2 + 10
        };
        u = new CGfxButton(c.x, c.y, p, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onButHelpRelease, this);
        u.setVisible(!1);
        g = g - 68;
        p = s_oSpriteLibrary.getSprite("but_restart");
        l = {
            x: g,
            y: p.height / 2 + 10
        };
        y = new CGfxButton(l.x, l.y, p, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
        tt = window.document;
        ut = tt.documentElement;
        r = ut.requestFullscreen || ut.mozRequestFullScreen || ut.webkitRequestFullScreen || ut.msRequestFullscreen;
        nt = tt.exitFullscreen || tt.mozCancelFullScreen || tt.webkitExitFullscreen || tt.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (r = !1);
        r && screenfull.isEnabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), a = {
            x: p.width / 4 + 10,
            y: p.height / 2 + 10
        }, o = new CToggle(a.x, a.y, p, s_bFullscreen, s_oStage), o.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        var ft = 100,
            it = 30,
            et = 250,
            ot = 102,
            st = new CTLText(s_oStage, et, ot - it / 2, ft, it, 24, "right", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_SCORE, !0, !0, !1, !1),
            p = s_oSpriteLibrary.getSprite("score_display");
        e = createBitmap(p);
        e.scaleX = 1;
        e.x = 348;
        e.y = 79;
        s_oStage.addChild(e);
        t = new createjs.Text("0", "24px " + PRIMARY_FONT, "#ffffff");
        t.x = 421;
        t.y = 109;
        t.textAlign = "right";
        t.textBaseline = "alphabetic";
        t.lineWidth = 200;
        s_oStage.addChild(t);
        var ft = 100,
            it = 30,
            et = 444,
            ot = 102,
            ht = new CTLText(s_oStage, et, ot - it / 2, ft, it, 24, "right", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_MOVES, !0, !0, !1, !1),
            p = s_oSpriteLibrary.getSprite("moves_display");
        w = createBitmap(p);
        w.x = 542;
        w.y = 79;
        s_oStage.addChild(w);
        i = new createjs.Text("0", "24px " + PRIMARY_FONT, "#ffffff");
        i.x = 615;
        i.y = 109;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.lineWidth = 200;
        s_oStage.addChild(i);
        rt = s_oSpriteLibrary.getSprite("hintpanel");
        n = new createjs.Container;
        n.x = CANVAS_WIDTH / 2;
        n.y = 604;
        n.alpha = 0;
        s_oStage.addChild(n);
        b = createBitmap(rt);
        b.regX = rt.width / 2;
        b.regY = rt.height / 2;
        n.addChild(b);
        var ft = rt.width - 30,
            it = rt.height - 20,
            et = 0,
            ot = -4;
        d = new CTLText(n, et - ft / 2, ot - it / 2, ft, it, 24, "left", "#fff", PRIMARY_FONT, 1.1, 2, 2, " ", !0, !0, !0, !1);
        k = new CAreYouSurePanel(s_oStage);
        k.addEventListener(ON_BUT_YES_DOWN, this._onConfirmExit);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }, this.refreshButtonPos = function(n) {
        v.setPosition(s.x - n, s.y);
        u.setPosition(c.x - n, c.y);
        y.setPosition(l.x - n, l.y);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && f.setPosition(h.x - n, h.y);
        r && screenfull.isEnabled && o.setPosition(a.x + s_iOffsetX, a.y + s_iOffsetY)
    }, this.unload = function() {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (f.unload(), f = null);
        r && screenfull.isEnabled && o.unload();
        n.off("mousedown", g);
        v.unload();
        u.unload();
        y.unload();
        p !== null && p.unload();
        k = null;
        s_oInterface = null
    }, this.refreshScore = function(n) {
        t.alpha = 1;
        t.text = n
    }, this.fadeScore = function(n, i) {
        var r = this;
        createjs.Tween.get(t).to({
            alpha: 0
        }, i, createjs.Ease.linear).call(function() {
            r.refreshScore(n)
        })
    }, this._refreshMove = function(n) {
        i.alpha = 1;
        i.text = n
    }, this.fadeMove = function(n, t) {
        var r = this;
        createjs.Tween.get(i).to({
            alpha: 0
        }, t, createjs.Ease.linear).call(function() {
            r._refreshMove(n)
        })
    }, this.showHint = function(t, i) {
        var u, r;
        t === "move" ? (d.refreshText(TEXT_HINT_MOVE), u = this, createjs.Tween.get(n, {
            override: !0
        }).to({
            alpha: 1
        }, 3e3, createjs.Ease.linear).call(function() {
            u.callRestart()
        })) : (r = TEXT_CARDS, i === 1 && (r = TEXT_CARD), d.refreshText(sprintf(TEXT_HINT, i, r)), createjs.Tween.get(n, {
            override: !0
        }).to({
            alpha: 1
        }, 3e3, createjs.Ease.linear).call(function() {
            createjs.Tween.get(n).to({
                alpha: 0
            }, 3e3, createjs.Ease.linear)
        }))
    }, this.callRestart = function() {
        g = n.on("mousedown", this._onButRestartRelease)
    }, this.setVisibleButHelp = function() {
        u.setVisible(!0)
    }, this._onButHelpRelease = function() {
        p = new CHelpPanel
    }, this._onButRestartRelease = function() {
        $(s_oMain).trigger("restart_level", 1);
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.restartGame()
    }, this.onExitFromHelp = function() {
        p.unload()
    }, this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }, this._onExit = function() {
        k.show()
    }, this._onConfirmExit = function() {
        s_oGame.onExit();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad")
    }, this.resetFullscreenBut = function() {
        r && screenfull.isEnabled && o.setActive(s_bFullscreen)
    }, this._onFullscreenRelease = function() {
        s_bFullscreen ? nt.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    }, s_oInterface = this, this._init(), this
}

function CHelpPanel() {
    var f, e, i, r, n, t, u, s, o, h;
    this._init = function() {
        var y = this,
            l;
        n = new createjs.Container;
        n.alpha = 0;
        s_oStage.addChild(n);
        u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        u.alpha = .7;
        o = u.on("click", function() {});
        n.addChild(u);
        l = s_oSpriteLibrary.getSprite("bg_help");
        f = createBitmap(l);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        f.regX = l.width / 2;
        f.regY = l.height / 2;
        n.addChild(f);
        var p = {
                x: CANVAS_WIDTH / 2 + 50,
                y: CANVAS_HEIGHT / 2 - 206
            },
            c = 400,
            s = 80,
            a = p.x,
            v = p.y,
            k = new CTLText(n, a - c / 2, v - s / 2, c, s, 18, "left", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP1, !0, !0, !0, !1),
            w = {
                x: CANVAS_WIDTH / 2 - 275,
                y: CANVAS_HEIGHT / 2 + 76
            },
            c = 500,
            s = 80,
            a = w.x,
            v = w.y,
            d = new CTLText(n, a, v - s / 2, c, s, 18, "left", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP2, !0, !0, !0, !1),
            b = {
                x: CANVAS_WIDTH / 2 + 290,
                y: CANVAS_HEIGHT / 2 - 70
            },
            c = 500,
            s = 60,
            a = b.x,
            v = b.y,
            g = new CTLText(n, a - c, v - s / 2, c, s, 18, "right", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP3, !0, !0, !0, !1);
        createjs.Tween.get(n).to({
            alpha: 1
        }, 700);
        o = n.on("pressup", function() {
            y._onExitHelp()
        });
        t = new createjs.Container;
        t.visible = 0;
        s_oStage.addChild(t);
        u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        u.alpha = .7;
        o = u.on("click", function() {});
        t.addChild(u);
        l = s_oSpriteLibrary.getSprite("msg_box");
        e = createBitmap(l);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        e.regX = l.width / 2;
        e.regY = l.height / 2;
        t.addChild(e);
        var c = 600,
            s = 40,
            a = CANVAS_WIDTH / 2 + 2,
            v = CANVAS_HEIGHT / 2 - 200,
            nt = new CTLText(t, a - c / 2, v - s / 2, c, s, 30, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP1_PAGE2, !0, !0, !1, !1),
            c = 600,
            s = 40,
            a = CANVAS_WIDTH / 2 + 2,
            v = CANVAS_HEIGHT / 2 - 100,
            tt = new CTLText(t, a - c / 2, v - s / 2, c, s, 30, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, sprintf(TEXT_HELP2_PAGE2, START_SCORE), !0, !0, !1, !1),
            c = 600,
            s = 120,
            a = CANVAS_WIDTH / 2 + 2,
            v = CANVAS_HEIGHT / 2 + 32,
            tt = new CTLText(t, a - c / 2, v - s / 2, c, s, 30, "left", "#fff", PRIMARY_FONT, 1.2, 2, 2, sprintf(TEXT_LOSE1_PAGE2, START_SCORE), !0, !0, !0, !1);
        h = t.on("pressup", function() {
            y._onExitHelp()
        });
        createjs.Tween.get(t).to({
            alpha: 1
        }, 700);
        i = createBitmap(s_oSpriteLibrary.getSprite("arrow"));
        i.x = 1232;
        i.y = 564;
        i.alpha = 0;
        i.on("click", y._changePageTo2);
        s_oStage.addChild(i);
        r = createBitmap(s_oSpriteLibrary.getSprite("arrow"));
        r.scaleX = -1;
        r.x = 382;
        r.y = 564;
        r.visible = !1;
        r.on("click", y._changePageTo1);
        s_oStage.addChild(r);
        createjs.Tween.get(i).to({
            alpha: 1
        }, 700)
    };
    this.unload = function() {
        s_oStage.removeChild(n, t, i, r);
        n.off("pressup", o);
        t.off("pressup", h)
    };
    this._changePageTo1 = function() {
        t.visible = !1;
        r.visible = !1;
        n.visible = !0;
        i.visible = !0
    };
    this._changePageTo2 = function() {
        n.visible = !1;
        i.visible = !1;
        t.visible = !0;
        r.visible = !0
    };
    this._onExitHelp = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        s.unload();
        s_oGame._onExitHelp()
    };
    s = this;
    this._init()
}

function CEndPanel(n) {
    var i, t, u, f, r;
    return this._init = function(n) {
        t = new createjs.Container;
        t.alpha = 0;
        t.visible = !1;
        s_oStage.addChild(t);
        i = createBitmap(n);
        i.x = 0;
        i.y = 0;
        t.addChild(i);
        var r = n.width - 900,
            e = 70,
            o = CANVAS_WIDTH / 2,
            s = CANVAS_HEIGHT / 2 - 160;
        u = new CTLText(t, o - r / 2, s - e / 2, r, e, 60, "center", "#fff", PRIMARY_FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        var r = n.width - 900,
            e = 70,
            o = CANVAS_WIDTH / 2,
            s = CANVAS_HEIGHT / 2 + 50;
        f = new CTLText(t, o - r / 2, s - e / 2, r, e, 40, "center", "#fff", PRIMARY_FONT, 1, 2, 2, " ", !0, !0, !1, !1)
    }, this.unload = function() {
        t.off("mousedown", r)
    }, this._initListener = function() {
        r = t.on("mousedown", this._onExit)
    }, this.show = function(n) {
        playSound("game_over", 1, !1);
        s_bMobile || (document.querySelector("#div_display_id").style.display = "block");
        u.refreshText(TEXT_GAMEOVER);
        f.refreshText(TEXT_SCORE + ": " + n);
        t.visible = !0;
        var i = this;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 500).call(function() {
            i._initListener()
        });
        $(s_oMain).trigger("save_score", [n, "standard"]);
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("share_event", [n])
    }, this._onExit = function() {
        document.querySelector("#div_display_id").style.display = "none";
        t.off("mousedown", r);
        s_oStage.removeChild(t);
        $(s_oMain).trigger("end_session");
        s_oGame.onExit()
    }, this._init(n), this
}

function CCard(n, t, i, r, u, f) {
    var d = !1,
        tt = !0,
        a, p, w, s, v, b = .5,
        h, it, rt, k, g, c, o, e, y, ut, l, ft, nt;
    this._init = function(n, t, i, r, u, f) {
        var d, l, tt, rt;
        for (y = i, s = r, v = u, h = f, it = 0, a = !1, p = "deck", w = h === 0 || h === 2 ? "red" : "black", e = new createjs.Container, e.x = n, e.y = t, e.scaleX = e.scaleY = b, y.addChild(e), d = [], l = 0; l < 53; l++) d[l] = s_oSpriteLibrary.getSprite("card_" + l);
        tt = {
            images: d,
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_1_1: [0],
                card_1_2: [1],
                card_1_3: [2],
                card_1_4: [3],
                card_1_5: [4],
                card_1_6: [5],
                card_1_7: [6],
                card_1_8: [7],
                card_1_9: [8],
                card_1_10: [9],
                card_1_J: [10],
                card_1_Q: [11],
                card_1_K: [12],
                card_2_1: [13],
                card_2_2: [14],
                card_2_3: [15],
                card_2_4: [16],
                card_2_5: [17],
                card_2_6: [18],
                card_2_7: [19],
                card_2_8: [20],
                card_2_9: [21],
                card_2_10: [22],
                card_2_J: [23],
                card_2_Q: [24],
                card_2_K: [25],
                card_3_1: [26],
                card_3_2: [27],
                card_3_3: [28],
                card_3_4: [29],
                card_3_5: [30],
                card_3_6: [31],
                card_3_7: [32],
                card_3_8: [33],
                card_3_9: [34],
                card_3_10: [35],
                card_3_J: [36],
                card_3_Q: [37],
                card_3_K: [38],
                card_4_1: [39],
                card_4_2: [40],
                card_4_3: [41],
                card_4_4: [42],
                card_4_5: [43],
                card_4_6: [44],
                card_4_7: [45],
                card_4_8: [46],
                card_4_9: [47],
                card_4_10: [48],
                card_4_J: [49],
                card_4_Q: [50],
                card_4_K: [51],
                back: [52]
            }
        };
        rt = new createjs.SpriteSheet(tt);
        c = createSprite(rt, "back", 0, 0, CARD_WIDTH, CARD_HEIGHT);
        c.stop();
        e.addChild(c);
        o = new createjs.Shape;
        o.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(-CARD_WIDTH / 2, -CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        nt = o.on("mousedown", this._mouseDown);
        s_bMobile || (o.cursor = "pointer");
        e.addChild(o);
        k = [];
        g = []
    };
    this.unload = function() {
        o.off("mousedown", nt);
        y.removeChild(e)
    };
    this.saveInfo = function() {
        return {
            szFotogram: s,
            iRank: v,
            iSuit: h,
            bValue: tt
        }
    };
    this.changeInfo = function(n, t, i) {
        s = n;
        v = t;
        h = i
    };
    this.instantShow = function() {
        c.gotoAndStop(s)
    };
    this.setType = function(n) {
        p = n
    };
    this.checkType = function() {
        return p
    };
    this.setValue = function() {
        c.gotoAndStop(s);
        playSound("card", 1, !1);
        createjs.Tween.get(e).to({
            scaleX: b
        }, 200)
    };
    this.setActive = function(n) {
        n ? e.addChild(o) : e.removeChild(o)
    };
    this.setVisible = function(n) {
        e.visible = n === !0 ? !0 : !1
    };
    this.moveCard = function(n, t, i, r) {
        createjs.Tween.get(e).wait(r).to({
            x: n,
            y: t
        }, i, createjs.Ease.linear).call(function() {
            l.setPlaced()
        })
    };
    this.moveDeckCard = function(n, t, i, r) {
        createjs.Tween.get(e).wait(r).to({
            x: n,
            y: t
        }, i, createjs.Ease.linear).call(function() {
            s_oGame.activeDeck();
            l.showCard()
        })
    };
    this.moveToSuit = function(n, t, i) {
        createjs.Tween.get(e).wait(i).to({
            x: n,
            y: t
        }, 200, createjs.Ease.cubicOut).call(function() {
            s_oGame.stackInSuit(l)
        })
    };
    this.setPlaced = function() {
        d = !0;
        s_oGame.scaleDepth(l)
    };
    this.stackInPlace = function(n, t, i) {
        createjs.Tween.get(e).to({
            x: n,
            y: t
        }, i, createjs.Ease.cubicOut).call(function() {
            a = !0
        })
    };
    this.stackAndDeactive = function(n, t, i) {
        createjs.Tween.get(e).to({
            x: n,
            y: t
        }, i, createjs.Ease.cubicOut)
    };
    this._mouseDown = function(n) {
        a !== !1 && (ft = {
            x: e.x,
            y: e.y
        }, rt = y.getChildIndex(e), s_oGame.pickCard(l, n))
    };
    this.getPlaced = function() {
        return d
    };
    this.showCard = function() {
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: .1
        }, 200).call(function() {
            n.setValue()
        }).call(function() {
            a = !0
        })
    };
    this.hideCard = function() {
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: .1
        }, 200).call(function() {
            n.setBack()
        })
    };
    this.setPos = function(n, t) {
        e.x = n;
        e.y = t
    };
    this.setBack = function() {
        a = !1;
        c.gotoAndStop("back");
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: b
        }, 200).call(function() {
            n.cardHidden()
        })
    };
    this.cardHidden = function() {
        k[ON_CARD_HIDE] && k[ON_CARD_HIDE].call(g[ON_CARD_HIDE], this)
    };
    this.getRank = function() {
        return v
    };
    this.getSuit = function() {
        return h
    };
    this.getColor = function() {
        return w
    };
    this.getFotogram = function() {
        return s
    };
    this.getPos = function() {
        return {
            x: e.x,
            y: e.y
        }
    };
    this.getSprite = function() {
        return e
    };
    this.getLogicRect = function() {
        return new createjs.Rectangle(e.x - CARD_LOGIC_WIDTH / 2, e.y - CARD_LOGIC_HEIGHT / 2, CARD_LOGIC_WIDTH, CARD_LOGIC_HEIGHT)
    };
    ut = this;
    l = this;
    this._init(n, t, i, r, u, f)
}

function CScore() {
    this.showScore = function(n, t) {
        var u = 1e3,
            i = new createjs.Text("+" + t, "24px " + PRIMARY_FONT, "#000000"),
            r;
        i.x = n.x;
        i.y = n.y;
        i.scaleX = 2;
        i.scaleY = 2;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.outline = 4;
        s_oStage.addChild(i);
        r = new createjs.Text("+" + t, "24px " + PRIMARY_FONT, "#fff");
        r.x = n.x;
        r.y = n.y;
        r.scaleX = 2;
        r.scaleY = 2;
        r.textAlign = "right";
        r.textBaseline = "alphabetic";
        s_oStage.addChild(r);
        s_oGame.updateScore(t);
        createjs.Tween.get(r).to({
            x: 425,
            y: 109
        }, u, createjs.Ease.cubicIn).call(function() {
            s_oGame.updateVisualScore(t);
            s_oStage.removeChild(r)
        });
        createjs.Tween.get(r).to({
            scaleX: 1,
            scaleY: 1
        }, u, createjs.Ease.linear);
        createjs.Tween.get(i).to({
            x: 425,
            y: 109
        }, u, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(i)
        });
        createjs.Tween.get(i).to({
            scaleX: 1,
            scaleY: 1
        }, u, createjs.Ease.linear)
    };
    this.removeScore = function(n, t) {
        var i = new createjs.Text(n, "24px " + PRIMARY_FONT, "#ffffff");
        i.x = 421;
        i.y = 109;
        i.alpha = 0;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.lineWidth = 200;
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 1
        }, t, createjs.Ease.linear).call(function() {
            s_oStage.removeChild(i)
        })
    };
    this.displayMoves = function(n, t) {
        var i = new createjs.Text(n, "24px " + PRIMARY_FONT, "#ffffff");
        i.x = 615;
        i.y = 109;
        i.alpha = 0;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.lineWidth = 200;
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 1
        }, t, createjs.Ease.linear).call(function() {
            s_oStage.removeChild(i)
        })
    }
}

function CCreditsPanel() {
    var t, n, u, r, f, i;
    this._init = function() {
        var e, s, o;
        i = new createjs.Container;
        s_oStage.addChild(i);
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = .7;
        f = t.on("click", this._onLogoButRelease);
        i.addChild(t);
        n = new createjs.Container;
        i.addChild(n);
        e = s_oSpriteLibrary.getSprite("msg_box");
        s = createBitmap(e);
        s.regX = e.width * .5;
        s.regY = e.height * .5;
        n.addChild(s);
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2;
        var h = new CTLText(n, -e.width / 2 + 30, -100, e.width - 60, 30, 30, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_DEVELOPED, !0, !0, !1, !1),
            o = s_oSpriteLibrary.getSprite("ctl_logo");
        r = createBitmap(o);
        r.regX = o.width / 2;
        r.regY = o.height / 2;
        n.addChild(r);
        o = s_oSpriteLibrary.getSprite("but_exit");
        u = new CGfxButton(340, -200, o, n);
        u.addEventListener(ON_MOUSE_UP, this.unload, this);
        n.alpha = 0;
        createjs.Tween.get(n).to({
            alpha: 1
        }, 1e3, createjs.Ease.cubicOut)
    };
    this.unload = function() {
        s_oStage.removeChild(i);
        u.unload();
        t.off("click", f)
    };
    this._onLogoButRelease = function() {};
    this._init()
}

function CAreYouSurePanel(n) {
    var u, o, h, f, a, s, e, i, c, r, t, l = this;
    this._init = function() {
        u = [];
        o = [];
        i = new createjs.Container;
        i.visible = !1;
        c.addChild(i);
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.alpha = .7;
        h = r.on("click", function() {});
        i.addChild(r);
        t = new createjs.Container;
        i.addChild(t);
        var n = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(n);
        f.regX = n.width * .5;
        f.regY = n.height * .5;
        t.addChild(f);
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        a = new CTLText(t, -n.width / 2 + 30, -200, n.width - 60, 120, 60, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_YOU_SURE, !0, !0, !1, !1);
        s = new CGfxButton(100, 100, s_oSpriteLibrary.getSprite("but_yes"), t);
        s.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e = new CGfxButton(-100, 100, s_oSpriteLibrary.getSprite("but_no"), t);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        e.pulseAnimation()
    };
    this.addEventListener = function(n, t, i) {
        u[n] = t;
        o[n] = i
    };
    this.show = function() {
        i.visible = !0;
        t.alpha = 0;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 1e3, createjs.Ease.cubicOut)
    };
    this.hide = function() {
        i.visible = !1
    };
    this.unload = function() {
        e.unload();
        s.unload();
        r.off("click", h)
    };
    this._onButYes = function() {
        l.hide();
        u[ON_BUT_YES_DOWN] && u[ON_BUT_YES_DOWN].call(o[ON_BUT_YES_DOWN])
    };
    this._onButNo = function() {
        l.hide()
    };
    c = n;
    this._init()
}

function CButLang(n, t, i, r, u, f) {
    var o = r,
        y = i,
        s, h, l, a, c, e, v = f;
    this._init = function(n, t, i, r) {
        var f, u, y, p;
        for (s = [], h = [], e = new createjs.Container, e.x = n, e.y = t, a = e.on("mousedown", this._onPress, this), l = e.on("click", this._onChangeLang, this), v.addChild(e), f = {}, u = 0; u < i; u++) f["lang_" + u] = u;
        y = {
            images: [r],
            frames: {
                width: r.width / i,
                height: r.height
            },
            animations: f
        };
        p = new createjs.SpriteSheet(y);
        c = createSprite(p, "lang_" + o, 0, 0, r.width / i, r.height);
        e.addChild(c);
        e.regX = r.width / i / 2;
        e.regY = r.height / 2
    };
    this.unload = function() {
        e.off("mousedown", a);
        e.off("click", l)
    };
    this.addEventListener = function(n, t, i) {
        s[n] = t;
        h[n] = i
    };
    this.setPosition = function(n, t) {
        e.x = n;
        e.y = t
    };
    this.setLang = function(n) {
        o = n;
        c.gotoAndStop("lang_" + o)
    };
    this._onPress = function() {
        e.scale = .9
    };
    this._onChangeLang = function() {
        e.scale = 1;
        s[ON_SELECT_LANG] && s[ON_SELECT_LANG].call(h[ON_SELECT_LANG], o)
    };
    this.getButtonImage = function() {
        return e
    };
    this._init(n, t, i, u)
}

function CLangPanel(n) {
    var o, s, e, h, l, a, r, c, i, t, u, f, v = n,
        y = this;
    this._init = function() {
        o = [];
        s = [];
        f = new createjs.Container;
        f.visible = !1;
        v.addChild(f);
        i = new createjs.Shape;
        i.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a = i.on("click", function() {});
        f.addChild(i);
        t = new createjs.Container;
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2 + 20;
        f.addChild(t);
        r = s_oSpriteLibrary.getSprite("msg_box_small");
        var n = createBitmap(r);
        t.addChild(n);
        this._placeLanguages();
        c = new CGfxButton(r.width - 10, 10, s_oSpriteLibrary.getSprite("but_exit"), t);
        c.addEventListener(ON_MOUSE_UP, this.hide, this);
        t.regX = r.width / 2;
        t.regY = r.height / 2
    };
    this.unload = function() {
        c.unload();
        i.off("click", a);
        for (var n = 0; n < e.length; n++) e[n].off("click", h[n])
    };
    this.addEventListener = function(n, t, i) {
        o[n] = t;
        s[n] = i
    };
    this.show = function() {
        f.visible = !0;
        i.alpha = 0;
        createjs.Tween.get(i).to({
            alpha: .7
        }, 400, createjs.Ease.cubicOut);
        t.scaleX = t.scaleY = .01;
        t.alpha = 0;
        createjs.Tween.get(t).wait(400).to({
            scale: 1.05,
            alpha: 1
        }, 1e3, createjs.Ease.elasticOut).call(function() {})
    };
    this.hide = function() {
        createjs.Tween.get(i).to({
            alpha: 0
        }, 400, createjs.Ease.cubicOut);
        createjs.Tween.get(t).to({
            scaleX: .1,
            scaleY: .1,
            alpha: .5
        }, 400, createjs.Ease.backIn).call(function() {
            f.visible = !1
        })
    };
    this._placeLanguages = function() {
        var s, v, n, f;
        u = new createjs.Container;
        u.x = r.width / 2;
        u.y = r.height / 2;
        t.addChild(u);
        var i = s_oSpriteLibrary.getSprite("but_lang"),
            o = i.width / NUM_LANGUAGES,
            y = {};
        for (s = 0; s < NUM_LANGUAGES; s++) y["lang_" + s] = s;
        var p = {
                images: [i],
                frames: {
                    width: o,
                    height: i.height,
                    regX: o / 2,
                    regY: i.height / 2
                },
                animations: y
            },
            w = new createjs.SpriteSheet(p),
            c = 0,
            a = 0;
        for (e = [], h = [], l = [], v = 0, n = 0; n < NUM_LANGUAGES; n++) f = createSprite(w, "lang_" + n, o / 2, i.height / 2, i.width / NUM_LANGUAGES, i.height), f.x = c, f.y = a, l[n] = f.on("mousedown", this._onPressLang, this, !1, n), h[n] = f.on("click", this._onSelectLang, this, !1, n), u.addChild(f), e.push(f), v++, n > 0 && v % NUM_ITEMS_PER_COLS == 0 ? (c = 0, a += i.height + 10) : c += o + 10;
        u.regX = o * NUM_ITEMS_PER_COLS / 2 - o / 2;
        u.regY = a / 2
    };
    this._onPressLang = function(n, t) {
        e[t].scale = .9
    };
    this._onSelectLang = function(n, t) {
        e[t].scale = 1;
        o[ON_SELECT_LANG] && o[ON_SELECT_LANG].call(s[ON_SELECT_LANG], t);
        y.hide()
    };
    this._init()
}
var s_szGameID, s_bAdShown, s_oMenu, s_oGame, s_oInterface;
(function() {
    "use strict";
    var t = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {},
        r = typeof module != "undefined" && module.exports,
        n = function() {
            for (var i, r = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], n = 0, f = r.length, u = {}; n < f; n++)
                if (i = r[n], i && i[1] in t) {
                    for (n = 0; n < i.length; n++) u[r[0][n]] = i[n];
                    return u
                }
            return !1
        }(),
        u = {
            change: n.fullscreenchange,
            error: n.fullscreenerror
        },
        i = {
            request: function(i) {
                return new Promise(function(r, u) {
                    var f = function() {
                        this.off("change", f);
                        r()
                    }.bind(this);
                    this.on("change", f);
                    i = i || t.documentElement;
                    Promise.resolve(i[n.requestFullscreen]()).catch(u)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(i, r) {
                    if (!this.isFullscreen) {
                        i();
                        return
                    }
                    var u = function() {
                        this.off("change", u);
                        i()
                    }.bind(this);
                    this.on("change", u);
                    Promise.resolve(t[n.exitFullscreen]()).catch(r)
                }.bind(this))
            },
            toggle: function(n) {
                return this.isFullscreen ? this.exit() : this.request(n)
            },
            onchange: function(n) {
                this.on("change", n)
            },
            onerror: function(n) {
                this.on("error", n)
            },
            on: function(n, i) {
                var r = u[n];
                r && t.addEventListener(r, i, !1)
            },
            off: function(n, i) {
                var r = u[n];
                r && t.removeEventListener(r, i, !1)
            },
            raw: n
        };
    if (!n) {
        r ? module.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        };
        return
    }
    Object.defineProperties(i, {
        isFullscreen: {
            get: function() {
                return Boolean(t[n.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return t[n.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        }
    });
    r ? module.exports = i : window.screenfull = i
})();
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license <https://mths.be/mit>
 */
(function() {
    "use strict";

    function p(n) {
        return n = String(n), n.charAt(0).toUpperCase() + n.slice(1)
    }

    function nt(n, t, i) {
        var r = {
            "10.0": "10",
            "6.4": "10 Technical Preview",
            "6.3": "8.1",
            "6.2": "8",
            "6.1": "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            "5.2": "Server 2003 / XP 64-bit",
            "5.1": "XP",
            "5.01": "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return t && i && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (r = r[/[\d.]+$/.exec(n)]) && (n = "Windows " + r), n = String(n), t && i && (n = n.replace(RegExp(t, "i"), i)), o(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
    }

    function tt(n, t) {
        var r = -1,
            i = n ? n.length : 0;
        if (typeof i == "number" && i > -1 && i <= k)
            while (++r < i) t(n[r], r, n);
        else s(n, t)
    }

    function o(n) {
        return n = w(n), /^(?:webOS|i(?:OS|P))/.test(n) ? n : p(n)
    }

    function s(n, t) {
        for (var i in n) g.call(n, i) && t(n[i], i, n)
    }

    function t(n) {
        return n == null ? p(n) : y.call(n).slice(8, -1)
    }

    function it(n, t) {
        var i = n != null ? typeof n[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(i) && (i == "object" ? !!n[t] : !0)
    }

    function i(n) {
        return String(n).replace(/([ -])(?!$)/g, "$1?")
    }

    function r(n, t) {
        var i = null;
        return tt(n, function(r, u) {
            i = t(i, r, u, n)
        }), i
    }

    function w(n) {
        return String(n).replace(/^ +| +$/g, "")
    }

    function h(n) {
        function ui(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }

        function fi(t) {
            return r(t, function(t, r, u) {
                return t || (r[p] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(p)] || RegExp("\\b" + i(u) + "(?:\\b|\\w*\\d)", "i").exec(n)) && u
            })
        }

        function ei(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }

        function oi(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (t = nt(t, u, r.label || r)), t
            })
        }

        function wt(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + u + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + u + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((t = String(r.label && !RegExp(u, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), r = r.label || r, t = o(t[0].replace(RegExp(u, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
            })
        }

        function si(t) {
            return r(t, function(t, i) {
                return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
            })
        }

        function hi() {
            return this.description || ""
        }
        var g = u,
            ut = n && typeof n == "object" && t(n) != "String",
            ot, at, tt;
        ut && (g = n, n = null);
        ot = g.navigator || {};
        at = ot.userAgent || "";
        n || (n = at);
        var ci = ut || d == b,
            bt = ut ? !!ot.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(y.toString()),
            vt = "Object",
            kt = ut ? vt : "ScriptBridgingProxyObject",
            dt = ut ? vt : "Environment",
            gt = ut && g.java ? "JavaPackage" : t(g.java),
            ni = ut ? vt : "RuntimeObject",
            st = /\bJava/.test(gt) && g.java,
            ti = st && t(g.environment) == dt,
            ii = st ? "a" : "α",
            ri = st ? "b" : "β",
            yt = g.document || {},
            ft = g.operamini || g.opera,
            ht = e.test(ht = ut && ft ? ft["[[Class]]"] : t(ft)) ? ht : ft = null,
            f, ct = n,
            v = [],
            lt = null,
            et = n == at,
            a = et && ft && typeof ft.version == "function" && ft.version(),
            pt, k = ui([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            c = ei(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "Edge"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
            }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chrome", {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"]),
            p = wt([{
                label: "BlackBerry",
                pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
            }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
            }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
            rt = fi({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            l = oi(["Windows Phone", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (k && (k = [k]), rt && !p && (p = wt([rt])), (f = /\bGoogle TV\b/.exec(p)) && (p = f[0]), /\bSimulator\b/i.test(n) && (p = (p ? p + " " : "") + "Simulator"), c == "Opera Mini" && /\bOPiOS\b/.test(n) && v.push("running in Turbo/Uncompressed mode"), c == "IE" && /\blike iPhone OS\b/.test(n) ? (f = h(n.replace(/like iPhone OS/, "")), rt = f.manufacturer, p = f.product) : /^iP/.test(p) ? (c || (c = "Safari"), l = "iOS" + ((f = / OS ([\d_]+)/i.exec(n)) ? " " + f[1].replace(/_/g, ".") : "")) : c != "Konqueror" || /buntu/i.test(l) ? rt && rt != "Google" && (/Chrome/.test(c) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(p)) || /\bAndroid\b/.test(l) && /^Chrome/.test(c) && /\bVersion\//i.test(n) ? (c = "Android Browser", l = /\bAndroid\b/.test(l) ? l : "Android") : c == "Silk" ? (/\bMobi/i.test(n) || (l = "Android", v.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && v.unshift("accelerated")) : c == "PaleMoon" && (f = /\bFirefox\/([\d.]+)\b/.exec(n)) ? v.push("identifying as Firefox " + f[1]) : c == "Firefox" && (f = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (l || (l = "Firefox OS"), p || (p = f[1])) : !c || (f = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(c)) ? (c && !p && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(f + "/") + 8)) && (c = null), (f = p || rt || l) && (p || rt || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(l)) && (c = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(l) ? l : f) + " Browser")) : c == "Electron" && (f = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && v.push("Chromium " + f) : l = "Kubuntu", a || (a = si(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", i(c), "(?:Firefox|Minefield|NetFront)"])), (f = k == "iCab" && parseFloat(a) > 3 && "WebKit" || /\bOpera\b/.test(c) && (/\bOPR\b/.test(n) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(k) && "WebKit" || !k && /\bMSIE\b/i.test(n) && (l == "Mac OS" ? "Tasman" : "Trident") || k == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(c) && "NetFront") && (k = [f]), c == "IE" && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (c += " Mobile", l = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"), v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (c = "IE Mobile", l = "Windows Phone 8.x", v.unshift("desktop mode"), a || (a = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : c != "IE" && k == "Trident" && (f = /\brv:([\d.]+)/.exec(n)) && (c && v.push("identifying as " + c + (a ? " " + a : "")), c = "IE", a = f[1]), et) {
            if (it(g, "global"))
                if (st && (f = st.lang.System, ct = f.getProperty("os.arch"), l = l || f.getProperty("os.name") + " " + f.getProperty("os.version")), ti) {
                    try {
                        a = g.require("ringo/engine").version.join(".");
                        c = "RingoJS"
                    } catch (li) {
                        (f = g.system) && f.global.system == g.system && (c = "Narwhal", l || (l = f[0].os || null))
                    }
                    c || (c = "Rhino")
                } else typeof g.process == "object" && !g.process.browser && (f = g.process) && (typeof f.versions == "object" && (typeof f.versions.electron == "string" ? (v.push("Node " + f.versions.node), c = "Electron", a = f.versions.electron) : typeof f.versions.nw == "string" && (v.push("Chromium " + a, "Node " + f.versions.node), c = "NW.js", a = f.versions.nw)), c || (c = "Node.js", ct = f.arch, l = f.platform, a = /[\d.]+/.exec(f.version), a = a ? a[0] : null));
            else t(f = g.runtime) == kt ? (c = "Adobe AIR", l = f.flash.system.Capabilities.os) : t(f = g.phantom) == ni ? (c = "PhantomJS", a = (f = f.version || null) && f.major + "." + f.minor + "." + f.patch) : typeof yt.documentMode == "number" && (f = /\bTrident\/(\d+)/i.exec(n)) ? (a = [a, yt.documentMode], (f = +f[1] + 4) != a[1] && (v.push("IE " + a[1] + " mode"), k && (k[1] = ""), a[1] = f), a = c == "IE" ? String(a[1].toFixed(1)) : a[0]) : typeof yt.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(c) && (v.push("masking as " + c + " " + a), c = "IE", a = "11.0", k = ["Trident"], l = "Windows");
            l = l && o(l)
        }
        if (a && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(a) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (et && ot.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (lt = /b/i.test(f) ? "beta" : "alpha", a = a.replace(RegExp(f + "\\+?$"), "") + (lt == "beta" ? ri : ii) + (/\d+\+?/.exec(f) || "")), c == "Fennec" || c == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(l)) c = "Firefox Mobile";
        else if (c == "Maxthon" && a) a = a.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(p)) p == "Xbox 360" && (l = null), p == "Xbox 360" && /\bIEMobile\b/.test(n) && v.unshift("mobile mode");
        else if ((/^(?:Chrome|IE|Opera)$/.test(c) || c && !p && !/Browser|Mobi/.test(c)) && (l == "Windows CE" || /Mobi/i.test(n))) c += " Mobile";
        else if (c == "IE" && et) try {
            g.external === null && v.unshift("platform preview")
        } catch (li) {
            v.unshift("embedded")
        } else(/\bBlackBerry\b/.test(p) || /\bBB10\b/.test(n)) && (f = (RegExp(p.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || a) ? (f = [f, /BB10/.test(n)], l = (f[1] ? (p = null, rt = "BlackBerry") : "Device Software") + " " + f[0], a = null) : this != s && p != "Wii" && (et && ft || /Opera/.test(c) && /\b(?:MSIE|Firefox)\b/i.test(n) || c == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(l) || c == "IE" && (l && !/^Win/.test(l) && a > 5.5 || /\bWindows XP\b/.test(l) && a > 8 || a == 8 && !/\bTrident\b/.test(n))) && !e.test(f = h.call(s, n.replace(e, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""), e.test(c) ? (/\bIE\b/.test(f) && l == "Mac OS" && (l = null), f = "identify" + f) : (f = "mask" + f, c = ht ? o(ht.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(f) && (l = null), et || (a = null)), k = ["Presto"], v.push(f));
        return (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f], c == "Safari" && f[1].slice(-1) == "+" ? (c = "WebKit Nightly", lt = "alpha", a = f[1].slice(0, -1)) : (a == f[1] || a == (f[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) && (a = null), f[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], f[0] == 537.36 && f[2] == 537.36 && parseFloat(f[1]) >= 28 && k == "WebKit" && (k = ["Blink"]), et && (bt || f[1]) ? (k && (k[1] = "like Chrome"), f = f[1] || (f = f[0], f < 530 ? 1 : f < 532 ? 2 : f < 532.05 ? 3 : f < 533 ? 4 : f < 534.03 ? 5 : f < 534.07 ? 6 : f < 534.1 ? 7 : f < 534.13 ? 8 : f < 534.16 ? 9 : f < 534.24 ? 10 : f < 534.3 ? 11 : f < 535.01 ? 12 : f < 535.02 ? "13+" : f < 535.07 ? 15 : f < 535.11 ? 16 : f < 535.19 ? 17 : f < 536.05 ? 18 : f < 536.1 ? 19 : f < 537.01 ? 20 : f < 537.11 ? "21+" : f < 537.13 ? 23 : f < 537.18 ? 24 : f < 537.24 ? 25 : f < 537.36 ? 26 : k != "Blink" ? "27" : "28")) : (k && (k[1] = "like Safari"), f = (f = f[0], f < 400 ? 1 : f < 500 ? 2 : f < 526 ? 3 : f < 533 ? 4 : f < 534 ? "4+" : f < 535 ? 5 : f < 537 ? 6 : f < 538 ? 7 : f < 601 ? 8 : "8")), k && (k[1] += " " + (f += typeof f == "number" ? ".x" : /[.+]/.test(f) ? "" : "+")), c == "Safari" && (!a || parseInt(a) > 45) && (a = f)), c == "Opera" && (f = /\bzbov|zvav$/.exec(l)) ? (c += " ", v.unshift("desktop mode"), f == "zvav" ? (c += "Mini", a = null) : c += "Mobile", l = l.replace(RegExp(" *" + f + "$"), "")) : c == "Safari" && /\bChrome\b/.exec(k && k[1]) && (v.unshift("desktop mode"), c = "Chrome Mobile", a = null, /\bOS X\b/.test(l) ? (rt = "Apple", l = "iOS 4.3+") : l = null), a && a.indexOf(f = /[\d.]+$/.exec(l)) == 0 && n.indexOf("/" + f + "-") > -1 && (l = w(l.replace(f, ""))), k && !/\b(?:Avant|Nook)\b/.test(c) && (/Browser|Lunascape|Maxthon/.test(c) || c != "Safari" && /^iOS/.test(l) && /\bSafari\b/.test(k[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(c) && k[1]) && (f = k[k.length - 1]) && v.push(f), v.length && (v = ["(" + v.join("; ") + ")"]), rt && p && p.indexOf(rt) < 0 && v.push("on " + rt), p && v.push((/^on /.test(v[v.length - 1]) ? "" : "on ") + p), l && (f = / ([\d.+]+)$/.exec(l), pt = f && l.charAt(l.length - f[0].length - 1) == "/", l = {
            architecture: 32,
            family: f && !pt ? l.replace(f[0], "") : l,
            version: f ? f[1] : null,
            toString: function() {
                var n = this.version;
                return this.family + (n && !pt ? " " + n : "") + (this.architecture == 64 ? " 64-bit" : "")
            }
        }), (f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(ct)) && !/\bi686\b/i.test(ct) ? (l && (l.architecture = 64, l.family = l.family.replace(RegExp(" *" + f), "")), c && (/\bWOW64\b/i.test(n) || et && /\w(?:86|32)$/.test(ot.cpuClass || ot.platform) && !/\bWin64; x64\b/i.test(n)) && v.unshift("32-bit")) : l && /^OS X/.test(l.family) && c == "Chrome" && parseFloat(a) >= 39 && (l.architecture = 64), n || (n = null), tt = {}, tt.description = n, tt.layout = k && k[0], tt.manufacturer = rt, tt.name = c, tt.prerelease = lt, tt.product = p, tt.ua = n, tt.version = c && a, tt.os = l || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        }, tt.parse = h, tt.toString = hi, tt.version && v.unshift(a), tt.name && v.unshift(c), !l || !c || l == String(l).split(" ")[0] && (l == c.split(" ")[0] || p) || v.push(p ? "(" + l + ")" : "on " + l), v.length && (tt.description = v.join(" ")), tt
    }
    var c = {
            "function": !0,
            object: !0
        },
        u = c[typeof window] && window || this,
        b = u,
        l = c[typeof exports] && exports,
        a = c[typeof module] && module && !module.nodeType && module,
        n = l && a && typeof global == "object" && global,
        f;
    n && (n.global === n || n.window === n || n.self === n) && (u = n);
    var k = Math.pow(2, 53) - 1,
        e = /\bOpera/,
        d = this,
        v = Object.prototype,
        g = v.hasOwnProperty,
        y = v.toString;
    f = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (u.platform = f, define(function() {
        return f
    })) : l && a ? s(f, function(n, t) {
        l[t] = n
    }) : u.platform = f
}).call(this);
$(document).ready(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY, s_bFocus = !0;
if (function(n) {
        (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera), $(window).resize(function() {
        sizeHandler()
    }), window.addEventListener("orientationchange", onOrientationChange), NoClickDelay.prototype = {
        handleEvent: function(n) {
            switch (n.type) {
                case "touchstart":
                    this.onTouchStart(n);
                    break;
                case "touchmove":
                    this.onTouchMove(n);
                    break;
                case "touchend":
                    this.onTouchEnd(n)
            }
        },
        onTouchStart: function(n) {
            n.preventDefault();
            this.moved = !1;
            this.element.addEventListener("touchmove", this, !1);
            this.element.addEventListener("touchend", this, !1)
        },
        onTouchMove: function() {
            this.moved = !0
        },
        onTouchEnd: function(n) {
            var t, i;
            this.element.removeEventListener("touchmove", this, !1);
            this.element.removeEventListener("touchend", this, !1);
            this.moved || (t = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY), t.nodeType == 3 && (t = t.parentNode), i = document.createEvent("MouseEvents"), i.initEvent("click", !0, !0), t.dispatchEvent(i))
        }
    }, function() {
        function n(n) {
            var i = "visible",
                r = "hidden",
                u = {
                    focus: i,
                    focusin: i,
                    pageshow: i,
                    blur: r,
                    focusout: r,
                    pagehide: r
                };
            n = n || window.event;
            n.type in u ? document.body.className = u[n.type] : (document.body.className = this[t] ? "hidden" : "visible", document.body.className === "hidden" ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
        }
        var t = "hidden";
        t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden") in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin" in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
    }(), screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    s_oInterface !== null && s_oInterface.resetFullscreenBut();
    s_oMenu !== null && s_oMenu.resetFullscreenBut()
});
s_szGameID = "befee110a7de492797cbfab705641c03";
window.GD_OPTIONS = {
        gameId: s_szGameID,
        onEvent: function(n) {
            switch (n.name) {
                case "SDK_GAME_START":
                    s_bAdShown = !1;
                    s_oMain && s_oMain.startUpdate();
                    break;
                case "SDK_GAME_PAUSE":
                    s_bAdShown = !0;
                    s_oMain && s_oMain.stopUpdate();
                    break;
                case "CONTENT_PAUSE_REQUESTED":
                case "STARTED":
                    s_oMain.stopUpdate();
                    break;
                case "CONTENT_RESUME_REQUESTED":
                case "COMPLETE":
                    s_oMain.startUpdate();
                    break;
                case "SDK_READY":
                    s_bMobile || (document.querySelector("#div_display_id").style.display = "block", typeof gdsdk != "undefined" && gdsdk.showAd !== "undefined" && gdsdk.showAd(gdsdk.AdType.Display, {
                        containerId: "div_display_id"
                    }).then(() => console.info("showAd(gdsdk.AdType.Display) resolved.")).catch(n => console.info(n)))
            }
        }
    },
    function(n, t, i) {
        var r, u = n.getElementsByTagName(t)[0];
        n.getElementById(i) || (r = n.createElement(t), r.id = i, r.src = "", u.parentNode.insertBefore(r, u))
    }(document, "script", "#");
s_bAdShown = !1;
var CANVAS_WIDTH = 1600,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 260,
    EDGEBOARD_Y = 0,
    FPS = 30,
    FPS_TIME = 1e3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    GAME_NAME = "freecell_solitaire",
    PRIMARY_FONT = "montserratblack",
    SOUNDTRACK_VOLUME_IN_GAME = .4,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_BUT_YES_DOWN = 0,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_DEAL = 1,
    STATE_GAME_CHOOSE_HOLD = 2,
    STATE_GAME_DRAW = 3,
    STATE_GAME_EVALUATE = 4,
    ON_CARD_SHOWN = "ON_CARD_SHOWN",
    ON_CARD_HIDE = "ON_CARD_HIDE",
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_SELECT_LANG = 6,
    SUIT_HEARTS = 0,
    SUIT_SPADES = 1,
    SUIT_DIAMONDS = 2,
    SUIT_CLUBS = 3,
    LABEL_EMPTY = 0,
    LABEL_HIDDEN = 1,
    LABEL_SHOWN = 2,
    CARD_WIDTH = 149,
    CARD_HEIGHT = 233,
    CARD_LOGIC_WIDTH = 76,
    CARD_LOGIC_HEIGHT = 116,
    POINTS_TO_LOSE, START_SCORE, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, NUM_LANGUAGES = 13,
    LANG_EN = 0,
    LANG_ES = 1,
    LANG_FR = 2,
    LANG_DE = 3,
    LANG_PT = 4,
    LANG_IT = 5,
    LANG_RU = 6,
    LANG_TR = 7,
    LANG_AR = 8,
    LANG_HI = 9,
    LANG_ID = 10,
    LANG_JA = 11,
    LANG_ZH = 12,
    LANG_CODES = {};
LANG_CODES.en = LANG_EN;
LANG_CODES.es = LANG_ES;
LANG_CODES.fr = LANG_FR;
LANG_CODES.de = LANG_DE;
LANG_CODES.pt = LANG_PT;
LANG_CODES.it = LANG_IT;
LANG_CODES.ru = LANG_RU;
LANG_CODES.tr = LANG_TR;
LANG_CODES.ar = LANG_AR;
LANG_CODES.hi = LANG_HI;
LANG_CODES.id = LANG_ID;
LANG_CODES.ja = LANG_JA;
LANG_CODES.zh = LANG_ZH;
LANG_CODES.be = LANG_RU;
LANG_CODES.kk = LANG_RU;
LANG_CODES.uk = LANG_RU;
LANG_CODES.uz = LANG_RU;
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var n = this._iFontSize; this._oText.getBounds().height > this._iHeight - this._iPaddingV * 2 || this._oText.getBounds().width > this._iWidth - this._iPaddingH * 2;)
                if (n--, this._oText.font = n + "px " + this._szFont, this._oText.lineHeight = Math.round(n * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), n < 8) break;
            this._iFontSize = n
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var n = this._oText.getBounds().height;
            this._oText.y -= (n - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(n) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(n, this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - this._iPaddingH * 2 : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(n)
    },
    setVerticalAlign: function(n) {
        this._bVerticalAlign = n
    },
    setOutline: function(n) {
        this._oText !== null && (this._oText.outline = n)
    },
    setShadow: function(n, t, i, r) {
        this._oText !== null && (this._oText.shadow = new createjs.Shadow(n, t, i, r))
    },
    setColor: function(n) {
        this._oText.color = n
    },
    setAlpha: function(n) {
        this._oText.alpha = n
    },
    setVisible: function(n) {
        this._oText.visible = n
    },
    setX: function(n) {
        this._oText.x = n;
        this._x = n
    },
    setY: function(n) {
        this._oText.y = n;
        this._y = n
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getX: function() {
        return this._x
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(n) {
        n === "" && (n = " ");
        this._oText === null && this.__createText(n);
        this._oText.text = n;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
var s_bMobile, s_bEasyMode, s_bAudioActive = !1,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_aSounds, s_aSoundsInfo, s_iCurLang = LANG_EN;
s_oMenu = null;
s_oInterface = null;
! function() {
    "use strict";

    function t(n) {
        return u(f(n), arguments)
    }

    function i(n, i) {
        return t.apply(null, [n].concat(i || []))
    }

    function u(i, r) {
        for (var y = 1, p = i.length, u, h = "", o, f, c, l, a, v, s, e = 0; e < p; e++)
            if (typeof i[e] == "string") h += i[e];
            else if (typeof i[e] == "object") {
            if (f = i[e], f.keys)
                for (u = r[y], o = 0; o < f.keys.length; o++) {
                    if (u == undefined) throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"', f.keys[o], f.keys[o - 1]));
                    u = u[f.keys[o]]
                } else u = f.param_no ? r[f.param_no] : r[y++];
            if (n.not_type.test(f.type) && n.not_primitive.test(f.type) && u instanceof Function && (u = u()), n.numeric_arg.test(f.type) && typeof u != "number" && isNaN(u)) throw new TypeError(t("[sprintf] expecting number but found %T", u));
            n.number.test(f.type) && (v = u >= 0);
            switch (f.type) {
                case "b":
                    u = parseInt(u, 10).toString(2);
                    break;
                case "c":
                    u = String.fromCharCode(parseInt(u, 10));
                    break;
                case "d":
                case "i":
                    u = parseInt(u, 10);
                    break;
                case "j":
                    u = JSON.stringify(u, null, f.width ? parseInt(f.width) : 0);
                    break;
                case "e":
                    u = f.precision ? parseFloat(u).toExponential(f.precision) : parseFloat(u).toExponential();
                    break;
                case "f":
                    u = f.precision ? parseFloat(u).toFixed(f.precision) : parseFloat(u);
                    break;
                case "g":
                    u = f.precision ? String(Number(u.toPrecision(f.precision))) : parseFloat(u);
                    break;
                case "o":
                    u = (parseInt(u, 10) >>> 0).toString(8);
                    break;
                case "s":
                    u = String(u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "t":
                    u = String(!!u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "T":
                    u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "u":
                    u = parseInt(u, 10) >>> 0;
                    break;
                case "v":
                    u = u.valueOf();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "x":
                    u = (parseInt(u, 10) >>> 0).toString(16);
                    break;
                case "X":
                    u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase()
            }
            n.json.test(f.type) ? h += u : (n.number.test(f.type) && (!v || f.sign) ? (s = v ? "+" : "-", u = u.toString().replace(n.sign, "")) : s = "", l = f.pad_char ? f.pad_char === "0" ? "0" : f.pad_char.charAt(1) : " ", a = f.width - (s + u).length, c = f.width ? a > 0 ? l.repeat(a) : "" : "", h += f.align ? s + u + c : l === "0" ? s + c + u : c + s + u)
        }
        return h
    }

    function f(t) {
        if (r[t]) return r[t];
        for (var f = t, i, o = [], h = 0; f;) {
            if ((i = n.text.exec(f)) !== null) o.push(i[0]);
            else if ((i = n.modulo.exec(f)) !== null) o.push("%");
            else if ((i = n.placeholder.exec(f)) !== null) {
                if (i[2]) {
                    h |= 1;
                    var s = [],
                        e = i[2],
                        u = [];
                    if ((u = n.key.exec(e)) !== null)
                        for (s.push(u[1]);
                            (e = e.substring(u[0].length)) !== "";)
                            if ((u = n.key_access.exec(e)) !== null) s.push(u[1]);
                            else if ((u = n.index_access.exec(e)) !== null) s.push(u[1]);
                    else throw new SyntaxError("[sprintf] failed to parse named argument key");
                    else throw new SyntaxError("[sprintf] failed to parse named argument key");
                    i[2] = s
                } else h |= 2;
                if (h === 3) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                o.push({
                    placeholder: i[0],
                    param_no: i[1],
                    keys: i[2],
                    sign: i[3],
                    pad_char: i[4],
                    align: i[5],
                    width: i[6],
                    precision: i[7],
                    type: i[8]
                })
            } else throw new SyntaxError("[sprintf] unexpected placeholder");
            f = f.substring(i[0].length)
        }
        return r[t] = o
    }
    var n = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
        },
        r = Object.create(null);
    typeof exports != "undefined" && (exports.sprintf = t, exports.vsprintf = i);
    typeof window != "undefined" && (window.sprintf = t, window.vsprintf = i, typeof define == "function" && define.amd && define(function() {
        return {
            sprintf: t,
            vsprintf: i
        }
    }))
}();
const NUM_ITEMS_PER_COLS = 5