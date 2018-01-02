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
import {DwtButton} from "../../../ajax/dwt/widgets/DwtButton";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {DwtToolBar, DwtToolBarButton, DwtToolBarParams} from "../../../ajax/dwt/widgets/DwtToolBar";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {ZmAppButton} from "./ZmAppButton";

export class ZmToolBar extends DwtToolBar {

  public static _setButtonStyle(uploadButton: DwtButton, hint: string, text: string, image: string): void {}

  constructor(params: ZmToolBarParams) {
    super(params);
  }

  public enableAll(enabled: boolean): void {}
  public getButton(id: string): ZmAppButton { return undefined; }
  public addSelectionListener(buttonId: string, listener: AjxListener): void {}
  public createButton(id: string, params: ZmToolBar_CreateButtonParams): DwtToolBarButton { return undefined; }
}

export interface ZmToolBarParams extends DwtToolBarParams {

}

export interface ZmToolBar_CreateButtonParams {
  id?: string;
  text?: string;
  tooltip?: string;
  enabled?: boolean;
  image?: string;
  disImage?: string;
  menu?: DwtMenu | AjxCallback;
}
