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

import {XModelInt} from "../../../ajax/dwt/xforms/XModelInt";
import {ZaItem} from "../../common/ZaItem";

export class ZaAccount extends ZaItem {
  public static A_zimbraMailAlias: string;
  public static A_zimbraIsAdminAccount: string;
  public static A_zimbraIsDelegatedAdminAccount: string;
  public static A_zimbraIsSystemResource: string;
  public static A_zimbraIsSystemAccount: string;
  public static A_zimbraZimletAvailableZimlets: string;
  public static A_uid: string;
  public static A_mailHost: string;
  public static myXModel: XModelInt;
  public static A_name: string;
  public static A_displayname: string;
  public static A_mail: string;

  public id: string;
  public attrs: {
    zimbraIsAdminAccount?: string,
    zimbraIsDelegatedAdminAccount?: string,
  };

  public setAttrs: {
    [name: string]: boolean;
  };
  public setAttrs: {
    [name: string]: boolean;
  };
}
