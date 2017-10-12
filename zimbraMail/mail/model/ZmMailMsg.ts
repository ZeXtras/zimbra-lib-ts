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

import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmBatchCommand} from "../../../zimbra/csfe/ZmBatchCommand";
import {ZmInvite} from "../../share/model/ZmInvite";
import {ZmMailItem} from "./ZmMailItem";
import {ZmMailList} from "./ZmMailList";
import {ZmMimePart} from "./ZmMimePart";

export class ZmMailMsg extends ZmMailItem {

  public static COMPOSE_ADDRS: string[];

  public invite: ZmInvite;
  /** @deprecated */ public showImages: boolean;
  /** @deprecated */ public list: ZmMailList; // TODO: Why is here this property? Who set it?
  public _loadCallback?: AjxCallback;
  public folderId: number|string;
  public cif: string;
  public _attInfo: ZmMailMsgAttachmentInfo[];
  public textBodyContent: string;

  public isHtmlMail(): boolean { return undefined; }
  public isInvite(): boolean { return undefined; }
  public isInviteCanceled(): boolean { return undefined; }
  public getBodyPart(contentType?: string, callback?: AjxCallback): ZmMimePart { return undefined; }
  public load(params: ZmMailMsgLoadParams): void {}
  public isReadOnly(): boolean { return undefined; }
  public markRead(): void {}

  public getAttachmentInfo(
    findHits: boolean,
    includeInlineImages: boolean,
    includeInlineAtts: boolean,
  ): ZmMailMsgAttachmentInfo[] { return undefined; }

  public getAttachmentLinks(
    findHits: boolean,
    includeInlineImages: boolean,
    includeInlineAtts: boolean,
  ): ZmMailMsgAttachmentInfo[] { return undefined; }

}

export interface ZmMailMsgLoadParams {
  getHtml?: boolean;
  markRead?: boolean;
  forceLoad?: boolean;
  callback?: AjxCallback;
  errorCallback?: AjxCallback;
  noBusyOverlay?: boolean;
  noTruncate?: boolean;
  batchCmd?: ZmBatchCommand;
  accountName?: string;
  needExp?: boolean;
}

export interface ZmMailMsgAttachmentInfo {
  label: string;
  size: string;
  sizeInBytes: number;
  linkIcon: string;
  isHit: boolean;
  ct: string;
  url: string;
  mid: string;
  part: string;
  links: {
    html?: boolean;
  };
}
