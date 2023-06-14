import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

// function closeOnEscape(e) {
//   if (e.code === 'Escape') {
//     const nav = document.getElementById('nav');
//     const navSections = nav.querySelector('.nav-sections');
//     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//     if (navSectionExpanded && isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleAllNavSections(navSections);
//       navSectionExpanded.focus();
//     } else if (!isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleMenu(nav, navSections);
//       nav.querySelector('button').focus();
//     }
//   }
// }

// function openOnKeydown(e) {
//   const focused = document.activeElement;
//   const isNavDrop = focused.className === 'nav-drop';
//   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
//     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
//     // eslint-disable-next-line no-use-before-define
//     toggleAllNavSections(focused.closest('.nav-sections'));
//     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
//   }
// }

// function focusNavSection() {
//   document.activeElement.addEventListener('keydown', openOnKeydown);
// }

// /**
//  * Toggles all nav sections
//  * @param {Element} sections The container element
//  * @param {Boolean} expanded Whether the element should be expanded or collapsed
//  */
// function toggleAllNavSections(sections, expanded = false) {
//   sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded);
//   });
// }

// /**
//  * Toggles the entire nav
//  * @param {Element} nav The container element
//  * @param {Element} navSections The nav sections within the container element
//  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
//  */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('role', 'button');
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('role');
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }
//   // enable menu collapse on escape keypress
//   if (!expanded || isDesktop.matches) {
//     // collapse menu on escape press
//     window.addEventListener('keydown', closeOnEscape);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//   }
// }

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
                    const isLink = links.length == 1;
                    const isMenu = links.length == 0 && navL2List.length;
                    // const isRoleSpecific = navL1Item.firstChild.textContent.contains('||') && (links.length > 1);
                    // console.log('isRoleSpecific', isRoleSpecific);
                    
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
                      ${isMenu ? `
                      <li>
                        <a id="gnav20-${navSectionTitle.innerText}-L2-${index+1}" 
                          class="gnav20-haschild" 
                          href="javascript:void(0)" 
                          aria-expanded="false" 
                          role="button" 
                          aria-label="${navL1Item.firstChild.innerText} menu list" 
                          data-track="global nav:shop:deals menu list">
                          ${navL1Item.firstChild.textContent}
                        </a>
                        <a id="nav20-${navSectionTitle.innerText}-L2-${index+1}-goback" 
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
                              <li>
                                <a id="gnav20-Shop-L3-37" href="https://www.verizon.com/deals/" data-track="global nav:shop:deals:shop all deals">Shop all deals
                                </a>
                              </li>
                              <li>
                                <a id="gnav20-Shop-L3-38" href="https://www.verizon.com/shop/online/free-cell-phones/" data-track="global nav:shop:deals:free phones">Free phones
                                </a>
                              </li>
                              <li class="gnav20-hide">
                                <a data-show-for="loggedIn:true" data-hide-for="role:mobilesecure" id="gnav20-Shop-L3-39" href="https://myvpostpay.verizon.com/ui/hub/ao/myoffers#/" data-track="global nav:shop:deals:my offers"> My offers
                                </a>
                              </li>
                              <li>
                                <a id="gnav20-Shop-L3-40" href="https://www.verizon.com/deals/smartphones/" data-track="global nav:shop:deals:smartphones">Smartphones
                                </a>
                              </li>
                              <li>
                                <a id="gnav20-Shop-L3-41" href="https://www.verizon.com/home/bundles/fios/" data-track="global nav:shop:deals:fios home internet">Fios Home Internet
                                </a>
                              </li>
                              <li>
                                <a id="gnav20-Shop-L3-42" href="https://www.verizon.com/bring-your-own-device/" data-track="global nav:shop:deals:bring your own device">Bring your own device
                                </a>
                              </li>
                              <li>
                                <a id="gnav20-Shop-L3-43" href="https://www.verizon.com/deals/products/" data-track="global nav:shop:deals:accessories">Accessories
                                </a>
                              </li>
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
    
    console.log('navSectionsRaw', navSectionsRaw);
    console.log('navSectionDecorated', navSectionsDecorated);

    const sideNavRaw = gNavRaw.children[4].querySelectorAll(':scope > ul');

    
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
                  <!-- Sign In, Cart and Search -->
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
                  <!-- Sign In, Cart and Search -->
              </div>	

              <nav id="gnav20-mobile-menu" class="gnav20-mobile-menu gnav20-hide" aria-hidden="true">
              </nav>
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
  }
}
