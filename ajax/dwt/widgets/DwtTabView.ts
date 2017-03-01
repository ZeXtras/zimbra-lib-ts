/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
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
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtComposite} from "./DwtComposite";
import {DwtPropertyPage} from "./DwtPropertyPage";
import {DwtButton} from "./DwtButton";
import {AjxCallback} from "../../boot/AjxCallback";
import {DwtTabGroup} from "../keyboard/DwtTabGroup";

export class DwtTabView extends DwtComposite {

  public addTab(title: string, tabViewOrCallback: DwtTabViewPage, buttonId: string, index: number): string;
  public addTab(title: string, tabViewOrCallback: AjxCallback, buttonId: string, index: number): string;
  public addTab(title: string, tabViewOrCallback: any, buttonId: string, index: number): string {
    return undefined;
  }
  public getTabButton(tabKey: string): DwtTabButton { return undefined; }
  public getTabGroupMember(): DwtTabGroup { return undefined; }

}

export class DwtTabButton extends DwtButton {
}

export class DwtTabViewPage extends DwtPropertyPage {
}
