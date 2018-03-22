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

import {ZaItem} from "../../common/ZaItem";
import {ZaItemList} from "../../common/ZaItemList";

export class ZaSearch {
  public static ACCOUNTS: string;
  public static COSES: string;
  public static standardAttributes: string;
  public static searchDirectory(params: {[name: string]: any}): any {}
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
  public dynSelectSearch(callArgs: any[]): any {}
  public dynSelectSearchDomains(): any {}
  public dynSelectSearchCoses(): any {}
}

export interface ISearchResult {
  list: ZaItemList<ZaItem>;
}
