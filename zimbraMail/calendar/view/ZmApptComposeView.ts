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

import {DwtComposite} from "../../../ajax/dwt/widgets/DwtComposite";
import {AjxVector} from "../../../ajax/util/AjxVector";
import {ZmContact} from "../../abook/model/ZmContact";
import {ZmHtmlEditor} from "../../share/view/htmlEditor/ZmHtmlEditor";
import {ZmApptClone} from "../model/ZmAppt";

export class ZmApptComposeView extends DwtComposite {

  public static MODE_REPLACE: number;
  public static MODE_ADD: number;

  public isValid(): boolean { return undefined; }
  public getAppt(attId?: number): ZmApptClone { return undefined; }
  public getHtmlEditor(): ZmHtmlEditor { return undefined; }
  public getComposeMode(): string { return undefined; }
  public updateAttendees(
    attendees: ZmContact[]|AjxVector<ZmContact>,
    type: string,
    mode?: number,
    index?: number,
  ): void {}
  public isReminderOnlyChanged(): boolean { return undefined; }
  public isDirty(): boolean { return undefined; }
  public cleanup(): void {}

}
