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
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmApp} from "../../core/ZmApp";
import {ZmSearchResultsController} from "./ZmSearchResultsController";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {ZmAppViewMgrCreateViewParams} from "../../core/ZmAppViewMgr";
import {ZmFolder} from "../model/ZmFolder";
import {ZmButtonToolBar} from "../view/ZmButtonToolBar";

export abstract class ZmBaseController extends ZmController {

  public _listeners: {[action: string]: AjxListener};
  public isSearchResults?: boolean;
  public searchResultsController?: ZmSearchResultsController;
  /** @override */ public operationsToEnableOnZeroSelection: string[];
  /** @override */ public operationsToDisableOnSingleSelection: string[];
  /** @override */ public operationsToEnableOnMultiSelection: string[];

  constructor(container: DwtControl, app: ZmApp, type: string, sessionId: string, searchResultsController: ZmSearchResultsController) {
    super(container, app, type, sessionId, searchResultsController);
  }

  public supportsDnD(): boolean { return undefined; }
  public _setup(view: string): void {}
  public _setView(params: ZmBaseControllerSetViewParams): void {}
  public _getSearchFolder(): ZmFolder { return undefined; }
  public getCurrentToolbar(): ZmButtonToolBar { return undefined; }
  public _resetOperations(parent: DwtControl, itemSelectedCount: number): void {}

  /** @override */ public _createNewView(view: string): DwtControl { return undefined; }
  /** @override */ public _getToolBarOps(): string[] { return undefined; }
  /** @override */ public _getSecondaryToolBarOps(): string[] { return undefined; }
  /** @override */ public _getRightSideToolBarOps(): string[] { return undefined; }

}

export interface ZmBaseControllerSetViewParams extends ZmAppViewMgrCreateViewParams {
  view: string;
}
