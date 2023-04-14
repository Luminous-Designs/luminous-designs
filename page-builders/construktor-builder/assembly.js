export function assemblyGen(rawElements, selectedBlocks) {
    
    // Default Blocks
    let assemblyHTML = '';
    let scrollipageAnchor = 0;
    let pureslider = 0;
    let parallax = 0;
    let blogReference = 0;
    let weeblySection = 0;
    let freeCarouselCount = 0;
    let fixedCarouselCount = 0;
    
    // Theme-Specific Blocks
    let prebuiltheader2 = 0;
    let popup3xfixed = 0;
    let popup2xfixed = 0;
    let popup4xfixed = 0;
    let popup2xdragdrop = 0;
    let popup3xdragdrop = 0;
    let popup4xdragdrop = 0;
    let textleftimagerightfixed = 0;
    let imagelefttextrightfixed = 0;
    let textleftimagerightdragdrop = 0;
    let imagelefttextrightdragdrop = 0;
    let calltoactionfixed = 0;
    let imagetextandtestimonialfixed = 0;
    let imagetextandtestimonialdragdrop = 0;
    let testimonials3x = 0;
    let testimonials2x = 0;
    let testimonials4x = 0;
    let testimonials5x = 0;
    let stackedtextheaderfixed = 0;
    let metrics4x = 0;
    let metrics6x = 0;
    let metrics5x = 0;
    let metrics2x = 0;
    let metrics3x = 0;
    let alternatinggrid = 0;
    let iconboxes5x = 0;
    let imageboxes3x = 0;
    let imageboxes2x = 0;
    let imageboxes4x = 0;
    let imageboxes5x = 0;
    let imageboxes6x = 0;
    let dragdropareawithsidebar = 0;
    let serviceboxes2x = 0;
    let serviceboxes3x = 0;
    let serviceboxes4x = 0;
    let serviceboxes5x = 0;
    let serviceboxes6x = 0;
    let serviceboxes7x = 0;
    let serviceboxes8x = 0;
    let projects2x = 0;
    let projects3x = 0;
    let projects4x = 0;
    let projects5x = 0;
    let projects6x = 0;
    let projects7x = 0;
    let projects8x = 0;
    let projects9x = 0;
    let projects10x = 0;
    let projectspageheading = 0;
    let projectspagecontent = 0;
    
    // A350-ASSEMBLY SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {

      // UNIQUE BLOCKS 
    

// This is the start of the prebuilt-header-2
    if (selectedBlocks[element] === "prebuilt-header-2") {
      prebuiltheader2++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      prebuilt-header-2 STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="prebuilt-header-2" class="section home-hero wf-section">
    <div class="container-default home-hero w-container">
      <div class="home-hero-wrapper">
        <h1 class="title text-color-neutral-100 home-hero">{${prebuiltheader2}_text303:text global="false"}</h1>
        <p class="paragraph text-color-neutral-100 home-hero">{${prebuiltheader2}_text304:text global="false"}</p>
        <div class="button-row">
          <div class="button-row-first replace-this-button"><div class="button-wrap">{${prebuiltheader2}_button1031:button global="false"}</div></div>
          <div class="button-row-last replace-this-button"><div class="button-wrap">{${prebuiltheader2}_button1032:button global="false"}</div></div>
        </div>
      </div>
    </div>
    <div class="bg home-hero-firlter wsite-background"></div>
  </section>
      <!-------------------------------------------------------------------------------------
      prebuilt-header-2 ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of prebuilt-header-2

// This is the start of the popup-3x-fixed
    if (selectedBlocks[element] === "popup-3x-fixed") {
      popup3xfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-3x-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-3x-fixed" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _3x-boxes">
          <div class="home-contact-link-wrapper-2">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup3xfixed}_image0:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup3xfixed}_text306:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup3xfixed}_div767:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup3xfixed}_image1:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup3xfixed}_text307:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup3xfixed}_div768:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup3xfixed}_image2:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link-featured">{${popup3xfixed}_text308:text global="false"}</h2>
                <div class="home-contact-link-text text-color-neutral-100 replace-this-text">{${popup3xfixed}_div769:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-3x-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-3x-fixed

// This is the start of the popup-2x-fixed
    if (selectedBlocks[element] === "popup-2x-fixed") {
      popup2xfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-2x-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-2x-fixed" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _2x-boxes">
          <div class="home-contact-link-wrapper-2">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup2xfixed}_image3:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup2xfixed}_text310:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup2xfixed}_div770:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link">
                <div class="underline-link-text replace-this-text">{${popup2xfixed}_div771:text global="false"}</div>
                <div class="underline-wrapper home-contact-link">
                  <div class="underline home-contact-link"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup2xfixed}_image4:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link-featured">{${popup2xfixed}_text311:text global="false"}</h2>
                <div class="home-contact-link-text text-color-neutral-100 replace-this-text">{${popup2xfixed}_div772:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link light">
                <div class="underline-link-text replace-this-text">{${popup2xfixed}_div773:text global="false"}</div>
                <div class="underline-wrapper light">
                  <div class="underline light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-2x-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-2x-fixed

// This is the start of the popup-4x-fixed
    if (selectedBlocks[element] === "popup-4x-fixed") {
      popup4xfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-4x-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-4x-fixed" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _4x-boxes">
          <div class="home-contact-link-wrapper-2">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup4xfixed}_image5:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup4xfixed}_text313:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup4xfixed}_div774:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link">
                <div class="underline-link-text replace-this-text">{${popup4xfixed}_div775:text global="false"}</div>
                <div class="underline-wrapper home-contact-link">
                  <div class="underline home-contact-link"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper line-right">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup4xfixed}_image6:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup4xfixed}_text314:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup4xfixed}_div776:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link">
                <div class="underline-link-text replace-this-text">{${popup4xfixed}_div777:text global="false"}</div>
                <div class="underline-wrapper home-contact-link">
                  <div class="underline home-contact-link"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup4xfixed}_image7:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link">{${popup4xfixed}_text315:text global="false"}</h2>
                <div class="home-contact-link-text replace-this-text">{${popup4xfixed}_div778:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link">
                <div class="underline-link-text replace-this-text">{${popup4xfixed}_div779:text global="false"}</div>
                <div class="underline-wrapper home-contact-link">
                  <div class="underline home-contact-link"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1">
            <div class="image-wrapper home-contact-link-icon"><div class="image home-contact-link-icon">{${popup4xfixed}_image8:image global="false"}</div></div>
            <div class="home-contact-link-content">
              <div class="home-contact-link-content-top">
                <h2 class="title h3-size home-contact-link-featured">{${popup4xfixed}_text316:text global="false"}</h2>
                <div class="home-contact-link-text text-color-neutral-100 replace-this-text">{${popup4xfixed}_div780:text global="false"}</div>
              </div>
              <div class="underline-link home-contact-link light">
                <div class="underline-link-text replace-this-text">{${popup4xfixed}_div781:text global="false"}</div>
                <div class="underline-wrapper light">
                  <div class="underline light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-4x-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-4x-fixed

// This is the start of the popup-2x-dragdrop
    if (selectedBlocks[element] === "popup-2x-dragdrop") {
      popup2xdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-2x-dragdrop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-2x-dragdrop" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _2x-boxes">
          <div class="home-contact-link-wrapper-2">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup2xdragdrop}_content1039:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup2xdragdrop}_content1040:content global="false"}</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-2x-dragdrop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-2x-dragdrop

