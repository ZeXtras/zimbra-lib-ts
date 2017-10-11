/*
 * T4Z - TypeScript 4 Zimlet
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of T4Z - TypeScript 4 Zimlet.
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
 * along with T4Z - TypeScript 4 Zimlet. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtButton} from "../../../../ajax/dwt/widgets/DwtButton";
import {DwtControl} from "../../../../ajax/dwt/widgets/DwtControl";
import {ZmFolder} from "../../model/ZmFolder";
import {ZmDialog} from "./ZmDialog";

export class ZmNewOrganizerDialog extends ZmDialog {

  constructor(parent: DwtControl, className: string, title: string, type: string, extraButtons?: DwtButton[]) {
    super({
      className: className,
      extraButtons: extraButtons,
      id: "CreateNewFolderDialog",
      parent: parent,
      title: title,
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
