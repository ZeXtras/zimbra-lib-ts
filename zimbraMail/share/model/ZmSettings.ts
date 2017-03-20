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

import {ZmModel} from "./ZmModel";
import {ZmSetting} from "./ZmSetting";
import {ZmAccount} from "./ZmAccount";
import {ZmBatchCommand} from "../../../zimbra/csfe/ZmBatchCommand";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";

export class ZmSettings extends ZmModel {

  public getInfoResponse: GetInfoResponseObj;

  public get(id: string, key?: string): ZmSetting|string { return undefined; }

  public registerSetting(key: string, params: RegisterSettingParams): void {}

  public getSetting(key: string): ZmSetting { return undefined; }

  public save(list: ZmSetting[], callback: AjxCallback, batchCommand?: ZmBatchCommand, account?: ZmAccount, isImplicit?: boolean): void {}

}

interface RegisterSettingParams {
  name: string;
  type: string;
  dataType: string;
  defaultValue?: any;
}

interface GetInfoResponseObj {
  prefs: {
    _attrs: {
      zimbraPrefIMSoundsEnabled: string;
      zimbraPrefIMFlashTitle: string;
      zimbraPrefIMToasterEnabled: string;
      zimbraPrefIMInstantNotify: string;
      zimbraPrefIMAutoLogin: string;
      zimbraPrefIMNotifyPresence: string;
      zimbraPrefIMNotifyStatus: string;
      zimbraPrefIMLogChats: string;
      zimbraPrefIMReportIdle: string;
      zimbraPrefIMIdleTimeout: string;
      zimbraPrefIMIdleStatus: string;
      zimbraPrefIMBuddyListSort: string;
      zimbraPrefIMHideOfflineBuddies: string;
      zimbraPrefIMHideBlockedBuddies: string;
    };
  };
}
