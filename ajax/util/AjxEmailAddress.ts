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

import {AjxVector} from "./AjxVector";

export class AjxEmailAddress {

  public static fromSoapType: AjxEmailAddressFromSoapType;
  public static READ_RECEIPT: string;

  public static parseEmailString(
    emailStr: string,
    type?: string,
    strict?: boolean,
  ): AjxEmailAddressParseEmailStringReturnObj { return undefined; }
  public static parse(s: string): AjxEmailAddress { return undefined; }

  public canExpand: boolean;

  public constructor(
    address: string,
    type: "BCC"|"CC"|"FROM"|"READ_RECEIPT"|"REPLY_TO"|"RESENT_FROM"|"SENDER"|"TO",
    name: string,
    dispName: string,
    isGroup: boolean,
    canExpand: boolean,
  ) {}
  public getAddress(): string { return undefined; }

}

export interface AjxEmailAddressParseEmailStringReturnObj {
  all: AjxVector<string>;
  bad: AjxVector<string>;
  good: AjxVector<string>;
}

export interface AjxEmailAddressFromSoapType {
  b: "BCC";
  c: "CC";
  f: "FROM";
  n: "READ_RECEIPT";
  r: "REPLY_TO";
  rf: "RESENT_FROM";
  s: "SENDER";
  t: "TO";
}
