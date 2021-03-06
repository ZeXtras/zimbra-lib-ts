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

import {DwtPoint} from "../../ajax/dwt/graphics/DwtPoint";
import {DwtComposite} from "../../ajax/dwt/widgets/DwtComposite";
import {DwtDialog, DwtDialog_ButtonDescriptor} from "../../ajax/dwt/widgets/DwtDialog";
import {XForm} from "../../ajax/dwt/xforms/XForm";
import {XFormObjectBase} from "../../ajax/dwt/xforms/XFormItem";
import {XformItemDescriptionClasses} from "../../ajax/dwt/xforms/XFormItemDescription";
import {XModel, XModelParams} from "../../ajax/dwt/xforms/XModel";

export class ZaXDialog extends DwtDialog {
  public static XFormModifiers: {[name: string]: Array<(xFormObject: XFormObjectBase, entry?: any) => void>};
  public static HELP_BUTTON: any;

  public _standardButtons: number[];
  public _extraButtons: DwtDialog_ButtonDescriptor[];
  public supportMinimize: boolean;
  public _helpURL: string;
  public _containedObject: any;
  public _localXForm: XForm;
  public _localXModel: XModel;

  constructor();

  constructor(
      parent: DwtComposite,
      className: string,
      title: string,
      w?: string,
      h?: string,
      iKeyName?: string,
      contextId?: string,
  );

  constructor(
    parent?: DwtComposite,
    className?: string,
    title?: string,
    w?: string,
    h?: string,
    iKeyName?: string,
    contextId?: string,
  ) {
    super({
      className: className,
      extraButtons: [],
      id: void 0,
      parent: parent,
      standardButtons: [DwtDialog.OK_BUTTON],
      title: title,
    });
  }

  public setObject(entry: any): void {}
  public getObject(): any {}
  public popup(loc?: DwtPoint): void {}
  public getMyXForm(entry?: any): XformItemDescriptionClasses {// TODO entry should not be optional
    return void 0;
  }

  public _helpButtonListener(): void {}

  public initForm(
    xModelMetaData: XModelParams,
    xFormMetaData: XformItemDescriptionClasses,
    defaultInstance?: any,
  ): void {}

}
