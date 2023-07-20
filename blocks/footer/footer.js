// import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // const cfg = readBlockConfig(block);
  // block.textContent = '';

  // fetch footer content
  // const footerPath = cfg.footer || '/footer';
  // const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  // if (resp.ok) {
  //   const html = await resp.text();

  //   console.log('footer', footer);

  //   // decorate footer DOM
  //   const footer = document.createElement('div');
  //   footer.innerHTML = html;

  //   decorateIcons(footer);
  //   block.append(footer);
  // }

  block.parentElement.innerHTML = `
  <div class="footer aem-GridColumn aem-GridColumn--default--12">
    <div id="vz-gf20">
      <div class="xf-page-unified xfpage page basicpage">
        <div class="gnav20 " data-exp-name="deals">
          <input type="hidden" id="cradle-context">
          <div class="gnav20-sticky-content">
            <div class="gnav20-footercontainer">
              <div class="gnav20-footer-container gnav20-white-focus gnav20-mobile-footer-accordion"
                data-gnav20-container="footer" role="contentinfo">
                <div class="gnav20-main-container">
                  <div class="gnav20-footer-level-one">
                    <div class="gnav20-footer-wrapper gnav20-four">
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Shop menu list" tabindex="0"
                              aria-expanded="false" role="button" data-track="global footer:shop menu list">Shop</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/smartphones/"
                                    data-track="global footer:shop:devices">Devices</a></li>

                                <li><a href="https://www.verizon.com/products/"
                                    data-track="global footer:shop:accessories">Accessories</a></li>

                                <li><a href="https://www.verizon.com/plans/"
                                    data-track="global footer:shop:plans">Plans</a></li>

                                <li><a href="https://www.verizon.com/home/"
                                    data-track="global footer:shop:home internet &amp; tv">Home Internet &amp; TV</a></li>

                                <li><a href="https://www.verizon.com/deals/"
                                    data-track="global footer:shop:deals">Deals</a></li>

                                <li><a href="https://www.tracfonewirelessinc.com/" target="_blank"
                                    data-track="global footer:shop:tracfone">TracFone</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Top Device Brands menu list" tabindex="0"
                              aria-expanded="false" role="button" data-track="global footer:top device brands menu list">
                              Top Device Brands</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/wireless-devices/samsung/"
                                    data-track="global footer:top device brands:samsung">Samsung</a></li>

                                <li><a href="https://www.verizon.com/wireless-devices/smartphones/iphone/"
                                    data-track="global footer:top device brands:apple">Apple</a></li>

                                <li><a href="https://www.verizon.com/wireless-devices/smartphones/motorola/"
                                    data-track="global footer:top device brands:motorola">Motorola</a></li>

                                <li><a href="https://www.verizon.com/wireless-devices/smartphones/google/"
                                    data-track="global footer:top device brands:google">Google</a></li>

                                <li><a href="https://www.verizon.com/wireless-devices/amazon/"
                                    data-track="global footer:top device brands:amazon">Amazon</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Support menu list" tabindex="0"
                              aria-expanded="false" role="button" data-track="global footer:support menu list">Support
                            </div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/support/"
                                    data-track="global footer:support:support overview">Support overview</a></li>

                                <li><a href="https://www.verizon.com/support/return-policy/"
                                    data-track="global footer:support:return policy">Return policy</a></li>

                                <li><a href="https://www.verizon.com/support/contact-us/"
                                    data-track="global footer:support:contact us">Contact us</a></li>

                                <li><a href="https://secure.verizon.com/signin"
                                    data-track="global footer:support:sign in">Sign in</a></li>

                                <li><a href="https://www.verizon.com/solutions-and-services/my-verizon-mobile/"
                                    data-track="global footer:support:download my verizon app">Download My Verizon App</a>
                                </li>

                                <li><a href="https://www.verizon.com/support/lifeline/"
                                    data-track="global footer:support:lifeline">Lifeline</a></li>

                                <li><a href="https://www.verizon.com/accessibility/"
                                    data-track="global footer:support:accessibility">Accessibility</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="About Verizon menu list" tabindex="0"
                              aria-expanded="false" role="button" data-track="global footer:about verizon menu list">About
                              Verizon</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/about"
                                    data-track="global footer:about verizon:about us">About us</a></li>

                                <li><a href="https://mycareer.verizon.com/" target="_blank"
                                    data-track="global footer:about verizon:careers">Careers</a></li>

                                <li><a href="https://www.verizon.com/about/news"
                                    data-track="global footer:about verizon:news">News</a></li>

                                <li><a href="https://www.verizon.com/about/responsibility"
                                    data-track="global footer:about verizon:responsibility">Responsibility</a></li>

                                <li><a href="https://www.verizon.com/about/responsibility/verizon-innovative-learning/"
                                    data-track="global footer:about verizon:verizon innovative learning">Verizon
                                    Innovative Learning</a></li>

                                <li><a href="https://www.verizon.com/info/"
                                    data-track="global footer:about verizon:consumer info">Consumer info</a></li>

                                <li><a href="https://www.verizon.com/articles/"
                                    data-track="global footer:about verizon:articles">Articles</a></li>

                                <li><a href="https://www.verizon.com/support/collateraldownload/"
                                    data-track="global footer:about verizon:brochures">Brochures</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="gnav20-footer-wrapper gnav20-four">
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Most Popular menu list" tabindex="0"
                              aria-expanded="false" role="button" data-track="global footer:most popular menu list">Most
                              Popular</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/smartphones/apple-iphone-14-pro/"
                                    data-track="global footer:most popular:apple iphone 14 pro">Apple iPhone 14 Pro</a>
                                </li>

                                <li><a href="https://www.verizon.com/smartphones/apple-iphone-se-2022/"
                                    data-track="global footer:most popular:apple iphone se (3rd gen)">Apple iPhone SE (3rd
                                    Gen)</a></li>

                                <li><a href="https://www.verizon.com/smartphones/samsung-galaxy-s23-ultra/"
                                    data-track="global footer:most popular:samsung galaxy s23 ultra">Samsung Galaxy S23
                                    Ultra</a></li>

                                <li><a href="https://www.verizon.com/products/apple-airpods-max-headphones/"
                                    data-track="global footer:most popular:apple airpods max">Apple AirPods Max</a></li>

                                <li><a href="https://www.verizon.com/solutions-and-services/disneyplus/"
                                    data-track="global footer:most popular:disney">Disney</a></li>

                                <li><a href="https://www.verizon.com/connected-smartwatches/apple-watch-series-8/"
                                    data-track="global footer:most popular:apple watch series 8">Apple Watch Series 8</a>
                                </li>

                                <li><a href="https://www.verizon.com/home/"
                                    data-track="global footer:most popular:fios">Fios</a></li>

                                <li><a
                                    href="https://www.verizon.com/solutions-and-services/verizon-visa-card/?origin=gnavFooter"
                                    data-track="global footer:most popular:verizon visa card">Verizon Visa® Card</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Top Accessory Brands menu list"
                              tabindex="0" aria-expanded="false" role="button"
                              data-track="global footer:top accessory brands menu list">Top Accessory Brands</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/products/otterbox/"
                                    data-track="global footer:top accessory brands:otterbox">Otterbox</a></li>

                                <li><a href="https://www.verizon.com/products/zagg/"
                                    data-track="global footer:top accessory brands:zagg">ZAGG</a></li>

                                <li><a href="https://www.verizon.com/products/beats/"
                                    data-track="global footer:top accessory brands:beats">Beats</a></li>

                                <li><a href="https://www.verizon.com/products/mophie/"
                                    data-track="global footer:top accessory brands:mophie">Mophie</a></li>

                                <li><a href="https://www.verizon.com/products/jbl/"
                                    data-track="global footer:top accessory brands:jbl">JBL</a></li>

                                <li><a href="https://www.verizon.com/products/fitbit/"
                                    data-track="global footer:top accessory brands:fitbit">Fitbit</a></li>

                                <li><a href="https://www.verizon.com/products/gear4/"
                                    data-track="global footer:top accessory brands:gear 4">Gear 4</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-herofooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Important Consumer Information menu list"
                              tabindex="0" aria-expanded="false" role="button"
                              data-track="global footer:important consumer information menu list"> Important Consumer
                              Information</div>
                            <div class="gnav20-border-content gnav20-accordion-list">
                              <ul class="gnav20-footer-list">
                                <li><a href="https://www.verizon.com/about/terms-conditions/overview"
                                    data-track="global footer:important consumer information:terms &amp; conditions">Terms
                                    &amp; Conditions</a></li>

                                <li><a
                                    href="https://ss7.vzw.com/is/content/VerizonWireless/Device-Payment-Agreement-Template"
                                    target="_blank"
                                    data-track="global footer:important consumer information:device payment terms &amp; conditions">Device
                                    Payment Terms &amp; Conditions</a></li>

                                <li><a href="https://www.verizon.com/info/reportsecurityvulnerability/"
                                    data-track="global footer:important consumer information:report a security vulnerability">Report
                                    a security vulnerability</a></li>

                                <li><a href="https://www.verizon.com/support/customer-agreement/"
                                    data-track="global footer:important consumer information:mobile customer agreement">
                                    Mobile customer agreement</a></li>

                                <li><a href="https://www.verizon.com/support/residential/announcements/"
                                    data-track="global footer:important consumer information:announcements">Announcements</a>
                                </li>

                                <li><a href="https://www.verizon.com/support/radio-emissions/"
                                    data-track="global footer:important consumer information:radio frequency emissions">Radio
                                    frequency emissions</a></li>

                                <li><a href="https://www.verizon.com/support/surcharges/"
                                    data-track="global footer:important consumer information:taxes &amp; surcharges">Taxes
                                    &amp; surcharges</a></li>

                                <li><a href="https://www.verizon.com/featured/jetpack-recall"
                                    data-track="global footer:important consumer information:recall">Recall</a></li>

                                <li><a href="https://www.verizon.com/legal/notices/legal-notices/"
                                    data-track="global footer:important consumer information:legal notices">Legal
                                    notices</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gnav20-col-wrapper">
                        <div class="gnav20-socialfooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Follow Verizon menu list">Follow Verizon
                            </div>
                            <div class="gnav20-border-content gnav20-social-icon">
                              <ul>
                                <li>
                                  <a class="gnav20-social-media" href="https://www.facebook.com/verizon" target="_blank"
                                    aria-label="Follow Verizon on Facebook" title="Opens New Window"
                                    data-track="global footer:follow verizon:follow verizon on facebook">
                                    <span>facebook-official</span>
                                    <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1017.78">
                                      <path fill="#fff"
                                        d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78v-357.78h-130v-148h130v-112.8c0-128.32,76.44-199.2,193.39-199.2,56.02,0,114.61,10,114.61,10v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96v96.04h142l-22.7,148h-119.3v357.78c244.77-38.41,432-250.22,432-505.78Z">
                                      </path>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a class="gnav20-social-media" href="https://twitter.com/verizon" target="_blank"
                                    aria-label="Follow Verizon on Twitter" title="Opens New Window"
                                    data-track="global footer:follow verizon:follow verizon on twitter">
                                    <span>twitter</span>
                                    <svg focusable="false" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18"
                                      style="enable-background:new 0 0 18 18;" xml:space="preserve">
                                      <path fill="#FFF"
                                        d="M15.9,4.3c0.8-0.5,1.3-1.2,1.6-2C16.8,2.7,16,3,15.2,3.1C14.5,2.4,13.6,2,12.5,2c-2,0-3.7,1.6-3.7,3.7c0,0.3,0,0.6,0.1,0.8
                c-3-0.2-5.7-1.6-7.5-3.8C1.1,3.2,0.9,3.8,0.9,4.5c0,1.3,0.6,2.4,1.6,3C1.9,7.5,1.3,7.3,0.8,7c0,1.8,1.3,3.2,2.9,3.6
                c-0.3,0.1-0.6,0.1-1,0.1c-0.2,0-0.5,0-0.7-0.1c0.5,1.5,1.8,2.5,3.4,2.5c-1.3,1-2.8,1.6-4.5,1.6c-0.3,0-0.6,0-0.9-0.1
                c1.8,1.2,3.7,1.9,5.8,1.9c6.7,0,10.4-5.6,10.4-10.4c0-0.2,0-0.3,0-0.5c0.7-0.5,1.3-1.2,1.8-1.9C17.3,4,16.6,4.2,15.9,4.3z"></path>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a class="gnav20-social-media" href="https://www.youtube.com/user/verizon"
                                    target="_blank" aria-label="Follow Verizon on Youtube" title="Opens New Window"
                                    data-track="global footer:follow verizon:follow verizon on youtube">
                                    <span>you-tube</span>
                                    <svg focusable="false" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18.5 18"
                                      style="enable-background:new 0 0 18.5 18;" xml:space="preserve">
                                      <path fill="#FFF" d="M17.8,4.8C17.6,4,17,3.4,16.2,3.2c-1.4-0.4-7-0.4-7-0.4s-5.6,0-7,0.4C1.4,3.4,0.8,4.1,0.6,4.8C0.2,6.3,0.2,9.2,0.2,9.2
                s0,2.9,0.4,4.4c0.2,0.7,0.8,1.4,1.6,1.6c1.4,0.4,7,0.4,7,0.4s5.6,0,7-0.4c0.8-0.2,1.4-0.8,1.6-1.6c0.4-1.5,0.4-4.4,0.4-4.4
                S18.2,6.3,17.8,4.8z M7.4,11.9V6.5l4.7,2.7L7.4,11.9z"></path>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a class="gnav20-social-media" href="https://www.instagram.com/verizon/" target="_blank"
                                    aria-label="Follow Verizon on Instagram" title="Opens New Window"
                                    data-track="global footer:follow verizon:follow verizon on instagram">
                                    <span>instagram</span>
                                    <svg focusable="false" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18"
                                      style="enable-background:new 0 0 18 18;" xml:space="preserve">
                                      <g>
                                        <path fill="#FFF" d="M18,5.3c0-1-0.2-1.6-0.4-2.2c-0.2-0.6-0.5-1.1-1-1.6c-0.5-0.5-1-0.8-1.6-1c-0.6-0.2-1.2-0.4-2.2-0.4C11.8,0,11.4,0,9,0
                  S6.3,0,5.3,0c-1,0-1.6,0.2-2.2,0.4C2.5,0.7,2,1,1.5,1.5s-0.8,1-1,1.6C0.3,3.7,0.1,4.3,0.1,5.3C0,6.2,0,6.6,0,9c0,2.4,0,2.8,0.1,3.7
                  c0,1,0.2,1.6,0.4,2.2c0.2,0.6,0.5,1.1,1,1.6s1,0.8,1.6,1c0.6,0.2,1.2,0.4,2.2,0.4C6.3,18,6.6,18,9,18s2.8,0,3.7-0.1
                  c1,0,1.6-0.2,2.2-0.4c0.6-0.2,1.1-0.5,1.6-1c0.5-0.5,0.8-1,1-1.6c0.2-0.6,0.4-1.2,0.4-2.2c0-1,0.1-1.3,0.1-3.7
                  C18,6.6,18,6.2,18,5.3z M16.3,12.6c0,0.9-0.2,1.4-0.3,1.7c-0.2,0.4-0.4,0.7-0.7,1s-0.6,0.5-1,0.7c-0.3,0.1-0.8,0.3-1.7,0.3
                  c-0.9,0-1.2,0.1-3.6,0.1s-2.7,0-3.6-0.1c-0.9,0-1.4-0.2-1.7-0.3c-0.4-0.2-0.7-0.4-1-0.7s-0.5-0.6-0.7-1c-0.1-0.3-0.3-0.8-0.3-1.7
                  c0-0.9-0.1-1.2-0.1-3.6c0-2.4,0-2.7,0.1-3.6C1.7,4.5,1.9,4,2,3.7c0.2-0.4,0.4-0.7,0.7-1C3,2.3,3.3,2.1,3.7,2C4,1.9,4.5,1.7,5.4,1.7
                  c0.9,0,1.2-0.1,3.6-0.1c2.4,0,2.7,0,3.6,0.1c0.9,0,1.4,0.2,1.7,0.3c0.4,0.2,0.7,0.4,1,0.7s0.5,0.6,0.7,1c0.1,0.3,0.3,0.8,0.3,1.7
                  c0,0.9,0.1,1.2,0.1,3.6C16.4,11.4,16.4,11.7,16.3,12.6z"></path>
                                        <path fill="#FFF" d="M9,4.4C6.5,4.4,4.4,6.4,4.4,9c0,2.6,2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6C13.6,6.4,11.6,4.4,9,4.4z M9,12c-1.7,0-3-1.3-3-3
                  c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C12,10.7,10.7,12,9,12z"></path>
                                        <path fill="#FFF"
                                          d="M13.8,3.1c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C14.9,3.6,14.4,3.1,13.8,3.1z">
                                        </path>
                                      </g>
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="gnav20-socialfooter">
                          <div class="gnav20-hero-wrapper">
                            <div class="gnav20-hero-footer-heading" aria-label="Follow Verizon Fios menu list">Follow
                              Verizon Fios</div>
                            <div class="gnav20-border-content gnav20-social-icon">
                              <ul>
                                <li>
                                  <a class="gnav20-social-media" href="https://www.facebook.com/Fios/" target="_blank"
                                    aria-label="Follow Verizon Fios on Facebook" title="Opens New Window"
                                    data-track="global footer:follow verizon fios:follow verizon fios on facebook">
                                    <span>facebook-official</span>
                                    <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1017.78">
                                      <path fill="#fff"
                                        d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78v-357.78h-130v-148h130v-112.8c0-128.32,76.44-199.2,193.39-199.2,56.02,0,114.61,10,114.61,10v126h-64.56c-63.6,0-83.44,39.47-83.44,79.96v96.04h142l-22.7,148h-119.3v357.78c244.77-38.41,432-250.22,432-505.78Z">
                                      </path>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a class="gnav20-social-media" href="https://twitter.com/verizonfios" target="_blank"
                                    aria-label="Follow Verizon Fios on Twitter" title="Opens New Window"
                                    data-track="global footer:follow verizon fios:follow verizon fios on twitter">
                                    <span>twitter</span>
                                    <svg focusable="false" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18"
                                      style="enable-background:new 0 0 18 18;" xml:space="preserve">
                                      <path fill="#FFF"
                                        d="M15.9,4.3c0.8-0.5,1.3-1.2,1.6-2C16.8,2.7,16,3,15.2,3.1C14.5,2.4,13.6,2,12.5,2c-2,0-3.7,1.6-3.7,3.7c0,0.3,0,0.6,0.1,0.8
                c-3-0.2-5.7-1.6-7.5-3.8C1.1,3.2,0.9,3.8,0.9,4.5c0,1.3,0.6,2.4,1.6,3C1.9,7.5,1.3,7.3,0.8,7c0,1.8,1.3,3.2,2.9,3.6
                c-0.3,0.1-0.6,0.1-1,0.1c-0.2,0-0.5,0-0.7-0.1c0.5,1.5,1.8,2.5,3.4,2.5c-1.3,1-2.8,1.6-4.5,1.6c-0.3,0-0.6,0-0.9-0.1
                c1.8,1.2,3.7,1.9,5.8,1.9c6.7,0,10.4-5.6,10.4-10.4c0-0.2,0-0.3,0-0.5c0.7-0.5,1.3-1.2,1.8-1.9C17.3,4,16.6,4.2,15.9,4.3z"></path>
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gnav20-footer-level-two gnav20-custom-margin-left">
                    <div class="gnav20-logo">
                      <div class="gnav20-logo-wrapper gnav20-relative-index">
                        <a class="gnav20-logoBlackBg" href="https://www.verizon.com/" title="Verizon Home Page"
                          data-track="global footer:verizon home page">
                          <!-- img alt="Verizon Logo" src="https://www.verizon.com/content/dam/vzwcom/gnav/global/full_logo_white.png"/ -->
                        </a>
                      </div>
                    </div>
                    <div class="gnav20-footerlink">
                      <ul class="gnav20-footer-list ">
                        <li>
                          <a href="https://www.verizon.com/info/sitemap/" data-track="global footer:site map">
                            Site Map
                          </a>
                        </li>
                        <li>
                          <a href="https://www.verizon.com/about/privacy/" data-track="global footer:privacy policy">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="https://www.verizon.com/about/privacy/full-privacy-policy?scrollto=index-1#acc-item-55"
                            data-track="global footer:california privacy notice">
                            California Privacy Notice
                          </a>
                        </li>
                        <li>
                          <a data-hide-for="appid:communitykh" href="https://www.verizon.com/privacy/your-privacy-choices"
                            data-track="global footer:your privacy choices">
                            Your Privacy Choices <span
                              style="height:10px;width:28px;display:inline-block;position:relative;"><svg
                                style="position:absolute;width:28px;bottom:-2px;" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 30 14" xml:space="preserve">
                                <style type="text/css">
                                  .st0 {
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                    fill: #FFFFFF;
                                  }
                                  .st1 {
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                    fill: #0066FF;
                                  }
                                  .st2 {
                                    fill: #FFFFFF;
                                  }
                                  .st3 {
                                    fill: #0066FF;
                                  }
                                </style>
                                <g>
                                  <g id="final---dec.11-2020_1_">
                                    <g id="_x30_208-our-toggle_2_" transform="translate(-1275.000000, -200.000000)">
                                      <g id="Final-Copy-2_2_" transform="translate(1275.000000, 200.000000)">
                                        <path class="st0"
                                          d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"></path>
                                      </g>
                                    </g>
                                  </g>
                                  <g id="final---dec.11-2020">
                                    <g id="_x30_208-our-toggle" transform="translate(-1275.000000, -200.000000)">
                                      <g id="Final-Copy-2" transform="translate(1275.000000, 200.000000)">
                                        <path class="st1"
                                          d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z">
                                        </path>
                                        <path id="x" class="st2"
                                          d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z">
                                        </path>
                                        <path id="y" class="st3"
                                          d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z">
                                        </path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg></span>
                          </a>
                        </li>
                        <li class="gnav20-hide">
                          <a data-show-for="appid:communitykh"
                            href="https://community.verizon.com/t5/custom/page/page-id/yourprivacychoices"
                            data-track="global footer:your privacy choices">
                            Your Privacy Choices <span
                              style="height:10px;width:28px;display:inline-block;position:relative;"><svg
                                style="position:absolute;width:28px;bottom:-2px;" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 30 14" xml:space="preserve">
                                <style type="text/css">
                                  .st0 {
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                    fill: #FFFFFF;
                                  }

                                  .st1 {
                                    fill-rule: evenodd;
                                    clip-rule: evenodd;
                                    fill: #0066FF;
                                  }

                                  .st2 {
                                    fill: #FFFFFF;
                                  }

                                  .st3 {
                                    fill: #0066FF;
                                  }
                                </style>
                                <g>
                                  <g id="final---dec.11-2020_1_">
                                    <g id="_x30_208-our-toggle_2_" transform="translate(-1275.000000, -200.000000)">
                                      <g id="Final-Copy-2_2_" transform="translate(1275.000000, 200.000000)">
                                        <path class="st0"
                                          d="M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z"></path>
                                      </g>
                                    </g>
                                  </g>
                                  <g id="final---dec.11-2020">
                                    <g id="_x30_208-our-toggle" transform="translate(-1275.000000, -200.000000)">
                                      <g id="Final-Copy-2" transform="translate(1275.000000, 200.000000)">
                                        <path class="st1"
                                          d="M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z">
                                        </path>
                                        <path id="x" class="st2"
                                          d="M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z">
                                        </path>
                                        <path id="y" class="st3"
                                          d="M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z">
                                        </path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg></span>
                          </a>
                        </li>

                        <li>
                          <a href="https://www.verizon.com/accessibility/" data-track="global footer:accessibility">
                            Accessibility
                          </a>
                        </li>
                        <li>
                          <a href="https://www.verizon.com/about/our-company/open-internet"
                            data-track="global footer:open internet">
                            Open Internet
                          </a>
                        </li>
                        <li>
                          <a href="https://www.verizon.com/about/terms-conditions/overview"
                            data-track="global footer:terms &amp; conditions">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="https://www.verizon.com/about/privacy/about-our-ads"
                            data-track="global footer:about our ads">
                            About Our Ads
                          </a>
                        </li>
                      </ul>
                      <div class="copyright-section">
                        <div class="copyright-text">
                          © <span id="copyright-year">2023</span> Verizon
                        </div>
                        <div id="visual-cue" style="display: block;">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="gnav20-sticky-header  gnav20-with-promo"></div>
        </div>
      </div>
    </div>
  </div>
  `;
}
