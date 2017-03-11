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

import {ZmController} from "../share/controller/ZmController";
import {AjxCallback} from "../../ajax/boot/AjxCallback";
import {AjxSoapDoc} from "../../ajax/soap/AjxSoapDoc";
import {ZmCsfeResult} from "../../csfe/ZmCsfeResult";
import {DwtKeyMapMgr} from "../../ajax/dwt/keyboard/DwtKeyMapMgr";
import {DwtToolBarButton} from "../../ajax/dwt/widgets/DwtToolBar";
import {ZmAppChooser} from "../share/view/ZmAppChooser";
import {ZmApp} from "./ZmApp";
import {ZmRequestMgrSendRequestParams} from "./ZmRequestMgr";
import {ZmAppViewMgr} from "./ZmAppViewMgr";
import {ZmToolBar} from "../share/view/ZmToolBar";

export class ZmZimbraMail extends ZmController {

  public static unloadHackCallback(): void {}

  private mRequestResponse: ZmCsfeResult;

  public sendRequest(params: ZmZimbraMailSendRequestParams): string | ZmCsfeResult {
    if (
      typeof params.callback !== "undefined"
      && typeof this.mRequestResponse !== "undefined"
    ) {
      params.callback.run(this.mRequestResponse);
    }
    return undefined;
  }

  public cancelRequest(reqId: string, errorCallback?: AjxCallback, noBusyOverlay?: boolean): void {}

  public getKeyMapMgr(): DwtKeyMapMgr {
    return undefined;
  }

  // Only for tests TODO: wut?
  public setRequestResponse(resp: ZmCsfeResult) {
    this.mRequestResponse = resp;
  }

  public getNewButton(): DwtToolBarButton {
    return undefined;
  }

  public setNewButtonProps(params: SetNewButtonPropsParams): void {}
  public getAppChooser(): ZmAppChooser { return undefined; }
  public addApp(app: ZmApp): void {}
  public getAppViewMgr(): ZmAppViewMgr { return undefined; }

}

export interface ZmZimbraMailSendRequestParams extends ZmRequestMgrSendRequestParams {
  soapDoc?: AjxSoapDoc;
  jsonObj?: {[request: string]: any};
  asyncMode?: boolean;
  busyMsg?: string;
  callback?: AjxCallback;
  errorCallback?: AjxCallback;
  noBusyOverlay?: boolean;
  noAuthToken?: boolean;
}

export interface SetNewButtonPropsParams {
  text?: string;
  tooltip?: string;
  icon?: string;
  iconDis?: string;
  defaultId?: string;
  disabled?: boolean;
  hidden?: boolean;
}
