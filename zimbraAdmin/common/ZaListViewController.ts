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

import {ZaController} from "./ZaController";
import {ZaItem} from "./ZaItem";
import {ZaItemList} from "./ZaItemList";
import {ZaAppCtxt} from "./ZaAppCtxt";
import {AjxVector} from "../../ajax/util/AjxVector";

export class ZaListViewController extends ZaController {

  public _currentPageNum: number;
  public RESULTSPERPAGE: number;
  protected _list: ZaItemList<ZaItem>;
  protected _UICreated: boolean;

  constructor(appCtxt: ZaAppCtxt, container: any, iKeyName: any) {
    super(appCtxt, container, iKeyName);
  }

  public searchCallback(
    params: {[name: string]: any},
    resp: any,
  ): void {}

  public getList(): any {
    return this._list;
  }
}
