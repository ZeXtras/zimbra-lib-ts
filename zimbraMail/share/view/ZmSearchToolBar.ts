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

import {DwtButton} from "../../../ajax/dwt/widgets/DwtButton";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";

export class ZmSearchToolBar extends DwtComposite {
  public static TYPES_BUTTON: string;

  public static addMenuItem(id: string, param: ZmSearchToolbarAddMenuItemParam): void {}

  public setSearchFieldValue(value: string): void {}
  public _handleEnterKeyPress(event: {type: string, code: string}): void {}
  public getButton(buttonId: string): DwtButton { return undefined; }

}

export class ZmMainSearchToolBar extends ZmSearchToolBar {
  public static CUSTOM_ITEM_ID: string;

  public getSearchFieldValue(): string { return undefined; }
}

export interface ZmSearchToolbarAddMenuItemParam {
  msgKey: string;
  tooltipKey: string;
  icon: string;
  shareIcon: any;
  setting: string;
  id: string;
  disableOffline: boolean;
}
