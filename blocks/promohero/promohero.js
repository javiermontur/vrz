export default async function decorate(block) {
  const columns = block.querySelectorAll(':scope > div > div');

  if (columns.length == 2) {
    block.classList.add('section', 'aem-GridColumn', 'aem-GridColumn--default--12');
    const columnsDecorated = document.createElement('div');
    columnsDecorated.classList.add('Grid', 'height--xs', 'height--md', 'u-paddingTop--xs16', 'u-paddingRight--xs0', 'u-paddingBottom--xs16', 'u-paddingLeft--xs0', 'u-paddingTop--lg20', 'u-paddingRight--lg0', 'u-paddingBottom--lg20', 'u-paddingLeft--lg50', 'u-flexAlignContentStart--md');
    
    const typeTextThenImg = columns[1].querySelectorAll('picture').length;
    let colText = '';
    let colImage = '';
    let h1 = '';
    let h2 = '';
    let text = '';
    let tooltip = '';
    let picture = '';
    let cta = '';

    if(typeTextThenImg) {
      h1 = columns[0].querySelector('h1');
      h2 = columns[0].querySelector('h2');
      text = columns[0].querySelector('ul > li');
      tooltip = columns[0].querySelectorAll('ul > li')[1];
      cta = columns[0].querySelector('.btn-wrap');
      picture = columns[1].querySelector('picture');
    } else {
      h1 = columns[1].querySelector('h1');
      h2 = columns[1].querySelector('h2');
      text = columns[1].querySelector('ul > li');
      tooltip = columns[1].querySelectorAll('ul > li')[1];
      cta = columns[1].querySelector('.btn-wrap');
      picture = columns[0].querySelector('picture');
    }

    console.log(typeTextThenImg,h1,h2,text,tooltip,picture)
    
    colText = `
      <div class="Col Col--xs12 Col--md6 Col--lg6 u-positionRelative--xs u-positionRelative--md content-wrap">
        <div class="headlineWrap u-marginBottom--xs16 u-marginBottom--lg20">
        ${h1 ? `
          <h1 class="u-fontDisplay u-textLineHeightExtraTight u-marginBottom--0 u-textBold u-textLeft u-displayInline">
            ${h1.innerHTML}
          </h1>
        ` : ``}
        ${h2 ? `
          <h2 class="u-fontDisplay u-textLineHeightExtraTight u-marginBottom--0 u-textBold u-textLeft u-displayInline">
            ${h2.innerHTML}
          </h2>
        ` : ``}
        </div>
        ${text ? `
          <p class="u-fontDisplay u-textLineHeightExtraTight u-text--xs16 u-text--md u-text--lg20 u-marginBottom--xs24 u-marginBottom--lg32 u-textRegular u-textLeft  ">
            ${text.innerHTML}
            ${tooltip ? `
            <!--span class="tooltip">&ZeroWidthSpace;
              <span class="vzrf-tooltip" data-tooltip-content="${tooltip.innerHTML}" data-tooltip-type="icon" data-aria-label="" data-cmp-vzrf-initialized="true">
                <button class="Icon Icon--info u-textDecorationNone u-text--xs14 u-text--lg16" tabindex="0" aria-describedby="vzrf-tooltip-temp" aria-expanded="false" aria-label=""></button>
              </span>
            </span-->
            ` : ``}
          </p>
        `:``}
        ${cta.outerHTML}
      </div>
    `;

    colImage = `
      <div class="Col Col--xs12 Col--md6 Col--lg6 u-positionRelative--xs u-positionRelative--md u-flex u-flexAlignItemsCenter--xs u-flexJustifyCenter--xs">
        <picture class="u-displayInlineBlock">
          ${picture.innerHTML}
        </picture>  
      </div>
    `;

    columnsDecorated.innerHTML = `
      ${colText}
      ${colImage}
    `;

    block.innerHTML = `
      <section class="section_1180477413">
        <div class="Container">
          <div class="promoHero">
            <div data-cmp="vzrf-promo-hero" data-cmp-img-just="${typeTextThenImg ? 'right' : 'left'}" data-cmp-text-m="topLeft" data-cmp-img-size="product" data-cmp-img-align-dt="center" data-cmp-img-align-m="center" data-cmp-header="regular" data-cmp-promo-bg-color="white">
              <div class="cmp-wrapper">
                <!-- Columns Decorated Here -->
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    block.querySelector('.cmp-wrapper').append(columnsDecorated);
  }
}