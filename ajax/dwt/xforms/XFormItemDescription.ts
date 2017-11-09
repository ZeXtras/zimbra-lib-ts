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
import {XForm} from "./XForm";
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
  onChange?: (value: string, event: Event, form: XForm) => void;
  getDisplayValue?: (value: any) => string;
  valueChangeEventSources?: string[];
  bmolsnr?: boolean;
}
