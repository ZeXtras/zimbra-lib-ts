define(["require", "exports", "../../boot/AjxPackage", "./DwtDialog"], function (require, exports, AjxPackage_1, DwtDialog_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtDialog = DwtDialog_1.DwtDialog;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtConfirmDialog")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtConfirmDialog",
      extension: ".js"
    });
  }
  exports.DwtConfirmDialog = DwtConfirmDialog;
});
