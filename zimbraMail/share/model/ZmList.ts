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

import {ZmListController} from "../controller/ZmListController";
import {ZmModel} from "./ZmModel";
import {ZmSearch} from "./ZmSearch";
import {ZmItem} from "./ZmItem";

export class ZmList  extends ZmModel {

  public get(index: number): ZmItem {return undefined};
  public getArray(): ZmItem[] { return undefined; }
  public size(): number { return undefined; }
  public contains(element: ZmItem): boolean { return undefined; }
  public add(element: ZmItem, index?: number): void {}
  public remove(element: ZmItem): void {}

  public controller: ZmListController;

  constructor(type: string, search?: ZmSearch) {
    super(type);
  }

  public setHasMore(more: boolean): void {}

}
