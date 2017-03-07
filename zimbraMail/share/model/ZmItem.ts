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
import {ZmList} from "./ZmList";
import {ZmZimbraAccount} from "./ZmZimbraAccount";

export class ZmItem extends ZmModel {
  public static BRIEFCASE_ITEM: string;
  public static CONTACT: string;
  public static GROUP: string;
  public static F_EXPAND: string;
  public static F_FROM: string;
  public static F_FOLDER: string;
  public static APP: {[name: string]: string};
  public static RESULTS_LIST: {[name: string]: string};
  public static F_NAME: string;
  public static F_SORTED_BY: string;

  public id: string;
  public type: string;
  public list: ZmList;

  public static registerItem(type: string, params: ZmItemRegisterItemParams): void {}

  constructor(params: any, id?: string, list?: ZmList, noCache?: boolean) {
    super((<ZmItemParam>params).type);
  }

  public getAccount?(): ZmZimbraAccount { return undefined; }
  public _parseTagNames?(str: string): void {}
  public _parseFlags?(str: string): void {}
  public getRestUrl(): string {return undefined; }

}

export interface ZmItemParam {
  type: string;
  id: string;
  list: ZmList;
  noCache: boolean;
}

export interface ZmItemAttrs {
}

export interface ZmItemRegisterItemParams {
  app: string;
  nameKey: string;
  icon: string;
  soapCmd: string;
  itemClass: string;
  node: string;
  organizer: string;
  dropTargets: string[];
  searchType: string;
  resultsList: Function;
}
