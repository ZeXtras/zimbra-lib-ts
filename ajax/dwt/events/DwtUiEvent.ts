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

import {DwtEvent} from "./DwtEvent";
import {DwtControl} from "../widgets/DwtControl";

export class DwtUiEvent extends DwtEvent {
  public shiftKey: boolean;
  public ctrlKey: boolean;
  public target: HTMLElement;

  public static setBehaviour(ev: DwtUiEvent, stopPropagation: boolean, allowDefault: boolean, dontCallPreventDefault?: boolean): void {}
  public static getTargetWithProp(ev: Event, prop: string, useRelatedTarget?: boolean, value?: string): HTMLElement { return undefined; }

  public static getEvent(ev: Event, target?: HTMLElement): Event { return undefined; }
  public setFromDhtmlEvent(event: Event, obj?: DwtControl|true): Event {return undefined; }
}
