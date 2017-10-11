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

import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtMenuItem} from "../../../ajax/dwt/widgets/DwtMenuItem";
import {ZmController} from "../controller/ZmController";
import {ZmPopupMenu} from "./ZmPopupMenu";

export class ZmActionMenu extends ZmPopupMenu {

  constructor(params: ZmActionMenuParams) {
    super(params.parent, null, params.id, params.controller);
  }

  public getOp(opId: string): DwtMenuItem {
    return undefined;
  }

  public removeOp(op: string): void {}

}

export interface ZmActionMenuParams {
  menuItems?: string[];
  parent: DwtComposite;
  id?: string;
  controller?: ZmController;
  overrides?: {};
  context?: string;
}
