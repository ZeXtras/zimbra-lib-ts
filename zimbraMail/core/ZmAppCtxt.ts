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

import {AjxCallback} from "../../ajax/boot/AjxCallback";
import {ZmZimbraAccount} from "../share/model/ZmZimbraAccount";
import {ZmZimletMgr} from "../share/model/ZmZimletMgr";
import {ZmController} from "../share/controller/ZmController";
import {ZmSettings} from "../share/model/ZmSettings";
import {DwtMessageDialog} from "../../ajax/dwt/widgets/DwtMessageDialog";
import {ZmSearchController} from "../share/controller/ZmSearchController";
import {ZmList} from "../share/model/ZmList";
import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {ZmAppViewMgr} from "./ZmAppViewMgr";
import {ZmApp} from "./ZmApp";
import {DwtKeyboardMgr} from "../../ajax/dwt/keyboard/DwtKeyboardMgr";
import {ZmAutocomplete} from "../share/model/ZmAutocomplete";
import {ZmCalMgr} from "../calendar/model/ZmCalMgr";
import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {ZmIdentityCollection} from "../mail/model/ZmIdentityCollection";
import {ZmAttachDialog} from "../share/view/dialog/ZmAttachDialog";
import {ZmItem} from "../share/model/ZmItem";
import {ZmAccountList} from "../share/model/ZmAccountList";
import {ZmFolderTree} from "../share/model/ZmFolderTree";
import {ZmOrganizer} from "../share/model/ZmOrganizer";
import {ZmZimletApp} from "../share/view/ZmZimletApp";
import {ZmTree} from "../share/model/ZmTree";
import {ZmOverviewController} from "../share/controller/ZmOverviewController";
import {DwtConfirmDialog} from "../../ajax/dwt/widgets/DwtConfirmDialog";
import {ZmSearch} from "../share/model/ZmSearch";
import {ZmRenameFolderDialog} from "../share/view/dialog/ZmRenameFolderDialog";
import {ZmUploadManager} from "../share/ZmUploadManager";
import {AjxPost} from "../../ajax/net/AjxPost";
import {ZmChooseFolderDialog} from "../share/view/dialog/ZmChooseFolderDialog";

export class ZmAppCtxt {

  public static INVALID_NAME_CHARS_RE: RegExp;
  public static handleWindowOpener(): ZmAppCtxt { return undefined; }

  public isChildWindow: boolean;
  public sendAsEmails: string|{addr: string}[];
  public sendOboEmails: string|{addr: string}[];
  public isOffline: boolean;
  public multiAccounts: boolean;
  public accountList: ZmAccountList;

  public setStatusMsg(params: SetStatusMsgParams): void {}
  public get(id: string, key?: string, account?: ZmZimbraAccount): any {}
  public set(key: string, value: string): void {}
  public getZimletMgr(): ZmZimletMgr { return undefined; }
  public getUsername(): string { return undefined; }
  public getAppController(): ZmController { return undefined; }
  public getSettings(): ZmSettings { return undefined; }
  public getMsgDialog(): DwtMessageDialog { return undefined; }
  public getSearchController(): ZmSearchController { return undefined; }
  public getCurrentList(): ZmList { return undefined; }
  public getShell(): DwtShell { return undefined; }
  public getActiveAccount(): ZmZimbraAccount { return undefined; }
  public getAppViewMgr(): ZmAppViewMgr { return undefined; }
  public getApp(appName: string): ZmApp | ZmZimletApp { return undefined; }
  public notifyZimlets(event: string, params: any[], options?: NotifyZimletsParams): void {}
  public getKeyboardMgr(): DwtKeyboardMgr { return undefined; }
  public getOkCancelMsgDialog(): DwtMessageDialog { return undefined; }
  public getAutocompleter(): ZmAutocomplete { return undefined; }
  public getCalManager(): ZmCalMgr { return undefined; }
  public getViewTypeFromId(viewId: string): string { return undefined; }
  public getCurrentView(): DwtComposite { return undefined; }
  public getIdentityCollection(account?: ZmZimbraAccount): ZmIdentityCollection { return undefined; }
  public getAttachDialog(): ZmAttachDialog { return undefined; }
  public getById(id: string|number): ZmItem|ZmOrganizer { return undefined; };
  public setIsExpandableDL(id: string, canExpand: boolean): void {};
  public getFolderTree(acct?: ZmZimbraAccount): ZmFolderTree { return undefined; }
  public isExternalAccount(): boolean { return undefined; }
  public getCurrentViewType(): string { return undefined; }
  public getCurrentController(): ZmController { return undefined; }
  public setTree(type: string, tree: ZmTree, account?: ZmZimbraAccount): void {}
  public cacheSet(id: string, value: any): void {}
  public getOverviewController(): ZmOverviewController { return undefined; }
  public getTree(appId: string): ZmTree { return undefined; }
  public getConfirmationDialog(): DwtConfirmDialog { return undefined; }
  public getCurrentSearch(): ZmSearch { return undefined; }
  public getRenameFolderDialog(): ZmRenameFolderDialog { return undefined; }
  public getChooseFolderDialog(appName?: string): ZmChooseFolderDialog { return undefined; }
  public getZmUploadManager(): ZmUploadManager { return undefined; }
  public getUploadManager(): AjxPost { return undefined; }
}

export interface SetStatusMsgParams {
  msg: string;                   //   the status message
  level?: number;                //   the status level {@link ZmStatusView}  (may be <code>null</code>)
  detail?: string;               //   the details (may be <code>null</code>)
  transitions?: {};              //   the transitions (may be <code>null</code>)
  toast?: {};                    //   the toast control (may be <code>null</code>)
  force?: boolean;               //   force any displayed toasts out of the way (dismiss them and run their dismissCallback). Enqueued messages that are not yet displayed will not be displayed
  dismissCallback?: AjxCallback; //   callback to run when the toast is dismissed (by another message using [force], or explicitly calling ZmStatusView.prototype.dismiss())
  finishCallback?: AjxCallback;  //   callback to run when the toast finishes its transitions by itself (not when dismissed)
}

interface NotifyZimletsParams {
  waitUntilLoaded: boolean;
}
