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

export class ZmMimeTable {

  public static APP_ZIMBRA_DOC: string;
  public static TEXT_HTML: "text/html";
  public static TEXT_PLAIN: "text/plain";

  public static _table: {[mime: string]: ZmMimeInfoData};

  public static getInfo(mimeType: string): ZmMimeInfoData { return undefined; }
  public static isWebDoc(mimeType: string): boolean { return undefined; }
  public static isRenderable(mimetype: string): boolean { return undefined; }
  public static isMultiMedia(mimetype: string): boolean { return undefined; }
}

export interface ZmMimeInfoData {
  desc: string;
  image: string;
  imageLarge: string;
  query?: string;
}
