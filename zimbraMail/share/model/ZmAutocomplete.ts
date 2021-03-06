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

import {ZmContact} from "../../abook/model/ZmContact";
import {ZmAutocompleteListView} from "../view/ZmAutocompleteListView";
import {ZmZimbraAccount} from "./ZmZimbraAccount";

export class ZmAutocomplete {
  public static AC_VALUE_NAME: string;
  public static AC_VALUE_FULL: string;
  public static AC_VALUE_EMAIL: string;

  public static AC_TYPE_CONTACT = "contact";
  public static AC_TYPE_EQUIPMENT = "Equipment";
  public static AC_TYPE_GAL = "gal";
  public static AC_TYPE_LOCATION = "Location";
  public static AC_TYPE_TABLE = "rankingTable";
  public static AC_TYPE_UNKNOWN = "unknown";

  public autocompleteMatch(
    str: string,
    callback: (res: ZmAutocompleteMatch[]) => void,
    aclv: ZmAutocompleteListView,
    options: {
      type?: "contact" | "Equipment" | "gal" | "Location" | "rankingTable" | "unknown",
    },
    account?: ZmZimbraAccount,
    autocompleteType?: string,
  ): void {}
}

export class ZmAutocompleteMatch {
  public item?: ZmContact;
  public email?: string;
  public name?: string;
  public isDL?: boolean;
  public isGroup?: boolean;
}
