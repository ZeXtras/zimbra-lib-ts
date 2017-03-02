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

import {ZmListController} from "../../share/controller/ZmListController";
import {DwtControl} from "../../../ajax/dwt/widgets/DwtControl";
import {ZmApp} from "../../core/ZmApp";
import {ZmSearchResultsController} from "../../share/controller/ZmSearchResultsController";
import {ZmBriefcaseItem} from "../model/ZmBriefcaseItem";

export class ZmBriefcaseController extends ZmListController {

  constructor(container: DwtControl, app: ZmApp, type: string, sessionId: string, searchResultsController: ZmSearchResultsController) {
    super(container, app, type, sessionId, searchResultsController);
  }

  public editFile(items: ZmBriefcaseItem[]): void;
  public editFile(items: ZmBriefcaseItem): void;
  public editFile(items: any): void {
  }

}
