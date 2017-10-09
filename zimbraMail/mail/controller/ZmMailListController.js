define(["require", "exports", "../../../ajax/boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("zimbraMail.mail.controller.ZmMailListController")) {
    AjxPackage.require({
      name: "zimbraMail.mail.controller.ZmMailListController",
      extension: ".js"
    });
  }
  exports.ZmMailListController = ZmMailListController;
});
