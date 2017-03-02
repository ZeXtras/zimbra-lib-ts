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

import {ZmCalItemEditView} from "./ZmCalItemEditView";
import {ZmAutocompleteMatch} from "../../share/model/ZmAutocomplete";
import {ZmContact} from "../../abook/model/ZmContact";
import {ZmScheduleAssistantView} from "./ZmScheduleAssistantView";
import {AjxVector} from "../../../ajax/util/AjxVector";
import {DwtInputField} from "../../../ajax/dwt/widgets/DwtInputField";

export class ZmApptEditView extends ZmCalItemEditView {

  public _locationTextMap: {[name: string]: ZmContact};
  public _isKnownLocation: boolean;
  public _isKnownResource: boolean;
  public _scheduleAssistant: ZmScheduleAssistantView;
  public _attInputField: {[name: string]: DwtInputField};

  public _autocompleteCallback(text: string, el: ZmApptEditViewInputEl, match: ZmAutocompleteMatch): void {}
  public setAttendeesRole(attendees: ZmContact[]|AjxVector<ZmContact>, role: string): void {}
  public updateToolbarOps() {}
  public _updateScheduler(type: string, attendees: ZmContact[]|AjxVector<ZmContact>): void {}
  public getAttendeesFromString(PERSON: string, value: any): AjxVector<ZmContact> { return undefined; }

}

export interface ZmApptEditViewInputEl extends HTMLInputElement {
  _attType: string;
}