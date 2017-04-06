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

import {DwtUiEvent} from "./DwtUiEvent";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmBriefcaseTabView} from "../../briefcase/view/dialog/ZmBriefcaseTabView";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";

export class DwtMouseEvent extends DwtUiEvent {

  public static LEFT: number;
  public static RIGHT: number;

  public elementX: number;
  public button: number;

  public getUploadCallback(): AjxCallback { return undefined; }
  public setUploadCallback(callback: AjxCallback): void {}
  public setFooter(html: string): void {}
  public getBriefcaseView(): ZmBriefcaseTabView { return undefined; }
  public getMyComputerView(): ZmMyComputerTabViewPage { return undefined; }
  public enableInlineOption(enable: boolean): void {}
  public setInline(isInline: boolean): void {}

}

export class ZmMyComputerTabViewPage extends DwtComposite {
}
