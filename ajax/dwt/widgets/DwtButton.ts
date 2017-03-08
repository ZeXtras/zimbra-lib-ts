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

import {DwtLabel, DwtLabelParams} from "./DwtLabel";
import {AjxListener} from "../../events/AjxListener";
import {DwtMenu} from "./DwtMenu";
import {AjxCallback} from "../../boot/AjxCallback";
import {DwtEvent} from "../events/DwtEvent";

export class DwtButton extends DwtLabel {

  public static ACTION_MOUSEUP: number;

  constructor(params: DwtButtonParams) {
    super(params);
  }
  public setText(text: string): void {}
  public addSelectionListener(listener: Function, index?: number): void; // TODO: Investigate on this usage
  public addSelectionListener(listener: AjxListener, index?: number): void;
  public addSelectionListener(listener: any, index?: number): void {}
  public setSelected(selected: boolean): void {}
  public setMenu(menu: AjxCallback, shouldToggle?: boolean, followIconStyle?: boolean, popupAbove?: boolean, popupRight?: boolean): void;
  public setMenu(menu: DwtMenu, shouldToggle?: boolean, followIconStyle?: boolean, popupAbove?: boolean, popupRight?: boolean): void;
  public setMenu(params: DwtButtonSetMenuParams): void;
  public setMenu(params: any, shouldToggle?: boolean, followIconStyle?: boolean, popupAbove?: boolean, popupRight?: boolean): void {}
  public getMenu(dontCreate?: boolean): DwtMenu { return undefined; }
  public setImage(imageInfo: string): void {}
  public _createHtmlFromTemplate(templateId: string, data: {[key: string]: any}): void {}
  public _emulateSingleClick(): void {};
  public dontStealFocus(val: boolean = true): void {}
  public popup(menu?: DwtMenu): void {}
  public removeDropDownSelectionListener(listener?: AjxListener): void {}
  public removePullDownMenuOptions(): void {}
  public handleKeyAction(actionCode: string, ev: DwtEvent): boolean { return undefined; }

}

export interface DwtButtonSetMenuParams {
  menu: AjxCallback | DwtMenu;
  shouldToggle?: boolean;
  menuPopupStyle?: string;
  popupAbove?: boolean;
  popupRight?: boolean;
}

export interface DwtButtonParams extends DwtLabelParams {
  actionTiming?: number;
  listeners?: {[name: string]: AjxListener};
}