// This is the start of the popup-3x-dragdrop
    if (selectedBlocks[element] === "popup-3x-dragdrop") {
      popup3xdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-3x-dragdrop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-3x-dragdrop" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _3x-boxes">
          <div class="home-contact-link-wrapper-2 less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup3xdragdrop}_content1041:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup3xdragdrop}_content1042:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1 less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup3xdragdrop}_content1043:content global="false"}</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-3x-dragdrop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-3x-dragdrop

// This is the start of the popup-4x-dragdrop
    if (selectedBlocks[element] === "popup-4x-dragdrop") {
      popup4xdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      popup-4x-dragdrop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="popup-4x-dragdrop" class="section home-contact-links wf-section">
    <div class="container-default home-contact-links w-container">
      <div class="home-contact-links-wrapper">
        <div class="w-layout-grid grid _4x-boxes">
          <div class="home-contact-link-wrapper-2 less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup4xdragdrop}_content1044:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper line-right less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup4xdragdrop}_content1045:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup4xdragdrop}_content1046:content global="false"}</div></div>
          </div>
          <div class="home-contact-link-wrapper featured main-color-1 less-padding">
            <div class="drag-drop-popup replace-this-content"><div class="inter-div-content-area">{${popup4xdragdrop}_content1047:content global="false"}</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      popup-4x-dragdrop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of popup-4x-dragdrop

// This is the start of the text-left-image-right-fixed
    if (selectedBlocks[element] === "text-left-image-right-fixed") {
      textleftimagerightfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      text-left-image-right-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="text-left-image-right-fixed" class="section home-about wf-section">
    <div class="container-default w-container">
      <div class="home-about-wrapper">
        <div class="split-content home-about-left">
          <div class="subtitle replace-this-text animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${textleftimagerightfixed}_div782:text global="false"}</div>
          <h2 class="title home-about animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${textleftimagerightfixed}_text320:text global="false"}</h2>
          <p class="paragraph home-about animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${textleftimagerightfixed}_text321:text global="false"}</p>
          <div class="replace-this-button animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="button-wrap">{${textleftimagerightfixed}_button1033:button global="false"}</div></div>
        </div>
        <div class="split-content home-about-right animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-about animate-this-left">{${textleftimagerightfixed}_image9:image global="false"}</div>
          <div class="bg home-about-image main-color-1 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      text-left-image-right-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of text-left-image-right-fixed

// This is the start of the image-left-text-right-fixed
    if (selectedBlocks[element] === "image-left-text-right-fixed") {
      imagelefttextrightfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-left-text-right-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-left-text-right-fixed" class="section home-about wf-section">
    <div class="container-default w-container">
      <div class="home-about-wrapper flipped">
        <div class="split-content home-about-left flipped">
          <div class="subtitle replace-this-text animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagelefttextrightfixed}_div783:text global="false"}</div>
          <h2 class="title home-about animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagelefttextrightfixed}_text322:text global="false"}</h2>
          <p class="paragraph home-about animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagelefttextrightfixed}_text323:text global="false"}</p>
          <div class="replace-this-button animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="button-wrap">{${imagelefttextrightfixed}_button1034:button global="false"}</div></div>
        </div>
        <div class="split-content home-about-right flipped"><div class="image home-about animate-this-left">{${imagelefttextrightfixed}_image10:image global="false"}</div>
          <div class="bg home-about-image main-color-1 animate-this-left flipped-lef" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-left-text-right-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-left-text-right-fixed

// This is the start of the text-left-image-right-drag-drop
    if (selectedBlocks[element] === "text-left-image-right-drag-drop") {
      textleftimagerightdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      text-left-image-right-drag-drop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="text-left-image-right-drag-drop" class="section home-about wf-section">
    <div class="container-default w-container">
      <div class="home-about-wrapper">
        <div class="split-content home-about-left">
          <div class="theme-dd-area replace-this-content"><div class="inter-div-content-area">{${textleftimagerightdragdrop}_content1048:content global="false"}</div></div>
        </div>
        <div class="split-content home-about-right animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-about animate-this-left">{${textleftimagerightdragdrop}_image11:image global="false"}</div>
          <div class="bg home-about-image main-color-1 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      text-left-image-right-drag-drop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of text-left-image-right-drag-drop

// This is the start of the image-left-text-right-drag-drop
    if (selectedBlocks[element] === "image-left-text-right-drag-drop") {
      imagelefttextrightdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-left-text-right-drag-drop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-left-text-right-drag-drop" class="section home-about wf-section">
    <div class="container-default w-container">
      <div class="home-about-wrapper flipped">
        <div class="split-content home-about-left flipped">
          <div class="theme-dd-area replace-this-content"><div class="inter-div-content-area">{${imagelefttextrightdragdrop}_content1049:content global="false"}</div></div>
        </div>
        <div class="split-content home-about-right flipped"><div class="image home-about animate-this-left">{${imagelefttextrightdragdrop}_image12:image global="false"}</div>
          <div class="bg home-about-image main-color-1 animate-this-left flipped-lef" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-left-text-right-drag-drop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-left-text-right-drag-drop

// This is the start of the call-to-action-fixed
    if (selectedBlocks[element] === "call-to-action-fixed") {
      calltoactionfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      call-to-action-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="call-to-action-fixed" class="section bg-primary-1 accent main-color-1 wf-section">
    <div class="container-default accent w-container">
      <div class="cta-wrapper">
        <h2 class="title text-color-neutral-100 cta animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${calltoactionfixed}_text324:text global="false"}</h2>
        <div class="button-row animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
          <div class="button-row-first replace-this-button"><div class="button-wrap">{${calltoactionfixed}_button1035:button global="false"}</div></div>
          <div class="button-row-last replace-this-button"><div class="button-wrap">{${calltoactionfixed}_button1036:button global="false"}</div></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      call-to-action-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of call-to-action-fixed

// This is the start of the image-text-and-testimonial-fixed
    if (selectedBlocks[element] === "image-text-and-testimonial-fixed") {
      imagetextandtestimonialfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-text-and-testimonial-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-text-and-testimonial-fixed" class="section home-perks wf-section">
    <div class="container-default w-container">
      <div class="home-perks-wrapper">
        <div class="split-content home-perks-left animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-perks">{${imagetextandtestimonialfixed}_image13:image global="false"}</div>
          <div class="card home-perks-testimonial">
            <div class="card-home-perks-testimonial-text replace-this-text">{${imagetextandtestimonialfixed}_div784:text global="false"}</div>
            <div class="card-home-perks-testimonial-about-wrapper"><div class="image card-home-perks-testimonial-about-image">{${imagetextandtestimonialfixed}_image14:image global="false"}</div>
              <div class="card-home-perks-testimonial-about-content">
                <div class="card-home-perks-testimonial-name replace-this-text">{${imagetextandtestimonialfixed}_div785:text global="false"}</div>
                <div class="card-home-perks-testimonial-location replace-this-text">{${imagetextandtestimonialfixed}_div786:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="bg home-perks-image main-color-1"></div>
        </div>
        <div class="split-content home-perks-right">
          <div class="subtitle replace-this-text animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagetextandtestimonialfixed}_div787:text global="false"}</div>
          <h2 class="title home-perks animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagetextandtestimonialfixed}_text325:text global="false"}</h2>
          <p class="paragraph home-perks animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${imagetextandtestimonialfixed}_text326:text global="false"}</p>
          <div class="w-layout-grid home-perks-grid">
            <div class="home-perk-wrapper animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-perk-icon">{${imagetextandtestimonialfixed}_image15:image global="false"}</div>
              <div class="home-perk-text replace-this-text">{${imagetextandtestimonialfixed}_div788:text global="false"}</div>
            </div>
            <div class="home-perk-wrapper animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-perk-icon">{${imagetextandtestimonialfixed}_image16:image global="false"}</div>
              <div class="home-perk-text replace-this-text">{${imagetextandtestimonialfixed}_div789:text global="false"}</div>
            </div>
            <div class="home-perk-wrapper animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-perk-icon">{${imagetextandtestimonialfixed}_image17:image global="false"}</div>
              <div class="home-perk-text replace-this-text">{${imagetextandtestimonialfixed}_div790:text global="false"}</div>
            </div>
          </div>
          <div class="replace-this-button animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="button-wrap">{${imagetextandtestimonialfixed}_button1037:button global="false"}</div></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-text-and-testimonial-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-text-and-testimonial-fixed

// This is the start of the image-text-and-testimonial-drag-drop
    if (selectedBlocks[element] === "image-text-and-testimonial-drag-drop") {
      imagetextandtestimonialdragdrop++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-text-and-testimonial-drag-drop STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-text-and-testimonial-drag-drop" class="section home-perks wf-section">
    <div class="container-default w-container">
      <div class="home-perks-wrapper">
        <div class="split-content home-perks-left animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="image home-perks">{${imagetextandtestimonialdragdrop}_image18:image global="false"}</div>
          <div class="card home-perks-testimonial">
            <div class="card-home-perks-testimonial-about-wrapper drag-drop-based">
              <div class="card-home-perks-testimonial-about-content drag-drop-based">
                <div class="theme-dd-area replace-this-content"><div class="inter-div-content-area">{${imagetextandtestimonialdragdrop}_content1050:content global="false"}</div></div>
              </div>
            </div>
          </div>
          <div class="bg home-perks-image main-color-1"></div>
        </div>
        <div class="split-content home-perks-right drag-drop-based">
          <div class="theme-dd-area replace-this-content"><div class="inter-div-content-area">{${imagetextandtestimonialdragdrop}_content1051:content global="false"}</div></div>
          <div class="theme-dd-area replace-this-content"><div class="inter-div-content-area">{${imagetextandtestimonialdragdrop}_content1052:content global="false"}</div></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-text-and-testimonial-drag-drop ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-text-and-testimonial-drag-drop

// This is the start of the testimonials-3x
    if (selectedBlocks[element] === "testimonials-3x") {
      testimonials3x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      testimonials-3x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="testimonials-3x" class="section wf-section">
    <div class="container-default w-container">
      <div class="testimonials-wrapper">
        <div class="split-content testimonials-left">
          <div class="testimonials-title-wrapper animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="subtitle replace-this-text">{${testimonials3x}_div791:text global="false"}</div>
            <h2 class="title testimonials">{${testimonials3x}_text327:text global="false"}</h2>
          </div>
          <div class="card testimonial animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials3x}_text328:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials3x}_text329:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials3x}_image19:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials3x}_div792:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials3x}_div793:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content testimonials-right">
          <div class="card testimonial top animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials3x}_text330:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials3x}_text331:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials3x}_image20:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials3x}_div794:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials3x}_div795:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials3x}_text332:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials3x}_text333:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials3x}_image21:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials3x}_div796:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials3x}_div797:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg testimonials main-color-1"></div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      testimonials-3x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of testimonials-3x

// This is the start of the testimonials-2x
    if (selectedBlocks[element] === "testimonials-2x") {
      testimonials2x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      testimonials-2x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="testimonials-2x" class="section wf-section">
    <div class="container-default w-container">
      <div class="testimonials-wrapper">
        <div class="split-content testimonials-left">
          <div class="testimonials-title-wrapper animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="subtitle">Testimonials</div>
            <h2 class="title testimonials">{${testimonials2x}_text334:text global="false"}</h2>
          </div>
          <div class="card testimonial animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials2x}_text335:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials2x}_text336:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials2x}_image22:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials2x}_div798:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials2x}_div799:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content testimonials-right">
          <div class="card testimonial animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials2x}_text337:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials2x}_text338:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials2x}_image23:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials2x}_div800:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials2x}_div801:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg testimonials main-color-1"></div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      testimonials-2x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of testimonials-2x

// This is the start of the testimonials-4x
    if (selectedBlocks[element] === "testimonials-4x") {
      testimonials4x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      testimonials-4x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="testimonials-4x" class="section wf-section">
    <div class="container-default w-container">
      <div class="testimonials-wrapper">
        <div class="split-content testimonials-left">
          <div class="testimonials-title-wrapper animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="subtitle">Testimonials</div>
            <h2 class="title testimonials">{${testimonials4x}_text339:text global="false"}</h2>
          </div>
          <div class="card testimonial animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials4x}_text340:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials4x}_text341:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials4x}_image24:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials4x}_div802:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials4x}_div803:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-left top-padding" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials4x}_text342:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials4x}_text343:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials4x}_image25:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials4x}_div804:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials4x}_div805:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content testimonials-right">
          <div class="card testimonial animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials4x}_text344:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials4x}_text345:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials4x}_image26:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials4x}_div806:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials4x}_div807:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-right top-padding" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials4x}_text346:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials4x}_text347:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials4x}_image27:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials4x}_div808:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials4x}_div809:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg testimonials main-color-1"></div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      testimonials-4x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of testimonials-4x

// This is the start of the testimonials-5x
    if (selectedBlocks[element] === "testimonials-5x") {
      testimonials5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      testimonials-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="testimonials-5x" class="section wf-section">
    <div class="container-default w-container">
      <div class="testimonials-wrapper">
        <div class="split-content testimonials-left">
          <div class="testimonials-title-wrapper animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="subtitle">Testimonials</div>
            <h2 class="title testimonials">{${testimonials5x}_text348:text global="false"}</h2>
          </div>
          <div class="card testimonial animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials5x}_text349:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials5x}_text350:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials5x}_image28:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials5x}_div810:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials5x}_div811:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-left top-padding" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials5x}_text351:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials5x}_text352:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials5x}_image29:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials5x}_div812:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials5x}_div813:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content testimonials-right">
          <div class="card testimonial animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials5x}_text353:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials5x}_text354:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials5x}_image30:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials5x}_div814:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials5x}_div815:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-right top-padding" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials5x}_text355:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials5x}_text356:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials5x}_image31:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials5x}_div816:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials5x}_div817:text global="false"}</div>
              </div>
            </div>
          </div>
          <div class="card testimonial animate-this-right top-padding" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="card-testimonial-content-top">
              <h3 class="title h4-size card-testimonial">{${testimonials5x}_text357:text global="false"}</h3>
              <p class="paragraph card-testimonial">{${testimonials5x}_text358:text global="false"}</p>
            </div>
            <div class="card-testimonial-content-bottom"><div class="image card-testimonial-picture">{${testimonials5x}_image32:image global="false"}</div>
              <div class="card-testimonial-about-content">
                <div class="card-testimonial-name replace-this-text">{${testimonials5x}_div818:text global="false"}</div>
                <div class="card-testimonial-location replace-this-text">{${testimonials5x}_div819:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg testimonials main-color-1"></div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      testimonials-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of testimonials-5x

// This is the start of the stacked-text-header-fixed
    if (selectedBlocks[element] === "stacked-text-header-fixed") {
      stackedtextheaderfixed++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      stacked-text-header-fixed STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="stacked-text-header-fixed" class="section about-hero wf-section">
    <div class="container-default about-hero w-container">
      <div class="about-hero-wrapper">
        <div class="about-hero-content">
          <h1 class="title about-hero">{${stackedtextheaderfixed}_text359:text global="false"}</h1>
          <p class="paragraph about-hero">{${stackedtextheaderfixed}_text360:text global="false"}</p>
          <div class="button-row replace-this-button"><div class="button-wrap">{${stackedtextheaderfixed}_button1038:button global="false"}</div></div>
        </div><div class="image about-hero">{${stackedtextheaderfixed}_image33:image global="false"}</div>
      </div>
    </div>
    <div class="bg about-hero main-color-1"></div>
  </section>
      <!-------------------------------------------------------------------------------------
      stacked-text-header-fixed ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of stacked-text-header-fixed

// This is the start of the metrics-4x
    if (selectedBlocks[element] === "metrics-4x") {
      metrics4x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      metrics-4x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="metrics-4x" class="section padding-100px wf-section">
    <div class="container-medium-990px">
      <div class="about-achievements-grid">
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics4x}_div820:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics4x}_div821:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics4x}_div822:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics4x}_div823:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics4x}_div824:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics4x}_div825:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics4x}_div826:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics4x}_div827:text global="false"}</div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      metrics-4x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of metrics-4x

