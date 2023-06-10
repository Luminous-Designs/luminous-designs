export function assemblyGen(rawElements, selectedBlocks) {
    
    let assemblyHTML = '';
   
    let scrollipageAnchor = 0;
    let pureslider = 0;
    let parallax = 0;
    let carouselFree = 0;
    let carouselFixed = 0;
   
    let weeblySection = 0;
    

    let freeCarouselCount = 0;
    let fixedCarouselCount = 0;




    // Prebuilt Webflow Variables (Paste)
    let prebuiltheader1 = 0;
    let serviceboxes41 = 0;
    let fiftyfiftyimageleft = 0;
    let workboxes21 = 0;
    let icons32 = 0;
    let fiftyfiftyimageright = 0;
    let imageboxes41 = 0;
    let fiftyfiftyblurredbox = 0;
    let prebuiltfooter = 0;
    let prebuiltheader2 = 0;
    let prebuiltheader3 = 0;
    let prebuiltheader4 = 0;
    let prebuiltheader5 = 0;
    
    
    // A350-ASSEMBLY SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {


      /* 
      ============================================================================================================================================
      Assembly Area 1: Prebuilt Sections (Imported from Webflow)
      ============================================================================================================================================
      */
     
     
      
    // End of prebuilt-header-1

    // This is the start of the service-boxes-4-1
        if (selectedBlocks[element] === "service-boxes-4-1") {
          serviceboxes41++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          service-boxes-4-1 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="service-boxes-4-1" class="section-4 white-bg">
        <div class="container-section">
          <div class="stacked-content">
            <div class="dual-grid single-column">
              <div class="top-holder replace-this-content"><div class="inter-div-content-area">{${serviceboxes41}_content91:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid grid-6 service-icons">
              <div class="card first">
                <div id="w-node-_509e7df5-1ad4-1c8f-11e5-c868f0f9deb3-bf3dcddd" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes41}_image0:image global="false"}</div>
                <div class="card-bottom-info">
                  <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <h3 class="heading-9">{${serviceboxes41}_text20:text global="false"}</h3>
                    <div class="body-display small replace-this-text">{${serviceboxes41}_div66:text global="false"}</div>
                  </div>
                  <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <div href="#" class="underline-hover-link dark">
                      <div class="subtitle-2 replace-this-text">{${serviceboxes41}_div67:text global="false"}</div>
                      <div class="hover-line-2">
                        <div class="hover-line-fill-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hover-card-circle"></div>
              </div>
              <div class="card second">
                <div id="w-node-f5d8ae8c-687d-9e3c-e2ad-09351da6d43e-bf3dcddd" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes41}_image1:image global="false"}</div>
                <div class="hover-card-circle"></div>
                <div class="card-bottom-info">
                  <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <h3 class="heading-8">{${serviceboxes41}_text21:text global="false"}</h3>
                    <div class="body-display small replace-this-text">{${serviceboxes41}_div68:text global="false"}</div>
                  </div>
                  <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <div href="#" class="underline-hover-link dark">
                      <div class="subtitle-2 replace-this-text">{${serviceboxes41}_div69:text global="false"}</div>
                      <div class="hover-line-2">
                        <div class="hover-line-fill-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card third">
                <div id="w-node-a21b2370-b0c8-0986-0f25-168e435378c9-bf3dcddd" class="card-icon-circle animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes41}_image2:image global="false"}</div>
                <div class="hover-card-circle"></div>
                <div class="card-bottom-info">
                  <div class="card-description animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <h3 class="heading-7">{${serviceboxes41}_text22:text global="false"}</h3>
                    <div class="body-display small replace-this-text">{${serviceboxes41}_div70:text global="false"}</div>
                  </div>
                  <div class="card-hover-link animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <div href="#" class="underline-hover-link dark">
                      <div class="subtitle-2 replace-this-text">{${serviceboxes41}_div71:text global="false"}</div>
                      <div class="hover-line-2">
                        <div class="hover-line-fill-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="w-node-_0a00beb3-63f5-1ba5-4cb2-8c0491cd987e-bf3dcddd" class="card-icon-circle animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes41}_image3:image global="false"}</div>
                <div id="w-node-_0a00beb3-63f5-1ba5-4cb2-8c0491cd9880-bf3dcddd" class="hover-card-circle"></div>
                <div class="card-bottom-info">
                  <div class="card-description animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <h3 class="heading-6">{${serviceboxes41}_text23:text global="false"}</h3>
                    <div class="body-display small replace-this-text">{${serviceboxes41}_div72:text global="false"}</div>
                  </div>
                  <div class="card-hover-link animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                    <div href="#" class="underline-hover-link dark">
                      <div class="subtitle-2 replace-this-text">{${serviceboxes41}_div73:text global="false"}</div>
                      <div class="hover-line-2">
                        <div class="hover-line-fill-2"></div>
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
          service-boxes-4-1 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of service-boxes-4-1

    // This is the start of the fifty-fifty-image-left
        if (selectedBlocks[element] === "fifty-fifty-image-left") {
          fiftyfiftyimageleft++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          fifty-fifty-image-left STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="fifty-fifty-image-left" class="theme-section wf-section">
        <div class="w-layout-grid grid-7">
          <div id="w-node-d0214144-af11-44a0-07ba-02fa39ca9c45-bf3dcddd" class="grid-child-left animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="grid-image-holder"><div class="image-2">{${fiftyfiftyimageleft}_image4:image global="false"}</div></div>
          </div>
          <div id="w-node-_0fa69d76-c691-c517-a66d-bb3c1c7cfd1c-bf3dcddd" class="grid-child-right animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="individual-block replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyimageleft}_content92:content global="false"}</div></div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          fifty-fifty-image-left ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of fifty-fifty-image-left

    // This is the start of the work-boxes-2-1
        if (selectedBlocks[element] === "work-boxes-2-1") {
          workboxes21++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          work-boxes-2-1 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="work-boxes-2-1" class="section bg-white-smoke wf-section">
        <div class="container-section">
          <div class="padding-inner">
            <div class="drag-drop-section">
              <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes21}_content93:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid works-grid">
              <div class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="work-image-size">
                  <div class="image-animation-trigger"><div class="cover-image">{${workboxes21}_image5:image global="false"}</div>
                    <div class="bg-for-animation"></div>
                  </div>
                </div>
                <div class="work-content">
                  <p class="work-title">{${workboxes21}_text24:text global="false"}</p>
                  <div class="main-button">
                    <div class="replace-this-button"><div class="button-wrap">{${workboxes21}_button88:button global="false"}</div></div>
                    <div class="scroll-down-line"></div>
                  </div>
                </div>
                <div class="content-parent">
                  <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes21}_content94:content global="false"}</div></div>
                </div>
                <div class="work-background"></div>
              </div>
              <div class="work-link animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="work-image-size">
                  <div class="image-animation-trigger"><div class="cover-image">{${workboxes21}_image6:image global="false"}</div>
                    <div class="bg-for-animation"></div>
                  </div>
                </div>
                <div class="work-content">
                  <p class="work-title">{${workboxes21}_text25:text global="false"}</p>
                  <div class="main-button">
                    <div class="replace-this-button"><div class="button-wrap">{${workboxes21}_button89:button global="false"}</div></div>
                    <div class="scroll-down-line"></div>
                  </div>
                </div>
                <div class="work-background"></div>
                <div class="content-parent">
                  <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes21}_content95:content global="false"}</div></div>
                </div>
              </div>
            </div>
            <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div>
                <p class="ctas-title">{${workboxes21}_text26:text global="false"}</p>
              </div>
              <div class="button-hold">
                <div class="replace-this-button"><div class="button-wrap">{${workboxes21}_button90:button global="false"}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          work-boxes-2-1 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of work-boxes-2-1

    // This is the start of the icons-3-2
        if (selectedBlocks[element] === "icons-3-2") {
          icons32++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          icons-3-2 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="icons-3-2" class="section-zipper-known wf-section">
        <div class="div-case-mixture">
          <div class="div-married-think">
            <div class="top-area-content replace-this-content"><div class="inter-div-content-area">{${icons32}_content96:content global="false"}</div></div>
          </div>
          <div class="div-official-thousand">
            <div class="div-characteristic-chapter animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image7:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text27:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text28:text global="false"}</p>
            </div>
            <div class="div-everything-represent animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image8:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text29:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text30:text global="false"}</p>
            </div>
            <div class="div-everything-represent animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image9:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text31:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text32:text global="false"}</p>
            </div>
            <div class="div-recognize-us animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image10:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text33:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text34:text global="false"}</p>
            </div>
            <div class="div-lips-built animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image11:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text35:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text36:text global="false"}</p>
            </div>
            <div class="div-lips-built animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image12:image global="false"}</div>
              <h4 class="h3-excellent-storm">{${icons32}_text37:text global="false"}</h4>
              <p class="p-onto-nearer">{${icons32}_text38:text global="false"}</p>
            </div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          icons-3-2 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of icons-3-2

    // This is the start of the fifty-fifty-image-right
        if (selectedBlocks[element] === "fifty-fifty-image-right") {
          fiftyfiftyimageright++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          fifty-fifty-image-right STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="fifty-fifty-image-right" class="theme-section wf-section">
        <div class="w-layout-grid grid-7">
          <div id="w-node-_4d9e44b7-233b-f3c1-2883-567343e59db6-bf3dcddd" class="grid-child-right gray animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="individual-block replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyimageright}_content97:content global="false"}</div></div>
          </div>
          <div id="w-node-_4d9e44b7-233b-f3c1-2883-567343e59db3-bf3dcddd" class="grid-child-left">
            <div class="grid-image-holder"><div class="image-2">{${fiftyfiftyimageright}_image13:image global="false"}</div></div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          fifty-fifty-image-right ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of fifty-fifty-image-right

    // This is the start of the image-boxes-4-1
        if (selectedBlocks[element] === "image-boxes-4-1") {
          imageboxes41++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          image-boxes-4-1 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="image-boxes-4-1" class="default-theme-padding white wf-section">
        <div class="theme-padding">
          <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
            <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes41}_content98:content global="false"}</div></div>
          </div>
          <div class="w-layout-grid image-boxes">
            <div id="w-node-_5c068173-c21b-0870-fd24-a2be7a9a6ee2-bf3dcddd" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-overlay no-pointer-events">
                <div class="content-overlay-portion allow-pointer-events">
                  <h4 class="heading-10">{${imageboxes41}_text39:text global="false"}</h4>
                  <p class="white-text-images">{${imageboxes41}_text40:text global="false"}</p>
                </div>
              </div><div class="image-3">{${imageboxes41}_image14:image global="false"}</div>
            </div>
            <div id="w-node-_22858088-38b7-4099-5a03-b8b249fbf093-bf3dcddd" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-overlay no-pointer-events">
                <div class="content-overlay-portion allow-pointer-events">
                  <h4 class="heading-10">{${imageboxes41}_text41:text global="false"}</h4>
                  <p class="white-text-images">{${imageboxes41}_text42:text global="false"}</p>
                </div>
              </div><div class="image-3">{${imageboxes41}_image15:image global="false"}</div>
            </div>
            <div id="w-node-ebc814bf-fb28-5f30-cb91-116f9c360f68-bf3dcddd" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-overlay no-pointer-events">
                <div class="content-overlay-portion allow-pointer-events">
                  <h4 class="heading-10">{${imageboxes41}_text43:text global="false"}</h4>
                  <p class="white-text-images">{${imageboxes41}_text44:text global="false"}</p>
                </div>
              </div><div class="image-3">{${imageboxes41}_image16:image global="false"}</div>
            </div>
            <div id="w-node-_2aa01c80-db73-774c-d518-78e0fc7d97a1-bf3dcddd" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-overlay no-pointer-events">
                <div class="content-overlay-portion allow-pointer-events">
                  <h4 class="heading-10">{${imageboxes41}_text45:text global="false"}</h4>
                  <p class="white-text-images">{${imageboxes41}_text46:text global="false"}</p>
                </div>
              </div><div class="image-3">{${imageboxes41}_image17:image global="false"}</div>
            </div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          image-boxes-4-1 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of image-boxes-4-1

    // This is the start of the fifty-fifty-blurred-box
        if (selectedBlocks[element] === "fifty-fifty-blurred-box") {
          fiftyfiftyblurredbox++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          fifty-fifty-blurred-box STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="fifty-fifty-blurred-box" class="section-low wf-section">
        <div class="div-opposite">
          <div class="div-scientist">
            <div class="div-obtain"><div class="image-second">{${fiftyfiftyblurredbox}_image18:image global="false"}</div></div>
            <div class="div-music no-pointer-events">
              <div class="div-deeply animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="div-pretty allow-pointer-events">
                  <div class="div-block-6">
                    <div class="content-transparent replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyblurredbox}_content99:content global="false"}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          fifty-fifty-blurred-box ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of fifty-fifty-blurred-box

    // This is the start of the prebuilt-footer
        if (selectedBlocks[element] === "prebuilt-footer") {
          prebuiltfooter++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          prebuilt-footer STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="prebuilt-footer" class="div-together-central">
        <div class="div-jungle-soap">
          <div class="div-surprise-nest">
            <h4 class="h5-scene-carbon replace-this-text">{${prebuiltfooter}_text47:text global="false"}</h4>
            <div class="div-national-gasoline">
              <div class="div-block-9">
                <div class="div-block-10 footer-drag-drop replace-this-content"><div class="inter-div-content-area">{${prebuiltfooter}_content100:content}</div></div>
              </div>
            </div>
          </div>
          <div class="div-seven-cover"></div>
          <div class="div-exist-born">
            <div class="div-block-8">
              <p class="a-waste-victory">{${prebuiltfooter}_text48:text}</p>
              <p class="a-waste-victory">{${prebuiltfooter}_text49:text}</p>
              <p class="a-waste-victory">{${prebuiltfooter}_text50:text}</p>
            </div>
            <p class="p-bicycle-desert">{${prebuiltfooter}_text51:text}</p>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          prebuilt-footer ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of prebuilt-footer

    if (selectedBlocks[element] === "prebuilt-header-1") {
      prebuiltheader1++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      Navigation Bar (Specific for PreBuilt-Header-1) Starts Here
      --------------------------------------------------------------------------------------->
       <div class="birdseye-header">
       <div class="nav-wrap">
          <div class="container">
            <div class="logo">{logo}</div>
           <div class="nav desktop-nav">{menu}</div>
            <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
         </div>
        </div>
      </div>
      <!-------------------------------------------------------------------------------------
      Navigation Bar (Specific for PreBuilt-Header-1) Ends Here
      --------------------------------------------------------------------------------------->
      <!-------------------------------------------------------------------------------------
      prebuilt-header-1 STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="prebuilt-header-1" class="main-section ls-8 wf-section">
    <div class="padding-global">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar ls-8 w-nav"></div>
    </div>
    <div class="hero ls-8">
      <div class="padding-global header">
        <div class="w-layout-grid grid ls-8">
          <div id="w-node-_075915ca-0a20-a03f-dc75-e4af52f309cf-bf3dcddd" class="column">
            <div class="info-text text-color-white replace-this-text">{${prebuiltheader1}_div60:text global="false"}</div>
          </div>
          <div id="w-node-_075915ca-0a20-a03f-dc75-e4af52f309d2-bf3dcddd" class="column">
            <div class="overflow-hidden">
              <h1 class="heading-xxlarge replace-this-text">{${prebuiltheader1}_text19:text global="false"}</h1>
            </div>
            <div class="overflow-hidden"></div>
          </div>
          <div id="w-node-_075915ca-0a20-a03f-dc75-e4af52f309d7-bf3dcddd" class="column-wrapper ls-8">
            <div class="info-text ls-8 replace-this-text">{${prebuiltheader1}_div61:text global="false"}</div>
          </div>
        </div>
      </div>
      <div class="padding-global header">
        <div class="w-layout-grid grid ls-8">
          <div class="link-style ls-8">
            <div class="hover-line top">
              <div class="hover-line-fill background-color-white"></div>
            </div>
            <div class="replace-this-text">{${prebuiltheader1}_div62:text global="false"}</div>
          </div>
          <div class="link-style ls-8">
            <div class="hover-line top">
              <div class="hover-line-fill background-color-white"></div>
            </div>
            <div class="replace-this-text">{${prebuiltheader1}_div63:text global="false"}</div>
          </div>
          <div class="link-style ls-8">
            <div class="hover-line top">
              <div class="hover-line-fill background-color-white"></div>
            </div>
            <div class="replace-this-text">{${prebuiltheader1}_div64:text global="false"}</div>
          </div>
          <div class="link-style ls-8">
            <div class="hover-line top">
              <div class="hover-line-fill background-color-white"></div>
            </div>
            <div class="replace-this-text">{${prebuiltheader1}_div65:text global="false"}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-image ls-8 wsite-background"></div>
  </section>
      <!-------------------------------------------------------------------------------------
      prebuilt-header-1 ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }

    // This is the start of the prebuilt-header-2
    if (selectedBlocks[element] === "prebuilt-header-2") {
      prebuiltheader2++;
      assemblyHTML += `
      <!-------------------------------------------------------------------------------------
      Navigation Bar (Specific for Prebuilt Header 2) Starts Here
      --------------------------------------------------------------------------------------->
      <div class="birdseye-header alternate-color">
        <div class="nav-wrap">
          <div class="container">
            <div class="logo">{logo}</div>
            <div class="nav desktop-nav">{menu}</div>
            <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
          </div>
        </div>
      </div>
      <!-------------------------------------------------------------------------------------
      Navigation Bar (Specific for Prebuilt Header 2) Ends Here
      --------------------------------------------------------------------------------------->
      <!-------------------------------------------------------------------------------------
      prebuilt-header-2 STARTS HERE
      --------------------------------------------------------------------------------------->
      <section id="prebuilt-header-2" class="main-section wf-section">
    <div class="hero ls-3">
      <div class="hero-sub ls-3">
        <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afcd-bf3dcddd" class="column-wrapper ls-3">
          <div class="overflow-hidden">
            <h1 class="heading ls-3 replace-this-text">{${prebuiltheader2}_text52:text global="false"}</h1>
          </div>
        </div>
        <div class="w-layout-grid grid ls-3">
          <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afd2-bf3dcddd" class="column">
            <div class="replace-this-text">{${prebuiltheader2}_div74:text global="false"}</div>
          </div>
          <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afd7-bf3dcddd" class="column flex">
            <div class="text-max-width-50 replace-this-text">{${prebuiltheader2}_div75:text global="false"}</div>
            <div class="text-max-width-50 replace-this-text">{${prebuiltheader2}_div76:text global="false"}</div>
          </div>
          <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afdc-bf3dcddd" class="column-list ls-3">
            <div class="link-style ls-3">
              <div class="replace-this-text">{${prebuiltheader2}_div77:text global="false"}</div>
              <div class="underline dark"></div>
            </div>
            <div class="link-style ls-3">
              <div class="replace-this-text">{${prebuiltheader2}_div78:text global="false"}</div>
              <div class="underline dark"></div>
            </div>
            <div class="link-style ls-3">
              <div class="replace-this-text">{${prebuiltheader2}_div79:text global="false"}</div>
              <div class="underline dark"></div>
            </div>
          </div>
          <div class="replace-this-text">{${prebuiltheader2}_div80:text global="false"}</div>
        </div>
        <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afeb-bf3dcddd" class="image-container ls-3">
          <div class="background-image-wrapper">
            <div class="background-image ls-3-detail wsite-background"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-image ls-3"></div>
  </section>
      <!-------------------------------------------------------------------------------------
      prebuilt-header-2 ENDS HERE
      --------------------------------------------------------------------------------------->
      `;
    }
    // End of prebuilt-header-2

    // This is the start of the prebuilt-header-3
        if (selectedBlocks[element] === "prebuilt-header-3") {
          prebuiltheader3++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 3) Starts Here
          --------------------------------------------------------------------------------------->
          <div class="birdseye-header  alternate-color increased-padding">
            <div class="nav-wrap">
              <div class="container">
                <div class="logo">{logo}</div>
                <div class="nav desktop-nav">{menu}</div>
                <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
              </div>
            </div>
          </div>
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 3) Ends Here
          --------------------------------------------------------------------------------------->
          <!-------------------------------------------------------------------------------------
          prebuilt-header-3 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="prebuilt-header-3" class="main-section wf-section">
        <div class="padding-global third-header-style">
          <div class="hero ls-2">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar ls-2 w-nav"></div>
            <div class="w-layout-grid grid ls-2">
              <h1 id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0eef7-bf3dcddd" class="heading-11">{${prebuiltheader3}_text53:text global="false"}</h1>
              <div id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0eefb-bf3dcddd" class="column ls-2">
                <div class="text-color-grey replace-this-text">{${prebuiltheader3}_div81:text global="false"}</div>
                <div class="link-style ls-2">
                  <div class="replace-this-text">{${prebuiltheader3}_div82:text global="false"}</div>
                  <div class="hover-line">
                    <div class="hover-line-fill"></div>
                  </div>
                </div>
              </div>
              <div id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0ef03-bf3dcddd" class="column ls-2">
                <div class="text-color-grey replace-this-text">{${prebuiltheader3}_div83:text global="false"}</div>
                <div class="link-style ls-2">
                  <div class="replace-this-text">{${prebuiltheader3}_div84:text global="false"}</div>
                  <div class="hover-line">
                    <div class="hover-line-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-sub ls-2"></div>
        <div class="background-image ls-2 wsite-background"></div>
      </section>
          <!-------------------------------------------------------------------------------------
          prebuilt-header-3 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of prebuilt-header-3

    // This is the start of the prebuilt-header-4
        if (selectedBlocks[element] === "prebuilt-header-4") {
          prebuiltheader4++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 4) Starts Here
          --------------------------------------------------------------------------------------->
          <div class="birdseye-header">
            <div class="nav-wrap">
              <div class="container">
                <div class="logo">{logo}</div>
                <div class="nav desktop-nav">{menu}</div>
                <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
              </div>
            </div>
          </div>
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 4) Ends Here
          --------------------------------------------------------------------------------------->
          <!-------------------------------------------------------------------------------------
          prebuilt-header-4 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="prebuilt-header-4" class="main-section wf-section">
        <div class="hero ls-4">
          <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar ls-4 w-nav"></div>
          <div class="w-layout-grid grid ls-4">
            <div id="w-node-_9db5d159-08e2-e7ac-a455-2d737eebe626-bf3dcddd" class="hero-sub-container ls-4">
              <div class="hero-sub-column ls-4">
                <h1 class="heading ls-4">{${prebuiltheader4}_text54:text global="false"}</h1>
              </div>
              <div>
                <div class="line ls-4"></div>
                <div class="info-text ls-4 paragraph-image replace-this-text">{${prebuiltheader4}_div85:text global="false"}</div>
                <div class="link-style ls-4">
                  <h4 class="heading-small margin-bottom margin-xsmall">{${prebuiltheader4}_text55:text global="false"}</h4>
                  <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel">
                      <path d="M5 12h13M12 5l7 7-7 7"></path>
                    </svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background-image ls-4 wsite-background"></div>
      </section>
          <!-------------------------------------------------------------------------------------
          prebuilt-header-4 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of prebuilt-header-4

    // This is the start of the prebuilt-header-5
        if (selectedBlocks[element] === "prebuilt-header-5") {
          prebuiltheader5++;
          assemblyHTML += `
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 5) Starts Here
          --------------------------------------------------------------------------------------->
          <div class="birdseye-header">
            <div class="nav-wrap">
              <div class="container">
                <div class="logo">{logo}</div>
                <div class="nav desktop-nav">{menu}</div>
                <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
              </div>
            </div>
          </div>
          <!-------------------------------------------------------------------------------------
          Navigation Bar (Specific for Prebuilt Header 5) ENDS Here
          --------------------------------------------------------------------------------------->
          <!-------------------------------------------------------------------------------------
          prebuilt-header-5 STARTS HERE
          --------------------------------------------------------------------------------------->
          <section id="prebuilt-header-5" class="main-section wf-section">
        <div class="hero ls-9 image-content-theme">
          <div class="w-layout-grid grid ls-9 text-and-image-area">
            <div id="w-node-fcc5fb43-9c6a-174a-067d-ff038818647f-bf3dcddd" class="hero-sub-column ls-9">
              <div class="overflow-hidden">
                <h1 class="heading ls-9">{${prebuiltheader5}_text56:text global="false"}</h1>
              </div>
            </div>
          </div>
          <div class="background-image ls-9 wsite-background"></div>
        </div>
        <div class="hero ls-9-bottom image-area-theme">
          <div class="w-layout-grid grid ls-9 sub">
            <div id="w-node-fcc5fb43-9c6a-174a-067d-ff0388186486-bf3dcddd" class="column ls-9">
              <h2 class="heading ls-9-small">{${prebuiltheader5}_text57:text global="false"}</h2>
            </div>
            <div class="column-wrapper ls-9">
              <h3 class="heading-12">{${prebuiltheader5}_text58:text global="false"}</h3>
              <div class="link-style ls-9">
                <div class="arrow-icon ls-9 w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg></div>
                <div class="replace-this-text">{${prebuiltheader5}_div86:text global="false"}</div>
              </div>
            </div>
            <div class="column-wrapper ls-9">
              <h3 class="heading-12">{${prebuiltheader5}_text59:text global="false"}</h3>
              <div class="link-style ls-9">
                <div class="arrow-icon ls-9 w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <path d="M5 12h13M12 5l7 7-7 7"></path>
                  </svg></div>
                <div class="replace-this-text">{${prebuiltheader5}_div87:text global="false"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <!-------------------------------------------------------------------------------------
          prebuilt-header-5 ENDS HERE
          --------------------------------------------------------------------------------------->
          `;
        }
    // End of prebuilt-header-5


      // Default Weebly Header
     

      /* 
      ============================================================================================================================================
      Assembly Area 2: Custom Default Sections (Carousels, ScrolliPage, etc)
      ============================================================================================================================================
      */

      if (selectedBlocks[element] === "default-section") {
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="main-wrap">
          {{#sections}}
              <div class="container">{content}</div>
          {{/sections}}
        </div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      if (selectedBlocks[element] === "weebly-main-wrap") {
        weeblySection++;
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        WEEBLY MAIN WRAP CONTENT SECTION STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="main-wrap"><div class="container">{${weeblySection}_MainContent:content global="false"}</div></div>
        <!-------------------------------------------------------------------------------------
        WEEBLY MAIN WRAP CONTENT SECTION ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      if (selectedBlocks[element] === "scrollipage-anchor") {
        scrollipageAnchor++;
        assemblyHTML += `
        <div id="uniqueAnchor_${scrollipageAnchor}" class="scrollipage-anchor">
          <p>ScrolliPage Anchor ${scrollipageAnchor} - Clicking on Dot ${scrollipageAnchor} Will Go Here </p>
        </div>
        `;
      }
      
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
        <div class="main-wrap" style="padding-top:30px; padding-bottom: 30px;">
        <div class="container">{top-carousel-content:content global="false"}</div>
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

      if (selectedBlocks[element] === "default-weebly-header") {
        
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY NAVIGATION STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="birdseye-header">
          <div class="nav-wrap">
            <div class="container">
              <div class="logo">{logo}</div>
              <div class="nav desktop-nav">{menu}</div>
              <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY NAVIGATION ENDS HERE
        --------------------------------------------------------------------------------------->
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="banner-wrap">
          {{#header}}
              <div class="container">
                <div class="banner">{content}</div>
              </div>
          {{/header}}
        </div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      if (selectedBlocks[element] === "pureslider") {
        pureslider++;

        // Obtains the count that the user selected in pop-up
        let currentElementCount = rawElements[element].selectedCustomization;

        // BEGINNING of PureSlider HTML
        assemblyHTML += `
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY NAVIGATION STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="birdseye-header">
          <div class="nav-wrap">
            <div class="container">
              <div class="logo">{logo}</div>
              <div class="nav desktop-nav">{menu}</div>
              <a class="hamburger" aria-label="Menu" href="#"><span></span></a>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        DEFAULT WEEBLY NAVIGATION ENDS HERE
        --------------------------------------------------------------------------------------->
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

    }
    return assemblyHTML;
  }