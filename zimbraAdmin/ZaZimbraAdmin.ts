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

import {AjxCallback} from "../ajax/boot/AjxCallback";
import {ZaAccount} from "./accounts/model/ZaAccount";
import {ZaToast} from "./common/ZaActionStatusView";
import {ZaController} from "./common/ZaController";
import {ZaCurrentAppBar} from "./common/ZaCurrentAppBar";
import {ZaTaskController} from "./task/controller/ZaTaskController";

export class ZaZimbraAdmin extends ZaController {
  public static VIEW_INDEX: number;
  public static URN: string;
  public static currentAdminAccount: ZaAccount;
  public static currentUserLogin: string;
  public static _ZEXTRAS_GROUP_VIEW: number;
  public static _ZEXTRAS_GROUP_LIST: number;
  public static getInstance(): ZaZimbraAdmin {
    return void 0;
  }

  public setActionStatusMsg(params: string|SetActionStatusMsgParams|any): void {}

  public getCurrentAppBar(): ZaCurrentAppBar {
    return void 0;
  }

  public getTaskController(): ZaTaskController {
    return void 0;
  }

  public static isGlobalAdmin(){}
}

interface SetActionStatusMsgParams {
  msg: string;
  level?: number; // ZaActionStatusView.LEVEL_INFO, ZaActionStatusView.LEVEL_WARNING, ZaActionStatusView.LEVEL_CRITICAL
  details?: string;
  transitions?: string[];
  toast?: ZaToast;
  force?: boolean;
  dismissCallback?: AjxCallback;
  finishCallback?: AjxCallback;
}
