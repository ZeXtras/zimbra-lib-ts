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

import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtSelect, DwtSelectOptionData} from "../../../ajax/dwt/widgets/DwtSelect";
import {ZmRecipients} from "./ZmRecipients";
import {ZmAutocompleteListView} from "../../share/view/ZmAutocompleteListView";
import {DwtEvent} from "../../../ajax/dwt/events/DwtEvent";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {DwtButton} from "../../../ajax/dwt/widgets/DwtButton";
import {ZmMailMsg} from "../model/ZmMailMsg";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {DwtMenuItem} from "../../../ajax/dwt/widgets/DwtMenuItem";
import {ZmComposeController} from "../controller/ZmComposeController";
import {ZmAttachDialog} from "../../share/view/dialog/ZmAttachDialog";
import {ZmHtmlEditor} from "../../share/view/htmlEditor/ZmHtmlEditor";

export class ZmComposeView extends DwtComposite {

  public static UPLOAD_BRIEFCASE: string;
  public static UPLOAD_INLINE: string;

  public _view: string;
  public _identityDivId: string;
  public _headerEl: HTMLElement;
  public _subjectField: HTMLElement;
  public _oboRow: HTMLElement;
  public _oboCheckbox: HTMLElement;
  public _oboLabel: HTMLElement;
  public _attcDiv: HTMLElement;
  public _attcBtn: HTMLElement;
  public _recipients: ZmRecipients;
  public _acAddrSelectList: ZmAutocompleteListView;
  public _fromSelect?: DwtSelect;
  public _identityChangeListenerObj: AjxListener;
  public identitySelect: DwtSelect;
  public _priorityButton: DwtButton;
  public _attButton: DwtButton;
  public _msg: ZmMailMsg;
  public _controller: ZmComposeController;
  public _disableAttachments: boolean;
  public _attachDialog?: ZmAttachDialog;
  public _composeMode: string;

  public _addSendAsAndSendOboAddresses(menu: DwtSelect): void {}
  public _addSendAsOrSendOboAddresses(menu: DwtSelect, emails: string|{addr: string}[], isObo: boolean, displayValueFunc: Function): void {}
  public _setEventHandler(id: string, event: string, addrType?: string): void {}
  public _getIdentityOptions(): DwtSelectOptionData[] { return undefined; }
  public _handleFromListener(ev: DwtEvent): void {}
  public _identityChangeListener(ev: DwtEvent): void {}
  /** @deprecated */ public _priorityButtonMenuCallback(): void {}
  public _attachButtonMenuCallback(): void {}
  public _setIdentityVisible(): void {}
  public collapseAttMenu(): void {}
  public showAttachmentDialog(title: string): void {}
  public _restoreMultipartRelatedImages(idoc: HTMLIFrameElement): void {}
  public _generateCid(): string { return undefined; }
  public isDirty(incAddrs?: boolean, incSubject?: boolean): boolean { return undefined; }
  public _submitMyComputerAttachments(files: FileList, node: HTMLInputElement, isInline: boolean): void {}
  public _attsDoneCallback(isDraft: boolean, status: string, attId: string, docIds: string[], msgIds: string[]): void {}
  public _createAttachMenuItem(attachMenu: DwtMenu, appName: string, listener: AjxListener): DwtMenuItem { return undefined; }
  public removeOrigMsgAtt(): void {}
  public getHtmlEditor(): ZmHtmlEditor { return undefined; }
  public getUserText(): string { return undefined; }
  public resetBody(params: ZmComposeView_resetBodyParams, noEditorUpdate?: boolean): void {}
  public cleanupAttachments(all: boolean): void {}

}

export interface ZmComposeView_resetBodyParams {
  op: string;
  action: string;
  msg: ZmMailMsg;
  extraBodyText: string;
  incOptions?: ZmComposeView_IncOptions;
  keepAttachments: boolean;
  noEditorUpdate?: boolean;
}

export type ZmComposeView_IncOptions = {
  prefix: boolean;
  headers: boolean;
  what: string;
}

export type IncOptions = {
  prefix: true;
  headers: true;
  what: true;
}
