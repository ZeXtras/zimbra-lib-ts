define(["require", "exports", "../../boot/AjxPackage", "./DwtComposite"], function (require, exports, AjxPackage_1, DwtComposite_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtComposite = DwtComposite_1.DwtComposite;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtBaseDialog")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtBaseDialog",
      extension: ".js"
    });
  }
  exports.DwtBaseDialog = DwtBaseDialog;
});
