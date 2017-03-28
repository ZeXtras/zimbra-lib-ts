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

import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtUiEvent} from "../events/DwtUiEvent";
import {DwtMenuItem} from "./DwtMenuItem";
import {AjxListener} from "../../events/AjxListener";

export class DwtMenu extends DwtComposite {
  public static GENERIC_WIDGET_STYLE: string;

  public optRename: DwtMenuItem;
  public optSendInvitation: DwtMenuItem;
  public optAcceptInvitation: DwtMenuItem;
  public optDelete: DwtMenuItem;
  public optNewMail: DwtMenuItem;
  public _menuItems: {[id: string]: DwtMenuItem};

  constructor(params: DwtMenuParams) {
    super(params);
  }

  public popup(delay: number, x: number, y: number, kbGenereated?: boolean): void {}

  public popdown(msec?: number, ev?: DwtUiEvent): void {
  }

  public getItemIndex(item: DwtMenuItem): number {
    return undefined;
  }

  public getItemById(key: string, value: any): DwtMenuItem { return undefined; }
  public getItems(): DwtMenuItem[] { return undefined; }

  public addPopupListener(ajxListener: AjxListener): void { return undefined; }

  public getItemCount(): number {
    return undefined;
  }
  public setWidth(width: string|number): void {}

}

export interface DwtMenuParams extends DwtCompositeParams {
  style: string|number;
}
