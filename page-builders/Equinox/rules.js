export function wsiteBgCheck(wsiteBgCheckLimitedArray, lastItemDropped, selectedBlocksDD, source, el, warningModal, WarningHeader, WarningText) { 
  
    let designatedLimits = wsiteBgCheckLimitedArray; // Array of wsite-bg elements
    let currentItem = lastItemDropped; // Current item that was dropped
    let fullList = selectedBlocksDD; // Full list of existing items
    let elementCount = 0;

    // Is current element one of the limited elements?
    for (let i = 0; i < designatedLimits.length; i++) {
        if (designatedLimits[i] === currentItem) {
            // Iterate through all existing elements, count how many wsite-bg elements are already present
            for (let j = 0; j < fullList.length; j++) {
                for (let k = 0; k < designatedLimits.length; k++) {
                    if (fullList[j] === designatedLimits[k]) {
                        elementCount++;
                    }
                }
            }
        }
    }

    if (elementCount > 1) {
        source.appendChild(el);
        source.removeChild(el);

        // Display Warning Modal - Pop-up modal informing user of deletion
        warningModal.style.display = "block";
        WarningHeader.innerText = "Whoops! You can only have one HERO or default header element per page";
        WarningText.innerText = "Looks like you tried to add more than one hero element or header element. You can only have one of these per page, due to how Weebly handles hero background images. Headers include the Hero Image Headers and Weebly default headers";
        return;
    }

}

export function sectionsCheck(sectionsList, lastItemDropped, selectedBlocksDD, source, el, warningModal, WarningHeader, WarningText) { 
  
    let designatedLimits = sectionsList; // Array of wsite-bg elements
    let currentItem = lastItemDropped; // Current item that was dropped
    let fullList = selectedBlocksDD; // Full list of existing items
    let elementCount = 0;

    // Is current element one of the limited elements?
    for (let i = 0; i < designatedLimits.length; i++) {
        if (designatedLimits[i] === currentItem) {
            // Iterate through all existing elements, count how many section elements are already present
            for (let j = 0; j < fullList.length; j++) {
                for (let k = 0; k < designatedLimits.length; k++) {
                    if (fullList[j] === designatedLimits[k]) {
                        elementCount++;
                    }
                }
            }
        }
    }

    if (elementCount > 1) {
        source.appendChild(el);
        source.removeChild(el);

        // Display Warning Modal - Pop-up modal informing user of deletion
        warningModal.style.display = "block";
        WarningHeader.innerText = "Whoops! You can only have one Weebly Sections element per page.";
        WarningText.innerText = "Looks like you tried to drag in multiple Weebly Sections elements onto the page. Weebly only allows one Weebly Sections per page. Do note that you can create additional sections inside of the Weebly Sections element once you import your layout into the Weebly Editor, each with their own backgrounds (video backgrounds, image backgrounds, color backgrounds, graident backgrounds). If you need to add another white section somewhere else on the page, add a Weebly Blank section. Please contact us at luminousthemes.com/support if you're having trouble.";
        return;
    }

}

export function onlyOneCheck(oneOfEach, lastItemDropped, selectedBlocksDD, source, el, warningModal, WarningHeader, WarningText) { 
  
    let limitedElements = oneOfEach; // Array of blacklisted elements
    let currentItem = lastItemDropped; // Current item that was dropped
    let fullList = selectedBlocksDD; // Full list of existing items
    let elementCount = 0;

    // Is current element one of the limited elements?
    for (let i = 0; i < limitedElements.length; i++) {
        if (limitedElements[i] === currentItem) {
            // Iterate through all existing elements, count how many of such elements are already present
            for (let j = 0; j < fullList.length; j++) {
                if (currentItem === fullList[j]) {
                    elementCount++;
                }
            }
        }
    }

    if (elementCount > 1) {
        source.appendChild(el);
        source.removeChild(el);

        // Display Warning Modal - Pop-up modal informing user of deletion
        warningModal.style.display = "block";
        WarningHeader.innerText = "Whoops! You can only have one of these per page!";
        WarningText.innerText = "It seems like you already have one of these present on your page. Due to Weebly framework rules, you can only have one of these per page.";
        return;
    }

}

export function navigationFirst(navElements, selectedBlocksDD, source, el, warningModal, WarningHeader, WarningText) { 
  
    let acceptableNav = navElements; // Array of blacklisted elements
    let fullList = selectedBlocksDD; // Full list of existing items
    let navPresent = 0;
    
    // Iterate through all existing elements, see what the first element is 
    for (let j = 0; j < navElements.length; j++) {
        if (navElements[j] === fullList[0]) {
            navPresent++;
        }
    }
     

    if (navPresent = 0) {
        
        // Display Warning Modal - Pop-up modal informing user of deletion
        warningModal.style.display = "block";
        WarningHeader.innerText = "Whoops! Looks like your page is missing a navigation bar";
        WarningText.innerText = "You need a navigation bar. Find the navigation bar component, and drag it to the top of the page.";
        return;
    }

}
    