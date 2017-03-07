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

import {ZmController} from "./ZmController";
import {ZmMainSearchToolBar} from "../view/ZmSearchToolBar";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmSearchParam, ZmSearch} from "../model/ZmSearch";
import {ZmCsfeResult} from "../../../csfe/ZmCsfeResult";

export class ZmSearchController extends ZmController {

  public searchAllAccounts?: boolean;
  public _searchToolBar: ZmMainSearchToolBar;
  public search(params: ZmSearchControllerSearchParams): void {}
  public getSearchToolbar(): ZmMainSearchToolBar { return undefined; }
  public _handleResponseDoSearch(search: ZmSearch, noRender: boolean, callback: AjxCallback, noUpdateOverview: boolean, result: ZmCsfeResult): void {}

}

export interface ZmSearchControllerSearchParams extends ZmSearchParam {
  searchFor?: string;
  noRender?: boolean;
  callback?: AjxCallback;
  errorCallback?: AjxCallback;
  skipUpdateSearchToolbar?: boolean;
  sessionId?: string;
  noGal?: boolean;
  userInitiated?: boolean;
  getHtml?: boolean;
  isEmpty?: boolean;
  checkTypes?: boolean;
}