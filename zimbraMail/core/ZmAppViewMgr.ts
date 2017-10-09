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

import {DwtControl} from "../../ajax/dwt/widgets/DwtControl";
import {ZmController} from "../share/controller/ZmController";
import {AppTabParams} from "./ZmApp";
import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {AjxCallback} from "../../ajax/boot/AjxCallback";

export class ZmAppViewMgr {

  public static C_NEW_BUTTON: string;
  public static C_TOOLBAR_TOP: string;
  public static C_APP_CONTENT: string;
  public static CB_POST_SHOW: string;
  public static CB_PRE_SHOW: string;
  public static CB_POST_HIDE: string;
  public static LEFT_NAV: string[];
  public static C_TREE: string;
  public static C_TREE_FOOTER: string;

  public static APP: string;
  public static GLOBAL: string;

  public _toRemove: string[];

  public _getView(viewId: string, app?: string): ZmAppViewMgrCreatedViewDescriptor { return undefined; }
  public getViewComponent(componentId: string, viewId?: string): DwtControl { return undefined; }
  public setViewComponents(viewId: string, components: {[name: string]: DwtControl}, show: boolean, app?: string): void {}
  public getCurrentView(viewId?: string): DwtControl { return undefined; }
  public displayComponent(cid: string, show: boolean, doFit?: boolean, comp?: DwtControl, noReflow?: boolean): void {}
  public createView(params: ZmAppViewMgrCreateViewParams): ZmAppViewMgrCreatedViewDescriptor { return undefined; }
  public pushView(id: string): void {}
  public popView(force: boolean, viewId: number, skipHistory?: boolean): void {}
  public getAppView(appName: string): string { return undefined; }
  public setHiddenComponents(viewId: string, cidList: string[], hide: boolean, app?: string): void {}
  public showSkinElement(cid: string, show: boolean, noReflow?: boolean): void {}

}

export interface ZmAppViewMgrCreateViewParams {
  viewId?: string;
  viewType: string;
  elements: {[name: string]: DwtControl};
  hide?: string[];
  controller?: ZmController;
  callbacks?: {[op: string]: Function};
  tabParams?: AppTabParams;
  noPush?: boolean;
  isAppView?: boolean;
}

export interface ZmAppViewMgrCreatedViewDescriptor {
  id: string;
  type: string;
  component: {[name: string]: DwtComposite};
  controller: ZmController;
  callback: {[name: string]: AjxCallback};
  app: string;
  isAppView: boolean;
  isTransient: boolean;
  isFullScreen: boolean;
  hide:	{[name: string]: boolean};
}
