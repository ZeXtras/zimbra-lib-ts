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
import {ZmApptClone} from "../model/ZmAppt";
import {ZmCalItemMode} from "../model/ZmCalItem";
import {ZmCalItemComposeController} from "../controller/ZmCalItemComposeController";
import {ZmHtmlEditor} from "../../share/view/htmlEditor/ZmHtmlEditor";

export class ZmCalItemEditView extends DwtComposite {

  public _controller: ZmCalItemComposeController;
  public _isForward: boolean;
  public _notesHtmlEditor: ZmHtmlEditor;

  public setComposeMode(composeMode: "text/plain" | "text/html" ): void {}
  public _createWidgets(width: string): void {}
  public _setContent(calItem: ZmApptClone, mode: ZmCalItemMode): void {}
  public formatContent(body: string, composingHtml: boolean): string { return undefined; }

}
