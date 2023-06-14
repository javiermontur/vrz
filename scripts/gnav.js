window.gnav20 = window.gnav20 || {};
if (/MY_VZW_APP/.test(navigator.userAgent)) {
    gnav20.navDivs = document.querySelectorAll("#vz-gh20, #vz-gf20");
    for (var i = 0; i < gnav20.navDivs.length; ++i)
        gnav20.navDivs[i].remove();
    if (!/\/sales\/digital\/ \/sales\/next\//.test(location.href)) {
        var json4app = JSON.stringify({
            actionType: "updateNavigation",
            navigationBar: {
                moleculeName: "navigationBar",
                title: document.title,
                alwaysShowBackButton: !0
            }
        });
        void 0 != window.webkit && void 0 != window.webkit.messageHandlers.mfAppInterface && window.webkit.messageHandlers.mfAppInterface.postMessage(json4app);
        void 0 != window.mfAppInterface && window.mfAppInterface.postMessage(json4app)
    }
}
gnav20.getCookie = function(a) {
    a += "\x3d";
    for (var b = decodeURIComponent(document.cookie).split(";"), c = 0; c < b.length; c++) {
        for (var d = b[c]; " " == d.charAt(0); )
            d = d.substring(1);
        if (0 == d.indexOf(a))
            return d.substring(a.length, d.length)
    }
    return ""
}
;
gnav20.setCookie = function(a, b, c) {
    var d = "https:" === location.protocol ? ";secure" : ""
      , e = location.host.split(".");
    e = /localhost/.test(location.host) ? "localhost" : e[e.length - 2] + "." + e[e.length - 1];
    a = a + "\x3d" + b;
    c && (b = new Date,
    b.setTime(b.getTime() + 864E5 * c),
    a += ";expires\x3d" + b.toUTCString());
    document.cookie = a + ";domain\x3d" + e + ";path\x3d/" + d
}
;
gnav20.deleteCookie = function(a) {
    gnav20.setCookie(a, "", -1)
}
;
gnav20.getURLParams = function(a) {
    var b = {};
    a = a.substring(1).split("\x26");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].split("\x3d");
        b[d[0]] = decodeURIComponent(d[1])
    }
    return b
}
;
gnav20.personalizeHidden = function() {
    var a = [];
    window.gnavdl && window.gnavdl.options && window.gnavdl.options["hide-item"] && (a = window.gnavdl.options["hide-item"]);
    a && a.forEach(function(a, c) {
        a = document.querySelectorAll("[item-title\x3d" + a + "]");
        for (i = 0; i < a.length; i++)
            a[i].style.display = "none"
    })
}
;
gnav20.hideLink = function(a) {
    var b = !1;
    if ("undefined" != typeof gnav20.personalization && a.dataset.showFor) {
        var c = a.dataset.showFor.split(",");
        for (i = 0; i < c.length; i++)
            if (c[i])
                if (b = c[i].split(":"),
                2 == b.length && void 0 !== gnav20.personalization[b[0]])
                    if (gnav20.personalization[b[0]].toLowerCase() == b[1].toLowerCase()) {
                        b = !1;
                        break
                    } else
                        b = !0;
                else
                    b = !0
    } else
        a.dataset.showFor && (b = !0);
    if (!b && "undefined" != typeof gnav20.personalization && a.dataset.hideFor)
        for (a = a.dataset.hideFor.split(","),
        i = 0; i < a.length; i++)
            if (a[i] && (c = a[i].split(":"),
            2 == c.length && void 0 !== gnav20.personalization[c[0]] && gnav20.personalization[c[0]].toLowerCase() == c[1].toLowerCase())) {
                b = !0;
                break
            }
    return b
}
;
gnav20.disableLink = function(a) {
    var b = !1;
    if ("undefined" != typeof gnav20.personalization && a.dataset.disabledFor)
        for (a = a.dataset.disabledFor.split(","),
        i = 0; i < a.length; i++)
            if (a[i]) {
                var c = a[i].split(":");
                if (2 == c.length && void 0 !== gnav20.personalization[c[0]] && gnav20.personalization[c[0]].toLowerCase() == c[1].toLowerCase()) {
                    b = !0;
                    break
                }
            }
    return b
}
;
gnav20.initPersona = function() {
    for (var a = document.querySelectorAll("[data-show-for], [data-hide-for]"), b = 0; b < a.length; b++)
        a[b].parentElement.classList.remove("gnav20-hide"),
        gnav20.hideLink(a[b]) && a[b].parentElement.classList.add("gnav20-hide");
    a = document.querySelectorAll("[data-disabled-for]");
    for (b = 0; b < a.length; b++)
        a[b].parentElement.classList.remove("gnav20-disabled"),
        gnav20.disableLink(a[b]) && a[b].classList.add("gnav20-disabled");
    if ((gnav20.greetingName && "" != gnav20.greetingName || gnav20.getCookie("greetingName") && /\w/.test(gnav20.getCookie("greetingName"))) && document.querySelector(".gnav20 .accountName"))
        for (a = document.querySelectorAll(".gnav20 .accountName"),
        b = 0; b < a.length; b++)
            a[b].innerText = gnav20.greetingName ? ", " + gnav20.greetingName : ", " + gnav20.getCookie("greetingName");
    if ("undefined" != typeof gnav20.personalization && gnav20.personalization && gnav20.personalization.zip)
        for (a = document.querySelectorAll(".gnav20 .gnav20-location-icon .zip-text"),
        b = 0; b < a.length; b++)
            a[b].innerHTML = gnav20.personalization.zip,
            a[b].closest(".gnav20-location-icon") && a[b].closest(".gnav20-location-icon").classList.add("active");
    if ("undefined" != typeof gnav20.personalization && gnav20.personalization && gnav20.personalization.activeAcc)
        for (a = document.querySelectorAll(".gnav20 .activeAcc"),
        b = 0; b < a.length; b++)
            a[b].innerHTML = "#" + gnav20.personalization.activeAcc
}
;
gnav20.showBubble = function() {
    var a = gnav20.getCookie("loggedIn")
      , b = gnav20.getCookie("fwacartexists")
      , c = document.getElementsByClassName("showBubble")
      , d = document.getElementsByClassName("gnav20-wish-list-bubble")
      , e = gnav20.getCookie("isPrepayCartExist") ? "prepayCartCount" : a ? "gnCartCount" : "prospectCartCount"
      , l = parseInt(gnav20.getCookie(e))
      , n = parseInt(gnav20.getCookie("wishListCount"))
      , k = 0 < l || b ? "block" : "none"
      , g = n ? "block" : "none";
    "prospectCartCount" !== e || gnav20.getCookie("prospectCartActive") || gnav20.getCookie("AccessoryOnlyCartAvailable") || b || (k = "none",
    l = 0);
    for (e = 0; e < c.length; e++)
        c[e].style.display = k,
        c[e].innerText = isNaN(l) ? "" : l;
    c = document.querySelectorAll(".gnav20 .gnav20-gnav-new-design .gnav20-unifiedcart-bubble");
    for (e = 0; e < c.length; e++) {
        c[e].style.display = k;
        c[e].innerText = 99 < l ? "99+" : l;
        pluralTag = 1 == l ? "" : "s";
        var m = isNaN(l) ? "Shopping Cart Menu" : "Shopping Cart Menu " + l + " item" + pluralTag + " in the cart";
        c[e].parentElement.setAttribute("aria-label", m)
    }
    k = document.querySelectorAll(".gnav20 .gnav20-unified-cart .gnav20-content-list .gnav20-content-list-arrow.gnav20-mobile-cart-count");
    for (e = 0; e < k.length; e++)
        l && 0 < l ? (0 < k[e].innerText.indexOf("(") ? k[e].innerText = k[e].innerText.substr(0, k[e].innerText.indexOf("(")) + "(" + l + ")" : k[e].innerText = k[e].innerText + " (" + l + ")",
        pluralTag = 1 == l ? "" : "s",
        c = isNaN(l) ? "Mobile solutions" : "Mobile solutions " + l + " item" + pluralTag + " in the cart",
        k[e].setAttribute("aria-label", c)) : k[e].innerText = "Mobile solutions";
    if (a || b || gnav20.getCookie("islogin"))
        for (a = document.querySelectorAll(".gnav20 .gnav20-unified-cart .gnav20-content-list .gnav20-content-list-arrow.gnav20-home-cart-count"),
        l = /billpay.verizonwireless/.test(location.host) ? "https://vzwqa" + location.host.substr(2, 1) + ".verizonwireless.com" : /verizonwireless/.test(location.host) ? "" : /wwwnssit/.test(location.host) ? "" : "https://www.verizon.com",
        e = 0; e < a.length; e++)
            a[e].href = l + "/sales/home/plansOverview.html",
            b && 0 > a[e].innerText.indexOf("(") && (a[e].innerText += " (1)",
            a[e].setAttribute("aria-label", "Home solutions, with one item in the cart"));
    b = document.querySelectorAll(".gnav20 .gnav20-featured-card .gnav20-submenu-column .gnav20-sub-nav-list.gnav20-wishlist-menu-indicator \x3e a");
    for (e = 0; e < b.length; e++)
        n && 0 < n && (b[e].innerHTML = "Wishlist (" + n + ")",
        plural = 1 == n ? "" : "s",
        a = isNaN(n) ? "Wishlist" : "Wishlist with " + n + " item" + plural,
        b[e].setAttribute("aria-label", a));
    for (e = 0; e < d.length; e++)
        d[e].style.display = g,
        d[e].innerText = isNaN(n) ? "" : n,
        plural = 1 == n ? "" : "s",
        b = isNaN(n) ? "Wishlist" : "Wishlist with " + n + " item" + plural,
        d[e].parentElement.setAttribute("aria-label", b)
}
;
gnav20.cartUtility = function(a) {
    a.preventDefault();
    a = /billpay.verizonwireless/.test(location.host) ? "https://vzwqa" + location.host.substr(2, 1) + ".verizonwireless.com" : /verizonwireless/.test(location.host) ? "" : /wwwnssit/.test(location.host) ? "" : "https://www.verizon.com";
    gnav20.getCookie("prospectCartCount");
    var b = gnav20.getCookie("isPrepayCartExist") || "prepay" == gnav20.getCookie("role")
      , c = gnav20.getCookie("AccessoryOnlyCartAvailable")
      , d = gnav20.getCookie("NSAAccessoryOnlyCartAvailable")
      , e = "Y" == gnav20.getCookie("fwacartexists") && !parseInt(gnav20.getCookie("prospectCartCount")) && !parseInt(gnav20.getCookie("gnCartCount")) && !c && !d
      , l = gnav20.getCookie("loggedIn")
      , n = gnav20.getCookie("NEXTGEN");
    location.href = b && l ? a + "/od/prepaid/cart/#/" : b ? a + "/sales/prepaid/expresscart.html" : e ? a + "/sales/home/plansOverview.html" : l ? a + "/sales/next/expresscheckout.html?pageName\x3dcart" : c ? a + "/od/cust/cart/getCartDetails" : d ? a + "/sales/digital/cart.html" : n ? a + "/sales/nextgen/expresscart.html?pageName\x3dcart" : a + "/sales/next/expresscart.html?pageName\x3dcart"
}
;
window.vzwgnav = window.vzwgnav || {};
window.vzwgnav.setIconCounts = gnav20.showBubble;
window.gnav20.setIconCounts = gnav20.showBubble;
gnav20.initIconCounts = function() {
    gnav20.getCookie("loggedIn") || gnav20.deleteCookie("wishListCount");
    gnav20.showBubble()
}
;
gnav20.smartlingTranslation = function() {
    var a = location.host.split(".")[0];
    switch (a) {
    case "www":
        var b = "esus";
        break;
    case "www98":
        b = "esus-uat";
        break;
    case "esus":
        b = "www";
        break;
    case "esus-uat":
        b = "www98"
    }
    location.href = location.href.replace(a, b)
}
;
var MP = {
    Version: "1.0.23",
    Domains: /verizonwireless/.test(location.host) ? {
        es: "es.verizonwireless.com"
    } : {
        es: "espanol.verizon.com"
    },
    SrcLang: "en",
    UrlLang: "mp_js_current_lang",
    SrcUrl: decodeURIComponent("mp_js_orgin_url"),
    init: function() {
        1 == MP.UrlLang.indexOf("p_js_") && (MP.SrcUrl = location.href,
        MP.UrlLang = MP.SrcLang)
    },
    getCookie: function(a) {
        var b = document.cookie.indexOf(a + "\x3d");
        if (0 > b)
            return null;
        b = b + a.length + 1;
        a = document.cookie.indexOf(";", b);
        0 > a && (a = document.cookie.length);
        for (; " " == document.cookie.charAt(b); )
            b++;
        return decodeURIComponent(document.cookie.substring(b, a))
    },
    setCookie: function(a, b, c, d) {
        a = a + "\x3d" + encodeURIComponent(b);
        c && (a += "; path\x3d" + c);
        d && (a += "; domain\x3d" + d);
        c = new Date;
        c.setTime(c.getTime() + 31536E6);
        a += "; expires\x3d" + c.toUTCString();
        document.cookie = a
    },
    switchLanguage: function(a) {
        if (a != MP.SrcLang) {
            var b = document.createElement("SCRIPT");
            b.src = location.protocol + "//" + MP.Domains[a] + "/" + MP.SrcLang + a + "/?1023749632;" + encodeURIComponent(MP.SrcUrl);
            document.body.appendChild(b)
        } else
            a == MP.SrcLang && MP.UrlLang != MP.SrcLang && (b = document.createElement("SCRIPT"),
            b.src = location.protocol + "//" + MP.Domains[MP.UrlLang] + "/" + MP.SrcLang + MP.UrlLang + "/?1023749634;" + encodeURIComponent(location.href),
            document.body.appendChild(b));
        return !1
    },
    switchToLang: function(a) {
        location.href = a
    }
};
gnav20.setFocusTrap = function(a) {
    var b = a.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type\x3d"search"]:not([disabled]), input[type\x3d"text"]:not([disabled]), input[type\x3d"radio"]:not([disabled]), input[type\x3d"checkbox"]:not([disabled]), select:not([disabled])');
    indexInc = 1;
    gnav20.focusTrapContainer = a;
    gnav20.firstFocusableEl = b[0];
    for (gnav20.lastFocusableEl = b[b.length - indexInc]; gnav20.lastFocusableEl && !gnav20.lastFocusableEl.offsetParent; )
        indexInc++,
        gnav20.lastFocusableEl = b[b.length - indexInc];
    gnav20.focusTrapContainer.removeEventListener("keydown", gnav20.focusTrap);
    gnav20.focusTrapContainer.addEventListener("keydown", gnav20.focusTrap)
}
;
gnav20.clearFocusTrap = function() {
    gnav20.focusTrapContainer && (gnav20.focusTrapContainer.removeEventListener("keydown", gnav20.focusTrap),
    gnav20.activeCloseButton = null)
}
;
gnav20.focusTrap = function(a) {
    9 == a.keyCode && (a.shiftKey ? document.activeElement == gnav20.firstFocusableEl && (gnav20.lastFocusableEl.focus(),
    a.preventDefault()) : document.activeElement == gnav20.lastFocusableEl && (gnav20.firstFocusableEl.focus(),
    a.preventDefault()))
}
;
gnav20.clickOutsideClose = function(a) {
    console.log("clickOutsideClose");
    !a.target.closest(gnav20.closeElementQuery) && gnav20.activeCloseButton && gnav20.activeCloseButton.click()
}
;
gnav20.initVisualCue = function() {
    testIndicatorIndex = 0;
    testIndicatorInterval = setInterval(function() {
        testIndicatorIndex++;
        if (document.querySelector("#vz-gf20 .gnav20-footer-level-two .copyright-section") && !document.getElementById("visual-cue")) {
            var a = document.createElement("DIV");
            a.id = "visual-cue";
            a.innerHTML = "\x3cdiv\x3e\x3c/div\x3e\x3cdiv\x3e\x3c/div\x3e\x3cdiv\x3e\x3c/div\x3e";
            document.querySelector("#vz-gf20 .gnav20-footer-level-two .copyright-section").appendChild(a)
        }
        if (window.runningExperiment && document.getElementById("visual-cue")) {
            a = document.getElementById("visual-cue");
            var b = a.children;
            a.style.display = "block";
            window.runningExperiment.forEach(function(a, d) {
                /optimization/.test(a.toLowerCase()) ? b[0].setAttribute("class", "visual-cue-show") : /merchandising/.test(a.toLowerCase()) ? b[1].setAttribute("class", "visual-cue-show") : /personalization/.test(a.toLowerCase()) && b[2].setAttribute("class", "visual-cue-show")
            });
            clearInterval(testIndicatorInterval)
        }
        29 < testIndicatorIndex && clearInterval(testIndicatorInterval)
    }, 1E3)
}
;
gnav20.check4BusinessCookie = function() {
    var a = gnav20.getCookie("VZ_ATLAS_SITE_PERS");
    a && /=business/.test(a) && !gnav20.getCookie("hideBizBubble") && (gnav20.bizSpan || (gnav20.bizSpan = document.createElement("span"),
    gnav20.bizSpan.className = "biz-bubble",
    gnav20.bizSpan.style.marginLeft = 0,
    gnav20.bizSpan.innerHTML = 'Looking for Business?\x3cbutton id\x3d"close-biz-look-bubble"\x3e\x26times;\x3c/button\x3e',
    a = gnav20.bizSpan.querySelector("button"),
    gnav20.bizSpan && a && (a.setAttribute("aria-label", "close the looking for business tooltip"),
    a.addEventListener("click", function() {
        gnav20.bizSpan.style.display = "none";
        gnav20.setCookie("hideBizBubble", "true")
    }))),
    (a = document.querySelector(".gnav20-eyebrow-link-list-item.gnav20-two")) && !a.querySelector(".biz-bubble") && a.appendChild(gnav20.bizSpan))
}
;
gnav20.initPromo = function() {
    function a(a) {
        a.target.closest(".gnav20-promo-ribbon") && a.target.closest(".gnav20-promo-ribbon").querySelector(".gnav20-modal-content-placeholder") && a.target.closest(".gnav20-promo-ribbon-wrapper") && a.target.closest(".gnav20-promo-ribbon-wrapper").querySelector(".gnav20-modal") && (a.target.closest(".gnav20-promo-ribbon-wrapper").querySelector(".gnav20-modal-content-wrapper").innerHTML = a.target.closest(".gnav20-promo-ribbon").querySelector(".gnav20-modal-content-placeholder").innerHTML,
        a.target.closest(".gnav20-promo-ribbon-wrapper").querySelector(".gnav20-modal").style.display = "block",
        a.target.closest(".gnav20-promo-ribbon-wrapper").querySelector(".gnav20-promo-close-icon").focus(),
        toggleAriaHiddenGnav20("modal", !0),
        gnav20.setFocusTrap(document.querySelector(".gnav20-modal-content")),
        promoIconEleActive = a.target,
        autoplay = !1)
    }
    function b(a) {
        if (a = a.target.closest(".gnav20-promo-ribbon-wrapper").querySelector(".gnav20-modal"))
            a.style.display = "none";
        promoIconEleActive && promoIconEleActive.focus();
        toggleAriaHiddenGnav20("modal", !1);
        gnav20.clearFocusTrap()
    }
    gnav20.modal = document.getElementById("gnav20-modal");
    gnav20.modal && gnav20.modal.addEventListener("click", function(a) {
        a.target.closest(".gnav20-modal-content") || (gnav20.modal.style.display = "none")
    });
    for (var c = document.querySelectorAll(".gnav20-promo-text .gnav20-promo-icon"), d = 0; d < c.length; d++)
        c[d].removeEventListener("click", a),
        c[d].addEventListener("click", a);
    c = document.querySelectorAll(".gnav20-promo-ribbon-wrapper .gnav20-modal .gnav20-promo-close-icon");
    for (d = 0; d < c.length; d++)
        c[d].removeEventListener("click", b),
        c[d].addEventListener("click", b),
        gnav20.activeCloseButton = c[d]
}
;
gnav20.initSearch = function() {
    function a() {
        document.querySelector(".gnav20-desktop .gnav20-search-icon") && document.querySelector(".gnav20-desktop .gnav20-search-icon").click()
    }
    function b(a) {
        window.oneSearchTrigger ? setTimeout("window.oneSearchTrigger.click()", 10) : "vec" == gnav20.bu && window.vec_gnav_globalSearch ? window.vec_gnav_globalSearch() : c(a)
    }
    function c(a) {
        window.acConfig = {
            targetEl: "oneSearchContainerGnav",
            source: "GNAV",
            src: gnav20.bu
        };
        var c = "https://scache-ws.vzw.com";
        document.getElementById("gnav20-search-context") && (c = /true/.test(document.getElementById("gnav20-search-context").value) ? "https://scache-ws.vzw.com" : gnav20.getScriptOrigin());
        var d = document.getElementsByTagName("body")[0]
          , e = document.createElement("div");
        e.id = "oneSearchContainerGnav";
        e.style.zIndex = 4600;
        e.style.position = "absolute";
        e.style.width = "100%";
        d.insertBefore(e, d.firstChild);
        window.oneSearchDiv = e;
        d = document.createElement("script");
        d.type = "text/javascript";
        d.src = c + "/onedigital/search/build/common/bundle.common.js";
        d.onload = function() {
            console.log("script 1 loaded")
        }
        ;
        document.getElementsByTagName("head")[0].appendChild(d);
        d = document.createElement("script");
        d.type = "text/javascript";
        d.src = c + "/onedigital/search/build/autosuggest/bundle.autosuggest.js";
        d.onload = function() {
            console.log("script 2 loaded");
            window.renderAutoSuggest(window.acConfig);
            window.oneSearchTrigger = e.querySelector("button.searchBtn");
            window.oneSearchTrigger.parentElement.style.height = "0";
            window.oneSearchTrigger.parentElement.style.overflow = "hidden";
            b(a)
        }
        ;
        document.getElementsByTagName("head")[0].appendChild(d)
    }
    var d = document.querySelectorAll(".gnav20-search-icon");
    for (i = 0; i < d.length; i++)
        d[i].addEventListener("click", b);
    d = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-nav-search-icon");
    for (i = 0; i < d.length; i++)
        d[i].addEventListener("click", a);
    d = document.createElement("div");
    d.classList.add("gnav20-click-div");
    document.body.append(d)
}
;
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
Element.prototype.closest || (Element.prototype.closest = function(a) {
    var b = this;
    do {
        if (b.matches(a))
            return b;
        b = b.parentElement || b.parentNode
    } while (null !== b && 1 === b.nodeType);
    return null
}
);
function mobilelabelposition() {
    var a = document.querySelectorAll(".gnav20-mobile .gnav20-eyebrow-links-list-item.gnav20-more")
      , b = document.querySelector(".gnav20-mobile  .gnav20-eyebrow-link-list-item.gnav20-more");
    if (b) {
        var c = b.children;
        if (2 < c.length)
            for (b = 1,
            i = 0; i < c.length; i++)
                c[i].classList.contains("gnav20-selected") || (c[i].classList.add("gnav20-nonselcted" + b),
                b += 1)
    }
    if (void 0 != a && 0 < a.length)
        for (a = document.querySelectorAll(".gnav20-mobile .gnav20-eyebrow-links-list-item.gnav20-more"),
        b = c = 0; b <= a[0].children.length - 1; b++)
            a[0].children[b].classList.contains("gnav20-selected") || (a[0].children[b].style.left = c + "%",
            c += 50)
}
function laguageMenuToggle(a) {
    var b = a.target || this;
    if (b.closest(".gnav20-language-box") && b.closest(".gnav20-language-box").querySelector(".gnav20-dropdown-menu"))
        if (b.closest(".gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.contains("gnav20-hide"))
            signinContentHide(),
            storeContentHide(),
            document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.add("gnav20-hide"),
            b.closest(".gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.remove("gnav20-hide"),
            1272 > window.innerWidth && (b.closest(".gnav20-mobile .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.add("gnav20-open-menu"),
            document.querySelector(".gnav20-vzhmoverlay").classList.toggle("gnav20-menuop"));
        else
            for (languageContentHide(),
            MenuContentBack(),
            a = document.querySelectorAll(".gnav20-mobile .gnav20-visibilty-hidden"),
            1272 > window.innerWidth && b.closest(".gnav20-mobile .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.contains("gnav20-open-menu") && (b.closest(".gnav20-mobile  .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.remove("gnav20-open-menu"),
            document.querySelector(".gnav20-vzhmoverlay").classList.toggle("gnav20-menuop")),
            b = 0; b < a.length; b++)
                a[b].classList.remove("gnav20-visibilty-hidden")
}
function mobileLwindowclose(a) {
    a = a.target || this;
    a.closest(".gnav20-mobile .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.contains("gnav20-open-menu") && (a.closest(".gnav20-mobile .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.remove("gnav20-open-menu"),
    a.closest(".gnav20-mobile .gnav20-language-box").querySelector(".gnav20-dropdown-menu").classList.add("gnav20-hide"),
    document.querySelector(".gnav20-vzhmoverlay").classList.toggle("gnav20-menuop"),
    document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.remove("gnav20-hide"))
}
function signinToggleForMobile() {
    var a = document.querySelectorAll(".gnav20-mobile .gnav20-account-utility .gnav20-dropdown-menu");
    if (0 < a.length && a[0].classList.contains("gnav20-hide"))
        languageContentHide(),
        a[0].closest(".gnav20-stacked-utility") ? document.querySelector("#gnav20-mobile-menu .gnav20-eyebrow").classList.add("gnav20-hide") : document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.add("gnav20-hide"),
        a[0].classList.remove("gnav20-hide");
    else {
        signinContentHide();
        storeContentHide();
        MenuContentBack();
        a = document.querySelectorAll(".gnav20-mobile .visibilty-hidden");
        for (var b = 0; b < a.length; b++)
            a[b].classList.remove("gnav20-visibilty-hidden")
    }
    if (null !== document.querySelector(".gnav20-mobile #footerlink .gnav20-footerStores"))
        for (b = 0; b < document.querySelectorAll(".gnav20-mobile #gnav20-footerlink .gnav20-footerStores").length; b++)
            document.querySelectorAll(".gnav20-mobile #gnav20-footerlink .gnav20-footerStores")[b].classList.add("gnav20-hide");
    toggleAriaHiddenGnav20("signin", !0);
    gnav20.toggleMobileSignInHideEls("none");
    gnav20.setFocusTrap(gnav20.mobileMenu);
    document.querySelector(".gnav20-mobile #gnav20-mobile-menu .gnav20-dropdown-menu .gnav20-goback .gnav20-back-to-menu") && document.querySelector(".gnav20-mobile #gnav20-mobile-menu .gnav20-dropdown-menu .gnav20-goback .gnav20-back-to-menu").focus()
}
function languageContentHide() {
    document.querySelector(".gnav20-mobile #gnav20-ulwrapper").classList.add("gnav20-hide");
    document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.remove("gnav20-hide")
}
function signinContentHide() {
    var a = document.querySelectorAll(".gnav20-mobile .gnav20-dropdown-menu")
      , b = document.querySelector("#gnav20-mobile-menu .gnav20-eyebrow");
    for (i = 0; i < a.length; i++)
        a[i].classList.add("gnav20-hide");
    b && b.classList.remove("gnav20-hide");
    document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.remove("gnav20-hide");
    toggleAriaHiddenGnav20("signin", !1);
    gnav20.toggleMobileSignInHideEls("block");
    gnav20.clearFocusTrap(gnav20.mobileMenu);
    document.querySelector(".gnav20-mobile #gnav20-mobile-menu #gnav20-footerlink .gnav20-account-utility .gnav20-sign-in") && document.querySelector(".gnav20-mobile #gnav20-mobile-menu #gnav20-footerlink .gnav20-account-utility .gnav20-sign-in").focus()
}
function storeContentHide() {
    var a = document.querySelectorAll(".gnav20-mobile .gnav20-stores-list");
    for (i = 0; i < a.length; i++)
        a[i].classList.add("gnav20-hide");
    document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.remove("gnav20-hide")
}
function completeMenuhide() {
    1272 >= winWidth && document.querySelectorAll("#gnav20-mobile-menu .gnav20-global-nav-list")[0].classList.add("gnav20-hide")
}
function completeMenuShow() {
    1272 >= winWidth && document.querySelectorAll("#gnav20-mobile-menu .gnav20-global-nav-list")[0].classList.remove("gnav20-hide")
}
function MenuContentBack() {
    var a = document.querySelectorAll(".gnav20-dont-show-in-mobile");
    for (i = 0; i < a.length; i++)
        a[i].classList.remove("gnav20-dont-show-in-mobile"),
        a[i].style.display = "block";
    a = document.querySelectorAll(".gnav20-current");
    for (i = 0; i < a.length; i++)
        a[i].classList.remove("gnav20-current");
    a = document.querySelectorAll(".gnav20-autoflow");
    for (i = 0; i < a.length; i++)
        a[i].classList.remove("gnav20-autoflow");
    a = document.querySelectorAll(".gnav20-mobile .gnav20-sub-menu");
    for (i = 0; i < a.length; i++)
        a[i].style.display = "none";
    a = document.querySelectorAll(".gnav20-mobile .gnav20-submenu-column.gnav20-L2");
    for (i = 0; i < a.length; i++)
        a[i].style.display = "none";
    a = document.querySelectorAll(".gnav20-mobile .gnav20-submenu-column.gnav20-L3");
    for (i = 0; i < a.length; i++)
        a[i].style.display = "none";
    a = document.querySelectorAll("ul.gnav20-submenu-column.gnav20-L1 \x3e li.gnav20-current");
    for (i = 0; i < a.length; i++)
        a[i].style.display = "unset";
    a = document.querySelectorAll(".gnav20-mobile .gnav20-goback");
    for (i = 0; i < a.length; i++)
        a[i].removeAttribute("style");
    (a = document.querySelector(".gnav20-mobile .gnav20-sub-lob-box .gnav20-dropdown-menu")) && !a.classList.contains("gnav20-hide") && a.classList.add("gnav20-hide");
    (a = document.querySelector(".gnav20-mobile .gnav20-sub-lob-box .gnav20-sub-lob")) && a.classList.contains("gnav20-hide") && a.classList.remove("gnav20-hide")
}
function megaAnimation(a) {
    window.megaColumns = a.querySelectorAll("[class*\x3d'offRight']");
    setTimeout(function() {
        var a = 0;
        for (i = 0; i < window.megaColumns.length; i++)
            window.megaColumns[i].classList.add("column" + a + "-transLeft"),
            a++
    }, 100)
}
(function() {
    function a(a, c) {
        c = c || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent(a, c.bubbles, c.cancelable, c.detail);
        return b
    }
    if ("function" === typeof window.CustomEvent)
        return !1;
    a.prototype = window.Event.prototype;
    window.CustomEvent = a
}
)();
function toggleMenuL1(a) {
    a.preventDefault();
    "false" == (a.target || this).getAttribute("aria-expanded") ? openMenuL1(a) : (a.target.closest(".gnav20-featured-card") || "vecXXX" == gnav20.bu) && closeMenuL1(a)
}
function openMenuL1(a) {
    a && a.target.closest(".gnav20-desktop") && (gnav20.signInCloseMenu(),
    gnav20.closeCart());
    toggleAriaHiddenGnav20("L1", !0);
    var b = a.target || this
      , c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) .gnav20-submenu-column.gnav20-L2");
    for (i = 0; i < c.length; i++)
        c[i].style.display = "none";
    c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) .gnav20-submenu-column.gnav20-L3");
    for (i = 0; i < c.length; i++)
        c[i].style.display = "none";
    c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild");
    for (i = 0; i < c.length; i++)
        c[i].classList.remove("gnav20-open"),
        c[i].setAttribute("aria-expanded", !1);
    c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
    for (i = 0; i < c.length; i++)
        c[i].classList.remove("gnav20-open"),
        c[i].setAttribute("aria-expanded", !1);
    if (a.target.closest(".gnav20-featured-card") && a.target.closest(".gnav20-desktop")) {
        c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-desktop .gnav20-featured-card .gnav20-left-featured-card, .gnav20-desktop .gnav20-featured-card .gnav20-right-featured-card");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "block";
        document.body.classList.add("gnav20-no-scroll");
        gnav20.activeCloseButton = a.target.closest(".gnav20-featured-card").querySelector(".gnav20-nav-close")
    }
    a.target.closest(".gnav20-L1-aligned") && a.target.closest(".gnav20-desktop") && a.target.closest(".gnav20-L1-aligned").querySelector(".gnav20-content-wrapper") && (a.target.closest(".gnav20-L1-aligned").querySelector(".gnav20-content-wrapper").style.marginLeft = a.target.offsetLeft - 40 + "px");
    if (b.closest(".gnav20-desktop") && b.closest(".gnav20-primary-menu") && b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu")) {
        document.activeElement && !a.target.closest(".gnav20-featured-card") && document.activeElement.blur();
        a = b.closest(".gnav20-global-nav-list.gnav20-navigation-list").querySelectorAll(".gnav20-menu-label-button");
        for (i = 0; i < a.length; i++)
            a[i].setAttribute("aria-expanded", !1);
        var d = b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu");
        d.style.display = "flex";
        b.setAttribute("aria-expanded", "true");
        a = document.querySelectorAll(".gnav20-desktop .gnav20-sub-menu");
        for (i = 0; i <= a.length - 1; i++)
            a[i] != d && (a[i].style.display = "none");
        window.selectedMenu = d;
        setTimeout(function() {
            var a = window.selectedMenu.closest(".gnav20-mega-drawer");
            addClass = a ? "gnav20-mega-active" : "gnav20-grouping-active";
            b.closest(".gnav20-main");
            window.selectedMenu.style.display = "flex";
            window.selectedMenu.classList.add(addClass);
            window.selectedMenu.querySelector(".gnav20-content-wrapper").classList.add(addClass);
            b.closest(".gnav20-featured-card") && !b.closest(".gnav20-featured-grouping") && (window.selectedMenu.querySelector(".gnav20-featured-card-top-label").classList.add("gnav20-column-highlight"),
            window.selectedMenu.querySelector(".gnav20-submenu-column").classList.add("gnav20-column-highlight"));
            a && megaAnimation(window.selectedMenu);
            a = ".gnav20-sub-menu ." + addClass;
            document.querySelector(".gnav20.gnav20-sticky .gnav20-sticky-content") && document.querySelector(a) && window.innerHeight < document.querySelector(a).offsetHeight + document.querySelector(".gnav20.gnav20-sticky .gnav20-sticky-content").offsetHeight && (document.querySelector(".gnav20.gnav20-sticky .gnav20-sticky-content").style.position = "static",
            window.scrollTo(0, 0))
        }, 10);
        if (b.closest(".gnav20-mega-drawer")) {
            gnav20.l1Target = b;
            a = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a");
            for (i = 0; i < a.length; i++)
                a[i].classList.remove("gnav20-open"),
                a[i].setAttribute("aria-expanded", "false");
            a = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2");
            for (i = 0; i < a.length; i++)
                a[i].style.display = "none";
            setTimeout(function() {
                var a = new CustomEvent("mouseover",{
                    view: window,
                    bubbles: !0,
                    cancelable: !0
                })
                  , b = d.querySelector("ul.gnav20-submenu-column.gnav20-L1 \x3e li:not(.gnav20-hide-on-desktop)");
                if (b) {
                    var c = b.querySelector("a.gnav20-haschild");
                    if (c) {
                        b = document.querySelector(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column");
                        var k = 560;
                        c.dispatchEvent(a);
                        c.classList.add("gnav20-open");
                        b && b.removeAttribute("style");
                        a = c.parentElement.querySelectorAll("ul");
                        for (i = 0; i <= a.length - 1; i++)
                            a[i].style.display = "block",
                            b && a[i].offsetHeight > k && (k = a[i].offsetHeight,
                            b.style.height = k + 40 + "px",
                            b.closest(".gnav20-sub-menu") && (b.closest(".gnav20-sub-menu").style.maxHeight = k + 200 + "px"))
                    }
                }
                gnav20.l1Target.focus()
            }, 100)
        }
    } else {
        c = document.querySelectorAll("#gnav20-mobile-menu .gnav20-global-nav-list");
        for (i = 0; i < c.length; i++)
            c[i].classList.add("gnav20-non-header");
        c = document.querySelectorAll(".gnav20-mobile .gnav20-submenu-column ul.gnav20-submenu-column.gnav20-L1 \x3e li");
        b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow") && b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow").classList.remove("gnav20-autoflow");
        b.closest(".gnav20-mobile .gnav20-primary-menu").querySelector(".gnav20-sub-menu").classList.add("gnav20-autoflow");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "block";
        null != b.nextElementSibling && (b.nextElementSibling.setAttribute("aria-expanded", "true"),
        window.mySubMenuTarget = b.nextElementSibling,
        setTimeout("window.mySubMenuTarget.focus()", 4));
        c = document.querySelectorAll(".gnav20-mobile .gnav20-eyebrow .gnav20-main-header.gnav20-selected");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
        b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu").style.display = "block";
        c = b.closest(".gnav20-mobile").querySelectorAll(".gnav20-primary-menu");
        for (i = 0; i < c.length; i++)
            c[i].classList.add("gnav20-dont-show-in-mobile");
        b.closest(".gnav20-primary-menu").classList.add("gnav20-current");
        b.closest(".gnav20-primary-menu").classList.remove("gnav20-dont-show-in-mobile");
        gnav20.mobileMenu = document.getElementById("gnav20-mobile-menu");
        gnav20.mobileMenu.classList.add("gnav20-openL1");
        gnav20.setFocusTrap(gnav20.mobileMenu);
        a && (a.preventDefault(),
        a.stopPropagation())
    }
}
function menuL2ToggleOnSpaceKey(a) {
    void 0 !== a && null !== a.keyCode && 32 === a.keyCode && eTarget.click()
}
function toggleMenuL2(a) {
    a.preventDefault();
    "false" == (a.target || this).getAttribute("aria-expanded") ? openMenuL2(a) : a.target.closest(".gnav20-featured-card") && closeMenuL2(a)
}
function columnHighlight2(a, b) {
    a = a.target.closest("ul");
    b = b ? "add" : "remove";
    a.classList[b]("gnav20-column-highlight");
    if (a.previousElementSibling)
        a.previousElementSibling.classList[b]("gnav20-column-highlight")
}
function openMenuL2(a) {
    if (!gnav20.megaL2hover || !gnav20.megaL2hover.parentElement || gnav20.megaL2hover.parentElement == gnav20.megaL2hover.parentElement.parentElement.querySelector(":hover") || "none" != window.getComputedStyle(gnav20.mobileHeader).getPropertyValue("display")) {
        if (a && a.target) {
            gnav20.megaL2hover = null;
            var b = a.target
        } else
            b = gnav20.megaL2hover ? gnav20.megaL2hover : this;
        var c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-isactive \x3e li \x3e a, .gnav20-desktop .gnav20-featured-card .gnav20-isactive \x3e li \x3e a.gnav20-haschild");
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-open"),
            c[i].setAttribute("aria-expanded", "false");
        c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-open"),
            c[i].setAttribute("aria-expanded", "false");
        b.classList && (b.classList.add("gnav20-open"),
        b.setAttribute("aria-expanded", "true"),
        b.focus());
        if (b.closest && b.closest(".gnav20-featured-card")) {
            c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-featured-card .gnav20-L2-featured-card");
            for (i = 0; i < c.length; i++)
                c[i].style.display = "block";
            columnHighlight2(a, !1)
        }
        c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2, .gnav20-desktop .gnav20-featured-card .gnav20-submenu-column.gnav20-L2");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
        c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-submenu-column.gnav20-L3");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
        if (b.closest && b.closest(".gnav20-featured-card"))
            for (c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-featured-card .gnav20-left-featured-card, .gnav20-desktop .gnav20-featured-card .gnav20-right-featured-card"),
            i = 0; i < c.length; i++)
                c[i].style.display = "none";
        if (b.closest && b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li") && b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-submenu-column.gnav20-L2")) {
            c = b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelectorAll(".gnav20-submenu-column.gnav20-L2");
            var d = document.querySelector(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column")
              , e = 560;
            d && d.removeAttribute("style");
            for (i = 0; i < c.length; i++)
                c[i].style.display = "block",
                b.closest(".gnav20-featured-card") && c[i].classList.add("gnav20-column-highlight"),
                d && c[i].offsetHeight > e && (e = c[i].offsetHeight,
                d.style.height = e + 40 + "px",
                d.closest(".gnav20-sub-menu") && (d.closest(".gnav20-sub-menu").style.maxHeight = e + 200 + "px"));
            b.closest(".gnav20-submenu-column") && b.closest(".gnav20-submenu-column").classList.add("gnav20-isactive");
            if (b.closest(".gnav20-mobile")) {
                c = b.closest(".gnav20-primary-menu").querySelectorAll("ul.gnav20-submenu-column.gnav20-L1 \x3e li");
                d = b.closest(".gnav20-submenu-column").querySelectorAll("ul.gnav20-submenu-column.gnav20-L1 \x3e li");
                b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow").classList.remove("gnav20-autoflow");
                b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-L2-content-wrapper").classList.add("gnav20-autoflow");
                for (i = 0; i < d.length; i++)
                    d[i].style.display = "none";
                b.parentElement.style.display = "block";
                b.closest(".gnav20-primary-menu.gnav20-current").querySelector(".gnav20-goback").style.display = "none";
                for (i = 0; i < c.length; i++)
                    c[i].classList.add("gnav20-dont-show-in-mobile");
                b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").classList.add("gnav20-current");
                b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").classList.remove("gnav20-dont-show-in-mobile");
                b.closest(".gnav20-primary-menu").querySelector(".gnav20-goback").classList.add("gnav20-dont-show-in-mobile");
                b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li") && b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-goback") && (b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-goback").setAttribute("aria-expanded", "true"),
                b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-goback").focus());
                gnav20.setFocusTrap(gnav20.mobileMenu);
                a && (a.preventDefault(),
                a.stopPropagation())
            }
        }
    }
}
function toggleMenuL3(a) {
    a.preventDefault();
    "false" == (a.target || this).getAttribute("aria-expanded") ? openMenuL3(a) : a.target.closest(".gnav20-featured-card") && closeMenuL3(a)
}
function openMenuL3(a) {
    var b = a.target || this;
    if (b && b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li") && b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector(".gnav20-submenu-column.gnav20-L3")) {
        var c = b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li.gnav20-current");
        c && c.querySelector(".gnav20-goback") && (c.querySelector(".gnav20-goback").style.display = "none");
        c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-submenu-column.gnav20-L3");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
        if (a.target.closest(".gnav20-featured-card")) {
            c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-featured-card .gnav20-L2-featured-card");
            for (i = 0; i < c.length; i++)
                c[i].style.display = "none";
            columnHighlight2(a, !1)
        }
        c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-open"),
            c[i].setAttribute("aria-expanded", "false");
        b.classList.add("gnav20-open");
        b.setAttribute("aria-expanded", "true");
        c = b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelectorAll(".gnav20-submenu-column.gnav20-L3");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "block",
            b.closest(".gnav20-featured-card") && c[i].classList.add("gnav20-column-highlight");
        if (b.closest(".gnav20-mobile")) {
            c = b.closest(".gnav20-primary-menu").querySelectorAll("ul.gnav20-submenu-column.gnav20-L2 \x3e li");
            for (i = 0; i < c.length; i++)
                c[i].classList.add("gnav20-dont-show-in-mobile");
            b.closest(".gnav20-L2").classList.add("gnav20-submenu-open");
            b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").classList.add("gnav20-current");
            b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").classList.remove("gnav20-dont-show-in-mobile");
            b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-goback").classList.add("gnav20-dont-show-in-mobile");
            b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li") && b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector("a.gnav20-goback") && (b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector("a.gnav20-goback").setAttribute("aria-expanded", "true"),
            b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector("a.gnav20-goback").focus());
            gnav20.setFocusTrap(gnav20.mobileMenu);
            a && (a.preventDefault(),
            a.stopPropagation())
        }
    }
}
function goBackToL1(a) {
    var b = a.target || this;
    if (b.closest(".gnav20-mobile") && b.closest(".gnav20-primary-menu") && b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu")) {
        b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu").style.display = "none";
        var c = document.querySelectorAll(".gnav20-mobile .gnav20-eyebrow .gnav20-main-header.gnav20-selected");
        b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow").classList.remove("gnav20-autoflow");
        var d = document.querySelectorAll("#gnav20-mobile-menu .gnav20-global-nav-list");
        for (i = 0; i < d.length; i++)
            d[i].classList.remove("gnav20-non-header");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "block";
        c = b.closest(".gnav20-mobile").querySelectorAll(".gnav20-primary-menu");
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-dont-show-in-mobile"),
            c[i].classList.remove("gnav20-current");
        null != b.previousElementSibling && null != b.previousElementSibling.previousElementSibling && (b.previousElementSibling.previousElementSibling.setAttribute("aria-expanded", "false"),
        window.myMenuBackTarget = b.previousElementSibling.previousElementSibling,
        setTimeout("window.myMenuBackTarget.focus()", 10));
        document.getElementById("gnav20-mobile-menu").classList.remove("gnav20-openL1");
        gnav20.setFocusTrap(gnav20.mobileMenu);
        a && (a.preventDefault(),
        a.stopPropagation())
    }
}
function goBackToL2(a) {
    var b = a.target || this;
    if (b.closest(".gnav20-mobile") && b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li") && b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-submenu-column.gnav20-L2")) {
        var c = b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelectorAll(".gnav20-submenu-column.gnav20-L2");
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
        b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow").classList.remove("gnav20-autoflow");
        b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu").classList.add("gnav20-autoflow");
        if (b.closest(".gnav20-submenu-column"))
            for (b.closest(".gnav20-submenu-column").classList.remove("gnav20-isactive"),
            c = b.closest(".gnav20-submenu-column").parentElement.children,
            i = 0; i < c.length; i++)
                c[i].style.display = "block";
        c = b.closest(".gnav20-mobile").querySelectorAll("ul.gnav20-submenu-column.gnav20-L1 \x3e li");
        b.style.display = "";
        var d = b.closest(".gnav20-submenu-column").querySelectorAll("ul.gnav20-submenu-column.gnav20-L1 \x3e li");
        for (i = 0; i < d.length; i++)
            d[i].style.display = "block";
        b.closest(".gnav20-primary-menu.gnav20-current").querySelector(".gnav20-goback").style.display = "";
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-dont-show-in-mobile"),
            c[i].classList.remove("gnav20-current");
        b.closest(".gnav20-primary-menu").querySelector(".gnav20-goback").classList.remove("gnav20-dont-show-in-mobile");
        b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li") && b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-goback") && (b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-goback").setAttribute("aria-expanded", "false"),
        b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-haschild").setAttribute("aria-expanded", "false"),
        b.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-haschild").focus());
        gnav20.setFocusTrap(gnav20.mobileMenu);
        a && (a.preventDefault(),
        a.stopPropagation())
    }
}
function goBackToL3(a) {
    a && (a.preventDefault(),
    a.stopPropagation());
    if ((a = a.target || this) && a.closest(".gnav20-mobile") && a.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li") && a.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector(".gnav20-submenu-column.gnav20-L3")) {
        a.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelector("ul.gnav20-submenu-column.gnav20-L3").style.display = "none";
        var b = a.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li.gnav20-current");
        b && b.querySelector(".gnav20-goback") && (b.querySelector(".gnav20-goback").style.display = "block",
        a.closest(".gnav20-L2").classList.remove("gnav20-submenu-open"));
        b = a.closest(".gnav20-mobile").querySelectorAll("ul.gnav20-submenu-column.gnav20-L2 \x3e li");
        for (i = 0; i < b.length; i++)
            b[i].classList.remove("gnav20-dont-show-in-mobile"),
            b[i].classList.remove("gnav20-current");
        a.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-goback").classList.remove("gnav20-dont-show-in-mobile");
        (a = a.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li")) && a.querySelector("a.gnav20-goback") && (a.querySelector("a.gnav20-goback").setAttribute("aria-expanded", "false"),
        a.querySelector("a.gnav20-haschild").setAttribute("aria-expanded", "false"),
        a.querySelector("a.gnav20-haschild").focus());
        gnav20.setFocusTrap(gnav20.mobileMenu)
    }
}
function closeMenuL1(a) {
    toggleAriaHiddenGnav20("L1", !1);
    a = a.target || this;
    var b = document.querySelector(".gnav20.gnav20-sticky .gnav20-sticky-content");
    b && b.removeAttribute("style");
    (b = document.querySelector(".gnav20-primary-menu.gnav20-mega-drawer ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild.gnav20-open")) && b.classList.remove("gnav20-open");
    b = document.querySelectorAll(".gnav20-desktop .gnav20-sub-menu");
    for (i = 0; i < b.length; i++)
        b[i].style.display = "none",
        b[i].classList.remove("gnav20-grouping-active"),
        b[i].classList.remove("gnav20-mega-active"),
        b[i].querySelector(".gnav20-content-wrapper").classList.remove("gnav20-grouping-active"),
        b[i].querySelector(".gnav20-content-wrapper").classList.remove("gnav20-mega-active");
    document.body.classList.contains("gnav20-no-scroll") && !document.body.classList.contains("gnav20-modal-menu-open") && document.body.classList.remove("gnav20-no-scroll");
    if (window.megaColumns) {
        for (i = b = 0; i < window.megaColumns.length; i++)
            window.megaColumns[i].classList.remove("column" + b + "-transLeft"),
            b++;
        if (b = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2"))
            for (i = 0; i < b.length; i++)
                b[i].style.display = "none"
    }
    "BUTTON" != a.tagName && document.querySelector(".gnav20 .gnav20-desktop .gnav20-navigation-list button[aria-expanded\x3dtrue]") && (a = document.querySelector(".gnav20 .gnav20-desktop .gnav20-navigation-list button[aria-expanded\x3dtrue]"));
    a.closest(".gnav20-desktop") && a.closest(".gnav20-primary-menu") && a.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu") && (b = a.closest(".gnav20-navigation-item").querySelector('[id*\x3d"-L1"]')) && (a.classList.contains("gnav20-nav-close") ? (a = b.parentElement,
    b.remove(),
    a.prepend(b)) : (b.blur(),
    b.removeAttribute("aria-expanded")),
    b.setAttribute("aria-expanded", "false"),
    b.focus())
}
function closeMenuL2(a) {
    var b = a.target || this
      , c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-isactive \x3e li \x3e a");
    if (c) {
        for (i = 0; i < c.length; i++)
            c[i].classList.remove("gnav20-open");
        b.setAttribute("aria-expanded", "false")
    }
    if (c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2, .gnav20-desktop .gnav20-featured-card .gnav20-submenu-column.gnav20-L2"))
        for (i = 0; i < c.length; i++)
            c[i].style.display = "none";
    b.closest(".gnav20-featured-card") && (b.classList.remove("gnav20-open"),
    b.setAttribute("aria-expanded", "false"),
    columnHighlight2(a, !0));
    b.closest(".gnav20-desktop") && b.querySelector(".gnav20-submenu-column.gnav20-L2") && (b.querySelector(".gnav20-submenu-column.gnav20-L2").style.display = "none",
    (a = b.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector("a.gnav20-haschild.gnav20-open")) && a.classList.remove("gnav20-open"))
}
function closeMenuL3(a) {
    var b = a.target || this;
    if (b.closest(".gnav20-featured-card") && (b.classList.remove("gnav20-open"),
    b.setAttribute("aria-expanded", "false"),
    columnHighlight2(a, !0),
    a = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card .gnav20-submenu-column.gnav20-L3")))
        for (i = 0; i < a.length; i++)
            a[i].style.display = "none";
    b.closest(".gnav20-desktop") && b.closest(".gnav20-submenu-column.gnav20-L2") && b.closest(".gnav20-submenu-column.gnav20-L2").querySelector(".gnav20-submenu-column.gnav20-L3") && (b.closest(".gnav20-submenu-column.gnav20-L2").querySelector(".gnav20-submenu-column.gnav20-L3").style.display = "none")
}
function expandMenuClick(a) {
    var b = a.target || this
      , c = b.parentElement.querySelector(".gnav20-menu-label-link");
    gnav20.mouseOverL1 && document.body.classList.contains("gnav20-using-mouse") && c && c.getAttribute("href") ? (a = b.parentElement.querySelector(".gnav20-menu-label-link").getAttribute("target"),
    "_self" === a || "_blank" === a ? window.open(c, a) : window.open(c, "_self")) : "flex" === b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu").style.display ? closeMenuL1(a) : openMenuL1(a)
}
function setGnavMouseOver(a) {
    gnav20.mouseOverL1 = gnav20 && "mouseenter" == a.type && a.relatedTarget && "DIV" == a.relatedTarget.tagName ? !0 : !1
}
function megaAddSelected(a) {
    "mouseover" == a.type ? (gnav20.megaL2hover = a.target,
    setTimeout("openMenuL2(event)", 10)) : (gnav20.megaL2hover = null,
    openMenuL2(a))
}
function toggleMenuL2ForMegaDrawer(a) {
    !a || 13 !== a.keyCode && 32 !== a.keyCode || (a.preventDefault(),
    a.target && a.target.classList.contains("gnav20-open") ? closeMenuL2(a) : openMenuL2(a))
}
function megaGoToHref(a) {
    a && a.target && a.target.getAttribute("data-href") && !gnav20.megaTouch && (location.href = a.target.getAttribute("data-href"))
}
function signInLinkClick(a) {
    document.querySelector("body.gnav20-using-mouse") && (a = a.target.closest(".gnav20-account-box").querySelector(".gnav20-sign-in span[data-href]:not(.gnav20-hide)")) && (a = a.getAttribute("data-href")) && (location.href = a)
}
function removeDuplicateIDs() {
    var a = document.querySelectorAll(".gnav20 .gnav20-eyebrow-link-list-item a");
    if ("smb" == gnavdl.bu && /meganav/.test(gnavdl.appid) && 4 == a.length)
        a[0].id = a[2].id = "gnav20-eyebrow-link-Personal",
        a[1].id = a[3].id = "gnav20-eyebrow-link-Business";
    else
        for (i = 0; i < a.length; i++)
            a[i].id = a[i].id.replace(/[^a-zA-Z0-9-:_\.]/g, "-") || "eyebrow_" + i;
    a = document.querySelectorAll(".gnav20 .gnav20-mobile [id]");
    for (i = 0; i < a.length; i++)
        document.querySelector(".gnav20 .gnav20-desktop #" + a[i].id) && (a[i].id += "-mobile",
        a[i] && a[i].classList && a[i].classList.contains("gnav20-goback") && (a[i].id += "-goback"))
}
function customizeButtons() {
    var a = document.querySelectorAll(".gnav20-mobile a.gnav20-haschild, .gnav20-desktop .gnav20-featured-card a.gnav20-haschild");
    for (i = 0; i < a.length; i++)
        a[i].closest(".gnav20-featured-grouping") || (a[i].setAttribute("role", "button"),
        a[i].setAttribute("href", "javascript:void(0)"),
        a[i].setAttribute("aria-label", a[i].innerText.trim() + " menu list"))
}
function initializeEventListners() {
    for (var a = document.querySelectorAll(".gnav20-dropdown li.gnav20-dropdown-list"), b = 0; b < a.length; b++)
        a[b].firstElementChild || (a[b].innerHTML = '\x3ca tabindex\x3d"0"\x3e' + a[b].innerHTML + "\x3c/a\x3e"),
        a[b].firstElementChild.addEventListener("focus", function() {
            this.parentElement.classList.add("gnav20-focus-selected")
        }),
        a[b].firstElementChild.addEventListener("blur", function() {
            this.parentElement.classList.remove("gnav20-focus-selected")
        });
    a = document.querySelectorAll('.gnav20-desktop .gnav20-primary-menu:not(.gnav20-featured-card) button.gnav20-menu-label-button, .gnav20-desktop .gnav20-utility a:not(.gnav20-content-list-arrow), .gnav20-desktop .gnav20-utility [tabindex\x3d"0"]:not(.gnav20-dropdown-list-item) ');
    for (b = 0; b < a.length; b++)
        a[b].addEventListener("focus", function(a) {
            document.querySelector(".gnav20 .gnav20-desktop .gnav20-sub-header-menu.gnav20-grouping-active") && closeMenuL1(a)
        });
    (b = document.querySelector("#gnav20-language-selection-footer-default")) && b.addEventListener("focus", function() {
        /gnav20-hide/.test(document.querySelector(".gnav20-dropdown-footer-menu").classList) || languageFooterShowHide()
    });
    b && b.addEventListener("blur", checklanguageFocus);
    if (a = document.querySelectorAll(".gnav20-dropdown-footer-menu .gnav20-footer-lang .gnav20-footer-list .gnav20-language-item-footer"))
        for (b = 0; b < a.length; b++)
            a[b].removeEventListener("blur", checkLanguageSelectionItemFooterFocus),
            a[b].addEventListener("blur", checkLanguageSelectionItemFooterFocus)
}
function skipToMainContent() {
    event.preventDefault();
    document.querySelector("#gnav20-header-end").focus()
}
function checkCloseL3(a) {
    this.classList.contains("gnav20-open") && !document.body.classList.contains("gnav20-using-mouse") && this.click()
}
gnav20.initNav = function() {
    var a = document.querySelector("#gnav20-skip-to-main-content-id");
    a && (a.removeEventListener("click", skipToMainContent),
    a.addEventListener("click", skipToMainContent));
    var b = document.querySelectorAll(".gnav20 .gnav20-unified-cart .gnav20-content-list:first-child a");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", gnav20.cartUtility),
        b[a].addEventListener("click", gnav20.cartUtility),
        b[a].href = "#";
    b = document.querySelectorAll(".gnav20 .gnav20-utility .gnav20-sign-in:not(.gnav20-hasDropdown)");
    gnav20.personal = gnavdl.bu ? -1 < "home wireless".indexOf(gnavdl.bu) : !0;
    if (gnav20.personal)
        for (a = 0; a < b.length; a++)
            b[a].removeEventListener("click", signInLinkClick),
            b[a].addEventListener("click", signInLinkClick);
    b = document.querySelectorAll(".gnav20 .gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column \x3e li a");
    for (a = 0; a < b.length; a++)
        b[a].addEventListener("focus", checkCloseL3);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-content-wrapper \x3e ul \x3e li \x3e a");
    for (a = 0; a < b.length; a++)
        b[a].addEventListener("mouseover", megaAddSelected),
        b[a].addEventListener("focus", megaAddSelected),
        b[a].addEventListener("keydown", toggleMenuL2ForMegaDrawer),
        b[a].addEventListener("click", megaGoToHref),
        b[a].addEventListener("touchstart", function() {
            gnav20.megaTouch = !0
        }, {
            passive: !0
        }),
        b[a].setAttribute("aria-expanded", "false");
    b = document.querySelectorAll(".gnav20-desktop .gnav20-grouping ul.gnav20-L2, .gnav20-desktop .gnav20-featured-card.gnav20-featured-grouping ul.gnav20-L2");
    for (a = 0; a < b.length; a++)
        b[a].style.display = "block";
    b = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer ul.gnav20-L3");
    for (a = 0; a < b.length; a++)
        b[a].style.display = "block";
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu:not(.gnav20-featured-card)");
    for (a = 0; a < b.length; a++)
        "vecXXX" != gnav20.bu && (b[a].removeEventListener("mouseleave", closeMenuL1),
        b[a].addEventListener("mouseleave", closeMenuL1));
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-nav-close, .gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-nav-search-icon, .gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-nav-mask");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", closeMenuL1),
        b[a].addEventListener("click", closeMenuL1);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card ul.gnav20-submenu-column \x3e li a:not(.gnav20-haschild)");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", closeMenuL1),
        b[a].addEventListener("click", closeMenuL1);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu:not(.gnav20-grouping) ul.gnav20-submenu-column.gnav20-L1 \x3e li");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("mouseleave", closeMenuL2);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-grouping ul.gnav20-submenu-column.gnav20-L2 \x3e li");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("mouseleave", closeMenuL3),
        b[a].addEventListener("mouseleave", closeMenuL3);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu:not(.gnav20-featured-card) .gnav20-menu-label-button.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        "vecXXX" == gnav20.bu ? (b[a].removeEventListener("click", toggleMenuL1),
        b[a].addEventListener("click", toggleMenuL1),
        b[a].classList.add("gnav20-clickL1")) : (b[a].removeEventListener("mouseover", openMenuL1),
        b[a].addEventListener("mouseover", openMenuL1),
        b[a].removeEventListener("click", expandMenuClick),
        b[a].addEventListener("click", expandMenuClick));
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-menu-label-button.gnav20-haschild[aria-expanded~\x3d'false']");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", toggleMenuL1),
        b[a].addEventListener("click", toggleMenuL1),
        b[a].setAttribute("aria-expanded", "false");
    b = document.querySelectorAll(".gnav20-desktop .gnav20-navigation-list .gnav20-primary-menu");
    for (a = 0; a < b.length; a++)
        b[a].addEventListener("mouseenter", setGnavMouseOver),
        b[a].addEventListener("mouseleave", setGnavMouseOver);
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", toggleMenuL2),
        b[a].addEventListener("click", toggleMenuL2),
        b[a].setAttribute("aria-expanded", "false");
    b = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", toggleMenuL3),
        b[a].addEventListener("click", toggleMenuL3),
        b[a].setAttribute("aria-expanded", "false");
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu .gnav20-menu-label-button.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", openMenuL1),
        b[a].addEventListener("click", openMenuL1);
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", openMenuL2),
        b[a].addEventListener("click", openMenuL2);
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", openMenuL3),
        b[a].addEventListener("click", openMenuL3);
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu .gnav20-menu-label-button.gnav20-goback");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", goBackToL1),
        b[a].addEventListener("click", goBackToL1);
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-goback");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", goBackToL2),
        b[a].addEventListener("click", goBackToL2);
    b = document.querySelectorAll(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("keyup", menuL2ToggleOnSpaceKey),
        b[a].addEventListener("keyup", menuL2ToggleOnSpaceKey);
    b = document.querySelectorAll(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-goback");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("keyup", menuL2ToggleOnSpaceKey),
        b[a].addEventListener("keyup", menuL2ToggleOnSpaceKey);
    b = document.querySelectorAll(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("keyup", menuL2ToggleOnSpaceKey),
        b[a].addEventListener("keyup", menuL2ToggleOnSpaceKey);
    b = document.querySelectorAll(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-goback");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("keyup", menuL2ToggleOnSpaceKey),
        b[a].addEventListener("keyup", menuL2ToggleOnSpaceKey);
    b = document.querySelectorAll(".gnav20-mobile .gnav20-primary-menu ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-goback");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", goBackToL3),
        b[a].addEventListener("click", goBackToL3);
    b = document.querySelectorAll(".gnav20-mobile #gnav20-mobile-menu .gnav20-account-box .gnav20-dropdown-menu .gnav20-goback ");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", signinContentHide),
        b[a].addEventListener("click", signinContentHide);
    b = document.querySelectorAll(".gnav20-mobile  #gnav20-mobile-menu .gnav20-store .gnav20-dropdown-menu .gnav20-goback ");
    for (a = 0; a < b.length; a++)
        b[a].removeEventListener("click", storeContentHide),
        b[a].addEventListener("click", storeContentHide);
    b = document.querySelectorAll(".gnav20-mega-drawer ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild ");
    for (a = 0; a < b.length; a++)
        b[a].setAttribute("tabindex", "0");
    b = document.querySelectorAll(".gnav20 .gnav20-lang-link");
    for (a = 0; a < b.length; a++)
        b[a].addEventListener("click", function(a) {
            a.preventDefault();
            window.gnavdl && "privacy" == gnavdl.variation || "vpd" == gnavdl.appid ? gnav20.smartlingTranslation() : (a = location.host.indexOf("es") ? "es" : "en",
            MP.switchLanguage(a) || console.log("MP returned false"))
        });
    if (a = document.querySelector(".gnav20-vzhmoverlay"))
        a.style.height = 0,
        a.addEventListener("transitionstart", function() {
            this.style.height = "100%"
        }),
        a.addEventListener("transitionend", function() {
            "gnav20-vzhmoverlay" == this.className && (this.style.height = 0)
        }),
        gnav20.vzhmoverlay = a,
        window.addEventListener("pagehide", function() {
            gnav20.vzhmoverlay.style.height = 0
        });
    blankStuff = document.querySelectorAll(".gnav20 .gnav20-desktop .gnav20-row-one,.gnav20 .gnav20-desktop .gnav20-row-two .gnav20-navigation,.gnav20 .gnav20-desktop .gnav20-row-two .gnav20-utility");
    for (a = 0; a < blankStuff.length; a++)
        blankStuff[a].classList.add("opacityOne");
    b = document.querySelectorAll(".gnav20-mobile .gnav20-dropdown-menu .gnav20-dropdown");
    for (a = 0; a < b.length; a++)
        b[a].classList.add("gnav20-fixed-top", "gnav20-navigation-item");
    /skinnyNav=true/.test(location.search) && window.gnavdl && gnavdl.options && gnavdl.options.sticky && (gnavdl.options.skinny = !0);
    window.gnavdl && gnavdl.options && gnavdl.options.sticky && gnavdl.options.skinny && gnav20.initSkinnyNav();
    removeDuplicateIDs();
    customizeButtons();
    initializeEventListners()
}
;
var newel = document.createElement("meta");
newel.setAttribute("http-equiv", "X-UA-Compatible");
newel.content = "IE\x3dEdge";
document.head.insertBefore(newel, document.head.firstElementChild);
function langTranslate() {
    try {
        MP.UrlLang = "mp_js_current_lang";
        MP.SrcUrl = decodeURIComponent("mp_js_orgin_url");
        MP.oSite = decodeURIComponent("mp_js_origin_baseUrl");
        MP.tSite = decodeURIComponent("mp_js_translated_baseUrl");
        MP.init();
        var a = function() {
            for (var a = document.querySelectorAll(".gnav20-langLink"), c = 0; c < a.length; c++)
                a.item(c).onclick = function() {
                    MP.init();
                    var a = this.getAttribute("data-lang")
                      , b = this.getAttribute("data-href")
                      , c = MP.tSite.replace(/(https?:\/\/|\/?$)/g, "");
                    b = b.replace(/(https?:\/\/|\/?$)/g, "");
                    MP.switchLanguage(-1 != c.search(b) ? MP.oSite : b, a, !0);
                    return !1
                }
        };
        window.addEventListener ? window.addEventListener("load", a, !1) : window.attachEvent && window.attachEvent("onload", a)
    } catch (b) {
        console.log("E in langtransalate", b)
    }
}
function switchLanguage(a) {
    try {
        return MP.SrcUrl = unescape("mp_js_orgin_url"),
        MP.UrlLang = "mp_js_current_lang",
        MP.init(),
        MP.switchLanguage(MP.UrlLang == a ? "en" : a),
        !1
    } catch (b) {
        console.log("E in langtransalate", b)
    }
}
function checkQuickTaskFocus() {
    setTimeout(function() {
        "gnav20-quick-task-item-footer" === document.activeElement.className || /gnav20-hide/.test(document.querySelector(".gnav20-dropdown-quick-task-menu").classList) || quickTaskShowHide()
    }, 10)
}
function checkQuickTaskItemFooterFocus() {
    setTimeout(function() {
        "gnav20-quick-task-item-footer" !== document.activeElement.className && "gnav20-quick-task-menu-default" !== document.activeElement.id && quickTaskShowHide()
    }, 10)
}
function quickTaskShowHide() {
    var a = document.getElementById("gnav20-quick-tasks")
      , b = document.getElementById("gnav20-arrowqt")
      , c = document.querySelector("#gnav20-quick-task-menu-default");
    a && (a.classList.toggle("gnav20-hide"),
    a.classList.contains("gnav20-hide") ? (b.classList.remove("gnav20-arrow-up"),
    c && c.setAttribute("aria-expanded", "false")) : (b.classList.add("gnav20-arrow-up"),
    c && c.setAttribute("aria-expanded", "true")))
}
function expandQuickTaskMenOnKeyPress(a) {
    a.preventDefault();
    a.stopPropagation();
    var b = a.which;
    13 != b && 32 != b || quickTaskShowHide(a)
}
function checklanguageFocus() {
    setTimeout(function() {
        "gnav20-language-item-footer" === document.activeElement.className || /gnav20-hide/.test(document.querySelector(".gnav20-dropdown-footer-menu").classList) || languageFooterShowHide()
    }, 10)
}
function checkLanguageSelectionItemFooterFocus() {
    setTimeout(function() {
        "gnav20-language-item-footer" !== document.activeElement.className && "gnav20-language-selection-footer-default" !== document.activeElement.id && languageFooterShowHide()
    }, 10)
}
function languageFooterShowHide() {
    var a = document.querySelector("#gnav20-language-selection-footer-default")
      , b = document.getElementById("gnav20-localization-footer")
      , c = document.getElementById("gnav20-arrow");
    b && (b.classList.toggle("gnav20-hide"),
    b.classList.contains("gnav20-hide") ? (c.classList.remove("gnav20-arrow-up"),
    a && a.setAttribute("aria-expanded", "false")) : (c.classList.add("gnav20-arrow-up"),
    a && a.setAttribute("aria-expanded", "true")))
}
window.onclick = function(a) {
    if (!(a.target || this).matches(".gnav20-quick-task")) {
        a = document.querySelectorAll(".gnav20-dropdown li.gnav20-footer-list");
        var b;
        for (b = 0; b < a.length; b++) {
            var c = a[b];
            c.classList.contains("gnav20-hide") && c.classList.remove("gnav20-hide")
        }
    }
}
;
window.onclick = function(a) {
    if (!(a.target || this).matches(".gnav20-language-box-footer")) {
        a = document.querySelectorAll(".gnav20-dropdown li.gnav20-footer-list");
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            c.classList.contains("gnav20-hide") && c.classList.remove("gnav20-hide")
        }
    }
}
;
gnav20.initSignIn = function() {
    function a() {
        document.querySelector(".gnav20-desktop .gnav20-language-box .gnav20-dropdown-menu").classList.remove("gnav20-hide")
    }
    function b() {
        var a = document.querySelector(".gnav20-desktop .gnav20-dropdown-menu#localization");
        a && a.classList.add("gnav20-hide")
    }
    function c() {
        if (13 == event.which || 32 == event.which)
            q.parentElement.querySelector(".gnav20-dropdown-menu.gnav20-hide") ? a() : b()
    }
    function d(a) {
        gnav20.closeCart();
        var b = a.target.closest(".gnav20-account-box")
          , c = b.querySelector(".gnav20-dropdown-menu");
        b && c && (b.querySelector(".gnav20-sign-in").setAttribute("aria-expanded", "true"),
        c.classList.remove("gnav20-hide"),
        a.target.closest(".gnav20-mobile") && b.querySelector(".gnav20-vzmoverlay") && (b.querySelector(".gnav20-vzmoverlay").classList.add("gnav20-menuop"),
        b.querySelector(".gnav20-close-account-utility").focus()),
        b.closest(".gnav20-mobile") ? document.body.classList.add("gnav20-modal-menu-open") : (gnav20.closeElementQuery = "#gnav20-sign-in",
        setTimeout("document.body.addEventListener('click', gnav20.clickOutsideClose)", 1)),
        toggleAriaHiddenGnav20("signinFromHeader", !0),
        gnav20.setFocusTrap(c),
        gnav20.activeCloseButton = b.querySelector(".gnav20-close-account-utility"))
    }
    function e(a) {
        var b = a ? a.target.closest(".gnav20-account-box") : document.querySelector(".gnav20 .gnav20-desktop .gnav20-utility-wrapper:not(.gnav20-hide-on-desktop) .gnav20-account-box"), c;
        if (b && b.querySelector(".gnav20-dropdown-menu")) {
            if (c = b.querySelector(".gnav20-sign-in"))
                c.remove(),
                b.prepend(c),
                c.setAttribute("aria-expanded", "false");
            b.querySelector(".gnav20-dropdown-menu").classList.add("gnav20-hide");
            a && a.target.closest(".gnav20-mobile") && b.querySelector(".gnav20-vzmoverlay") && (b.querySelector(".gnav20-vzmoverlay").classList.remove("gnav20-menuop"),
            b.querySelector("#gnav20-sign-id-mobile").focus());
            b.closest(".gnav20-mobile") ? document.body.classList.remove("gnav20-modal-menu-open") : (document.body.removeEventListener("click", gnav20.clickOutsideClose),
            a && a.target && a.target.classList.contains("gnav20-close-account-utility") && (a = a.target.closest(".gnav20-account-box").querySelector("button.gnav20-hasDropdown"),
            a.focus()));
            toggleAriaHiddenGnav20("signinFromHeader", !1);
            gnav20.clearFocusTrap()
        }
    }
    function l(a) {
        if (a.target.closest(".gnav20-account-box") && a.target.closest(".gnav20-account-box").querySelector(".gnav20-dropdown-menu")) {
            var b = a.target.closest(".gnav20-account-box").querySelector(".gnav20-dropdown-menu");
            b && /gnav20-hide/.test(b.classList) ? d(a) : e(a)
        }
    }
    function n(a) {
        setTimeout(function() {
            document.activeElement.closest(".gnav20-dropdown-menu") || (e(),
            g(a))
        }, 10)
    }
    function k(a) {
        a = a.target || this;
        a.closest(".gnav20-dropdown-box") && a.closest(".gnav20-dropdown-box").querySelector(".gnav20-dropdown-menu") && (a.closest(".gnav20-dropdown-box").querySelector(".gnav20-dropdown-menu").classList.remove("gnav20-hide"),
        a.setAttribute("aria-expanded", "true"));
        a.closest(".gnav20-mobile") && (gnav20.toggleMobileSignInHideEls("none"),
        gnav20.setFocusTrap(gnav20.mobileMenu))
    }
    function g(a) {
        a = a.target || this;
        var b = a.closest(".gnav20-dropdown-box");
        b && b.querySelector(".gnav20-dropdown-menu") && b.querySelector("button") && (b.querySelector(".gnav20-dropdown-menu").classList.add("gnav20-hide"),
        b.querySelector("button").setAttribute("aria-expanded", "false"));
        a.closest(".gnav20-mobile") && (a.closest(".gnav20-dropdown-box").querySelector("button").setAttribute("aria-expanded", "false"),
        gnav20.toggleMobileSignInHideEls("block"),
        gnav20.clearFocusTrap(gnav20.mobileMenu))
    }
    function m(a) {
        a.target.nextElementSibling.classList.contains("gnav20-hide") ? k(a) : g(a)
    }
    function p(a) {
        var b = a.target || this;
        b.closest(".gnav20-dropdown-box") && b.closest(".gnav20-dropdown-box").querySelector(".gnav20-dropdown-menu") && /gnav20-hide/.test(b.closest(".gnav20-dropdown-box").querySelector(".gnav20-dropdown-menu").classList) ? k(a) : g(a)
    }
    gnav20.mobileMenu = document.getElementById("gnav20-mobile-menu");
    var q = document.querySelector(".gnav20-desktop .gnav20-localization #gnav20-language-selection-menu");
    q && (localizationMenu = q.parentElement.querySelector(".gnav20-dropdown-menu")) && localizationMenu.addEventListener("keydown", function() {
        setTimeout(function() {
            document.activeElement.closest(".gnav20-dropdown") || b()
        }, 10)
    });
    for (var h = document.getElementsByClassName("gnav20-localization"), f = 0; f < h.length; f++)
        h[f].removeEventListener("mouseleave", b),
        h[f].addEventListener("mouseleave", b);
    gnav20.toggleMobileSignInHideEls = function(a) {
        var b = "none" == a ? -1 : 0
          , c = document.querySelector("#gnav20-mobile-menu .gnav20-navigation");
        c && (c.style.display = a);
        a = document.querySelectorAll("#gnav20-footerlink a,#gnav20-mobile-menu .gnav20-main-header, #gnav20-sign-id-mobile, #gnav20-mobile-menu .gnav20-close-account-utility");
        for (c = 0; c < a.length; c++)
            a[c].setAttribute("tabindex", b)
    }
    ;
    gnav20.signInCloseMenu = e;
    if (h = document.querySelectorAll(".gnav20-desktop .gnav20-dropdown-menu .gnav20-dropdown-list-item"))
        for (f = 0; f < h.length; f++)
            h[f].removeEventListener("blur", n),
            h[f].addEventListener("blur", n);
    h = document.querySelectorAll(".gnav20 .gnav20-width-wrapper:not(.gnav20-new-design) .gnav20-desktop .gnav20-account-box");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("mouseleave", e),
        h[f].addEventListener("mouseleave", e);
    h = document.querySelectorAll(".gnav20-width-wrapper:not(.gnav20-new-design) .gnav20-desktop .gnav20-utility  .gnav20-account-utility .gnav20-account-box .gnav20-sign-in");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("mouseover", d),
        h[f].addEventListener("mouseover", d),
        h[f].removeEventListener("click", l),
        h[f].addEventListener("click", l),
        h[f].addEventListener("focus", function(a) {
            /gnav20-hide/.test(document.querySelector(".gnav20-desktop .gnav20-dropdown-menu").classList) || e(a)
        });
    h = document.querySelectorAll(".gnav20-width-wrapper .gnav20-gnav-new-design .gnav20-desktop .gnav20-utility  .gnav20-account-utility .gnav20-account-box .gnav20-sign-in.gnav20-hasDropdown");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", l),
        h[f].addEventListener("click", l);
    h = document.querySelectorAll(".gnav20-desktop .gnav20-utility  .gnav20-account-utility .gnav20-dropdown-menu .gnav20-close-account-utility");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", e),
        h[f].addEventListener("click", e);
    q && (q.setAttribute("tabindex", "0"),
    q.removeEventListener("mouseover", a),
    q.addEventListener("mouseover", a),
    q.removeEventListener("keydown", c),
    q.addEventListener("keydown", c));
    h = document.querySelectorAll(".gnav20-mobile .gnav20-account-box .gnav20-account-box .gnav20-sign-in");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", l),
        h[f].addEventListener("click", l);
    h = document.querySelectorAll(".gnav20-mobile #gnav20-footerlink .gnav20-sign-in");
    var r;
    for (f = 0; f < h.length; f++)
        if (h[f].removeEventListener("click", signinToggleForMobile),
        h[f].addEventListener("click", signinToggleForMobile),
        r = h[f].querySelector("span\x3espan"))
            r = r.innerText.trim() + " menu list",
            h[f].setAttribute("aria-label", r);
    h = document.querySelectorAll(".gnav20-mobile .gnav20-utility .gnav20-account-box .gnav20-sign-in");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", d),
        h[f].addEventListener("click", d);
    h = document.querySelectorAll(".gnav20-mobile .gnav20-utility .gnav20-account-box .gnav20-close-account-utility");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", e),
        h[f].addEventListener("click", e);
    h = document.querySelectorAll(".gnav20-mobile .gnav20-utility .gnav20-account-box .gnav20-vzmoverlay");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("click", e),
        h[f].addEventListener("click", e);
    h = document.querySelectorAll(".gnav20-desktop .gnav20-utility .gnav20-dropdown-box button");
    r = document.querySelectorAll(".gnav20-mobile .gnav20-mobile-menu .gnav20-dropdown-box button");
    for (f = 0; f < h.length; f++)
        h[f].removeEventListener("mouseover", k),
        h[f].addEventListener("mouseover", k),
        h[f].closest(".gnav20-dropdown-box").removeEventListener("mouseleave", g),
        h[f].closest(".gnav20-dropdown-box").addEventListener("mouseleave", g),
        h[f].removeEventListener("click", m),
        h[f].addEventListener("click", m);
    for (f = 0; f < r.length; f++)
        r[f].removeEventListener("click", p),
        r[f].addEventListener("click", p)
}
;
var googleSearchInitialized = !1, autocomplete;
function handleStoreLocatorFocus(a) {
    loadGoogleScript()
}
function mobilecheck() {
    var a = !1
      , b = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4)))
        a = !0;
    return a
}
function loadGoogleScript() {
    if (window.google && window.google.maps)
        googleSearchInitialized || initGoogleSearch();
    else {
        var a = mobilecheck() ? "mobile" : "desktop"
          , b = document.createElement("script");
        b.type = "text/javascript";
        b.rel = "stylesheet";
        b.async = "true";
        b.src = "https://maps.googleapis.com/maps/api/js?client\x3dgme-verizonwireless2\x26channel\x3dvzw-" + a + "\x26libraries\x3dplaces\x26callback\x3dinitGoogleSearch";
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b)
    }
}
function initGoogleSearch() {
    googleSearchInitialized = !0;
    var a = document.getElementById("gnav20-google-search-input");
    autocomplete = new google.maps.places.Autocomplete(a);
    autocomplete.setComponentRestrictions({
        country: ["us"]
    });
    autocomplete.setTypes(["geocode"]);
    autocomplete.addListener("place_changed", function() {
        var a = autocomplete.getPlace();
        if (a.geometry) {
            0 <= navigator.userAgent.search("Firefox") && history.pushState({}, "", window.location.href);
            var c = a.geometry.location.lat() ? a.geometry.location.lat().toFixed(6) : ""
              , d = a.geometry.location.lng() ? a.geometry.location.lng().toFixed(6) : "";
            location.href = "https://www.verizonwireless.com/stores/storesearchresults/?allow\x3d1\x26lat\x3d" + c + "\x26long\x3d" + d + "\x26result\x3dall\x26q\x3d" + encodeURI(a.formatted_address)
        }
    })
}
gnav20.initGnavMenu = function() {
    function a() {
        if (event == gnav20.hamburgerClickEvent)
            return !1;
        document.getElementById("gnav20-mobile-menu").classList.remove("gnav20-openL1");
        gnav20.hamburgerClickEvent = event;
        var a = document.querySelector("#gnav20-mobile-menu.gnav20-mobile-menu");
        a && (a.classList.toggle("gnav20-open-menu"),
        a.classList.toggle("gnav20-hide"));
        a.classList.contains("gnav20-open-menu") ? (gnav20.setFocusTrap(a),
        toggleAriaHiddenGnav20("hamburger", !0),
        gnav20.activeCloseButton = document.querySelector("#gnav20-mobile-menu .gnav20-closex")) : (gnav20.clearFocusTrap(),
        toggleAriaHiddenGnav20("hamburger", !1));
        a = document.querySelector(".gnav20-vzhmoverlay");
        for (var b = document.getElementsByTagName("body"), c = 0; c < b.length; c++)
            b[0].classList.toggle("gnav20-modal-menu-open");
        a && (a.classList.toggle("gnav20-menuop"),
        mobilelabelposition());
        (a = document.querySelector("#gnav20-mobile-menu #gnav20-closex.gnav20-closex")) && a.focus();
        (a = document.querySelector(".gnav20-mobile #gnav20-footerlink .gnav20-localization")) && a.classList.contains("gnav20-hide") && a.classList.remove("gnav20-hide");
        document.getElementsByClassName("gnav20-non-header").length && (document.querySelector(".gnav20 .gnav20-mobile .gnav20-navigation-list.gnav20-non-header").classList.remove("gnav20-non-header"),
        a = document.querySelector(".gnav20 .gnav20-mobile .gnav20-eyebrow-link-list-item a.gnav20-main-header.gnav20-selected")) && (a.style.display = "block")
    }
    function b() {
        var a = document.querySelector(".gnav20-mobile .gnav20-language-box .gnav20-dropdown-menu")
          , b = document.querySelector(".gnav20-vzhmoverlay");
        a && (a.closest("#gnav20-footerlink") || b.classList.toggle("gnav20-menuop"),
        a.classList.contains("gnav20-hide") ? (a.classList.add("gnav20-open-menu"),
        a.classList.remove("gnav20-hide")) : (a.classList.remove("gnav20-open-menu"),
        a.classList.add("gnav20-hide")))
    }
    function c() {
        a();
        var b = document.querySelector(".gnav20-mobile .gnav20-primary-menu:not(.gnav20-hide) #gnav20-Account-L1-mobile") || document.querySelector(".gnav20-mobile .gnav20-primary-menu:not(.gnav20-hide) #gnav20-Account-L1")
          , c = document.querySelector("#gnav20-mobile-menu #gnav20-closex");
        b && b.click();
        c && c.focus()
    }
    function d(b) {
        a();
        setTimeout(function() {
            signinContentHide();
            storeContentHide();
            MenuContentBack();
            languageContentHide()
        }, 500);
        for (var c = document.querySelectorAll(".gnav20-mobile .gnav20-visibilty-hidden"), d = 0; d < c.length; d++)
            c[d].classList.remove("gnav20-visibilty-hidden");
        var e = document.querySelector("#gnav20-nav-toggle");
        e && setTimeout(function() {
            e.focus()
        }, 1E3);
        b.preventDefault()
    }
    function e() {
        var a = document.querySelector(".gnav20-unifiedcart #gnav20-mySidenav");
        a && a.classList.add("gnav20-hide")
    }
    var l = document.querySelector(".gnav20-mobile #gnav20-closex3.gnav20-closex");
    l && (l.removeEventListener("click", b),
    l.addEventListener("click", b));
    if (l = document.querySelector(".gnav20-mobile #gnav20-language-selection-menu"))
        l.removeEventListener("click", b),
        l.addEventListener("click", b);
    if (l = document.querySelector(".gnav20-mobile .gnav20-account-icon"))
        l.removeEventListener("click", c),
        l.addEventListener("click", c);
    document.body.addEventListener("click", function(a) {
        if ((a.target || this).classList.contains("gnav20-menuop") || (a.target || this).classList.contains("gnav20-contactus"))
            d(a),
            (a.target || this).classList.contains("gnav20-contactus") && (a.target || this).id && (window.location.href = window.location.href + "/#" + (a.target || this).id);
        !a.target || a.target.closest(".gnav20-mobile") || a.target.closest(".gnav20-global-nav-list") || a.target.closest(".gnav20-utility") || !document.querySelector(".gnav20 .gnav20-desktop .gnav20-sub-header-menu.gnav20-grouping-active") || closeMenuL1(a);
        a.target && a.target.href && a.target.closest(".gnav20-mobile-menu") && document.getElementById("gnav20-closex") && document.getElementById("gnav20-closex").click();
        a.target && a.target.href && a.target.closest(".gnav20-account-utility") && a.target.closest(".gnav20-account-utility").querySelector(".gnav20-close-account-utility") && a.target.closest(".gnav20-account-utility").querySelector(".gnav20-close-account-utility").click()
    });
    if (l = document.querySelector("#gnav20-nav-toggle"))
        l.removeEventListener("click", a),
        l.addEventListener("click", a);
    if (l = document.querySelector("#gnav20-closex.gnav20-closex"))
        l.removeEventListener("click", d),
        l.addEventListener("click", d);
    if (l = document.querySelector("#gnav20-cclosex.ganv20-closex"))
        l.removeEventListener("click", e),
        l.addEventListener("click", e)
}
;
gnav20.initUnifiedCart = function() {
    function a(a) {
        if (a == gnav20.cartClickEvent)
            return !1;
        document.querySelector(".gnav20-account-box .gnav20-dropdown-menu:not(.gnav20-hide)") && gnav20.signInCloseMenu();
        gnav20.cartClickEvent = a;
        var b = a.target.closest(".gnav20-unifiedcart").querySelector(".gnav20-unified-cart");
        a.target.closest(".gnav20-unifiedcart").querySelector(".gnav20-closex");
        var c = document.querySelector(".gnav20-tablet-back-drop")
          , d = a.target.closest(".gnav20-mobile");
        c && (cartBackDrop = a.target.closest(".gnav20-utility").querySelector(".gnav20-tablet-back-drop"),
        cartBackDrop.classList.remove("gnav20-hide"));
        var k = a.target.parentElement.closest(".gnav20-unifiedcart").querySelector(".gnav20-cart");
        b && (b.classList.contains("gnav20-hide") ? (k && k.setAttribute("aria-expanded", "true"),
        d ? (document.body.classList.add("gnav20-modal-menu-open"),
        gnav20.closeElementQuery = "#gnav20-my-side-nav-mobile") : gnav20.closeElementQuery = "#gnav20-my-side-nav",
        gnav20.activeCloseButton = b.querySelector(".gnav20-closex"),
        b.classList.remove("gnav20-hide"),
        toggleAriaHiddenGnav20("cart", !0),
        gnav20.setFocusTrap(b),
        setTimeout("document.body.addEventListener('click', gnav20.clickOutsideClose)", 1)) : (k && (k.setAttribute("aria-expanded", "false"),
        k.focus()),
        b.classList.add("gnav20-hide"),
        c && (cartBackDrop = a.target.closest(".gnav20-utility").querySelector(".gnav20-tablet-back-drop"),
        cartBackDrop.classList.add("gnav20-hide")),
        document.body.removeEventListener("click", gnav20.clickOutsideClose),
        document.body.classList.remove("gnav20-modal-menu-open"),
        toggleAriaHiddenGnav20("cart", !1),
        gnav20.clearFocusTrap()))
    }
    for (var b = document.querySelectorAll(".gnav20-unifiedcart .gnav20-cart, .gnav20-unified-cart .gnav20-closex"), c = 0; c < b.length; c++)
        b[c].removeEventListener("click", a),
        b[c].addEventListener("click", a)
}
;
gnav20.closeCart = function() {
    var a = document.getElementById("gnav20-my-side-nav")
      , b = document.getElementById("gnav20-cclosex");
    a && b && !a.classList.contains("gnav20-hide") && b.click()
}
;
gnav20.showSMBBubble = function() {
    var a = ["prospectFlowType", "prospectFlowFios", "prospectFlowBDV", "SMB_PROSPECT_CARTQTY"], b;
    for (ii = 0; ii < a.length; ii++)
        if ((b = gnav20.getCookie(a[ii])) && 0 != parseInt(b)) {
            a = document.getElementsByClassName("gnav20-cart-wrapper");
            for (i = 0; i < a.length; i++)
                a[i].classList.remove("gnav20-hide");
            a = document.getElementsByClassName("gnav20-cart-bubble");
            for (i = 0; i < a.length; i++)
                a[i].style.display = "block";
            break
        }
}
;
var btnEle = document.querySelector(".gnav20-custom-modal-btn")
  , closeBtnEle = document.querySelector(".gnav20-custom-modal-close-btn");
