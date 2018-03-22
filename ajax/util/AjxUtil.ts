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

export class AjxUtil {
  public static FULL_URL_RE: RegExp;

  public static isEmpty(hash: any): boolean { return undefined; }
  public static arrayAsHash(array: any[], valueOrFunc?: any): any { return undefined; }
  public static toArray(obj: any|any[]): any[] { return undefined; }
  public static arraySize(arr: any[]|{[key: string]: any}): number { return undefined; }
  public static arrayContains(arr: any[], item: any): boolean { return undefined; }

  public static formatSize(size: number|(() => number)|string): string {
    return undefined;
  }
}
