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

import {ZmPopupMenu} from "./ZmPopupMenu";
import {DwtMenuItem} from "../../../ajax/dwt/widgets/DwtMenuItem";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {ZmController} from "../controller/ZmController";

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