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

import {ZmModel} from "./ZmModel";

export class ZmSetting extends ZmModel {

  public static CLIENT_VERSION: string = "CLIENT_VERSION";
  public static ADMIN_DELEGATED: string = "ADMIN_DELEGATED";
  public static BRIEFCASE_ENABLED: string;
  public static HTML_COMPOSE_ENABLED: string;
  public static SIGNATURES_ENABLED: string;
  public static MAIL_READ_RECEIPT_ENABLED: string;
  public static DISPLAY_EXTERNAL_IMAGES: string;
  public static MAIL_PRIORITY_ENABLED: string;
  public static CALENDAR_ENABLED: string;
  public static LOCALE_NAME: string;
  public static MARK_MSG_READ: string;
  public static MARK_READ_NOW: string;
  public static MARK_READ_NONE: string;
  public static VIEW_AS_HTML: string;
  public static SORTING_PREF: string;
  public static COMPOSE_AS_FORMAT: string;
  public static COMPOSE_HTML: string;
  public static READING_PANE_LOCATION_BRIEFCASE: string;
  public static RP_OFF: string;
  public static RP_BOTTOM: string;
  public static RP_RIGHT: string;
  public static GAL_ENABLED: string;

  public setValue(value: any, key?: string, setDefault?: boolean, skipNotify?: boolean, skipImplicit?: boolean): void {}
  public getValue(key?: string, serialize?: boolean): any { return undefined; }

}