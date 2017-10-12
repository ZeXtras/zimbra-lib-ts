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
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmApp, ZmAppLaunchParams} from "../../core/ZmApp";
import {ZmZimletAppController} from "../controller/ZmZimletAppController";
import {ZmZimletBase} from "../model/ZmZimletBase";
import {ZmToolBar} from "./ZmToolBar";

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
