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
import {DwtMenu} from "./DwtMenu";
import {DwtSelectionEvent} from "../events/DwtSelectionEvent";
import {DwtEvent} from "../events/DwtEvent";
import {DwtMouseEvent} from "../events/DwtMouseEvent";

export class DwtTreeItem extends DwtComposite {

  public actionMenu: DwtMenu;
  public _nodeCell: HTMLElement;
  public _childDiv: HTMLElement;
  public _extraCell: HTMLElement;
  public _treeItemExtraImgClass: string;
  public isDwtTreeItem: boolean;

  constructor(params: DwtTreeItemParams) {
    super(params);
  }

  public enableSelection(enableSelection: boolean): void {}
  public enableAction(enableSelection: boolean): void {}
  public setExpanded(expanded: boolean, recurse?: boolean, skipNotify?: boolean): void {}
  public getExpanded(): boolean { return undefined; }
  public setVisible(visible?: boolean, itemOnly?: boolean, childOnly?: boolean): void {}
  public _setSelected(selected: boolean, noFocus?: boolean): void {}
  public getText(): string { return null; };
  public setText(text: string): void {};
  public setImage(image: string): void {};
  public onAction(event: DwtSelectionEvent): void {};
  public getData(key: string): any { return undefined; }
  public getChildren(): DwtTreeItem[] { return undefined; };
  public _initialize(index?: number, realizeDeferred?: boolean, forceNode?: boolean): void {}
  public showExpansionIcon(show: boolean): void {}
  public _realizeDeferredChildren(): void {}
  public _expand(expand: boolean, ev: DwtEvent, skipNotify: boolean): void {}
  public sort(compareFunction: (a: any, b: any) => number): void {}
  public showCheckBox(show: boolean): void {}
  public getChecked(): boolean { return undefined; }
  public setChecked(check: boolean, force?: boolean): void {}
  public _handleCheckboxOnclick(ev: DwtMouseEvent): void {}

}

export interface DwtTreeItemParams extends DwtCompositeParams {
  text: string;
  selectable?: boolean;
  dndScrollCallback?: Function;
  dndScrollId?: string;
  arrowDisabled?: boolean;
  imageInfo?: string;
}
