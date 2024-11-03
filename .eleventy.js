const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

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
	
	//put the date on the footer?
	eleventyConfig.addShortcode("thedate", () => `${new Date().getFullYear()}`);
};

