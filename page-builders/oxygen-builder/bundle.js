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
    if ((lastItemDropped === "pureslider-5") || (lastItemDropped === "homepage-header") || (lastItemDropped === "default-header") || (lastItemDropped === "no-header")) {
      console.log("we have a header");
      let numberOfHeaders = 0; // How many pre-existing headers we have
      
      for (let headerCount = 0; headerCount < selectedBlocksDD.length; headerCount++) {
        if ((selectedBlocksDD[headerCount] == "pureslider-5" ) || (selectedBlocksDD[headerCount] == "homepage-header") || (selectedBlocksDD[headerCount] == "no-header") || (selectedBlocksDD[headerCount] == "default-header")) {
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
    if ((el.id != "pureslider-5") || (el.id != "homepage-header") || (el.id != "default-header") || (el.id != "no-header")) {
      if ((selectedBlocksDD[0] != "pureslider-5")) {
        if (selectedBlocksDD[0] != "homepage-header") {
          if (selectedBlocksDD[0] != "default-header") {
            if (selectedBlocksDD[0] != "no-header") {
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

    // PURESLIDER PROMPT --> How many Slides?
    if (el.id === "pureslider-5") {
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
    if ((selectedBlocks[0] != "pureslider-5")) {
      if (selectedBlocks[0] != "homepage-header") {
        if (selectedBlocks[0] != "default-header") {
          if (selectedBlocks[0] != "no-header") {
            // Display Warning Modal with Generated Content
            warningModal.style.display = "block";
            WarningHeader.innerText = "Uh oh! Look's like you're missing a header";
            WarningText.innerText = "The first element on your page should be a header section";
            return;
          }
        }
      }
    }

    // Represents head code
    let beginningCode;

    // Represents footer code
    let endingCode;
     // T2 If the header is PureSlider, beginningCode should be the beginning of T2
     if ((selectedBlocks[0] === "pureslider-5")) {
       beginningCode = `
       <!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="/files/theme/pureslider.js"></script>
		<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	</head>
	
	<body class='header  wsite-theme-light' style="overflow-x: hidden !important; max-width: 100% !important;">
		
		<!--Side Navigation-->
		<div id="mySidenav" class="sidenav">
			<div class="theButton">
				<a href="javascript:void(0)" class="closebtn" onclick="openNav()" style="z-index:50 !important;"><i class="fa fa-times"></i></a>
			</div>
			<div id="sidebar-container">
				<div class="main-wrap" style="background:none !important; background-color:none !important">{sidebar:content}</div>
			</div>
		</div>	
		
		<!--Search Overlay-->
		<div id="searchcontainer">
			<div id="vertical-wrap" style="width:100%; height:100%; display: flex; flex-direction: column; justify-content: center;">
				<div id="search">
					<div id="search-terms">{search}</div>
				</div>
			</div>
		</div>
	
		<div class="wrapper">
			<!--Upper Level Navigation-->
			<div id="upnav" class="upper-nav no-display-on-mobile">
				<div class="container">
					<div class="upper-left">
						{contact:text}
					</div>
					<div class="upper-right">
						{social}
					</div>
				</div>
			</div>
			<!--Lower Level Navigation-->
			<div class="birdseye-header">
				<div class="nav-wrap">
					<div class="container">
						<div class="logo">{logo}</div>
						<div class="nav desktop-nav">{menu}</div>
						<div class="search" style="width:20px !important; padding-right:20px;"><span for="search-terms" id="search-label" class="fa fa-search" style="font-weight:bold !important"> </span></div>
						<div class="sidebar no-display-on-mobile" style="width:20px !important"><span onclick="openNav();" class="fa fa-bars" style="font-weight:bold !important"> </span></div>
						<label class="hamburger"><span></span></label>
					</div>
				</div>
			</div>
		</div>
        `;
      endingCode = `
      <!--Start of Footer Code-->
				<div class="footer-wrap">
					<div class="footer">{footer}</div>
				</div><!-- end footer-wrap -->
			</div>
		</div>
	
		<div id="navMobile" class="nav mobile-nav">
			<label class="hamburger"><span></span></label>
			{menu}
		</div>
		
		<script type="text/javascript" src="/files/theme/plugins.js"></script>
		<script type="text/javascript" src="/files/theme/custom.js"></script>

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
		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
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
		
		
	</body>
</html>
      `;
    }
    // T1 If the header is homepage-header, beginningCode should be the beginning of T1
    if ((selectedBlocks[0] === "homepage-header")) {
      beginningCode = `
      <!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	</head>
	
	<body class='header-fullscreen  wsite-theme-light' style="overflow-x: hidden !important; max-width: 100% !important;">
	<!--This is T1 Code Version 2.0-->
	<!--Partials (Sidebar, Search Overlays)-->
	<div id="mySidenav" class="sidenav">
		<div class="theButton">
			<a href="javascript:void(0)" class="closebtn" onclick="openNav()" style="z-index:50 !important;"><i class="fa fa-times"></i></a>
		</div>
		<div id="sidebar-container">
			<div class="main-wrap" style="background:none !important; background-color:none !important">{sidebar:content}</div>
		</div>
	</div>
	
	<!--Beginning of the search overlay screen-->
	<div id="searchcontainer">
		<div id="vertical-wrap" style="width:100%; height:100%; display: flex; flex-direction: column; justify-content: center;">
			<div id="search">
				<div id="search-terms">{search}</div>
			</div>
		</div>
	</div>
	<!--Ensures no excess on mobile-->
	<div id="main-content">
		<div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
			<!--Navigation Bar-->
			<div class="wrapper">
				<!--Upper Level Navigation (Text, Social Media Icons)-->
				<div id="upnav" class="upper-nav no-display-on-mobile">
					<div class="container">
						<div class="upper-left">
							{contact:text}
						</div>
						<div class="upper-right">
							{social}
						</div>
					</div>
				</div>
				<!--Lower Level Navigation (Logo, Navigation Menu, Search + Sidebar icons)-->
				<div class="birdseye-header">
					<div class="nav-wrap">
						<div class="container">
							<div class="logo">{logo}</div>
							<div class="nav desktop-nav">{menu}</div>
							<div class="search" style="width:20px !important; padding-right:20px;"><span for="search-terms" id="search-label" class="fa fa-search" style="font-weight:bold !important"> </span></div>
							<div class="sidebar no-display-on-mobile" style="width:20px !important"><span onclick="openNav();" class="fa fa-bars" style="font-weight:bold !important"> </span></div>
							<label class="hamburger"><span></span></label>
						</div>
					</div>
				</div>
				<!----------------------------------------------------------------------------------------------------------------------------------------
				END OF PRE-DEFINED HEADER SECTION
				------------------------------------------------------------------------------------------------------------------------------------------>
      `;
      // Stich ending code for T1
      endingCode = 
      `
      <!-------------------------------------------------------------------------------
				START OF PRE-DEFINED FOOTER SECTION
				-------------------------------------------------------------------------------->
				<div class="footer-wrap" >
					<div class="footer">{footer}</div>
				</div><!-- end footer-wrap -->
			</div><!-- /.wrapper -->
		</div>
	</div>
	
		
	<!--Mobile Navigation Menu-->
	<div id="navMobile" class="nav mobile-nav">
		<label class="hamburger"><span></span></label>
		{menu}
	</div>

	<script type="text/javascript" src="/files/theme/plugins.js"></script>
	<script type="text/javascript" src="/files/theme/custom.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	
	<!--JAVASCRIPT FOR AOS ANIMATIONS STARTS BELOW-->
	<script>
	 if (!(jQuery('#icontent').length)){
        AOS.init();
     }
    </script>

	<!--JAVASCRIPT FOR SEARCH FUNCTION STARTS BELOW-->
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
	
	<!--JAVASCRIPT FOR SIDEBAR FUNCTION STARTS BELOW-->
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
	
	<div style='display:none'>{content}</div>
</body>
</html>
      `
    }
    // T1 If the header is default-header, beginningCode should be the beginning of T1
    if ((selectedBlocks[0] === "default-header")) {
      beginningCode = `
      <!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	</head>
	
	<body class='header  wsite-theme-light' style="overflow-x: hidden !important; max-width: 100% !important;">
	<!--This is T1 Code Version 2.0-->
	<!--Partials (Sidebar, Search Overlays)-->
	<div id="mySidenav" class="sidenav">
		<div class="theButton">
			<a href="javascript:void(0)" class="closebtn" onclick="openNav()" style="z-index:50 !important;"><i class="fa fa-times"></i></a>
		</div>
		<div id="sidebar-container">
			<div class="main-wrap" style="background:none !important; background-color:none !important">{sidebar:content}</div>
		</div>
	</div>
	
	<!--Beginning of the search overlay screen-->
	<div id="searchcontainer">
		<div id="vertical-wrap" style="width:100%; height:100%; display: flex; flex-direction: column; justify-content: center;">
			<div id="search">
				<div id="search-terms">{search}</div>
			</div>
		</div>
	</div>
	<!--Ensures no excess on mobile-->
	<div id="main-content">
		<div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
			<!--Navigation Bar-->
			<div class="wrapper">
				<!--Upper Level Navigation (Text, Social Media Icons)-->
				<div id="upnav" class="upper-nav no-display-on-mobile">
					<div class="container">
						<div class="upper-left">
							{contact:text}
						</div>
						<div class="upper-right">
							{social}
						</div>
					</div>
				</div>
				<!--Lower Level Navigation (Logo, Navigation Menu, Search + Sidebar icons)-->
				<div class="birdseye-header">
					<div class="nav-wrap">
						<div class="container">
							<div class="logo">{logo}</div>
							<div class="nav desktop-nav">{menu}</div>
							<div class="search" style="width:20px !important; padding-right:20px;"><span for="search-terms" id="search-label" class="fa fa-search" style="font-weight:bold !important"> </span></div>
							<div class="sidebar no-display-on-mobile" style="width:20px !important"><span onclick="openNav();" class="fa fa-bars" style="font-weight:bold !important"> </span></div>
							<label class="hamburger"><span></span></label>
						</div>
					</div>
				</div>
				<!----------------------------------------------------------------------------------------------------------------------------------------
				END OF PRE-DEFINED HEADER SECTION
				------------------------------------------------------------------------------------------------------------------------------------------>
      `;
      // Stich ending code for T1
      endingCode = 
      `
      <!-------------------------------------------------------------------------------
				START OF PRE-DEFINED FOOTER SECTION
				-------------------------------------------------------------------------------->
				<div class="footer-wrap" >
					<div class="footer">{footer}</div>
				</div><!-- end footer-wrap -->
			</div><!-- /.wrapper -->
		</div>
	</div>
	
		
	<!--Mobile Navigation Menu-->
	<div id="navMobile" class="nav mobile-nav">
		<label class="hamburger"><span></span></label>
		{menu}
	</div>

	<script type="text/javascript" src="/files/theme/plugins.js"></script>
	<script type="text/javascript" src="/files/theme/custom.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	
	<!--JAVASCRIPT FOR AOS ANIMATIONS STARTS BELOW-->
	<script>
	 if (!(jQuery('#icontent').length)){
        AOS.init();
     }
    </script>

	<!--JAVASCRIPT FOR SEARCH FUNCTION STARTS BELOW-->
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
	
	<!--JAVASCRIPT FOR SIDEBAR FUNCTION STARTS BELOW-->
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
	
	<div style='display:none'>{content}</div>
</body>
</html>
      `
    }
    // T1 If the header is default-header, beginningCode should be the beginning of T1 NO-HEADER VERSION (Special Body Class)
    if ((selectedBlocks[0] === "no-header")) {
      beginningCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        </head>
        
        <body class='header no-header-page  wsite-theme-light' style="overflow-x: hidden !important; max-width: 100% !important;">
        <!--This is T1 Code Version 2.0-->
        <!--Partials (Sidebar, Search Overlays)-->
        <div id="mySidenav" class="sidenav">
          <div class="theButton">
            <a href="javascript:void(0)" class="closebtn" onclick="openNav()" style="z-index:50 !important;"><i class="fa fa-times"></i></a>
          </div>
          <div id="sidebar-container">
            <div class="main-wrap" style="background:none !important; background-color:none !important">{sidebar:content}</div>
          </div>
        </div>
        
        <!--Beginning of the search overlay screen-->
        <div id="searchcontainer">
          <div id="vertical-wrap" style="width:100%; height:100%; display: flex; flex-direction: column; justify-content: center;">
            <div id="search">
              <div id="search-terms">{search}</div>
            </div>
          </div>
        </div>
        <!--Ensures no excess on mobile-->
        <div id="main-content">
          <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
            <!--Navigation Bar-->
            <div class="wrapper">
              <!--Upper Level Navigation (Text, Social Media Icons)-->
              <div id="upnav" class="upper-nav no-display-on-mobile">
                <div class="container">
                  <div class="upper-left">
                    {contact:text}
                  </div>
                  <div class="upper-right">
                    {social}
                  </div>
                </div>
              </div>
              <!--Lower Level Navigation (Logo, Navigation Menu, Search + Sidebar icons)-->
              <div class="birdseye-header">
                <div class="nav-wrap">
                  <div class="container">
                    <div class="logo">{logo}</div>
                    <div class="nav desktop-nav">{menu}</div>
                    <div class="search" style="width:20px !important; padding-right:20px;"><span for="search-terms" id="search-label" class="fa fa-search" style="font-weight:bold !important"> </span></div>
                    <div class="sidebar no-display-on-mobile" style="width:20px !important"><span onclick="openNav();" class="fa fa-bars" style="font-weight:bold !important"> </span></div>
                    <label class="hamburger"><span></span></label>
                  </div>
                </div>
              </div>
              <!----------------------------------------------------------------------------------------------------------------------------------------
              END OF PRE-DEFINED HEADER SECTION
              ------------------------------------------------------------------------------------------------------------------------------------------>
      `;
      // Stich ending code for T1
      endingCode = 
      `
      <!-------------------------------------------------------------------------------
				START OF PRE-DEFINED FOOTER SECTION
				-------------------------------------------------------------------------------->
				<div class="footer-wrap" >
					<div class="footer">{footer}</div>
				</div><!-- end footer-wrap -->
			</div><!-- /.wrapper -->
		</div>
	</div>
	
		
	<!--Mobile Navigation Menu-->
	<div id="navMobile" class="nav mobile-nav">
		<label class="hamburger"><span></span></label>
		{menu}
	</div>

	<script type="text/javascript" src="/files/theme/plugins.js"></script>
	<script type="text/javascript" src="/files/theme/custom.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	
	<!--JAVASCRIPT FOR AOS ANIMATIONS STARTS BELOW-->
	<script>
	 if (!(jQuery('#icontent').length)){
        AOS.init();
     }
    </script>

	<!--JAVASCRIPT FOR SEARCH FUNCTION STARTS BELOW-->
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
	
	<!--JAVASCRIPT FOR SIDEBAR FUNCTION STARTS BELOW-->
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
	
	<div style='display:none'>{content}</div>
</body>
</html>
      `
    }


    let finalHTML = ``;
    finalHTML += beginningCode;

    // Counter Variables Initialization
    let homepageHeader = 0;
    let serviceBoxes = 0;
    let serviceBoxes2 = 0;
    let serviceBoxes4 = 0;
    let parallax = 0;
    let fourIcons = 0;
    let fiftyRightPadding = 0;
    let fiftyLeftPadding = 0;
    let eightIcons = 0;
    let textOneImage = 0;
    let pureslider5 = 0;
    let defaultHeader = 0;
    let defaultSection = 0;
    let blankFiftyLeftPadding = 0;
    let blankFiftyRightPadding = 0;
    let blankSection = 0;
    
    // SECTION ASSEMBLY STICHING CODE
    for (let element = 0; element < selectedBlocks.length; element++) {


      // If element is HomePage Header...
      if (selectedBlocks[element] === "homepage-header") {
        finalHTML += `
        <!--FULLSCREEN BACKGROUND IMAGE BANNER-->
				<div class="banner-wrap wsite-background">
					<div id="fadeInOnLoad" class="container" style="display: flex; flex-direction: column; justify-content: center;">
						<div class="banner" style="">
							<div class="banner-img" >{bannerimg:image global="false" max-width="800" max-height="300"}</div>
							<h2>{bannerh2:text global="false"}</h2>
							<div style="width:auto; max-width:80%; margin-left:auto; margin-right:auto;"><p>{bannerp:text global="false"}</p></div>
							<div class="button-wrap">{headerButtonOne:button global="false"}</div>
						</div>
					</div>
				</div>
        `;
      }


      // If element is feature boxes...
      if (selectedBlocks[element] === "service-boxes") {
        serviceBoxes++;
        finalHTML += `
        <!--Service Boxes x3-->
<div class="service-row">
    <!--Beginning of service box 1-->
    <div class="column">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes}cimage1:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container"  data-aos="fade-up" data-aos-delay="000"  >
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes}box1subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes}box1headline:text global="false"}</h2>
                    <p>{${serviceBoxes}box1text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes}box1button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 1-->
    <!--Beginning of service box 2-->
    <div class="column">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes}cimage2:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="100">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes}box2subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes}box2headline:text global="false"}</h2>
                    <p>{${serviceBoxes}box2text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes}box2button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 2-->
    <!--Beginning of service box 3-->
    <div class="column">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes}cimage3:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="200">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes}box3subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes}box3headline:text global="false"}</h2>
                    <p>{${serviceBoxes}box3text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes}box3button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 3-->
