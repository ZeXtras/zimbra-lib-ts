define(["require", "exports", "../../../ajax/boot/AjxPackage", "./ZmMailListController"], function (require, exports, AjxPackage_1, ZmMailListController_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("zimbraMail.mail.controller.ZmDoublePaneController")) {
    AjxPackage.require({
      name: "zimbraMail.mail.controller.ZmDoublePaneController",
      extension: ".js"
    });
  }
  exports.ZmDoublePaneController = ZmDoublePaneController;
});