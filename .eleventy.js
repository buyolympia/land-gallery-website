const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

module.exports = function(eleventyConfig) {

	//copy public data to website
	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

	//add nav plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	
	//add css cleanup 
	const CleanCSS = require("clean-css");

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});
	
	//put the date on the footer?
	eleventyConfig.addShortcode("thedate", () => `${new Date().getFullYear()}`);
	
	pathPrefix: "/land-gallery-website/"
};

