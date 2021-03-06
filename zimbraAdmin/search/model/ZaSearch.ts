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

import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZaItem} from "../../common/ZaItem";
import {ZaItemList} from "../../common/ZaItemList";

export class ZaSearch {
  public static DLS: string;
  public static DOMAINS: string;
  public static ACCOUNTS: string;
  public static COSES: string;
  public static standardAttributes: string;
  public static searchDirectory(params: {[name: string]: any}): any {}
  public static getSearchByNameQuery(n: string, types: string[], excludeClosed?: boolean): string { return undefined; }
  public static escapeLdapQuery(value: string): string { return undefined; }
  public static search(
    query: string,
    types: string[],
    pagenum: number,
    orderby: string,
    isascending: boolean,
    attrs: string,
    limit: number,
    domainName?: string,
    maxResults?: number,
  ): ISearchResult {
    return void 0;
  }
  /**
   * @argument callArgs {value, event, callback}
   */
  public dynSelectSearch(callArgs: {
    attrs: string[],
    value: string,
    callback: AjxCallback,
    types: string[],
  }): any {}
  public dynSelectSearchDomains(): any {}
  public dynSelectSearchCoses(): any {}
  public dynSelectGrantees?(callArgs: any): any {}
  public dynSelectGranteeCallback(params: any, resp: any): any {}
}

export interface ISearchResult {
  list: ZaItemList<ZaItem>;
}
