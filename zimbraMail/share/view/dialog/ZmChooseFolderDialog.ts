/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2 of
 * the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */


import {ZmDialog} from "./ZmDialog";
import {ZmOverview} from "../ZmOverview";
import {AjxListener} from "../../../../ajax/events/AjxListener";
import {DwtControl} from "../../../../ajax/dwt/widgets/DwtControl";
import {ZmTreeView} from "../ZmTreeView";
import {DwtInputField} from "../../../../ajax/dwt/widgets/DwtInputField";

export class ZmChooseFolderDialog extends ZmDialog {

  public _treeViewListener: AjxListener;
  public _treeView: {[accountId: string]: {[treeViewId: string]: ZmTreeView}};
  public _changeListener: AjxListener;
  public _folders: {id: string, type: string, name: string, path: string, accountId?: string}[];
  public _inputField: DwtInputField;
  public _inputDivId: string;
  public _folderDescDivId: string;
  public _folderTreeDivId: string;

  constructor(parent: DwtControl, className: string) {
    super({
      parent: parent,
      className: className
    });
  }

  public _resetTree(treeIds: string[], overview: ZmOverview): void {}
  public _loadFolders(): void {}
  public _resetTreeView(visible: boolean): void {}
  public getOverviewId(appName: string): string { return undefined; }
  public _contentHtml(): string { return undefined; }
  public _createControls(): void {}
}

