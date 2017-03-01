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

import {ZaController} from "./common/ZaController";
import {ZaAccount} from "./accounts/model/ZaAccount";
import {ZaToast} from "./common/ZaActionStatusView";
import {AjxCallback} from "../ajax/boot/AjxCallback";
import {ZaCurrentAppBar} from "./common/ZaCurrentAppBar";

export class ZaZimbraAdmin extends ZaController {
  public static URN: string;
  public static currentAdminAccount: ZaAccount;
  public static _ZEXTRAS_GROUP_VIEW: number;
  public static _ZEXTRAS_GROUP_LIST: string;

  public setActionStatusMsg(msg: string): void;
  public setActionStatusMsg(params: SetActionStatusMsgParams): void;
  public setActionStatusMsg(params: any): void {}

  public getCurrentAppBar(): ZaCurrentAppBar {
    return void 0;
  }
  public static getInstance(): ZaZimbraAdmin {
    return void 0;
  }
}

interface SetActionStatusMsgParams {
  msg: string;
  level?: number; // ZaActionStatusView.LEVEL_INFO, ZaActionStatusView.LEVEL_WARNING, or ZaActionStatusView.LEVEL_CRITICAL
  details?: string;
  transitions?: string[];
  toast?: ZaToast;
  force?: boolean;
  dismissCallback?: AjxCallback;
  finishCallback?: AjxCallback;
}
