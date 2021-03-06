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

import {DwtButton} from "../../../ajax/dwt/widgets/DwtButton";
import {DwtToolBarButton} from "../../../ajax/dwt/widgets/DwtToolBar";
import {ZmOperation} from "../../core/ZmOperation";
import {ZmToolBar, ZmToolBarParams} from "./ZmToolBar";

export class ZmButtonToolBar extends ZmToolBar {

  public opList: string[];

  constructor(params: ZmButtonToolBarParams) {
    super(params);
  }

  public getOp(id: string): DwtToolBarButton {
    return undefined;
  }

  public createOp(id: string, params: CreateOpParams): DwtToolBarButton {
    return undefined;
  }

  public addOp(id: string, buttonIndex: number): void {}

  public enable(buttonsId: string[], enable: boolean): void {}
  public enableAll(enable: boolean): void {}
}

export interface ZmButtonToolBarParams extends ZmToolBarParams {
  buttons: string[];
  context: string;
}

export interface CreateOpParams {
  image: string;
  text: string;
  tooltip: string;
  index: number;
}
