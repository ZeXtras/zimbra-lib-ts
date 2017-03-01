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

import {DwtDialog} from "../../../../ajax/dwt/widgets/DwtDialog";
import {ZmBaseController} from "../../controller/ZmBaseController";
import {DwtToolBarButton} from "../../../../ajax/dwt/widgets/DwtToolBar";
import {ZmController} from "../../controller/ZmController";
import {ZmFolder} from "../../model/ZmFolder";
import {DwtPoint} from "../../../../ajax/dwt/graphics/DwtPoint";

export class ZmUploadDialog extends DwtDialog {

  public _controller: ZmBaseController;
  public _uploadFolder: ZmFolder;
  public _uploadForm: HTMLFormElement;
  public _tableEl: HTMLElement;
  public _supportsHTML5: boolean;

  public static UPLOAD_FIELD_NAME: string;

  public _upload(): void {}
  public _createUploadHtml(): void {}

  public _enableUpload(uploadButton: DwtToolBarButton): void {}
  public _finishUpload(uploadButton: DwtToolBarButton, docFiles: File[], uploadFolder: ZmFolder): void {}
  public _uploadFileProgress(): void {}
  public _popupErrorDialog(message: string): void {}

  public popup(controller: ZmController, folder: ZmFolder, callback?: Function, title?: string, loc?: DwtPoint): void {}
  
}