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

import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {ZaSearchListController} from "../search/controller/ZaSearchListController";
import {ZaZimbraAdmin} from "../ZaZimbraAdmin";
import {ZaAppCtxt} from "./ZaAppCtxt";
import {ZaAppViewMgr} from "./ZaAppViewMgr";
import {ZaController} from "./ZaController";
import {ZaItem} from "./ZaItem";
import {ZaItemList} from "./ZaItemList";
import {ZaTabView} from "./ZaTabView";
import {ZaXDialog} from "./ZaXDialog";

export class ZaApp {

  public static getInstance(): ZaApp { return undefined; }

  public dialogs: {[name: string]: ZaXDialog};
  public _controllers: {[id: number]: ZaController};
  public _container: DwtShell;

  public getCurrentController(): ZaController { return undefined; }
  public getAppController(): ZaZimbraAdmin { return undefined; }
  public getControllerById<T extends ZaController>(id: string): T { return undefined; }
  public getAppCtxt(): ZaAppCtxt { return undefined; }
  public getMbsList(): ZaItemList<ZaItem> { return undefined; }
  public pushView(name: string|number, openInNewTab?: boolean, openInSearchTab?: boolean): void {}
  public getAppViewMgr(): ZaAppViewMgr { return undefined; }
  public createView(
    viewName: string,
    elements: {[name: string]: ZaTabView},
    tabParams: {[paramName: string]: any},
  ): void {}
  public getSearchListController(): ZaSearchListController { return undefined; }
}