// This is the start of the metrics-6x
    if (selectedBlocks[element] === "metrics-6x") {
      metrics6x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      metrics-6x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="metrics-6x" class="section padding-100px wf-section">
    <div class="container-medium-990px">
      <div class="about-achievements-grid _6x">
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div828:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div829:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div830:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div831:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div832:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div833:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div834:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div835:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div836:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div837:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics6x}_div838:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics6x}_div839:text global="false"}</div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      metrics-6x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of metrics-6x

// This is the start of the metrics-5x
    if (selectedBlocks[element] === "metrics-5x") {
      metrics5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      metrics-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="metrics-5x" class="section padding-100px wf-section">
    <div class="container-medium-990px">
      <div class="about-achievements-grid _5x">
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics5x}_div840:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics5x}_div841:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics5x}_div842:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics5x}_div843:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics5x}_div844:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics5x}_div845:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics5x}_div846:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics5x}_div847:text global="false"}</div>
        </div>
        <div class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics5x}_div848:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics5x}_div849:text global="false"}</div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      metrics-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of metrics-5x

// This is the start of the metrics-2x
    if (selectedBlocks[element] === "metrics-2x") {
      metrics2x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      metrics-2x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="metrics-2x" class="section padding-100px wf-section">
    <div class="container-medium-990px">
      <div class="about-achievements-grid _2x">
        <div id="w-node-af819888-89b6-9320-0bdd-af20882ec60c-7995d189" class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics2x}_div850:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics2x}_div851:text global="false"}</div>
        </div>
        <div id="w-node-af819888-89b6-9320-0bdd-af20882ec613-7995d189" class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics2x}_div852:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics2x}_div853:text global="false"}</div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      metrics-2x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of metrics-2x

