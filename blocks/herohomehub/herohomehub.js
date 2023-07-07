export default async function decorate(block) {
  const columns = block.querySelectorAll(':scope > div > div');

  if (columns.length == 2) {
    block.parentElement.parentElement.classList.add('section', 'aem-GridColumn', 'aem-GridColumn--default--12');
    const columnsDecorated = document.createElement('div');
    columnsDecorated.classList.add('Grid','lozad', 'height--xs640', 'height--md560', 'u-colorBackgroundAccent', 'u-paddingTop--xs16', 'u-paddingRight--xs0', 'u-paddingBottom--xs16', 'u-paddingLeft--xs0', 'u-paddingTop--lg20', 'u-paddingRight--lg0', 'u-paddingBottom--lg20', 'u-paddingLeft--lg0', 'u-flexAlignContentCenter--xs', 'u-flexAlignContentCenter--md');
  
    const title = block.querySelector('h2');
    const btn = block.querySelector('.btn-wrap a');
    const pTags = block.querySelectorAll(':scope > div > div + div > p');
    console.log(pTags);
    const text = pTags[0];
    const image = pTags[1].querySelector('picture');
    image.classList.add('lozad');
    const subtext = pTags[2];

    columnsDecorated.innerHTML = `
      <div class="Col Col--xs12 Col--md1 Col--lg1  u-positionRelative--xs u-positionRelative--md ">
      </div>
      <div class="Col Col--xs12 Col--md5 Col--lg5  u-positionRelative--xs u-positionRelative--md ">
        <div class="text">
          <div class="u-textLeft u-textxsCenter u-colorSecondary u-marginBottom--xs24 u-marginBottom--lg24">  
            <h2 class="u-fontDisplay u-textLineHeightExtraTight  u-text--xs48 u-text--md64 u-text--lg96 u-textBold  u-marginBottom--xs0 u-marginBottom--lg0">  
              ${title.innerHTML}
            </h2>
          </div>
        </div>
        <span class="button">
          ${btn.outerHTML}
        </span>
      </div>
      <div class="Col Col--xs12 Col--md6 Col--lg6  u-positionRelative--xs u-positionRelative--md ">
        <div class="html">
          <div class="u-flex u-flexJustifyCenter">
            <div>
              <p class="u-fontDisplay u-colorSecondary u-textLeft u-textxsCenter u-marginLeft--md36 u-marginLeft--lg48 u-marginLeft--xl56 u-marginBottom--24 u-text--xs16 u-text--md24 u-text--lg32">
                ${text.innerHTML}
              </p>
              ${image.outerHTML}
              <p class="u-fontDisplay u-colorSecondary  u-marginLeft--xs40 u-marginLeft--md36 u-textLeft  u-marginLeft--lg48 u-marginLeft--xl56 u-marginTop--xs12  u-marginBottom--0" style="font-size: 11px !important;">&ZeroWidthSpace;
                ${subtext.innerHTML}<span class="vzrf-tooltip" data-tooltip-type="icon" data-cmp-vzrf-initialized="true"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    block.innerHTML = `
      <section id="hero-home-hub">
        <div class="Container">
          <div class="grid">
            <!-- Columns Decorated Here -->
          </div>
        </div>
      </section>
    `;

    block.querySelector('.grid').append(columnsDecorated);
  }
}