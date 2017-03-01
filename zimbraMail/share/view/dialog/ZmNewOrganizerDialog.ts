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
import {DwtControl} from "../../../../ajax/dwt/widgets/DwtControl";
import {DwtButton} from "../../../../ajax/dwt/widgets/DwtButton";
import {ZmFolder} from "../../model/ZmFolder";

export class ZmNewOrganizerDialog extends ZmDialog {

  constructor(parent: DwtControl, className: string, title: string, type: string, extraButtons?: DwtButton[]) {
    super({
      parent: parent,
      className: className,
      title: title,
      id: "CreateNewFolderDialog",
      extraButtons: extraButtons
    });
  }

  public popup(params: ZmFolder): void {}

  public _setupControls(): void {
    this._setupStandardControls();
    this._setupExtraControls();
  }

  public _setupStandardControls(): void {
    this._setupNameControl();
    this._setupColorControl();
  }

  public _setupExtraControls(): void {
    this._setupRemoteControls();
    this._setupFolderControls();
  }

  public _setupNameControl(): void {}
  public _setupColorControl(): void {}
  public _setupRemoteControls(): void {}
  public _setupFolderControls(): void {}

  public _createColorContentHtml(html: HTMLElement, idx: number): number { return undefined; }
  public _createRemoteContentHtml(html: HTMLElement, idx: number): number { return undefined; }
}