// This is the start of the metrics-3x
    if (selectedBlocks[element] === "metrics-3x") {
      metrics3x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      metrics-3x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="metrics-3x" class="section padding-100px wf-section">
    <div class="container-medium-990px">
      <div class="about-achievements-grid _3x">
        <div id="w-node-b5c7f7aa-2962-72f1-40aa-24206b877285-7995d189" class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics3x}_div854:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics3x}_div855:text global="false"}</div>
        </div>
        <div id="w-node-b5c7f7aa-2962-72f1-40aa-24206b87728c-7995d189" class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics3x}_div856:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics3x}_div857:text global="false"}</div>
        </div>
        <div id="w-node-f742d800-a2ed-d1f3-bf8c-47f995f8d133-7995d189" class="about-achievement-wrapper">
          <div class="big-number about-achievement replace-this-text">{${metrics3x}_div858:text global="false"}</div>
          <div class="about-achievement-text replace-this-text">{${metrics3x}_div859:text global="false"}</div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      metrics-3x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of metrics-3x

// This is the start of the alternating-grid
    if (selectedBlocks[element] === "alternating-grid") {
      alternatinggrid++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      alternating-grid STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="alternating-grid" class="section bg-neutral-200 story wf-section">
    <div class="container-default w-container">
      <div class="story-wrapper">
        <div class="split-content story-left">
          <div class="image-wrapper story-left">
            <div class="bg image-story-left main-color-1"></div><div class="image story-left">{${alternatinggrid}_image34:image global="false"}</div>
          </div>
          <div class="story-left-content">
            <div class="subtitle replace-this-text">{${alternatinggrid}_div860:text global="false"}</div>
            <h2 class="title mission">{${alternatinggrid}_text361:text global="false"}</h2>
            <p class="paragraph mission">{${alternatinggrid}_text362:text global="false"}</p>
          </div>
        </div>
        <div class="split-content story-right">
          <div class="story-right-content">
            <div class="subtitle replace-this-text">{${alternatinggrid}_div861:text global="false"}</div>
            <h2 class="title story">{${alternatinggrid}_text363:text global="false"}</h2>
            <p class="paragraph story">{${alternatinggrid}_text364:text global="false"}</p>
          </div>
          <div class="image-wrapper story-right"><div class="image story-right">{${alternatinggrid}_image35:image global="false"}</div>
            <div class="bg image-story-right main-color-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      alternating-grid ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of alternating-grid

// This is the start of the icon-boxes-5x
    if (selectedBlocks[element] === "icon-boxes-5x") {
      iconboxes5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      icon-boxes-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="icon-boxes-5x" class="section padding-240px values wf-section">
    <div class="container-default w-container">
      <div class="w-layout-grid values-grid">
        <div class="values-title-wrapper">
          <div class="subtitle replace-this-text">{${iconboxes5x}_div862:text global="false"}</div>
          <h2 class="title values">{${iconboxes5x}_text365:text global="false"}</h2>
        </div>
        <div class="card-value-wrapper">
          <div class="card value bg-neutral-200"><div class="image card-value-icon">{${iconboxes5x}_image36:image global="false"}</div>
            <div class="card-value-content">
              <h3 class="title card-value">{${iconboxes5x}_text366:text global="false"}</h3>
              <p class="paragraph card-value">{${iconboxes5x}_text367:text global="false"}</p>
            </div>
          </div>
          <div class="bg card-value-first main-color-1"></div>
        </div>
        <div class="card value"><div class="image card-value-icon">{${iconboxes5x}_image37:image global="false"}</div>
          <div class="card-value-content">
            <h3 class="title card-value">{${iconboxes5x}_text368:text global="false"}</h3>
            <p class="paragraph card-value">{${iconboxes5x}_text369:text global="false"}</p>
          </div>
        </div>
        <div id="w-node-_02d27ce4-a3eb-1ca6-fd70-2eadb4f887cd-7995d189" class="card value bg-neutral-200"><div class="image card-value-icon">{${iconboxes5x}_image38:image global="false"}</div>
          <div class="card-value-content">
            <h3 class="title card-value">{${iconboxes5x}_text370:text global="false"}</h3>
            <p class="paragraph card-value">{${iconboxes5x}_text371:text global="false"}</p>
          </div>
        </div>
        <div class="card value"><div class="image card-value-icon">{${iconboxes5x}_image39:image global="false"}</div>
          <div class="card-value-content">
            <h3 class="title card-value">{${iconboxes5x}_text372:text global="false"}</h3>
            <p class="paragraph card-value">{${iconboxes5x}_text373:text global="false"}</p>
          </div>
        </div>
        <div class="card-value-wrapper">
          <div class="card value bg-neutral-200"><div class="image card-value-icon">{${iconboxes5x}_image40:image global="false"}</div>
            <div class="card-value-content">
              <h3 class="title card-value">{${iconboxes5x}_text374:text global="false"}</h3>
              <p class="paragraph card-value">{${iconboxes5x}_text375:text global="false"}</p>
            </div>
          </div>
          <div class="bg card-value-last main-color-1"></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      icon-boxes-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of icon-boxes-5x

// This is the start of the image-boxes-3x
    if (selectedBlocks[element] === "image-boxes-3x") {
      imageboxes3x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-boxes-3x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-boxes-3x" class="section bg-neutral-200 padding-240px wf-section">
    <div class="container-small-569px about-team">
      <div class="subtitle replace-this-text">{${imageboxes3x}_div863:text global="false"}</div>
      <h2 class="title about-team">{${imageboxes3x}_text508:text global="false"}</h2>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid about-team-grid _3x">
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes3x}_image85:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes3x}_text509:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes3x}_div864:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes3x}_text510:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes3x}_image86:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes3x}_text511:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes3x}_div865:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes3x}_text512:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes3x}_image87:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes3x}_text513:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes3x}_div866:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes3x}_text514:text global="false"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-boxes-3x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-boxes-3x

