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

import {ZaItem} from "../../../zimbraAdmin/common/ZaItem";
import {ZmItem} from "../../../zimbraMail/share/model/ZmItem";
import {AjxVector} from "../../util/AjxVector";
import {DwtEvent} from "../events/DwtEvent";
import {DwtListViewActionEvent} from "../events/DwtListViewActionEvent";
import {DwtMouseEvent} from "../events/DwtMouseEvent";
import {DwtSelectionEvent} from "../events/DwtSelectionEvent";
import {DwtComposite, DwtCompositeParams} from "./DwtComposite";

export class DwtListView extends DwtComposite {

  public static ITEM_DBL_CLICKED: number;
  public static ITEM_SELECTED: number;
  public static ITEM_DESELECTED: number;
  public static ROW_CLASS: string;
  public static HEADERITEM_HEIGHT: number;

  public _rightSelItem: HTMLElement;
  public _kbAnchor: HTMLElement;
  public _selAnchor: HTMLElement;
  public _selectedItems: AjxVector<any>;
  public multiSelectEnabled?: boolean;
  public _styleRe: RegExp;
  public _selEv: DwtSelectionEvent;
  public _rightClickClass: string;
  public _kbFocusClass: string;
  public _selectedClass: string;
  public _actionEv: DwtListViewActionEvent;
  public offset: number;
  public _headerList: DwtListHeaderItem[];
  public _rowHeight: number;
  public _parentEl: HTMLDivElement;
  public _view: string;

  // constructor(form: XForm, cssClass: string, unknown: any, headerList: DwtListHeaderItem[]);
  constructor(params: DwtListViewParams) {
    super(params);
  }

  public _getCellContents(
    htmlArr: string[],
    idx: number,
    item: any,
    field: string,
    colIdx: number,
    params: {now?: Date},
    classes?: string[],
  ): number { return undefined; }
  public getSelectedItems(): AjxVector<ZmItem> { return undefined; }
  public deselectAll(): void {}
  public _markUnselectedViewedItem(on: boolean): void {}
  public getSelection(): any[] { return undefined; }
  public setSelection(item: any, skipNotify?: boolean, forceSelection?: boolean): void {}
  public getSelectionCount(): number { return undefined; }
  public _itemClicked(clickedEl: HTMLDivElement, ev: DwtMouseEvent): void {}
  public _itemSelected(itemDiv: HTMLElement, ev: DwtMouseEvent): void {}
  public _getChildren(): any {}
  public _setListEvent(ev: DwtEvent, ev2: DwtEvent, el: HTMLElement): void {}
  public setMultiSelection(clickedEl: HTMLElement, bContained: boolean, ev: DwtMouseEvent): void {}
  public isMultiSelectEnabled(): boolean { return undefined; }
  public getItemFromElement(el: HTMLElement): any {}
  public _setKbFocusElement(next: boolean|HTMLElement): void {}
  public set(list: AjxVector<any>, defaultColumnSort?: string, noResultsOk?: boolean): void {}
  public _getLastColumnIndex(): number { return undefined; }
  public _resetColWidth(): void {}
  public _getFieldId(item: any, field: string): string { return undefined; }
  public _getItemId(item: ZmItem): string { return undefined; }
  public removeItem(listItem: any): void {}
  public redrawItem(item: any): void {}
  public getTargetItemDiv(ev: DwtEvent): any { return undefined; }
  public dragSelect(row: HTMLElement): void {}
  public dragDeselect(row: HTMLElement): void {}
  public associateItemWithElement(
    item: any, element: Element,
    type?: string,
    id?: string,
    data?: {[id: string]: any},
    ): void {}
  public getDnDSelection(): any|AjxVector<any> { return undefined; }

}

export interface DwtListViewParams extends DwtCompositeParams {
  headerList?: DwtListHeaderItem[];
  noMaximize?: boolean;
}

export class DwtListHeaderItem {

  public static sortCompare(a: any, b: any): number {
    return void 0;
  }

  public _field: string;

  constructor(params: DwtListHeaderItemParams) {}

  public isDwtListHeaderItem(): boolean {
    return void 0;
  }

}

export interface DwtListHeaderItemParams {
  field?: string;
  text?: string;
  icon?: string;
  width?: string|number;
  sortable?: boolean|string;
  resizeable?: boolean;
  visible?: boolean;
  name?: string|boolean;
  align?: number|string;
  noRemove?: boolean;
  view?: string;
  noSortArrow?: boolean;
  tooltip?: string;
  cssClass?: string;
}
