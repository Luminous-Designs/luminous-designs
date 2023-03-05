export function assemblyGen(rawElements, selectedBlocks) {
    
    let assemblyHTML = '';
    let hero1 = 0;
    let hero2 = 0;
    let hero3 = 0;
    let scrollipageAnchor = 0;
    let servicesWhiteIcon = 0;
    let servicesColorfulIcon = 0;
    let textLeftImageRight = 0;
    let imageLeftTextRight = 0;
    let featureBoxes = 0;
    let featureBoxesCurved = 0;
    let testimonial = 0;
    let stepByStep = 0;
    let pricing = 0;
    let callToAction = 0;
    let pureslider = 0;
    let defaultWeeblyHeader = 0;
    let parallax = 0;
    let carouselFree = 0;
    let carouselFixed = 0;
    let blogReference = 0;
    let weeblySection = 0;
    let defaultFooter = 0;
    let curvedFooter = 0;

    let freeCarouselCount = 0;
    let fixedCarouselCount = 0;
    
    
    // A350-ASSEMBLY SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {

      // Confirmed
      if (selectedBlocks[element] === "hero-1") {
        hero1++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 1 - BLOB -  STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-hero" style="margin-top:100px; margin-bottom:100px;">
        <div class="lynx-hero-large wsite-background" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
          <div class="lynx-block-hero-large" data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top">
            <div class="lynx-subtitle-white" data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top">{${hero1}_hero-1-subtitle:text global="false"}</div>
            <h1 class="lynx-heading-white" data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="top">{${hero1}_hero-1-heading:text global="false"}</h1>
            <p class="lynx-paragraph-white" data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top">{${hero1}_hero-1-paragraph:text global="false"}</p>
            <div class="button-wrap">{${hero1}_lynxbutton:button global="false"}</div>
          </div>
        </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 1 - BLOB - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "default-section") {
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION STARTS HERE
        --------------------------------------------------------------------------------------->
        {{#sections}}
          <div class="content-wrap container">{content}</div>
        {{/sections}}
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "weebly-main-wrap") {
        weeblySection++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION STARTS HERE
        --------------------------------------------------------------------------------------->
          <div class="content-wrap container">{${weeblySection}_MainContent:content global="false"}</div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "hero-2") {
        hero2++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 2 - INLINE BLOB - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-hero" style="margin-top:100px; margin-bottom:100px;">
          <div class="lynx-hero wsite-background" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
            <div class="lynx-block-hero">
              <div class="lynx-subtitle-white" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${hero2}_content-2-subtitle:text global="false"}</div>
              <h2 class="lynx-heading-white-small" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${hero2}_content-2-heading:text global="false"}</h2>
              <!-- Replace With Button --><div data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top" class="button-wrap">{${hero2}_lynxbuttonhero2:button global="false"}</div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 2 - INLINE BLOB - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "hero-3") {
        hero3++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 3 - CENTERED HERO - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-hero" style="margin-top:100px; margin-bottom:100px">
          <div class="lynx-block-center-hero">
            <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${hero3}_content-3-subtitle:text global="false"}</div>
            <h1 class="lynx-heading-hero" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${hero3}_content-3-heading:text global="false"}</h1>
            <div class="button-wrap">{${hero3}_lynxbuttonhero3:button global="false"}</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top" class="lynx-hero-oval wsite-background"></div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT CONTENT HERO 3 - CENTERED HERO - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "navigation") {
        navigation++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        NAVIGATION BAR STARTS HERE
        --------------------------------------------------------------------------------------->
        
        <div id="header">
          <div class="lynx-nav-info">
            <div class="lynx-nav-block">
            <div class="lynx-text-nav-info">{upperinfotext:text}</div>
            <div class="lynx-text-nav-info">{upperphonetext:text}</div>
            </div>
          </div>
          <div class="header-wrap">
            <div class="logo">
                <label id="nav-trigger" class="hamburger" for="mobile-input"><span></span></label>
                {logo}
            </div>
            
            <div class="collective-two-thirds-end">
              <div id="nav" class="menu">
              {menu}
              </div>
              <!-- Button Holder Module -->
              <div class="nav-button-holder">
                <div id="nav-button-1" class="button-wrap" style="margin-right:10px;">{nav:button}</div>
                <div id="nav-button-2" class="button-wrap">{nav-2:button}</div>
              </div>
              <div id="navmobile" class="menu">{menu}</div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        NAVIGATION BAR ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "scrollipage-anchor") {
        scrollipageAnchor++;
        assemblyHTML += `
        <div id="uniqueAnchor_${scrollipageAnchor}" class="scrollipage-anchor">
          <p>ScrolliPage Anchor ${scrollipageAnchor} - Clicking on Dot ${scrollipageAnchor} Will Go Here </p>
        </div>
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "services-white-icon") {
        servicesWhiteIcon++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICES 1 - WHITE ICONS - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content section-margins">
          <div class="lynx-block-center">
            <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">${servicesWhiteIcon}_content-4-subtitle:text global="false"}</div>
            <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-heading:text global="false"}</h2>
          </div>
          <div class="w-layout-grid lynx-grid-features">
            <div id="w-node-d9642e40-fd36-7a6b-0035-b51de6a36fcf-39cced0f" class="lynx-features" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
              <div class="lynx-block-features">
            <div class="lynx-icon-features">{${servicesWhiteIcon}_content-4-image-1:image global="false"}</div>
          </div>
              <h5 class="lynx-heading-features" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-h5-1:text global="false"}</h5>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-p-1:text global="false"}</p>
            </div>
            <div id="w-node-d9642e40-fd36-7a6b-0035-b51de6a36fd6-39cced0f" class="lynx-features" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">
              <div class="lynx-block-features">
            <div class="lynx-icon-features">{${servicesWhiteIcon}_content-4-image-2:image global="false"}</div>
          </div>
              <h5 class="lynx-heading-features" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-h5-2:text global="false"}</h5>
              <p class="lynx-paragraph-features"data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-h5-p:text global="false"}</p>
            </div>
            <div id="w-node-d9642e40-fd36-7a6b-0035-b51de6a36fdd-39cced0f" class="lynx-features" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">
              <div class="lynx-block-features">
            <div class="lynx-icon-features">{${servicesWhiteIcon}_content-4-image-3:image global="false"}</div>
          </div>
              <h5 class="lynx-heading-features" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-h5-3:text global="false"}</h5>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top">{${servicesWhiteIcon}_content-4-p-3:text global="false"}</p>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICES 1 - WHITE ICONS - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "services-colorful-icon") {
        servicesColorfulIcon++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICES 2 - COLORED ICONS - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content section-margins" >
          <div class="lynx-block-center">
            <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-subtitle:text global="false"}</div>
            <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-h2:text global="false"}</h2>
          </div>
          <div class="w-layout-grid lynx-grid-features-4-columns">
            <div id="w-node-_1e31d057-267a-04eb-fd32-2bf97caa8438-39cced0f" class="lynx-features" >
              <div class="lynx-block-features-pink" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${servicesColorfulIcon}_content-5-image-1:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-h6-1:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-p-1:text global="false"}</p>
            </div>
            <div id="w-node-_1e31d057-267a-04eb-fd32-2bf97caa843f-39cced0f" class="lynx-features">
              <div class="lynx-block-features-purple" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${servicesColorfulIcon}_content-5-image-2:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-h6-2:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-p-2:text global="false"}</p>
            </div>
            <div id="w-node-_1e31d057-267a-04eb-fd32-2bf97caa8446-39cced0f" class="lynx-features">
              <div class="lynx-block-features-green" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${servicesColorfulIcon}_content-5-image-3:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-h6-3:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-p-3:text global="false"}</p>
            </div>
            <div id="w-node-_1e31d057-267a-04eb-fd32-2bf97caa844d-39cced0f" class="lynx-features">
              <div class="lynx-block-features-yellow" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${servicesColorfulIcon}_content-5-image-4:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-h6-4:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top">{${servicesColorfulIcon}_content-5-p-4:text global="false"}</p>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICES 2 - COLORED ICONS - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "text-left-image-right") {
        textLeftImageRight++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE 1 - TEXT LEFT, TWO IMAGE RIGHT - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-2 section-margins">
          <div class="w-layout-grid lynx-grid-image-right">
            <div id="w-node-ab436e2f-f1a8-e3df-ac58-1120e9b13777-39cced0f" class="lynx-block-left">
              <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${textLeftImageRight}_content-6-subtitle:text global="false"}</div>
              <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${textLeftImageRight}_content-6-h2-1:text global="false"}</h2>
              <p class="lynx-paragraph" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${textLeftImageRight}_content-6-p-1:text global="false"}</p>
              <!-- Replace With Button --><div data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top" class="button-wrap">{${textLeftImageRight}_lynxbuttonhero6:button global="false"}</div>
            </div>
            <div id="w-node-ab436e2f-f1a8-e3df-ac58-1120e9b13780-39cced0f" class="lynx-block-image" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="top" >
            <div class="lynx-image-absolute" >{${textLeftImageRight}_hero-4-image-1:image global="false"}</div>
            <div class="lynx-image" >{${textLeftImageRight}_hero-4-image-2:image global="false"}</div>
          </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE 1 - TEXT LEFT, TWO IMAGE RIGHT - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "image-left-text-right") {
        imageLeftTextRight++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE 2 - IMAGE AND CAPTION LEFT, TEXT RIGHT - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-3 section-margins">
          <div class="w-layout-grid lynx-grid-image-left">
            <div id="w-node-cf1543b6-2572-928a-a614-5587a665f911-39cced0f" class="lynx-block-image" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="top">
              <div class="lynx-block-absolute">
                <div class="lynx-block-icon-heading"><div class="lynx-icon">{${imageLeftTextRight}_content-7-image-1:image global="false"}</div>
                  <h6 class="lynx-icon-heading">{${imageLeftTextRight}_content-7-h6-1:text global="false"}</h6>
                </div>
                <p class="lynx-paragraph-features">{${imageLeftTextRight}_content-7-p-1:text global="false"}</p>
              </div><div class="lynx-image">{${imageLeftTextRight}_content-7-image-2:image global="false"}</div>
            </div>
            <div id="w-node-cf1543b6-2572-928a-a614-5587a665f91a-39cced0f" class="lynx-block-right">
              <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${imageLeftTextRight}_content-7-subtitle-2:text global="false"}</div>
              <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${imageLeftTextRight}_content-7-h2-2:text global="false"}</h2>
              <div class="inter-div-content-area" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${imageLeftTextRight}_content-7-area:content global="false"}</div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE 2 - IMAGE AND CAPTION LEFT, TEXT RIGHT - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "feature-boxes") {
        featureBoxes++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE BOXES 1 - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-4 section-margins">
          <div class="w-layout-grid lynx-grid-features">
            <div id="w-node-_59214a44-86b0-b0ac-62ee-5ee64f934e39-39cced0f" class="lynx-features-bg">
              <div class="lynx-block-features-pink" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${featureBoxes}_content-8-image-1:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${featureBoxes}_content-8-h6-1:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${featureBoxes}_content-8-p-1:text global="false"}</p>
            </div>
            <div id="w-node-_59214a44-86b0-b0ac-62ee-5ee64f934e40-39cced0f" class="lynx-features-bg">
              <div class="lynx-block-features-purple" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${featureBoxes}_content-8-image-2:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${featureBoxes}_content-8-h6-2:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${featureBoxes}_content-8-p-2:text global="false"}</p>
            </div>
            <div id="w-node-_59214a44-86b0-b0ac-62ee-5ee64f934e49-39cced0f" class="lynx-features-bg">
              <div class="lynx-block-features-green" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top"><div class="lynx-icon-features-small">{${featureBoxes}_content-8-image-3:image global="false"}</div></div>
              <h6 class="lynx-heading-features-small" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="top">{${featureBoxes}_content-8-h6-3:text global="false"}</h6>
              <p class="lynx-paragraph-features" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top">{${featureBoxes}_content-8-p-3:text global="false"}</p>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT FEATURE BOXES 1 - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "feature-boxes-curved") {
        featureBoxesCurved++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICE BOXES 2 - TWO LARGE WITH CURVED IMAGE- STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-4 section-margins">
          <div class="w-layout-grid lynx-grid-2-columns">
            <div id="w-node-_9e334ad3-6887-3642-0bc1-e968d76d4b37-39cced0f" class="lynx-features-large">
              <div class="lynx-block-features-large" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
                <div class="lynx-subtitle-software" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-label-1:text global="false"}</div>
                <h3 class="lynx-heading-features-large" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-h3-1:text global="false"}</h3>
                <p class="lynx-paragraph" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-p-1:text global="false"}</p>
              </div>
              <div class="lynx-link-block-features w-inline-block" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top"><div class="lynx-image-features">{${featureBoxesCurved}_content-9-image-1:image global="false"}</div>
                <div class="lynx-arrow-features"></div>
              </div>
            </div>
            <div id="w-node-_9e334ad3-6887-3642-0bc1-e968d76d4b42-39cced0f" class="lynx-features-large">
              <div class="lynx-block-features-large">
                <div class="lynx-subtitle-productivity" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-label-2:text global="false"}</div>
                <h3 class="lynx-heading-features-large" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-h3-2:text global="false"}</h3>
                <p class="lynx-paragraph" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top">{${featureBoxesCurved}_content-9-p-2:text global="false"}</p>
              </div>
              <div class="lynx-link-block-features w-inline-block" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top"><div class="lynx-image-features">{content-9-image-2:image global="false"}</div>
                <div class="lynx-arrow-features"></div>
              </div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT SERVICE BOXES 2 - TWO LARGE WITH CURVED IMAGE - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "testimonial") {
        testimonial++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT TESTIMONIAL - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-5 section-margins">
          <div class="lynx-reviews-large" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top"><img src="/files/theme/images/Reviews.svg" loading="lazy" alt="" class="lynx-icon-reviews">
            <div class="lynx-block-reviews-large">
              <h4 class="lynx-heading-reviews-large" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${testimonial}_content-10-h4-1:text global="false"}</h4>
              <div class="lynx-client" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top"><div class="lynx-image-client">{${testimonial}_content-10-image-1:image global="false"}</div>
                <div class="lynx-text-client">
                  <h6 class="lynx-heading-client" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${testimonial}_content-10-h6-1:text global="false"}</h6>
                  <div class="lynx-client-info" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${testimonial}_content-10-client-1:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT TESTIMONIAL - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "step-by-step") {
        stepByStep++;
        assemblyHTML += `
        
        <!-------------------------------------------------------------------------------------
        PREBUILT STEP-BY-STEP - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-6 section-margins">
          <div class="lynx-block-center">
            <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${stepByStep}_content-11-subtitle-1:text global="false"}</div>
            <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${stepByStep}_content-11-h2-1:text global="false"}</h2>
          </div>
          <div class="w-layout-grid lynx-grid-process">
            <div id="w-node-_07a8bdf6-b645-fa64-277c-cf4c00dd55bb-39cced0f" class="lynx-process">
              <div class="lynx-block-process-pink" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
                <div class="lynx-process-number">{${stepByStep}_content-11-number-1:text global="false"}</div>
              </div>
              <h5 class="lynx-heading-process" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${stepByStep}_content-11-h5-1:text global="false"}</h5>
              <p class="lynx-paragraph-process" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${stepByStep}_content-11-p-1:text global="false"}</p>
            </div>
            <div id="w-node-_07a8bdf6-b645-fa64-277c-cf4c00dd55c3-39cced0f" class="lynx-process">
              <div class="lynx-block-process-purple" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top">
                <div class="lynx-process-number">{${stepByStep}_content-11-number-2:text global="false"}</div>
              </div>
              <h5 class="lynx-heading-process" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top">{${stepByStep}_content-11-h5-2:text global="false"}</h5>
              <p class="lynx-paragraph-process" data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top">{${stepByStep}_content-11-p-2:text global="false"}</p>
            </div>
            <div id="w-node-_07a8bdf6-b645-fa64-277c-cf4c00dd55cb-39cced0f" class="lynx-process">
              <div class="lynx-block-process-green" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top">
                <div class="lynx-process-number">{${stepByStep}_content-11-number-3:text global="false"}</div>
              </div>
              <h5 class="lynx-heading-process" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="top">{${stepByStep}_content-11-h5-3:text global="false"}</h5>
              <p class="lynx-paragraph-process" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="top">{${stepByStep}_content-11-p-3:text global="false"}</p>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT STEP-BY-STEP - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "pricing") {
        pricing++;
        assemblyHTML += `
        
        <!-------------------------------------------------------------------------------------
        PREBUILT PRICING - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-7 section-margins">
          <div class="lynx-block-center">
            <div class="lynx-subtitle" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">{${pricing}_content-12-subtitle-1:text global="false"}</div>
            <h2 class="lynx-heading" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${pricing}_content-12-h2-1:text global="false"}</h2>
          </div>
          <div class="w-layout-grid lynx-grid-plans-tight">
            <div id="w-node-_29d0f8be-441f-2e92-b107-11717272ce4e-39cced0f" class="lynx-plans-left" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
              <div class="lynx-block-plans">
                <div class="lynx-text-plans-pink-fill">{${pricing}_content-12-plan-1:text global="false"}</div>
              </div>
              <div class="lynx-price-pink">{${pricing}_content-12-price-1:text global="false"}</div>
              <p class="lynx-paragraph-plans">{${pricing}_content-12-paragraph-1:text global="false"}</p>
              <div class="lynx-check-plans" style="width:100% !important;"> <!-- Width set to 100% to allow bottom content to display -->
              <div style="min-height: 20px; width:100% !important;" class="inter-div-content-area">{${pricing}_content-12-content-1:content global="false"}</div>
              </div>
            </div>
            <div id="w-node-_29d0f8be-441f-2e92-b107-11717272ce5f-39cced0f" class="lynx-plans-purple-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">
              <div class="lynx-block-plans">
                <div class="lynx-text-plans-white-fill">{${pricing}_content-12-plan-2:text global="false"}</div>
              </div>
              <div class="lynx-price-white">{${pricing}_content-12-price-2:text global="false"}</div>
              <p class="lynx-paragraph-plans-white">{${pricing}_content-12-paragraph-2:text global="false"}</p>
              <div class="lynx-check-plans" style="width:100% !important;"> <!-- Width set to 100% to allow bottom content to display -->
                <div style="min-height: 20px; width:100% !important;" class="inter-div-content-area">{${pricing}_content-12-content-2:content global="false"}</div>
              </div>
            </div>
            <div id="w-node-_29d0f8be-441f-2e92-b107-11717272ce78-39cced0f" class="lynx-plans-right" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">
              <div class="lynx-block-plans">
                <div class="lynx-text-plans-green-fill">{${pricing}_content-12-plan-3:text global="false"}</div>
              </div>
              <div class="lynx-price-green">{${pricing}_content-12-price-3:text global="false"}</div>
              <p class="lynx-paragraph-plans">{${pricing}_content-12-paragraph-3:text global="false"}</p>
              <div class="lynx-check-plans" style="width:100% !important;"> <!-- Width set to 100% to allow bottom content to display -->
                <div style="min-height: 20px; width:100% !important;" class="inter-div-content-area">{${pricing}_content-12-content-3:content global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT PRICING - ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "call-to-action") {
        callToAction++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT CALL-TO-ACTION - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-content-9 section-margins">
          <div class="lynx-newsletter" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="top">
            <div class="lynx-subtitle-white" data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top">{${callToAction}_content-13-subtitle-1:text global="false"}</div>
            <h2 class="lynx-heading-white-small" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top">{${callToAction}_content-13-h2-1:text global="false"}</h2>
            <div style="padding-top:10px; padding-bottom:10px; width:100% !important; min-height:20px;" class="inter-div-content-area" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top">{${callToAction}_content13area:content global="false"}</div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT STEP-BY-STEP - ENDS HERE
        --------------------------------------------------------------------------------------->
        
        `;
      }

      if (selectedBlocks[element] === "default-footer") {
        defaultFooter++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
          WEEBLY FOOTER - STARTS HERE
          --------------------------------------------------------------------------------------->
        <div class="footer-wrap">
          <div class="site-footer container">
            {footer}
          </div>
        </div>
        
        `;
      }

      if (selectedBlocks[element] === "curved-footer") {
        curvedFooter++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PREBUILT FOOTER - STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="lynx-footer-dark" style="padding-top:80px; padding-bottom: 80px;">
          {thebottomfooter:content}
          <div class="lynx-block-footer-down">
            {lynxfooter2a:content}
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        PREBUILT FOOTER - ENDS HERE
        --------------------------------------------------------------------------------------->
        
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "default-weebly-header") {
        
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="banner-wrap">
          {{#header}}
            <div class="banner">
              <div class="banner-inner">{content}</div>
            </div>
          {{/header}}
        </div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER ENDS HERE
        --------------------------------------------------------------------------------------->
        
        `;
      }
      
      // Confirmed
      if (selectedBlocks[element] === "parallax") {
        parallax++;
        // ${parallax}_
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PARALLAX STARTS HERE
        --------------------------------------------------------------------------------------->
        
        <!--Parallax Section #1-->
        <div id="parent1" class="jarallax" data-speed="0.4" style="pointer-events: auto !important;">
          <div id="section1" class="jarallax-img" style="pointer-events: auto !important">
          <div style="pointer-events:auto !important;" class="toggleSelector1">{${parallax}_3_imageone:image global="false"}</div>
          </div>
          <!--Content Section-->
          <div class="parallaxl" id="content-controller-1" style="background-color:rgba(0,0,0,0.4);">
          <div class="container" class="inter-div-content-area">{${parallax}_3_parallaxone:content global="false"}</div>
          </div>
        </div>
        <!-- In-Editor Parallax Control -->
        <div class="ineditor-control">
          <div class="ineditor-control-grid">
            <div class="ineditor-icon"></div>
            <div class="ineditor-title-field">
              <div class="ineditor-title">Parallax Section Above</div>
              <div class="ineditor-paragraph-parallax"><!--Pseudo-Element--></div>
            </div>
            <div class="ineditor-button">
              <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleBackground()">
              <span class="wsite-button-inner">Toggle Above Background Editability</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-------------------------------------------------------------------------------------
        PARALLAX ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "blog-reference") {
        blogReference++; 
        // ${blogReference}_
        assemblyHTML += `
        <!-- In-Editor Dynamic Blog Control -->
        <div class="ineditor-control">
          <div class="ineditor-control-grid">
            <div class="ineditor-icon"></div>
            <div class="ineditor-title-field">
              <div class="ineditor-title">Below is a blog section. In the right text area, please enter the URL slug of your blog page (for example, /blog)</div>
              <div class="ineditor-paragraph-blog"><!--Pseudo-Element--></div>
            </div>
            <div class="ineditor-button">
              <div id="user-submitted-url" class="user-submitted-url-text">{usersubmittedurl:text global="false"}</div>
            </div>
          </div>
        </div>
        
        <section class="combine-section_blog4">
          <div class="container">
            <div class="combine-padding-section-medium-2">
              <div class="combine-container-small-2">
                <div class="combine-text-align-center-2 inter-div-content-area">
                  {${blogReference}_1_blogreferencecontent:content global="false"}
                </div>
              </div>
              <div class="combine-space-large"></div>
              <div class="combine-container-large-3">
                <div class="combine-blog4_component">
            
            <!-- New Blog Thumbnail -->
                  <a href="#" class="combine-blog4_featured w-inline-block inject-blog-link" data-aos-delay="000" data-aos-anchor-placement="top">
                    <div class="combine-blog4_image-featured"><img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2509/content_geordanna-cordero-fields-762612-unsplash.jpg" loading="lazy" sizes="100vw" srcset="" alt="placeholder purple" class="combine-blog4_image inject-blog-image"></div>
                    <div class="combine-blog4_content-featured">
                      <div class="combine-blog4_date inject-blog-date">Sept 26, 2022</div>
                      <h3 class="combine-heading-style-h5 inject-blog-title">Top 8 ways to supercharge Weebly site performance</h3>
                      <div class="combine-text-size-regular-2 inject-blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum porta enim et pellentesque.</div>
                      <div class="combine-button-icon">
                        <div class="combine-button-content">
                          <div>Read Article</div>
                          <div class="combine-chevron-right_icon w-embed"><svg width="100%" height="currentHeight" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.83301 13L11.833 8L6.83301 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div id="w-node-ca5e8404-8160-2880-db0f-eb8e332fca17-bcd0182b" class="combine-blog4_wrapper">
            
              <!-- New Blog Thumbnail -->
                    <a href="#" class="combine-blog4_item w-inline-block inject-blog-link" data-aos-delay="000" data-aos-anchor-placement="top" >
                      <div class="combine-blog4_image-wrapper"><img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2509/content_geordanna-cordero-fields-762612-unsplash.jpg" loading="lazy" sizes="100vw" srcset="" alt="placeholder blue" class="combine-blog4_image inject-blog-image"></div>
                      <div class="combine-blog4_content">
                        <div class="combine-blog4_date inject-blog-date">Sept 12, 2022</div>
                        <h3 class="combine-heading-style-h6 inject-blog-title">Low fidelity vs. high fidelity: the differences between design prototypes</h3>
                        <div class="combine-blog4_paragraph inject-blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div class="combine-button-icon">
                          <div class="combine-button-content">
                            <div>Read Article</div>
                            <div class="combine-chevron-right_icon w-embed"><svg width="100%" height="currentHeight" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83301 13L11.833 8L6.83301 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></div>
                          </div>
                        </div>
                      </div>
                    </a>
              
              <!-- New Blog Thumbnail -->
                    <a href="#" class="combine-blog4_item w-inline-block inject-blog-link" data-aos-delay="000" data-aos-anchor-placement="top">
                      <div class="combine-blog4_image-wrapper"><img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2509/content_geordanna-cordero-fields-762612-unsplash.jpg" loading="lazy" sizes="100vw" srcset="" alt="placeholder orange" class="combine-blog4_image inject-blog-image"></div>
                      <div class="combine-blog4_content">
                        <div class="combine-blog4_date inject-blog-date">Aug 30, 2022</div>
                        <h3 class="combine-heading-style-h6 inject-blog-title">The power of automation, natively in Webflow</h3>
                        <div class="combine-blog4_paragraph inject-blog-paragraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div class="combine-button-icon">
                          <div class="combine-button-content">
                            <div>Read Article</div>
                            <div class="combine-chevron-right_icon w-embed"><svg width="100%" height="currentHeight" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83301 13L11.833 8L6.83301 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></div>
                          </div>
                        </div>
                      </div>
                    </a>
              
              <!-- New Blog Thumbnail -->
                    <a href="#" class="combine-blog4_item w-inline-block inject-blog-link" data-aos-delay="000" data-aos-anchor-placement="top">
                      <div class="combine-blog4_image-wrapper"><img src="https://d1zdxptf8tk3f9.cloudfront.net/ckeditor_assets/pictures/2509/content_geordanna-cordero-fields-762612-unsplash.jpg" loading="lazy" sizes="100vw" srcset="" alt="placeholder purple" class="combine-blog4_image inject-blog-image"></div>
                      <div class="combine-blog4_content">
                        <div class="combine-blog4_date inject-blog-date">Aug 08, 2022</div>
                        <h3 class="combine-heading-style-h6 inject-blog-title">What is a content management system?</h3>
                        <div class="combine-blog4_paragraph inject-blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div class="combine-button-icon">
                          <div class="combine-button-content">
                            <div>Read Article</div>
                            <div class="combine-chevron-right_icon w-embed"><svg width="100%" height="currentHeight" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83301 13L11.833 8L6.83301 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "pureslider") {
        pureslider++;

        // Obtains the count that the user selected in pop-up
        let currentElementCount = rawElements[element].selectedCustomization;

        // BEGINNING of PureSlider HTML
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        PURESLIDER STARTS HERE
        --------------------------------------------------------------------------------------->
        <!--PureSlider-10-->
        <div class="swiper-container pureslider-start" style="pointer-events: auto !important;">
          <div class="swiper-wrapper" style="pointer-events: auto !important;">
        `;

        // MIDDLE Slider Generation
        for (let sliderCount = 0; sliderCount < currentElementCount; sliderCount++) {
            assemblyHTML += `
            <!-- PureSlider Slide Starts Here -->
              <div class="swiper-slide" style="pointer-events: auto !important;">
                <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                  {${pureslider}_sliderimage_${sliderCount}:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                  <!--Outer-->
                  <div class="middle-container"
                  style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                  <!--Middle-->
                  <div class="slider-container">
                    <!--Inner-->
                    <div id="slide-0" class="inter-div-content-area">{${pureslider}__slidercontent_${sliderCount}:content global="false"}</div>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              <!-- PureSlider Slide Ends Here -->
            `;
        }

        // END of PureSlider HTML
        assemblyHTML += `
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
        <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
      </div>
      <!-- In-Editor PureSlider Control -->
      <div class="ineditor-control">
        <div class="ineditor-control-grid">
          <div class="ineditor-title-field">
            <div class="ineditor-title">Background Editing for PureSlider Currently: <span id="headline-lock">Locked</span></div>
            <div class="ineditor-paragraph-pureslider"><!--Pseudo-Element--></div>
          </div>
          <div class="ineditor-button">
            <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
              <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
            </a>
          </div>
        </div>
      </div>
      <!-------------------------------------------------------------------------------------
      PURESLIDER ENDS HERE
      --------------------------------------------------------------------------------------->
        `;

      }

      // Confirmed
      if (selectedBlocks[element] === "carousel-fixed") {

        // References same item index but in Raw Elements Array - An Array of Objects
        let currentElementCount = rawElements[element].selectedCustomization;
        fixedCarouselCount++;

        // BEGINNING - Build beginning of Carousel Block
        assemblyHTML += 
        `
        <!-------------------------------------------------------------------------------
        CAROUSEL FIXED STARTS HERE
        --------------------------------------------------------------------------------->
        <div class="main-wrap" style="padding-top:30px; padding-bottom: 30px;">
        <div class="container">{top-carousel-content:content global="false"}</div>
          <div class="container" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
          <div class="swiper mySwiper carousel-slider">
            <div class="swiper-wrapper">
        `;

        // MIDDLE - Individual Carousel Blocks - Section count comes first, carouselGen count comes second 
        for (var carouselGen = 0; carouselGen < currentElementCount; carouselGen++) {
        assemblyHTML += `
        <!-- Start of Carousel Slide -->
        <div class="swiper-slide" style="min-height:200px; height:auto;">
          <div class="swiper-container">
          {${fixedCarouselCount}_carouselimage_${carouselGen}:image global="false"}
          <h2>{${fixedCarouselCount}_carouselh2_${carouselGen}:text global="false"}</h2>
          <p>{${fixedCarouselCount}_carouselp_${carouselGen}:text global="false"}</p>
          </div>
        </div>
        <!-- End of Carousel Slide -->
        `;
        }

        // END - Attach End of Carousel Block
        assemblyHTML += 
        `
            </div>
            <div class="swiper-pagination"></div>
          </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        CAROUSEL FIXED ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // Confirmed
      if (selectedBlocks[element] === "carousel-free") {

        // References same item index but in Raw Elements Array - An Array of Objects
        let currentElementCount = rawElements[element].selectedCustomization;
        freeCarouselCount++; // ${freeCarouselCount}_

        // BEGINNING - Build beginning of Carousel Block
        assemblyHTML += 
        `
        <!-------------------------------------------------------------------------------
        START OF BODY SECTION: Carousel
        --------------------------------------------------------------------------------->
        <div class="main-wrap">
            <div class="container" data-aos="fade-up" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="swiper mySwiper carousel-slider">
                    <div class="swiper-wrapper">
        `;

        // CENTRE - Start Dynamically Generating Carousel Content Based on Number of Carousel Slides 
        for (var carouselGen = 0; carouselGen < currentElementCount; carouselGen++) {
            assemblyHTML += `
            <!-- Start of Carousel Slide -->
            <div class="swiper-slide" style="min-height:200px; height:auto;">
              <div class="swiper-container">
              <div class="custom-content-area">{${freeCarouselCount}_carousel-custom-content-${carouselGen}_:content global="false"}</div>
              </div>
            </div>
            <!-- End of Carousel Slide -->
        `;
        }

        // END - Attach End of Carousel Block
        assemblyHTML += 
        `
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <!-------------------------------------------------------------------------------
        END OF BODY SECTION: Carousel
        --------------------------------------------------------------------------------->
        
        `;
      }


    }
    return assemblyHTML;
  }