btnEle && (btnEle.removeEventListener("click", openContactUsModal),
btnEle.addEventListener("click", openContactUsModal));
closeBtnEle && (closeBtnEle.removeEventListener("click", closeContactUsModal),
closeBtnEle.addEventListener("click", closeContactUsModal));
var modalEle = document.querySelector(".gnav20-modal");
function openContactUsModal(a) {
    modalEle && (modalEle.style.display = "block",
    modalEle.setAttribute("aria-hidden", "false"),
    modalEle.setAttribute("tabindex", "0"),
    closeBtnEle.focus(),
    gnav20.setFocusTrap(modalEle),
    a.preventDefault(),
    a.stopPropagation())
}
function closeContactUsModal(a) {
    modalEle && (modalEle.style.display = "none",
    modalEle.setAttribute("aria-hidden", "true"),
    modalEle.setAttribute("tabindex", "-1"),
    gnav20.clearFocusTrap(),
    a.preventDefault(),
    a.stopPropagation())
}
function downFunction() {
    document.body.scrollTop = 1750;
    document.documentElement.scrollTop = 1750
}
function toggleAriaHiddenGnav20(a, b, c) {
    if (c) {
        c = {
            hamburger: [".gnav20-header-accessibility", ".gnav20-ribbontext", ".gnav20-logo", ".gnav20-utility", "#vz-gf20"],
            cart: ".gnav20-header-accessibility;.gnav20-ribbontext;.gnav20-row-one;.gnav20-logo;.gnav20-navigation;.gnav20-account-utility;.gnav20-search-utility;.gnav20-mobile .gnav20-wishlist;.gnav20-mobile #gnav20-nav-toggle;#gnav20-mobile-menu.gnav20-mobile-menu;#vz-gf20".split(";"),
            signin: ".gnav20-header-accessibility;.gnav20-ribbontext;.gnav20-row-one;.gnav20-logo;.gnav20-navigation;.gnav20-mobile .gnav20-utility;.gnav20-mobile-menu #gnav20-footerlink .gnav20-store;.gnav20-mobile-menu #gnav20-footerlink .gnav20-localization".split(";"),
            signinFromHeader: ".gnav20-header-accessibility;.gnav20-ribbontext;.gnav20-row-one;.gnav20-logo;.gnav20-navigation;.gnav20-search-utility;.gnav20-unifiedcart;.gnav20-mobile .gnav20-wishlist;.gnav20-mobile .gnav20-unifiedcart;.gnav20-mobile #gnav20-nav-toggle;.gnav20-mobile-menu #gnav20-footerlink .gnav20-store;.gnav20-mobile-menu #gnav20-footerlink .gnav20-localization".split(";"),
            search: ".gnav20-header-accessibility;.gnav20-ribbontext;.gnav20-row-one;.gnav20-logo;.gnav20-navigation;.gnav20-account-utility;.gnav20-mobile .gnav20-search-icon;.gnav20-desktop .gnav20-unifiedcart;.gnav20-mobile .gnav20-unifiedcart;.gnav20-cart;.gnav20-mobile .gnav20-wishlist;.gnav20-mobile #gnav20-nav-toggle;.gnav20-mobile-menu;#vz-gf20".split(";"),
            languageChange: ".gnav20-header-accessibility;.gnav20-ribbontext;.gnav20-logo;.gnav20-mobile .gnav20-utility .gnav20-search-utility;.gnav20-mobile .gnav20-utility .gnav20-language-box #gnav20-language-selection-menu;.gnav20-mobile .gnav20-utility #gnav20-nav-toggle;.gnav20-mobile .gnav20-mobile-menu".split(";"),
            modal: [".gnav20-header-accessibility", ".gnav20-promo-text", ".gnav20-apicomponentnolayout", ".gnav20-mobile .gnav20-utility #gnav20-nav-toggle", "#vz-gf20"],
            L1: [".gnav20-header-accessibility", ".gnav20-promo-text", ".gnav20-row-one", ".gnav20-logo", ".gnav20-utility"]
        };
        var d = document.body.children;
        for (i = 0; i < d.length; i++) {
            var e = d[i];
            e.children && e.children.length && !e.querySelector(".gnav20-desktop") && e.setAttribute("aria-hidden", b)
        }
        if (c[a])
            for (i = 0; i < c[a].length; i++)
                for (e = document.querySelectorAll(c[a][i]),
                ii = 0; ii < e.length; ii++)
                    e[ii].setAttribute("aria-hidden", b)
    } else
        gnav20.togOverlay = a,
        gnav20.togBool = b,
        setTimeout("toggleAriaHiddenGnav20(gnav20.togOverlay,gnav20.togBool,true)", 100)
}
gnav20.initLOB = function() {
    function a(a) {
        (a.target || this).closest(".gnav20-sub-lob-box") && (a.target || this).closest(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu") && ((a.target || this).setAttribute("aria-expanded", "true"),
        (a.target || this).closest(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu").classList.remove("gnav20-hide"),
        (a.target || this).closest(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu").setAttribute("aria-expanded", "true"))
    }
    function b(a) {
        (a.target || this).closest(".gnav20-desktop") && (a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box") && (a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu") && (a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box").querySelector(".gnav20-sub-lob") && ((a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu").classList.add("gnav20-hide"),
        (a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box").querySelector(".gnav20-dropdown-menu").setAttribute("aria-expanded", "false"),
        (a.target || this).closest(".gnav20-desktop").querySelector(".gnav20-sub-lob-box").querySelector(".gnav20-sub-lob").setAttribute("aria-expanded", "false"))
    }
    function c(c) {
        c.preventDefault();
        c.stopPropagation();
        var d = c.which;
        if (13 == d || 32 == d || 1 == d)
            (c.target || this).nextElementSibling.classList.contains("gnav20-hide") ? a(c) : b(c)
    }
    function d() {
        var a = document.querySelector(".gnav20-mobile .gnav20-sub-lob-box .gnav20-dropdown-menu");
        a.classList.contains("gnav20-hide") && a.classList.remove("gnav20-hide");
        a = document.querySelector(".gnav20-mobile .gnav20-sub-lob-box .gnav20-sub-lob");
        a.classList.contains("gnav20-hide") || a.classList.add("gnav20-hide")
    }
    function e(a) {
        a.target.innerText && /business|personal/.test(a.target.innerText.toLowerCase()) && (a = /personal/.test(a.target.innerText.toLowerCase()) ? "personal" : "business",
        gnav20.setCookie("VZ_ATLAS_SITE_PERS", "BusinessUnit\x3d" + a, 365))
    }
    function l(a) {
        setTimeout(function() {
            document.activeElement.classList.contains("gnav20-dropdown-list-item") || /gnav20-hide/.test(document.querySelector(".gnav20-desktop .gnav20-sub-lob-box .gnav20-dropdown-menu").classList) || b(a)
        }, 10)
    }
    function n(a) {
        setTimeout(function() {
            document.activeElement.classList.contains("gnav20-dropdown-list-item") || b(a)
        }, 10)
    }
    var k = document.querySelector(".gnav20-desktop .gnav20-sub-lob-box");
    k && (k.removeEventListener("mouseleave", b),
    k.addEventListener("mouseleave", b));
    if (k = document.querySelector(".gnav20-desktop .gnav20-sub-lob-box .gnav20-sub-lob")) {
        k.removeEventListener("mouseover", a);
        k.addEventListener("mouseover", a);
        k.removeEventListener("keypress", c);
        k.addEventListener("keypress", c);
        k.removeEventListener("click", c);
        k.addEventListener("click", c);
        var g = document.querySelector(".gnav20-mobile .gnav20-navigation-list");
        if (g) {
            var m = document.createElement("a");
            m.classList.add("gnav20-lob-link");
            document.getElementById("gnav20-lob-link-label") && (m.innerText = document.getElementById("gnav20-lob-link-label").value);
            g.appendChild(m);
            m.addEventListener("click", d)
        }
    }
    m = document.querySelectorAll(".gnav20-eyebrow-link-list-item \x3e a");
    for (g = 0; g < m.length; g++)
        m[g].removeEventListener("click", e),
        m[g].addEventListener("click", e);
    k && k.addEventListener("blur", l);
    k = document.querySelectorAll(".gnav20-desktop .gnav20-sub-lob-box .gnav20-dropdown .gnav20-dropdown-list .gnav20-dropdown-list-item");
    if (null != k)
        for (g = 0; g < k.length; g++)
            k[g].removeEventListener("blur", n),
            k[g].addEventListener("blur", n)
}
;
gnav20.getScriptOrigin = function() {
    try {
        var a = document.querySelector('script[src*\x3d"/vzwcom/gnav20"]');
        if (a)
            return a.src.substr(0, a.src.indexOf("/etc"))
    } catch (b) {}
    return "https://www.verizon.com"
}
;
gnav20.initGnavFooter = function() {
    var a = document.querySelector("#gnav20-language-selection-menu")
      , b = document.querySelector("#gnav20-quick-task-selection-menu");
    a && (a.removeEventListener("click", languageFooterShowHide),
    a.addEventListener("click", languageFooterShowHide));
    b && (b.removeEventListener("click", quickTaskShowHide),
    b.addEventListener("click", quickTaskShowHide),
    b.removeEventListener("keypress", expandQuickTaskMenOnKeyPress),
    b.addEventListener("keypress", expandQuickTaskMenOnKeyPress));
    (a = document.querySelector("#gnav20-quick-task-menu-default")) && a.addEventListener("focus", function() {
        /gnav20-hide/.test(document.querySelector(".gnav20-dropdown-quick-task-menu").classList) || quickTaskShowHide()
    });
    a && (a.removeEventListener("blur", checkQuickTaskFocus),
    a.addEventListener("blur", checkQuickTaskFocus));
    if (a = document.querySelectorAll(".gnav20-dropdown-quick-task-menu .gnav20-dropdown .gnav20-footer-list .gnav20-quick-task-item-footer"))
        for (b = 0; b < a.length; b++)
            a[b].removeEventListener("blur", checkQuickTaskItemFooterFocus),
            a[b].addEventListener("blur", checkQuickTaskItemFooterFocus);
    gnav20.getCookie("wcmmode") || gnav20.initPersona();
    gnav20.footerContainer = document.getElementById("vz-gf20");
    gnav20.footerContainer && (gnav20.mobileAccordion = function() {
        if (768 > window.innerWidth && !gnav20.footerContainer.querySelector(".gnav20-hero-footer-heading[tabindex]")) {
            for (var a = gnav20.footerContainer.querySelectorAll(".gnav20-herofooter .gnav20-hero-footer-heading"), b = 0; b < a.length; b++)
                a[b].addEventListener("click", handleAccordion),
                a[b].addEventListener("keydown", handleAccordionOnKeyPress),
                a[b].setAttribute("aria-label", a[b].innerText + " menu list"),
                a[b].setAttribute("tabindex", "0"),
                a[b].setAttribute("aria-expanded", "false"),
                a[b].setAttribute("role", "button"),
                a[b].nextElementSibling.classList.add("gnav20-accordion-list");
            event && event.target && 1 === event.target.nodeType && event.target.closest(".gnav20-main-container") && event.target.closest(".gnav20-main-container").querySelector(".gnav20-hero-footer-heading").focus()
        }
    }
    ,
    gnav20.footerContainer.addEventListener("keyup", gnav20.mobileAccordion),
    gnav20.mobileAccordion(),
    (a = document.querySelector(".gnav20 div[role\x3dcontentinfo]")) && a.closest("footer") && a.removeAttribute("role"));
    document.querySelectorAll("#vz-gf20 a[data-track]").length || (a = new Event("gnavReady"),
    document.dispatchEvent(a),
    console.log("dispatch gnavReady after footer"))
}
;
function handleAccordion() {
    gnav20.toggleElementHeight()
}
function handleAccordionOnKeyPress() {
    var a = event.keyCode;
    13 != a && 32 != a || gnav20.toggleElementHeight()
}
gnav20.toggleElementHeight = function() {
    function a(a) {
        var b = a.nextElementSibling, c = 0, d;
        a.classList.remove("gnav20-accordion-open");
        a.setAttribute("aria-expanded", !1);
        var k = setInterval(function() {
            var a = parseInt(b.style.height);
            0 < a && 100 > c ? (d = 10 > a ? 0 : a - 10,
            b.style.height = d + "px",
            c++) : (b.removeAttribute("style"),
            clearTimeout(k))
        }, 5)
    }
    function b() {
        for (var b = document.querySelectorAll(".gnav20-herofooter .gnav20-hero-footer-heading"), c = 0; c < b.length; c++)
            "block" == b[c].nextElementSibling.style.display && a(b[c])
    }
    function c(a) {
        b();
        var c = a.nextElementSibling, d = 0, n;
        a.classList.add("gnav20-accordion-open");
        a.setAttribute("aria-expanded", !0);
        c.style.display = "block";
        c.style.height = "0px";
        var k = setInterval(function() {
            var a = parseInt(c.style.height);
            a < c.scrollHeight && 100 > d ? (n = a + 10 > c.scrollHeight ? c.scrollHeight : a + 10,
            c.style.height = n + "px",
            d++) : clearTimeout(k)
        }, 5)
    }
    event.target.nextElementSibling && ("block" == event.target.nextElementSibling.style.display ? a(event.target) : c(event.target))
}
;
gnav20.checkEscapeKey = function(a) {
    27 == a.keyCode && gnav20.activeCloseButton && gnav20.activeCloseButton.click()
}
;
gnav20.copyNav = function() {
    var a = window.getComputedStyle(gnav20.mobileHeader);
    "desktop" == gnav20.currentNav && "block" == a.getPropertyValue("display") ? (gnav20.mobileNav.innerHTML = gnav20.desktopNav.innerHTML,
    setTimeout(function() {
        gnav20.initNav();
        var a = document.querySelectorAll(".gnav20 .gnav20-mobile .gnav20-content-wrapper[style]");
        for (i = 0; i < a.length; i++)
            a[i].style = null;
        if (a = document.getElementById("gnav20-closex"))
            a.click(),
            a.click()
    }, 10),
    window.removeEventListener("resize", gnav20.copyNavTimeout)) : "mobile" == gnav20.currentNav && "none" == a.getPropertyValue("display") && (gnav20.desktopNav.innerHTML = gnav20.mobileNav.innerHTML,
    setTimeout("gnav20.initNav()", 10),
    window.removeEventListener("resize", gnav20.copyNavTimeout))
}
;
gnav20.resizeNav = null;
gnav20.copyNavTimeout = function() {
    clearTimeout(gnav20.resizeNav);
    gnav20.resizeNav = setTimeout(gnav20.copyNav, 250)
}
;
gnav20.initGnav = function() {
    gnav20.mobileNav = document.querySelector(".gnav20-mobile .gnav20-mobile-menu .gnav20-navigation-placeholder");
    gnav20.desktopNav = document.querySelector(".gnav20-desktop .gnav20-row-two \x3e .gnav20-navigation");
    gnav20.mobileHeader = document.querySelector(".gnav20 .gnav20-mobile");
    gnav20.mobileHeader && gnav20.desktopNav && gnav20.mobileNav && ("block" == window.getComputedStyle(gnav20.mobileHeader).getPropertyValue("display") ? (gnav20.mobileNav.innerHTML = gnav20.desktopNav.innerHTML,
    gnav20.desktopNav.innerHTML = "",
    gnav20.currentNav = "mobile") : gnav20.currentNav = "desktop",
    window.addEventListener("resize", gnav20.copyNavTimeout));
    gnav20.vzwbau = document.getElementById("vzw-gn");
    gnav20.vzwbau && gnav20.vzwbau.querySelector(".gnav20") && (gnav20.header = document.createElement("div"),
    gnav20.vzwbau.parentElement.insertBefore(gnav20.header, gnav20.vzwbau),
    gnav20.header.innerHTML = gnav20.vzwbau.querySelector(".gnav20").parentElement.innerHTML,
    gnav20.vzwbau.parentElement.removeChild(gnav20.vzwbau));
    gnav20.getCookie("wcmmode") || gnav20.initPersona();
    gnav20.initGnavMenu();
    gnav20.initLOB();
    gnav20.initSignIn();
    gnav20.initNav();
    gnav20.initPromo();
    gnav20.initSearch();
    gnav20.initUnifiedCart();
    gnav20.personalizeHidden();
    gnav20.initIconCounts();
    MP.init();
    gnav20.personal && gnav20.initVisualCue && (gnav20.check4BusinessCookie(),
    gnav20.initVisualCue());
    window.document.documentMode && gnav20.personal && !gnav20.getCookie("bannerIEClosed") && (gnav20.bannerInt = setInterval(function() {
        gnav20.displaybannerIE && (clearTimeout(gnav20.bannerInt),
        gnav20.bannerInt = null,
        gnav20.displaybannerIE());
        gnav20.bannerIEDiv && clearTimeout(gnav20.bannerInt)
    }, 100));
    if (document.getElementById("gnav20-promo-placeholder")) {
        var a = new XMLHttpRequest
          , b = gnav20.getScriptOrigin() + "/content/caas/gNavRibbon.model.isActive:true.json";
        a.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status)
                try {
                    for (var a = JSON.parse(this.responseText), b = Object.values(a.ribbonMapping), c = window.location.pathname, d = window.location.search, g = "", m, p = 0; p < b.length; p++)
                        if (b[p].pageUrl) {
                            var q = "^" + b[p].pageUrl;
                            b[p].pageUrl.includes("*") || (q += "$");
                            if (c.match(new RegExp(q)) && b[p].pageUrl.replace("*", "").length >= g.length) {
                                if (null != m && b[p].pageUrl.includes("*"))
                                    break;
                                if (!b[p].queryParam || b[p].queryParam && 0 == b[p].queryParam.length)
                                    m = b[p],
                                    g = m.pageUrl.replace("*", "");
                                b[p].queryParam && 0 < d.length && d.slice(1).split("\x26").includes(b[p].queryParam) && (m = b[p],
                                g = m.pageUrl.replace("*", "") + m.queryParam)
                            }
                        }
                    m && m.isHidden && (document.getElementById("gnav20-promo-placeholder").innerHTML = "",
                    document.querySelector(".gnav20-sticky-header") && document.querySelector(".gnav20-sticky-header").classList.remove("gnav20-with-promo"));
                    if (m)
                        if (a.ribbonContent[m.contentFragmentId].isModal) {
                            var h = "\x3cdiv class\x3d'gnav20-promo-text gnav20-white-focus'\x3e\x3cspan\x3e" + (a.ribbonContent[m.contentFragmentId].ribbonText ? a.ribbonContent[m.contentFragmentId].ribbonText : "") + "\x26nbsp;\x3cspan style\x3d'color:#6F7171 !important;'\x3e\x26nbsp;|\x26nbsp;\x3c/span\x3e\x3cspan class\x3d'gnav20-promo-icon'\x3e\x3ca href\x3d'javascript:void(0);' aria-label\x3d'" + a.ribbonContent[m.contentFragmentId].modalLinkAriaLabel + "'\x3e" + (a.ribbonContent[m.contentFragmentId].modalLinkText ? a.ribbonContent[m.contentFragmentId].modalLinkText : "Offer Details") + "\x3c/a\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e";
                            h += "\x3cdiv class\x3d'gnav20-modal-content-placeholder' style\x3d'display:none;'\x3e";
                            a.ribbonContent[m.contentFragmentId].modalHeading && (h += "\x3ch2 class\x3d'gnav20-modal-heading' id\x3d'gnav20-modal-heading'\x3e" + a.ribbonContent[m.contentFragmentId].modalHeading + "\x3c/h2\x3e");
                            a.ribbonContent[m.contentFragmentId].modalSubHeading && (h += "\x3cdiv class\x3d'gnav20-modal-sub-heading' id\x3d'gnav20-modal-sub-heading'\x3e" + a.ribbonContent[m.contentFragmentId].modalSubHeading + "\x3c/div\x3e");
                            h += "\x3cdiv class\x3d'gnav20-modal-cta'\x3e";
                            a.ribbonContent[m.contentFragmentId].primaryCTALabel && (h += "\x3cspan class\x3d'gnav20-modal-primary-cta'\x3e\x3ca href\x3d'" + a.ribbonContent[m.contentFragmentId].primaryCTALink + "' aria-label\x3d'" + a.ribbonContent[m.contentFragmentId].primaryCTAAriaLabel + "'\x3e" + a.ribbonContent[m.contentFragmentId].primaryCTALabel + "\x3c/a\x3e\x3c/span\x3e");
                            a.ribbonContent[m.contentFragmentId].secondaryCTALabel && (h += "\x3cspan class\x3d'gnav20-modal-secondary-cta'\x3e\x3ca href\x3d'" + a.ribbonContent[m.contentFragmentId].secondaryCTALink + "' aria-label\x3d'" + a.ribbonContent[m.contentFragmentId].secondaryCTAAriaLabel + "'\x3e" + a.ribbonContent[m.contentFragmentId].secondaryCTALabel + "\x3c/a\x3e\x3c/span\x3e");
                            h += "\x3c/div\x3e\x3c/div\x3e";
                            document.querySelector(".gnav20-promo-ribbon").innerHTML = h
                        } else
                            document.querySelector(".gnav20-promo-ribbon").innerHTML = "\x3cdiv class\x3d'gnav20-promo-text gnav20-white-focus'\x3e\x3cspan\x3e" + (a.ribbonContent[m.contentFragmentId].ribbonText ? a.ribbonContent[m.contentFragmentId].ribbonText : "") + "\x3c/span\x3e\x3c/div\x3e";
                    gnav20.initPromo()
                } catch (f) {
                    console.log(f)
                }
        }
        ;
        a.open("GET", b, !0);
        a.send()
    }
    a = window.location.href;
    var c = document.querySelectorAll("a[href*\x3d'[current-url]']");
    for (i = 0; i < c.length; i++)
        b = c[i].href,
        c[i].href = b.replace("[current-url]", encodeURIComponent(a));
    c = document.querySelectorAll("span[data-href*\x3d'[current-url]']");
    for (i = 0; i < c.length; i++)
        b = c[i].getAttribute("data-href"),
        c[i].setAttribute("data-href", b.replace("[current-url]", encodeURIComponent(a)));
    if (gnavdl.options && gnavdl.options.defeatLogoLink)
        for (b = document.querySelectorAll(".gnav20 .gnav20-logoWhiteBg"),
        i = 0; i < b.length; i++)
            b[i].removeAttribute("href"),
            b[i].removeAttribute("title");
    gnavdl.options && gnavdl.options.sticky && document.getElementById("vz-gh20") && document.getElementById("vz-gh20").querySelector(".gnav20") && document.getElementById("vz-gh20").querySelector(".gnav20").classList.add("gnav20-sticky");
    b = document.querySelector(".gnav20-mobile .gnav20-main-header.gnav20-selected");
    a = document.getElementById("gnav20-ulwrapper");
    b && (a.insertBefore(b, a.firstChild),
    /smb/.test(gnavdl.bu) && document.querySelector(".gnav20-mobile .gnav20-navigation-placeholder") && document.querySelector(".gnav20-mobile .gnav20-navigation-placeholder").append(document.querySelector(".gnav20-mobile .gnav20-eyebrow-link-list")),
    (b = a.parentElement.querySelector(".gnav20-main-header[data-stext]:not(.gnav20-selected)")) && b.setAttribute("aria-label", b.getAttribute("data-stext") + " " + b.getAttribute("aria-label")));
    gnav20.mainContainer = document.querySelector(".gnav20");
    gnav20.mainContainer && gnav20.mainContainer.addEventListener("keydown", gnav20.checkEscapeKey);
    b = document.querySelectorAll(".gnav20 .gnav20-desktop .gnav20-row-one .gnav20-utility a");
    for (i = 0; i < b.length; i++)
        b[i].setAttribute("data-label", b[i].innerText);
    document.querySelector(".gnav20 .gnav20-new-design") && (b = document.querySelector(".gnav20 .gnav20-sticky-header")) && b.classList.add("gnav20-new-design");
    b = document.querySelectorAll(".gnav20 .gnav20-width-wrapper.gnav20-new-design .gnav20-utility svg, .gnav20 .gnav20-width-wrapper.gnav20-new-design .gnav20-nav-utility svg");
    for (i = 0; i < b.length; i++)
        b[i].closest(".gnav20-language-link") || b[i].parentNode.removeChild(b[i]);
    gnav20.wrapper = document.querySelector(".gnav20 .gnav20-width-wrapper");
    gnav20.wrapper && gnav20.state && "prospect" != gnav20.state && "vpd" == gnav20.appid && gnav20.wrapper.classList.add("gnav20-" + gnavdl.appid);
    try {
        if (gnav20.wrapper) {
            var d = gnav20.wrapper.querySelector(".gnav20-primary-menu.gnav20-featured-card") ? "gnav20-featured" : "gnav20-not-featured";
            gnav20.wrapper.classList.add(d)
        }
    } catch (e) {}
    document.querySelectorAll("header,[role\x3dbanner]").length || document.querySelector("div.gnav20") && document.querySelector("div.gnav20").setAttribute("role", "banner");
    window.gnav20Ready && window.gnav20Ready();
    window.GNAV_IS_READY = !0;
    d = new Event("gnavReady");
    document.dispatchEvent(d)
}
;
window.gnavdl = window.gnavdl || {};
gnavdl.bu || (gnav20.initGnav(),
gnav20.initGnavFooter(),
console.log("init BEFORE fetching header from init"));
gnav20.loadHeader = function(a) {
    if (document.getElementById("vz-gh20")) {
        var b = new XMLHttpRequest
          , c = gnav20.getScriptOrigin() + "/one-digital/gnav/header/" + a + ".external.html";
        gnav20.getCookie("wcmmode") && (c = gnav20.getScriptOrigin() + "/content/wcms/one-digital/gnav/header/" + a + ".external.html?wcmmode\x3ddisabled");
        b.onreadystatechange = function() {
            4 == this.readyState && 200 == this.status && (document.getElementById("vz-gh20").innerHTML = this.responseText,
            1 >= document.location.hash.length && (document.body.scrollTop = 0,
            document.documentElement.scrollTop = 0),
            gnav20.initGnav(),
            console.log("init AFTER fetching header"))
        }
        ;
        b.open("GET", c, !0);
        b.send()
    }
}
;
gnav20.loadFooter = function(a) {
    if (document.getElementById("vz-gf20")) {
        var b = new XMLHttpRequest
          , c = gnav20.getScriptOrigin() + "/one-digital/gnav/footer/" + a + ".external.html";
        gnav20.getCookie("wcmmode") && (c = gnav20.getScriptOrigin() + "/content/wcms/one-digital/gnav/footer/" + a + ".external.html?wcmmode\x3ddisabled");
        b.onreadystatechange = function() {
            4 == this.readyState && 200 == this.status && (document.getElementById("vz-gf20").innerHTML = this.responseText,
            gnav20.initGnavFooter())
        }
        ;
        b.open("GET", c, !0);
        b.send()
    }
}
;
document.body.addEventListener("mousemove", function() {
    document.body.classList.contains("gnav20-using-mouse") || document.body.classList.add("gnav20-using-mouse")
});
document.body.addEventListener("keydown", function(a) {
    "INPUT" != (a.target || this).tagName && document.body.classList.remove("gnav20-using-mouse")
});
gnav20.updateTFNContent = function(a) {
    var b = document.querySelector(".gnav20-tfn-content");
    a && 0 < a.length && b && (b.innerText = a)
}
;
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = a || self).uuidv4 = b()
}(this, function() {
    function a() {
        if (!b)
            throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return b(c)
    }
    for (var b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), c = new Uint8Array(16), d = [], e = 0; 256 > e; ++e)
        d.push((e + 256).toString(16).substr(1));
    return function(b, c, e) {
        "string" == typeof b && (c = "binary" === b ? new Uint8Array(16) : null,
        b = null);
        var g = (b = b || {}).random || (b.rng || a)();
        if (g[6] = 15 & g[6] | 64,
        g[8] = 63 & g[8] | 128,
        c) {
            b = e || 0;
            for (e = 0; 16 > e; ++e)
                c[b + e] = g[e];
            return c
        }
        return (d[g[0]] + d[g[1]] + d[g[2]] + d[g[3]] + "-" + d[g[4]] + d[g[5]] + "-" + d[g[6]] + d[g[7]] + "-" + d[g[8]] + d[g[9]] + "-" + d[g[10]] + d[g[11]] + d[g[12]] + d[g[13]] + d[g[14]] + d[g[15]]).toLowerCase()
    }
});
gnav20.testCookieName = "gnv195591";
gnav20.testGroup = gnav20.getCookie(gnav20.testCookieName);
function sendVersionInfo() {
    window.vztag && vztag.api && vztag.api.dispatch && vztag.api.dispatch("sendData", {
        name: "gnav version",
        data: {
            utils: {
                gnav: window.gnvTestInfo
            }
        }
    })
}
gnav20.testGroup && (window.gnvTestInfo = gnav20.testCookieName + "_" + gnav20.testGroup,
window.VZTAG_IS_READY ? sendVersionInfo() : document.addEventListener("vztagReady", sendVersionInfo));
gnav20.bu = "personal";
gnav20.variation = "";
gnav20.appid = "";
gnav20.state = "prospect";
gnav20.impltype = "";
gnav20.personal = !0;
gnav20.personalization = {
    vcg: !0
};
var scbreshref = "";
"undefined" !== typeof gnavdl && gnavdl && (gnavdl.appid && (gnav20.appid = gnavdl.appid),
gnavdl.bu && (gnav20.bu = gnavdl.bu),
gnavdl.variation && "" != gnavdl.variation && "prospect" != gnavdl.variation && (gnav20.variation = gnavdl.variation),
gnavdl.impltype && (gnav20.impltype = gnavdl.impltype),
"true" === gnav20.getCookie("loggedIn") || gnav20.getCookie("islogin") && gnav20.getCookie("userinfo") || gnavdl.authOnly) && (gnav20.state = "authenticated");
"wireless" == gnav20.bu && (function() {
    var a = -1 !== navigator.userAgent.indexOf("NoVideoCitrixWLS")
      , b = -1 !== location.href.indexOf("video\x3dy");
    (a || b) && gnav20.setCookie("suppressvideo", b ? "n" : "y")
}(),
gnav20.getCookie("GLOBALID") || (!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = a || self).uuidv4 = b()
}(this, function() {
    function a() {
        if (!b)
            throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return b(c)
    }
    for (var b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), c = new Uint8Array(16), d = [], e = 0; 256 > e; ++e)
        d.push((e + 256).toString(16).substr(1));
    return function(b, c, e) {
        "string" == typeof b && (c = "binary" === b ? new Uint8Array(16) : null,
        b = null);
        var g = (b = b || {}).random || (b.rng || a)();
        if (g[6] = 15 & g[6] | 64,
        g[8] = 63 & g[8] | 128,
        c) {
            b = e || 0;
            for (e = 0; 16 > e; ++e)
                c[b + e] = g[e];
            return c
        }
        return (d[g[0]] + d[g[1]] + d[g[2]] + d[g[3]] + "-" + d[g[4]] + d[g[5]] + "-" + d[g[6]] + d[g[7]] + "-" + d[g[8]] + d[g[9]] + "-" + d[g[10]] + d[g[11]] + d[g[12]] + d[g[13]] + d[g[14]] + d[g[15]]).toLowerCase()
    }
}),
gnav20.newGID = uuidv4().replace(/-/g, "z"),
gnav20.setCookie("GLOBALID", gnav20.newGID, 60)));
gnav20.getCookie("loggedIn") || (0 < gnav20.getCookie("gnCartCount") && gnav20.setCookie("checkAuthCartCount", !0, 30),
gnav20.deleteCookie("gnCartCount"),
gnav20.deleteCookie("gnCartCountFetched"));
if ("home" === gnav20.bu && gnav20.getCookie("islogin") && gnav20.getCookie("userinfo")) {
    var url = ""
      , domainName = "https://wwwawssit.ebiz.verizon.com";
    if ("www.verizon.com" == location.hostname || "tv.verizon.com" == location.hostname || "forums.verizon.com" == location.hostname)
        domainName = "https://www.verizon.com";
    scbreshref = window.location.href.toLowerCase();
    try {
        if (-1 < scbreshref.indexOf("tv-sit.verizon.com") || -1 < scbreshref.indexOf("tv-stg.verizon.com") || -1 < scbreshref.indexOf("tv-dit.verizon.com") || -1 < scbreshref.indexOf("tv.verizon.com") || -1 < scbreshref.indexOf("forums.verizon.com") || -1 < scbreshref.indexOf("sso-np.ebiz.verizon.com")) {
            var userInfoCookieValue = gnav20.getCookie("userinfo");
            url = domainName + "/content/verizon/personal/services/getgnavuserinfo.all.nocache.json?userinfo\x3d" + userInfoCookieValue
        } else
            url = domainName + "/content/verizon/personal/services/getgnavuserinfo.all.nocache.json";
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var a = JSON.parse(this.responseText);
                a && a.userdetailsJSON && a.userdetailsJSON.decryptedUserInfoCookie && (gnav20.personalization = a.userdetailsJSON.decryptedUserInfoCookie,
                initializePersonalization(),
                a && a.userdetailsJSON && a.userdetailsJSON.DispNameValue && "" != a.userdetailsJSON.DispNameValue && (gnav20.greetingName = a.userdetailsJSON.DispNameValue),
                gnav20.getCookie("wcmmode") || gnav20.initPersona())
            }
        }
        ;
        xhr.open("GET", url, !0);
        xhr.timeout = 1E3;
        xhr.ontimeout = function() {}
        ;
        xhr.send();
        gnav20.getCookie("islogin") && -1 < gnav20.getCookie("islogin").indexOf("vzw") && (gnav20.state = "1vz");
        scbSessionTO()
    } catch (a) {
        console.log("E in gnavservice call", a)
    }
} else if ("wireless" === gnav20.bu && gnav20.getCookie("islogin") && gnav20.getCookie("userinfo")) {
    gnav20.bu = "home";
    url = "";
    domainName = "https://wwwawssit.ebiz.verizon.com";
    if ("www.verizon.com" == location.hostname || "tv.verizon.com" == location.hostname || "forums.verizon.com" == location.hostname)
        domainName = "https://www.verizon.com";
    scbreshref = window.location.href.toLowerCase();
    try {
        -1 < scbreshref.indexOf("tv-sit.verizon.com") || -1 < scbreshref.indexOf("tv-stg.verizon.com") || -1 < scbreshref.indexOf("tv-dit.verizon.com") || -1 < scbreshref.indexOf("tv.verizon.com") || -1 < scbreshref.indexOf("forums.verizon.com") || -1 < scbreshref.indexOf("sso-np.ebiz.verizon.com") ? (userInfoCookieValue = gnav20.getCookie("userinfo"),
        url = domainName + "/content/verizon/personal/services/getgnavuserinfo.all.nocache.json?userinfo\x3d" + userInfoCookieValue) : url = domainName + "/content/verizon/personal/services/getgnavuserinfo.all.nocache.json",
        xhr = new XMLHttpRequest,
        xhr.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var a = JSON.parse(this.responseText);
                a && a.userdetailsJSON && a.userdetailsJSON.decryptedUserInfoCookie && (gnav20.personalization = a.userdetailsJSON.decryptedUserInfoCookie,
                initializePersonalization(),
                a && a.userdetailsJSON && a.userdetailsJSON.DispNameValue && "" != a.userdetailsJSON.DispNameValue && (gnav20.greetingName = a.userdetailsJSON.DispNameValue),
                gnav20.getCookie("wcmmode") || gnav20.initPersona())
            }
        }
        ,
        xhr.open("GET", url, !0),
        xhr.timeout = 1E3,
        xhr.ontimeout = function() {}
        ,
        xhr.send(),
        gnav20.getCookie("islogin") && -1 < gnav20.getCookie("islogin").indexOf("vzw") && (gnav20.state = "1vz"),
        scbSessionTO()
    } catch (a) {
        console.log("E in gnavservice call", a)
    }
} else
    "true" === gnav20.getCookie("loggedIn") && gnav20.getCookie("role") && "prepay" === gnav20.getCookie("role") && (gnav20.bu = "wireless",
    gnav20.state = "myverizon-prepay" == gnav20.appid ? "myvprepay" : "prepay");
