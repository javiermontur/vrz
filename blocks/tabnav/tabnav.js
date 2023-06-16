export default async function decorate(block) {
  const listLinks = block.querySelectorAll('ul > li > a');

  if (listLinks.length) {
    block.classList.add('experienceFragment', 'experiencefragment', 'aem-GridColumn', 'aem-GridColumn--default--12');
    const tabsListDecorated = document.createElement('ul');
    tabsListDecorated.classList.add('Tabs-list');
    tabsListDecorated.innerHTML = `
      ${[...listLinks].map((link, index) => {
        const isActive = index == 0;
        return `
          <li class="Tab ${isActive ? 'is-active' : ''}">
            <a href="${link.href}" tabindex="0" 
              ${isActive ? 'style="border-bottom-color:  !important" aria-current="true"' : ''}>
              ${link.text}
            </a>
          </li>
        `
      }).join('')}
    `;

    block.innerHTML = `
      <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
        <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
            <div class="section aem-GridColumn aem-GridColumn--default--12">
              <section id="section_copy">
                <div class="Container">
                  <div class="tabNav">
                    <nav aria-label="secondary">
                      <div class="tab-nav tab-reduced ">
                        <div class="Tabs u-showForMediumUp">
                          <!-- Tab list Decorated -->
                        </div>
                        <form class="Form-group u-hideForMediumUp" autocomplete="off">
                          <select role="combobox" class="Form-input" sitecat-cta="mobile nav">
                            <option value="/deals/" selected="">
                              Deals
                            </option>
                            <option value="/deals/smartphones/">
                              Smartphone
                            </option>
                            <option value="/deals/iphone/">
                              iPhone
                            </option>
                            <option value="/shop/online/free-cell-phones/">
                              Free Phone
                            </option>
                            <option value="/smartphones/certified-pre-owned/">
                              Certified pre-owned
                            </option>
                            <option value="/deals/products/">
                              Accessory
                            </option>
                            <option value="/deals/prepaid/">
                              Prepaid
                            </option>
                            <option value="/bring-your-own-device/">
                              Bring your own device
                            </option>
                            <option value="/deals/5g-home-internet/">
                              5G Home Internet
                            </option>
                            <option value="/deals/fios/">
                              Fios
                            </option>
                          </select>
                        </form>
                      </div>
                    </nav>
                  </div>
                  <div class="html">
                    <style>
                      @media screen and (min-width: 320px) and (max-width: 767px) {
                        .tabNav {
                          margin-top: 12px;
                        }
                      }
                    </style>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    `
    block.querySelector('.Tabs').append(tabsListDecorated);
  }
}