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

import {ZaApp} from "../../../zimbraAdmin/common/ZaApp";
import {ZaController} from "../../../zimbraAdmin/common/ZaController";
import {ZaItem} from "../../../zimbraAdmin/common/ZaItem";
import {DwtEvent} from "../events/DwtEvent";
import {DwtComposite} from "../widgets/DwtComposite";
import {Dwt_Adaptor_XFormItem, XFormItem, XFormObjectBase} from "./XFormItem";
import {XModel} from "./XModel";

export class XForm extends DwtComposite {
  public xmodel: XModel;
  public instance: ZaItem;

  constructor(
    attributes: XFormObjectBase,
    model: XModel,
    instance: ZaItem,
    dwtContainer: DwtComposite,
    contextId: string,
  ) {
    super({
      className: "DWTXForm",
      parent: dwtContainer,
    });
  }

  public getInstance(): ZaItem{return void 0;}
  public setInstanceValue(val: any, refPath: string): void {}
  public getInstanceValue(refPath: string): any {}
  public setIsDirty(dirty: boolean, item?: XFormItem): void {}
  public itemChanged(id: XFormItem|string, value: any, event: DwtEvent, quite?: boolean): void;
  public itemChanged(id: any, value: any, event: DwtEvent, quite?: boolean): void {}
  public refresh(): void {}
  public getId(): string {
    return void 0;
  }
  public getItemById(id: string): Dwt_Adaptor_XFormItem {
    return void 0;
  }
  public getItemsById(id: string): Dwt_Adaptor_XFormItem[] {
    return void 0;
  }
  public getElement(id?: string): HTMLElement {
    return void 0;
  }

  public setController(controller?: ZaController | ZaApp): void {}

  public hasErrors(): boolean {
    return void 0;
  }

  public setInstance(instance: any): void {}

  public draw(parentElement?: HTMLElement): void {}
}

// possible values for "labelDirection", "align" and "valign"
export let _NONE_: string;
export let _LEFT_: string;
export let _TOP_: string;
export let _RIGHT_: string;
export let _BOTTOM_: string;
export let _CENTER_: string;
export let _MIDDLE_: string;
export let _INLINE_: string;

// values for "relevantBehavior"
export let _HIDE_: string;
export let _BLOCK_HIDE_: string;
export let _DISABLE_: string;
export let _SHOW_DISABLED_: string;
export let _PARENT_: string; // used in error location as well

// values for "errorLocation"
export let _SELF_: string;
// var _INHERIT_ = "inherit" -- this is defined in XModel.js

// values for "selection"
export let _OPEN_: string;
export let _CLOSED_: string;

// possible values for "overflow"
export let _HIDDEN_: string;
export let _SCROLL_: string;
export let _AUTO_: string;
export let _VISIBLE_: string;
