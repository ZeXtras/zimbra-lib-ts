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

import {AjxCallback} from "../../boot/AjxCallback";
import {AjxListener} from "../../events/AjxListener";
import {DwtTabGroup} from "../keyboard/DwtTabGroup";
import {DwtButton} from "./DwtButton";
import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtPropertyPage} from "./DwtPropertyPage";

export class DwtTabView extends DwtComposite {

  constructor(params: DwtTabViewParams) {
    super(params);
  }
  public addTab(
    title: string,
    tabViewOrCallback: DwtTabViewPage|AjxCallback|any,
    buttonId?: string,
    index?: number,
  ): number {
    return undefined;
  }
  public getTabButton(tabKey: number): DwtTabButton { return undefined; }
  public getTabGroupMember(): DwtTabGroup { return undefined; }
  public switchToTab(tabKey: number): void {}
  public getCurrentTab(): number { return undefined; }
  public addStateChangeListener(listener: AjxListener): void {}

}

export interface DwtTabViewParams extends DwtCompositeParams {}

export class DwtTabButton extends DwtButton {
}

export class DwtTabViewPage extends DwtPropertyPage {

  public _tabKey: number;

}
