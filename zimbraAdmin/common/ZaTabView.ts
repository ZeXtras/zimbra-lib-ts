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

import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {XFormObjectBase} from "../../ajax/dwt/xforms/XFormItem";
import {ZaItem} from "./ZaItem";

export class ZaTabView extends DwtComposite {
  public static XFormModifiers: {[name: string]: Array<(xFormObject: XFormObjectBase, entry?: any) => void>};
  public TAB_INDEX: number;
  public setObject(entry: ZaItem): void {}
}