</div>        
        `;
      }

      if (selectedBlocks[element] === "service-boxes-2") {
        serviceBoxes2++;
        finalHTML += `
        <!--Service Boxes x2-->
<div class="service-row more-height">
    <!--Beginning of service box 1-->
    <div class="column-2 more-height">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes2}2cimage1:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container"  data-aos="fade-up" data-aos-delay="000"  >
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes2}2box1subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes2}2box1headline:text global="false"}</h2>
                    <p>{${serviceBoxes2}2box1text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes2}2box1button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 1-->
    <!--Beginning of service box 2-->
    <div class="column-2 more-height">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes2}2cimage2:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="100">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes2}2box2subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes2}2box2headline:text global="false"}</h2>
                    <p>{${serviceBoxes2}2box2text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes2}2box2button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 2-->
</div>
        `;
      }

      if (selectedBlocks[element] === "service-boxes-4") {
        serviceBoxes4++;
        finalHTML += `
        <!--Service Boxes x4-->
<div class="service-row">
    <!--Beginning of service box 1-->
    <div class="column-4">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes4}4cimage1:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container"  data-aos="fade-up" data-aos-delay="000"  >
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes4}4box1subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes4}4box1headline:text global="false"}</h2>
                    <p>{${serviceBoxes4}4box1text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes4}4box1button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 1-->
    <!--Beginning of service box 2-->
    <div class="column-4">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes4}4cimage2:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="100">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes4}4box2subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes4}4box2headline:text global="false"}</h2>
                    <p>{${serviceBoxes4}4box2text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes4}4box2button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 2-->
    <!--Beginning of service box 3-->
    <div class="column-4">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes4}4cimage3:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="200">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes4}4box3subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes4}4box3headline:text global="false"}</h2>
                    <p>{${serviceBoxes4}4box3text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes4}4box3button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 3-->
    <!--Beginning of service box 4-->
    <div class="column-4">
        <div class="image-holder" style="background-color:gray;">
            {${serviceBoxes4}4cimage4:image global="false"}
        </div>
        <div class="content-holder">
            <div class="content-container" data-aos="fade-up" data-aos-delay="200">
                <div class="type-content">
                    <p style="margin-bottom:0px; font-style: italic; color:#727272">{${serviceBoxes4}4box4subtitle:text global="false"}</p>
                    <h2>{${serviceBoxes4}4box4headline:text global="false"}</h2>
                    <p>{${serviceBoxes4}4box4text:text global="false"}</p>
                    <div class="button-wrap" style="align:center;">{${serviceBoxes4}4box4button:button global="false"}</div>
                </div>
            </div>
        </div>
    </div>
    <!--End of service box 4-->
