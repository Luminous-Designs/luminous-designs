
let classesToTurnImg = [];
let cssRaw = "";
let cssFinal = "";

// Main Function
function handleFormSubmit(event) {
    event.preventDefault();
    let finalCode = "";
    // HTML input field
    let name = document.getElementById('html').value;
    let message = name;

    // CSS input field
    cssRaw = document.getElementById('css').value;

    // Conduct Parse Operation
    let wrappedCode = wrapImages(message);

    // Remove Duplicates from Class Array
    cleanedUpClassArray = removeDuplicates(classesToTurnImg);

    // Conduct Operation to Modify Class Document


    // Set Final ID Integration to Mustache 
    finalCode = addUniqueIdsToA330(wrappedCode);

    // Display Finished HTML
    console.log("HTML: ")
    console.log(finalCode);

    //console.log("Below are the classes to add an IMG to: ");
    //console.log(cleanedUpClassArray);

    // Modify the CSS
    cssFinal = addImgToWords(cleanedUpClassArray, cssRaw);
    console.log("CSS: ")
    console.log(cssFinal);
}

// This function regex's the JS for particular IMG block, adds class names to array, and adds {}
function wrapImages(html) {
    // create a regular expression to match <img> elements with the specified attributes
    let regex = new RegExp('<img\\s+src="([^"]+)"\\s+loading="lazy"\\s+alt=""\\s+class="([^"]+)"\\s*>', 'g');
    let uniqueImageID = 0;

    while ((match = regex.exec(html)) !== null) {
        // Extract the class name from the <img> block
        let className = match[2];
        classesToTurnImg.push("." + className);

    }

    // replace the <img> elements with <div> elements
    let result = html.replace(regex, '<div class="$2">{uniqueimage-a330:image global="false"}</div>');
    console.log(classesToTurnImg);
    // return the modified HTML
    return result;
}

// Removes duplicates from the array with all the IMG classes to edit
function removeDuplicates(arr) {
    // Create a new array to hold the unique strings
    const uniqueArr = [];

    // Iterate over the elements in the original array
    for (const element of arr) {
        // Check if the element is already in the new array
        if (!uniqueArr.includes(element)) {
            // If the element is not in the new array, add it to the new array
            uniqueArr.push(element);
        }
    }

    return uniqueArr;
}

//Add Unique to Mustache Templates
function addUniqueIdsToA330(html) {
    // Create a regular expression to match the "a330" text in the HTML
    const regex = /a330/g;

    // Create a counter to keep track of how many times the "a330" text has been found
    let counter = 0;

    // Use the replace() method to find all instances of "a330" in the HTML and add a unique ID to each one
    const updatedHtml = html.replace(regex, () => {
        // Increment the counter
        counter++;

        // Return the "a330" text with the unique ID appended
        return `a330-${counter}`;
    });

    // Return the updated HTML
    return updatedHtml;
}


function addImgToWords(words, text) {
    // Create a regular expression that matches any word in the array of words
    const regex = new RegExp(`(${words.join("|")})`, "g");
  
    // Use the regular expression to replace any matching text in the text with the text plus " img"
    return text.replace(regex, "$1 img");
  }
  
  