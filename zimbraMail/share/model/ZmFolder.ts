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

import {ZmOrganizer, ZmOrganizerParams} from "./ZmOrganizer";
import {ZmBatchCommand} from "../../../zimbra/csfe/ZmBatchCommand";

export class ZmFolder extends ZmOrganizer {

  public static ID_CHATS: number = 14;
  public static HIDE_ID: {[id: string]: boolean};
  public static ID_TRASH: number;
  public static ID_SENT: number;
  public static QUERY_NAME: {[folderId: string]: string};

  public oname?: string;

  constructor(params: ZmFolderParams) { super(params); }
  public createQuery(pathOnly: boolean): string { return undefined; }
  public mayContain(what: any, folderType: string, ignoreExisting: boolean): boolean { return undefined; }
  public move(newParent: ZmFolder, noUndo: boolean, actionText: string, batchCmd: ZmBatchCommand): void {}

}

export interface ZmFolderParams extends ZmOrganizerParams {}
