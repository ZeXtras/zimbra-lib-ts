define(["require", "exports", "../../../../ajax/boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("zimbraMail.share.view.dialog.ZmChooseFolderDialog")) {
    AjxPackage.require({
      name: "zimbraMail.share.view.dialog.ZmChooseFolderDialog",
      extension: ".js"
    });
  }
  exports.ZmChooseFolderDialog = ZmChooseFolderDialog;
});
