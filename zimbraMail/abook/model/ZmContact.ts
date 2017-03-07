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

import {ZmItem, ZmItemAttrs} from "../../share/model/ZmItem";
import {ZmCsfeResult} from "../../../csfe/ZmCsfeResult";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {AjxEmailAddressParseEmailStringReturnObj} from "../../../ajax/util/AjxEmailAddress";
import {ZmAddrBook} from "./ZmAddrBook";

export class ZmContact extends ZmItem {
  public static F_groups: string;
  public static F_email: string;
  public static F_email2: string;
  public static F_email3: string;

  public static computeFileAs(contact: ZmContact): string { return undefined; }

  public isLoaded?: boolean;
  public rev?: string;
  public sf?: string;
  public isGal?: string;
  public folderId?: string;
  public created?: string;
  public modified?: string;
  public attr?: ZmContactAttrs;
  public ref?: string;
  public addrbook?: ZmAddrBook;
  public _fileAs?: string;
  public isDL?: boolean;
  public canExpand?: boolean;
  public dlInfo?: ZmContactDlInfo;

  public getImageUrl(maxWidth: number, maxHeight: number): string { return undefined; }

  public getEmail(): string {return undefined; }
  public getHeader(): string {return undefined; }
  public isShared(): boolean { return undefined; }
  public getGroupMembers(): AjxEmailAddressParseEmailStringReturnObj | null { return undefined; }
  public getAllGroupMembers(): string[] { return undefined; }
  public _handleLoadResponse(callback: AjxCallback, result: ZmCsfeResult): void {}
  public _loadFromDom(node: ZmContactObj): void {}
  public getEmails(): string[] { return undefined; }
  public isDistributionList(): boolean { return undefined; }

}

export interface ZmContactObj {
  exp: boolean;
  d: string;
  isOwner: any;
  isMember: any;
  f: string;
  tn: string;
  email3: any;
  email2: any;
  email: any;
  ref: any;
  m: any;
  md: string;
  cd: string;
  l: string;
  _attrs: ZmContactAttrs;
  sf: string;
  rev: string;
}

export interface ZmContactAttrs extends ZmItemAttrs {
  dn?: any;
  sf?: string;
  zimbraDistributionListSubscriptionPolicy?: string;
  zimbraDistributionListUnsubscriptionPolicy?: string;
  zimbraHideInGal?: string;
  [name: string]: any;
}

export interface ZmContactDlInfo {
  isMinimal: boolean;
  isMember: any;
  isOwner: any;
  subscriptionPolicy: any;
  unsubscriptionPolicy: any;
  displayName: string;
  hideInGal: boolean;
}
