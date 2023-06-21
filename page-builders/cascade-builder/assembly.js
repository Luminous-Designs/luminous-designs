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
    let serviceboxes31 = 0;
      let serviceboxes2 = 0;
      let workboxes6 = 0;
      let workboxes5 = 0;
      let workboxes4 = 0;
      let workboxes3 = 0;
      let workboxes2 = 0;
      let workboxes1 = 0;
      let imageboxes8 = 0;
      let imageboxes7 = 0;
      let imageboxes6 = 0;
      let imageboxes5 = 0;
      let imageboxes4 = 0;
      let imageboxes3 = 0;
      let imageboxes2 = 0;
      let icons32 = 0;
      let fiftyfiftyblurredbox = 0;
      let prebuiltfooter = 0;
      let prebuiltheader1 = 0;
      let prebuiltheader2 = 0;
      let prebuiltheader3 = 0;
      let prebuiltheader4 = 0;
      let prebuiltheader5 = 0;
      let fiftyfiftyimageleft = 0;
      let fiftyfiftyimageright = 0;
    
    
    // A350-ASSEMBLY SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {


      /* 
      ============================================================================================================================================
      Assembly Area 1: Prebuilt Sections (Imported from Webflow)
      ============================================================================================================================================
      */
     
     
      if (selectedBlocks[element] === "prebuilt-header-1") {
        prebuiltheader1++;
        assemblyHTML += `
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
  // End of prebuilt-header-1
  
      
      
      // This is the start of the service-boxes-3-1
          if (selectedBlocks[element] === "service-boxes-3-1") {
            serviceboxes31++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            service-boxes-3-1 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="service-boxes-3-1" theme-option="a1" class="section-4 white-bg">
          <div class="container-section">
            <div class="stacked-content">
              <div class="dual-grid single-column">
                <div class="top-holder replace-this-content"><div class="inter-div-content-area">{${serviceboxes31}_content248:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid grid-6 service-icons sb3x1">
                <div class="card first">
                  <div id="w-node-ccc99eba-4301-b282-47cf-7e68c8784f08-0a6d3d82" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes31}_image0:image global="false"}</div>
                  <div class="card-bottom-info">
                    <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <h3 class="heading-9">{${serviceboxes31}_text70:text global="false"}</h3>
                      <div class="body-display small replace-this-text">{${serviceboxes31}_div197:text global="false"}</div>
                    </div>
                    <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <div href="#" class="underline-hover-link dark">
                        <div class="subtitle-2 replace-this-text">{${serviceboxes31}_div198:text global="false"}</div>
                        <div class="hover-line-2">
                          <div class="hover-line-fill-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hover-card-circle"></div>
                </div>
                <div class="card second">
                  <div id="w-node-ccc99eba-4301-b282-47cf-7e68c8784f18-0a6d3d82" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes31}_image1:image global="false"}</div>
                  <div class="hover-card-circle"></div>
                  <div class="card-bottom-info">
                    <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <h3 class="heading-8">{${serviceboxes31}_text71:text global="false"}</h3>
                      <div class="body-display small replace-this-text">{${serviceboxes31}_div199:text global="false"}</div>
                    </div>
                    <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <div href="#" class="underline-hover-link dark">
                        <div class="subtitle-2 replace-this-text">{${serviceboxes31}_div200:text global="false"}</div>
                        <div class="hover-line-2">
                          <div class="hover-line-fill-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card third">
                  <div id="w-node-ccc99eba-4301-b282-47cf-7e68c8784f28-0a6d3d82" class="card-icon-circle animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes31}_image2:image global="false"}</div>
                  <div class="hover-card-circle"></div>
                  <div class="card-bottom-info">
                    <div class="card-description animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <h3 class="heading-7">{${serviceboxes31}_text72:text global="false"}</h3>
                      <div class="body-display small replace-this-text">{${serviceboxes31}_div201:text global="false"}</div>
                    </div>
                    <div class="card-hover-link animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <div href="#" class="underline-hover-link dark">
                        <div class="subtitle-2 replace-this-text">{${serviceboxes31}_div202:text global="false"}</div>
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
            service-boxes-3-1 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of service-boxes-3-1
      
      // This is the start of the service-boxes-2
          if (selectedBlocks[element] === "service-boxes-2") {
            serviceboxes2++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            service-boxes-2 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="service-boxes-2" theme-option="a1" class="section-4 white-bg">
          <div class="container-section">
            <div class="stacked-content">
              <div class="dual-grid single-column">
                <div class="top-holder replace-this-content"><div class="inter-div-content-area">{${serviceboxes2}_content249:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid grid-6 service-icons sb2x1">
                <div class="card first">
                  <div id="w-node-_3ccefd32-d523-1527-85e8-8da2d405d9e0-0a6d3d82" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes2}_image3:image global="false"}</div>
                  <div class="card-bottom-info">
                    <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <h3 class="heading-9">{${serviceboxes2}_text73:text global="false"}</h3>
                      <div class="body-display small replace-this-text">{${serviceboxes2}_div203:text global="false"}</div>
                    </div>
                    <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <div href="#" class="underline-hover-link dark">
                        <div class="subtitle-2 replace-this-text">{${serviceboxes2}_div204:text global="false"}</div>
                        <div class="hover-line-2">
                          <div class="hover-line-fill-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="hover-card-circle"></div>
                </div>
                <div class="card second">
                  <div id="w-node-_3ccefd32-d523-1527-85e8-8da2d405d9f0-0a6d3d82" class="card-icon-circle animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">{${serviceboxes2}_image4:image global="false"}</div>
                  <div class="hover-card-circle"></div>
                  <div class="card-bottom-info">
                    <div class="card-description animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <h3 class="heading-8">{${serviceboxes2}_text74:text global="false"}</h3>
                      <div class="body-display small replace-this-text">{${serviceboxes2}_div205:text global="false"}</div>
                    </div>
                    <div class="card-hover-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                      <div href="#" class="underline-hover-link dark">
                        <div class="subtitle-2 replace-this-text">{${serviceboxes2}_div206:text global="false"}</div>
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
            service-boxes-2 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of service-boxes-2
      
      // This is the start of the work-boxes-6
          if (selectedBlocks[element] === "work-boxes-6") {
            workboxes6++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-6 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-6" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes6}_content250:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid wg6">
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image5:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text75:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button221:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content251:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image6:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text76:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button222:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content252:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image7:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text77:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button223:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content253:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image8:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text78:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button224:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content254:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image9:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text79:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button225:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content255:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes6}_image10:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes6}_text80:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button226:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes6}_content256:content global="false"}</div></div>
                  </div>
                </div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes6}_text81:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes6}_button227:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-6 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-6
      
      // This is the start of the work-boxes-5
          if (selectedBlocks[element] === "work-boxes-5") {
            workboxes5++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-5 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-5" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes5}_content257:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid wg6">
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes5}_image11:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes5}_text82:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button228:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes5}_content258:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes5}_image12:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes5}_text83:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button229:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes5}_content259:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes5}_image13:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes5}_text84:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button230:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes5}_content260:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes5}_image14:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes5}_text85:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button231:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes5}_content261:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" id="w-node-b51a773f-5a19-1502-0828-9f040e608d14-0a6d3d82" class="work-link animate-this-left wg6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes5}_image15:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes5}_text86:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button232:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes5}_content262:content global="false"}</div></div>
                  </div>
                </div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes5}_text87:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes5}_button233:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-5 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-5
      
      // This is the start of the work-boxes-4
          if (selectedBlocks[element] === "work-boxes-4") {
            workboxes4++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-4 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-4" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes4}_content263:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid">
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes4}_image16:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes4}_text88:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes4}_button234:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes4}_content264:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes4}_image17:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes4}_text89:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes4}_button235:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes4}_content265:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes4}_image18:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes4}_text90:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes4}_button236:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes4}_content266:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes4}_image19:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes4}_text91:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes4}_button237:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes4}_content267:content global="false"}</div></div>
                  </div>
                </div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes4}_text92:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes4}_button238:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-4 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-4
      
      // This is the start of the work-boxes-3
          if (selectedBlocks[element] === "work-boxes-3") {
            workboxes3++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-3 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-3" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes3}_content268:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid">
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes3}_image20:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes3}_text93:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes3}_button239:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes3}_content269:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes3}_image21:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes3}_text94:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes3}_button240:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes3}_content270:content global="false"}</div></div>
                  </div>
                </div>
                <div theme-option="a4" id="w-node-_7bec0e84-63ca-cd9c-a310-5f56c9cac8cc-0a6d3d82" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes3}_image22:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes3}_text95:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes3}_button241:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes3}_content271:content global="false"}</div></div>
                  </div>
                </div>
                <div id="w-node-_365764f1-4d58-6974-8b49-a514f562291b-0a6d3d82" class="replace-this-content"><div class="inter-div-content-area">{${workboxes3}_content272:content global="false"}</div></div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes3}_text96:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes3}_button242:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-3 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-3
      
      // This is the start of the work-boxes-2
          if (selectedBlocks[element] === "work-boxes-2") {
            workboxes2++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-2 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-2" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes2}_content273:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid">
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes2}_image23:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes2}_text97:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes2}_button243:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes2}_content274:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
                <div theme-option="a4" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes2}_image24:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes2}_text98:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes2}_button244:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="work-background"></div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes2}_content275:content global="false"}</div></div>
                  </div>
                </div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes2}_text99:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes2}_button245:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-2 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-2
      
      // This is the start of the work-boxes-1
          if (selectedBlocks[element] === "work-boxes-1") {
            workboxes1++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            work-boxes-1 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="work-boxes-1" theme-option="a3" class="section bg-white-smoke wf-section">
          <div class="container-section">
            <div class="padding-inner">
              <div class="drag-drop-section">
                <div class="replace-this-content second animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="inter-div-content-area">{${workboxes1}_content276:content global="false"}</div></div>
              </div>
              <div class="w-layout-grid works-grid">
                <div theme-option="a4" id="w-node-ce074b1c-bc8e-39ab-e177-f2bd91ea36cb-0a6d3d82" class="work-link animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="work-image-size ws1">
                    <div class="image-animation-trigger"><div class="cover-image">{${workboxes1}_image25:image global="false"}</div>
                      <div class="bg-for-animation"></div>
                    </div>
                  </div>
                  <div class="work-content">
                    <p class="work-title">{${workboxes1}_text100:text global="false"}</p>
                    <div class="main-button">
                      <div class="replace-this-button"><div class="button-wrap">{${workboxes1}_button246:button global="false"}</div></div>
                      <div class="scroll-down-line"></div>
                    </div>
                  </div>
                  <div class="content-parent">
                    <div class="content-wrapper replace-this-content"><div class="inter-div-content-area">{${workboxes1}_content277:content global="false"}</div></div>
                  </div>
                  <div class="work-background"></div>
                </div>
              </div>
              <div class="cta-block-2 animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div>
                  <p class="ctas-title">{${workboxes1}_text101:text global="false"}</p>
                </div>
                <div class="button-hold">
                  <div class="replace-this-button"><div class="button-wrap">{${workboxes1}_button247:button global="false"}</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            work-boxes-1 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of work-boxes-1
      
      // This is the start of the image-boxes-8
          if (selectedBlocks[element] === "image-boxes-8") {
            imageboxes8++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-8 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-8" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes8}_content278:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib8">
              <div id="w-node-_26c80a81-5077-67b7-ec84-3601cfc1b40c-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text102:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text103:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image26:image global="false"}</div>
              </div>
              <div id="w-node-_26c80a81-5077-67b7-ec84-3601cfc1b414-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text104:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text105:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image27:image global="false"}</div>
              </div>
              <div id="w-node-_26c80a81-5077-67b7-ec84-3601cfc1b41c-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text106:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text107:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image28:image global="false"}</div>
              </div>
              <div id="w-node-_26c80a81-5077-67b7-ec84-3601cfc1b424-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text108:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text109:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image29:image global="false"}</div>
              </div>
              <div id="w-node-b3473097-1132-8859-f8a3-0d0e07dacaaa-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text110:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text111:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image30:image global="false"}</div>
              </div>
              <div id="w-node-_4e856509-c02f-0253-7299-ee9ba32c5ef3-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text112:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text113:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image31:image global="false"}</div>
              </div>
              <div id="w-node-_2bce972e-4990-853b-8957-6893edb13d12-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text114:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text115:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image32:image global="false"}</div>
              </div>
              <div id="w-node-f33726b1-d236-2284-5d3a-516aeb1cd8cb-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes8}_text116:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes8}_text117:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes8}_image33:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-8 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-8
      
      // This is the start of the image-boxes-7
          if (selectedBlocks[element] === "image-boxes-7") {
            imageboxes7++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-7 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-7" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes7}_content279:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib8">
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca512989c-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text118:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text119:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image34:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298a4-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text120:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text121:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image35:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298ac-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text122:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text123:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image36:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298b4-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text124:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text125:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image37:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298bc-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text126:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text127:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image38:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298c4-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text128:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text129:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image39:image global="false"}</div>
              </div>
              <div id="w-node-f5148f33-5a9b-2445-56bb-1d2ca51298cc-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes7}_text130:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes7}_text131:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes7}_image40:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-7 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-7
      
      // This is the start of the image-boxes-6
          if (selectedBlocks[element] === "image-boxes-6") {
            imageboxes6++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-6 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-6" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes6}_content280:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib6">
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e004-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text132:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text133:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image41:image global="false"}</div>
              </div>
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e00c-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text134:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text135:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image42:image global="false"}</div>
              </div>
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e014-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text136:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text137:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image43:image global="false"}</div>
              </div>
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e01c-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text138:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text139:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image44:image global="false"}</div>
              </div>
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e024-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text140:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text141:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image45:image global="false"}</div>
              </div>
              <div id="w-node-f8333466-4d0e-9ab1-1319-c94110d9e02c-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes6}_text142:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes6}_text143:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes6}_image46:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-6 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-6
      
      // This is the start of the image-boxes-5
          if (selectedBlocks[element] === "image-boxes-5") {
            imageboxes5++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-5 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-5" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes5}_content281:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib6">
              <div id="w-node-b819b73b-3253-28dc-5181-2777e53618d8-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes5}_text144:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes5}_text145:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes5}_image47:image global="false"}</div>
              </div>
              <div id="w-node-b819b73b-3253-28dc-5181-2777e53618e0-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes5}_text146:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes5}_text147:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes5}_image48:image global="false"}</div>
              </div>
              <div id="w-node-b819b73b-3253-28dc-5181-2777e53618e8-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes5}_text148:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes5}_text149:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes5}_image49:image global="false"}</div>
              </div>
              <div id="w-node-b819b73b-3253-28dc-5181-2777e53618f0-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes5}_text150:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes5}_text151:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes5}_image50:image global="false"}</div>
              </div>
              <div id="w-node-b819b73b-3253-28dc-5181-2777e53618f8-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes5}_text152:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes5}_text153:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes5}_image51:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-5 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-5
      
      // This is the start of the image-boxes-4
          if (selectedBlocks[element] === "image-boxes-4") {
            imageboxes4++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-4 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-4" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes4}_content282:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib4">
              <div id="w-node-_7201af5a-2215-c96d-55d0-872ab6d3cd60-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes4}_text154:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes4}_text155:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes4}_image52:image global="false"}</div>
              </div>
              <div id="w-node-_7201af5a-2215-c96d-55d0-872ab6d3cd68-0a6d3d82" class="individual-image-box animate-this-left ib6" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes4}_text156:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes4}_text157:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes4}_image53:image global="false"}</div>
              </div>
              <div id="w-node-_7201af5a-2215-c96d-55d0-872ab6d3cd70-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes4}_text158:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes4}_text159:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes4}_image54:image global="false"}</div>
              </div>
              <div id="w-node-_7201af5a-2215-c96d-55d0-872ab6d3cd78-0a6d3d82" class="individual-image-box animate-this-right ib6" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes4}_text160:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes4}_text161:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes4}_image55:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-4 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-4
      
      // This is the start of the image-boxes-3
          if (selectedBlocks[element] === "image-boxes-3") {
            imageboxes3++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-3 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-3" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes3}_content283:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib3">
              <div id="w-node-_2bc97d09-fecc-afac-d0f3-e36111b6f154-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes3}_text162:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes3}_text163:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes3}_image56:image global="false"}</div>
              </div>
              <div id="w-node-_2bc97d09-fecc-afac-d0f3-e36111b6f15c-0a6d3d82" class="individual-image-box animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes3}_text164:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes3}_text165:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes3}_image57:image global="false"}</div>
              </div>
              <div id="w-node-_2bc97d09-fecc-afac-d0f3-e36111b6f164-0a6d3d82" class="individual-image-box animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes3}_text166:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes3}_text167:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes3}_image58:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-3 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-3
      
      // This is the start of the image-boxes-2
          if (selectedBlocks[element] === "image-boxes-2") {
            imageboxes2++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            image-boxes-2 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="image-boxes-2" theme-option="a7" class="default-theme-padding white wf-section">
          <div class="theme-padding">
            <div class="top-drag-drop animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="content-holder-images replace-this-content"><div class="inter-div-content-area">{${imageboxes2}_content284:content global="false"}</div></div>
            </div>
            <div class="w-layout-grid image-boxes ib2">
              <div id="w-node-_1a9357ea-9d02-24d8-bec8-70d5ea850bc1-0a6d3d82" class="individual-image-box animate-this-left ib2" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes2}_text168:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes2}_text169:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes2}_image59:image global="false"}</div>
              </div>
              <div id="w-node-_1a9357ea-9d02-24d8-bec8-70d5ea850bc9-0a6d3d82" class="individual-image-box animate-this-left ib2" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                <div class="content-overlay no-pointer-events">
                  <div class="content-overlay-portion allow-pointer-events">
                    <h4 class="heading-10">{${imageboxes2}_text170:text global="false"}</h4>
                    <p class="white-text-images">{${imageboxes2}_text171:text global="false"}</p>
                  </div>
                </div><div class="image-3">{${imageboxes2}_image60:image global="false"}</div>
              </div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            image-boxes-2 ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of image-boxes-2
      
      // This is the start of the icons-3-2
          if (selectedBlocks[element] === "icons-3-2") {
            icons32++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            icons-3-2 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="icons-3-2" theme-option="a5" class="section-zipper-known wf-section">
          <div class="div-case-mixture">
            <div class="div-married-think">
              <div class="top-area-content replace-this-content"><div class="inter-div-content-area">{${icons32}_content285:content global="false"}</div></div>
            </div>
            <div class="div-official-thousand">
              <div class="div-characteristic-chapter animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image61:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text172:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text173:text global="false"}</p>
              </div>
              <div class="div-everything-represent animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image62:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text174:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text175:text global="false"}</p>
              </div>
              <div class="div-everything-represent animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image63:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text176:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text177:text global="false"}</p>
              </div>
              <div class="div-recognize-us animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image64:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text178:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text179:text global="false"}</p>
              </div>
              <div class="div-lips-built animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image65:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text180:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text181:text global="false"}</p>
              </div>
              <div class="div-lips-built animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom"><div class="img-finger-strike">{${icons32}_image66:image global="false"}</div>
                <h4 class="h3-excellent-storm">{${icons32}_text182:text global="false"}</h4>
                <p class="p-onto-nearer">{${icons32}_text183:text global="false"}</p>
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
              <div class="div-obtain"><div class="image-second">{${fiftyfiftyblurredbox}_image67:image global="false"}</div></div>
              <div class="div-music no-pointer-events">
                <div class="div-deeply animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
                  <div class="div-pretty allow-pointer-events">
                    <div class="div-block-6">
                      <div class="content-transparent replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyblurredbox}_content286:content global="false"}</div></div>
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
            <section id="prebuilt-footer" theme-option="a8" class="div-together-central">
          <div class="div-jungle-soap">
            <div class="div-surprise-nest">
              <h4 class="h5-scene-carbon replace-this-text">{${prebuiltfooter}_text184:text global="false"}</h4>
              <div class="div-national-gasoline">
                <div class="div-block-9">
                  <div class="div-block-10 footer-drag-drop replace-this-content"><div class="inter-div-content-area">{${prebuiltfooter}_content287:content global="false"}</div></div>
                </div>
              </div>
            </div>
            <div class="div-seven-cover"></div>
            <div class="div-exist-born">
              <div class="div-block-8">
                <p class="a-waste-victory">{${prebuiltfooter}_text185:text global="false"}</p>
                <p class="a-waste-victory">{${prebuiltfooter}_text186:text global="false"}</p>
                <p class="a-waste-victory">{${prebuiltfooter}_text187:text global="false"}</p>
              </div>
              <p class="p-bicycle-desert">{${prebuiltfooter}_text188:text global="false"}</p>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            prebuilt-footer ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of prebuilt-footer
      

      // This is the start of the prebuilt-header-2
          if (selectedBlocks[element] === "prebuilt-header-2") {
            prebuiltheader2++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            prebuilt-header-2 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="prebuilt-header-2" class="main-section wf-section">
          <div class="hero ls-3">
            <div class="hero-sub ls-3">
              <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afcd-0a6d3d82" class="column-wrapper ls-3">
                <div class="overflow-hidden">
                  <h1 class="heading ls-3 replace-this-text">{${prebuiltheader2}_text189:text global="false"}</h1>
                </div>
              </div>
              <div class="w-layout-grid grid ls-3">
                <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afd2-0a6d3d82" class="column">
                  <div class="replace-this-text">{${prebuiltheader2}_div207:text global="false"}</div>
                </div>
                <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afd7-0a6d3d82" class="column flex">
                  <div class="text-max-width-50 replace-this-text">{${prebuiltheader2}_div208:text global="false"}</div>
                  <div class="text-max-width-50 replace-this-text">{${prebuiltheader2}_div209:text global="false"}</div>
                </div>
                <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afdc-0a6d3d82" class="column-list ls-3">
                  <div class="link-style ls-3">
                    <div class="replace-this-text">{${prebuiltheader2}_div210:text global="false"}</div>
                    <div class="underline dark"></div>
                  </div>
                  <div class="link-style ls-3">
                    <div class="replace-this-text">{${prebuiltheader2}_div211:text global="false"}</div>
                    <div class="underline dark"></div>
                  </div>
                  <div class="link-style ls-3">
                    <div class="replace-this-text">{${prebuiltheader2}_div212:text global="false"}</div>
                    <div class="underline dark"></div>
                  </div>
                </div>
                <div class="replace-this-text">{${prebuiltheader2}_div213:text global="false"}</div>
              </div>
              <div id="w-node-_03178dd8-6a53-0ebd-7d86-e17493d1afeb-0a6d3d82" class="image-container ls-3">
                <div class="background-image-wrapper">
                  <div class="background-image ls-3-detail wsite-background"></div>
                </div>
              </div>
            </div>
          </div>
          <div theme-option="a9" class="background-image ls-3"></div>
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
            prebuilt-header-3 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="prebuilt-header-3" class="main-section wf-section">
          <div class="padding-global third-header-style">
            <div theme-option="a10" class="hero ls-2">
              <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar ls-2 w-nav"></div>
              <div class="w-layout-grid grid ls-2">
                <h1 id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0eef7-0a6d3d82" class="heading-11">{${prebuiltheader3}_text190:text global="false"}</h1>
                <div id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0eefb-0a6d3d82" class="column ls-2">
                  <div class="text-color-grey replace-this-text">{${prebuiltheader3}_div214:text global="false"}</div>
                  <div class="link-style ls-2">
                    <div class="replace-this-text">{${prebuiltheader3}_div215:text global="false"}</div>
                    <div class="hover-line">
                      <div class="hover-line-fill"></div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_1cd466a6-ae72-7838-115a-a4b2dff0ef03-0a6d3d82" class="column ls-2">
                  <div class="text-color-grey replace-this-text">{${prebuiltheader3}_div216:text global="false"}</div>
                  <div class="link-style ls-2">
                    <div class="replace-this-text">{${prebuiltheader3}_div217:text global="false"}</div>
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
            prebuilt-header-4 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="prebuilt-header-4" class="main-section wf-section">
          <div class="hero ls-4">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar ls-4 w-nav"></div>
            <div class="w-layout-grid grid ls-4">
              <div id="w-node-_9db5d159-08e2-e7ac-a455-2d737eebe626-0a6d3d82" class="hero-sub-container ls-4">
                <div class="hero-sub-column ls-4">
                  <h1 class="heading ls-4">{${prebuiltheader4}_text191:text global="false"}</h1>
                </div>
                <div>
                  <div class="line ls-4"></div>
                  <div class="info-text ls-4 paragraph-image replace-this-text">{${prebuiltheader4}_div218:text global="false"}</div>
                  <div class="link-style ls-4">
                    <h4 class="heading-small margin-bottom margin-xsmall">{${prebuiltheader4}_text192:text global="false"}</h4>
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
            prebuilt-header-5 STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="prebuilt-header-5" class="main-section wf-section">
          <div class="hero ls-9 image-content-theme">
            <div class="w-layout-grid grid ls-9 text-and-image-area">
              <div id="w-node-fcc5fb43-9c6a-174a-067d-ff038818647f-0a6d3d82" class="hero-sub-column ls-9">
                <div class="overflow-hidden">
                  <h1 class="heading ls-9">{${prebuiltheader5}_text193:text global="false"}</h1>
                </div>
              </div>
            </div>
            <div class="background-image ls-9 wsite-background"></div>
          </div>
          <div theme-option="a11" class="hero ls-9-bottom image-area-theme">
            <div class="w-layout-grid grid ls-9 sub">
              <div id="w-node-fcc5fb43-9c6a-174a-067d-ff0388186486-0a6d3d82" class="column ls-9">
                <h2 class="heading ls-9-small">{${prebuiltheader5}_text194:text global="false"}</h2>
              </div>
              <div class="column-wrapper ls-9">
                <h3 class="heading-12">{${prebuiltheader5}_text195:text global="false"}</h3>
                <div class="link-style ls-9">
                  <div class="arrow-icon ls-9 w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                      <path d="M5 12h13M12 5l7 7-7 7"></path>
                    </svg></div>
                  <div class="replace-this-text">{${prebuiltheader5}_div219:text global="false"}</div>
                </div>
              </div>
              <div class="column-wrapper ls-9">
                <h3 class="heading-12">{${prebuiltheader5}_text196:text global="false"}</h3>
                <div class="link-style ls-9">
                  <div class="arrow-icon ls-9 w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                      <path d="M5 12h13M12 5l7 7-7 7"></path>
                    </svg></div>
                  <div class="replace-this-text">{${prebuiltheader5}_div220:text global="false"}</div>
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
      
      // This is the start of the fifty-fifty-image-left
          if (selectedBlocks[element] === "fifty-fifty-image-left") {
            fiftyfiftyimageleft++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            fifty-fifty-image-left STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="fifty-fifty-image-left" class="theme-section wf-section">
          <div class="w-layout-grid grid-7">
            <div id="w-node-a65e8fe2-862b-a090-0304-092ba75412db-0a6d3d82" class="grid-child-left animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="grid-image-holder"><div class="image-2">{${fiftyfiftyimageleft}_image68:image global="false"}</div></div>
            </div>
            <div theme-option="a2" id="w-node-a65e8fe2-862b-a090-0304-092ba75412de-0a6d3d82" class="grid-child-right animate-this-right" data-aos="fade-left" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="individual-block replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyimageleft}_content288:content global="false"}</div></div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            fifty-fifty-image-left ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of fifty-fifty-image-left
      
      // This is the start of the fifty-fifty-image-right
          if (selectedBlocks[element] === "fifty-fifty-image-right") {
            fiftyfiftyimageright++;
            assemblyHTML += `
            <!-------------------------------------------------------------------------------------
            fifty-fifty-image-right STARTS HERE
            --------------------------------------------------------------------------------------->
            <section id="fifty-fifty-image-right" class="theme-section wf-section">
          <div class="w-layout-grid grid-7">
            <div theme-option="a6" id="w-node-d8158278-4ee5-00d4-d8d9-9000a626d417-0a6d3d82" class="grid-child-right gray animate-this-left" data-aos="fade-right" data-aos-delay="000" data-aos-anchor-placement="center-bottom">
              <div class="individual-block replace-this-content"><div class="inter-div-content-area">{${fiftyfiftyimageright}_content289:content global="false"}</div></div>
            </div>
            <div id="w-node-d8158278-4ee5-00d4-d8d9-9000a626d419-0a6d3d82" class="grid-child-left">
              <div class="grid-image-holder"><div class="image-2">{${fiftyfiftyimageright}_image69:image global="false"}</div></div>
            </div>
          </div>
        </section>
            <!-------------------------------------------------------------------------------------
            fifty-fifty-image-right ENDS HERE
            --------------------------------------------------------------------------------------->
            `;
          }
      // End of fifty-fifty-image-right
      
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