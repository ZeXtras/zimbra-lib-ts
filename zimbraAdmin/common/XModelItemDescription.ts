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

import {XModelItemInt} from "../../ajax/dwt/xforms/XModelItemInt";
/**
 * This class is introduced to define the XModel JSON description.
 * Zimbra does not use this class, neither You should instantiate this class.
 */
export interface XModelItemDescription extends XModelItemInt {
  id: string;
  ref?: string;
  type?: string;
  setterScope?: string;
  getterScope?: string;
  defaultValue?: any;
  managedByZeXtras?: boolean;
  constraints?;
}
