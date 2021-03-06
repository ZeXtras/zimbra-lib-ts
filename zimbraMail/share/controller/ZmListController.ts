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
import {DwtDragEvent} from "../../../ajax/dwt/dnd/DwtDragEvent";
import {DwtDropEvent} from "../../../ajax/dwt/dnd/DwtDropEvent";
import {DwtDropTarget} from "../../../ajax/dwt/dnd/DwtDropTarget";
import {DwtListViewActionEvent} from "../../../ajax/dwt/events/DwtListViewActionEvent";
import {DwtSelectionEvent} from "../../../ajax/dwt/events/DwtSelectionEvent";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {ZmApp} from "../../core/ZmApp";
import {ZmMailMsg} from "../../mail/model/ZmMailMsg";
import {ZmList} from "../model/ZmList";
import {ZmSearchResult} from "../model/ZmSearchResult";
import {ZmListView} from "../view/ZmListView";
import {ZmBaseController} from "./ZmBaseController";
import {ZmSearchResultsController} from "./ZmSearchResultsController";

export class ZmListController extends ZmBaseController {

  public _list: ZmList;
  public _listView: {[name: string]: ZmListView};
  public _dropTgt?: DwtDropTarget;

  constructor(
    container: DwtControl,
    app: ZmApp,
    type: string,
    sessionId: string,
    searchResultsController: ZmSearchResultsController,
  ) {
    super(
      container,
      app,
      type,
      sessionId,
      searchResultsController,
    );
  }

  public getListView(): ZmListView { return null; }
  public _dragListener(ev: DwtDragEvent): void {}
  public _dropListener(ev: DwtDropEvent): void {}
  public _listSelectionListener(event: DwtSelectionEvent): void {}
  public _listActionListener(event: DwtListViewActionEvent): void {}
  public setList(list: ZmList): void {}
  public getList(): ZmList { return undefined; }
  public _resetNavToolBarButtons(view?: string): void {}
  public getActionMenu(): DwtMenu { return undefined; }

  public show(
    msg: any,
    parentController?: ZmListController|string,
    callback?: AjxCallback,
    markRead?: boolean,
    hidePagination?: boolean,
    forceLoad?: boolean,
    noTruncate?: boolean,
  ): void {}

  public _initializeToolBar(view: string): void {}

}
