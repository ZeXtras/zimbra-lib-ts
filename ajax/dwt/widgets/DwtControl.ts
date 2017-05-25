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

import {AjxListener} from "../../events/AjxListener";
import {DwtEvent} from "../events/DwtEvent";
import {DwtPoint} from "../graphics/DwtPoint";
import {DwtComposite} from "./DwtComposite";
import {AjxEventMgr} from "../../events/AjxEventMgr";
import {DwtDragSource} from "../dnd/DwtDragSource";
import {DwtDropTarget} from "../dnd/DwtDropTarget";
import {AjxCallback} from "../../boot/AjxCallback";

export class DwtControl {

  public static ALL_BY_ID: {[id: string]: DwtControl}; // TODO: Should be Private.
  public static ABSOLUTE_STYLE: string;
  public static STATIC_STYLE: string;

  public static findControl(focusObj: HTMLElement): DwtControl { return undefined; }

  public isDwtControl: boolean;
  public parent: DwtControl;
  public items: DwtControl[];
  public _data: {};
  public _htmlElId: string;
  public _dndScrollId: string;
  public TEMPLATE: string;
  public _evtMgr: AjxEventMgr;

  public constructor(params: DwtControlParams) {}
  public addListener(eventType: string, listener: AjxListener, index?: number): boolean { return undefined; }
  public addControlListener(listener: AjxListener, index?: number): boolean { return undefined; }
  public notifyListeners(eventType: string, event?: DwtEvent): any {}
  public setZIndex(idx: number): void {}
  public _position(loc: DwtPoint): void {}
  public _createHtmlFromTemplate(templateId: string, data?: {[name: string]: any}): void {}
  public getHtmlElement(): HTMLElement { return undefined; }
  public setScrollStyle(style: number): void {}
  public getSize(getFromStyle?: boolean): DwtPoint { return undefined; }
  public setSize(width: number|string, height: number|string): void {}
  public setData(key: string, data: any): void {}
  public getData(key: string): any { return undefined; }
  public setVisible(visible: boolean): void {}
  public getVisible(): boolean { return undefined; }
  public setEnabled(enabled: boolean): void {}
  public getEnabled(): boolean { return undefined; }

  public setToolTipContent(toolTip: string, useBrowser?: boolean): void;
  public setToolTipContent(toolTip: AjxCallback): void;
  public setToolTipContent(toolTip: any, useBrowser?: boolean): void {}

  public isListenerRegistered(evType: string): boolean { return null; }
  public reparent(newParent: DwtComposite, index?: number): void {}
  public reparentHtmlElement(newParent: string|HTMLElement|Node, position?: number): void {}
  public getBounds(): {x: number, y: number, width: number, height: number} {
    return {x: 0, y: 0, width: 0, height: 0};
  }
  public setBounds(x: number, y: number, width: number, height: number): void {}
  public getHTMLElId(): string { return null; }
  public getZIndex(getFromStyle?: boolean): number { return undefined; }
  public setLocation(x: number|string, y: number|string): DwtControl { return undefined; }
  public getLocation(): DwtPoint { return undefined; }
  public setDisplay(displayValue: string): void {}
  public getVisibility(): boolean { return undefined; }
  public setSelected(selected: boolean): void {};
  public getClassName(): string { return undefined; }
  public removeAllListeners(type?: string): boolean { return undefined; }
  public replaceElement(oel: HTMLElement|string, nel?: HTMLElement|string, inheritClass?: boolean, inheritStyle?: boolean): void {}
  public hasFocus(): boolean { return undefined; }
  public focus(): void {}
  public setDragSource(dragSource: DwtDragSource): void {}
  public setDropTarget(dragTarget: DwtDropTarget): void {}
  public _setEventHdlrs(events: string[], clear?: boolean, element?: HTMLElement): void {}
  public setHandler(eventType: string, hdlrFunc: (ev: DwtEvent) => boolean): void {}
  public setContent(html: string): void {}
  public _dndScrollCallback(params: DwtControl_DndScrollCallbackParams, ev: DwtEvent): void {}

}

export interface DwtControlParams {
  parent?: DwtControl;
  className?: string;
  posStyle?: string;
  deferred?: boolean;
  id?: string;
  parentElement?: string|HTMLElement;
  index?: number;
  template?: string;
  tooltip?: string;
}

interface DwtControl_DndScrollCallbackParams {
  container: Element;
  threshold: number;
  amount: number;
  interval: number;
  id: string;
}
