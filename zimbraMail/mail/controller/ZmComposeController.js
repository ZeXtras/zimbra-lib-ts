define(["require", "exports", "../../../ajax/boot/AjxPackage", "../../share/controller/ZmController"], function (require, exports, AjxPackage_1, ZmController_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    ZmController = ZmController_1.ZmController;
  if (!AjxPackage.isDefined("zimbraMail.mail.controller.ZmComposeController")) {
    AjxPackage.require({
      name: "zimbraMail.mail.controller.ZmComposeController",
      extension: ".js"
    });
  }
  // Patch to allow to load correctly `ZmComposeController` class
  var is809 = /^8\.0\.9/.test(appCtxt.get(ZmSetting.CLIENT_VERSION));
  if (typeof ZmComposeController.SETTINGS === "undefined" && !is809) {
    ZmComposeController.SETTINGS = [];
  }
  exports.ZmComposeController = ZmComposeController;
});
