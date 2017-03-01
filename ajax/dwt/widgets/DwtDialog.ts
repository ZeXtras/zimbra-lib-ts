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

import {DwtBaseDialog, DwtBaseDialogParams} from "./DwtBaseDialog";
import {AjxListener} from "../../events/AjxListener";
import {AjxCallback} from "../../boot/AjxCallback";
import {DwtPoint} from "../graphics/DwtPoint";
import {DwtButton} from "./DwtButton";

export class DwtDialog extends DwtBaseDialog {

  public static CANCEL_BUTTON: number;
  public static OK_BUTTON: number;
  public static DISMISS_BUTTON: number;
  public static NO_BUTTON: number;
  public static YES_BUTTON: number;
  public static ALL_BUTTONS: number[];
  public static NO_BUTTONS: number[];

  public static MODELESS: number;
  public static MODAL: number;

  public static ALIGN_LEFT: number;
  public static ALIGN_CENTER: number;
  public static ALIGN_RIGHT: number;

  public _button: DwtButton[];

  constructor(params: DwtDialogParams) {
    super(params);
  }

  public setButtonListener(buttonId: number, listener: AjxListener): void {}

  /** The `any` type is added only to allow the class to be overrode*/
  public popup(loc?: DwtPoint | any, focusButtonId?: number | any): void {}

  public registerCallback(buttonId: number, callback: AjxCallback): void;
  public registerCallback(buttonId: number, func: Function, obj: Object, ...args: any[]): void;
  public registerCallback(buttonId: number, func: any, obj?: Object, ...args: any[]): void {}


  public getButton(id: number): DwtButton { return void 0; }
  public setButtonEnabled(id: number, enabled: boolean): void {}
}

export interface DwtDialogParams extends DwtBaseDialogParams {
  standardButtons?: number[];
  extraButtons?: DwtDialog_ButtonDescriptor[];
}

export class DwtDialog_ButtonDescriptor {
  constructor(id: string, label: string, align: number, callback: AjxCallback, cellTemplate?: string) {}
}
