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

import {AjxVector} from "../../../ajax/util/AjxVector";
import {ZmTree} from "./ZmTree";
import {ZmZimbraAccount} from "./ZmZimbraAccount";

export class ZmOrganizer {

  public static ITEM_ORGANIZER: ZmOrganizerItemOrganizer;
  public static ID_CALENDAR: string;
  public static PERM_WORKFLOW: string;
  public static PERM_ADMIN: string;
  public static BRIEFCASE: string;
  public static TAG: string;
  public static DISPLAY_ORDER: {[appName: string]: number};
  public static FOLDER: string;
  public static TREE_TYPE: {[type: string]: string};
  public static LABEL: {[type: string]: string};
  public static ID_ROOT: string;
  public static APP: { [id: string]: string };
  public static ID_CHATS: number;

  public static normalizeId(id: string|number, type?: string): string|number { return undefined; }

  /** @since 8.7.7 */ public static parseId(
    id: string,
    result?: {},
  ): {acctId: string, id: string, account: ZmZimbraAccount} { return undefined; }

  public id: string;
  public name: string;
  public owner: string;
  public noSuchFolder: boolean;
  public link: boolean;
  public nId: string;
  public parent?: ZmOrganizer;
  public tree?: ZmTree;
  public children: AjxVector<ZmOrganizer>;
  public type: string;
  public url?: string;
  /** @since 8.7.7 */ public isMountpoint: boolean;
  public _isRemote?: boolean;
  public rid: string;
  public zid: string;

  constructor(params: ZmOrganizerParams) {}
  public getAccount(): ZmZimbraAccount { return undefined; }
  public isFeed(): boolean { return undefined; }
  public isReadOnly(): boolean { return undefined; }
  public isInTrash(): boolean { return undefined; }
  public isRemote(): boolean { return undefined; }
  public isPermAllowed(perm: string): boolean { return undefined; }
  public getRemoteId(): string { return undefined; }
  public getIcon(): string { return undefined; }
  public getIconWithColor(): string { return undefined; }
  public getOwner(): string { return undefined; }
  public getName(
    showUnread?: boolean,
    maxLength?: number,
    noMarkup?: boolean,
    useSystemName?: boolean,
    useOwnerName?: boolean,
    defaultRootType?: string,
  ): string { return undefined; }
  public getChildByPath(path: string): ZmOrganizer { return undefined; }
  public hasChild(name: string): boolean { return undefined; }
  public getChild(name: string): ZmOrganizer { return undefined; }
  public getById(id: string): ZmOrganizer { return undefined; }
  public _notify(evType: string, details?: any): void {}
  public notifyModify(details?: any): void {}
  public getPath(
    includeRoot?: boolean,
    showUnread?: boolean,
    maxLength?: number,
    noMarkup?: boolean,
    useSystemName?: boolean,
  ): string { return undefined; }
  public reparent(newParent?: ZmOrganizer): void {}
  public deleteLocal(): void {}
  public isSystem(): boolean { return undefined; }

}

interface ZmOrganizerItemOrganizer {
  [name: string]: string;
}

export interface ZmOrganizerParams {
  type: string;
}
