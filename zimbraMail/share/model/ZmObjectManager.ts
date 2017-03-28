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

import {ZmMailMsgCapsuleView} from "../../mail/view/ZmConvView2";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmObjectHandler} from "./ZmObjectHandler";

export class ZmObjectManager {
  public static DATE: string;
  public static ATTR_CURRENT_DATE: string;
  public __hasSmileysHandler?: boolean;
  public __hasEmojiHandler?: boolean;
  public _objectIdPrefix: string;

  public static registerHandler(obj: Object, type: number, priority: number) {}

  constructor(view: DwtComposite, selectCallback?: AjxCallback, skipHandlers?: boolean) {}

  public getView(): ZmMailMsgCapsuleView { return undefined; }
  /** @deprecated Soon will be deprecated, use @see{ZmObjectManager.prototype.findObjectsInNode} */ public processObjectsInNode(doc: Document, node: HTMLElement): HTMLElement { return undefined; }
  public findObjectsInNode(node: HTMLElement, re_discard?: RegExp, re_allow?: RegExp, callbacks?: AjxCallback[]): HTMLElement { return undefined; }
  public setHandlerAttr(type: string, name: string, value: any): void {}
  public addHandler(h: ZmObjectHandler, type?: string, priority?: number): void {}
  public removeHandler(h: ZmObjectHandler, type?: string): void {}
  public sortHandlers(): void {}

}
