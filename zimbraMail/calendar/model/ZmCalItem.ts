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

import {ZmCalBaseItem} from "./ZmCalBaseItem";
import {ZmFolder} from "../../share/model/ZmFolder";

export class ZmCalItem extends ZmCalBaseItem {

  public static MODE_EDIT_SINGLE_INSTANCE: string;
  public static MODE_EDIT: string;
  public static MODE_EDIT_SERIES: string;
  public static ROLE_OPTIONAL: string;
  public static ROLE_REQUIRED: string;

  public getFolder(): ZmFolder { return undefined; }
  public setMailNotificationOption(sendNotificationMail: boolean): void {}

}

export type ZmCalItemMode = "NEW" | "EDIT" | "COPY_INST" | "EDIT_INST" | "EDIT_SER"
                     | "DELETE" | "DELETE_INST" | "DELETE_SER" | "NEW_FROM_QUICK"
                     | "GET" | "FORWARD" | "FORWARD_INST" | "FORWARD_SER"
                     | "FORWARD_INV" | "PROPOSE_TIME";
