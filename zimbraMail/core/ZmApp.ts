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

import {AjxCallback} from "../../ajax/boot/AjxCallback";
import {DwtControl} from "../../ajax/dwt/widgets/DwtControl";
import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {ZmController} from "../share/controller/ZmController";
import {ZmSearchResultsController} from "../share/controller/ZmSearchResultsController";
import {ZmSearch} from "../share/model/ZmSearch";
import {ZmSearchResult} from "../share/model/ZmSearchResult";
import {ZmSettings} from "../share/model/ZmSettings";
import {ZmOverview, ZmOverviewParams} from "../share/view/ZmOverview";
import {ZmAppViewMgrCreatedViewDescriptor, ZmAppViewMgrCreateViewParams} from "./ZmAppViewMgr";
import {SetNewButtonPropsParams} from "./ZmZimbraMail";

export class ZmApp {

  public static ACTION_CODES_R: {[name: string]: string};
  public static ACTION_CODES: {[name: string]: string};
  public static CLASS: {[name: string]: string};
  public static OPS_R: {[name: string]: string};
  public static SETTING: {[name: string]: string};
  public static MAIN_SESSION: string;
  public static ORGANIZER: {[id: string]: string};
  public static OVERVIEW_TREES: {[appName: string]: string[]};
  public static CALENDAR: string;
  public static PREFERENCES: string = "Options";
  public static BRIEFCASE: string = "Briefcase";
  public static PORTAL: string = "Portal";
  public static MAIL: string = "Mail";
  public static ENABLED_APPS: {[name: string]: boolean} = {};
  public static APPS: string[];
  public static SEARCH: string;
  public static DEFAULT_SEARCH: { [appName: string]: string };
  public static HIDE_ZIMLETS: { [appName: string]: boolean };

  public static registerApp(name: string, params: ZmAppRegisterAppParams): void {}

  public _active: boolean;
  public _container: DwtShell;
  public _overviewPanelContent: ZmOverview;
  public currentSearch: ZmSearch;

  constructor(name: string, container: DwtControl, parentController?: ZmController) {}

  public getSessionController(params: GetSessionControllerParams): ZmController { return undefined; }
  public pushView(name: string, force?: boolean): void {}
  public createView(param: ZmAppViewMgrCreateViewParams): ZmAppViewMgrCreatedViewDescriptor { return undefined; }
  public getNewButtonProps(): SetNewButtonPropsParams { return undefined; }

  public launch(params: ZmAppLaunchParams, callback?: AjxCallback): void {}
  public getOverview(): ZmOverview { return undefined; }
  public getOverviewId(): string { return undefined; }
  public _getOverviewParams(): ZmOverviewParams { return undefined; }
  public _getOverviewTrees(): string[] { return undefined; }
  public getName(): string { return undefined; }
  public _setLaunchTime(appName: string, date: Date): void {}
  public _setLoadedTime(appName: string, date: Date): void {}
  public setOverviewPanelContent(reset?: boolean): void {}
  public isActive(): boolean { return undefined; }
  public popView(force?: boolean, viewId?: string, skipHistory?: boolean): void {}

  // Functions called during construction
  // public _defineAPI(): void {}
  // public _registerSettings(): void {}
  // public _registerOperations(): void {}
  // public _registerItems(): void {}
  public _registerOrganizers(): void {}
  // public _setupSearchToolbar(): void {}
  public _registerApp(): void {}
  public _registerSettings(settings?: ZmSettings): void {}
  public _registerPrefs(): void {} // called when Preferences pkg is loaded

  // Functions that apps can override in response to certain events
  // public startup(result) {} // run during startup
  // public preNotify(notify) {} // run before handling notifications
  // public deleteNotify(ids) {} // run on delete notifications
  // public createNotify(list) {} // run on create notifications
  // public modifyNotify(list) {} // run on modify notifications
  // public postNotify(notify) {} // run after handling notifications
  // public refresh(refresh) {} // run when a <refresh> block arrives
  public handleOp(op: string): void {}  // handle an operation

}

export interface DefineApiApp {
  _defineAPI(): void;
}

export interface RegisterSettingsApp {
  _registerSettings(): void;
}

export interface RegisterOperationsApp {
  _registerOperations(): void;
}

export interface RegisterItemsApp {
  _registerItems(): void;
}

export interface ShowSearchResultsApp {
  showSearchResults(
    results: ZmSearchResult,
    loadCallback: AjxCallback,
    searchResultsController?: ZmSearchResultsController,
  ): void;
}

export interface SearchToolbarApp {
  _setupSearchToolbar(): void;
}

export interface GetInitialSearchTypeApp {
  getInitialSearchType(): string;
}

export interface GetSessionControllerParams {
  controllerClass: string;
  sessionId: string;
  searchResultsController?: ZmSearchResultsController;
}

export interface AppTabParams {
  id: any;
  image: string;
  hoverImage: string;
  text: string;
  textPrecedence: number;
  tooltip: string;
  style: string;
}

export interface ZmAppLaunchParams {}

export interface ZmAppRegisterAppParams {
  mainPkg?: string;
  nameKey?: string;
  icon?: string;
  textPrecedence?: number;
  imagePrecedence?: number;
  // chooserTooltipKey?;
  // viewTooltipKey?;
  // defaultSearch?;
  // organizer?;
  // overviewTrees?;
  // hideZimlets?;
  // searchTypes?;
  // gotoActionCode?;
  // newActionCode?;
  // qsViews?;
  // chooserSort?;
  // defaultSort?;
  // trashViewOp?;
  // upsellUrl?;
  // // quickCommandType
  searchResultsTab?: boolean;

  searchTypes?: string[];
  gotoActionCode?: string;
  // actionCodes?;
  newItemOps?: {[opName: string]: string};
  // newOrgOps?;

  qsViews?: string[];
}
