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

import {DwtSelect} from "../../../ajax/dwt/widgets/DwtSelect";
import {DwtToolBarSpacer} from "../../../ajax/dwt/widgets/DwtToolBar";
import {ZmInvite} from "../../share/model/ZmInvite";
import {ZmButtonToolBar} from "../../share/view/ZmButtonToolBar";
import {ZmMailMsg} from "../model/ZmMailMsg";
import {ZmMailMsgView} from "./ZmMailMsgView";

export class ZmInviteMsgView {

  public static PTST_MSG: {[name: string]: {msg: string, className: string}};
  public parent: ZmMailMsgView;
  public _msg: ZmMailMsg;
  public _invite: ZmInvite;
  public _counterToolbar: ZmButtonToolBar;
  public _inviteToolbar: ZmButtonToolBar;
  public _respondOnBehalfLabel: HTMLTableDataCellElement|DwtToolBarSpacer;
  public _inviteMoveSelect: DwtSelect;

  public set(msg: ZmMailMsg): void {}
  public _getCounterToolbar(): ZmButtonToolBar { return undefined; }
  public getInviteToolbar(): ZmButtonToolBar { return undefined; }

}
