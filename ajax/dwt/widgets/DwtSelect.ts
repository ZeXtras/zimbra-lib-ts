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

import {AjxListener} from "../../events/AjxListener";
import {AjxVector} from "../../util/AjxVector";
import {DwtButton, DwtButtonParams} from "./DwtButton";

export class DwtSelect extends DwtButton {

  constructor(params: DwtSelectParams) {
    super(params);
  }

  public getValue(): any { return undefined; }
  public addOption(option: DwtSelectOptionData|DwtSelectOption, selected?: boolean): number;
  public addOption(option: string, selected: boolean, value: any, image: string): number;
  public addOption(option: any, selected?: boolean, value?: any, image?: string): number { return undefined; }
  public getOptions(): AjxVector<DwtSelectOption> { return undefined; }
  public addChangeListener(listener: AjxListener): void {}
  public clearOptions(): void {}
  public setSelectedValue(val: string): void {}
}

export interface DwtSelectParams extends DwtButtonParams {
  options?: Array<DwtSelectOptionData | DwtSelectOption>;
}

export class DwtSelectOption {
  constructor(
    value: string,
    selected: boolean,
    displayValue?: string,
    owner?: DwtSelect,
    optionalDOMId?: string,
    image?: string,
    selectedValue?: string,
    hr?: boolean,
    extraData?: {},
    id?: string,
  ) {}
  public getDisplayValue(): string { return undefined; }
}

export class DwtSelectOptionData {
  public value: string;
  public id: string;
  public extraData: any;
  public displayValue: string;
  public selectedValue: string;
  public isSelected: boolean;
  public image?: string;
  public obo?: boolean;

  constructor(
    value: string,
    displayValue: string,
    isSelected?: boolean,
    selectedValue?: string,
    image?: string,
    id?: string,
    extraData?: any,
  ) {}
}
