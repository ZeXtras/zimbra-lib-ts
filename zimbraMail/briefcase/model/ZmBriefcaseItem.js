define(["require", "exports", "../../../ajax/boot/AjxPackage"], function (require, exports, AjxPackage_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage;

  AjxPackage.require({
    name: "BriefcaseCore"
  });

  exports.ZmBriefcaseBaseItem = ZmBriefcaseBaseItem;
  exports.ZmBriefcaseItem = ZmBriefcaseItem;
  exports.ZmRevisionItem = ZmRevisionItem;
});
