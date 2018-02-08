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

import {BSelectorOption} from "../../../../graphic/descriptor/BSelectorOption";
import {ZaXFormViewController} from "../../../zimbraAdmin/common/ZaXFormViewController";
import {DwtEvent} from "../events/DwtEvent";
import {DwtButton} from "../widgets/DwtButton";
import {DwtComposite} from "../widgets/DwtComposite";
import {XForm} from "./XForm";
import {XFormItemDescription, XformItemDescriptionClasses} from "./XFormItemDescription";

export class XFormItemFactory {
  public static createItemType(
    typeConstant: string,
    typeName: string,
    constructor: typeof XFormItem,
    superClassConstructor: typeof XFormItem
  ): void {}
}

export class XFormItem {//TODO check all attribute hierarchy
  public static ERROR_STATE_ERROR: number;
  public static ERROR_STATE_VALID: number;
  /* Private */ public __attributes?: {[name: string]: any};
  public writeElementDiv?: boolean;
  public id?: string;

  public labelLocation?: string;
  public tableCssClass?: string;
  public tableCssStyle?: string;
  public containerCssClass?: string;
  public containerCssStyle?: string;
  public cssClass?: string;
  public labelCssClass?: string;
  public errorCssClass?: string;
  public nowrap?: boolean;
  public labelWrap?: boolean;
  public align?: string;
  public valign?: string;
  public focusable?: boolean;
  public bmolsnr?: boolean; // Be My Own Listener
  public forceUpdate?: boolean;
  public isBlockElement?: boolean;
  public visibilityChecks?: Array<() => boolean>;
  public enableDisableChecks?: Array<() => boolean>;
  public visibilityChangeEventSources?: string[];
  public enableDisableChangeEventSources?: string[];
  public valueChangeEventSources?: string[];
  public visibilityUpdaters?: string[];
  public enabledDisabledUpdaters?: string[];
  public elementChangeHandler?: string;
  public selection?: string;
  public openSelectionLabel?: string;
  public errorLocation?: string;
  public helpTooltip?: boolean;
  public colSizes?;

  // Added to keep a basic compatibility.
  public editable?: boolean;
  public type?: string;
  public items?: XFormItem[];
  public width?;
  public cssStyle?;
  public label?;
  public value?;
  public icon?;
  public ref?;
  public elementChanged?;
  public choices?;
  public onChange?;
  public onActivate?;
  public getDisplayValue?;
  public _isXFormItem?: boolean;

  public getInstance?<T>(): T {
    return void 0;
  }

  public getItems?() {
  }

  public getForceUpdate?() {}

  public getInheritedProperty?(prop): any {
    return void 0;
  }

  public initFormItem?() {

  }

  public updateElement?() {

  }

  public getInstanceValue?(path?: string): any {
    return void 0;
  }
  public getForm?<T extends XForm>(): T {
    return void 0;
  }
  public getParentItem?(): XFormItem {
    return void 0;
  }
  public getWidget?(): DwtComposite {
    return void 0;
  }
  public setInstanceValue?(value: any, path?: any): any {
    return void 0;
  }
  public getId?(): string {
    return void 0;
  }
  public getRefPath?(): string {
    return undefined;
  }
  public _setAttributes?(params): void {}
}

export let _DWT_ALERT_: "dwt_alert";
export let _DWT_BUTTON_: "dwt_button";
export let _GROUP_: "group";
export let _OUTPUT_: "output";
export let _SEPARATOR_: string;
export let _SPACER_: "spacer";
export let _SWITCH_: string;
export let _CELL_SPACER_: "cell_spacer";
export let _CELLSPACER_: "cell_spacer";
export let _INPUT_: "input";
export let _CASE_: "case";
export let _DWT_SELECT_: "dwt_select";
export let _DWT_DATE_: "dwt_date";
export let _TOP_GROUPER_: "top_grouper";
export let _CHECKBOX_: "checkbox";
export let _GROUPER_: string;
export let _TEXTFIELD_: "textfield";
export let _DWT_LIST_: "dwt_list";

export interface XFormObjectBase {
  colSizes?: string[];
  cssStyle?: string;
  numCols?: number;
  items: XFormItemDescription[] | XformItemDescriptionClasses[];
  /* TODO: All `XFormItemDescription[]` should be migrated to `XformItemDescriptionClasses[]` */
}

export class WidgetAdaptor_XFormItem extends XFormItem {}

export class Dwt_Adaptor_XFormItem extends WidgetAdaptor_XFormItem {}

export class Group_XFormItem extends XFormItem {
  public items?: XFormItem[];
  public type?: string;
  public numCols?: number;

  public initFormItem?() {}

  public getItems?() {}
}

export class Textfield_XFormItem extends XFormItem {
  public visibilityChecks?;
  public enableDisableChecks?;
}

export class Composite_XFormItem extends Group_XFormItem {
  public initializeItems(){};
  public useParentTable: boolean;
  public static onFieldChange(value: any, event: DwtEvent, form: ZaXFormViewController): any {
    return void 0;
  }
}

export class Case_XFormItem extends Group_XFormItem {}

export class Dwt_TabBar_XFormItem extends Dwt_Adaptor_XFormItem {
  public choices: Array<{value: number, label: string}>;
}

export class Checkbox_XFormItem extends XFormItem {
  public cbType;
}

export class Dwt_Button_XFormItem extends Dwt_Adaptor_XFormItem {
  public getWidget(): DwtButton {
    return void 0;
  }

  public icon;
  public disIcon;
}

export class Output_XFormItem extends XFormItem {
  public updateElement(value?: any) {}
}

export class Dwt_List_XFormItem extends Dwt_Adaptor_XFormItem {
  public multiselect?;
  public headerList?;
  public hideHeader?;
  public onSelection?;
  public widgetClass?;

  public static isItemsChanged(itemArray, existingArr) {

  }

  public constructWidget?() {

  }
  public getSelection?(): any[] {
    return void 0;
  }
}

export class Spacer_XFormItem extends XFormItem {
  public height: number;
}

export class Cell_Spacer_XFormItem extends Spacer_XFormItem {}

export class Step_Choices_XFormItem extends Group_XFormItem {}

export class Select1_XFormItem extends XFormItem {
  public setChoices(newChoices: BSelectorOption[]): void {}
}
