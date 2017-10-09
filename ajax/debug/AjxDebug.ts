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

export class AjxDebug {

  public static DEFAULT_TYPE: string;
  public static RPC: string;
  public static NOTIFY: string;
  public static EXCEPTION: string;
  public static CALENDAR: string;
  public static REPLY: string;
  public static SCROLL: string;
  public static BAD_JSON: string;
  public static PREFS: string;
  public static PROGRESS: string;
  public static REMINDER: string;
  public static TAG_ICON: string;
  public static DATA_URI: string;
  public static MSG_DISPLAY: string;
  public static ZIMLET: string;
  public static DBG1: string;
  public static FOCUS: string;

  public println(msg: string): void;
  public println(level: string, msg: string, linkName?: string): void;
  public println(level: string, msg?: string, linkName?: string): void {}
  public dumpObj(level: string, obj: any, linkName?: string): void {}
}

export let DBG: AjxDebug;
