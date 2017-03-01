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

import {ZaXDialog} from "./ZaXDialog";
import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {DwtDialog_ButtonDescriptor} from "../../ajax/dwt/widgets/DwtDialog";

export class ZaXWizardDialog extends ZaXDialog {

  public static Z_ACTIVE_PAGE: number;
  public static Z_HIDDEN_PAGE: number;
  public static Z_TAB_PANEL: number;
  public static Z_CURTAIN: number;

  public static NEXT_BUTTON: number;
  public static PREV_BUTTON: number;
  public static FINISH_BUTTON: number;
  public static HELP_BUTTON: number;

  public supportMinimize: boolean = true;

  constructor(
    parent: DwtShell,
    className: string,
    title: string,
    w?: string,
    h?: string,
    iKeyName?: string,
    extraButtons?: DwtDialog_ButtonDescriptor[],
    contextId?: string
  ) {
    super(
      parent,
      className,
      title,
      w,
      h,
      iKeyName,
      contextId
    );
  }

  public goPage(pageKey: number): void {}
  public goNext(): void {}
  public goPrev(): void {}
  public finishWizard(): void {}
  public getCurrentStep(): number {
    return void 0;
  }
  public addPage(stepTitle: string): number {
    return void 0;
  }

  private _correntWidth(w: string|number): string {
    return void 0;
  }
}

export interface ZaXWizardStepChoice {
  value: number;
  label: string;
}
