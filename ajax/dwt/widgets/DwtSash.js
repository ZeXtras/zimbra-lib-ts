define(["require", "exports", "../../boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtSash")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtSash",
      extension: ".js"
    });
  }
  exports.DwtSash = DwtSash;
});
