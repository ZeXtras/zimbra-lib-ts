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

import {DwtControlEvent} from "../events/DwtControlEvent";
import {DwtFocusEvent} from "../events/DwtFocusEvent";
import {DwtMouseEvent} from "../events/DwtMouseEvent";
import {DwtSelectionEvent} from "../events/DwtSelectionEvent";
import {DwtPoint} from "../graphics/DwtPoint";
import {DwtKeyboardMgr} from "../keyboard/DwtKeyboardMgr";
import {DwtBaseDialog} from "./DwtBaseDialog";
import {DwtComposite} from "./DwtComposite";

export class DwtShell extends DwtComposite {

  public static controlEvent: DwtControlEvent;
  public static selectionEvent: DwtSelectionEvent;
  public static focusEvent: DwtFocusEvent;
  public static mouseEvent: DwtMouseEvent;

  public static getShell(win?: Window): DwtShell {
    return null;
  }

  public _veilOverlay: VeilOverlay;
  public _currWinSize: DwtPoint;

  public getSize(incScroll?: boolean): DwtPoint {
    return new DwtPoint(0, 0);
  }

  public getKeyboardMgr(): DwtKeyboardMgr {
    return null;
  }

}

interface VeilOverlay extends HTMLDivElement {
  activeDialogs: DwtBaseDialog[];
}
