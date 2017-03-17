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

import {DwtComposite, DwtCompositeParams} from "../../../ajax/dwt/widgets/DwtComposite";
import {ZmAutocomplete} from "../model/ZmAutocomplete";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";

export class ZmAutocompleteListView extends DwtComposite {

  public static CB_COMPLETION: string;

  constructor(params: ZmAutocompleteListViewParams) {
    super(params);
  }

  public handle(inputElement: HTMLInputElement, addrInputId?: string): void {}
  public addCallback(type: string, callback: AjxCallback|Function, inputId?: string): void {}

}

export interface ZmAutocompleteListViewParams extends DwtCompositeParams {
  dataClass: ZmAutocomplete;
  matchValue: string;
}
