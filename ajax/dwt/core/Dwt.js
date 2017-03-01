define(["require", "exports"], function (require, exports) {
  "use strict";

  if (typeof Dwt.getElement === "undefined") {
    // Backported from Zimbra 8.0.9
    Dwt.getElement = function(el) {
      return (typeof(el) == "string") ? document.getElementById(el) : el;
    }
  }

  exports.Dwt = Dwt;
});
