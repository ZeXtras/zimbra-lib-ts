define(["require", "exports", "../../../../ajax/boot/AjxPackage", "../../../../ajax/dwt/widgets/DwtDialog"], function (require, exports, AjxPackage_1, DwtDialog_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtDialog = DwtDialog_1.DwtDialog;
  if (!AjxPackage.isDefined("zimbraMail.share.view.dialog.ZmFolderPropsDialog")) {
    AjxPackage.require({
      name: "zimbraMail.share.view.dialog.ZmFolderPropsDialog",
      extension: ".js"
    });
  }
  exports.ZmFolderPropsDialog = ZmFolderPropsDialog;
});
