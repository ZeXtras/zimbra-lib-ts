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

import {ZmApp} from "../core/ZmApp";
import {ZmBriefcaseController} from "./controller/ZmBriefcaseController";
import {DwtControl} from "../../ajax/dwt/widgets/DwtControl";
import {ZmController} from "../share/controller/ZmController";
import {ZmSearchResultsController} from "../share/controller/ZmSearchResultsController";

export class ZmBriefcaseApp extends ZmApp {

  constructor(container: DwtControl, parentController: ZmController) {
    super(ZmApp.BRIEFCASE, container, parentController);
  }

  public getBriefcaseController(sessionId?: string, searchResultController?: ZmSearchResultsController): ZmBriefcaseController {
    return undefined;
  }

  public handleOp(op: string): void {}

  public containsWritableFolder(): boolean {
    return undefined;
  }

}