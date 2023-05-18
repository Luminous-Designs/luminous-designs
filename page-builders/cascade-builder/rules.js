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
        return false;
    } else {
        return true;
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
        return false;
    } else {
        return true;
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
        return false;
    } else {
        return true;
    }

}

export function navigationFirst(navElements, selectedBlocks) { 
  
    let acceptableNav = navElements; // Array of blacklisted elements
    let fullList = selectedBlocks; // Full list of existing items
    let navNotPresent = 0;
    console.log("Initiating navigation first check");
    console.log("Acceptable Navigation Elements: "+ navElements);
    console.log("List of current blocks: "+ selectedBlocks);
    
 

    // Assume navNotPresent is not present initially
    let isPresent = false;

    // Iterate through all acceptableNav elements and check for the first element of fullList
    for (let j = 0; j < acceptableNav.length; j++) {
        if (acceptableNav[j] == fullList[0]) {
            isPresent = true;
            break; // No need to check the rest, as we have found a match
        }
    }
     

    return isPresent;
}
    