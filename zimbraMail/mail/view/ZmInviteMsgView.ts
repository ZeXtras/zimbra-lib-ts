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

import {ZmMailMsg} from "../model/ZmMailMsg";
import {ZmInvite} from "../../share/model/ZmInvite";
import {ZmButtonToolBar} from "../../share/view/ZmButtonToolBar";
import {ZmMailMsgView} from "./ZmMailMsgView";
import {DwtSelect} from "../../../ajax/dwt/widgets/DwtSelect";

export class ZmInviteMsgView {

  public parent: ZmMailMsgView;
  public _msg: ZmMailMsg;
  public _invite: ZmInvite;
  public _counterToolbar: ZmButtonToolBar;
  public _inviteToolbar: ZmButtonToolBar;
  public _respondOnBehalfLabel: HTMLTableDataCellElement;
  public _inviteMoveSelect: DwtSelect;
  static PTST_MSG: {[name: string]: {msg: string, className: string}};

  public set(msg: ZmMailMsg): void {}
  public _getCounterToolbar(): ZmButtonToolBar { return undefined; }
  public getInviteToolbar(): ZmButtonToolBar { return undefined; }

}