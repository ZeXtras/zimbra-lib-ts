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

export class ZmId {

  public static OP_NEW_DOC: string;
  public static VIEW_LOADING: string;
  public static VIEW_APPOINTMENT: string;
  public static VIEW_CONVLIST: string;
  public static VIEW_CONV: string;
  public static VIEW_TRAD: string;
  public static VIEW_CONTACT_SIMPLE: string;
  public static VIEW_CAL_DAY: string;
  public static OP_ACTIONS_MENU: string;
  public static VIEW_APPOINTMENT_READONLY: string;
  public static CMP_PRIORITY: string;
  public static CMP_ATT_BTN: string;
  public static SEARCH: string;

  public static getButtonId(context: string, op: string, tbType?: string): string { return undefined; }
  public static getViewId(viewId: string, component?: string, context?: string): string { return undefined; }
  public static getMenuItemId(context: string, op: string, menuType?: string): string { return undefined; }

}
