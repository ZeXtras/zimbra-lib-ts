/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
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
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */

import {ZmApp, ZmAppLaunchParams} from "../../core/ZmApp";
import {ZmZimletAppController} from "../controller/ZmZimletAppController";
import {ZmToolBar} from "./ZmToolBar";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmZimletBase} from "../model/ZmZimletBase";

export class ZmZimletApp extends ZmApp {

  public _controller: ZmZimletAppController;

  constructor(name: string, zimlet: ZmZimletBase, container: DwtControl) {
    super(name, container);
  }

  public getController(): ZmZimletAppController { return undefined; }
  public getToolbar(): ZmToolBar { return undefined; }
  public setContent(html: string): void {}
  public setView(view: DwtComposite): void {}
  public launch(params?: ZmZimletAppLaunchParams, callback?: AjxCallback): void {}
  public activate(active: boolean, viewId: string): void {}

}

export interface ZmZimletAppLaunchParams extends ZmAppLaunchParams {
}

