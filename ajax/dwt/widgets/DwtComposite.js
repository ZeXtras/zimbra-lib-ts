define(["require", "exports", "../../boot/AjxPackage", "./DwtControl"], function (require, exports, AjxPackage_1, DwtControl_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtControl = DwtControl_1.DwtControl;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtComposite")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtComposite",
      extension: ".js"
    });
  }
  exports.DwtComposite = DwtComposite;
});
