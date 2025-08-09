"use strict";
const fs = require('fs');
const path = require('path');

// Map of country codes to their image files
const countryImageMap = {
    'australia': 'aus.jpg',
    'canada': 'can.jpeg',
    'france': 'france.jpg',
    'germany': 'germany.jpeg',
    'italy': 'Italy.jpg',
    'japan': 'Japan.jpeg',
    'mexico': 'Mexico.jpg',
    'netherlands': 'Netherlands.jpg',
    'new-zealand': 'New Zealand.jpg',
    'qatar': 'Qatar.jpg',
    'saudi-arabia': 'Saudi Arabia.jpg',
    'singapore': 'Singapore.jpg',
    'south-korea': 'South Korea.jpg',
    'spain': 'Spain.jpeg',
    'uae': 'UAE.jpg',
    'uk': 'uk.jpg',
    'usa': 'usa.jpeg'
};

// Directory containing the country pages
const countryPagesDir = path.join(__dirname, 'app');

// Process each country
Object.keys(countryImageMap).forEach(country => {
    const countryFile = path.join(countryPagesDir, `work-in-${country}`, 'page.tsx');

    // Check if file exists
    if (!fs.existsSync(countryFile)) {
        console.log(`File not found: ${countryFile}`);
        return;
    }

    // Read file content
    let content = fs.readFileSync(countryFile, 'utf8');

    // Different patterns to match
    const patterns = [
        /return\s*\(\s*<div\s*className="min-h-screen\s*bg-gradient-to-br\s*from-slate-900\s*via-slate-800\s*to-slate-900\s*pt-20">\s*<div\s*className="container\s*mx-auto\s*px-4\s*py-8">/,
        /return\s*\(\s*<>\s*<div\s*className="min-h-screen\s*bg-gradient-to-br\s*from-slate-900\s*via-slate-800\s*to-slate-900\s*pt-20">\s*<div\s*className="container\s*mx-auto\s*px-4\s*py-8">/
    ];

    // Replacements for each pattern
    const replacements = [
        `return (
    <div className="min-h-screen pt-20 relative">
      {/* Country background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/country/${countryImageMap[country]}')",
          filter: "brightness(0.3) contrast(1.1)"
        }}
      ></div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">`,

        `return (
    <>
      <div className="min-h-screen pt-20 relative">
        {/* Country background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "url('/country/${countryImageMap[country]}')",
            filter: "brightness(0.3) contrast(1.1)"
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 z-0"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">`
    ];

    // Try each pattern
    let matched = false;
    for (let i = 0; i < patterns.length; i++) {
        if (patterns[i].test(content)) {
            content = content.replace(patterns[i], replacements[i]);
            matched = true;
            break;
        }
    }

    if (!matched) {
        console.log(`No matching pattern found in ${countryFile}`);
        return;
    }

    // Write the modified content back to the file
    fs.writeFileSync(countryFile, content, 'utf8');
    console.log(`Updated background for ${country}`);
});

console.log('All country backgrounds updated!');
