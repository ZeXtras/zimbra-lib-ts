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

import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmController} from "../controller/ZmController";
import {DwtMenuItem} from "../../../ajax/dwt/widgets/DwtMenuItem";
import {AjxListener} from "../../../ajax/events/AjxListener";

export class ZmPopupMenu extends DwtMenu {

  public menu: DwtMenu;

  constructor(parent: any, className?: string, id?: string, controller?: ZmController) {
    super({
      parent: parent,
      className: className,
      id: id,
      style: undefined
    });
  }

  public popup(delay: number, x: number, y: number, kbGenereated?: boolean): void {}

  public createMenuItem(id: string, params: CreateMenuItemParams): DwtMenuItem { return undefined; }
  public getMenuItem(id: string): DwtMenuItem { return undefined; }

}

export interface CreateMenuItemParams {
  text: string;
  image?: string;
  disImage?: string;
  enabled?: boolean;
  style?: string|number;
  radioGroupId?: string;
  shortcut?: string;
}

export interface ZmPopupMenuParams {

}
