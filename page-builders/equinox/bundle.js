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
  let numberOfCarousel = 0;
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

 // CODE FOR AUTOGEN STARTS HERE
  // Get the <figure> element with the ID "myFigure"
  const figure = document.getElementById("navigation");

  // Get the <div> element with the class "js-droppable"
  const target = document.querySelector(".js-droppable");

  // Clone the <figure> element
  const clonedFigure = figure.cloneNode(true);

  // Add the cloned <figure> element to the target <div>
  target.appendChild(clonedFigure);
  
  clonedFigure.innerHTML += deleteBtnHtml;
  clonedFigure.classList.add ("relative");
  const label = clonedFigure.querySelector(".figure-label");
  clonedFigure.removeChild(label);
  arrayByAddition.push(clonedFigure);
 

  // CODE FOR AUTOGEN ENDS HERE

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
    
    /* ON DROP: RULES START BELOW (PART 1 OF RULE INSPECTION) 
    Equinox Specific Rules: No More Than 1, No more Than 1 BG hero
    */

    // BG Hero Rule
    // Navigation Must Be First Rule
    // No More Than 1 Instance Rule


    // BG HERO RULES --> No more than one Background IMG-utilizing section per page
    if ((lastItemDropped === "hero-1") || 
        (lastItemDropped === "hero-2") || 
        (lastItemDropped === "hero-3") || 
        (lastItemDropped === "default-header")) {
          console.log("Rule Inspection Triggered: No More Than One Element Allowed");
          let numberOfHeaders = 0; // How many pre-existing headers we have
      
          for (let headerCount = 0; headerCount < selectedBlocksDD.length; headerCount++) {
            if ((selectedBlocksDD[headerCount] == "hero-1" ) || 
                (selectedBlocksDD[headerCount] == "hero-2") || 
                (selectedBlocksDD[headerCount] == "hero-3") || 
                (selectedBlocksDD[headerCount] == "default-header")) {
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
            WarningHeader.innerText = "Whoops! You can only have one HERO or default header element per page";
            WarningText.innerText = "Looks like you tried to add more than one hero element or header element. You can only have one of these per page, due to how Weebly handles hero background images. Headers include the Hero Image Headers and Weebly default headers";
            return;
          }
      };


    // Section RULES --> No more than one Weebly Section per page
    if ((el.id === "default-section")) {
      let numberOfSections = 0; // How many pre-existing headers we have
      for (let sectionCount = 0; sectionCount < selectedBlocksDD.length; sectionCount++) {
        if ((selectedBlocksDD[sectionCount] == "default-section" )) {
            numberOfSections = numberOfSections + 1;
        }
      };
      if (numberOfSections > 1) {
          // Deletion script occurs
          source.appendChild(el);
          source.removeChild(el);

          // Display Warning Modal with Generated Content
          warningModal.style.display = "block";
          WarningHeader.innerText = "Whoops! You can only have one WeeblyFlex Section per page.";
          WarningText.innerText = "Looks like you tried to drag in multiple WeeblyFlex Sections. Weebly only allows one WeeblyFlex per page. Do note that you can create additional sections inside of the WeeblyFlex section once you import your layout into the Weebly Editor, each with their own backgrounds (video backgrounds, image backgrounds, color backgrounds, graident backgrounds). If you need to add another white section somewhere else on the page, add a Weebly Blank section. Please contact us at luminousthemes.com/support if you're having trouble.";
          return;
      }
    };

    // Count Selection Prompt 2023 - Carousel Free
    if (el.id === "carousel-free") {
      // this function automatically opens the modern modal interface. selection variable is stored as a property of the relevant object in rawElements array. 
      showModal(el);
    }

    // Count Selection Prompt 2023 - PureSlider
    if (el.id === "pureslider") {
      // this function automatically opens the modern modal interface. selection variable is stored as a property of the relevant object in rawElements array. 
      showModal(el);
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
    let rawElements = [];
    let selectedSnippets = document.querySelectorAll(
      ".js-droppable > .js-snippet"
    );
  
    for (var i = 0; i < selectedSnippets.length; i++) {
      selectedBlocks.push(selectedSnippets[i].id);
      rawElements.push(selectedSnippets[i]);
    }

    let html = "";
    console.log(selectedBlocks);
    
    let scrollipageExistence = 0;
    // Search for ScrolliPage Block. If present...
    for (var iki = 0; iki < selectedBlocks.length; iki++) {
        if (selectedBlocks[iki] === "scrollipage-anchor") {
            scrollipageExistence = scrollipageExistence + 1;
        }
    }
   
    // If there is a Scrollipage anchor present upon download, the value of scrolliPage existence will be greater than 0. 

    // INACTIVE Let's make sure the first element is a header
    /*if ((selectedBlocks[0] != "pureslider-5")) {
      if (selectedBlocks[0] != "homepage-header") {
        if (selectedBlocks[0] != "default-header") {
          if (selectedBlocks[0] != "no-header") {
            if (selectedBlocks[0] != "video-header") {

              // Display Warning Modal with Generated Content
              warningModal.style.display = "block";
              WarningHeader.innerText = "Uh oh! Look's like you're missing a header";
              WarningText.innerText = "The first element on your page should be a header section";
              return;

            }
          }
        }
      }
    }*/

    // Represents head code
    let beginningCode = ``;
    let codeCredits;
    // Add layout description 
    codeCredits = 
    `
    
    <!-- 
    This HTML layout was created with Page Builder. If you'd like to edit this page layout, you'll need to re-create it in Page Builder. 
    This page is made with the following PageBuilder blocks:

    `;

    // List of Blocks
    for (var listofModules = 0; listofModules < selectedBlocks.length; listofModules++) {
        codeCredits += 
        `
        ${selectedBlocks[listofModules]}
        `;
    }
        

    // End Tag
    codeCredits += 
    `
    -->
    `;

    // A350-Beginning-Code Import the rest of beginning code WITHOUT ScrolliPage...
    beginningCode +=  `
    <!DOCTYPE html>
    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0;">
      <script src="/files/theme/pureslider.js"></script>
      <script type="text/javascript" src="/files/theme/scrollipage.js"></script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    </head>

    <body class="header-page has-header">
      <div class="overflow-control">
      <!-- Theme Control Panel -->
      <div class="theme-control-panel">
        <div class="left-control" id="inject-text">
          <h2>Equinox Theme</h2>
          <p>Version 2.3.1 | To hide this control panel, go to Theme -> Theme Options -> Toggle Control</p>
        </div>
        <div class="right-control">
          <a class="yellow-button" href="https://luminous-designs.github.io/luminous-designs/page-builders/equinox/index.html" target="_blank">Page Builder</a>
          <a class="blue-button" href="http://www.example.com" target="_blank">Instructions</a>
        </div>
      </div>
      <!-- END OF HEADER CODE -->
      <!-- DROP CONTENT BELOW -->
                        
        
    `;


    // A350 Set the beginning code depending on whether ScrolliPage is present or not present...
    if (scrollipageExistence > 0) {
        // Beginning Code WITH ScrolliPage

        // START of ScrolliPage
        beginningCode += `
        <!-------------------------------------------------------------------------------------
        [ADD-ON START] ScrolliPage Vertical Navigation Markup starts here
        --------------------------------------------------------------------------------------->
        <nav id="cd-vertical-nav" style="z-index:10;">
            <ul>
        `;

        // MIDDLE of ScrolliPage
        for (let numOfAnchors = 1; numOfAnchors <= scrollipageExistence; numOfAnchors++) {
            beginningCode += `
            <li>
                <a data-number="${numOfAnchors}" href="#uniqueAnchor_${numOfAnchors}" class="">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{section${numOfAnchors}:text global="false"}</span>
                </a>
            </li>

             `;
        }

        // END of ScrolliPage
        beginningCode += `
            </ul>
        </nav>
        <!-------------------------------------------------------------------------------------
        [ADD-ON END] ScrolliPage Vertical Navigation Markup ends here
        --------------------------------------------------------------------------------------->
        <div class="editor">
            <div id="floating-div" onclick = "toggleDots()" style="position:fixed; width:auto; padding-left:10px; padding-right:10px; padding-top:5px; padding-bottom:5px; height:auto; bottom:10px; left:30px; background-color:#000; z-index:1000;">
                <p style="color:white">Toggle ScrolliPage Nav</p>
            </div>
        </div>
        `;
    } 

    let endingCode;

    // A350 Ending Code
    endingCode = `
    <!-- START OF FOOTER CODE -->
	<!-- </div>-->
	<!-- Module 1/7: Script Imports -->
	<script type="text/javascript" src="/files/theme/custom.js"></script>
	<script type="text/javascript" src="/files/theme/mobile.js"></script>
	<script src="/files/theme/pureslider.js"></script>
	<script type="text/javascript" src="/files/theme/parallax-1.js"></script>
    <script type="text/javascript" src="/files/theme/parallax-2.js"></script>
	<!--<script type="text/javascript" src="/files/theme/bloginit.js"></script>-->
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<!-- Module 1/7: Custom Theme End-->
	<!-- Module 2/7: PureSlider Start-->
	  <script>
		let options = {};

		if (jQuery('#icontent').length) {
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

		var swiper = new Swiper('.pureslider-start', options);

	  </script>
	  <script>
		function toggleThis() {
		  var headlineText = document.getElementById("headline-lock");
		  var buttonText = document.getElementById("button-lock");

		  jQuery('.swiper-weebly-content').toggle();

		  if (jQuery('.swiper-weebly-content').is(":hidden")) {
			headlineText.innerHTML = "Unlocked";
			buttonText.innerHTML = "Lock";
		  } else {
			headlineText.innerHTML = "Locked";
			buttonText.innerHTML = "Unlock";
		  }
		}
	  </script>
	  <!-- Module 2/7: PureSlider End-->
	  <!-- Module 3/7: Parallax Start-->
	 
    <script>
      function toggleBackground() {
        jQuery('.toggleSelector1').toggleClass('editable-image');
        jQuery('.parallaxl').toggle();
      }
    </script>
    <script type="text/javascript">
      objectFitImages();
      jarallax(document.querySelectorAll('.jarallax'));
    </script>
    <!-- Module 3/7: Parallax End -->
	<!-- Module 4/7: Scrollipage Start -->
	<script>
	    jQuery(".cd-label:empty").parent().hide();
		
		function toggleDots() {
			jQuery( "#cd-vertical-nav" ).toggle();
		}
	</script>
	<!-- Module 4/7: Scrollipage End -->
	<!-- Module 5/7: Carousel Start -->
    <script>
      let optionsCarousel = {};
      if (jQuery('#icontent').length) {
        // In the editor
        optionsCarousel = {
          slidesPerView: 3,
          spaceBetween: 30,
          simulateTouch: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        }
      }
      
      else {
        optionsCarousel = {
          slidesPerView: 3,
          spaceBetween: 30,
          simulateTouch: true,
          breakpoints: {
            // when window width is <= 499px
            992: {
              slidesPerView: 1,
              spaceBetweenSlides: 50
            },
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        }
      }
      var swiper = new Swiper('.mySwiper', optionsCarousel);
    </script>
    <!-- End of Carousel Import -->
	<!-- Module 5/7: Carousel End -->
	<!-- Module 6/7: AOS -->
	
	<!-- AOS Initalization -->
	<script>
	
	 if (!(jQuery('#icontent').length)){
        AOS.init();
     }
      
    </script>
	<!-- Module 6/7 AOS End -->
	<script>
// Only run if there is no #icontent div present
if (!document.querySelector('#icontent')) {
  // Get the URL from the user-submitted-url div
  // const url = document.querySelector('#user-submitted-url').textContent.trim();
  const url = 'https://equinox-theme.weebly.com/blog';
  // Fetch the page at the specified URL
  fetch(url)
    .then(response => response.text())
    .then(html => {
      // Parse the HTML and get the .blog-post elements
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const blogPosts = doc.querySelectorAll('.blog-post');

      // Create an array of objects representing the blog posts
      const posts = [];
      for (const post of blogPosts) {
        const title = post.querySelector('.blog-header h2').textContent;
        const date = post.querySelector('.date-text').textContent;
        const image = post.querySelector('.blog-content img').src;
        // Get the link element and extract the link
        const linkElement = post.querySelector('.blog-link');
        const link = linkElement.href;

        const blogPost = {
          title,
          date,
          image, 
          link
        };
        posts.push(blogPost);
      }
	  
	// Injection Protocol Starts Here - Inject post title into all elements with "inject-blog-title" class
	const injectTitleElements = document.querySelectorAll('.inject-blog-title');

	injectTitleElements.forEach((element, index) => {
		element.textContent = posts[index].title;
	});
	
	// Inject image URL into all elements with "inject-blog-image" class
	const injectImageElements = document.querySelectorAll('.inject-blog-image');

	injectImageElements.forEach((element, index) => {
	  element.src = posts[index].image;
	});
	
	// Inject date text into all elements with "inject-blog-date" class
	const injectDateElements = document.querySelectorAll('.inject-blog-date');

	injectDateElements.forEach((element, index) => {
	  element.textContent = posts[index].date;
	});
	
	// Inject link into all elements with the "inject-blog-link" class
	const injectLinkElements = document.querySelectorAll('.inject-blog-link');

	injectLinkElements.forEach((element, index) => {
	  element.href = posts[index].link;
	});



    });
}

	</script>
	
	
	
	
</body>
</html>
    `;
     endingCode += codeCredits;

    let finalHTML = ``;
    finalHTML += beginningCode;

    // Counter Variables Initialization
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

    let freeCarouselCount = 0;
    
   
    
    // A350-ASSEMBLY SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {


      // A350 Hero 1 Assembly...
      if (selectedBlocks[element] === "hero-1") {
        hero1++;
        finalHTML += `
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

      // A350 Hero 2 Assembly...
      if (selectedBlocks[element] === "hero-2") {
        hero2++;
        finalHTML += `
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

      // A350 Hero 3 Assembly...
      if (selectedBlocks[element] === "hero-3") {
        hero3++;
        finalHTML += `
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

      // A350 Navigation Bar Assembly...
      if (selectedBlocks[element] === "navigation") {
        navigation++;
        finalHTML += `
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
            <div id="nav" class="menu">
              {menu}
            </div>
            <!-- Button Holder Module -->
            <div class="nav-button-holder">
              <div class="button-wrap" style="margin-right:10px;">{nav:button}</div>
              <div class="button-wrap">{nav-2:button}</div>
            </div>
            <div id="navmobile" class="menu">{menu}</div>
          </div>
        </div>
        <!-------------------------------------------------------------------------------------
        NAVIGATION BAR ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // A350 ScrolliPage Anchor
      if (selectedBlocks[element] === "scrollipage-anchor") {
        scrollipageAnchor++;
        finalHTML += `
        <div id="uniqueAnchor_${scrollipageAnchor}" class="scrollipage-anchor" style="width:100%; min-height:100px; padding-top: 40px; padding-bottom: 40px; background-color:gray; display:-webkit-flex; display:flex; -webkit-justify-content:center; justify-content:center; -webkit-align-items:center; align-items:center;">
            <p>ScrolliPage Anchor ${scrollipageAnchor} - Clicking on Dot ${scrollipageAnchor} Will Go Here </p>
        </div>
        `;
      }

      // A350 Services White Icon Assembly - Subject to Variation
      if (selectedBlocks[element] === "services-white-icon") {
        servicesWhiteIcon++;
        finalHTML += `
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

      // A350 Colored Icons Assembly - Subject to Variation
      if (selectedBlocks[element] === "services-colorful-icon") {
        servicesColorfulIcon++;
        finalHTML += `
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

      // A350 Text Left Image Right Assembly
      if (selectedBlocks[element] === "text-left-image-right") {
        textLeftImageRight++;
        finalHTML += `
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

      // A350 Image Left Text Right
      if (selectedBlocks[element] === "image-left-text-right") {
        imageLeftTextRight++;
        finalHTML += `
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

      // A350 feature-boxes
      if (selectedBlocks[element] === "feature-boxes") {
        featureBoxes++;
        finalHTML += `
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

      // A350 feature-boxes-curved
      if (selectedBlocks[element] === "feature-boxes-curved") {
        featureBoxesCurved++;
        finalHTML += `
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

      // A350 Testimonial
      if (selectedBlocks[element] === "testimonial") {
        testimonial++;
        finalHTML += `
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

      // A350 Step By Step
      if (selectedBlocks[element] === "step-by-step") {
        stepByStep++;
        finalHTML += `
        
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

      // A350 Pricing
      if (selectedBlocks[element] === "pricing") {
        pricing++;
        finalHTML += `
        
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

      // A350 Call to Action
      if (selectedBlocks[element] === "call-to-action") {
        callToAction++;
        finalHTML += `
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

      // A350 Default Weebly Header
      if (selectedBlocks[element] === "default-weebly-header") {
        
        finalHTML += `
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

      // A350 Parallax
      if (selectedBlocks[element] === "parallax") {
        parallax++;
        finalHTML += `
        <!-------------------------------------------------------------------------------------
        PARALLAX STARTS HERE
        --------------------------------------------------------------------------------------->
        <div class="editor" style="width:100%; height:60px; color:white; background-color: black; text-align:center; padding-top:15px;">
          <p style="font-color:white; line-height:10px; font-size: 12px;">[ i ] Parallax section below. Click on the section below to upload image.
          Don't worry if it looks weird in the Weebly editor. It'll look normal on your published site. To edit or delete your image, press the "toggle" button below. Then,
          hover over your image until a popup appears with the "edit" and "delete" options.</p>
        </div>
        <!--Parallax Section #1-->
        <div id="parent1" class="jarallax" data-speed="0.4" style="pointer-events: auto !important;">
          <div id="section1" class="jarallax-img" style="pointer-events: auto !important">
          <div style="pointer-events:auto !important;" class="toggleSelector1">{${parallax}_3_imageone:image global="false"}</div>
          </div>
          <!--Content Section-->
          <div class="parallaxl" id="content-controller-1" style="background-color:rgba(0,0,0,0.4);">
          <div class="container">{${parallax}_3_parallaxone:content global="false"}</div>
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
        <!-------------------------------------------------------------------------------------
        PARALLAX ENDS HERE
        --------------------------------------------------------------------------------------->
        `;
      }

      // A350 Blog Reference Section
      if (selectedBlocks[element] === "blog-reference") {
        
        finalHTML += `
        <!-- Experimental Blog Section Starts Below --> 
        <div class="blog-information-section">
          <div>
            <h6>Below is a blog section. In the right text area, please enter the URL slug of your blog page (for example, /blog)</h6>
            <p style="color: white;">Only type in your blog's URL page slug, not full URL (i.e /blog, not domain.com/blog)</p>
          </div>
          <div id="user-submitted-url">{usersubmittedurl:text global="false"}</div>
        </div>
        
        <section class="combine-section_blog4">
          <div class="container">
            <div class="combine-padding-section-medium-2">
              <div class="combine-container-small-2">
                <div class="combine-text-align-center-2">
                  <h2 class="combine-heading-style-h2-2" data-aos-delay="000" data-aos-anchor-placement="top">Our Blog</h2>
                  <div class="combine-space-medium-2"></div>
                  <div class="combine-text-size-regular-2" data-aos-delay="000" data-aos-anchor-placement="top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</div>
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


      // NOT COMPLETE PURESLIDER - VARIABLE COMPONENT GENERATION
      if (selectedBlocks[element] === "pureslider") {
        stepByStep++;

        // BEGINNING of PureSlider HTML
        finalHTML += `
        <!-------------------------------------------------------------------------------------
        PURESLIDER HEADER MODULE STARTS HERE
        --------------------------------------------------------------------------------------->
        <!--PureSlider-10-->
        <div class="swiper-container pureslider-start" style="pointer-events: auto !important;">
            <div class="swiper-wrapper" style="pointer-events: auto !important;">
        `;

        // MIDDLE Slider Generation
        for (let sliderCount = 0; sliderCount < numberOfSlides; sliderCount++) {
            finalHTML += `
            <!-- PureSlider Slide Starts Here -->
            <div class="swiper-slide" style="pointer-events: auto !important;">
                <div class="swiper-weebly-total">
                    <div class="swiper-weebly-image">
                        {${pureslider5}_sliderimage_${sliderCount}:image global="false"}
                    </div>
                    <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                        <!--Outer-->
                        <div class="middle-container"
                            style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                            <!--Middle-->
                            <div class="slider-container">
                                <!--Inner-->
                                <div id="slide-0">{${pureslider5}_slidercontent_${sliderCount}:content global="false"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- PureSlider Slide Ends Here -->
            `;
        }

        // END of PureSlider HTML
        finalHTML += `
        </div>
						<!-- Add Pagination -->
						<div class="swiper-pagination"></div>
						<!-- Add Arrows -->
						<div class="swiper-button-next" id="next-button"><i class="fa fa-angle-right"></i></div>
						<div class="swiper-button-prev" id="prev-button"><i class="fa fa-angle-left"></i></div>
					</div>
					<!-------------------------------------------------------------------------------------
					[ADD-ON] START Control Panel For PureSlider
					--------------------------------------------------------------------------------------->
					<div class="editor">
						<div class="wsite-section-wrap">
							<div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-53"
								style="height: auto; background-color: #020202; background-image: none;">
								<div class="wsite-section-content">
									<div class="container" style="padding-top: 40px; padding-bottom: 40px;">
										<div class="wsite-section-elements">
											<h2 class="wsite-content-title" style="text-align: center;">
												<font color="#ffffff" size="6">Background Editing for PureSlider Currently <span
														id="headline-lock">Locked</span></font>
											</h2>
											<div class="paragraph" style="text-align: center;">
												<em>
													<font color="#ffffff">
														Section must be unlocked to edit the background image above. Unlocking the
														background editing will hide any content you dragged and dropped, and let you
														add/change/remove the background image for each
														slide. This black section is a helper section and is only visible in the Weebly
														editor. This black section will not show on your live published website.
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
					<!-------------------------------------------------------------------------------------
					PURESLIDER HEADER MODULE ENDS HERE
					--------------------------------------------------------------------------------------->
        `;

      }

      // NOT COMPLETED CAROUSEL- VARIABLE COMPONENT GENERATION
      if (selectedBlocks[element] === "carousel-free") {
        let currentElementCount = rawElements[element].selectedCustomization;
        freeCarouselCount++;
        console.log("Alrighty folks. Here we have a carousel free element with " + rawElements[element].selectedCustomization);

        // BEGINNING - Build beginning of Carousel Block
        finalHTML += 
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
        for (var carouselGen = 0; carouselGen < rawElements[element].selectedCustomization; carouselGen++) {
        finalHTML += `
                    <!-- Start of Carousel Slide -->
                    <div class="swiper-slide" style="min-height:200px; height:auto;">
                        <div class="swiper-container">
                            {${freeCarouselCount}_carouselimage_${carouselGen}:image global="false"}
                            <h2 style="color:white">{${freeCarouselCount}_carouselh2_${carouselGen}:text global="false"}</h2>
                            <p style="color:white">{${freeCarouselCount}_carouselp_${carouselGen}:text global="false"}</p>
                        </div>
                    </div>
                    <!-- End of Carousel Slide -->
        `;
        }

        // END - Attach End of Carousel Block
        finalHTML += 
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

    
    finalHTML += endingCode;
    console.log(finalHTML);
    // Let's tidy up the JS a bit
    var cleanCode = indent.js(finalHTML, {tabString: '  '});

    publishModal.style.display = "block";
    publishHeader.innerText = "Success! Layout Code Generated";
    publishText.innerText = cleanCode;
    
  
    // Tidy up the HTML a bit
  });

  // 19823 Experimental
  function showModal(obj) {
    // Create the modal container
    let modal = document.createElement("div");
    modal.classList.add("modal-equinox");
  
    // Create the modal content
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content-equinox");
  
    // Create the title
    let title = document.createElement("h2");
    title.textContent = "Enter Number of Items";
    modalContent.appendChild(title);
  
    // Create the select element
    let select = document.createElement("select");
    for (let i = 1; i <= 12; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }
    modalContent.appendChild(select);
  
    // Create the continue button
    let continueButton = document.createElement("button");
    continueButton.textContent = "Continue";
    continueButton.addEventListener("click", function() {
      obj.selectedCustomization = select.value;
      document.body.removeChild(modal);
    });
    modalContent.appendChild(continueButton);
  
    // Add the content to the modal container
    modal.appendChild(modalContent);
  
    // Add the modal to the body
    document.body.appendChild(modal);
  
    // Animate the modal
    modal.classList.add("show-modal-equinox");
  }
  
  
  
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
  