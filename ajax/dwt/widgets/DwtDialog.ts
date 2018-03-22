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

import {AjxCallback} from "../../boot/AjxCallback";
import {AjxListener} from "../../events/AjxListener";
import {DwtPoint} from "../graphics/DwtPoint";
import {DwtBaseDialog, DwtBaseDialogParams} from "./DwtBaseDialog";
import {DwtButton} from "./DwtButton";

export class DwtDialog extends DwtBaseDialog {

  public static LAST_BUTTON: number;
  public static CANCEL_BUTTON: number;
  public static OK_BUTTON: number;
  public static DISMISS_BUTTON: number;
  public static NO_BUTTON: number;
  public static YES_BUTTON: number;
  public static ALL_BUTTONS: number;
  public static NO_BUTTONS: number;

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

  /** The `any` type is added only to allow the class to be override */
  public popup(loc?: DwtPoint | any, focusButtonId?: number | any): void {}

  public registerCallback(buttonId: number, callback: AjxCallback|any, obj?: {}, ...args: any[]): void {}

  public getButton(id: number|string): DwtButton { return void 0; }

  public setButtonEnabled(id: number, enabled: boolean): void {}
}

export interface DwtDialogParams extends DwtBaseDialogParams {
  standardButtons?: number[];
  extraButtons?: DwtDialog_ButtonDescriptor[];
}

export class DwtDialog_ButtonDescriptor {
  constructor(id: number|string, label: string, align: number, callback: AjxCallback, cellTemplate?: string) {}
}
