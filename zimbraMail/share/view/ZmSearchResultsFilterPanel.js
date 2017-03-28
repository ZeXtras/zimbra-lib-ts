define(["require", "exports", "../../../ajax/boot/AjxPackage", "../../../ajax/dwt/widgets/DwtComposite"], function (require, exports, AjxPackage_1, DwtComposite_1) {
  "use strict";
  var AjxPackage = AjxPackage_1.AjxPackage,
    DwtComposite = DwtComposite_1.DwtComposite;
  if (!AjxPackage.isDefined("zimbraMail.share.view.ZmSearchResultsFilterPanel")) {
    AjxPackage.require({
      name: "zimbraMail.share.view.ZmSearchResultsFilterPanel",
      extension: ".js"
    });
  }
  exports.ZmSearchResultsFilterPanel = ZmSearchResultsFilterPanel;
  exports.ZmFolderSearchFilter = ZmFolderSearchFilter;
  exports.ZmSearchFilter = ZmSearchFilter;
});
