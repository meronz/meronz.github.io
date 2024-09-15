const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/itnext/faster-net-development-on-kubernetes-with-skaffold-38b1d261eed5')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});