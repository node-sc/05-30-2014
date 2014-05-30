(function () {
  var loopInterval;

  Reveal.addEventListener('ready', function (e) {
    // Loop vertically if on first section.
    if (e.indexh === 0) {
      loopInterval = setInterval(function() {
        if (Reveal.getIndices().v === 2) {
          Reveal.slide(0, 0);
        }
        else {
          Reveal.down();
        }
      }, 7500);
    }
  });

  Reveal.addEventListener('slidechanged', function (e) {
    if (e.indexh !== 0) {
      clearInterval(loopInterval);
    }
  });

})();