if (gnavdl.oneV || /vzw/.test(gnav20.getCookie("islogin")))
    gnav20.setCookie("oneV", "true", .04),
    gnav20.state = "1vz";
gnav20.getCookie("loggedIn") && "1vz" != gnav20.state && (gnav20.bu = "wireless");
makeHeaderRequest();
function initializePersonalization() {
    "undefined" !== typeof gnavdl && gnavdl && gnavdl.appid && (gnav20.personalization.appid = gnavdl.appid);
    gnav20.getCookie("loggedIn") && gnav20.getCookie("role") && (gnav20.personalization.loggedIn = gnav20.getCookie("loggedIn"),
    gnav20.personalization.role = gnav20.getCookie("role"),
    gnav20.getCookie("OS") && (gnav20.personalization.OS = gnav20.getCookie("OS")),
    gnav20.getCookie("featurePers") && (gnav20.personalization.featurePers = gnav20.getCookie("featurePers")),
    gnav20.getCookie("customerType") && (gnav20.personalization.customerType = gnav20.getCookie("customerType")),
    gnav20.getCookie("oneV") && (gnav20.personalization.oneV = gnav20.getCookie("oneV")),
    gnav20.getCookie("asscId") && (gnav20.personalization.asscId = gnav20.getCookie("asscId")));
    "zk" === gnav20.getCookie("authType") && "vzw|vzt" === gnav20.getCookie("zkServices") && "limited" != gnav20.variation && (gnav20.personalization.authType = "zk",
    gnav20.variation = "",
    gnav20.state = "1vz")
}
function makeHeaderRequest() {
    initializePersonalization();
    gnav20.context = gnav20.bu + gnav20.variation + gnav20.state;
    ("ssi" == gnav20.impltype && "prospect" == gnav20.state || "ssiauth" == gnav20.impltype && "authenticated" == gnav20.state || "ssi-nooverride" == gnav20.impltype) && document.getElementById("vz-gh20") && document.getElementById("vz-gh20").firstElementChild && "test" != gnav20.testGroup ? (document.getElementById("vz-gh20").firstElementChild.removeAttribute("style"),
    gnav20.getCookie("wcmmode") || gnav20.initPersona(),
    window.gnavdl && "limited" != gnavdl.variation && gnavdl.options && gnavdl.options.sticky && ("true" == gnavdl.options.sticky || 1 == gnavdl.options.sticky) && document.getElementById("vz-gh20").querySelector(".gnav20") && document.getElementById("vz-gh20").querySelector(".gnav20").classList.add("gnav20-sticky"),
    gnav20.initGnav(),
    gnav20.initGnavFooter(),
    console.log("init BEFORE fetching header from personal 2")) : ("test" == gnav20.testGroup && "limited" !== gnavdl.variation && "vpd" !== gnavdl.appid && (gnav20.context += "-more"),
    gnav20.loadHeader(gnav20.context),
    gnav20.loadFooter(gnav20.context))
}
function refreshGnav(a) {
    gnav20.context = gnav20.bu + a + gnav20.state;
    "test" === gnav20.testGroup && "limited" !== a && "vpd" !== gnavdl.appid && (gnav20.context += "-more");
    gnav20.loadHeader(gnav20.context);
    gnav20.loadFooter(gnav20.context)
}
if (!gnav20.getCookie("loggedIn") || gnav20.getCookie("loggedIn") && "true" !== gnav20.getCookie("loggedIn"))
    gnav20.deleteCookie("OS"),
    gnav20.deleteCookie("featurePers"),
    gnav20.deleteCookie("customerType"),
    gnav20.deleteCookie("oneV");
