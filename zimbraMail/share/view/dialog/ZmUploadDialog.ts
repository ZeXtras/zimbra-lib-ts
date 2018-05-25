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

import {AjxCallback} from "../../../../ajax/boot/AjxCallback";
import {DwtPoint} from "../../../../ajax/dwt/graphics/DwtPoint";
import {DwtButton} from "../../../../ajax/dwt/widgets/DwtButton";
import {DwtDialog} from "../../../../ajax/dwt/widgets/DwtDialog";
import {DwtToolBarButton} from "../../../../ajax/dwt/widgets/DwtToolBar";
import {ZmBaseController} from "../../controller/ZmBaseController";
import {ZmController} from "../../controller/ZmController";
import {ZmFolder} from "../../model/ZmFolder";
import {UploadParams} from "../../ZmUploadManager";

export class ZmUploadDialog extends DwtDialog {

  public static UPLOAD_FIELD_NAME: string;

  public _controller: ZmBaseController;
  public _uploadFolder: ZmFolder;
  public _uploadForm: HTMLFormElement;
  public _tableEl: HTMLElement;
  public _supportsHTML5: boolean;
  public _showLinkTitleText: boolean;
  public _inprogress: boolean;

  public _upload(): void {}
  public _createUploadHtml(): void {}

  public _enableUpload(uploadButton: DwtToolBarButton): void {}
  public _finishUpload(uploadButton: DwtToolBarButton, docFiles: File[], uploadFolder: ZmFolder): void {}
  public _uploadFileProgress(uploadButton: DwtButton, params: UploadParams, progress: ProgressEvent): void {}
  public _popupErrorDialog(message: string): void {}

  public popup(
    controller: ZmController,
    folder: ZmFolder,
    callback?: AjxCallback,
    title?: string,
    loc?: DwtPoint,
    oneFileOnly?: boolean,
    noResolveAction?: boolean,
    showNotes?: boolean,
    isImage?: string,
    conflictAction?: string,
  ): void {}

}
