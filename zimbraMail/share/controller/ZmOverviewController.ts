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

import {ZmOverview, ZmOverviewParams} from "../view/ZmOverview";
import {ZmTreeView} from "../view/ZmTreeView";
import {ZmController} from "./ZmController";
import {ZmTreeController} from "./ZmTreeController";

export class ZmOverviewController extends ZmController {

  public static CONTROLLER: {[appName: string]: string};

  public _overview: {[overviewId: string]: ZmOverview};

  public getOverview(overviewId: string): ZmOverview { return undefined; }
  public getTreeView(overviewId: string, treeId: string): ZmTreeView { return undefined; }

  public getTreeController(id: string): ZmTreeController { return undefined; }

  public createOverview(ovParams: ZmOverviewParams): ZmOverview { return undefined; }
}