function removeHttps(a) {
    try {
        var b = a.replace("https://", "");
        return b = b.replace("http://", "")
    } catch (c) {
        console.log("E - removeHttps::" + c)
    }
}
function scbSignOut() {
    try {
        var a = ""
          , b = document.getElementById("vzSignOut") ? document.getElementById("vzSignOut").value : "ssoauth.verizon.com"
          , c = window.location.href.substring(0, -1 < window.location.href.search(/goto=/) ? window.location.href.search(/goto=/) : 999);
        a = -1 < scbreshref.indexOf(".verizon.com/watch") ? "https://" + document.domain + "/watch" : c;
        window.location.href = "https://" + b + "/sso/logout/logout.jsp?target\x3d" + a
    } catch (d) {
        console.log("E - scbSignOut::" + d)
    }
}
function scbSessionTO() {
    try {
        for (var a = ["verizon.com/consumer/myverizon/", "verizon.com/foryourhome", "verizon.com/whatsnext", removeHttps("http://perks.verizon.com"), removeHttps("http://surround.verizon.com"), removeHttps("http://media.verizon.com/media"), removeHttps("http://my.verizon.com"), removeHttps("https://ssoauth.verizon.com"), "essentialsandextras.verizon.com", "verizon.com/mybill/", "verizon.com/autopay/", "verizon.com/payment/", "verizon.com/paymentmethods/", "verizon.com/comparebill/", "verizon.com/billhistory/", "verizon.com/billdetails/", "verizon.com/paperfreebilling/", "verizon.com/disputebill/", "verizon.com/downloadbill/", "verizon.com/adjustments/", "verizon.com/refunds/", "verizon.com/pmthistory/", "verizon.com/paymentarrangement/", "/personal/urc.html", "verizon.com/home/"], b = !1, c = 0; c < a.length; c++)
            if (-1 < scbreshref.indexOf(a[c])) {
                b = !0;
                break
            }
        if (-1 < scbreshref.indexOf("/foryourhome/vzrepair/vziha/servicecad.aspx") || -1 < scbreshref.indexOf("/foryourhome/equickpay/myvzhome/express"))
            b = !1;
        var d = gnav20.getCookie("VOLRememberMe");
        null == d && (d = "");
        "" == d && (d = gnav20.getCookie("isKMSI"),
        null == d && (d = ""));
        "undefined" != typeof d && "" == d && b && (a = "",
        a = -1 < scbreshref.indexOf("wwwawssit.ebiz.verizon.com") || -1 < scbreshref.indexOf("sso-np.ebiz.verizon.com") ? "sit-ssoauth.verizon.com" : "ssoauth.verizon.com",
        document.getElementById("ssoDomainName") && (a = document.getElementById("ssoDomainName").value),
        scbLoadJS(a + "/vzstatic/sso/resources/js/sessionAlert.js"))
    } catch (e) {
        console.log("E - scbSessionTO::" + e)
    }
}
function scbLoadJS(a) {
    try {
        var b = document.getElementsByTagName("head")[0]
          , c = document.createElement("script");
        c.language = "javascript";
        c.type = "text/javascript";
        c.src = "https://" + a;
        b.appendChild(c)
    } catch (d) {
        console.log("E - scbLoadJS::" + d)
    }
}
gnav20.fetchAuthCartCount = function() {
    var a = new XMLHttpRequest;
    a.onreadystatechange = function() {
        if (4 === this.readyState && 200 === this.status) {
            var a = JSON.parse(this.responseText);
            a && a.itemCount.length && a.itemCount[0] && (gnav20.setCookie("gnCartCount", a.itemCount[0]),
            gnav20.setIconCounts());
            gnav20.deleteCookie("checkAuthCartCount");
            gnav20.setCookie("gnCartCountFetched", !0)
        }
    }
    ;
    a.open("POST", "/soe/digital/auth/casemanagementservice/cases/getCaseCartCount", !0);
    a.setRequestHeader("channelId", "VZW-DOTCOM");
    a.setRequestHeader("Content-type", "application/json");
    a.send(JSON.stringify({
        serviceHeader: {
            clientId: "VZW-ECOM",
            serviceName: "GetCases"
        },
        serviceBody: {
            serviceRequest: {
                context: {
                    customerInfo: {
                        accountNumber: ""
                    },
                    contextInfo: {
                        callReason: "SalesOrderPurchase"
                    }
                }
            }
        }
    }))
}
;
gnav20.getCookie("loggedIn") && gnav20.getCookie("checkAuthCartCount") && !gnav20.getCookie("gnCartCountFetched") && !gnav20.getCookie("gnCartCount") && gnav20.fetchAuthCartCount();
gnav20.displaybannerIE = function() {
    bannerIEHTML = '\x3cdiv style\x3d"max-width:1272px; padding:20px 20px 20px 56px; margin:0 auto; font-size:16px;position:relative;line-height:20px;letter-spacing: .5px;"\x3e\x3csvg style\x3d"position:absolute;left:20px;" aria-hidden\x3d"true" width\x3d"20" height\x3d"20" viewBox\x3d"0 0 24 24" focusable\x3d"false"\x3e\x3cg\x3e\x3ccircle vector-effect\x3d"non-scaling-stroke" stroke\x3d"#ffffff" stroke-width\x3d"2" fill\x3d"none" cx\x3d"12" cy\x3d"12" r\x3d"10"\x3e\x3c/circle\x3e\x3crect stroke\x3d"none" fill\x3d"#ffffff" x\x3d"10.99" y\x3d"9.98" width\x3d"2.02" height\x3d"8"\x3e\x3c/rect\x3e\x3crect stroke\x3d"none" fill\x3d"#ffffff" x\x3d"10.98" y\x3d"6" width\x3d"2" height\x3d"2"\x3e\x3c/rect\x3e\x3c/g\x3e\x3c/svg\x3e\x3cspan style\x3d"font-weight:bold"\x3eWe no longer support Internet Explorer\x3c/span\x3e\x3cbr /\x3eFor the best browsing experience, please update your browser. \x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp; \x3ca style\x3d"text-decoration:underline !important" href\x3d"https://www.google.com/chrome/" target\x3d"_blank"\x3eChrome\x3c/a\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp; \x3ca style\x3d"text-decoration:underline !important" href\x3d"https://www.mozilla.org/" target\x3d"_blank"\x3eFirefox\x3c/a\x3e \x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp; \x3ca style\x3d"text-decoration:underline !important" href\x3d"https://www.microsoft.com/en-us/edge" target\x3d"_blank"\x3eEdge\x3c/a\x3e \x3cbutton style\x3d"top:20px;right:20px;width:20px;height:20px;position:absolute;background-image:url(\'data:image/svg+xml;charset\x3dutf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxzdHlsZT4uc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz48bGluZSBjbGFzcz0ic3QxIiB4MT0iMiIgeTE9IjIiIHgyPSIyMiIgeTI9IjIyIi8+PGxpbmUgY2xhc3M9InN0MSIgeDE9IjIiIHkxPSIyMiIgeDI9IjIyIiB5Mj0iMiIvPjwvc3ZnPgo\x3d\') !important;" aria-label\x3d"Close this information banner"\x3e\x3c/button\x3e\x3c/div\x3e';
    gnav20.bannerIEDiv = document.createElement("div");
    gnav20.bannerIEDiv.setAttribute("style", "background:#0077B4");
    gnav20.bannerIEDiv.innerHTML = bannerIEHTML;
    document.querySelector("#vz-gh20 .gnav20-width-wrapper").append(gnav20.bannerIEDiv);
    bannerIEClose = gnav20.bannerIEDiv.querySelector("button");
    bannerIEClose.addEventListener("click", function() {
        gnav20.bannerIEDiv.parentElement.removeChild(gnav20.bannerIEDiv);
        gnav20.setCookie("bannerIEClosed", !0, 30);
        gnav20.adjustSticky && gnav20.adjustSticky()
    })
}
;
