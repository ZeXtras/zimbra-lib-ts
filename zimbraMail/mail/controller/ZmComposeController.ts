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

import {ZmController} from "../../share/controller/ZmController";
import {ZmActionMenu} from "../../share/view/ZmActionMenu";

export class ZmComposeController extends ZmController {

  public static IS_REPLY: {[name: string]: boolean};
  public static IS_CAL_REPLY: {[name: string]: boolean};
  public static IS_INVITE_REPLY: {[name: string]: boolean};
  public static IS_FORWARD: {[name: string]: boolean};
  public static RADIO_GROUP: {[name: string]: number};
  public static OP_CHECK: {[name: string]: boolean};

  public _action: string;
  public _optionsMenu: {[name: string]: ZmActionMenu};
  public _listeners: {[name: string]: Function};

  public _setDependentOptions(incOptions: ZmComposeControllerSetDependentOptionsParams): void {}
  public _createOptionsMenu(action: string): ZmActionMenu { return undefined; }

}

export interface ZmComposeControllerSetDependentOptionsParams {
}
