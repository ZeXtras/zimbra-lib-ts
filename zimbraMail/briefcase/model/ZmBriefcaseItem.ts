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

import {ZmItem, ZmItemParam} from "../../share/model/ZmItem";
import {ZmList} from "../../share/model/ZmList";

export class ZmBriefcaseBaseItem extends ZmItem {

  public name?: string;
  public contentType?: string;
  public size?: number;

  constructor(id: string, list: ZmList, noCache: boolean, type: string);
  constructor(params: ZmBriefcaseBaseItemParams);
  constructor(params: any, list?: ZmList, noCache?: boolean, type?: string) {
    super(params);
  }
  public isWebDoc?(): boolean { return undefined; }
  public getContentType?(): string { return undefined; }

}

export interface ZmBriefcaseBaseItemParams extends ZmItemParam {
}

export class ZmBriefcaseItem extends ZmBriefcaseBaseItem {

  public isFolder?: boolean;

  constructor(id: string, list: ZmList, noCache: boolean) {
    super(id, list, noCache, ZmItem.BRIEFCASE_ITEM);
  }

}
