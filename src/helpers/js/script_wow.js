function ws_squares(t, i, e) {
    var a = jQuery,
        s = a(this),
        n = e.find("ul").get(0);
    n.id = "wowslider_tmp" + Math.round(99999 * Math.random());
    var d = 0;
    a(n).coinslider({
        hoverPause: !1,
        startSlide: t.startSlide,
        navigation: 0,
        delay: -1,
        effect: t.type,
        width: t.width,
        height: t.height,
        sDelay: t.duration / 35
    });
    var r = a("#coin-slider-" + n.id).addClass("ws_effect ws_squares").css({
        position: "absolute",
        display: "none",
        left: 0,
        top: 0,
        "z-index": 8,
        transform: "translate3d(0,0,0)"
    });
    t.startSlide;
    a(n).bind("cs:animFinished", function () {
        s.trigger("effectEnd"), d < 2 && (d = 0, r.hide())
    }), this.go = function (i) {
        d++, r.show(), i, a.transition(n, i), r.css("background", "none"), t.fadeOut && a(n).fadeOut(t.duration)
    }
}
jQuery.fn.coinslider || function (f) {
    var p = new Array,
        l = new Array,
        n = new Array,
        a = new Array,
        d = new Array,
        r = new Array,
        t = new Array,
        o = new Array,
        e = new Array,
        c = new Array,
        h = new Array,
        u = new Array;
    f.fn.coinslider = f.fn.CoinSlider = function (s) {
        init = function (e) {
            for (l[e.id] = new Array, n[e.id] = new Array, a[e.id] = new Array, d[e.id] = new Array, r[e.id] = new Array, o[e.id] = s.startSlide || 0, c[e.id] = 0, h[e.id] = 1, u[e.id] = e, p[e.id] = f.extend({}, f.fn.coinslider.defaults, s), f.each(f("#" + e.id + " img"), function (i, t) {
                    n[e.id][i] = t, a[e.id][i] = f(t).parent().is("a") ? f(t).parent().attr("href") : "", d[e.id][i] = f(t).parent().is("a") ? f(t).parent().attr("target") : "", r[e.id][i] = f(t).next().is("span") ? f(t).next().html() : ""
                }), u[e.id] = f("<div class='coin-slider' id='coin-slider-" + e.id + "' />").css({
                    "background-image": "url(" + n[e.id][s.startSlide || 0].src + ")",
                    "-o-background-size": "100%",
                    "-webkit-background-size": "100%",
                    "-moz-background-size": "100%",
                    "background-size": "100%",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    "background-position": "top left"
                }).appendTo(f(e).parent().parent()), i = 1; i <= p[e.id].sph; i++)
                for (j = 1; j <= p[e.id].spw; j++) f(p[e.id].links ? "<a href='" + a[e.id][0] + "'></a>" : "<div></div>").css({
                    float: "left",
                    position: "absolute",
                    overflow: "hidden"
                }).append(f("<img>")).appendTo(u[e.id]).attr("id", "cs-" + e.id + i + j);
            u[e.id].append("<div class='cs-title' id='cs-title-" + e.id + "' style='position: absolute; bottom:0; left: 0; z-index: 1000;'></div>"), p[e.id].navigation && f.setNavigation(e)
        }, f.setFields = function (t) {
            var e = u[t.id].width(),
                a = u[t.id].height();
            for (tWidth = sWidth = parseInt(e / p[t.id].spw), tHeight = sHeight = parseInt(a / p[t.id].sph), counter = sLeft = sTop = 0, tgapx = gapx = p[t.id].width - p[t.id].spw * sWidth, tgapy = gapy = p[t.id].height - p[t.id].sph * sHeight, imgParams = f(n[t.id][s.startSlide || 0]), imgParams = {
                    width: imgParams.width(),
                    height: imgParams.height(),
                    marginTop: parseFloat(imgParams.css("marginTop")),
                    marginLeft: parseFloat(imgParams.css("marginLeft"))
                }, i = 1; i <= p[t.id].sph; i++) {
                for (gapx = tgapx, 0 < gapy ? (gapy--, sHeight = tHeight + 1) : sHeight = tHeight, j = 1; j <= p[t.id].spw; j++) 0 < gapx ? (gapx--, sWidth = tWidth + 1) : sWidth = tWidth, l[t.id][counter] = i + "" + j, counter++, f("#cs-" + t.id + i + j).css({
                    width: sWidth + "px",
                    height: sHeight + "px",
                    overflow: "hidden",
                    left: sLeft,
                    top: sTop
                }).addClass("cs-" + t.id).find("img").css({
                    width: imgParams.width,
                    height: imgParams.height,
                    marginTop: imgParams.marginTop - sTop,
                    marginLeft: imgParams.marginLeft - sLeft
                }), sLeft += sWidth;
                sTop += sHeight, sLeft = 0
            }
            f(".cs-" + t.id).mouseover(function () {
                f("#cs-navigation-" + t.id).show()
            }), f(".cs-" + t.id).mouseout(function () {
                f("#cs-navigation-" + t.id).hide()
            }), f("#cs-title-" + t.id).mouseover(function () {
                f("#cs-navigation-" + t.id).show()
            }), f("#cs-title-" + t.id).mouseout(function () {
                f("#cs-navigation-" + t.id).hide()
            }), p[t.id].hoverPause && (f(".cs-" + t.id).mouseover(function () {
                p[t.id].pause = !0
            }), f(".cs-" + t.id).mouseout(function () {
                p[t.id].pause = !1
            }), f("#cs-title-" + t.id).mouseover(function () {
                p[t.id].pause = !0
            }), f("#cs-title-" + t.id).mouseout(function () {
                p[t.id].pause = !1
            }))
        }, f.transitionCall = function (i) {
            p[i.id].delay < 0 || (clearInterval(t[i.id]), delay = p[i.id].delay + p[i.id].spw * p[i.id].sph * p[i.id].sDelay, t[i.id] = setInterval(function () {
                f.transition(i)
            }, delay))
        }, f.transition = function (i, t) {
            1 != p[i.id].pause && (f.setFields(i), f.effect(i), c[i.id] = 0, e[i.id] = setInterval(function () {
                f.appereance(i, l[i.id][c[i.id]])
            }, p[i.id].sDelay), f(u[i.id]).find("img").attr("src", n[i.id][o[i.id]].src), void 0 === t ? o[i.id]++ : "prev" == t ? o[i.id]-- : o[i.id] = t, o[i.id] == n[i.id].length && (o[i.id] = 0), -1 == o[i.id] && (o[i.id] = n[i.id].length - 1), f(".cs-button-" + i.id).removeClass("cs-active"), f("#cs-button-" + i.id + "-" + (o[i.id] + 1)).addClass("cs-active"), r[i.id][o[i.id]] ? (f("#cs-title-" + i.id).css({
                opacity: 0
            }).animate({
                opacity: p[i.id].opacity
            }, p[i.id].titleSpeed), f("#cs-title-" + i.id).html(r[i.id][o[i.id]])) : f("#cs-title-" + i.id).css("opacity", 0))
        }, f.appereance = function (i, t) {
            return f(".cs-" + i.id).attr("href", a[i.id][o[i.id]]).attr("target", d[i.id][o[i.id]]), c[i.id] == p[i.id].spw * p[i.id].sph ? (clearInterval(e[i.id]), void setTimeout(function () {
                f(i).trigger("cs:animFinished")
            }, 300)) : (f("#cs-" + i.id + t).find("img").css("opacity", 0).attr("src", n[i.id][o[i.id]].src).animate({
                opacity: 1
            }, 300), void c[i.id]++)
        }, f.setNavigation = function (e) {
            for (f(u[e.id]).append("<div id='cs-navigation-" + e.id + "'></div>"), f("#cs-navigation-" + e.id).hide(), f("#cs-navigation-" + e.id).append("<a href='#' id='cs-prev-" + e.id + "' class='cs-prev'>prev</a>"), f("#cs-navigation-" + e.id).append("<a href='#' id='cs-next-" + e.id + "' class='cs-next'>next</a>"), f("#cs-prev-" + e.id).css({
                    position: "absolute",
                    top: p[e.id].height / 2 - 15,
                    left: 0,
                    "z-index": 1001,
                    "line-height": "30px",
                    opacity: p[e.id].opacity
                }).click(function (i) {
                    i.preventDefault(), f.transition(e, "prev"), f.transitionCall(e)
                }).mouseover(function () {
                    f("#cs-navigation-" + e.id).show()
                }), f("#cs-next-" + e.id).css({
                    position: "absolute",
                    top: p[e.id].height / 2 - 15,
                    right: 0,
                    "z-index": 1001,
                    "line-height": "30px",
                    opacity: p[e.id].opacity
                }).click(function (i) {
                    i.preventDefault(), f.transition(e), f.transitionCall(e)
                }).mouseover(function () {
                    f("#cs-navigation-" + e.id).show()
                }), f("<div id='cs-buttons-" + e.id + "' class='cs-buttons'></div>").appendTo(f("#coin-slider-" + e.id)), k = 1; k < n[e.id].length + 1; k++) f("#cs-buttons-" + e.id).append("<a href='#' class='cs-button-" + e.id + "' id='cs-button-" + e.id + "-" + k + "'>" + k + "</a>");
            f.each(f(".cs-button-" + e.id), function (t, i) {
                f(i).click(function (i) {
                    f(".cs-button-" + e.id).removeClass("cs-active"), f(this).addClass("cs-active"), i.preventDefault(), f.transition(e, t), f.transitionCall(e)
                })
            }), f("#cs-navigation-" + e.id + " a").mouseout(function () {
                f("#cs-navigation-" + e.id).hide(), p[e.id].pause = !1
            }), f("#cs-buttons-" + e.id).css({
                left: "50%",
                "margin-left": 15 * -n[e.id].length / 2 - 5,
                position: "relative"
            })
        }, f.effect = function (t) {
            if (effA = ["random", "swirl", "rain", "straight", "snakeV", "rainV"], eff = "" == p[t.id].effect ? effA[Math.floor(Math.random() * effA.length)] : p[t.id].effect, l[t.id] = new Array, "random" == eff) {
                for (counter = 0, i = 1; i <= p[t.id].sph; i++)
                    for (j = 1; j <= p[t.id].spw; j++) l[t.id][counter] = i + "" + j, counter++;
                f.random(l[t.id])
            }
            /rain|swirl|straight|snakeV|rainV/.test(eff) && f[eff](t), h[t.id] *= -1, 0 < h[t.id] && l[t.id].reverse()
        }, f.random = function (i) {
            var t = i.length;
            if (0 == t) return !1;
            for (; --t;) {
                var e = Math.floor(Math.random() * (t + 1)),
                    a = i[t],
                    s = i[e];
                i[t] = s, i[e] = a
            }
        }, f.swirl = function (t) {
            for (var e = p[t.id].sph, a = p[t.id].spw, s = 1, n = 1, d = 0, r = 0, o = 0, c = !0; c;) {
                for (r = 0 == d || 2 == d ? a : e, i = 1; r >= i; i++)
                    if (l[t.id][o] = s + "" + n, o++, i != r) switch (d) {
                        case 0:
                            n++;
                            break;
                        case 1:
                            s++;
                            break;
                        case 2:
                            n--;
                            break;
                        case 3:
                            s--
                    }
                switch (d = (d + 1) % 4) {
                    case 0:
                        a--, n++;
                        break;
                    case 1:
                        e--, s++;
                        break;
                    case 2:
                        a--, n--;
                        break;
                    case 3:
                        e--, s--
                }
                check = f.max(e, a) - f.min(e, a), check >= a && check >= e && (c = !1)
            }
        }, f.rain = function (t) {
            for (var e = p[t.id].sph, a = p[t.id].spw, s = 0, n = to2 = from = 1, d = !0; d;) {
                for (i = from; n >= i; i++) l[t.id][s] = i + "" + parseInt(to2 - i + 1), s++;
                to2++, n < e && a > to2 && e < a && n++, n < e && a <= e && n++, to2 > a && from++, from > n && (d = !1)
            }
        }, f.rainV = function (i) {
            for (var t = p[i.id], e = 0, a = 1; a <= t.sph; a++)
                for (var s = 1; s <= t.spw; s++) l[i.id][e] = a + "" + s, e++
        }, f.snakeV = function (i) {
            for (var t = p[i.id], e = 0, a = 1; a <= t.sph; a++)
                for (var s = 1; s <= t.spw; s++) l[i.id][e] = a + "" + (a % 2 ? s : t.spw + 1 - s), e++
        }, f.straight = function (t) {
            for (counter = 0, i = 1; i <= p[t.id].sph; i++)
                for (j = 1; j <= p[t.id].spw; j++) l[t.id][counter] = i + "" + j, counter++
        }, f.min = function (i, t) {
            return t < i ? t : i
        }, f.max = function (i, t) {
            return i < t ? t : i
        }, this.each(function () {
            init(this)
        })
    }, f.fn.coinslider.defaults = {
        width: 565,
        height: 290,
        spw: 7,
        sph: 5,
        delay: 3e3,
        sDelay: 30,
        opacity: .7,
        titleSpeed: 500,
        effect: "",
        navigation: !0,
        links: !0,
        hoverPause: !0
    }
}(jQuery), jQuery("#wowslider-container1").wowSlider({
    effect: "squares",
    prev: "",
    next: "",
    duration: 2e3,
    delay: 2e3,
    width: 640,
    height: 360,
    autoPlay: !0,
    autoPlayVideo: !1,
    playPause: !0,
    stopOnHover: !1,
    loop: !1,
    bullets: 1,
    caption: !0,
    captionEffect: "parallax",
    controls: !0,
    controlsThumb: !1,
    responsive: 1,
    fullScreen: !1,
    gestures: 2,
    onBeforeStep: 0,
    images: 0
});