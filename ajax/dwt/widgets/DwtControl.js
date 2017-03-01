define(["require", "exports", "../../boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtControl")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtControl",
      extension: ".js"
    });
  }
  exports.DwtControl = DwtControl;
});
