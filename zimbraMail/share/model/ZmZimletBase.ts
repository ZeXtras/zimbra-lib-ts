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

import {ZmObjectHandler} from "./ZmObjectHandler";
import {ZmZimletContext, UserProperty} from "./ZmZimletContext";
import {DwtDialog} from "../../../ajax/dwt/widgets/DwtDialog";
import {DwtPropertyEditor} from "../../../ajax/dwt/widgets/DwtPropertyEditor";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmController} from "../controller/ZmController";
import {ZmApp} from "../../core/ZmApp";
import {ZmButtonToolBar} from "../view/ZmButtonToolBar";
import {DwtShell} from "../../../ajax/dwt/widgets/DwtShell";
import {ZmActionMenu} from "../view/ZmActionMenu";
import {ZmObjectManager} from "./ZmObjectManager";
import {ZmItem} from "./ZmItem";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtMouseEvent} from "../../../ajax/dwt/events/DwtMouseEvent";
import {ZmDialog} from "../view/dialog/ZmDialog";
import {ZmMailMsg} from "../../mail/model/ZmMailMsg";
import {ZmMailMsgView} from "../../mail/view/ZmMailMsgView";
import {ZmCsfeResult} from "../../../zimbra/csfe/ZmCsfeResult";
import {AjxSoapDoc} from "../../../ajax/soap/AjxSoapDoc";
import {AjxListener} from "../../../ajax/events/AjxListener";
import {DwtMenu} from "../../../ajax/dwt/widgets/DwtMenu";
import {ZmComposeView} from "../../mail/view/ZmComposeView";

export class ZmZimletBase extends ZmObjectHandler {

  public _dlg_propertyEditor?: DwtDialog;
  public _propertyEditor?: DwtPropertyEditor;

  public RE?: RegExp;
  public _zimletContext: ZmZimletContext;
  public name: string;
  public static PROXY: string;

  public getUsername(): string { return undefined; }
  public getUserID(): string { return undefined; }
  public getResource(resourceName: string): string { return undefined; }
  public getConfig(key: string): any { return undefined; }
  public getUserProperty(key: string): string { return undefined; }
  public setUserProperty(propertyName: string, value: string|number|boolean, save: boolean, callback?: AjxCallback): void {}
  public xmlObj(name?: string): ZmZimletContext | string { return undefined; }
  public checkProperties(props: UserProperty[]): boolean { return undefined; }
  public displayStatusMessage(param: {msg: string; level: number}): void { return undefined; }
  public displayErrorMessage(msg: string, data?: string, title?: string): void {}
  public saveUserProperties(callback: AjxCallback): string { return undefined; }
  public getShell(): DwtShell { return undefined; }
  public singleClicked(canvas: any): void {}
  public doubleClicked(canvas: any): void {}
  public createPropertyEditor(callback: AjxCallback): void {}
  public  _createDialog(dialog_args: {title: string; view: DwtComposite}): ZmDialog { return undefined; }
  public menuItemSelected(itemId: string): void {}

  public clicked(spanElement: HTMLSpanElement, contentObjText: string, matchContext: string[], event: DwtMouseEvent): void {}
  public toolTipPoppedUp(spanElement: any, contentObjText: string, matchContext: string[], canvas: HTMLDivElement): void {}
  public addSearchDomainItem(icon: string, label: string, listener: AjxListener, id: string): ZmButtonToolBar { return undefined; }

  public init(): void {};

  public getMessage(msg: string): string { return undefined; }

  public match(content: string, startIndex: number, objectMgr: ZmObjectManager): RegExpMatchArray { return undefined; }

  // App Related functions
  // public createApp(label: string, image: string, tooltip: string, index?: number, style?: string): string { return undefined; }
  // public appActive(appName: string, active: boolean): void {}
  // public appLaunch(appName: string): void {}
  // public onSelectApp(id: string): void {}
  // public onAction(id: string, action: string, currentViewId: string, lastViewId: string): void {}

  public sendRequest(requestStr: string|AjxSoapDoc, serverURL: string, requestHeaders: {[key: string]: string}, callback?: AjxCallback, useGet?: boolean, passErrors?: boolean): void|ZmCsfeResult { return undefined; }

  // Notifications from Zimbra
  // TODO: Migrate to interfaces
  public addCustomMimeHeaders(): void {}
  public addExtraMsgParts(): void {}
  public appendExtraSignature(): void {}
  public emailErrorCheck(): void {}
  public enableComposeToolbarButtons(): void {}
  public initializeAttachPopup(menu: DwtMenu, composeView: ZmComposeView): void {}
  public onActionMenuInitialized(): void {}
  public onAppointmentDelete(): void {}
  public onApptDrag(): void {}
  public onApptDrop(): void {}
  public onContactEdit(): void {}
  public onContactView(): void {}
  public onDisposeComposeController(): void {}
  public onDraftsActionMenuInitialized(): void {}
  public onEditAppt_updateAttendees(): void {}
  public onEditAppt_updateTime(): void {}
  public onEmailHoverOver(): void {}
  public onEmailHover(): void {}
  public onHoverOverEmailInList(): void {}
  public onMailActionMenuResetOperations(): void {}
  public onMailConfirm(): void {}
  public onMailFlagClick(): void {}
  public onParticipantActionMenuInitialized(): void {}
  public onPeopleSearchData(): void {}
  public onPeopleSearchShow(): void {}
  public onPhoneClicked(): void {}
  public onSaveApptFailure(): void {}
  public onSaveApptSuccess(): void {}
  public onSendButtonClicked(): void {}
  public onSendMsgFailure(): void {}
  public onSendMsgSuccess(): void {}
  public onShowView(): void {}
  public onTagAction(): void {}
  public resetContactListToolbarOperations(): void {}
  public runAppFunction(): void {}

}

export interface OnMsgView {
  onMsgView(msg: ZmMailMsg, oldMsg: ZmMailMsg, view: ZmMailMsgView): void;
}

export interface OnFindMsgObjects {
  onFindMsgObjects(msg: ZmItem, objMgr: ZmObjectManager, ctxt: DwtComposite): void;
}

export interface InitializeToolbar {
  initializeToolbar(app: ZmApp, toolbar: ZmButtonToolBar, controller: ZmController, viewId: string): void;
}

export interface resetToolbarOperations {
  resetToolbarOperations(parent: ZmButtonToolBar|ZmActionMenu, num: number): void;
}

export interface OnAction {
  onAction(id: string, action: string, currentViewId: string, lastViewId: string): void;
}

export interface OnSearchZimlet {
  onSearch(query: string): void;
}

export interface CreateAppZimlet {
  createApp(label: string, image: string, tooltip: string, index?: number, style?: string): string;
  appActive(appName: string, active: boolean): void;
  appLaunch(appName: string): void;
  onSelectApp(id: string): void;
}
