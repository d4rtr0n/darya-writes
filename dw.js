$(document.ready(require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us14.list-manage.com","uuid":"0114e9a368cbacb01ba4f96ed","lid":"68157c6da9"}) }))


// function for twitter widget
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

