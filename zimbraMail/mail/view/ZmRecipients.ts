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

import {DwtSelect} from "../../../ajax/dwt/widgets/DwtSelect";
import {ZmAutocompleteListView} from "../../share/view/ZmAutocompleteListView";
import {ZmComposeView} from "./ZmComposeView";

export class ZmRecipients {

  /**
   * Attention to the modifications introduced in Zimbra 8.6
   * @param {ZmComposeView} parent
   * @param {string} viewId
   * @param {string} htmlElId
   * @param {string[]} fieldNames
   * @param {string} bccToggleId @deprecated in Zimbra 8.6
   */
  public createRecipientHtml(
    parent: ZmComposeView,
    viewId: string,
    htmlElId: string,
    fieldNames: string[],
    bccToggleId?: string,
  ): void {}
  public getACAddrSelectList(): ZmAutocompleteListView { return undefined; }
  public attachFromSelect(fromSelect: DwtSelect): void {}
}
