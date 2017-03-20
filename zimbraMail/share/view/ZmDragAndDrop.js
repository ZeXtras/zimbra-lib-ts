define(["require", "exports", "../../../ajax/boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage
  if (!AjxPackage.isDefined("zimbraMail.share.view.ZmDragAndDrop")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtBaseDialog",
      extension: ".js"
    });
  }
  exports.ZmDragAndDrop = ZmDragAndDrop;
});
