import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

window.gnav20 = window.gnav20 || {};
gnav20.bu = "personal";
gnav20.variation = "";
gnav20.appid = "";
gnav20.state = "prospect";
gnav20.impltype = "";
gnav20.personal = !0;
gnav20.personalization = {
    vcg: !0
};
window.gnavdl = window.gnavdl || {};

gnav20.clearFocusTrap = function() {
  gnav20.focusTrapContainer && (gnav20.focusTrapContainer.removeEventListener("keydown", gnav20.focusTrap),
  gnav20.activeCloseButton = null)
}

gnav20.signInCloseMenu = function(a) {
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
};

gnav20.closeCart = function() {
  var a = document.getElementById("gnav20-my-side-nav")
    , b = document.getElementById("gnav20-cclosex");
  a && b && !a.classList.contains("gnav20-hide") && b.click()
}

function skipToMainContent(event) {
  event.preventDefault();
  document.querySelector("#gnav20-header-end").focus()
}

function signInLinkClick(a) {
  document.querySelector("body.gnav20-using-mouse") && (a = a.target.closest(".gnav20-account-box").querySelector(".gnav20-sign-in span[data-href]:not(.gnav20-hide)")) && (a = a.getAttribute("data-href")) && (location.href = a)
}

function checkCloseL3(a) {
  this.classList.contains("gnav20-open") && !document.body.classList.contains("gnav20-using-mouse") && this.click()
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

function closeMenuL1(a) {
  toggleAriaHiddenGnav20("L1", !1);
  a = a.target || this;
  var b = document.querySelector(".gnav20.gnav20-sticky .gnav20-sticky-content");
  b && b.removeAttribute("style");
  (b = document.querySelector(".gnav20-primary-menu.gnav20-mega-drawer ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild.gnav20-open")) && b.classList.remove("gnav20-open");
  b = document.querySelectorAll(".gnav20-desktop .gnav20-sub-menu");
  for (var i = 0; i < b.length; i++)
      b[i].style.display = "none",
      b[i].classList.remove("gnav20-grouping-active"),
      b[i].classList.remove("gnav20-mega-active"),
      b[i].querySelector(".gnav20-content-wrapper").classList.remove("gnav20-grouping-active"),
      b[i].querySelector(".gnav20-content-wrapper").classList.remove("gnav20-mega-active");
  document.body.classList.contains("gnav20-no-scroll") && !document.body.classList.contains("gnav20-modal-menu-open") && document.body.classList.remove("gnav20-no-scroll");
  if (window.megaColumns) {
      for (var i = b = 0; i < window.megaColumns.length; i++)
          window.megaColumns[i].classList.remove("column" + b + "-transLeft"),
          b++;
      if (b = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2"))
          for (var i = 0; i < b.length; i++)
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
      for (var i = 0; i < c.length; i++)
          c[i].classList.remove("gnav20-open");
      b.setAttribute("aria-expanded", "false")
  }
  if (c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2, .gnav20-desktop .gnav20-featured-card .gnav20-submenu-column.gnav20-L2"))
      for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < a.length; i++)
          a[i].style.display = "none";
  b.closest(".gnav20-desktop") && b.closest(".gnav20-submenu-column.gnav20-L2") && b.closest(".gnav20-submenu-column.gnav20-L2").querySelector(".gnav20-submenu-column.gnav20-L3") && (b.closest(".gnav20-submenu-column.gnav20-L2").querySelector(".gnav20-submenu-column.gnav20-L3").style.display = "none")
}

function toggleMenuL1(a) {
  a.preventDefault();
  "false" == (a.target || this).getAttribute("aria-expanded") ? openMenuL1(a) : (a.target.closest(".gnav20-featured-card") || "vecXXX" == gnav20.bu) && closeMenuL1(a)
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

function openMenuL1(a) {
  a && a.target.closest(".gnav20-desktop") && (gnav20.signInCloseMenu(),
  gnav20.closeCart());
  toggleAriaHiddenGnav20("L1", !0);
  var b = a.target || this
    , c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) .gnav20-submenu-column.gnav20-L2");
  for (var i = 0; i < c.length; i++)
      c[i].style.display = "none";
  c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card:not(.gnav20-featured-grouping) .gnav20-submenu-column.gnav20-L3");
  for (var i = 0; i < c.length; i++)
      c[i].style.display = "none";
  c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L1 \x3e li \x3e a.gnav20-haschild");
  for (var i = 0; i < c.length; i++)
      c[i].classList.remove("gnav20-open"),
      c[i].setAttribute("aria-expanded", !1);
  c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card:not(.gnav20-featured-grouping) ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
  for (var i = 0; i < c.length; i++)
      c[i].classList.remove("gnav20-open"),
      c[i].setAttribute("aria-expanded", !1);
  if (a.target.closest(".gnav20-featured-card") && a.target.closest(".gnav20-desktop")) {
      c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-desktop .gnav20-featured-card .gnav20-left-featured-card, .gnav20-desktop .gnav20-featured-card .gnav20-right-featured-card");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "block";
      document.body.classList.add("gnav20-no-scroll");
      gnav20.activeCloseButton = a.target.closest(".gnav20-featured-card").querySelector(".gnav20-nav-close")
  }
  a.target.closest(".gnav20-L1-aligned") && a.target.closest(".gnav20-desktop") && a.target.closest(".gnav20-L1-aligned").querySelector(".gnav20-content-wrapper") && (a.target.closest(".gnav20-L1-aligned").querySelector(".gnav20-content-wrapper").style.marginLeft = a.target.offsetLeft - 40 + "px");
  if (b.closest(".gnav20-desktop") && b.closest(".gnav20-primary-menu") && b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu")) {
      document.activeElement && !a.target.closest(".gnav20-featured-card") && document.activeElement.blur();
      a = b.closest(".gnav20-global-nav-list.gnav20-navigation-list").querySelectorAll(".gnav20-menu-label-button");
      for (var i = 0; i < a.length; i++)
          a[i].setAttribute("aria-expanded", !1);
      var d = b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu");
      d.style.display = "flex";
      b.setAttribute("aria-expanded", "true");
      a = document.querySelectorAll(".gnav20-desktop .gnav20-sub-menu");
      for (var i = 0; i <= a.length - 1; i++)
          a[i] != d && (a[i].style.display = "none");
      window.selectedMenu = d;
      setTimeout(function() {
          var a = window.selectedMenu.closest(".gnav20-mega-drawer");
          var addClass = a ? "gnav20-mega-active" : "gnav20-grouping-active";
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
          for (var i = 0; i < a.length; i++)
              a[i].classList.remove("gnav20-open"),
              a[i].setAttribute("aria-expanded", "false");
          a = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2");
          for (var i = 0; i < a.length; i++)
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
                      for (var i = 0; i <= a.length - 1; i++)
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
      for (var i = 0; i < c.length; i++)
          c[i].classList.add("gnav20-non-header");
      c = document.querySelectorAll(".gnav20-mobile .gnav20-submenu-column ul.gnav20-submenu-column.gnav20-L1 \x3e li");
      b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow") && b.closest(".gnav20-mobile").querySelector(".gnav20-autoflow").classList.remove("gnav20-autoflow");
      b.closest(".gnav20-mobile .gnav20-primary-menu").querySelector(".gnav20-sub-menu").classList.add("gnav20-autoflow");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "block";
      null != b.nextElementSibling && (b.nextElementSibling.setAttribute("aria-expanded", "true"),
      window.mySubMenuTarget = b.nextElementSibling,
      setTimeout("window.mySubMenuTarget.focus()", 4));
      c = document.querySelectorAll(".gnav20-mobile .gnav20-eyebrow .gnav20-main-header.gnav20-selected");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "none";
      b.closest(".gnav20-primary-menu").querySelector(".gnav20-sub-menu").style.display = "block";
      c = b.closest(".gnav20-mobile").querySelectorAll(".gnav20-primary-menu");
      for (var i = 0; i < c.length; i++)
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

function openMenuL2(a) {
  if (!gnav20.megaL2hover || !gnav20.megaL2hover.parentElement || gnav20.megaL2hover.parentElement == gnav20.megaL2hover.parentElement.parentElement.querySelector(":hover") || "none" != window.getComputedStyle(gnav20.mobileHeader).getPropertyValue("display")) {
      if (a && a.target) {
          gnav20.megaL2hover = null;
          var b = a.target
      } else
          b = gnav20.megaL2hover ? gnav20.megaL2hover : this;
      var c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-isactive \x3e li \x3e a, .gnav20-desktop .gnav20-featured-card .gnav20-isactive \x3e li \x3e a.gnav20-haschild");
      for (var i = 0; i < c.length; i++)
          c[i].classList.remove("gnav20-open"),
          c[i].setAttribute("aria-expanded", "false");
      c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
      for (var i = 0; i < c.length; i++)
          c[i].classList.remove("gnav20-open"),
          c[i].setAttribute("aria-expanded", "false");
      b.classList && (b.classList.add("gnav20-open"),
      b.setAttribute("aria-expanded", "true"),
      b.focus());
      if (b.closest && b.closest(".gnav20-featured-card")) {
          c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-featured-card .gnav20-L2-featured-card");
          for (var i = 0; i < c.length; i++)
              c[i].style.display = "block";
          columnHighlight2(a, !1)
      }
      c = document.querySelectorAll(".gnav20-desktop .gnav20-mega-drawer .gnav20-submenu-column.gnav20-L2, .gnav20-desktop .gnav20-featured-card .gnav20-submenu-column.gnav20-L2");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "none";
      c = document.querySelectorAll(".gnav20-desktop .gnav20-primary-menu.gnav20-featured-card .gnav20-submenu-column.gnav20-L3");
      for (var i = 0; i < c.length; i++)
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
          for (var i = 0; i < c.length; i++)
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
              for (var i = 0; i < d.length; i++)
                  d[i].style.display = "none";
              b.parentElement.style.display = "block";
              b.closest(".gnav20-primary-menu.gnav20-current").querySelector(".gnav20-goback").style.display = "none";
              for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "none";
      if (a.target.closest(".gnav20-featured-card")) {
          c = a.target.closest(".gnav20-featured-card").querySelectorAll(".gnav20-featured-card .gnav20-L2-featured-card");
          for (var i = 0; i < c.length; i++)
              c[i].style.display = "none";
          columnHighlight2(a, !1)
      }
      c = document.querySelectorAll(".gnav20-desktop .gnav20-featured-card ul.gnav20-submenu-column.gnav20-L2 \x3e li \x3e a.gnav20-haschild");
      for (var i = 0; i < c.length; i++)
          c[i].classList.remove("gnav20-open"),
          c[i].setAttribute("aria-expanded", "false");
      b.classList.add("gnav20-open");
      b.setAttribute("aria-expanded", "true");
      c = b.closest("ul.gnav20-submenu-column.gnav20-L2 \x3e li").querySelectorAll(".gnav20-submenu-column.gnav20-L3");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "block",
          b.closest(".gnav20-featured-card") && c[i].classList.add("gnav20-column-highlight");
      if (b.closest(".gnav20-mobile")) {
          c = b.closest(".gnav20-primary-menu").querySelectorAll("ul.gnav20-submenu-column.gnav20-L2 \x3e li");
          for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < d.length; i++)
          d[i].classList.remove("gnav20-non-header");
      for (var i = 0; i < c.length; i++)
          c[i].style.display = "block";
      c = b.closest(".gnav20-mobile").querySelectorAll(".gnav20-primary-menu");
      for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < d.length; i++)
          d[i].style.display = "block";
      b.closest(".gnav20-primary-menu.gnav20-current").querySelector(".gnav20-goback").style.display = "";
      for (var i = 0; i < c.length; i++)
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
      for (var i = 0; i < b.length; i++)
          b[i].classList.remove("gnav20-dont-show-in-mobile"),
          b[i].classList.remove("gnav20-current");
      a.closest("ul.gnav20-submenu-column.gnav20-L1 \x3e li").querySelector(".gnav20-goback").classList.remove("gnav20-dont-show-in-mobile");
      (a = a.closest(".gnav20-mobile ul.gnav20-submenu-column.gnav20-L2 \x3e li")) && a.querySelector("a.gnav20-goback") && (a.querySelector("a.gnav20-goback").setAttribute("aria-expanded", "false"),
      a.querySelector("a.gnav20-haschild").setAttribute("aria-expanded", "false"),
      a.querySelector("a.gnav20-haschild").focus());
      gnav20.setFocusTrap(gnav20.mobileMenu)
  }
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

function signinContentHide() {
  var a = document.querySelectorAll(".gnav20-mobile .gnav20-dropdown-menu")
    , b = document.querySelector("#gnav20-mobile-menu .gnav20-eyebrow");
  for (var i = 0; i < a.length; i++)
      a[i].classList.add("gnav20-hide");
  b && b.classList.remove("gnav20-hide");
  document.querySelector("#gnav20-mobile-menu #gnav20-ulwrapper").classList.remove("gnav20-hide");
  toggleAriaHiddenGnav20("signin", !1);
  gnav20.toggleMobileSignInHideEls("block");
  gnav20.clearFocusTrap(gnav20.mobileMenu);
  document.querySelector(".gnav20-mobile #gnav20-mobile-menu #gnav20-footerlink .gnav20-account-utility .gnav20-sign-in") && document.querySelector(".gnav20-mobile #gnav20-mobile-menu #gnav20-footerlink .gnav20-account-utility .gnav20-sign-in").focus()
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
      for (var i = 0; i < d.length; i++) {
          var e = d[i];
          e.children && e.children.length && !e.querySelector(".gnav20-desktop") && e.setAttribute("aria-hidden", b)
      }
      if (c[a])
          for (var i = 0; i < c[a].length; i++)
              var ii = 0;
              for (e = document.querySelectorAll(c[a][i]),
              ii = 0; ii < e.length; ii++)
                  e[ii].setAttribute("aria-hidden", b)
  } else
      gnav20.togOverlay = a,
      gnav20.togBool = b,
      setTimeout(toggleAriaHiddenGnav20(gnav20.togOverlay,gnav20.togBool,true), 100)
}

function removeDuplicateIDs() {
  var a = document.querySelectorAll(".gnav20 .gnav20-eyebrow-link-list-item a");
  if ("smb" == gnavdl.bu && /meganav/.test(gnavdl.appid) && 4 == a.length)
      a[0].id = a[2].id = "gnav20-eyebrow-link-Personal",
      a[1].id = a[3].id = "gnav20-eyebrow-link-Business";
  else
      for (var i = 0; i < a.length; i++)
          a[i].id = a[i].id.replace(/[^a-zA-Z0-9-:_\.]/g, "-") || "eyebrow_" + i;
  a = document.querySelectorAll(".gnav20 .gnav20-mobile [id]");
  for (var i = 0; i < a.length; i++)
      document.querySelector(".gnav20 .gnav20-desktop #" + a[i].id) && (a[i].id += "-mobile",
      a[i] && a[i].classList && a[i].classList.contains("gnav20-goback") && (a[i].id += "-goback"))
}

function customizeButtons() {
  var a = document.querySelectorAll(".gnav20-mobile a.gnav20-haschild, .gnav20-desktop .gnav20-featured-card a.gnav20-haschild");
  for (var i = 0; i < a.length; i++)
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
  // (b = document.querySelector("#gnav20-language-selection-footer-default")) && b.addEventListener("focus", function() {
  //     /gnav20-hide/.test(document.querySelector(".gnav20-dropdown-footer-menu").classList) || languageFooterShowHide()
  // });
  // b && b.addEventListener("blur", checklanguageFocus);
  // if (a = document.querySelectorAll(".gnav20-dropdown-footer-menu .gnav20-footer-lang .gnav20-footer-list .gnav20-language-item-footer"))
  //     for (b = 0; b < a.length; b++)
  //         a[b].removeEventListener("blur", checkLanguageSelectionItemFooterFocus),
  //         a[b].addEventListener("blur", checkLanguageSelectionItemFooterFocus)
}

gnav20.initNav = function() {
  var a = document.querySelector("#gnav20-skip-to-main-content-id");
  a && (a.removeEventListener("click", skipToMainContent),
  a.addEventListener("click", skipToMainContent));

  var b = document.querySelectorAll(".gnav20 .gnav20-utility .gnav20-sign-in:not(.gnav20-hasDropdown)");
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
  var blankStuff = document.querySelectorAll(".gnav20 .gnav20-desktop .gnav20-row-one,.gnav20 .gnav20-desktop .gnav20-row-two .gnav20-navigation,.gnav20 .gnav20-desktop .gnav20-row-two .gnav20-utility");
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
};

function hasRole(str) {
  const regex = /\|([^|]+)\|/;
  const delimiter = '=';
  const match = str.match(regex);
  return (match && match[1].includes(delimiter));
}

function hasShowFor(str) {
  return str.startsWith('|show-for=');
}

function getRoleAttr(str) {
  const regex = /\|([^|]+)\|/;
  const delimiter = '=';
  const match = str.match(regex);
  let result = "";
  if (match && match[1].includes(delimiter)) {
    const extractedText = match[1].split(delimiter);
    result = `${extractedText[0]}='${extractedText[1]}'`;
  }
  return result;
}

function getRoleText(str) {
  const parts = str.split('|');
  if (parts.length > 1) {
    const lastIndex = parts.length - 1;
    return parts[lastIndex];
  } else {
    return str;
  }
}

function hyphenizeSpaces(str) {
  return str.replace(/\s/g, '-');
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const gNav = document.createElement('div');
    gNav.classList.add('gnav20', 'gnav20-sticky');
    gNav.innerHTML = `
      <input type="hidden" id="cradle-context">
      <div class="gnav20-sticky-content"> 
        ${html}
      </div>
    `;
    
    const gNavRaw = gNav.querySelector('.gnav20-sticky-content');
    const gNavDecorated = document.createElement('div');
    gNavDecorated.classList.add('gnav20-apicomponentnewdesign');

    // Accessibility Top Links
    const a11yTopLinksRaw = gNavRaw.children[0].querySelectorAll('a');
    const a11yTopLinksDecorated = `
    <a class="gnav20-header-accessibility" tabindex="0" 
      href="${a11yTopLinksRaw[0].href}" 
      data-track="global nav:accessibility resource center" 
      aria-hidden="true">
      <span>${a11yTopLinksRaw[0]}</span>
    </a>
    <a class="gnav20-header-accessibility" tabindex="0" 
      href="${a11yTopLinksRaw[1].href}"  
      id="gnav20-skip-to-main-content-id" 
      data-track="global nav:skip to main content" 
      aria-hidden="true">
      <span>${a11yTopLinksRaw[1]}</span>
    </a>
    `

    const eyebrowLinksRaw = gNavRaw.children[1].querySelectorAll('a');
    const eyebrowLinksDecorated = `
      <a id="gnav20-eyebrow-link-Personal" 
        href="${eyebrowLinksRaw[0].href}" 
        data-stext="Switch to" 
        data-label="${eyebrowLinksRaw[0].text}" 
        aria-label="Verizon ${eyebrowLinksRaw[0].text} Services HomePage" 
        class="gnav20-main-header gnav20-selected" 
        data-track="global nav:personal">
        ${eyebrowLinksRaw[0].text}
      </a>
      <a id="gnav20-eyebrow-link-Business" 
        href="${eyebrowLinksRaw[1].href}" 
        data-stext="Switch to" 
        data-label="${eyebrowLinksRaw[1].text}" 
        aria-label="Verizon ${eyebrowLinksRaw[1].text} Services HomePage" 
        class="gnav20-main-header " 
        data-track="global nav:business">
        ${eyebrowLinksRaw[1].text}
      </a>
    `

    const utilityLinksRaw = gNavRaw.children[2].querySelectorAll('a');
    const utilityLinkDecorated = `
      <a aria-label="${utilityLinksRaw[0].text}" 
        href="${utilityLinksRaw[0].href}" 
        data-label="${utilityLinksRaw[0].text}" 
        data-track="global nav:stores">
        ${utilityLinksRaw[0].text}
      </a>
    `
    const localeLinkDecorated = `
      <a class="gnav20-lang-link" 
        aria-label="Switch to ${utilityLinksRaw[1].text} language website" 
        data-href="${utilityLinksRaw[1].href}" 
        href="${utilityLinksRaw[1].href}" 
        data-lang="${utilityLinksRaw[1].text}" mporgnav="" 
        data-label="${utilityLinksRaw[1].text}" 
        data-track="global nav:espanol">
        ${utilityLinksRaw[1].text}
      </a>
    `

    const navSectionsRaw = gNavRaw.children[3].querySelectorAll(':scope > ul > li');
    const navSectionsDecorated = `
      ${[...navSectionsRaw].map((navSection, index) => {
        const navSectionTitle = navSection.querySelector(':scope > a');
        const navL1List = navSection.querySelectorAll(':scope > a + ul > li');
        const navL1ListItems = [...navL1List];
        navL1ListItems.splice(0, 2);
        return `
          <div class="gnav20-navigation-item">
            <div class="gnav20-primary-menu gnav20-featured-card">
              <button id="gnav20-${navSectionTitle.innerText}-L1" 
                aria-label="${navSectionTitle.innerText} Menu List" 
                class="gnav20-menu-label gnav20-menu-label-button gnav20-haschild" 
                data-track="global nav:shop menu list" aria-expanded="false">
                ${navSectionTitle.innerText}
              </button>
              <button id="gnav20-${navSectionTitle.innerText}-L1-goback" 
                aria-label="${navSectionTitle.innerText} Menu List" 
                aria-expanded="false" 
                class="gnav20-menu-label gnav20-menu-label-button gnav20-goback" 
                data-track="global nav:shop menu list:go back">
                ${navSectionTitle.innerText}
              </button>
              <a aria-hidden="true" class="gnav20-menu-label-link" 
                href="${navSectionTitle.href}" tabindex="-1" 
                data-track="global nav:shop menu list">
                ${navSectionTitle.innerText}
              </a>
              <div class="gnav20-sub-header-menu gnav20-sub-menu gnav20-grouping-active" style="display: none;">
                <div class="gnav20-nav-utility">
                  <button class="gnav20-nav-search-icon" aria-label="${navL1List[0].innerText}" data-track="global nav:search verizon">
                  <button class="gnav20-nav-close" aria-label="${navL1List[1].innerText} Nav Panel" tabindex="0" data-track="global nav:close">${navL1List[1].text}</button>
                </div>
                <div class="gnav20-content-wrapper gnav20-grouping-active"> 
                  <div class="gnav20-featured-card-top-label gnav20-column-highlight">
                    ${navL1List[2].firstChild.textContent}
                  </div> 
                  <ul class="gnav20-submenu-column gnav20-L1 gnav20-featured-scroll-area gnav20-column-highlight" role="none">
                  ${navL1ListItems.map((navL1Item, index) => {
                    const links = navL1Item.querySelectorAll(':scope > a');
                    const navL2List = navL1Item.querySelectorAll(':scope > ul > li');
                    const isLink = links.length && !hasRole(links[0].text);
                    const isRoleSpecific = links.length && hasRole(links[0].text);
                    const isMenu = links.length == 0 && navL2List.length;

                    return `
                      ${isLink ? `
                      <li>
                        <a id="gnav20-${navSectionTitle.innerText}-L2-${index+1}" 
                          href="${links[0].href}" 
                          data-track="global nav:shop:shop all">
                          ${links[0].innerText}
                        </a>
                        <div class="gnav20-L2-content-wrapper"></div>
                      </li>
                      ` : ``}
                      ${isRoleSpecific ? `
                      <li ${hasShowFor(links[0].innerText) ? `class="gnav20-hide"` : ``}>
									      <a ${getRoleAttr(links[0].innerText)} 
                        id="gnav20-${hyphenizeSpaces(navSectionTitle.innerText)}-L2-${index+1}" 
                        href="${links[0].href}" 
                        data-track="global nav:shop:+play">
                          ${getRoleText(links[0].innerText)}
									      </a>
								        <div class="gnav20-L2-content-wrapper"></div>
                      </li>
                      ` : ``}
                      ${isMenu ? `
                      <li class="gnav20-bold-link gnav20-column-break">
                        <a id="gnav20-${hyphenizeSpaces(navSectionTitle.innerText)}-L2-${index+1}" 
                          class="gnav20-haschild" 
                          href="javascript:void(0)" 
                          aria-expanded="false" 
                          role="button" 
                          aria-label="${navL1Item.firstChild.innerText} menu list" 
                          data-track="global nav:shop:deals menu list">
                          ${navL1Item.firstChild.textContent}
                        </a>
                        <a id="gnav20-${hyphenizeSpaces(navSectionTitle.innerText)}-L2-${index+1}-goback" 
                          class="gnav20-goback gnav20-hide-on-desktop" 
                          href="javascript:void(0)" 
                          aria-label="${navL1Item.firstChild.innerText} menu list" 
                          aria-expanded="false" 
                          role="button" 
                          data-track="global nav:shop:deals menu list:go back">
                          ${navL1Item.firstChild.textContent}
                        </a>
                        <div class="gnav20-L2-content-wrapper">   
                          <div class="gnav20-submenu-column gnav20-L2 gnav20-featured-card-top-label" 
                            style="display:none">
                            ${navL1Item.firstChild.textContent}
                            <ul item-title="L2" class="gnav20-submenu-column gnav20-featured-scroll-area gnav20-L2 gnav20-mega-column-0" style="display:none">
                            ${[...navL2List].map((navL2Item, indexL2) => {
                              const links = navL2Item.querySelectorAll(':scope > a');
                              const isLink = links.length && !hasRole(links[0].text);
                              const isRoleSpecific = links.length && hasRole(links[0].text);
                              return `
                              ${isLink ? `
                              <li>
                                <a id="gnav20-${hyphenizeSpaces(navSectionTitle.innerText)}-L3-${index+1}${indexL2+1}" 
                                href="${links[0].href}" 
                                data-track="global nav:shop:deals:shop all deals">
                                ${links[0].innerText}
                                </a>
                              </li>
                              ` : ``}
                              ${isRoleSpecific ? `
                              <li ${hasShowFor(links[0].innerText) ? `class="gnav20-hide"` : ``}>
                                <a ${getRoleAttr(links[0].innerText)} 
                                id="gnav20-${hyphenizeSpaces(navSectionTitle.innerText)}-L3-${index+1}${indexL2+1}" 
                                href="${links[0].href}" 
                                data-track="global nav:shop:+play">
                                  ${getRoleText(links[0].innerText)}
                                </a>
                              </li>
                              ` : ``}
                              `
                            }).join("")} 
                            </ul>
                          </div>
                        </div>
                      </li>
                      ` : ``}
                    `
                  }).join("")}
                  </ul>
                </div>
                <div class="gnav20-nav-mask">&nbsp;</div>
                <div class="gnav20-placeholder-1" style="display:none"></div>
              </div>  
            </div>
          </div>
        `
      }).join("")}
    `;

    const sideNavRaw = gNavRaw.children[4].querySelectorAll(':scope > ul > li');
    const sideNavDecorated = `
      <div class="gnav20-account-utility">
        <div class="gnav20-utility-wrapper " item-title="signIn">
          <input type="hidden" id="vzSignOut" value="ssoauth.verizon.com">
          <div class="gnav20-account-box" id="gnav20-account-menu">
            <button id="gnav20-sign-id" class="gnav20-sign-in gnav20-hasDropdown  " aria-expanded="false"
              aria-label="sign in menu" data-track="global nav:sign in menu">
              <span data-href="https://secure.verizon.com/signin">
                <span>
                  ${sideNavRaw[0].innerText}
                </span>
              </span>
            </button>
            <div class="gnav20-dropdown-menu gnav20-hide " id="gnav20-sign-in">
              <button class="gnav20-close-account-utility" aria-label="close the ${sideNavRaw[0].innerText} Menu" tabindex="0"
                data-track="global nav:close">${sideNavRaw[1].innerText}</button>
              <p class="gnav20-signin-content-title">${sideNavRaw[2].innerText}</p>
              <ul class="gnav20-dropdown">
                <li class="gnav20-dropdown-list gnav20-hide-on-desktop gnav20-goback">
                  <button class="gnav20-back-to-menu " aria-label="${sideNavRaw[3].innerText}" tabindex="0"
                    data-track="global nav:back to menu:go back">${sideNavRaw[3].innerText}</button>
                </li>
                ${
                  [...sideNavRaw[3].querySelectorAll(':scope > li')].map((sideNavL2Item, index) => {
                    const links = sideNavL2Item.querySelectorAll(':scope > a');
                    return `
                    <li class="gnav20-dropdown-list">
                      <a data-hide-for="appid:vpd" id="gnav20-sign-id-list-item-${index + 1}" class="gnav20-dropdown-list-item"
                        href="${ links[0].href }" tabindex="0" data-track="global nav:sign in to my account">${ links[0].text }</a>
                    </li>
                    `
                }).join('')}
              </ul>
            </div>
            <div class="gnav20-vzmoverlay"></div>
          </div>
        </div>
      </div>
    `;
    
    // Width Wrapper
    const widthWrapperDecorated = `
      <div class="gnav20-width-wrapper gnav20-new-design gnav20-promo-bottom gnav20-featured" 
        data-gnav20-container="header">	
	      <div class="gnav20-vzhmoverlay" style="height: 0px;"></div>
        <div class="gnav20-main">
          <div class="gnav20-gnav-new-design">
            <div class="gnav20-desktop" item-title="all">
              <div class="gnav20-row-one opacityOne" aria-hidden="true">
                <div class="gnav20-grid1-wrapper">
                  <div class="gnav20-eyebrow">
                    <div class="gnav20-eyebrow-link-list" item-title="eyebrow">
                      <div class="gnav20-eyebrow-link-list-item gnav20-two">
                        ${eyebrowLinksDecorated}
                      </div>
                      <input type="hidden" id="gnav20-lob-link-label">
                    </div>
                  </div>
                </div>
                <div class="gnav20-utility" aria-hidden="false">
                  <div class="gnav20-store">
                    <div class="gnav20-utility-wrapper" item-title="store">
	                    <div>
                        ${utilityLinkDecorated}			
		                  </div>
                    </div>
                  </div>

                  <div class="gnav20-localization">
		                <div class="gnav20-utility-wrapper " item-title="localization">
                      ${localeLinkDecorated}
                    </div>
                  </div>
                </div>
              </div>
              <div class="gnav20-row-two">
		            <div class="gnav20-grid1-wrapper">
                  <div class="gnav20-logo" aria-hidden="true">
                    <div class="gnav20-logo-wrapper gnav20-relative-index">
                      <a class="gnav20-logoWhiteBg" 
                        href="https://www.verizon.com/" 
                        title="Verizon Home Page" 
                        data-track="global nav:verizon home page">
                        <!-- img alt="Verizon Logo" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iNDI4IiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQyOCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDI1MEg3Ny43MkwxNTUuNDMgNDE2LjY3TDM0OS43MyAwSDQyNy40NUwxOTQuMjkgNTAwSDExNi41OEwwIDI1MFoiIGZpbGw9IiNFRTAwMDAiLz4KPC9zdmc+Cg=="/ -->
                      </a>
                    </div>
                  </div>
                </div>
                <div class="gnav20-navigation opacityOne" aria-hidden="true">
                  <div class="gnav20-navigation opacityOne" aria-hidden="true">
                    <div class="gnav20-global-nav-list gnav20-navigation-list" item-title="L1">
                      ${navSectionsDecorated}
                    </div>
                  </div>
                </div>
                <div class="gnav20-utility opacityOne" aria-hidden="false">
                  ${sideNavDecorated}
                  <div class="gnav20-unifiedcart">
                    <div class="gnav20-utility-wrapper" item-title="unifiedCart">
                      <div>
                        <button id="gnav20-cart-icon" class="gnav20-cart" aria-label="Shopping Cart Menu 0 items in the cart"
                          aria-expanded="false" data-track="global nav:shopping cart menu 0 items in the cart">
                          <span class="gnav20-unifiedcart-bubble" style="display: none;">0</span>
                        </button>
                        <div id="gnav20-my-side-nav" class="gnav20-unified-cart gnav20-hide gnav20-unified-cart-right">
                          <button id="gnav20-cclosex" class="gnav20-closex" aria-label="Close Shopping Cart"
                            data-track="global nav:close shopping cart"></button>
                          <p class="gnav20-cart-content-title">Choose your cart</p>
                          <div class="gnav20-content-lists">
                            <div class="gnav20-content-list">
                              <div class="gnav20-content-list-flex">
                                <div>
                                  <a id="gnav20-cart-list-item-1" class="gnav20-content-list-arrow gnav20-mobile-cart-count" href="#"
                                    data-track="global nav:mobile solutions">Mobile solutions</a>
                                </div>
                              </div>
                            </div>
                            <div class="gnav20-content-list">
                              <div class="gnav20-content-list-flex">
                                <div>
                                  <a id="gnav20-cart-list-item-2" class="gnav20-content-list-arrow gnav20-home-cart-count"
                                    href="https://www.verizon.com/inhome/resumecart?xpssource=learn&amp;gnavOffSearchFlag=true"
                                    data-track="global nav:home solutions">Home solutions</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gnav20-search-utility">
                    <div class="gnav20-utility-wrapper" item-title="search">
                      <div class="gnav20-search-wrapper">
                        <input type="hidden" id="gnav20-search-context" name="isProd" value="true">
                        <div id="gnav20-search-escontext"
                          data-json="{'ResidentialShop':['verizon.com/home','verizon.com/local','verizon.com/info','/home/storelocator','verizon.com/inhome','verizon.com/?lid\u003d'],'ResidentialAccessories':['verizon.com/home/accessories'],'ResidentialSupport':['/support/residential','verizon.com/support/consumer','forums.verizon.com','my.verizon.com/services','verizon.com/fiostv/selfinstall','verizon.com/whatsnext/residential','verizon.com/speedtest'],'ResidentialMyVerizon':['/Support','tv.verizon.com','verizon.com/foryourhome','ssoauth.verizon.com','verizon.com/fiostv','verizon.com/ondemand','verizon.com/consumer/myverizon','verizon.com/watch'],'EntSupport':['enterprise.verizon.com/terms/','enterprise.verizon.com/publications/','enterprise.verizon.com/support'],'MobileSupport':['.com/support','.com/solutions-and-services'],'MobileMyVerizon':['.com/ui','.com/vzw','.com/myv','.com/blocks','.com/my-verizon/'],'MobileAccessories':['.com/products'],'EntLearn':['enterprise.verizon.com','enterprise.verizon.com/products/','enterprise.verizon.com/why-verizon/','enterprise.verizon.com/solutions/','enterprise.verizon.com/resources/','enterprise.verizon.com/support/','enterprise.verizon.com/campaigns/','enterprise.verizon.com/solutions/public-sector/'],'SMBSupport':['verizon.com/business/support/','b2b.verizonwireless.com/content/'],'MyBusiness':['business.verizon.com','verizon.com/whatsnext/business/'],'SMBLearn':['verizon.com/business/'],'SMBwireless':['verizonwireless.com/business/'],'Corporate':['verizon.com/about'],'MobileShop':['verizon.com/personal-home','verizonwireless.com/?intcmp\u003d']}">
                        </div>
                        <button class="gnav20-search-icon" id="gnav20-search-icon" aria-label="Search Verizon"
                          data-track="global nav:search verizon"></button>
                      </div>
                    </div>
                  </div>
                </div>	
              </div>
            </div>

            <div class="gnav20-mobile  gnav20-stacked-utility" item-title="all">
	            <div class="gnav20-wrapper-logo">
		            <div class="gnav20-logo" aria-hidden="true">
                  <div class="gnav20-logo-wrapper gnav20-relative-index">
                    <a class="gnav20-logoWhiteBg" 
                      href="https://www.verizon.com/" 
                      title="Verizon Home Page" 
                      data-track="global nav:verizon home page">
                      <!-- img alt="Verizon Logo" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iNDI4IiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQyOCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDI1MEg3Ny43MkwxNTUuNDMgNDE2LjY3TDM0OS43MyAwSDQyNy40NUwxOTQuMjkgNTAwSDExNi41OEwwIDI1MFoiIGZpbGw9IiNFRTAwMDAiLz4KPC9zdmc+Cg=="/ -->
                    </a>
                  </div>
                </div>
              </div>

              <div class="gnav20-utility" aria-hidden="false">
                  <div class="gnav20-account-utility">
                    <div class="gnav20-utility-wrapper " item-title="signIn">
                      <input type="hidden" id="vzSignOut-mobile" value="ssoauth.verizon.com">
                      <div class="gnav20-account-box" id="gnav20-account-menu-mobile">
                        <button id="gnav20-sign-id-mobile" class="gnav20-sign-in gnav20-hasDropdown  " aria-expanded="false"
                          aria-label="sign in menu" data-track="global nav:sign in menu">
                          <span data-href="https://secure.verizon.com/signin">
                            <span>
                              Sign in
                            </span>
                          </span>
                        </button>
                        <div class="gnav20-dropdown-menu gnav20-hide " id="gnav20-sign-in-mobile">
                          <button class="gnav20-close-account-utility" aria-label="close the Sign In Menu" tabindex="0"
                              data-track="global nav:close">Close</button>
                          <p class="gnav20-signin-content-title">Sign in</p>
                          <ul class="gnav20-dropdown gnav20-fixed-top gnav20-navigation-item">
                            <li class="gnav20-dropdown-list gnav20-hide-on-desktop gnav20-goback">
                              <button class="gnav20-back-to-menu " aria-label="Back to Menu" tabindex="0"
                                data-track="global nav:back to menu:go back">Back to Menu</button>
                            </li>
                            <li class="gnav20-dropdown-list">
                              <a data-hide-for="appid:vpd" id="gnav20-sign-id-list-item-1-mobile"
                                class="gnav20-dropdown-list-item" href="https://secure.verizon.com/signin" tabindex="0"
                                data-track="global nav:sign in to my account">Sign in to My Account</a>
                            </li>
                            <li class="gnav20-dropdown-list gnav20-hide">
                              <a data-show-for="appid:vpd" id="gnav20-sign-id-list-item-2-mobile"
                                class="gnav20-dropdown-list-item" href="https://www.verizon.com/privacy/secure/your-data"
                                tabindex="0" data-track="global nav:sign in to my account">Sign in to My Account</a>
                            </li>
                            <li class="gnav20-dropdown-list ">
                              <a id="gnav20-sign-id-list-item-3-mobile" class="gnav20-dropdown-list-item"
                                href="https://secure.verizon.com/account/register/start" tabindex="0"
                                data-track="global nav:register">Register</a>
                            </li>
                            <li class="gnav20-dropdown-list ">
                              <a id="gnav20-sign-id-list-item-4-mobile" class="gnav20-dropdown-list-item"
                                href="https://myvprepay.verizon.com/prepaid/ui/mobile/InstantPay/" tabindex="0"
                                data-track="global nav:prepaid instant pay">Prepaid instant pay</a>
                            </li>
                            <li class="gnav20-dropdown-list ">
                              <a id="gnav20-sign-id-list-item-5-mobile" class="gnav20-dropdown-list-item"
                                href="https://www.verizon.com/sales/digital/Favorites.html" tabindex="0"
                                data-track="global nav:wishlist">Wishlist</a>
                            </li>
                            <li class="gnav20-dropdown-list ">
                              <a id="gnav20-sign-id-list-item-6-mobile" class="gnav20-dropdown-list-item"
                                href="https://mblogin.verizonwireless.com/account/business/signin" tabindex="0"
                                data-track="global nav:business log in">Business Log in</a>
                            </li>
                          </ul>
                        </div>
                        <div class="gnav20-vzmoverlay"></div>
                      </div>
                    </div>
                  </div>
                  <div class="gnav20-unifiedcart">
                    <div class="gnav20-utility-wrapper" item-title="unifiedCart">
                      <div>
                        <button id="gnav20-cart-icon-mobile" class="gnav20-cart" aria-label="Shopping Cart Menu 0 items in the cart"
                          aria-expanded="false" data-track="global nav:shopping cart menu 0 items in the cart">
                          <span class="gnav20-unifiedcart-bubble" style="display: none;">0</span>
                        </button>
                        <div id="gnav20-my-side-nav-mobile" class="gnav20-unified-cart gnav20-hide gnav20-unified-cart-right">
                          <button id="gnav20-cclosex-mobile" class="gnav20-closex" aria-label="Close Shopping Cart"
                              data-track="global nav:close shopping cart"></button>
                          <p class="gnav20-cart-content-title">Choose your cart</p>
                          <div class="gnav20-content-lists">
                            <div class="gnav20-content-list">
                              <div class="gnav20-content-list-flex">
                                <div>
                                  <a id="gnav20-cart-list-item-1-mobile"
                                    class="gnav20-content-list-arrow gnav20-mobile-cart-count" href="#"
                                    data-track="global nav:mobile solutions">Mobile solutions</a>
                                </div>
                              </div>
                            </div>
                            <div class="gnav20-content-list">
                              <div class="gnav20-content-list-flex">
                                <div>
                                  <a id="gnav20-cart-list-item-2-mobile"
                                    class="gnav20-content-list-arrow gnav20-home-cart-count"
                                    href="https://www.verizon.com/inhome/resumecart?xpssource=learn&amp;gnavOffSearchFlag=true"
                                    data-track="global nav:home solutions">Home solutions</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gnav20-search-utility">
                    <div class="gnav20-utility-wrapper" item-title="search">
                      <div class="gnav20-search-wrapper">
                        <input type="hidden" id="gnav20-search-context-mobile" name="isProd" value="true">
                        <div id="gnav20-search-escontext-mobile"
                          data-json="{'ResidentialShop':['verizon.com/home','verizon.com/local','verizon.com/info','/home/storelocator','verizon.com/inhome','verizon.com/?lid\u003d'],'ResidentialAccessories':['verizon.com/home/accessories'],'ResidentialSupport':['/support/residential','verizon.com/support/consumer','forums.verizon.com','my.verizon.com/services','verizon.com/fiostv/selfinstall','verizon.com/whatsnext/residential','verizon.com/speedtest'],'ResidentialMyVerizon':['/Support','tv.verizon.com','verizon.com/foryourhome','ssoauth.verizon.com','verizon.com/fiostv','verizon.com/ondemand','verizon.com/consumer/myverizon','verizon.com/watch'],'EntSupport':['enterprise.verizon.com/terms/','enterprise.verizon.com/publications/','enterprise.verizon.com/support'],'MobileSupport':['.com/support','.com/solutions-and-services'],'MobileMyVerizon':['.com/ui','.com/vzw','.com/myv','.com/blocks','.com/my-verizon/'],'MobileAccessories':['.com/products'],'EntLearn':['enterprise.verizon.com','enterprise.verizon.com/products/','enterprise.verizon.com/why-verizon/','enterprise.verizon.com/solutions/','enterprise.verizon.com/resources/','enterprise.verizon.com/support/','enterprise.verizon.com/campaigns/','enterprise.verizon.com/solutions/public-sector/'],'SMBSupport':['verizon.com/business/support/','b2b.verizonwireless.com/content/'],'MyBusiness':['business.verizon.com','verizon.com/whatsnext/business/'],'SMBLearn':['verizon.com/business/'],'SMBwireless':['verizonwireless.com/business/'],'Corporate':['verizon.com/about'],'MobileShop':['verizon.com/personal-home','verizonwireless.com/?intcmp\u003d']}">
                        </div>
                        <button class="gnav20-search-icon" id="gnav20-search-icon-mobile" aria-label="Search Verizon"
                          data-track="global nav:search verizon">
                        </button>
                      </div>
                    </div>
                  </div>
                  <button id="gnav20-nav-toggle" data-menuitem="vzmobilemenu" tabindex="0"
                    aria-label="Menu for navigation opens a modal overlay"
                    data-track="global nav:menu for navigation opens a modal overlay">
                  </button>
              </div>	
              <nav id="gnav20-mobile-menu" class="gnav20-mobile-menu gnav20-hide" aria-hidden="true">
                <button id="gnav20-closex" class="gnav20-closex" aria-label="close the Menu" tabindex="0" data-track="global nav:close">Close</button>
                <div id="gnav20-ulwrapper">
                  <a id="gnav20-eyebrow-link-Personal-mobile" href="https://www.verizon.com/" data-stext="Switch to" data-label="Personal" aria-label="Verizon Personal Services HomePage" class="gnav20-main-header gnav20-selected" data-track="global nav:personal">Personal</a>
                  <div class="gnav20-navigation-placeholder">
                    <div class="gnav20-navigation">
                      <div class="gnav20-global-nav-list gnav20-navigation-list" item-title="L1">
                      
                        <div class="gnav20-primary-menu gnav20-featured-card">
                          <button id="gnav20-Shop-L1-mobile" aria-label="Shop Menu List" aria-expanded="false" class="gnav20-menu-label gnav20-menu-label-button gnav20-haschild" data-track="global nav:shop menu list">Shop</button>
                          <button id="gnav20-Shop-L1-goback-mobile-goback" aria-label="Shop Menu List" aria-expanded="false" class="gnav20-menu-label gnav20-menu-label-button gnav20-goback" data-track="global nav:shop menu list:go back">Shop</button>
                          <a aria-hidden="true" class="gnav20-menu-label-link" href="https://www.verizon.com/shop/" tabindex="-1" data-track="global nav:shop menu list">Shop</a>
                          <div class="gnav20-sub-header-menu gnav20-sub-menu" style="display:none">
                            <div class="gnav20-nav-utility">
                              <button class="gnav20-nav-search-icon" aria-label="Search Verizon" data-track="global nav:search verizon"></button>
                              <button class="gnav20-nav-close" aria-label="Close Nav Panel" tabindex="0" data-track="global nav:close">Close</button>
                            </div>
                            <div class="gnav20-content-wrapper">
                              <div class="gnav20-featured-card-top-label">Shop</div>
                              <ul class="gnav20-submenu-column gnav20-L1 gnav20-featured-scroll-area" role="none">
                                
                                <li>
                                  <a id="gnav20-Shop-L2-1-mobile" href="https://www.verizon.com/shop/" data-track="global nav:shop:shop all">Shop all</a>
                                  <div class="gnav20-L2-content-wrapper">
                                  </div>
                                  <div class="gnav20-nav-mask">&nbsp;</div>
                                  <div class="gnav20-placeholder-1" style="display:none"></div>
                                </li>

                                <li class="gnav20-bold-link gnav20-column-break">
                                  <a id="gnav20-Shop-L2-2-mobile" class="gnav20-haschild " href="javascript:void(0)" role="button"
                                    aria-label="Deals menu list" data-track="global nav:shop:deals menu list">Deals
                                  </a>
                                  <a id="gnav20-Shop-L2-2-goback-mobile-goback" class="gnav20-goback gnav20-hide-on-desktop" href="javascript:void(0)"
                                    aria-label="Deals menu list" aria-expanded="false" role="button"
                                    data-track="global nav:shop:deals menu list:go back">Deals
                                  </a>
                                  <div class="gnav20-L2-content-wrapper">
                                    <div class="gnav20-submenu-column gnav20-L2 gnav20-featured-card-top-label" style="display:none">
                                      Deals
                                    </div>
                                    <ul item-title="L2" class="gnav20-submenu-column gnav20-featured-scroll-area gnav20-L2 gnav20-mega-column-0" style="display:none">
                                      <li>
                                        <a id="gnav20-Shop-L3-37-mobile" href="https://www.verizon.com/deals/"
                                          data-track="global nav:shop:deals:shop all deals">Shop all deals
                                        </a>
                                      </li>
                                      <li>
                                        <a id="gnav20-Shop-L3-38-mobile" href="https://www.verizon.com/shop/online/free-cell-phones/"
                                          data-track="global nav:shop:deals:free phones">Free phones
                                        </a>
                                      </li>
                                      <li class="gnav20-hide">
                                        <a data-show-for="loggedIn:true" data-hide-for="role:mobilesecure" id="gnav20-Shop-L3-39-mobile"
                                          href="https://myvpostpay.verizon.com/ui/hub/ao/myoffers#/" data-track="global nav:shop:deals:my offers"> My
                                          offers
                                        </a>
                                      </li>
                                      <li>
                                        <a id="gnav20-Shop-L3-40-mobile" href="https://www.verizon.com/deals/smartphones/"
                                          data-track="global nav:shop:deals:smartphones">Smartphones
                                        </a>
                                      </li>
                                      <li>
                                        <a id="gnav20-Shop-L3-41-mobile" href="https://www.verizon.com/home/bundles/fios/"
                                          data-track="global nav:shop:deals:fios home internet">Fios Home Internet
                                        </a>
                                      </li>
                                      <li>
                                        <a id="gnav20-Shop-L3-42-mobile" href="https://www.verizon.com/bring-your-own-device/"
                                          data-track="global nav:shop:deals:bring your own device">Bring your own device
                                        </a>
                                      </li>
                                      <li>
                                        <a id="gnav20-Shop-L3-43-mobile" href="https://www.verizon.com/deals/products/"
                                          data-track="global nav:shop:deals:accessories">Accessories
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div id="gnav20-footerlink">
                    <div class="gnav20-store">
                      <div class="gnav20-utility-wrapper" item-title="store">
                        <div>
                          <a aria-label="Stores" href="https://www.verizon.com/stores/" data-track="global nav:stores">
                            Stores
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="gnav20-localization">
                      <div class="gnav20-utility-wrapper " item-title="localization">
                        <a class="gnav20-lang-link" aria-label="Switch to Español language website"
                          data-href="https://espanol.verizon.com/" href="https://espanol.verizon.com/" data-lang="Español" mporgnav=""
                          data-track="global nav:espanol">Español</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gnav20-eyebrow">
                  <div class="gnav20-eyebrow-link-list" item-title="eyebrow">
                    <div class="gnav20-eyebrow-link-list-item gnav20-two">
                      <a id="gnav20-eyebrow-link-Business-mobile" 
                        href="https://www.verizon.com/business/" 
                        data-stext="Switch to" data-label="Business" 
                        aria-label="Switch to Verizon Business Services HomePage" 
                        class="gnav20-main-header " 
                        data-track="global nav:business">Business</a>
                    </div>
                    <input type="hidden" id="gnav20-lob-link-label-mobile">
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="gnav20-width-wrapper-border-bottom"></div>
        <div>
          <div class="gnav20-ribbontext">
            <div class="gnav20-promo-ribbon-wrapper gnav20-clearfix ">	
	            <div class="gnav20-promo ">		
		            <div class="gnav20-promotext">
                  <div class="gnav20-promo-ribbon" item-title="promoRibbon">
	                  <div class="gnav20-promo-text gnav20-white-focus">
                      <span>
                        <span style="color: rgb(255,255,255);font-size: 11.0px;line-height: 14.0px;">${gNavRaw.children[5].querySelector('p').innerHTML}</span>
                        <button class="gnav20-promo-icon" aria-label="More information tooltip" data-track="global nav:more information tooltip">
                          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14">
                            <g fill="none" fillrule="evenodd">
                              <path stroke="#FFF" d="M7 .938A6.062 6.062 0 0 0 .937 7 6.062 6.062 0 0 0 7 13.063 6.062 6.062 0 0 0 13.063 7 6.062 6.062 0 0 0 7 .937z">
                              </path>
                              <path fill="#FFF" d="M6.211 11.375V6.228h1.576v5.147zM7.789 4.503H6.21V3.09h1.576v1.414z"></path>
                            </g>
                          </svg>
                        </button>
                      </span>
                    </div>
                    <div class="gnav20-modal-content-placeholder" style="display:none;">
                      <div class="gnav20-modal-sub-heading" id="gnav20-modal-sub-heading">
                        ${gNavRaw.children[6].innerHTML}
                      </div>
                    </div>
                  </div>
                </div>
		            <span href="javascript:void(0)" class="gnav20-carousel-button-prev"></span>
		            <span href="javascript:void(0)" class="gnav20-carousel-button-next"></span>		
	            </div>	
              <div class="gnav20-modal" id="gnav20-modal">
                <div class="gnav20-modal-overlay" tabindex="-1" data-modal-hide=""></div>
                <div class="gnav20-modal-content" aria-labelledby="gnav20-modal-heading" aria-describedby="gnav20-modal-sub-heading" role="dialog">
                  <button id="gnav20-close-icon" class="gnav20-promo-close-icon" tabindex="0" aria-label="Click here or press escape key to Close Modal Dialog" data-modal-hide="" data-track="global nav:click here or press escape key to close modal dialog">
                  </button>
                  <div class="gnav20-modal-content-wrapper"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    `
    // End of Navigation Menu
    const headerEndRaw = gNavRaw.children[7].querySelectorAll('p').text;
    const headerEndDecorated = `
      <div name="headerEnd" id="gnav20-header-end" role="none" tabindex="-1">
        ${headerEndRaw}
      </div>
    `;
    
    gNavDecorated.innerHTML = `
      ${a11yTopLinksDecorated}
      ${widthWrapperDecorated}
      ${headerEndDecorated}
    `;
    gNavRaw.innerHTML = '';
    gNavRaw.append(gNavDecorated);
    block.innerHTML = '';
    block.append(gNav);

    gnav20.initNav();
  }
}
