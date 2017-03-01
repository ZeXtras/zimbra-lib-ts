define(["require", "exports", "../../boot/AjxPackage", "./DwtBaseDialog", "../../config/msg/AjxMsg"], function (require, exports, AjxPackage_1, DwtBaseDialog_1, AjxMsg_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtBaseDialog = DwtBaseDialog_1.DwtBaseDialog;
  if (!AjxPackage.isDefined("ajax.dwt.widgets.DwtDialog")) {
    AjxPackage.require({
      name: "ajax.dwt.widgets.DwtDialog",
      extension: ".js"
    });
  }

  var AjxMsg = AjxMsg_1.AjxMsg;

  // Fix For Zimbra 8.7: @see https://bugzilla.zimbra.com/show_bug.cgi?id=102980
  if (typeof AjxMsg['close'] === 'undefined') {
    DwtDialog.MSG_KEY[DwtDialog.DISMISS_BUTTON] = "dismiss";
  }

  exports.DwtDialog = DwtDialog;
  exports.DwtDialog_ButtonDescriptor = DwtDialog_ButtonDescriptor;
});