</div>
        `;
      }

      // If element is parallax...
      if (selectedBlocks[element] === "parallax") {
        parallax++;
        finalHTML += `
        <!--Parallax-->
<!--In-editorInfoline for Parallax Section #1-->
<div class="editor" style="width:100%; height:60px; color:white; background-color: black; text-align:center; padding-top:15px;">
    <p style="font-color:white; line-height:10px; font-size: 12px;">[ i ] Parallax section below. Click on the section below to upload image. 
    Don't worry if it looks weird in the Weebly editor. It'll look normal on your published site.</p><p style="font-color:white; line-height:10px; font-size: 12px;"> To edit or delete your image, press the "toggle" button below. Then, 
    hover over your image until a popup appears with the "edit" and "delete" options. Since these are parallax sections, you may need to scroll a bit up or down to be able to click on the "edit image" popup.</p>
</div>
<!--Parallax Section #1-->
<div id="parent1" class="jarallax" data-speed="0.5" style="pointer-events: auto !important;">
    <div id="section1" class="jarallax-img" style="pointer-events: auto !important">
        <div style="pointer-events:auto !important;" class="toggleSelector1">{${parallax}1imageone:image global="false"}</div>
    </div>
    <!--Content Section-->
<div class="parallaxl">
    <div class="container">{${parallax}1parallaxone:content global="false"}</div>
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
       
        `;
      }


      // If element is four icons...
      if (selectedBlocks[element] === "four-icons") {
        fourIcons++;
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        FOUR ICONS START HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap">
            <div class="wsite-section-content">
              <div class="container aos-init aos-animate" data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-center">
                  <div class="wsite-section-elements">
                    <div class="wsite-spacer" style="height:106px;"></div>
                    <h2 class="wsite-content-title" style="text-align:center;"><font size="7">{${fourIcons}-fouricons_header:text global="false"}</font><br></h2>
                    <div>
                        <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                        <hr class="styled-hr" style="width:50%;">
                        <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                    </div>
                    <div>
                        <div class="wsite-multicol">
                          <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                              <table class="wsite-multicol-table">
                                <tbody class="wsite-multicol-tbody">
                                    <tr class="wsite-multicol-tr">
                                      <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                          <div>
                                            <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                                <a>
                                                
                                                    <div class="img-hold">{${fourIcons}-fouricons_img1:image global="false"}</div>
                                                
                                                </a>
                                                
                                                <div style="display:block;font-size:90%"></div>
                                            </div>
                                          </div>
                                          <h2 class="wsite-content-title" style="text-align:center;">
                                          
                                          {${fourIcons}-fouricons_title1:text global="false"}
                                          
                                          </h2>
                                          <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">
                                          
                                          {${fourIcons}-fouricons_p1:text global="false"}
                                          
                                          </font><br></div>
                                      </td>
                                      <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                          <div>
                                            <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                                <a>
                                                
                                                    <div class="img-hold">{${fourIcons}-fouricons_img2:image global="false"}</div>
                                                
                                                </a>
                                                <div style="display:block;font-size:90%"></div>
                                            </div>
                                          </div>
                                          <h2 class="wsite-content-title" style="text-align:center;">
                                          
                                          {${fourIcons}-fouricons_title2:text global="false"}
                                          
                                          <br></h2>
                                          <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">
                                          
                                          {${fourIcons}-fouricons_p2:text global="false"}
                                          
                                          </font><br></div>
                                      </td>
                                      <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                          <div>
                                            <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                                <a>
                                                
                                                    <div class="img-hold">{${fourIcons}-fouricons_img3:image global="false"}</div>
                                                
                                                </a>
                                                
                                                <div style="display:block;font-size:90%"></div>
                                            </div>
                                          </div>
                                          <h2 class="wsite-content-title" style="text-align:center;">
                                          
                                          {${fourIcons}-fouricons_title3:text global="false"}
                                          
                                          <br></h2>
                                          <div class="paragraph" style="text-align:center;"><font color="#515151">
                                          
                                          {${fourIcons}-fouricons_p3:text global="false"}
                                          
                                          </font><br></div>
                                      </td>
                                      <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                          <div>
                                            <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                                <a>
                                                
                                                    <div class="img-hold">{${fourIcons}-fouricons_img4:image global="false"}</div>
                                                
                                                </a>
                                                <div style="display:block;font-size:90%"></div>
                                            </div>
                                          </div>
                                          <h2 class="wsite-content-title" style="text-align:center;">
                                          
                                          {${fourIcons}-fouricons_title4:text global="false"}
                                          
                                          <br></h2>
                                          <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">
                                          
                                          {${fourIcons}-fouricons_p4:text global="false"}
                                          
                                          </font><br></div>
                                      </td>
                                    </tr>
                                </tbody>
                              </table>
                          </div>
                        </div>
                    </div>
                    <div class="wsite-spacer" style="height:131px;"></div>
                  </div>
              </div>
            </div>
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        FOUR ICONS END HERE
        ---------------------------------------------------------------------------------------------------------------------------->

        `;
      }


      // If element is fifty right padding...
      if (selectedBlocks[element] === "fifty-right-padding") {
        fiftyRightPadding++;
        finalHTML += `
        <!--Text-Fifty-Content-Right-->
<div class="split-section-parent">
        <!--Image Column-->
        <div class="column-two aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
           <div class="split-image">
              <div class="image-holder">
                 {${fiftyRightPadding}splitsectionimager:image global="false"}
              </div>
           </div>
        </div>
        <!--Content Column-->
        <div class="column-one aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
           <div class="padding-implementation">
              <div class="column-one-inner">
                 <div class="split-container">
                    <div class="wsite-elements wsite-not-footer">
                       <h2 class="wsite-content-title" style="text-align:center;"><font size="7">{${fiftyRightPadding}sectiontitle2:text global="false"}</font></h2>
                       <div>
                          <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                          <hr class="styled-hr" style="width:50%;">
                          <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                       </div>
                       <div>
                          <div class="wsite-multicol">
                             <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                                <table class="wsite-multicol-table">
                                   <tbody class="wsite-multicol-tbody">
                                      <tr class="wsite-multicol-tr">
                                         <td class="wsite-multicol-col" style="width:6.9333333333333%; padding:0 15px;">
                                            <div class="wsite-spacer" style="height:50px;"></div>
                                         </td>
                                         <td class="wsite-multicol-col" style="width:83.455651176133%; padding:0 15px;">
                                            <div class="paragraph" style="text-align:center;"><font color="#3f3f3f"><span>{${fiftyRightPadding}sectionparagraphs2:text global="false"}</span>​<br>​</font><br></div>
                                            <div style="text-align:center;">
                                               <div style="height: 10px; overflow: hidden;"></div>
                                               {${fiftyRightPadding}sectionbutton2:button global="false"}
                                               <div style="height: 10px; overflow: hidden;"></div>
                                            </div>
                                         </td>
                                         <td class="wsite-multicol-col" style="width:9.6110154905336%; padding:0 15px;">
                                            <div class="wsite-spacer" style="height:50px;"></div>
                                         </td>
                                      </tr>
                                   </tbody>
                                </table>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

        `;
      }


      // If element is fifty left padding...
      if (selectedBlocks[element] === "fifty-left-padding") {
        fiftyLeftPadding++;
        finalHTML += `
        <!--Text-Fifty-Content-Left-->
<div class="split-section-parent">
        <!--Content Column-->
        <div class="column-one aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
           <div class="padding-implementation">
              <div class="column-one-inner">
                 <div class="split-container">
                    <div class="wsite-elements wsite-not-footer">
                       <h2 class="wsite-content-title" style="text-align:center;"><font size="7">{${fiftyLeftPadding}sectiontitle1:text global="false"}</font><br></h2>
                       <div>
                          <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                          <hr class="styled-hr" style="width:50%;">
                          <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                       </div>
                       <div>
                          <div class="wsite-multicol">
                             <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                                <table class="wsite-multicol-table">
                                   <tbody class="wsite-multicol-tbody">
                                      <tr class="wsite-multicol-tr">
                                         <td class="wsite-multicol-col" style="width:6.9333333333333%; padding:0 15px;">
                                            <div class="wsite-spacer" style="height:50px;"></div>
                                         </td>
                                         <td class="wsite-multicol-col" style="width:83.455651176133%; padding:0 15px;">
                                            <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${fiftyLeftPadding}sectionparagraph1:text global="false"}<br>​</font></div>
                                         </td>
                                         <td class="wsite-multicol-col" style="width:9.6110154905336%; padding:0 15px;">
                                            <div class="wsite-spacer" style="height:50px;"></div>
                                         </td>
                                      </tr>
                                   </tbody>
                                </table>
                             </div>
                          </div>
                       </div>
                       <div style="text-align:center;">
                          <div style="height: 10px; overflow: hidden;"></div>
                          {${fiftyLeftPadding}sectionbutton1:button global="false"}
                          <div style="height: 10px; overflow: hidden;"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <!--Image Column-->
        <div class="column-two aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
           <div class="split-image">
              <div class="image-holder">
                 {${fiftyLeftPadding}splitsectiontimage:image global="false"}
              </div>
           </div>
        </div>
     </div>
        `;
      }


      // If element is eight icons...
      if (selectedBlocks[element] === "eight-icons") {
        eightIcons++;
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        8 TEXT LAYOUT STARTS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap">
            <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div class="wsite-elements wsite-not-footer">
                  <div class="wsite-spacer" style="height:87px;"></div>
                  <h2 class="wsite-content-title" style="text-align:center;"><font size="7">{${eightIcons}-eighticontitle:text global="false"}</font><br></h2>
                  <div>
                    <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                    <hr class="styled-hr" style="width:50%;">
                    <div style="height: 20px; overflow: hidden; width: 50%;"></div>
                  </div>
                  <div>
                    <div class="wsite-multicol">
                        <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                          <table class="wsite-multicol-table">
                              <tbody class="wsite-multicol-tbody">
                                <tr class="wsite-multicol-tr">
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                            <div class="img-hold">{${eightIcons}-eighticonimg1:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh1:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp1:text global="false"}</font><br><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg2:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh2:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp2:text global="false"}<br></font><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg3:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh3:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp3:text global="false"}<br></font><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg4:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh4:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp4:text global="false"}<br></font><br></div>
                                    </td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                    </div>
                  </div>
                  <div>
                    <div class="wsite-multicol">
                        <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                          <table class="wsite-multicol-table">
                              <tbody class="wsite-multicol-tbody">
                                <tr class="wsite-multicol-tr">
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg5:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh5:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp5:text global="false"}</font><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg6:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh6:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp6:text global="false"}</font><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg7:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh7:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp7:text global="false"}</font><br></div>
                                    </td>
                                    <td class="wsite-multicol-col" style="width:25%; padding:0 15px;">
                                      <div>
                                          <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                            <a>
                                                <div class="img-hold">{${eightIcons}-eighticonimg8:image global="false"}</div>
                                            </a>
                                            <div style="display:block;font-size:90%"></div>
                                          </div>
                                      </div>
                                      <h2 class="wsite-content-title" style="text-align:center;">{${eightIcons}-eighticonh8:text global="false"}<br></h2>
                                      <div class="paragraph" style="text-align:center;"><font color="#3f3f3f">{${eightIcons}-eighticonp8:text global="false"}</font><br></div>
                                    </td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                    </div>
                  </div>
                  <div class="wsite-spacer" style="height:97px;"></div>
              </div>
            </div>
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        8 TEXT LAYOUT ENDS HERE
        ---------------------------------------------------------------------------------------------------------------------------->

        `;
      }


      // If element is text-one-image...
      if (selectedBlocks[element] === "text-one-image") {
        textOneImage++;
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        TEXT LEFT IMG RIGHT LAYOUT STARTS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap">
            <div id="wsite-content" class="wsite-elements wsite-not-footer">
              <div class="wsite-section-wrap">
                  <div class="wsite-section wsite-body-section wsite-background-33">
                    <div class="wsite-section-content">
                        <div class="container" id="empty-test">
                          <div class="wsite-section-elements">
                              <div>
                                <div class="wsite-multicol">
                                    <div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
                                      <table class="wsite-multicol-table">
                                          <tbody class="wsite-multicol-tbody">
                                            <tr class="wsite-multicol-tr">
                                                <td class="wsite-multicol-col" style="width:50%; padding:0 15px;">
                                                  <h2 class="wsite-content-title"><font size="7">{${textOneImage}-textoneimgrighth1:text global="false"}</font><br></h2>
                                                  <div>
                                                      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
                                                      <hr class="styled-hr" style="width:100%;">
                                                      <div style="height: 20px; overflow: hidden; width: 100%;"></div>
                                                  </div>
                                                  <div class="paragraph"><font color="#3f3f3f">{${textOneImage}-textoneimgrightp1:text global="false"}</font><br></div>
                                                </td>
                                                <td class="wsite-multicol-col" style="width:50%; padding:0 15px;">
                                                  <div>
                                                      <div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:10px;margin-left:0;margin-right:0;text-align:center">
                                                        <div class="img-hold">
                                                        {${textOneImage}-textoneimgrightimage:image global="false"}
                                                        </div>
                                                        <div style="display:block;font-size:90%"></div>
                                                      </div>
                                                  </div>
                                                </td>
                                            </tr>
                                          </tbody>
                                      </table>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        TEXT LEFT IMAGE RIGHT LAYOUT ENDS HERE
        ---------------------------------------------------------------------------------------------------------------------------->

        `;
      }


      // If element is PureSlider...
      if (selectedBlocks[element] === "pureslider-5") {
        pureslider5++;
        if (numberOfSlides === "3") {
          finalHTML += `
          <!--PureSlider 3-->
<!--Beginning of the background image banner-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
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
<!-------------------------------------------------------------------------------------
[ADD-ON] START Control Panel For PureSlider
--------------------------------------------------------------------------------------->
<div class="editor">
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }

        if (numberOfSlides === "4") {
          finalHTML += `
          <!--PureSlider 4-->
<!--Beginning of the background image banner-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->

          `;
        }

        if (numberOfSlides === "5") {
          finalHTML += `
          <!--PureSlider 5-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }

        if (numberOfSlides === "6") {
          finalHTML += `
          <!--PureSlider 6-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
        <!-- SLIDE SIX STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-six:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-6" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-six:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SIX ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }

        if (numberOfSlides === "7") {
          console.log("with 7 slides");
          finalHTML += `
          <!--PureSlider 7-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
        <!-- SLIDE SIX STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-six:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-6" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-six:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SIX ENDS HERE -->
        <!-- SLIDE SEVEN STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-seven:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-7" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-seven:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SEVEN ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }

        if (numberOfSlides === "8") {
          finalHTML += `
          <!--PureSlider 8-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
        <!-- SLIDE SIX STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-six:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-6" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-six:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SIX ENDS HERE -->
        <!-- SLIDE SEVEN STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-seven:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-7" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-seven:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SEVEN ENDS HERE -->
        <!-- SLIDE EIGHT STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-eight:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-8" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-eight:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE EIGHT ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->

          `;
        }

        if (numberOfSlides === "9") {
          finalHTML += `
          <!--PureSlider 9-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
        <!-- SLIDE SIX STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-six:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-6" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-six:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SIX ENDS HERE -->
        <!-- SLIDE SEVEN STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-seven:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-7" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-seven:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SEVEN ENDS HERE -->
        <!-- SLIDE EIGHT STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-eight:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-8" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-eight:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE EIGHT ENDS HERE -->
        <!-- SLIDE NINE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-nine:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-9" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-nine:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE NINE ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }

        if (numberOfSlides === "10") {
          finalHTML += `
          <!--PureSlider 10-->
<div class="swiper-container" style="pointer-events: auto !important;">
    <div class="swiper-wrapper" style="pointer-events: auto !important;">
        <!-- SLIDE ONE STARTS HERE -->
        <div class="swiper-slide" style="pointer-events: auto !important;">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-one:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-0">{${pureslider5}contentonejkjkl:content global="false"}</div>
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
                    {${pureslider5}slider-image-two:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-2" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-1">{${pureslider5}content-two:content global="false"}</div>
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
                    {${pureslider5}slider-image-three:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-3" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            <div id="slide-2">{${pureslider5}content-three:content global="false"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE THREE ENDS HERE-->
        <!-- SLIDE FOUR STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-four:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-4" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-four:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FOUR ENDS HERE -->
        <!-- SLIDE FIVE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-five:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-5" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-five:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE FIVE ENDS HERE -->
        <!-- SLIDE SIX STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-six:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-6" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-six:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SIX ENDS HERE -->
        <!-- SLIDE SEVEN STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-seven:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-7" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-seven:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE SEVEN ENDS HERE -->
        <!-- SLIDE EIGHT STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-eight:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-8" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-eight:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE EIGHT ENDS HERE -->
        <!-- SLIDE NINE STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-nine:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-9" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-nine:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE NINE ENDS HERE -->
        <!-- SLIDE TEN STARTS HERE -->
        <div class="swiper-slide">
            <div class="swiper-weebly-total">
                <div class="swiper-weebly-image">
                    {${pureslider5}slider-image-ten:image global="false"}
                </div>
                <div class="swiper-weebly-content" id="swiper-content-area-10" style="display: table;">
                    <!--Outer-->
                    <div class="middle-container" style="display: table-cell; vertical-align: middle; padding-left: 20px; padding-right: 20px;">
                        <!--Middle-->
                        <div class="slider-container">
                            <!--Inner-->
                            {${pureslider5}content-ten:content global="false"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SLIDE TEN ENDS HERE -->
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
<!--Precursor to user content, ensures no excess on mobile-->
<div id="main-content">
    <div id="main" style="padding:0px; overflow-x:hidden !important; max-width:100% !important;">
    <!--End of Pureslider code-->
          `;
        }


      }


      // If element is default Weebly header...
      if (selectedBlocks[element] === "default-header") {
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER STARTS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <!--Beginning of the background image banner-->
        <div class="banner-wrap">
          {{#header}}
              <div class="container">
                <div class="banner">{content}</div>
              </div>
          {{/header}}
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        DEFAULT WEEBLY HEADER ENDS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        
        `;
      }


      // If element is default-section...
      if (selectedBlocks[element] === "default-section") {
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION STARTS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap" >
            {{#sections}}
                <div class="container" data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-center">{content}</div>
            {{/sections}}
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        DEFAULT WEEBLY SECTION ENDS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        
        `;
      }


      // If element is blank-fifty-content-left...
      if (selectedBlocks[element] === "blank-fifty-left-padding") {
        blankFiftyLeftPadding++;
        finalHTML += `
        <!--Blank-Fifty-Content-Left-->
<div class="split-section-parent" >
    <!--Content Column-->
    <div class="column-one" data-aos="fade-right" data-aos-delay="200">
        <div class="padding-implementation" >
            <!--Background color of below section-->
            <div class="column-one-inner">
                <div class="split-container" >{${blankFiftyLeftPadding}scontent1:content global="false"}</div>
            </div>
        </div>
    </div>
    <!--Image Column-->
    <div class="column-two" data-aos="fade-left" data-aos-delay="200">
        <div class="split-image">
            <div class="image-holder">
            {${blankFiftyLeftPadding}splitimage1:image global="false"}
            </div>
        </div>
    </div>
</div>
        
        `;
      }


      // If element is blank-fifty-content-right
      if (selectedBlocks[element] === "blank-fifty-right-padding") {
        blankFiftyRightPadding++;
        finalHTML += `
       
<!--Blank-Fifty-Content-Right-->
<!--50/50 Section 2-->
<div class="split-section-parent">
    <!--Image Column-->
    <div class="column-two" data-aos="fade-right" data-aos-delay="200" >
        <div class="split-image">
            <div class="image-holder">
            {${blankFiftyRightPadding}splitimage2:image global="false"}
            </div>
        </div>
    </div>
    <!--Content Column-->
    <div class="column-one" data-aos="fade-left" data-aos-delay="200">
        <div class="padding-implementation">
            <div class="column-one-inner">
                <div class="split-container">{${blankFiftyRightPadding}scontent2:content global="false"}</div>
            </div>
        </div>
    </div>
</div>
        
        `;
      }


      // If element is blank section
      if (selectedBlocks[element] === "blank-section") {
        blankSection++;
        finalHTML += `
        
        <!--------------------------------------------------------------------------------------------------------------------------
        BLANK WHITE SECTION STARTS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        <div class="main-wrap" >
            <div class="container" data-aos="fade-up" data-aos-delay="200" >{${blankSection}blank-contentttwo:content global="false"}</div>
        </div>
        <!--------------------------------------------------------------------------------------------------------------------------
        BLANK WHITE SECTION ENDS HERE
        ---------------------------------------------------------------------------------------------------------------------------->
        
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
  