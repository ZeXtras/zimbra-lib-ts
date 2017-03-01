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

export class AjxMessageFormat {

  static format(origString: string, substitutions?: string[]|string): string { return undefined; }

  constructor(pattern: string) {}

  public format(params: string[] | string): string { return undefined; }

}

export class AjxFormat {
  public format(obj: any): any { return undefined; }
}

export class AjxDateFormat extends AjxFormat {
  public static LONG: number;
  public static SHORT: number;
  public static _DATETIME_FORMATTERS: {[style: number]: AjxDateFormat};

  public static getDateTimeInstance(dateStyle: number, timeStyle: number): AjxDateFormat {
    let style: number = dateStyle * 10 + timeStyle;
    return AjxDateFormat._DATETIME_FORMATTERS[style];
  }
}