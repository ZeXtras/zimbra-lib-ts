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

import {ZmMailListController} from "./ZmMailListController";
import {DwtEvent} from "../../../ajax/dwt/events/DwtEvent";
import {ZmMailMsg} from "../model/ZmMailMsg";
import {ZmConv} from "../model/ZmConv";
import {ZmListController} from "../../share/controller/ZmListController";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmCsfeResult} from "../../../csfe/ZmCsfeResult";

export class ZmMsgController extends ZmMailListController {

  public _msg: ZmMailMsg|ZmConv;
  public _parentController: ZmListController;

  public _printListener(ev: DwtEvent): void {}
  public setMsg(msg: ZmMailMsg): void {}
  public _handleResponseShow(callback: AjxCallback, hidePagination: boolean, result?: ZmCsfeResult): void {}

}
