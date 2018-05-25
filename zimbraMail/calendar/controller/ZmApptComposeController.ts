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

import {ZmCsfeResult} from "../../../zimbra/csfe/ZmCsfeResult";
import {ZmAppt} from "../model/ZmAppt";
import {ZmApptComposeView} from "../view/ZmApptComposeView";
import {ZmCalItemComposeController} from "./ZmCalItemComposeController";

export class ZmApptComposeController extends ZmCalItemComposeController {

  public _composeView: ZmApptComposeView;

  public handleCheckRightsResponse(
    appt: ZmAppt,
    attId: string,
    names: string[],
    notifyList: string[],
    response: ZmCsfeResult,
  ): void {}
  public saveCalItemContinue(appt: ZmAppt, attId: string, notifyList: string[]): void {}
  public closeView(): void {}

}

export interface CheckRightResponse {
  target: Array<{allow: boolean}>;
}
