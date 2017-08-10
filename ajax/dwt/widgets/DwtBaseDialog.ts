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

import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtControl} from "./DwtControl";
import {DwtShell} from "./DwtShell";
import {DwtTabGroup} from "../keyboard/DwtTabGroup";
import {DwtPoint} from "../graphics/DwtPoint";

export class DwtBaseDialog extends DwtComposite {

  public static MODELESS: number;
  public static MODAL: number;

  protected _titleBarEl: HTMLElement;
  protected _titleEl: HTMLElement;
  protected _contentEl: HTMLElement;
  protected _title: string;
  protected _dragHandleId: string;
  protected _shell: DwtShell;
  protected _tabGroup: DwtTabGroup;
  protected _zIndex: number;
  protected _mode: number;
  protected _loc: DwtPoint;
  protected _poppedUp: boolean;

  protected CONTROLS_TEMPLATE: string;

  public constructor(params: DwtBaseDialogParams) {
    super(params);
  }

  public popdown(): void {}

  public setContent(text: string): void {}

  public setView(newView: DwtControl): void {}

  protected _getContentHtml(): string {
    return void 0;
  }

  public _initializeDragging(dragHandleId?: string): void {}

  public _createHtmlFromTemplate(templateId: string, data?: {[name: string]: any}): void {}

  public isPoppedUp(): boolean {
    return void 0;
  }

  public cleanup(bPoppedUp: boolean): void {}

  protected _resetTabFocus(): void {}

  protected _setModalEffect(thisZ?: number): number {
    return void 0;
  }

  public popup(loc?: DwtPoint): void {}

  public setTitle(title: string): void {}

  protected _getContentDiv(): HTMLElement { return undefined; }

  protected _dragStart(point: number[]): void {}
  protected _duringDrag(point: number[]): void {}
  protected _dragEnd(point: number[]): void {}

}

export interface DwtBaseDialogParams extends DwtCompositeParams {
  title?: string;
  loc?: DwtPoint;
  mode?: number;
  view?: DwtComposite;
  dragHandleId?: string;
  zIndex?: number;
}
