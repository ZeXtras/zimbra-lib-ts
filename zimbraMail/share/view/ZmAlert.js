define(["require", "exports", "../../../ajax/boot/AjxDispatcher"], function (require, exports, AjxDispatcher_1) {
  "use strict";
  var AjxDispatcher = AjxDispatcher_1.AjxDispatcher;

  if (typeof AjxDispatcher !== 'undefined') {
    if (!AjxDispatcher.loaded('Alert')) {
      AjxDispatcher.require(["Alert"], false, null, null, null);
    }
  }

  exports.ZmAlert = ZmAlert;
  exports.ZmAlertLoop = ZmAlertLoop;
});
