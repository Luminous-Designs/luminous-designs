(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  const dragula = require("dragula");
  const imagesLoaded = require("imagesloaded");
  const fileDownload = require("js-file-download");
  const droppable = document.querySelector(".js-droppable");
  const snippets = document.querySelector(".js-snippets");
  const snippet = document.querySelectorAll(".js-snippet");
  const filter = document.querySelector(".js-filter");
  const downloadBtn = document.querySelector(".js-download");
  const deleteBtnHtml =
    "<div class='bg-white hidden absolute top-0 left-0 js-delete-btn px-4 py-2 shadow'><i class='far fa-trash-alt pointer-events-none'></i></div>";
  const stitchesCSSPath = "https://stitches.hyperyolo.com/output.css";
  const fontAwesomePath =
    "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
  const fontAwesomeIntegrity =
    "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/";
  const stitchesHTML = html => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href=${stitchesCSSPath} rel="stylesheet">
      <link rel="stylesheet" href=${fontAwesomePath} integrity=${fontAwesomeIntegrity} crossorigin="anonymous">
      <title>Stitches</title>
    </head>
    <body>${html}</body>
  </html>`;
  
  let numberOfSlides = 0;
  let arrayByAddition = [];
  
  // WARNING MODAL
  var warningModal = document.getElementById("warningModal");
  var warningClose = document.getElementById("warningClose");
  var WarningHeader = document.getElementById("Warning-Header");
  var WarningText = document.getElementById("Warning-Text");
  var WarningHTML = document.getElementById("Warning-HTML");

  // PUBLISH MODAL
  var publishModal = document.getElementById("publishModal");
  var publishClose = document.getElementById("Publish-Close");
  var publishHeader = document.getElementById("Publish-Header");
  var publishText = document.getElementById("Publish-Text");
  var WarningHTML = document.getElementById("Warning-HTML");

  window.onclick = function(event) {
    if (event.target == warningModal) {
      warningModal.style.display = "none";
    }
    
  }

  window.onclick = function(event) {
    if (event.target == publishModal) {
      publishModal.style.display = "none";
    }
    
  }

  
  // When the user clicks on <span> (x), close the modal
  warningClose.onclick = function() {
    warningModal.style.display = "none";
  }

  publishClose.onclick = function() {
    publishModal.style.display = "none";
  }


  // Get the pureslider prompt modal
  var puresliderModal = document.getElementById("puresliderModal");
  var puresliderClose = document.getElementById("puresliderClose")
  
  
  
  // Capture No. of Slides and Close PureSlider Modal
  puresliderClose.onclick = function() {
    let selectElement =  document.querySelector('#pureslider-slides'); 
    let output = selectElement.value; 
    console.log("Pureslider count recorded");
    numberOfSlides = output;
    console.log("Pureslider count "+ numberOfSlides);
    puresliderModal.style.display = "none";
  
  }
  
  let lastItemDropped = 0;
  var drake = dragula([snippets, droppable], {
    copy: function(el, source) {
      return source === snippets;
    },
    accepts: function(el, target) {
      return target !== snippets;
    }
  }).on("drop", (el, target) => {
    el.innerHTML += deleteBtnHtml;
    el.classList.add ("relative");
    arrayByAddition.push(el);
    
    lastItemDropped = el.id;
    console.log("last item dropped: " + el.id);
  });
  
  
  // Drop Rules
  drake.on('drop', function (el, container, source) {

    // Gets rid of label on drop sequence
    $( ".js-droppable > .js-snippet > .figure-label" ).remove();

    // Begin Analyze Procedures
    let selectedBlocksDD = [];
    let selectedSnippetsDD = document.querySelectorAll(
      ".js-droppable > .js-snippet"
    );
    
    for (var i = 0; i < selectedSnippetsDD.length; i++) {
      selectedBlocksDD.push(selectedSnippetsDD[i].id);
    }
    
    // HEADER RULES --> No more than one header per page
    if ((lastItemDropped === "no-header") || (lastItemDropped === "title-header") || (lastItemDropped === "pureslider") || (lastItemDropped === "50-50-header") || (lastItemDropped === "60-40-header") || (lastItemDropped === "default-header")) {
      console.log("we have a header");
      let numberOfHeaders = 0; // How many pre-existing headers we have
      
      for (let headerCount = 0; headerCount < selectedBlocksDD.length; headerCount++) {
        if ((selectedBlocksDD[headerCount] == "no-header" ) || (selectedBlocksDD[headerCount] == "title-header") || (selectedBlocksDD[headerCount] == "pureslider") || (selectedBlocksDD[headerCount] == "50-50-header") || (selectedBlocksDD[headerCount] == "60-40-header") || (selectedBlocksDD[headerCount] == "default-header")) {
            numberOfHeaders = numberOfHeaders + 1;
        }
      };
      if (numberOfHeaders > 1) {
          // Deletion script occurs
          console.log("Element has been deleted due to violation of header count");
          source.appendChild(el);
          source.removeChild(el);

          // Display Warning Modal with Generated Content
          warningModal.style.display = "block";
          WarningHeader.innerText = "Whoops! You can only have one header per page.";
          WarningText.innerText = "Looks like you tried to add more than one header. You can only have one header per page, and it should be placed on top as the first element. Headers include the Homepage Header element, the PureSlider Element, and the Weebly 4 Header element";
          return;
      }
    };

    // HEADER RULES --> First element MUST be a header
    if ((el.id != "no-header") || (el.id != "title-header") || (el.id != "pureslider") || (el.id != "50-50-header") || (el.id != "60-40-header") || (el.id != "default-header")) {
      if ((selectedBlocksDD[0] != "no-header")) {
        if (selectedBlocksDD[0] != "title-header") {
          if (selectedBlocksDD[0] != "pureslider") {
            if (selectedBlocksDD[0] != "50-50-header") {
              if (selectedBlocksDD[0] != "60-40-header") {
                if (selectedBlocksDD[0] != "default-header") {
                  source.appendChild(el);
                  source.removeChild(el);

                  // Display Warning Modal with Generated Content
                  warningModal.style.display = "block";
                  WarningHeader.innerText = "Whoops! Your first section should be a header";
                  WarningText.innerText = "Looks like you tried to drag in a non-header as the first section on your webpage. The first section on your page needs to be a header. This includes the homepage-header, pureslider, or any other header type. It cannot be anything else. Try dragging in a header.";
                  return;
                }
              }
            }
          }
        }
      }
    }

    // Section RULES --> No more than one Weebly Section per page
    if ((el.id === "sections")) {
      let numberOfSections = 0; // How many pre-existing headers we have
      for (let sectionCount = 0; sectionCount < selectedBlocksDD.length; sectionCount++) {
        if ((selectedBlocksDD[sectionCount] == "sections" )) {
            numberOfSections = numberOfSections + 1;
        }
      };
      if (numberOfSections > 1) {
          // Deletion script occurs
          source.appendChild(el);
          source.removeChild(el);

          // Display Warning Modal with Generated Content
          warningModal.style.display = "block";
          WarningHeader.innerText = "Whoops! You can only have one Weebly Section module per page.";
          WarningText.innerText = "Looks like you tried to drag in multiple Weebly Sections blocks. Weebly only allows one Weebly Section per page. Do note that you can create additional sections inside of the single Weebly Section block once you import your layout into the Weebly Editor, each with their own backgrounds (video backgrounds, image backgrounds, color backgrounds, graident backgrounds). If you need to add another white section somewhere else on the page, add a Weebly Blank section. Please contact us at luminousthemes.com/support if you're having trouble.";
          return;
      }
    };

    // PURESLIDER PROMPT --> How many Slides?
    if (el.id === "pureslider") {
      puresliderModal.style.display = "block";
    }
   
  });
  
  
  filter.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    const val = event.target.getAttribute("data-filter");
  
    for (var i = 0; i < snippet.length; i++) {
      if (snippet[i].classList.contains(val)) {
        snippet[i].style.display = "block";
      } else {
        snippet[i].style.display = "none";
      }
    }
  
    masonry(".js-snippets", ".js-snippet", 0, 2, 2, 1);
  });
  
  function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
    var g = document.querySelector(grid),
      gc = document.querySelectorAll(gridCell),
      gcLength = gc.length,
      gHeight = 0,
      i;
  
    for (i = 0; i < gcLength; ++i) {
      gHeight += gc[i].offsetHeight + parseInt(gridGutter);
    }
  
    if (window.screen.width >= 1024)
      g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + 100 + "px";
    else if (window.screen.width < 1024 && window.screen.width >= 768)
      g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + "px";
    else g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + "px";
  }
  
  
  // Download Protocol
  downloadBtn.addEventListener("click", event => {
    containsPureSlider = false;
    let selectedBlocks = [];
    let selectedSnippets = document.querySelectorAll(
      ".js-droppable > .js-snippet"
    );
  
    for (var i = 0; i < selectedSnippets.length; i++) {
      selectedBlocks.push(selectedSnippets[i].id);
    }
    let html = "";
    console.log(selectedBlocks);
    
   

    // Let's make sure the first element is a header
    if ((selectedBlocks[0] != "no-header")) {
      if (selectedBlocks[0] != "title-header") {
        if (selectedBlocks[0] != "pureslider") {
          if (selectedBlocks[0] != "50-50-header") {
            if (selectedBlocks[0] != "60-40-header") {
              if (selectedBlocks[0] != "default-header") {
                // Display Warning Modal with Generated Content
                warningModal.style.display = "block";
                WarningHeader.innerText = "Uh oh! Look's like you're missing a header";
                WarningText.innerText = "The first element on your page should be a header section";
                return;
              }
            }
          }
        }
      }
    }

    // Represents head code
    let beginningCode;

    // Represents footer code
    let endingCode;
  
    beginningCode = `<!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <script src="/files/theme/pureslider.js"></script>
      </head>
      
      <body class='header  wsite-theme-light' style="overflow-x: hidden !important; max-width: 100% !important;">
        <!------------------------------------------------------------------------------------------------------------------------------
        SIDENAVIGATION
        -------------------------------------------------------------------------------------------------------------------------------->
        <div id="mySidenav" class="sidenav">
          <div class="theButton">
            <a href="javascript:void(0)" class="closebtn" onclick="openNav()" style="z-index:50 !important;"><i class="fa fa-times"></i></a>
          </div>
          <div id="sidebar-container">
            <div class="main-wrap" style="background:none !important; background-color:none !important">{sidebar:content}</div>
          </div>
        </div>	
        <div id="main-content">
          <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
            <!------------------------------------------------------------------------------------------------------------------------------
            SEARCH OVERLAY  
            -------------------------------------------------------------------------------------------------------------------------------->
            <!--Beginning of the search overlay screen-->
            <div id="searchcontainer">
              <div id="vertical-wrap" style="width:100%; height:100%; display: flex; flex-direction: column; justify-content: center;">
                <div id="search">
                  <div id="search-terms">{search}</div>
                </div>
              </div>
            </div>
            <!------------------------------------------------------------------------------------------------------------------------------
            WRAPPER 
            -------------------------------------------------------------------------------------------------------------------------------->
            <!--The padding-boxer class ensures there is padding on limited screen resolutions-->
            <div class="padding-boxer">
            <div class="boxer">
            <div class="wrapper">
              
              
            <!-------------------------------------------------------------------------------------------------------------------------------------------
            [START]: NAVIGATION BAR
            -------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="header-boxer" style="">
              <div class="birdseye-header">
                <div class="nav-wrap">
                  <div class="container">
                    <!--Logo-Third-->
                    <div class="logo-third">
                      <div class="logo">{logo}</div>
                      <label class="hamburger"><span></span></label>
                    </div>
          <!--Nav-Third-->
                    <div class="nav-third">
                      <div class="nav desktop-nav">{menu}</div>
                    </div>
                    <!--Social-Third-->
                    <div class="social-third">
                      <div class="social-holder">
                        <div class="social-items-section" style="float:right">{social}</div>
                        <div class="search"><span for="search-terms" id="search-label" class="fa fa-search" style="font-weight:bold !important"> </span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-------------------------------------------------------------------------------------------------------------------------------------------
            [END]: NAVIGATION BAR
            -------------------------------------------------------------------------------------------------------------------------------------------->
              
              <!--End of the lower level main navigation with menu links, search icon, and sidebar icon-->
              <!--Beginning of the background image banner-->
              <div class="body-boxer">`


    let finalHTML = ``;
    finalHTML += beginningCode;

    // Counter Variables Initialization
    // Header Variables
    let noHeader = 0;
    let titleHeader = 0;
    let pureSlider = 0;
    let fiftyFiftyHeader = 0;
    let sixtyFourtyHeader = 0;
    let defaultHeader = 0;

    // Body Variables
    let bgCards3 = 0;
    let bgCards2 = 0;
    let imgCards3 = 0;
    let imgCards2 = 0;
    let textCards3 = 0;
    let textCards2 = 0;
    let iconCards3 = 0;
    let iconCards2 = 0;
    let fiftyFiftyContentImgRight = 0;
    let fiftyFiftyContentImgLeft = 0;
    let fiftyFiftyBlankImgRight = 0;
    let fiftyFiftyBlankImgLeft = 0;
    let sixtyFourtyImgLeftVar1 = 0;
    let sixtyFourtyImgRightVar2 = 0;
    let sixtyFourtyImgLeftVar3 = 0;
    let portfolio = 0;
    let bodyBgContent = 0;
    let paddingBlock = 0;
    let parallaxSection = 0;
    let titleSubtitle = 0;
    let titleSubtitleButton = 0;
    let whiteContent = 0;
    let weeblySections = 0;
   
    
    // SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {

      /* Header Initializations */

      if (selectedBlocks[element] === "no-header") {
        finalHTML += `
        
        `;
      }
      if (selectedBlocks[element] === "title-header") {
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: BLENDED TEXT HEADER
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="main-wrap blended-section">
						<div class="container text-header">
							<div class="text-header-aligner">
								<p class="subtitle">{subtitle-textheading:text global="false"}</p>
								<h2 class="big-header">{textheaderh2:text global="false"}</h2>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: BLENDED TEXT HEADER
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "pureslider") {
        pureSlider++;
        if (numberOfSlides === "2") {
          finalHTML += `
          <!--PureSlider 2 Slides -->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "3") {
          finalHTML += `
          <!--PureSlider 3 Slides -->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "4") {
          finalHTML += `
          <!--PureSlider 4 Slides-->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FOUR STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-four:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-3">{0content-four:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "5") {
          finalHTML += `
          <!--PureSlider 5 Slides-->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FOUR STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-four:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-3">{0content-four:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FIVE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-five:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-4">{0content-five:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "6") {
          finalHTML += `
          <!--PureSlider 6 Slides-->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FOUR STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-four:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-3">{0content-four:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FIVE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-five:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-4">{0content-five:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE SIX STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-six:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-5">{0content-six:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "7") {
          finalHTML += `
          <!--PureSlider 7 Slides-->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FOUR STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-four:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-3">{0content-four:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FIVE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-five:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-4">{0content-five:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE SIX STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-six:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-5">{0content-six:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE SEVEN STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-seven:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-6">{0content-seven:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        if (numberOfSlides === "8") {
          finalHTML += `
          <!--PureSlider 8 Slides-->
					<div class="slider-restrict" style="width:100%; height:600px; margin-bottom:12px;">
					<div class="swiper-container" style="pointer-events: auto !important;">
					   <div class="swiper-wrapper" style="pointer-events: auto !important;">
						  <!-- SLIDE ONE STARTS HERE -->
						  <div class="swiper-slide" style="pointer-events: auto !important;">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-one:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-0">{0contentonejkjkl:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE ONE ENDS HERE -->
						  <!-- SLIDE TWO STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-two:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-1">{0content-two:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE TWO ENDS HERE -->
						  <!-- SLIDE THREE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-three:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-2">{0content-three:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FOUR STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-four:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-3">{0content-four:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE FIVE STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-five:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-4">{0content-five:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE SIX STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-six:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-5">{0content-six:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE SEVEN STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-seven:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-6">{0content-seven:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
						  <!-- SLIDE EIGHT STARTS HERE -->
						  <div class="swiper-slide">
							 <div class="swiper-weebly-total">
								<div class="swiper-weebly-image">
								   {0slider-image-eight:image global="false"}
								</div>
								<div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
								   <!--Outer-->
								   <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
									  <!--Middle-->
									  <div class="slider-container">
										 <!--Inner-->
										 <div id="slide-7">{0content-eight:content global="false"}</div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					   <!-- Add Pagination -->
					   <div class="swiper-pagination"></div>
					   <!-- Add Arrows -->
					   <div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
					   <div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] START Control Panel For PureSlider
						   --------------------------------------------------------------------------------------->
					<div class="editor" style="margin-bottom:12px;">
					   <div class="wsite-section-wrap">
						  <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto; background-color: #020202; background-image: none;">
							 <div class="wsite-section-content">
								<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
								   <div class="wsite-section-elements">
									  <h2 class="wsite-content-title" style="text-align: center;">
										 <font color="#ffffff" size="6">Background Editing for PureSlider Currently <span id="headline-lock">Locked</span></font>
									  </h2>
									  <div class="paragraph" style="text-align: center;">
										 <em>
										 <font color="#ffffff">
										 Section must be unlocked to edit the background image above. Unlocking the background editing will hide any content you dragged and dropped, and let you add/change/remove the background image for each
										 slide. This black section is a helper section and is only visible in the Weebly editor. This black section will not show on your live published website.
										 </font>
										 </em>
									  </div>
									  <div style="text-align: center;">
										 <div style="height: 0px; overflow: hidden;"></div>
										 <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleThis()">
										 <span class="wsite-button-inner"><span id="button-lock">Unlock</span> section</span>
										 </a>
										 <div style="height: 0px; overflow: hidden;"></div>
									  </div>
								   </div>
								</div>
							 </div>
						  </div>
					   </div>
					</div>
					<!-------------------------------------------------------------------------------------
					   [ADD-ON] END Control Panel for PureSlider Ends
					--------------------------------------------------------------------------------------->
          `;
        }
        
      }
      if (selectedBlocks[element] === "50-50-header") {
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SPLIT 50/50 BLANK IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--50/50 Section 2 - Reverse layout-->
					<div class="split-section-parent reverse">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{fiftyfiftysection3:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S3</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container header-text">
										<div class="wsite-elements wsite-not-footer header-text">
											<h2 class="wsite-content-title">{h2splitheader:text global="false"}</h2>
											<div class="paragraph">{psplitheader:text global="false"}<br><br></div>
											<div style="text-align:left;">
												<div style="height: 10px; overflow: hidden;"></div>
												{header1:button global="false"}
											<div style="height: 10px; overflow: hidden;"></div></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SPLIT 50/50 BLANK IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
        `;
      }
      if (selectedBlocks[element] === "60-40-header") {
        finalHTML += `
          <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: FOURTY-SIXTY HEADER
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--Fourty/Sixty Header-->
					<div class="fourty-sixty">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{splitimage2:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative">
							<div class="bg-indicator">S1</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										<div class="interior-container">
											
											<p class="subtitle">{subtitle:text global="false"}</p>
											<h2 class="big-header">{largeheader:text global="false"}</h2>
											<p class="big-paragraph">{paragraph:text global="false"}</p>
											<div class="button-wrap" style="margin-top: 28px;">{headerButtonOne:button global="false"}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: FOURTY-SIXTY HEADER
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "default-header") {
        finalHTML += `
         <!--Beginning of the background image banner-->
					<div class="banner-wrap">
					  {{#header}}
						  <div class="container">
							  <div class="banner">{content}</div>
						  </div>
					  {{/header}}
					</div>
        `;
      }

      /* Body Initializations */

      
      if (selectedBlocks[element] === "bg-cards-3") {
        bgCards3++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SERVICE ROW SECTION (x3)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-row" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column right-margin" data-aos="fade-up" data-aos-delay="100">
							<div class="image-holder" style="background-color:gray;">
								{${bgCards3}_cimage1:image global="false"}
							</div>
							<div class="content-holder cta-section">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="200">
									<div class="type-content">
										<p class="subtitle">{${bgCards3}_service1_subtitle:text global="false"}</p>
										<h2>{${bgCards3}_box1headline:text global="false"}</h2>
										<p>{${bgCards3}_box1text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${bgCards3}_box1button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column both-margin" data-aos="fade-up" data-aos-delay="200">
							<div class="image-holder" style="background-color:gray;">
								{${bgCards3}_cimage2:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300">
									<div class="type-content">
										<p class="subtitle">{${bgCards3}_service2_subtitle:text global="false"}</p>
										<h2>{${bgCards3}_box2headline:text global="false"}</h2>
										<p>{${bgCards3}_box2text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${bgCards3}_box2button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
						<!--Beginning of service box 3-->
						<div class="column left-margin " data-aos="fade-up" data-aos-delay="300">
							<div class="image-holder" style="background-color:gray;">
								{${bgCards3}_cimage3:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container" data-aos="fade-up" data-aos-delay="400">
									<div class="type-content">
										<p class="subtitle">{${bgCards3}_service3_subtitle:text global="false"}</p>
										<h2>{${bgCards3}_box3headline:text global="false"}</h2>
										<p>{${bgCards3}_box3text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${bgCards3}_box3button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 3-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SERVICE ROW SECTION (x3)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "bg-cards-2") {
        bgCards2++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SERVICE ROW SECTION (x2)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-row two-x" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column right-margin" data-aos="fade-up" data-aos-delay="100">
							<div class="image-holder" style="background-color:gray;">
								{${bgCards2}_cimage1-2x:image global="false"}
							</div>
							<div class="content-holder cta-section">
								<div class="content-container"    data-aos="fade-up" data-aos-delay="200">
									<div class="type-content">
										<p class="subtitle">{${bgCards2}_service1_subtitle-2x:text global="false"}</p>
										<h2>{${bgCards2}_box1headline-2x:text global="false"}</h2>
										<p>{${bgCards2}_box1text-2x:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${bgCards2}_box1button-2x:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column left-margin" data-aos="fade-up" data-aos-delay="200">
							<div class="image-holder" style="background-color:gray;">
								{${bgCards2}_cimage2-2x:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300">
									<div class="type-content">
										<p class="subtitle">{${bgCards2}_service2_subtitle-2x:text global="false"}</p>
										<h2>{${bgCards2}_box2headline-2x:text global="false"}</h2>
										<p>{${bgCards2}_box2text-2x:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${bgCards2}_box2button-2x:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SERVICE ROW SECTION (x2)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "img-cards-3") {
        imgCards3++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: IMAGE CARDS ROW SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-cards" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-cards right-margin" data-aos="fade-up" data-aos-delay="100">
							<div class="image-holder" style="background-color:gray;">
								{${imgCards3}_card-1-img:image global="false"}
							</div>
							<div class="content-holder cta-section">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="100" style="position:relative;" >
									<div class="bg-indicator">S9</div>
									<div class="type-content">
										<p class="subtitle">{${imgCards3}_card-1-subtitle:text global="false"}</p>
										<h2>{${imgCards3}_card-1-headline:text global="false"}</h2>
										<p>{${imgCards3}_card-1-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${imgCards3}_card-1-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-cards both-margin" data-aos="fade-up" data-aos-delay="200">
							<div class="image-holder" style="background-color:gray;">
								{${imgCards3}_card-2-image2:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container" data-aos="fade-up" data-aos-delay="200" style="position:relative;">
									<div class="bg-indicator">S9</div>
									<div class="type-content">
										<p class="subtitle">{${imgCards3}_card-2-subtitle:text global="false"}</p>
										<h2>{${imgCards3}_card-2-headline:text global="false"}</h2>
										<p>{${imgCards3}_card-2-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${imgCards3}_card-2-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
						<!--Beginning of service box 3-->
						<div class="column-cards left-margin" data-aos="fade-up" data-aos-delay="300">
							<div class="image-holder" style="background-color:gray;">
								{${imgCards3}_card-3-img:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300" style="position:relative;">
									<div class="bg-indicator">S9</div>
									<div class="type-content">
										<p class="subtitle">{${imgCards3}_card-3-subtitle:text global="false"}</p>
										<h2>{${imgCards3}_card-3-headline:text global="false"}</h2>
										<p>{${imgCards3}_card-3-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${imgCards3}_card-3-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 3-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: IMAGE CARDS ROW SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "img-cards-2") {
        imgCards2++;
        finalHTML += `
          <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: IMAGE CARDS ROW SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-cards" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-cards-2x right-margin " data-aos="fade-up" data-aos-delay="100">
							<div class="image-holder" style="background-color:gray;">
								{${imgCards2}_2x-card-1-img:image global="false"}
							</div>
							<div class="content-holder cta-section">
								<div class="content-container content-container-two-x"  data-aos="fade-up" data-aos-delay="100" style="position:relative;" >
									<div class="bg-indicator">S9</div>
									<div class="type-content">
										<p class="subtitle">{${imgCards2}_2x-card-1-subtitle:text global="false"}</p>
										<h2>{${imgCards2}_2x-card-1-headline:text global="false"}</h2>
										<p>{${imgCards2}_2x-card-1-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${imgCards2}_2x-card-1-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-cards-2x left-margin " data-aos="fade-up" data-aos-delay="200">
							<div class="image-holder" style="background-color:gray;">
								{${imgCards2}_2x-card-2-image2:image global="false"}
							</div>
							<div class="content-holder">
								<div class="content-container content-container-two-x" data-aos="fade-up" data-aos-delay="200" style="position:relative;">
									<div class="bg-indicator">S9</div>
									<div class="type-content">
										<p class="subtitle">{${imgCards2}_2x-card-2-subtitle:text global="false"}</p>
										<h2>{${imgCards2}_2x-card-2-headline:text global="false"}</h2>
										<p>{${imgCards2}_2x-card-2-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${imgCards2}_2x-card-2-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: IMAGE CARDS ROW SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "text-cards-3") {
        textCards3++;
        finalHTML += `
          <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: BOXES SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-boxes" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-boxes right-margin" data-aos="fade-up" data-aos-delay="100">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="200" >
									<div class="bg-indicator">S10</div>
									<div class="type-content">
										<p class="subtitle">{${textCards3}_box-1-subtitle:text global="false"}</p>
										<h2>{${textCards3}_box-1-headline:text global="false"}</h2>
										<p>{${textCards3}_first-box:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${textCards3}_box-1-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-boxes both-margin" data-aos="fade-up" data-aos-delay="200">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300" >
									<div class="bg-indicator">S10</div>
									<div class="type-content">
										<p class="subtitle">{${textCards3}_box-2-subtitle:text global="false"}</p>
										<h2>{${textCards3}_box-2-headline:text global="false"}</h2>
										<p>{${textCards3}_box-2-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${textCards3}_box-2-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
						<!--Beginning of service box 3-->
						<div class="column-boxes left-margin" data-aos="fade-up" data-aos-delay="300">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="400" >
									<div class="bg-indicator">S10</div>
									<div class="type-content">
										<p class="subtitle">{${textCards3}_box-3-subtitle:text global="false"}</p>
										<h2>{${textCards3}_box-3-headline:text global="false"}</h2>
										<p>{${textCards3}_box-3-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${textCards3}_box-3-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 3-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: BOXES SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "text-cards-2") {
        textCards2++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: BOXES SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-boxes" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-boxes right-margin" data-aos="fade-up" data-aos-delay="100">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="200" >
									<div class="bg-indicator">S10</div>
									<div class="type-content">
										<p class="subtitle">{${textCards2}_box-1-subtitle-2x:text global="false"}</p>
										<h2>{${textCards2}_box-1-headline-2x:text global="false"}</h2>
										<p>{${textCards2}_first-box-2x:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${textCards2}_box-1-button-2x:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-boxes left-margin" data-aos="fade-up" data-aos-delay="200">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300" >
									<div class="bg-indicator">S10</div>
									<div class="type-content">
										<p class="subtitle">{${textCards2}_box-2-subtitle-2x:text global="false"}</p>
										<h2>{${textCards2}_box-2-headline-2x:text global="false"}</h2>
										<p>{${textCards2}_box-2-text-2x:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${textCards2}_box-2-button-2x:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: BOXES SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "icon-cards-3") {
        iconCards3++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: ICON BOXES SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-boxes" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-boxes-icons right-margin" data-aos="fade-up" data-aos-delay="100">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="200" >
									<div class="bg-indicator">S11</div>
									<div class="type-content">
										<div class="icon-img-container">
											{${iconCards3}_icon-1-image:image global="false"}
										</div>
										
										<h2>{${iconCards3}_icon-1-headline:text global="false"}</h2>
										<p>{${iconCards3}_icon-1-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${iconCards3}_icon-1-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-boxes-icons both-margin" data-aos="fade-up" data-aos-delay="200">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300" >
									<div class="bg-indicator">S11</div>
									<div class="type-content">
										<div class="icon-img-container">
											{${iconCards3}_icon-2-image:image global="false"}
										</div>
										
										<h2>{${iconCards3}_icon-2-headline:text global="false"}</h2>
										<p>{${iconCards3}_icon-2-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{icon-2-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
						<!--Beginning of service box 3-->
						<div class="column-boxes-icons left-margin" data-aos="fade-up" data-aos-delay="300">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="400" >
									<div class="bg-indicator">S11</div>
									<div class="type-content">
										<div class="icon-img-container">
											{${iconCards3}_icon-3-image:image global="false"}
										</div>
										
										<h2>{${iconCards3}_icon-3-headline:text global="false"}</h2>
										<p>{${iconCards3}_icon-3-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${iconCards3}_icon-3-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 3-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: ICON BOXES SECTION (3x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "icon-cards-2") {
        iconCards2++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: ICON BOXES SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="service-boxes" style="height:100%;">
						<!--Beginning of service box 1-->
						<div class="column-boxes-icons-2 right-margin" data-aos="fade-up" data-aos-delay="100">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container"  data-aos="fade-up" data-aos-delay="200" >
									<div class="bg-indicator">S11</div>
									<div class="type-content">
										<div class="icon-img-container">
											{${iconCards2}_icon-4-image:image global="false"}
										</div>
										<h2>{${iconCards2}_icon-4-headline-2x:text global="false"}</h2>
										<p>{${iconCards2}_icon-4-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${iconCards2}_icon-4-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 1-->
						<!--Beginning of service box 2-->
						<div class="column-boxes-icons-2 left-margin" data-aos="fade-up" data-aos-delay="200">
							
							<div class="content-holder" style="position:relative;">
								<div class="content-container" data-aos="fade-up" data-aos-delay="300" >
									<div class="bg-indicator">S11</div>
									<div class="type-content">
										<div class="icon-img-container">
											{${iconCards2}_icon-5-image:image global="false"}
										</div>
										<h2>{${iconCards2}_icon-5-paragraph:text global="false"}</h2>
										<p>{${iconCards2}_icon-5-text:text global="false"}</p>
										<div class="button-wrap" style="align:center;">{${iconCards2}_icon-5-button:button global="false"}</div>
									</div>
								</div>
							</div>
						</div>
						<!--End of service box 2-->
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: ICON BOXES SECTION (2x)
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "5050-content-img-right") {
        fiftyFiftyContentImgRight++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [START]: SPLIT 50/50 CONTENT IMG ON RIGHT
        -------------------------------------------------------------------------------------------------------------------------------------------->
        <!--50/50 Section 1-->
        <div class="split-section-parent">
          <!--Content Column-->
          <div class="column-one" data-aos="fade-right" data-aos-delay="200" style="position:relative;">
            <div class="bg-indicator">S2</div>
            <div class="padding-implementation">
              <div class="column-one-inner">
                <div class="split-container" >
                  <div class="wsite-elements wsite-not-footer header-text">
                    <h2 class="wsite-content-title">{${fiftyFiftyContentImgRight}_h2splitheaderr:text global="false"}</h2>
                    <div class="paragraph">{${fiftyFiftyContentImgRight}_psplitheaderr:text global="false"}<br><br></div>
                    <div style="text-align:left;">
                      <div style="height: 10px; overflow: hidden;"></div>
                      {${fiftyFiftyContentImgRight}_header1r:button global="false"}
                    <div style="height: 10px; overflow: hidden;"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Image Column-->
          <div class="column-two" data-aos="fade-left" data-aos-delay="200">
            <div class="split-image">
              <div class="image-holder">
              {${fiftyFiftyContentImgRight}_2fiftyfiftysection2r:image global="false"}
              </div>
            </div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [END]: SPLIT 50/50 CONTENT IMG ON RIGHT
        -------------------------------------------------------------------------------------------------------------------------------------------->
        
        `;
      }
      if (selectedBlocks[element] === "5050-content-img-left") {
        fiftyFiftyContentImgLeft++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SPLIT 50/50 CONTENT IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--50/50 Section 2 - Reverse layout-->
					<div class="split-section-parent reverse">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${fiftyFiftyContentImgLeft}_2fiftyfiftysection3l:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S3</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										<div class="wsite-elements wsite-not-footer header-text">
											<h2 class="wsite-content-title">{${fiftyFiftyContentImgLeft}_h2splitheaderl:text global="false"}</h2>
											<div class="paragraph">{${fiftyFiftyContentImgLeft}_psplitheaderl:text global="false"}<br><br></div>
											<div style="text-align:left;">
												<div style="height: 10px; overflow: hidden;"></div>
												{${fiftyFiftyContentImgLeft}_header1l:button global="false"}
											<div style="height: 10px; overflow: hidden;"></div></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SPLIT 50/50 CONTENT IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
				
        `;
      }
      if (selectedBlocks[element] === "5050-blank-img-right") {
        fiftyFiftyBlankImgRight++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SPLIT 50/50 BLANK IMG ON RIGHT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--50/50 Section 1-->
					<div class="split-section-parent">
						<!--Content Column-->
						<div class="column-one" data-aos="fade-right" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S2</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container" >{${fiftyFiftyBlankImgRight}_fiftyfiftysection1:content global="false"}</div>
								</div>
							</div>
						</div>
						<!--Image Column-->
						<div class="column-two" data-aos="fade-left" data-aos-delay="200">
							<div class="split-image">
								<div class="image-holder">
								{${fiftyFiftyBlankImgRight}_fiftyfiftysection2:image global="false"}
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SPLIT 50/50 BLANK IMG ON RIGHT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "5050-blank-img-left") {
        fiftyFiftyBlankImgLeft++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SPLIT 50/50 BLANK IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--50/50 Section 2 - Reverse layout-->
					<div class="split-section-parent reverse">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${fiftyFiftyBlankImgLeft}_fiftyfiftysection3:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S3</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">{${fiftyFiftyBlankImgLeft}_fiftyfiftysection4:content global="false"}</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SPLIT 50/50 BLANK IMG ON LEFT
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "6040-img-left-var1") {
        sixtyFourtyImgLeftVar1++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SERVICE-SIXTY-FOURTY-1 PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--Service 1-->
					<div class="service-sixtyfourty-1">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${sixtyFourtyImgLeftVar1}_sixtyfourtyservice1:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S4</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										<div class="subtitle-holder">
											<p class="subtitle" data-aos="fade-up" data-aos-delay="100">{${sixtyFourtyImgLeftVar1}_subtitlesixtyfourty1:text global="false"}</p>
										</div>
										<div class="content-holder">
											<h2 data-aos="fade-up" data-aos-delay="200">{${sixtyFourtyImgLeftVar1}_h2sixtyfourty1:text global="false"}</h2>
											<p data-aos="fade-up" data-aos-delay="300">{${sixtyFourtyImgLeftVar1}_psixtyfourty1:text global="false"}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SERVICE-SIXTY-FOURTY-1 PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "6040-img-right-var2") {
        sixtyFourtyImgRightVar2++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SERVICE-SIXTY-FOURTY-2 PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--Service 2-->
					<div class="service-sixtyfourty-2">
						<!--Content Column-->
						<div class="column-one" data-aos="fade-right" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S5</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										<div class="subtitle-holder">
											<p class="subtitle" data-aos="fade-up" data-aos-delay="100">{${sixtyFourtyImgRightVar2}_subtitlesixtyfourty2:text global="false"}</p>
										</div>
										<div class="content-holder">
											<h2 data-aos="fade-up" data-aos-delay="200">{${sixtyFourtyImgRightVar2}_h2sixtyfourty2:text global="false"}</h2>
											<p data-aos="fade-up" data-aos-delay="300">{${sixtyFourtyImgRightVar2}_psixtyfourty2:text global="false"}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--Image Column-->
						<div class="column-two" data-aos="fade-left" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${sixtyFourtyImgRightVar2}_sixtyfourtyservice2:image global="false"}
								</div>
							</div>
						</div>
						
					</div>
					
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SERVICE-SIXTY-FOURTY-2 PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "6040-img-left-var3") {
        sixtyFourtyImgLeftVar3++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: SERVICE-SIXTY-FOURTY-3 PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<!--Service 3-->
					<div class="service-sixtyfourty-3">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${sixtyFourtyImgLeftVar3}_sixtyfourtyservice3:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S6</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										<div class="subtitle-holder">
											<p class="subtitle" data-aos="fade-up" data-aos-delay="100">{${sixtyFourtyImgLeftVar3}_subtitlesixtyfourty3:text global="false"}</p>
										</div>
										<div class="content-holder">
											<h2 data-aos="fade-up" data-aos-delay="200">{${sixtyFourtyImgLeftVar3}_h2sixtyfourty3:text global="false"}</h2>
											<p data-aos="fade-up" data-aos-delay="300">{${sixtyFourtyImgLeftVar3}_psixtyfourty3:text global="false"}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: SERVICE-SIXTY-FOURTY-3 PREMADE
					
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "portfolio") {
        portfolio++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: PRISTINE-PORTFOLIO PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="pristine-portfolio">
						<!--Image Column-->
						<div class="column-two" data-aos="fade-right" data-aos-delay="200" >
							<div class="split-image">
								<div class="image-holder">
								{${portfolio}_portfolioimg:image global="false"}
								</div>
							</div>
						</div>
						<!--Content Column-->
						<div class="column-one" data-aos="fade-left" data-aos-delay="200" style="position:relative;">
							<div class="bg-indicator">S7</div>
							<div class="padding-implementation">
								<div class="column-one-inner">
									<div class="split-container">
										
										<div class="content-holder">
											<h2>{${portfolio}_portfolioh2:text global="false"}</h2>
											<p class="subtitle">{${portfolio}_portfoliosp:text global="false"}</p>
											<p>{${portfolio}_portfoliop:text global="false"}</p>
											<div class="button-wrap" style="margin-top: 28px;">{${portfolio}_portfoliobutton:button global="false"}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: PRISTINE-PORTFOLIO PREMADE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "bodybg-content") {
        bodyBgContent++;
        finalHTML += `
        <div class="main-wrap main-wrap-body-color">
						<div class="container">{${bodyBgContent}_contentthreebody:content global="false"}</div>
					</div>
        `;
      }
      if (selectedBlocks[element] === "padding-block") {
        paddingBlock++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: Empty Padding Block
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="blended-text-header-padding">
						<div class="main-wrap blended-section">
							<div class="container text-header">
								<div class="text-header-aligner">
									
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: Empty Padding Block
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "parallax") {
        parallaxSection++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [START]: PARALLAX SECTION ${parallaxSection}_
        -------------------------------------------------------------------------------------------------------------------------------------------->
        <!--Parallax-->
          <!--In-editorInfoline for Parallax Section #1-->
          <div class="editor" style="width:100%; min-height:70px; height:auto; color:white; background-color: black; text-align:center; padding: 20px; box-sizing:border-box">
          <p style="font-color:white; line-height:14px; font-size: 12px;">[ i ] Parallax section below. Click on the section below to upload image.
            Don't worry if it looks weird in the Weebly editor. It'll look normal on your published site.</p><p style="font-color:white; line-height:10px; font-size: 12px;"> To edit or delete your image, press the "toggle" button below. Then,
            hover over your image until a popup appears with the "edit" and "delete" options. Since these are parallax sections, you may need to scroll a bit up or down to be able to click on the "edit image" popup.</p>
          </div>
          <!--Parallax Section #1-->
          <div id="parent1" class="jarallax" data-speed="0.5" style="pointer-events: auto !important;">
          <div id="section1" class="jarallax-img" style="pointer-events: auto !important">
            <div style="pointer-events:auto !important;" class="toggleSelector1">{${parallaxSection}_imageone:image global="false"}</div>
          </div>
          <!--Content Section-->
          <div class="parallaxl">
            <div class="container">{${parallaxSection}_parallaxone:content global="false"}</div>
          </div>
          </div>
          <!--Control Panel for Section #1-->
          <div class="parallax-control">
          <div class="main-wrap" style="padding-left:0px; padding-right:0px; width:100%;">
            <div id="wsite-content" class="wsite-elements wsite-not-footer">
            <div class="wsite-section-wrap">
              <div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53" style="height: auto;background-color: #020202;background-image: none;">
              <div class="wsite-section-content">
                <div class="container" style="padding-top:15px; padding-bottom:15px">
                <div class="wsite-section-elements">

                  <div style="text-align:center;">
                  <div style="height: 0px; overflow: hidden;"></div>
                  <a class="wsite-button wsite-button-large wsite-button-normal" onclick="toggleBackground()">
                    <span class="wsite-button-inner">Toggle Above Background Editability</span>
                  </a>
                  <div style="height: 0px; overflow: hidden;"></div>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [END]: PARALLAX SECTION ${parallaxSection}_
        -------------------------------------------------------------------------------------------------------------------------------------------->
								
        `;
      }
      if (selectedBlocks[element] === "title-subtitle") {
        titleSubtitle++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: TITLE + SUBTITLE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="blended-text-header-padding">
						<div class="main-wrap blended-section">
							<div class="container text-header">
								<div class="text-header-aligner">
									<p class="subtitle" data-aos="fade-up" data-aos-delay="000">{${titleSubtitle}_subtitle-textheading:text global="false"}</p>
									<h2 class="big-header" data-aos="fade-up" data-aos-delay="100">{${titleSubtitle}_:text global="false"}</h2>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: TITLE + SUBTITLE
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
        `;
      }
      if (selectedBlocks[element] === "title-subtitle-button") {
        titleSubtitleButton++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
					[START]: Title + Subtitle Block with Button
					-------------------------------------------------------------------------------------------------------------------------------------------->
					<div class="blended-text-header-padding" >
						<div class="main-wrap blended-section">
							<div class="container text-header">
								<div class="text-header-aligner">
									<p class="subtitle" data-aos="fade-up" data-aos-delay="100">{${titleSubtitleButton}_subtitle-textheadingbtn:text global="false"}</p>
									<h2 class="big-header" data-aos="fade-up" data-aos-delay="200">{${titleSubtitleButton}_textheaderh2:text global="false"}</h2>
									<div class="button-wrap" style="align:center">{${titleSubtitleButton}_titleandsubtitle:button global="false"}</div>
								</div>
							</div>
						</div>
					</div>
					<!-------------------------------------------------------------------------------------------------------------------------------------------
					[END]: Title + Subtitle Block with Button
					-------------------------------------------------------------------------------------------------------------------------------------------->
					
					
        `;
      }
      if (selectedBlocks[element] === "white-content") {
        whiteContent++;
        finalHTML += `
        <div class="main-wrap">
						<div class="container">{${whiteContent}_contentblank:content global="false"}</div>
					</div>
        `;
      }
      if (selectedBlocks[element] === "sections") {
        weeblySections++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [START]: WHITE WEEBLY SECTIONS
        -------------------------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap main-wrap-body-color">
          {{#sections}}
            <div class="container">{content}</div>
          {{/sections}}
        </div>
        <!-------------------------------------------------------------------------------------------------------------------------------------------
        [END]: WHITE WEEBLY SECTIONS
        -------------------------------------------------------------------------------------------------------------------------------------------->
        
        `;
      }
    }

    endingCode = `
        <!--Added-->
              </div>
          </div>
        </div>
        <div class="footer-wrap">
          <div class="footer">
            <div class="container">{footer}</div>
          </div>
        </div><!-- end footer-wrap -->
      </div><!-- /.wrapper -->
    </div>
  </div>
		
	<div id="navMobile" class="nav mobile-nav">
			
			
			<div class="hamburger-social">
				<div class="mobile-social-holder" style="position: absolute; top:10px; left:0px;">
					<div class="social-mobile">
						<div class="social-items-section">{social}</div>
					</div>
				</div>
				
			</div>
			<label class="hamburger"><span></span></label>
			{menu}
		</div>
		
		
		<script type="text/javascript" src="/files/theme/plugins.js"></script>
		<script type="text/javascript" src="/files/theme/custom.js"></script>
		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <!--PureSlider Control Code Starts Here-->
    <script>
      function toggleThis() {

        var headlineText = document.getElementById("headline-lock");
        var buttonText = document.getElementById("button-lock");

        jQuery('.swiper-weebly-content').toggle();

        if(jQuery('.swiper-weebly-content').is(":hidden")) {
          headlineText.innerHTML = "Unlocked";
          buttonText.innerHTML = "Lock";
        } else {
          headlineText.innerHTML = "Locked";
          buttonText.innerHTML = "Unlock";
        }
      }

    </script>
    <script>

      if (!(jQuery('#icontent').length)){
        AOS.init();
      }

    </script>
    <!--JAVASCRIPT FOR PARALLAX STARTS BELOW-->
    <script>
      function toggleBackground() {
        // Raises the parallax image to make it easier to edit
        jQuery('.toggleSelector1').toggleClass('editable-image');

        // Hides content to make it easier to access image
        jQuery('.parallaxl').toggle();
      }
    </script>
    <script type="text/javascript" src="/files/theme/parallax-1.js"></script>
    <script type="text/javascript" src="/files/theme/parallax-2.js"></script>
    <script type="text/javascript">
      // object-fit polyfill run
      objectFitImages();

      /* init Jarallax */
      jarallax(document.querySelectorAll('.jarallax'));
    </script>
		
		<!--Script for the search function-->
		<script>
			var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null
			var touchorclick = (ismobile)? 'touchstart' : 'click'
			var searchcontainer = document.getElementById('searchcontainer')
			var searchfield = document.getElementById('search-terms')
			var searchlabel = document.getElementById('search-label')

			searchlabel.addEventListener(touchorclick, function(e){ // when user clicks on search label
				searchcontainer.classList.toggle('opensearch') // add or remove 'opensearch' to searchcontainer
				if (!searchcontainer.classList.contains('opensearch')){ // if hiding searchcontainer
					searchfield.blur() // blur search field
					e.preventDefault() // prevent default label behavior of focusing on search field again
				}
				e.stopPropagation() // stop event from bubbling upwards
			}, false)

			searchfield.addEventListener(touchorclick, function(e){ // when user clicks on search field
				e.stopPropagation() // stop event from bubbling upwards
			}, false)

			document.addEventListener(touchorclick, function(e){ // when user clicks anywhere in document
				searchcontainer.classList.remove('opensearch')
				searchfield.blur()
			}, false)
		</script>
		
		<!--Scripts for the side navigation-->
		<script>
		function openNav() {
			var width = document.getElementById("mySidenav").offsetWidth;
			if (width > 200) {
				document.getElementById("mySidenav").style.width = "0px";
				document.getElementById("sidebar-container").style.display = "none";
				document.getElementById("mySidenav").style.borderLeft = "0px solid rgba(0,0,0,0.2)";
				document.getElementById("sidebar-container").style.display = "none";
			}
			if (width < 250) {
				document.getElementById("mySidenav").style.width = "500px";
				document.getElementById("sidebar-container").style.display = "inherit";
				document.getElementById("mySidenav").style.borderLeft = "1px solid rgba(0,0,0,0.2)";
				document.getElementById("sidebar-container").style.display = "block";
			}
		}
		</script>
    <script src="/files/theme/pureslider.js"></script>

                      <!-- Initialize Swiper -->
                      <script>
                        let options = {};

                        if(jQuery('#icontent').length){
                          // In the editor
                          options = {
                            spaceBetween: 0,
                            centeredSlides: true,
                            simulateTouch: false,
                            /*autoplay: {
						delay: 2500,
						disableOnInteraction: true,
                            },*/
                            pagination: {
                              el: '.swiper-pagination',
                              clickable: true,
                            },
                            navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                            }
                          }

                        } else {
                          options = {
                            spaceBetween: 00,
                            centeredSlides: true,
                            simulateTouch: true,
                            autoplay: {
                              delay: 2500,
                              disableOnInteraction: true,
                            },
                            pagination: {
                              el: '.swiper-pagination',
                              clickable: true,
                            },
                            navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                            }
                          }
                        }
						
						var swiper = new Swiper('.swiper-container', options);
						
			
                      </script>
	</body>
</html>


   
    `;
    
    finalHTML += endingCode;
    console.log(finalHTML);
    // Let's tidy up the JS a bit
    var cleanCode = indent.js(finalHTML, {tabString: '  '});

    publishModal.style.display = "block";
    publishHeader.innerText = "Success! Layout Code Generated";
    publishText.innerText = cleanCode;
    
  
    // Tidy up the HTML a bit
  });
  
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("js-delete-btn")) {
      document
        .querySelector(".js-droppable")
        .removeChild(event.target.parentElement);
    }
  });
  
  ["resize", "load"].forEach(function(event) {
    window.addEventListener(event, function() {
      imagesLoaded(snippets, function() {
        // A masonry grid with 0px gutter, with 2 columns on desktop, 2 on tablet, and 1 column on mobile devices.
        masonry(".js-snippets", ".js-snippet", 0, 2, 2, 1);
      });
    });
  });
  
  },{"dragula":9,"imagesloaded":11,"js-file-download":12}],2:[function(require,module,exports){
  module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }
  
  },{}],3:[function(require,module,exports){
  'use strict';
  
  var ticky = require('ticky');
  
  module.exports = function debounce (fn, args, ctx) {
    if (!fn) { return; }
    ticky(function run () {
      fn.apply(ctx || null, args || []);
    });
  };
  
  },{"ticky":13}],4:[function(require,module,exports){
  'use strict';
  
  var atoa = require('atoa');
  var debounce = require('./debounce');
  
  module.exports = function emitter (thing, options) {
    var opts = options || {};
    var evt = {};
    if (thing === undefined) { thing = {}; }
    thing.on = function (type, fn) {
      if (!evt[type]) {
        evt[type] = [fn];
      } else {
        evt[type].push(fn);
      }
      return thing;
    };
    thing.once = function (type, fn) {
      fn._once = true; // thing.off(fn) still works!
      thing.on(type, fn);
      return thing;
    };
    thing.off = function (type, fn) {
      var c = arguments.length;
      if (c === 1) {
        delete evt[type];
      } else if (c === 0) {
        evt = {};
      } else {
        var et = evt[type];
        if (!et) { return thing; }
        et.splice(et.indexOf(fn), 1);
      }
      return thing;
    };
    thing.emit = function () {
      var args = atoa(arguments);
      return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function (type) {
      var et = (evt[type] || []).slice(0);
      return function () {
        var args = atoa(arguments);
        var ctx = this || thing;
        if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
        et.forEach(function emitter (listen) {
          if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
          if (listen._once) { thing.off(type, listen); }
        });
        return thing;
      };
    };
    return thing;
  };
  
  },{"./debounce":3,"atoa":2}],5:[function(require,module,exports){
  (function (global){
  'use strict';
  
  var customEvent = require('custom-event');
  var eventmap = require('./eventmap');
  var doc = global.document;
  var addEvent = addEventEasy;
  var removeEvent = removeEventEasy;
  var hardCache = [];
  
  if (!global.addEventListener) {
    addEvent = addEventHard;
    removeEvent = removeEventHard;
  }
  
  module.exports = {
    add: addEvent,
    remove: removeEvent,
    fabricate: fabricateEvent
  };
  
  function addEventEasy (el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
  }
  
  function addEventHard (el, type, fn) {
    return el.attachEvent('on' + type, wrap(el, type, fn));
  }
  
  function removeEventEasy (el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
  }
  
  function removeEventHard (el, type, fn) {
    var listener = unwrap(el, type, fn);
    if (listener) {
      return el.detachEvent('on' + type, listener);
    }
  }
  
  function fabricateEvent (el, type, model) {
    var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) {
      el.dispatchEvent(e);
    } else {
      el.fireEvent('on' + type, e);
    }
    function makeClassicEvent () {
      var e;
      if (doc.createEvent) {
        e = doc.createEvent('Event');
        e.initEvent(type, true, true);
      } else if (doc.createEventObject) {
        e = doc.createEventObject();
      }
      return e;
    }
    function makeCustomEvent () {
      return new customEvent(type, { detail: model });
    }
  }
  
  function wrapperFactory (el, type, fn) {
    return function wrapper (originalEvent) {
      var e = originalEvent || global.event;
      e.target = e.target || e.srcElement;
      e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
      e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
      e.which = e.which || e.keyCode;
      fn.call(el, e);
    };
  }
  
  function wrap (el, type, fn) {
    var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
    hardCache.push({
      wrapper: wrapper,
      element: el,
      type: type,
      fn: fn
    });
    return wrapper;
  }
  
  function unwrap (el, type, fn) {
    var i = find(el, type, fn);
    if (i) {
      var wrapper = hardCache[i].wrapper;
      hardCache.splice(i, 1); // free up a tad of memory
      return wrapper;
    }
  }
  
  function find (el, type, fn) {
    var i, item;
    for (i = 0; i < hardCache.length; i++) {
      item = hardCache[i];
      if (item.element === el && item.type === type && item.fn === fn) {
        return i;
      }
    }
  }
  
  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{"./eventmap":6,"custom-event":7}],6:[function(require,module,exports){
  (function (global){
  'use strict';
  
  var eventmap = [];
  var eventname = '';
  var ron = /^on/;
  
  for (eventname in global) {
    if (ron.test(eventname)) {
      eventmap.push(eventname.slice(2));
    }
  }
  
  module.exports = eventmap;
  
  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{}],7:[function(require,module,exports){
  (function (global){
  
  var NativeCustomEvent = global.CustomEvent;
  
  function useNative () {
    try {
      var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
      return  'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {
    }
    return false;
  }
  
  /**
   * Cross-browser `CustomEvent` constructor.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
   *
   * @public
   */
  
  module.exports = useNative() ? NativeCustomEvent :
  
  // IE >= 9
  'function' === typeof document.createEvent ? function CustomEvent (type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) {
      e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    } else {
      e.initCustomEvent(type, false, false, void 0);
    }
    return e;
  } :
  
  // IE <= 8
  function CustomEvent (type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
      e.bubbles = Boolean(params.bubbles);
      e.cancelable = Boolean(params.cancelable);
      e.detail = params.detail;
    } else {
      e.bubbles = false;
      e.cancelable = false;
      e.detail = void 0;
    }
    return e;
  }
  
  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{}],8:[function(require,module,exports){
  'use strict';
  
  var cache = {};
  var start = '(?:^|\\s)';
  var end = '(?:\\s|$)';
  
  function lookupClass (className) {
    var cached = cache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      cache[className] = cached = new RegExp(start + className + end, 'g');
    }
    return cached;
  }
  
  function addClass (el, className) {
    var current = el.className;
    if (!current.length) {
      el.className = className;
    } else if (!lookupClass(className).test(current)) {
      el.className += ' ' + className;
    }
  }
  
  function rmClass (el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
  }
  
  module.exports = {
    add: addClass,
    rm: rmClass
  };
  
  },{}],9:[function(require,module,exports){
  (function (global){
  'use strict';
  
  var emitter = require('contra/emitter');
  var crossvent = require('crossvent');
  var classes = require('./classes');
  var doc = document;
  var documentElement = doc.documentElement;
  
  function dragula (initialContainers, options) {
    var len = arguments.length;
    if (len === 1 && Array.isArray(initialContainers) === false) {
      options = initialContainers;
      initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove
  
    var o = options || {};
    if (o.moves === void 0) { o.moves = always; }
    if (o.accepts === void 0) { o.accepts = always; }
    if (o.invalid === void 0) { o.invalid = invalidTarget; }
    if (o.containers === void 0) { o.containers = initialContainers || []; }
    if (o.isContainer === void 0) { o.isContainer = never; }
    if (o.copy === void 0) { o.copy = false; }
    if (o.copySortSource === void 0) { o.copySortSource = false; }
    if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
    if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
    if (o.direction === void 0) { o.direction = 'vertical'; }
    if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
    if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }
  
  
    var drake = emitter({
      containers: o.containers,
      start: manualStart,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      canMove: canMove,
      dragging: false
    });
  
    if (o.removeOnSpill === true) {
      drake.on('over', spillOver).on('out', spillOut);
    }
  
    events();
  
    return drake;
  
    function isContainer (el) {
      return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }
  
    function events (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousedown', grab);
      touchy(documentElement, op, 'mouseup', release);
    }
  
    function eventualMovements (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }
  
    function movements (remove) {
      var op = remove ? 'remove' : 'add';
      crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
      crossvent[op](documentElement, 'click', preventGrabbed);
    }
  
    function destroy () {
      events(true);
      release({});
    }
  
    function preventGrabbed (e) {
      if (_grabbed) {
        e.preventDefault();
      }
    }
  
    function grab (e) {
      _moveX = e.clientX;
      _moveY = e.clientY;
  
      var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
      if (ignore) {
        return; // we only care about honest-to-god left clicks and touch events
      }
      var item = e.target;
      var context = canStart(item);
      if (!context) {
        return;
      }
      _grabbed = context;
      eventualMovements();
      if (e.type === 'mousedown') {
        if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
          item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
        } else {
          e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
        }
      }
    }
  
    function startBecauseMouseMoved (e) {
      if (!_grabbed) {
        return;
      }
      if (whichMouseButton(e) === 0) {
        release({});
        return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
      }
      // truthy check fixes #239, equality fixes #207
      if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
        return;
      }
      if (o.ignoreInputTextSelection) {
        var clientX = getCoord('clientX', e);
        var clientY = getCoord('clientY', e);
        var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
        if (isInput(elementBehindCursor)) {
          return;
        }
      }
  
      var grabbed = _grabbed; // call to end() unsets _grabbed
      eventualMovements(true);
      movements();
      end();
      start(grabbed);
  
      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;
  
      classes.add(_copy || _item, 'gu-transit');
      renderMirrorImage();
      drag(e);
    }
  
    function canStart (item) {
      if (drake.dragging && _mirror) {
        return;
      }
      if (isContainer(item)) {
        return; // don't drag container itself
      }
      var handle = item;
      while (getParent(item) && isContainer(getParent(item)) === false) {
        if (o.invalid(item, handle)) {
          return;
        }
        item = getParent(item); // drag target should be a top element
        if (!item) {
          return;
        }
      }
      var source = getParent(item);
      if (!source) {
        return;
      }
      if (o.invalid(item, handle)) {
        return;
      }
  
      var movable = o.moves(item, source, handle, nextEl(item));
      if (!movable) {
        return;
      }
  
      return {
        item: item,
        source: source
      };
    }
  
    function canMove (item) {
      return !!canStart(item);
    }
  
    function manualStart (item) {
      var context = canStart(item);
      if (context) {
        start(context);
      }
    }
  
    function start (context) {
      if (isCopy(context.item, context.source)) {
        _copy = context.item.cloneNode(true);
        drake.emit('cloned', _copy, context.item, 'copy');
      }
  
      _source = context.source;
      _item = context.item;
      _initialSibling = _currentSibling = nextEl(context.item);
  
      drake.dragging = true;
      drake.emit('drag', _item, _source);
    }
  
    function invalidTarget () {
      return false;
    }
  
    function end () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      drop(item, getParent(item));
    }
  
    function ungrab () {
      _grabbed = false;
      eventualMovements(true);
      movements(true);
    }
  
    function release (e) {
      ungrab();
  
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }
    }
  
    function drop (item, target) {
      var parent = getParent(item);
      if (_copy && o.copySortSource && target === _source) {
        parent.removeChild(_item);
      }
      if (isInitialPlacement(target)) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, target, _source, _currentSibling);
      }
      cleanup();
    }
  
    function remove () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var parent = getParent(item);
      if (parent) {
        parent.removeChild(item);
      }
      drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
      cleanup();
    }
  
    function cancel (revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
      var item = _copy || _item;
      var parent = getParent(item);
      var initial = isInitialPlacement(parent);
      if (initial === false && reverts) {
        if (_copy) {
          if (parent) {
            parent.removeChild(_copy);
          }
        } else {
          _source.insertBefore(item, _initialSibling);
        }
      }
      if (initial || reverts) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, parent, _source, _currentSibling);
      }
      cleanup();
    }
  
    function cleanup () {
      var item = _copy || _item;
      ungrab();
      removeMirrorImage();
      if (item) {
        classes.rm(item, 'gu-transit');
      }
      if (_renderTimer) {
        clearTimeout(_renderTimer);
      }
      drake.dragging = false;
      if (_lastDropTarget) {
        drake.emit('out', item, _lastDropTarget, _source);
      }
      drake.emit('dragend', item);
      _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }
  
    function isInitialPlacement (target, s) {
      var sibling;
      if (s !== void 0) {
        sibling = s;
      } else if (_mirror) {
        sibling = _currentSibling;
      } else {
        sibling = nextEl(_copy || _item);
      }
      return target === _source && sibling === _initialSibling;
    }
  
    function findDropTarget (elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;
      while (target && !accepted()) {
        target = getParent(target);
      }
      return target;
  
      function accepted () {
        var droppable = isContainer(target);
        if (droppable === false) {
          return false;
        }
  
        var immediate = getImmediateChild(target, elementBehindCursor);
        var reference = getReference(target, immediate, clientX, clientY);
        var initial = isInitialPlacement(target, reference);
        if (initial) {
          return true; // should always be able to drop it right back where it was
        }
        return o.accepts(_item, target, _source, reference);
      }
    }
  
    function drag (e) {
      if (!_mirror) {
        return;
      }
      e.preventDefault();
  
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var x = clientX - _offsetX;
      var y = clientY - _offsetY;
  
      _mirror.style.left = x + 'px';
      _mirror.style.top = y + 'px';
  
      var item = _copy || _item;
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
      if (changed || dropTarget === null) {
        out();
        _lastDropTarget = dropTarget;
        over();
      }
      var parent = getParent(item);
      if (dropTarget === _source && _copy && !o.copySortSource) {
        if (parent) {
          parent.removeChild(item);
        }
        return;
      }
      var reference;
      var immediate = getImmediateChild(dropTarget, elementBehindCursor);
      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, clientX, clientY);
      } else if (o.revertOnSpill === true && !_copy) {
        reference = _initialSibling;
        dropTarget = _source;
      } else {
        if (_copy && parent) {
          parent.removeChild(item);
        }
        return;
      }
      if (
        (reference === null && changed) ||
        reference !== item &&
        reference !== nextEl(item)
      ) {
        _currentSibling = reference;
        dropTarget.insertBefore(item, reference);
        drake.emit('shadow', item, dropTarget, _source);
      }
      function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
      function over () { if (changed) { moved('over'); } }
      function out () { if (_lastDropTarget) { moved('out'); } }
    }
  
    function spillOver (el) {
      classes.rm(el, 'gu-hide');
    }
  
    function spillOut (el) {
      if (drake.dragging) { classes.add(el, 'gu-hide'); }
    }
  
  
    function renderMirrorImage () {
      if (_mirror) {
        return;
      }
      var rect = _item.getBoundingClientRect();
      _mirror = _item.cloneNode(true);
      _mirror.style.width = getRectWidth(rect) + 'px';
      _mirror.style.height = getRectHeight(rect) + 'px';
      classes.rm(_mirror, 'gu-transit');
      classes.add(_mirror, 'gu-mirror');
      o.mirrorContainer.appendChild(_mirror);
      touchy(documentElement, 'add', 'mousemove', drag);
      classes.add(o.mirrorContainer, 'gu-unselectable');
      drake.emit('cloned', _mirror, _item, 'mirror');
    }
  
    function removeMirrorImage () {
      if (_mirror) {
        classes.rm(o.mirrorContainer, 'gu-unselectable');
        touchy(documentElement, 'remove', 'mousemove', drag);
        getParent(_mirror).removeChild(_mirror);
        _mirror = null;
      }
    }
  
    function getImmediateChild (dropTarget, target) {
      var immediate = target;
      while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
        immediate = getParent(immediate);
      }
      if (immediate === documentElement) {
        return null;
      }
      return immediate;
    }
  
    function getReference (dropTarget, target, x, y) {
      var horizontal = o.direction === 'horizontal';
      var reference = target !== dropTarget ? inside() : outside();
      return reference;
  
      function outside () { // slower, but able to figure out any position
        var len = dropTarget.children.length;
        var i;
        var el;
        var rect;
        for (i = 0; i < len; i++) {
          el = dropTarget.children[i];
          rect = el.getBoundingClientRect();
          if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
          if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
        }
        return null;
      }
  
      function inside () { // faster, but only available if dropped inside a child element
        var rect = target.getBoundingClientRect();
        if (horizontal) {
          return resolve(x > rect.left + getRectWidth(rect) / 2);
        }
        return resolve(y > rect.top + getRectHeight(rect) / 2);
      }
  
      function resolve (after) {
        return after ? nextEl(target) : target;
      }
    }
  
    function isCopy (item, container) {
      return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
  }
  
  function touchy (el, op, type, fn) {
    var touch = {
      mouseup: 'touchend',
      mousedown: 'touchstart',
      mousemove: 'touchmove'
    };
    var pointers = {
      mouseup: 'pointerup',
      mousedown: 'pointerdown',
      mousemove: 'pointermove'
    };
    var microsoft = {
      mouseup: 'MSPointerUp',
      mousedown: 'MSPointerDown',
      mousemove: 'MSPointerMove'
    };
    if (global.navigator.pointerEnabled) {
      crossvent[op](el, pointers[type], fn);
    } else if (global.navigator.msPointerEnabled) {
      crossvent[op](el, microsoft[type], fn);
    } else {
      crossvent[op](el, touch[type], fn);
      crossvent[op](el, type, fn);
    }
  }
  
  
  
  function whichMouseButton (e) {
    if (e.touches !== void 0) { return e.touches.length; }
    if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) { return e.buttons; }
    var button = e.button;
    if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
      return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
    }
  }
  
  function getOffset (el) {
    var rect = el.getBoundingClientRect();
    return {
      left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
      top: rect.top + getScroll('scrollTop', 'pageYOffset')
    };
  }
  
  function getScroll (scrollProp, offsetProp) {
    if (typeof global[offsetProp] !== 'undefined') {
      return global[offsetProp];
    }
    if (documentElement.clientHeight) {
      return documentElement[scrollProp];
    }
    return doc.body[scrollProp];
  }
  
  function getElementBehindPoint (point, x, y) {
    var p = point || {};
    var state = p.className;
    var el;
    p.className += ' gu-hide';
    el = doc.elementFromPoint(x, y);
    p.className = state;
    return el;
  }
  
  function never () { return false; }
  function always () { return true; }
  function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
  function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
  function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
  function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
  function isEditable (el) {
    if (!el) { return false; } // no parents were editable
    if (el.contentEditable === 'false') { return false; } // stop the lookup
    if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
  }
  
  function nextEl (el) {
    return el.nextElementSibling || manually();
    function manually () {
      var sibling = el;
      do {
        sibling = sibling.nextSibling;
      } while (sibling && sibling.nodeType !== 1);
      return sibling;
    }
  }
  
  function getEventHost (e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) {
      return e.targetTouches[0];
    }
    if (e.changedTouches && e.changedTouches.length) {
      return e.changedTouches[0];
    }
    return e;
  }
  
  function getCoord (coord, e) {
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }
    return host[coord];
  }
  
  module.exports = dragula;
  
  }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  },{"./classes":8,"contra/emitter":4,"crossvent":5}],10:[function(require,module,exports){
  /**
   * EvEmitter v1.1.0
   * Lil' event emitter
   * MIT License
   */
  
  /* jshint unused: true, undef: true, strict: true */
  
  ( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  "use strict";
  
  function EvEmitter() {}
  
  var proto = EvEmitter.prototype;
  
  proto.on = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[ eventName ] = events[ eventName ] || [];
    // only add once
    if ( listeners.indexOf( listener ) == -1 ) {
      listeners.push( listener );
    }
  
    return this;
  };
  
  proto.once = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // add event
    this.on( eventName, listener );
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // set flag
    onceListeners[ listener ] = true;
  
    return this;
  };
  
  proto.off = function( eventName, listener ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    var index = listeners.indexOf( listener );
    if ( index != -1 ) {
      listeners.splice( index, 1 );
    }
  
    return this;
  };
  
  proto.emitEvent = function( eventName, args ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( var i=0; i < listeners.length; i++ ) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[ listener ];
      if ( isOnce ) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off( eventName, listener );
        // unset once flag
        delete onceListeners[ listener ];
      }
      // trigger listener
      listener.apply( this, args );
    }
  
    return this;
  };
  
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  
  return EvEmitter;
  
  }));
  
  },{}],11:[function(require,module,exports){
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  
  ( function( window, factory ) { 'use strict';
    // universal module definition
  
    /*global define: false, module: false, require: false */
  
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'ev-emitter/ev-emitter'
      ], function( EvEmitter ) {
        return factory( window, EvEmitter );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('ev-emitter')
      );
    } else {
      // browser global
      window.imagesLoaded = factory(
        window,
        window.EvEmitter
      );
    }
  
  })( typeof window !== 'undefined' ? window : this,
  
  // --------------------------  factory -------------------------- //
  
  function factory( window, EvEmitter ) {
  
  'use strict';
  
  var $ = window.jQuery;
  var console = window.console;
  
  // -------------------------- helpers -------------------------- //
  
  // extend objects
  function extend( a, b ) {
    for ( var prop in b ) {
      a[ prop ] = b[ prop ];
    }
    return a;
  }
  
  var arraySlice = Array.prototype.slice;
  
  // turn element or nodeList into an array
  function makeArray( obj ) {
    if ( Array.isArray( obj ) ) {
      // use object if already an array
      return obj;
    }
  
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if ( isArrayLike ) {
      // convert nodeList to array
      return arraySlice.call( obj );
    }
  
    // array of single index
    return [ obj ];
  }
  
  // -------------------------- imagesLoaded -------------------------- //
  
  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    var queryElem = elem;
    if ( typeof elem == 'string' ) {
      queryElem = document.querySelectorAll( elem );
    }
    // bail if bad element
    if ( !queryElem ) {
      console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
      return;
    }
  
    this.elements = makeArray( queryElem );
    this.options = extend( {}, this.options );
    // shift arguments if no options set
    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }
  
    if ( onAlways ) {
      this.on( 'always', onAlways );
    }
  
    this.getImages();
  
    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }
  
    // HACK check async to allow time to bind listeners
    setTimeout( this.check.bind( this ) );
  }
  
  ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
  
  ImagesLoaded.prototype.options = {};
  
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
  
    // filter & find items if we have an item selector
    this.elements.forEach( this.addElementImages, this );
  };
  
  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName == 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }
  
    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( var i=0; i < childImgs.length; i++ ) {
      var img = childImgs[i];
      this.addImage( img );
    }
  
    // get child background images
    if ( typeof this.options.background == 'string' ) {
      var children = elem.querySelectorAll( this.options.background );
      for ( i=0; i < children.length; i++ ) {
        var child = children[i];
        this.addElementBackgroundImages( child );
      }
    }
  };
  
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  
  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    var style = getComputedStyle( elem );
    if ( !style ) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      var url = matches && matches[2];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };
  
  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };
  
  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    var background = new Background( url, elem );
    this.images.push( background );
  };
  
  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }
  
    function onProgress( image, elem, message ) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( function() {
        _this.progress( image, elem, message );
      });
    }
  
    this.images.forEach( function( loadingImage ) {
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    });
  };
  
  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent( 'progress', [ this, image, elem ] );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount == this.images.length ) {
      this.complete();
    }
  
    if ( this.options.debug && console ) {
      console.log( 'progress: ' + message, image, elem );
    }
  };
  
  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent( eventName, [ this ] );
    this.emitEvent( 'always', [ this ] );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };
  
  // --------------------------  -------------------------- //
  
  function LoadingImage( img ) {
    this.img = img;
  }
  
  LoadingImage.prototype = Object.create( EvEmitter.prototype );
  
  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }
  
    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener( 'load', this );
    this.proxyImage.addEventListener( 'error', this );
    // bind to image as well for Firefox. #191
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.proxyImage.src = this.img.src;
  };
  
  LoadingImage.prototype.getIsImageComplete = function() {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };
  
  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.img, message ] );
  };
  
  // ----- events ----- //
  
  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener( 'load', this );
    this.proxyImage.removeEventListener( 'error', this );
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  // -------------------------- Background -------------------------- //
  
  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  
  // inherit LoadingImage prototype
  Background.prototype = Object.create( LoadingImage.prototype );
  
  Background.prototype.check = function() {
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };
  
  Background.prototype.unbindEvents = function() {
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.element, message ] );
  };
  
  // -------------------------- jQuery -------------------------- //
  
  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();
  
  // --------------------------  -------------------------- //
  
  return ImagesLoaded;
  
  });
  
  },{"ev-emitter":10}],12:[function(require,module,exports){
  module.exports = function(data, filename, mime, bom) {
      var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data]
      var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
          // IE workaround for "HTML7007: One or more blob URLs were 
          // revoked by closing the blob for which they were created. 
          // These URLs will no longer resolve as the data backing 
          // the URL has been freed."
          window.navigator.msSaveBlob(blob, filename);
      }
      else {
          var blobURL = window.URL.createObjectURL(blob);
          var tempLink = document.createElement('a');
          tempLink.style.display = 'none';
          tempLink.href = blobURL;
          tempLink.setAttribute('download', filename); 
          
          // Safari thinks _blank anchor are pop ups. We only want to set _blank
          // target if the browser does not support the HTML5 download attribute.
          // This allows you to download files in desktop safari if pop up blocking 
          // is enabled.
          if (typeof tempLink.download === 'undefined') {
              tempLink.setAttribute('target', '_blank');
          }
          
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
          window.URL.revokeObjectURL(blobURL);
      }
  }
  
  },{}],13:[function(require,module,exports){
  (function (setImmediate){
  var si = typeof setImmediate === 'function', tick;
  if (si) {
    tick = function (fn) { setImmediate(fn); };
  } else {
    tick = function (fn) { setTimeout(fn, 0); };
  }
  
  module.exports = tick;
  }).call(this,require("timers").setImmediate)
  },{"timers":15}],14:[function(require,module,exports){
  // shim for using process in browser
  var process = module.exports = {};
  
  // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  (function () {
      try {
          if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
          } else {
              cachedSetTimeout = defaultSetTimout;
          }
      } catch (e) {
          cachedSetTimeout = defaultSetTimout;
      }
      try {
          if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
          } else {
              cachedClearTimeout = defaultClearTimeout;
          }
      } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
      }
  } ())
  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }
  
  
  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }
  
  
  
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }
  
  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
  
      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  };
  
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) { return [] }
  
  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };
  
  },{}],15:[function(require,module,exports){
  (function (setImmediate,clearImmediate){
  var nextTick = require('process/browser.js').nextTick;
  var apply = Function.prototype.apply;
  var slice = Array.prototype.slice;
  var immediateIds = {};
  var nextImmediateId = 0;
  
  // DOM APIs, for completeness
  
  exports.setTimeout = function() {
    return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
  };
  exports.setInterval = function() {
    return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
  };
  exports.clearTimeout =
  exports.clearInterval = function(timeout) { timeout.close(); };
  
  function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
  }
  Timeout.prototype.unref = Timeout.prototype.ref = function() {};
  Timeout.prototype.close = function() {
    this._clearFn.call(window, this._id);
  };
  
  // Does not start the time, just sets up the members needed.
  exports.enroll = function(item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
  };
  
  exports.unenroll = function(item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
  };
  
  exports._unrefActive = exports.active = function(item) {
    clearTimeout(item._idleTimeoutId);
  
    var msecs = item._idleTimeout;
    if (msecs >= 0) {
      item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout)
          item._onTimeout();
      }, msecs);
    }
  };
  
  // That's not how node.js implements it but the exposed api is the same.
  exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
    var id = nextImmediateId++;
    var args = arguments.length < 2 ? false : slice.call(arguments, 1);
  
    immediateIds[id] = true;
  
    nextTick(function onNextTick() {
      if (immediateIds[id]) {
        // fn.call() is faster so we optimize for the common use-case
        // @see http://jsperf.com/call-apply-segu
        if (args) {
          fn.apply(null, args);
        } else {
          fn.call(null);
        }
        // Prevent ids from leaking
        exports.clearImmediate(id);
      }
    });
  
    return id;
  };
  
  exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
    delete immediateIds[id];
  };
  }).call(this,require("timers").setImmediate,require("timers").clearImmediate)
  },{"process/browser.js":14,"timers":15}]},{},[1]);
  