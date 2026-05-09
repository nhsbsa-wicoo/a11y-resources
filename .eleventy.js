module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    pathPrefix: "/a11y-resources/"
  };
};