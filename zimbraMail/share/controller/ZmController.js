define(["require", "exports", "../../../ajax/boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;
  if (!AjxPackage.isDefined("zimbraMail.share.controller.ZmController")) {
    AjxPackage.require({
      name: "zimbraMail.share.controller.ZmController",
      extension: ".js"
    });
  }
  exports.ZmController = ZmController;
});