// This is the start of the image-boxes-2x
    if (selectedBlocks[element] === "image-boxes-2x") {
      imageboxes2x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-boxes-2x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-boxes-2x" class="section bg-neutral-200 padding-240px wf-section">
    <div class="container-small-569px about-team">
      <div class="subtitle replace-this-text">{${imageboxes2x}_div867:text global="false"}</div>
      <h2 class="title about-team">{${imageboxes2x}_text515:text global="false"}</h2>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid about-team-grid _2x">
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes2x}_image88:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes2x}_text516:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes2x}_div868:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes2x}_text517:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes2x}_image89:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes2x}_text518:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes2x}_div869:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes2x}_text519:text global="false"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-boxes-2x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-boxes-2x

// This is the start of the image-boxes-4x
    if (selectedBlocks[element] === "image-boxes-4x") {
      imageboxes4x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-boxes-4x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-boxes-4x" class="section bg-neutral-200 padding-240px wf-section">
    <div class="container-small-569px about-team">
      <div class="subtitle replace-this-text">{${imageboxes4x}_div870:text global="false"}</div>
      <h2 class="title about-team">{${imageboxes4x}_text520:text global="false"}</h2>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid about-team-grid _4x">
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes4x}_image90:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes4x}_text521:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes4x}_div871:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes4x}_text522:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes4x}_image91:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes4x}_text523:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes4x}_div872:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes4x}_text524:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes4x}_image92:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes4x}_text525:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes4x}_div873:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes4x}_text526:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes4x}_image93:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes4x}_text527:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes4x}_div874:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes4x}_text528:text global="false"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-boxes-4x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-boxes-4x

// This is the start of the image-boxes-5x
    if (selectedBlocks[element] === "image-boxes-5x") {
      imageboxes5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-boxes-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-boxes-5x" class="section bg-neutral-200 padding-240px wf-section">
    <div class="container-small-569px about-team">
      <div class="subtitle replace-this-text">{${imageboxes5x}_div875:text global="false"}</div>
      <h2 class="title about-team">{${imageboxes5x}_text529:text global="false"}</h2>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid about-team-grid _5x">
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes5x}_image94:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes5x}_text530:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes5x}_div876:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes5x}_text531:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes5x}_image95:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes5x}_text532:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes5x}_div877:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes5x}_text533:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes5x}_image96:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes5x}_text534:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes5x}_div878:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes5x}_text535:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes5x}_image97:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes5x}_text536:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes5x}_div879:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes5x}_text537:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes5x}_image98:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes5x}_text538:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes5x}_div880:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes5x}_text539:text global="false"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-boxes-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-boxes-5x

