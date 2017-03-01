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

import {DwtButton, DwtButtonParams} from "./DwtButton";
import {AjxVector} from "../../util/AjxVector";
import {AjxListener} from "../../events/AjxListener";

export class DwtSelect extends DwtButton {

  constructor(params: DwtSelectParams) {
    super(params);
  }

  public getValue(): any { return undefined; }
  public addOption(option: DwtSelectOptionData, selected?: boolean): number;
  public addOption(option: DwtSelectOption, selected?: boolean): number;
  public addOption(option: string, selected: boolean, value: any, image: string): number;
  public addOption(option: any, selected?: boolean, value?: any, image?: string): number { return undefined; }
  public getOptions(): AjxVector<DwtSelectOption> { return undefined; }
  public addChangeListener(listener: AjxListener): void {}
  public clearOptions(): void {}
  public setSelectedValue(val: string): void {}
}

export interface DwtSelectParams extends DwtButtonParams {
  options?: DwtSelectOptionData[];
}

export class DwtSelectOption {
  constructor(value: string, selected: boolean, displayValue?: string, owner?: DwtSelect, optionalDOMId?: string, image?: string, selectedValue?: string, hr?: boolean, extraData?: {}, id?: string) {}
  public getDisplayValue(): string { return undefined; }
}

export class DwtSelectOptionData {
  value: string;
  id: string;
  extraData: any;
  displayValue: string;
  selectedValue: string;
  isSelected: boolean;
  image?: string;
  obo?: boolean;

  constructor(value: string,
              displayValue: string,
              isSelected?: boolean,
              selectedValue?: string,
              image?: string,
              id?: string,
              extraData?: any) {}
}
