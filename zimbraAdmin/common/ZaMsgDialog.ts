/*
 * ZeXtras' Zimbra API for Zimlet building
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This file is part of ZeXtras' Zimbra API for Zimlet building.
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
 * along with ZeXtras' Zimbra API for Zimlet building. If not, see <http://www.gnu.org/licenses/>.
 */

import {DwtMessageDialog} from "../../ajax/dwt/widgets/DwtMessageDialog";
import {DwtDialog_ButtonDescriptor} from "../../ajax/dwt/widgets/DwtDialog";

export class ZaMsgDialog extends DwtMessageDialog {

  public static CLOSE_TAB_DELETE_BUTTON: string;
  public static CLOSE_TAB_DELETE_BUTTON_DESC: DwtDialog_ButtonDescriptor;

  public static NO_DELETE_BUTTON: string;
  public static NO_DELETE_BUTTON_DESC: DwtDialog_ButtonDescriptor;

}