// This is the start of the image-boxes-6x
    if (selectedBlocks[element] === "image-boxes-6x") {
      imageboxes6x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      image-boxes-6x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="image-boxes-6x" class="section bg-neutral-200 padding-240px wf-section">
    <div class="container-small-569px about-team">
      <div class="subtitle replace-this-text">{${imageboxes6x}_div881:text global="false"}</div>
      <h2 class="title about-team">{${imageboxes6x}_text540:text global="false"}</h2>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid about-team-grid _6x">
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image99:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text541:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div882:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text542:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image100:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text543:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div883:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text544:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image101:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text545:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div884:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text546:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image102:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text547:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div885:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text548:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image103:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text549:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div886:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text550:text global="false"}</p>
          </div>
        </div>
        <div class="team-wrapper">
          <div class="image-wrapper team"><div class="image team">{${imageboxes6x}_image104:image global="false"}</div></div>
          <div class="team-content">
            <div class="team-content-top">
              <h3 class="title h2-size team">{${imageboxes6x}_text551:text global="false"}</h3>
              <div class="team-rol replace-this-text">{${imageboxes6x}_div887:text global="false"}</div>
            </div>
            <p class="paragraph team">{${imageboxes6x}_text552:text global="false"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      image-boxes-6x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of image-boxes-6x

// This is the start of the drag-drop-area-with-sidebar
    if (selectedBlocks[element] === "drag-drop-area-with-sidebar") {
      dragdropareawithsidebar++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      drag-drop-area-with-sidebar STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="drag-drop-area-with-sidebar" class="section service-about wf-section">
    <div class="container-default w-container">
      <div class="service-about-wrapper">
        <div class="split-content service-about-left">
          <div class="replace-this-content"><div class="inter-div-content-area">{${dragdropareawithsidebar}_content1061:content global="false"}</div></div>
        </div>
        <div class="split-content service-about-right">
          <div class="card contact-sidebar-form-card main-color-1-border-top">
            <div class="card-contact-sidebar-form-content-top replace-this-content"><div class="inter-div-content-area">{${dragdropareawithsidebar}_content1062:content global="false"}</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      drag-drop-area-with-sidebar ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of drag-drop-area-with-sidebar

// This is the start of the service-boxes-2x
    if (selectedBlocks[element] === "service-boxes-2x") {
      serviceboxes2x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-2x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-2x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes2x}_text555:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes2x}_text556:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _2x">
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes2x}_image105:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes2x}_text557:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes2x}_text558:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes2x}_div888:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes2x}_image106:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes2x}_text559:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes2x}_text560:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes2x}_div889:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-2x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-2x

// This is the start of the service-boxes-3x
    if (selectedBlocks[element] === "service-boxes-3x") {
      serviceboxes3x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-3x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-3x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes3x}_text561:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes3x}_text562:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _3x">
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes3x}_image107:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes3x}_text563:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes3x}_text564:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes3x}_div890:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes3x}_image108:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes3x}_text565:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes3x}_text566:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes3x}_div891:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes3x}_image109:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes3x}_text567:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes3x}_text568:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes3x}_div892:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-3x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-3x

// This is the start of the service-boxes-4x
    if (selectedBlocks[element] === "service-boxes-4x") {
      serviceboxes4x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-4x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-4x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes4x}_text569:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes4x}_text570:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _4x">
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes4x}_image110:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes4x}_text571:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes4x}_text572:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes4x}_div893:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes4x}_image111:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes4x}_text573:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes4x}_text574:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes4x}_div894:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes4x}_image112:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes4x}_text575:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes4x}_text576:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes4x}_div895:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes4x}_image113:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes4x}_text577:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes4x}_text578:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes4x}_div896:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-4x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-4x

// This is the start of the service-boxes-5x
    if (selectedBlocks[element] === "service-boxes-5x") {
      serviceboxes5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-5x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes5x}_text579:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes5x}_text580:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _5x">
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes5x}_image114:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes5x}_text581:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes5x}_text582:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes5x}_div897:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes5x}_image115:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes5x}_text583:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes5x}_text584:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes5x}_div898:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes5x}_image116:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes5x}_text585:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes5x}_text586:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes5x}_div899:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes5x}_image117:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes5x}_text587:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes5x}_text588:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes5x}_div900:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes5x}_image118:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes5x}_text589:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes5x}_text590:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes5x}_div901:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-5x

// This is the start of the service-boxes-6x
    if (selectedBlocks[element] === "service-boxes-6x") {
      serviceboxes6x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-6x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-6x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes6x}_text591:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes6x}_text592:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _6x">
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image119:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text593:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text594:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div902:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image120:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text595:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text596:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div903:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image121:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text597:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text598:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div904:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image122:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text599:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text600:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div905:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image123:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text601:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text602:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div906:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes6x}_image124:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes6x}_text603:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes6x}_text604:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes6x}_div907:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-6x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-6x

// This is the start of the service-boxes-7x
    if (selectedBlocks[element] === "service-boxes-7x") {
      serviceboxes7x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-7x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-7x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes7x}_text605:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes7x}_text606:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _7x">
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca69c4-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image125:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text607:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text608:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div908:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca69d4-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image126:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text609:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text610:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div909:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca69e4-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image127:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text611:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text612:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div910:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca69f4-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image128:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text613:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text614:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div911:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca6a04-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image129:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text615:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text616:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div912:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-b4119718-8a0f-e81c-8e5a-c6d184ca6a14-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image130:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text617:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text618:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div913:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_05f8ee05-a09e-578d-598a-3abe77801e1c-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes7x}_image131:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes7x}_text619:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes7x}_text620:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes7x}_div914:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-7x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-7x

