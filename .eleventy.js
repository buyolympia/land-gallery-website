const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

	//copy public data to website
	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

	//add nav plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	
	//add css cleanup 
	const CleanCSS = require("clean-css");
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});
	
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "liquid",
	
		// Add any other Image utility options here:
	
		// optional, output image formats
		formats: ["webp", "jpeg","jpg"],
		// formats: ["auto"],
	
		// optional, output image widths
		 widths: ["auto"],
	
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
	
	//put the date on the footer?
	eleventyConfig.addShortcode("thedate", () => `${new Date().getFullYear()}`);
};

