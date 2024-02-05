'use strict';
const runOnce = function () {
  console.log('This will never run again.');
};

// setInterval(runOnce, 1000);
// IIFE
(function () {
  console.log('This will never run again.');
})();
(() => console.log('ALSO never run again.'))();

