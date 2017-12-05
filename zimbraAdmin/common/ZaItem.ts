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

import {ZaModel} from "./ZaModel";

export class ZaItem extends ZaModel {
  public static ACCOUNT: string;
  public static DATASOURCE: string;
  public static DL: string;
  public static GROUP: string;
  public static ALIAS: string;
  public static RESOURCE: string;
  public static DOMAIN: string;
  public static COS: string;
  public static GLOBAL_CONFIG: string;
  public static GLOBAL_GRANT: string;
  public static SERVER: string;
  public static STATS: string;
  public static ZIMLET: string;
  public static MAILQ_ITEM: string;
  public static MAILQ: string;
  public static HOME: string;
  public static A_objectClass: string;
  public static A_zimbraId: string;
  public static A_cn: string ;
  public static A_zimbraACE: string;
  public static A_zimbraCreateTimestamp: string;

  public static loadMethods: {[className: string]: Array<(by: string, val: string) => void>};
  public static initMethods: {[className: string]: Array<() => void>};
  public static modifyMethods: {[className: string]: Array<(mods: {}, tmpObj: ZaItem) => void>};
  public static modifyMethodsExt: {[className: string]: Array<() => void>};
  public static createMethods: {[className: string]: Array<(tmpObj: {}, item: ZaItem) => void>};
  public static removeMethods: {[className: string]: Array<() => void>};
  public static modelExtensions: {[className: string]: Array<() => void>};
  public static getRelatedMethods: {[className: string]: Array<(parentPath: string) => void>};
  public static ObjectModifiers: {[className: string]: Array<() => void>};

  public rightsLoaded: boolean;
  public id: string; // TODO: Investigate
  public name: string;
  public attrs: {}; // TODO: Investigate
  public type: string;
  public _iKeyName: string;
  private _uuid: string;

  constructor(iKeyName: string) {
    super(true);
  }

  public _init(): void {} // Should be private...
  public refresh(skipRights: boolean, expandDefaults: boolean): void {}
  public load(by: string, val: string, skipRights: boolean, expandDefaults: boolean): void {}
}
