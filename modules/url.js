// URL Modules
// To print the result just time this code in terminal (node modules/url.js)
const codeitURl = "https://codeit.com.np/video/4587";
const urlObject = new URL(codeitURl); // This return object.
console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);
