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

import {DwtComposite, DwtCompositeParams} from "./DwtComposite";

export class DwtInputField extends DwtComposite {

  constructor(params: DwtInputFieldParams) {
    super(params);
  }

  public setValue(value: string, noValidate?: boolean): void {}
  public setHandler(eventType: string, handler: Function): void {}
  public getValue(): string { return undefined; }
  public getInputElement(): HTMLInputElement { return undefined; }

}

interface DwtInputFieldParams extends DwtCompositeParams {
  hint?: string;
  forceMultiRow?: boolean;
  rows?: number;
}
