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

import {ZmList} from "../../share/model/ZmList";
import {ZmItem} from "../../share/model/ZmItem";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmMailItem} from "./ZmMailItem";

export class ZmMailList extends ZmList {

  public _getTcon(items: ZmItem[], nFromFolderId: string): string { return undefined; }
  public markRead(params: ZmMailListMarkReadParam): void {}

}

export interface ZmMailListMarkReadParam {
  items: ZmMailItem|ZmMailItem[];
  value: boolean;
  callback?: AjxCallback;
  finalCallback?: AjxCallback;
  count?: number;
  /** @deprecated injected in @see ZmMsgController */ noBusyOverlay?: boolean;
}