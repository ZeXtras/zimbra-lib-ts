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

import {
  DwtComposite,
  DwtCompositeParams
} from "../../ajax/dwt/widgets/DwtComposite";
import {XFormObjectBase} from "../../ajax/dwt/xforms/XFormItem";
import {ZaItem} from "./ZaItem";
import {DwtShell} from "../../ajax/dwt/widgets/DwtShell";
import {XModel, XModelParams} from "../../ajax/dwt/xforms/XModel";
import {XForm} from "../../ajax/dwt/xforms/XForm";
import {AjxListener} from "../../ajax/events/AjxListener";

export class ZaTabView extends DwtComposite {

  public static XFormModifiers: {[name: string]: Array<(xFormObject: XFormObjectBase, entry?: any) => void>};

  public TAB_INDEX: number;
  public _localXModel: XModel;
  public _localXForm: XForm;
  public _contextId: string;
  public _drawn: boolean;
  public _containedObject: {
    attrs: {[path: string]: any};
    id?: string;
    type: string;
    name: string;
    rights?: {};
    setAttrs?: {};
    getAttrs?: {};
    _defaultValues?: {};
    currentTab?: string;
  };
  public formChangeListener: AjxListener;
  public formDirtyLsnr: AjxListener;

  // Params for 6 and 7 (container: DwtShell, ikeyName: string, cssClassName: string, contextId: string),
  // Params for 8 (params: DwtControlParams & {ikeyname: string, contextId: string})
  constructor(
    containerOrParams: DwtShell|ZaTabViewParams,
    ikeyName?: string,
    cssClassName?: string,
    contextId?: string,
  ) {
    super(containerOrParams);
  }

  public setObject(entry: ZaItem): void {}
  public initForm(xModelMetaData: XModelParams, xFormMetaData: XFormObjectBase, defaultInstance?: ZaItem): void {}
  public setDirty(dirty: boolean): void {}
  public isDirty(): boolean { return undefined; }
  public handleXFormChange() {}
  public swithTab(value): void {}
}

export interface ZaTabViewParams extends DwtCompositeParams {
  iKeyName: string;
  contextId: string;
}
