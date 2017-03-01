define(["require", "exports", "../../../ajax/boot/AjxPackage", "../../../ajax/dwt/widgets/DwtComposite"], function (require, exports, AjxPackage_1, DwtComposite_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtComposite = DwtComposite_1.DwtComposite;
  if (!AjxPackage.isDefined("zimbraMail.mail.view.ZmComposeView")) {
    AjxPackage.require({
      name: "zimbraMail.mail.view.ZmComposeView",
      extension: ".js"
    });
  }
  exports.ZmComposeView = ZmComposeView;
});
