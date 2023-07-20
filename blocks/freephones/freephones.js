import {
  loadScript
} from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const expFrag = block.parentElement.parentElement;
  const content = block.querySelectorAll(':scope > div');

  const titleText = content[0];
  const products = [...content].filter((v, i) => i > 0);
  const decoratedContent = document.createElement('div');
  decoratedContent.className = "Grid lozad height--xs640 height--md636 u-paddingTop--xs16 u-paddingRight--xs0 u-paddingBottom--xs0 u-paddingLeft--xs0 u-paddingTop--lg20 u-paddingRight--lg0 u-paddingBottom--lg20 u-paddingLeft--lg0 u-flexAlignContentCenter--xs u-flexAlignContentStart--md ";

  if (titleText && products.length > 0) {
    const h2 = titleText.querySelector('h2');
    const p = titleText.querySelector('p');

    decoratedContent.innerHTML = `
    <div class="Col Col--xs9 Col--md3 Col--lg3  u-positionRelative--xs u-positionRelative--md ">
      <div class="text">
        <div class="u-textLeft u-textxsLeft u-colorPrimary u-marginBottom--xs16 u-marginBottom--lg20">
          <h2 class="u-fontDisplay u-textLineHeightExtraTight  u-text--xs24 u-text--md u-text--lg32 u-textBold      u-marginBottom--xs0 u-marginBottom--lg0">
            ${h2.innerHTML || ''}
          </h2>
        </div>
      </div>
      <div class="text">
        <div class="u-textLeft u-textxsLeft 
        u-colorPrimary u-marginBottom--xs16 u-marginBottom--lg40">
          <p class="u-fontDisplay u-textLineHeightExtraTight  u-text--xs16 u-text--md u-text--lg20 u-textRegular      u-marginBottom--xs0 u-marginBottom--lg0">
            ${p.innerHTML || ''}
          </p>
        </div>
      </div>
    </div>
    <div class="Col Col--xs12 Col--md9 Col--lg9 u-paddingAll--0 u-positionRelative--xs u-positionRelative--md ">
      <div class="products">
        <div data-cmp="vzrf-products">
          <div class="u-paddingBottom--xs52 u-paddingY--md60 text-side-carousel"
            data-slick='{"accessibility": false, "mobileFirst": true, "infinite": true, "slidesToShow": 1, "focusOnChange": true, "arrows": false, "dots": true, "responsive":[{"breakpoint": 767,"settings": {"variableWidth": true, "arrows": true, "prevArrow":"<button class=\"slick-prev slick-arrow Icon Icon--left-arrow u-marginTop--xs u-marginTop--lg\" aria-label=\"Previous\"></button>", "nextArrow":"<button class=\"slick-next slick-arrow Icon Icon--right-arrow u-marginTop--xs u-marginTop--lg\" aria-label=\"Next\"></button>"}}]}'>
            ${[...products].map((product, index) => {
              const promoBadge = product.querySelector('p');
              const productTitle = product.querySelector('h3 a');
              const promoTextList = product.querySelectorAll('ul li');
              const promoCta = product.querySelector('.btn-wrap a');
              const productImage = product.querySelector('picture img');
              return `
              <div class="product-tile u-colorBackgroundSecondary u-paddingX--xs16 u-paddingX--lg20 u-paddingTop--md40 u-positionRelative">
                <div class="product-info u-marginRight--md20 u-flex u-flexColumn u-flexJustifyEnd">
                  <p class="u-showForMediumUp promo-badging u-colorAccent u-text--10 u-fontDisplay u-textLineHeightTight u-marginBottom--4">
                    ${promoBadge.innerHTML} 
                  </p>
                  <div class="Bar Bar--secondary u-paddingTop--10 u-paddingBottom--0 u-marginTop--4">
                    <h3 class="u-fontDisplay u-textRegular u-textLineHeightTight u-colorPrimary u-text--xs16 u-text--lg20 u-marginBottom--8">
                      <span class="u-colorPrimary u-textDecorationNone u-displayBlock u-showForMediumUp" aria-label="${productTitle.innerHTML}">
                        ${productTitle.innerHTML}
                      </span>
                    </h3>
                    <p class="u-hideForMediumUp promo-badging u-colorAccent u-text--10 u-fontDisplay u-textLineHeightTight u-marginBottom--4">
                      ${promoBadge.innerHTML}
                    </p>
                    <div class="u-fontDisplay u-colorPrimary u-text--xs16 u-text--lg20 u-marginBottom--md32 u-textLineHeightNormal product-price">
                    <div class="u-flex">
                      <div>
                        <div class="u-displayBlock u-text--10">
                          ${promoTextList[0].innerHTML}
                        </div>
                          ${promoTextList[1].innerHTML}
                        <div class="u-displayBlock u-text--10">
                          ${promoTextList[2].innerHTML}  
                        </div>
                      </div>
                    </div>
                    <span class="u-text--10 u-colorPrimary u-displayBlock legal">        
                      ${promoTextList[3].innerHTML} 
                    </span>
                    </div>
                    <div class="u-showForMediumUp">
                      <a class="Button Button--cta u-textBreakNoWrap" 
                        href="${promoCta.href}" 
                        aria-label="${productTitle.textContent} ${promoCta.textContent}">
                        ${promoCta.textContent}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="product-image">
                  <picture class="lozad" data-iesrc="${productImage.src}" tabindex="-1">
                    <source srcset="${productImage.src}"/>
                    <source srcset="${productImage.src}" media="(min-width: 320px)"/>
                    <img alt="${productTitle.textContent}">
                  </picture>
                </div>
              </div>
              `
            }).join('')}
          </div>
        </div>
      </div>
    </div>
    `;

    expFrag.innerHTML = `
    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
      <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">  
          <div class="section aem-GridColumn aem-GridColumn--default--12">
            <section id="freephones">
              <div class="Container">
                <div class="grid">
                  <!-- Decorated Content Goes Here -->
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    `;
    expFrag.querySelector('.grid').append(decoratedContent);
  }
}