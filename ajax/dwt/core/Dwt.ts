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

import {DwtRectangle} from "../graphics/DwtRectangle";
import {DwtPoint} from "../graphics/DwtPoint";

export class Dwt {
  public static DISPLAY_BLOCK: string = "block";
  public static DISPLAY_NONE: string = "none";
  public static DISPLAY_INLINE: string = "inline";
  public static SCROLL: number;
  public static ABSOLUTE_STYLE: string;
  public static DEFAULT: number;
  public static HTML: "text/html";
  public static TEXT: "text/plain";
  public static DND_DROP_MOVE: string;
  public static KEY_ID: string;
  public static KEY_OBJECT: string;
  public static Z_VIEW: number;
  public static SCROLL_Y: number;
  public static STATIC_STYLE: string;
  public static RELATIVE_STYLE: string;

  public static setSize(el: HTMLElement, newWidth: number|string, height: number|string): void {}
  public static getSize(el: HTMLElement): DwtPoint { return undefined; }

  public static setVisible(el: HTMLElement, visible: boolean): void {}
  public static delClass(el: HTMLElement, del: string|RegExp, add?: string): void {}
  public static addClass(el: HTMLElement, _kbFocusClass: string): void {}
  public static setDisplay(htmlElement: HTMLElement, value: string): void {}
  public static setHandler(htmlElement: HTMLElement, event: string, func: Function): void {}
  public static getNextId(): string { return undefined; }
  public static setLoadedTime(id: string, time?: Date): void {}
  public static getBounds(htmlElement: HTMLElement, rect?: DwtRectangle): DwtRectangle { return undefined; }
  public static getWindowSize(point?: DwtPoint): DwtPoint { return undefined; }
  public static getVisible(textarea: HTMLElement): boolean { return undefined; }
  public static setPosition(div: HTMLElement, style: string): void {}
  public static getElement(el: string|HTMLElement): HTMLElement { return undefined; }
  public static setVisibility(el: string|HTMLElement, visible: boolean): void {}
}