// This is the start of the service-boxes-8x
    if (selectedBlocks[element] === "service-boxes-8x") {
      serviceboxes8x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      service-boxes-8x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="service-boxes-8x" class="section services wf-section">
    <div class="container-medium-636px services">
      <h1 class="title services">{${serviceboxes8x}_text621:text global="false"}</h1>
      <p class="paragraph services">{${serviceboxes8x}_text622:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="w-layout-grid service-boxes _7x">
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af414-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image132:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text623:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text624:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div915:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af424-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image133:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text625:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text626:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div916:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af434-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image134:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text627:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text628:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div917:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af444-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image135:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text629:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text630:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div918:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af454-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image136:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text631:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text632:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div919:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af464-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image137:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text633:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text634:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div920:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_3352eba7-4443-525c-b78a-ba1f204af474-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image138:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text635:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text636:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div921:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-c33bc505-883f-53ea-c9d7-a2e376f7e397-7995d189">
          <div class="card service main-color-1-border-bottom">
            <div class="image-wrapper card-service"><div class="image card-service">{${serviceboxes8x}_image139:image global="false"}</div></div>
            <div class="card-service-main-content">
              <div class="card-service-content">
                <h2 class="title h3-size card-service">{${serviceboxes8x}_text637:text global="false"}</h2>
                <p class="paragraph card-service">{${serviceboxes8x}_text638:text global="false"}</p>
                <div class="underline-link">
                  <div class="underline-link-text replace-this-text">{${serviceboxes8x}_div922:text global="false"}</div>
                  <div class="underline-wrapper alpha-channel-50">
                    <div class="underline bg-primary-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      service-boxes-8x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of service-boxes-8x

// This is the start of the projects-2x
    if (selectedBlocks[element] === "projects-2x") {
      projects2x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-2x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-2x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects2x}_text639:text global="false"}</h1>
      <p class="paragraph projects">{${projects2x}_text640:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects2x}_image140:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects2x}_text641:text global="false"}</h2>
                <p class="paragraph card-project">{${projects2x}_text642:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects2x}_content1063:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects2x}_image141:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects2x}_div923:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects2x}_image142:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects2x}_div924:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects2x}_image143:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects2x}_text643:text global="false"}</h2>
                <p class="paragraph card-project">{${projects2x}_text644:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects2x}_content1064:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects2x}_image144:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects2x}_div925:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects2x}_image145:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects2x}_div926:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-2x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-2x

// This is the start of the projects-3x
    if (selectedBlocks[element] === "projects-3x") {
      projects3x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-3x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-3x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects3x}_text645:text global="false"}</h1>
      <p class="paragraph projects">{${projects3x}_text646:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects3x}_image146:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects3x}_text647:text global="false"}</h2>
                <p class="paragraph card-project">{${projects3x}_text648:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects3x}_content1065:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects3x}_image147:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects3x}_div927:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects3x}_image148:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects3x}_div928:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects3x}_image149:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects3x}_text649:text global="false"}</h2>
                <p class="paragraph card-project">{${projects3x}_text650:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects3x}_content1066:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects3x}_image150:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects3x}_div929:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects3x}_image151:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects3x}_div930:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects3x}_image152:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects3x}_text651:text global="false"}</h2>
                <p class="paragraph card-project">{${projects3x}_text652:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects3x}_content1067:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects3x}_image153:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects3x}_div931:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects3x}_image154:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects3x}_div932:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-3x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-3x

// This is the start of the projects-4x
    if (selectedBlocks[element] === "projects-4x") {
      projects4x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-4x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-4x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects4x}_text653:text global="false"}</h1>
      <p class="paragraph projects">{${projects4x}_text654:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects4x}_image155:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects4x}_text655:text global="false"}</h2>
                <p class="paragraph card-project">{${projects4x}_text656:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects4x}_content1068:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects4x}_image156:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects4x}_div933:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects4x}_image157:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects4x}_div934:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects4x}_image158:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects4x}_text657:text global="false"}</h2>
                <p class="paragraph card-project">{${projects4x}_text658:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects4x}_content1069:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects4x}_image159:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects4x}_div935:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects4x}_image160:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects4x}_div936:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects4x}_image161:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects4x}_text659:text global="false"}</h2>
                <p class="paragraph card-project">{${projects4x}_text660:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects4x}_content1070:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects4x}_image162:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects4x}_div937:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects4x}_image163:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects4x}_div938:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects4x}_image164:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects4x}_text661:text global="false"}</h2>
                <p class="paragraph card-project">{${projects4x}_text662:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects4x}_content1071:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects4x}_image165:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects4x}_div939:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects4x}_image166:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects4x}_div940:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-4x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-4x

// This is the start of the projects-5x
    if (selectedBlocks[element] === "projects-5x") {
      projects5x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-5x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-5x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects5x}_text663:text global="false"}</h1>
      <p class="paragraph projects">{${projects5x}_text664:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects5x}_image167:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects5x}_text665:text global="false"}</h2>
                <p class="paragraph card-project">{${projects5x}_text666:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects5x}_content1072:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects5x}_image168:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects5x}_div941:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects5x}_image169:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects5x}_div942:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects5x}_image170:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects5x}_text667:text global="false"}</h2>
                <p class="paragraph card-project">{${projects5x}_text668:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects5x}_content1073:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects5x}_image171:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects5x}_div943:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects5x}_image172:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects5x}_div944:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects5x}_image173:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects5x}_text669:text global="false"}</h2>
                <p class="paragraph card-project">{${projects5x}_text670:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects5x}_content1074:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects5x}_image174:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects5x}_div945:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects5x}_image175:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects5x}_div946:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects5x}_image176:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects5x}_text671:text global="false"}</h2>
                <p class="paragraph card-project">{${projects5x}_text672:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects5x}_content1075:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects5x}_image177:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects5x}_div947:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects5x}_image178:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects5x}_div948:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects5x}_image179:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects5x}_text673:text global="false"}</h2>
                <p class="paragraph card-project">{${projects5x}_text674:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects5x}_content1076:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects5x}_image180:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects5x}_div949:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects5x}_image181:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects5x}_div950:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-5x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-5x

// This is the start of the projects-6x
    if (selectedBlocks[element] === "projects-6x") {
      projects6x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-6x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-6x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects6x}_text675:text global="false"}</h1>
      <p class="paragraph projects">{${projects6x}_text676:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image182:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text677:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text678:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1077:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image183:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div951:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image184:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div952:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image185:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text679:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text680:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1078:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image186:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div953:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image187:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div954:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image188:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text681:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text682:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1079:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image189:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div955:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image190:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div956:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image191:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text683:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text684:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1080:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image192:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div957:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image193:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div958:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image194:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text685:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text686:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1081:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image195:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div959:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image196:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div960:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects6x}_image197:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects6x}_text687:text global="false"}</h2>
                <p class="paragraph card-project">{${projects6x}_text688:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects6x}_content1082:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects6x}_image198:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects6x}_div961:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects6x}_image199:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects6x}_div962:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-6x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-6x

// This is the start of the projects-7x
    if (selectedBlocks[element] === "projects-7x") {
      projects7x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-7x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-7x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects7x}_text689:text global="false"}</h1>
      <p class="paragraph projects">{${projects7x}_text690:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image200:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text691:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text692:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1083:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image201:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div963:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image202:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div964:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image203:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text693:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text694:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1084:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image204:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div965:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image205:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div966:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image206:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text695:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text696:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1085:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image207:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div967:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image208:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div968:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image209:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text697:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text698:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1086:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image210:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div969:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image211:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div970:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image212:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text699:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text700:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1087:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image213:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div971:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image214:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div972:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image215:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text701:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text702:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1088:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image216:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div973:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image217:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div974:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects7x}_image218:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects7x}_text703:text global="false"}</h2>
                <p class="paragraph card-project">{${projects7x}_text704:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects7x}_content1089:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects7x}_image219:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects7x}_div975:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects7x}_image220:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects7x}_div976:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-7x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-7x

