
/* Define your DApp's function parameters.
 * REMEMBER: The function parameter MUST return a JavaScript Object.
 */

const fs = require('fs');

// Locate Dataset Route
const { resolve } = require('path');
var path = require("path");

// Create parameter function
const parameterFunctions = async (configs,log) => {

/**
 * - 'configs' carries configurations files from 'config.json'.
 * - 'log' carries state of computation from 'log.txt'.  
 * - Parameter functions must always return a JSON Object.
 */

var currentPage = log.tPartition; // Identify current page by reading config
const numberOfPages = 3; // Number of pages

// Apply the above logic
if((configs.running!=true) && (Number(currentPage)>Number(numberOfPages))){

    currentPage = 1; // Identify current page by reading config

}

// Path to image file
let datasetRoute = resolve(`./app/assets/photos/bubbles${currentPage}.png`);

// Get image name
let imageName = path.basename(resolve(`./app/assets/photos/bubbles${currentPage}.png`));

// Get image file
let file = readDataset();

// Function to get image file
function readDataset() {

    try { 

        // Fetch dataset using new 'currentPage' number
        return fs.readFileSync(datasetRoute,  'binary');
    }

    catch (err) { 
        return err;
    }
}

// Create parameter function
return {

    // Define function parameters
    
    // Parameter 1
    parameter1: file, // set parameter1 as value of file

    // Parameter 2
    parameter2: imageName, // set parameter2 as name of file

}

}

// Export Parameter function as JSON Object
module.exports={parameterFunctions};

