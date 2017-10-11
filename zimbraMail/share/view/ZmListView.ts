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
import {DwtDropTarget} from "../../../ajax/dwt/dnd/DwtDropTarget";
import {DwtMouseEvent} from "../../../ajax/dwt/events/DwtMouseEvent";
import {
  DwtListHeaderItem, DwtListView,
  DwtListViewParams,
} from "../../../ajax/dwt/widgets/DwtListView";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {AjxVector} from "../../../ajax/util/AjxVector";
import {ZmListController} from "../controller/ZmListController";
import {ZmItem} from "../model/ZmItem";
import {ZmList} from "../model/ZmList";

export class ZmListView extends DwtListView {

  public static COL_WIDTH_ICON: number;

  public _controller: ZmListController;
  public _listDiv: HTMLElement;
  public _folderId?: number;
  public _state: ZmListViewStateObject;

  constructor(params: ZmListViewParams) { super(params); }
  public getList(): AjxVector<any> { return undefined; }
  public getItemList(): ZmList { return undefined; }
  public _restoreState(state?: ZmListViewStateObject): void {}
  public _saveState(state?: ZmListViewSaveStateObject): void {}
  public _getImageHtml(
    htmlArr: string[],
    idx: number,
    image: string,
    id: string,
    classes: string[] = [],
  ): number { return undefined; }
  public _sortColumn(
    columnItem: DwtListHeaderItem,
    sortAsc: boolean,
    callback?: AjxCallback,
  ): void { return undefined; }
  public addSelectionListener(listener: AjxListener): void {}
  public _mouseDownAction(mouseEv: DwtMouseEvent, div: HTMLElement) {}

}

export interface ZmListViewParams extends DwtListViewParams {
  type: string;
  controller: ZmListController;
  pageless?: boolean;
  dropTgt?: DwtDropTarget;
}

export interface ZmListViewStateObject {
  anchorItem: ZmItem;
  focused: boolean;
  rowHeight: number;
  scrollTop: boolean;
  selected: ZmItem[];
}

export interface ZmListViewSaveStateObject {
  selection: boolean;
  focus: boolean;
  scroll: boolean;
  expansion: boolean;
}
