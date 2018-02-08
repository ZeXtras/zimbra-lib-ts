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

import {ZaXWizardStepChoice} from "../../../zimbraAdmin/common/ZaXWizardDialog";
/**
 * This class is introduced to define the XFormItem JSON description.
 * Zimbra does not use this class, neither You should instantiate this class.
 */
export interface XFormItemDescription {
  id?: string;
  type?: string;
  items?: XFormItemDescription[];
  label?: string;
  icon?: string;
  onActivate?: () => void;
  ref?: string;
  helpTooltipContent?: string;
  labelLocation?: string;
  align?: string;
  trueValue?: any;
  falseValue?: any;
  numCols?: number;
  colSizes?: string[];
  title?: string;
  content?: string;
  style?: number;
  iconVisible?: boolean;
  alertCssClass?: string;
  visibilityChangeEventSources?: string[];
  visibilityChecks?: Array<() => boolean>;
  value?: string;
  width?: string;
  caseKey?: number;
  tabGroupKey?: number;
  colSpan?: number;
  choices?: ZaXWizardStepChoice[];
  cssClass?: string;
  valign?: string;
  toolTipContent?: string;
}

export interface Base_XFormItemDescription {
  cssClass?: string;
  colSpan?: "*" | number;
  valueChangeEventSources?: string[];
  getDisplayValue?: (newValue?: string|boolean) => string|boolean;
  visibilityChecks?: Array<() => boolean>;
  visibilityChangeEventSources?: string[];
  enableDisableChecks?;
}

export interface GroupBase_XFormItemDescription extends Base_XFormItemDescription {
  colSizes?: Array<string|number>;
  id?: string;
  numCols?: number;
  label?: string;
  items: XformItemDescriptionClasses[];
}

export type XformItemDescriptionClasses =
  Base_XFormItemDescription |
  _OUTPUT_XformItemDescription |
  _GROUP_XformItemDescription |
  _CELL_SPACER_XformItemDescription |
  _CHECKBOX_XformItemDescription |
  _TOP_GROUPER_XformItemDescription |
  _ZAWIZ_TOP_GROUPER_XformItemDescription |
  _DWT_BUTTON_XformItemDescription |
  _DWT_ALERT_XformItemDescription |
  _SPACER_XformItemDescription |
  _GROUPER_XformItemDescription |
  _DWT_LIST_XformItemDescription;

export interface _OUTPUT_XformItemDescription extends Base_XFormItemDescription {
  type: "output";
  id?: string;
  ref?: string;
  value?: string;
  cssStyle?: string;
  align?: string;
  valign?: string;
  labelLocation?: string;
}

export interface _GROUP_XformItemDescription extends GroupBase_XFormItemDescription {
  type: "group";
  bmolsnr?: boolean;
  width?: string|number;
  numCols?: number;
  enableDisableChangeEventSources?;
}

export interface _CELL_SPACER_XformItemDescription extends Base_XFormItemDescription {
  type: "cell_spacer";
}

export interface _CHECKBOX_XformItemDescription extends Base_XFormItemDescription {
  type: "checkbox";
  ref: string;
  label?: string;
  bmolsnr?: boolean;
  labelLocation?: string;
  onChange?: () => void;
}

export interface _TOP_GROUPER_XformItemDescription extends GroupBase_XFormItemDescription {
  type: "top_grouper";
}

export interface _DWT_LIST_XformItemDescription {
  type: "dwt_list";
}

export interface _ZAWIZ_TOP_GROUPER_XformItemDescription extends GroupBase_XFormItemDescription {
  type: "zawiz_top_grouper";
}

export interface _DWT_BUTTON_XformItemDescription extends Base_XFormItemDescription {
  type: "dwt_button";
  label?: string;
  icon?: string;
  width?: string | number;
  onActivate: (() => void) | ((ev) => void);
}

export interface _DWT_ALERT_XformItemDescription extends Base_XFormItemDescription {
  type: "dwt_alert";
  containerCssStyle?: string;
  style?: number;
  iconVisible?: boolean;
}

export interface _SPACER_XformItemDescription extends Base_XFormItemDescription {
  type: "spacer";
  height?: string|number;
}

export interface _GROUPER_XformItemDescription extends GroupBase_XFormItemDescription {
  type: "grouper";
  cssStyle?: string;
  width?: string|number;
}

export interface _TEXTFIELD_XformItemDescription extends Base_XFormItemDescription {
  type: "textfield";
  ref: string;
  align?: string;
  labelLocation?: string;
  width?: string|number;
  label?: string;
  bmolsnr?: boolean;
}

export interface _OSELECT1_XformItemDescription extends Base_XFormItemDescription {
  type: "oselect1";
  ref: string;
  align?: string;
  labelLocation?: string;
  width?: string|number;
  label?: string;
  bmolsnr?: boolean;
}
