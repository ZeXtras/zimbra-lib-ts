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

import {ZmZimletBase} from "./ZmZimletBase";

export class ZmZimletContext {
  public handlerObject: ZmZimletBase;
  public userProperties: UserProperty[];
  public setPropValue(name: string, val: any): void {};
  public name: string;
  public version: string;
  public priority: number;

  public processMessage(label: string): string { return undefined; }
}

export interface UserProperty {
  label: string;
  name: string;
  type: string;
  value: any;
}
