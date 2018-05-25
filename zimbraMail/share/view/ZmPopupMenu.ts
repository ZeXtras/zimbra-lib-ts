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

import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {DwtMenuItem} from "../../../ajax/dwt/widgets/DwtMenuItem";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {ZmController} from "../controller/ZmController";

export class ZmPopupMenu extends DwtMenu {

  public menu: DwtMenu;

  constructor(parent: DwtControl, className?: string, id?: string, controller?: ZmController) {
    super({
      className: className,
      id: id,
      parent: parent,
      style: undefined,
    });
  }

  public popup(delay: number, x: number, y: number, kbGenereated?: boolean): void {}
  public addSelectionListener(menuItemId: string, listener: AjxListener, index?: number): void {}

  public createMenuItem(id: string, params: CreateMenuItemParams): DwtMenuItem { return undefined; }
  public getMenuItem(id: string): DwtMenuItem { return undefined; }
  public createSeparator(): void {}
  public getMenuItems(): DwtMenuItem[] {  return undefined; }

}

export interface CreateMenuItemParams {
  text: string;
  image?: string;
  disImage?: string;
  enabled?: boolean;
  style?: string|number;
  radioGroupId?: string;
  shortcut?: string;
  index?: number;
}

export interface ZmPopupMenuParams {
}
