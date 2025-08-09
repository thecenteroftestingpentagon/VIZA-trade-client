"use strict";
const fs = require('fs');
const path = require('path');

// Path to the dynamic country page template
const templatePath = path.join(__dirname, 'app', 'work-in-[country]', 'page.tsx');

// Read the file
let content = fs.readFileSync(templatePath, 'utf8');

// Find the section before the return statement
const findReturn = content.indexOf('  return (');

if (findReturn !== -1) {
    // Extract all content before the return statement
    const beforeReturn = content.substring(0, findReturn);

    // Extract all content after the return statement up to the opening div
    const afterReturnStart = content.indexOf('<div className="min-h-screen', findReturn);

    if (afterReturnStart !== -1) {
        // Get the end of the opening div tag (we'll replace everything up to the container div)
        const containerStart = content.indexOf('<div className="container', afterReturnStart);

        if (containerStart !== -1) {
            // Create the new content with background image
            const newContent = `${beforeReturn}  return (
    <div className="min-h-screen pt-20 relative">
      {/* Country background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/country/' + (countryData[countrySlug]?.backgroundImage || countrySlug + '.jpg'))",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
${content.substring(containerStart)}`;

            // Write the modified content back to the file
            fs.writeFileSync(templatePath, newContent, 'utf8');
            console.log('Successfully updated dynamic country template!');
        } else {
            console.error('Could not find container div');
        }
    } else {
        console.error('Could not find opening div');
    }
} else {
    console.error('Could not find return statement');
}
