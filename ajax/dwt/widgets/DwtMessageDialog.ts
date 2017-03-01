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

import {DwtDialog, DwtDialogParams} from "./DwtDialog";

export class DwtMessageDialog extends DwtDialog {

  constructor(params: DwtMessageDialogParams) {
    super({parent: params.parent, standardButtons: params.buttons, id: params.id});
  }

  public static WARNING_STYLE: number;
  public static INFO_STYLE: number;
  public static CRITICAL_STYLE: number;

  public setMessage(msgStr: string, style?: number, title?: string): void {}

  public reset(): void {}

}

export interface DwtMessageDialogParams extends DwtDialogParams {
  buttons?: number[];
}