// This is the start of the projects-8x
    if (selectedBlocks[element] === "projects-8x") {
      projects8x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-8x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-8x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects8x}_text705:text global="false"}</h1>
      <p class="paragraph projects">{${projects8x}_text706:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image221:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text707:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text708:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1090:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image222:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div977:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image223:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div978:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image224:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text709:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text710:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1091:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image225:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div979:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image226:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div980:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image227:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text711:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text712:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1092:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image228:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div981:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image229:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div982:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image230:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text713:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text714:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1093:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image231:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div983:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image232:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div984:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image233:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text715:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text716:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1094:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image234:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div985:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image235:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div986:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image236:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text717:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text718:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1095:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image237:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div987:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image238:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div988:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image239:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text719:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text720:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1096:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image240:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div989:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image241:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div990:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects8x}_image242:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects8x}_text721:text global="false"}</h2>
                <p class="paragraph card-project">{${projects8x}_text722:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects8x}_content1097:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects8x}_image243:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects8x}_div991:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects8x}_image244:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects8x}_div992:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-8x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-8x

// This is the start of the projects-9x
    if (selectedBlocks[element] === "projects-9x") {
      projects9x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-9x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-9x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects9x}_text723:text global="false"}</h1>
      <p class="paragraph projects">{${projects9x}_text724:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image245:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text725:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text726:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1098:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image246:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div993:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image247:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div994:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image248:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text727:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text728:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1099:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image249:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div995:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image250:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div996:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image251:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text729:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text730:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1100:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image252:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div997:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image253:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div998:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image254:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text731:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text732:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1101:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image255:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div999:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image256:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1000:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image257:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text733:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text734:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1102:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image258:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div1001:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image259:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1002:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image260:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text735:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text736:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1103:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image261:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div1003:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image262:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1004:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image263:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text737:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text738:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1104:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image264:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div1005:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image265:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1006:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image266:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text739:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text740:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1105:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image267:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div1007:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image268:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1008:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects9x}_image269:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects9x}_text741:text global="false"}</h2>
                <p class="paragraph card-project">{${projects9x}_text742:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects9x}_content1106:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects9x}_image270:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects9x}_div1009:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects9x}_image271:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects9x}_div1010:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-9x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-9x

// This is the start of the projects-10x
    if (selectedBlocks[element] === "projects-10x") {
      projects10x++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-10x STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-10x" class="section projects wf-section">
    <div class="container-medium-636px projects">
      <h1 class="title projects">{${projects10x}_text743:text global="false"}</h1>
      <p class="paragraph projects">{${projects10x}_text744:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="staggered-block">
        <div class="staggered-left">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image272:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text745:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text746:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1107:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image273:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1011:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image274:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1012:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image275:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text747:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text748:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1108:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image276:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1013:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image277:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1014:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image278:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text749:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text750:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1109:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image279:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1015:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image280:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1016:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image281:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text751:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text752:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1110:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image282:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1017:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image283:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1018:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image284:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text753:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text754:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1111:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image285:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1019:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image286:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1020:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staggered-left right">
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image287:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text755:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text756:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1112:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image288:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1021:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image289:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1022:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image290:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text757:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text758:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1113:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image291:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1023:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image292:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1024:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image293:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text759:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text760:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1114:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image294:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1025:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image295:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1026:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image296:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text761:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text762:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1115:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image297:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1027:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image298:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1028:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card project">
            <div class="image-wrapper card-project"><div class="image card-project">{${projects10x}_image299:image global="false"}</div></div>
            <div class="card-project-content">
              <div class="card-project-content-top">
                <h2 class="title h3-size card-project">{${projects10x}_text763:text global="false"}</h2>
                <p class="paragraph card-project">{${projects10x}_text764:text global="false"}</p>
                <div class="replace-this-content"><div class="inter-div-content-area">{${projects10x}_content1116:content global="false"}</div></div>
              </div>
              <div class="divider-2 card-project"></div>
              <div class="card-project-content-bottom">
                <div class="split-content card-project-content-bottom-left">
                  <div class="card-project-service-icon-wrapper">
                    <div><div class="image card-project-service-icon">{${projects10x}_image300:image global="false"}</div></div>
                  </div>
                  <div class="card-project-service-text replace-this-text">{${projects10x}_div1029:text global="false"}</div>
                </div>
                <div class="split-content card-project-content-bottom-right">
                  <div><div class="image card-project-date-icon">{${projects10x}_image301:image global="false"}</div></div>
                  <div class="card-project-date-text replace-this-text">{${projects10x}_div1030:text global="false"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-10x ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-10x

// This is the start of the projects-page-heading
    if (selectedBlocks[element] === "projects-page-heading") {
      projectspageheading++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-page-heading STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-page-heading" class="section project-hero wf-section">
    <div class="container-medium-684px project-hero">
      <h2 class="title project-hero">{${projectspageheading}_text765:text global="false"}</h2>
      <p class="paragraph project-hero-short-description">{${projectspageheading}_text766:text global="false"}</p>
    </div>
    <div class="container-default w-container">
      <div class="image-wrapper project-main-image"><div class="image project-main-image">{${projectspageheading}_image302:image global="false"}</div></div>
      <div class="card-project-details-wrapper">
        <div class="card project-details">
          <div class="div-block-3 replace-this-content"><div class="inter-div-content-area">{${projectspageheading}_content1117:content global="false"}</div></div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-page-heading ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-page-heading

// This is the start of the projects-page-content
    if (selectedBlocks[element] === "projects-page-content") {
      projectspagecontent++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      projects-page-content STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="projects-page-content" class="section project-about wf-section">
    <div class="container-default w-container">
      <div class="project-about-wrapper">
        <div class="split-content project-about-left">
          <div class="works-content-section"></div>
          <div class="div-block-2 replace-this-content"><div class="inter-div-content-area">{${projectspagecontent}_content1118:content global="false"}</div></div>
        </div>
        <div class="split-content project-about-right">
          <div class="card contact-sidebar-form-card main-color-1-border-top">
            <div>
              <div class="card-contact-sidebar-form-content-top replace-this-content"><div class="inter-div-content-area">{${projectspagecontent}_content1119:content global="false"}</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      <!-------------------------------------------------------------------------------------
      projects-page-content ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
// End of projects-page-content






































// End of projects-page-content

      // END UNIQUE BLOCKS



      

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
      if (selectedBlocks[element] === "navigation") {
        navigation++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        NAVIGATION BAR STARTS HERE
        --------------------------------------------------------------------------------------->
        
        <div id="header">
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