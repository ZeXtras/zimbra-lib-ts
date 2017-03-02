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

import {ZmItem} from "./ZmItem";
import {AjxVector} from "../../../ajax/util/AjxVector";
import {AjxEmailAddress} from "../../../ajax/util/AjxEmailAddress";

export class ZmMailItem extends ZmItem {

  public readReceiptRequested?: boolean;
  public _loaded: boolean;
  public isUnread: boolean;
  /** @deprecated Injected by @see ZmMailListController, ZmDoublePaneController*/ public _loadPending?: boolean;
  public participants: AjxVector<AjxEmailAddress>;

  public _parseParticipantNode(node: ZmMailItemPartecipantNode): void {}

}

export interface ZmMailItemPartecipantNode {
  a: string;
  d: string;
  p: string;
  t: "b"|"c"|"f"|"n"|"r"|"rf"|"s"|"t";
  isGroup?: boolean;
  exp?: boolean;
}
