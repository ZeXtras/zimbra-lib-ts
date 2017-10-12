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

import {Dwt} from "../../../ajax/dwt/core/Dwt";
import {DwtDropTarget} from "../../../ajax/dwt/dnd/DwtDropTarget";
import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {DwtIframe} from "../../../ajax/dwt/widgets/DwtIframe";
import {ZmBaseController} from "../../share/controller/ZmBaseController";
import {ZmItem} from "../../share/model/ZmItem";
import {ZmListView} from "../../share/view/ZmListView";
import {ZmBriefcaseItem} from "../model/ZmBriefcaseItem";

export class ZmPreviewPaneView extends DwtComposite {

  constructor(parent: DwtComposite, controller: ZmBaseController, dropTgt: DwtDropTarget) {
    super({parent: parent, posStyle: Dwt.ABSOLUTE_STYLE});
  }

  public getListView(): ZmListView { return undefined; }
  public resetPreviewPane(newPreviewStatus: string, oldPreviewStatus: string): void {}

}

export class ZmPreviewView extends DwtComposite {

  public _iframePreview: DwtIframe;
  public _previewItem: ZmBriefcaseItem;
  public _oldItem: ZmBriefcaseItem;
  public _previewContent: boolean;

  public set(item: ZmItem): void {}

  public enablePreview(enable: boolean): void {}

  public _setFolder(item: ZmBriefcaseItem): void {}

  public _setHeader(item: ZmBriefcaseItem): void {}

  public _setupLoading(): void {}
}
