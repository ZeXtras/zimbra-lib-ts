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

import {DwtDialog} from "../../../../ajax/dwt/widgets/DwtDialog";
import {AjxCallback} from "../../../../ajax/boot/AjxCallback";
import {DwtShell} from "../../../../ajax/dwt/widgets/DwtShell";
import {ZmBriefcaseTabView} from "../../../briefcase/view/dialog/ZmBriefcaseTabView";
import {DwtComposite} from "../../../../ajax/dwt/widgets/DwtComposite";

export class ZmAttachDialog extends DwtDialog {

  constructor(shell: DwtShell, className?: string) {
    super({parent: shell, className: className, title: ""});
  }

  public _uploadCallback: AjxCallback;

  public getUploadCallback(): AjxCallback { return undefined; }
  public setUploadCallback(callback: AjxCallback): void {}
  public setFooter(html: string): void {}
  public getBriefcaseView(): ZmBriefcaseTabView { return undefined; }
  public getMyComputerView(): ZmMyComputerTabViewPage { return undefined; }
  public enableInlineOption(enable: boolean): void {}
  public setInline(isInline: boolean): void {}
  public setOkListener(callback: AjxCallback): void {}
  public setCancelListener(callback: AjxCallback): void {}

}

export class ZmMyComputerTabViewPage extends DwtComposite {
}

