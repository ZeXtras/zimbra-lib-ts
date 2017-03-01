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

import {ZaItem} from "../../../zimbraAdmin/common/ZaItem";
import {XModel} from "./XModel";

export class XModelItem {

}
export let _UNTYPED_: string;
export let _OBJECT_: string;
export let _STRING_: string;
export let _NUMBER_: string;
export let _INT_: string;
export let _DATE_: string;
export let _TIME_: string;
export let _DATETIME_: string;
export let _LIST_: string;
export let _ENUM_: string;
export let _BOOL_: string;
export let _FILE_SIZE_: string;
export let _HOSTNAME_OR_IP_: string;
export let _SHORT_URL_: string;
export let _PORT_: string;
export let _PERCENT_: string;
export let _EMAIL_ADDRESS_: string;
// export let _FULL_URL_: string; Starting from Z7+

export interface XModelItemEnumChoice {
  value: any;
  label: string;
}

export class XModelItemFactory {
  public static createItem(attributes: {[name: string]: any}, parentItem: XModelItem, xmodel: XModel): ZaItem {
    return void 0;
  }
  public static createItemType(typeConstant: string, typeName: string, constructor: ObjectConstructor, superClassConstructor?: ObjectConstructor): ObjectConstructor {
    return void 0;
  }
}


