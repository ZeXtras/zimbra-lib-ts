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

import {AjxVector} from "../../../ajax/util/AjxVector";
import {AjxCallback} from "../../../ajax/boot/AjxCallback";
import {ZmBatchCommand} from "../../../zimbra/csfe/ZmBatchCommand";

export class ZmSearch {

  constructor(params: ZmSearchParam) {}

  public execute(params: {callback: AjxCallback; batchCmd?: ZmBatchCommand}) {}

}

export interface ZmSearchParam {
  query?: string; // The query string
  queryHint?: string; // The query string that gets appended to the query but not something the user needs to know about
  types?: AjxVector<string>|string[]; // The item types to search for
  forceTypes?: boolean; // Use the types we pass, do not override (in case of mail) to the current user's view pref (MSG vs. CONV).
  sortBy?: string; // The sort order
  offset?: number; // The starting point within result set
  limit?: number; // The number of results to return
  getHtml?: boolean; // Return HTML part for inlined msg
  contactSource?: string; // Where to search for contacts (GAL or personal)
  isGalAutocompleteSearch?: boolean; // Autocomplete against GAL
  galType?: string; // The type of GAL autocomplete (account or resource)
  autocompleteType?: string; // The type of autocomplete (account or resource or all)
  lastId?: string; // The ID of last item displayed (for pagination)
  lastSortVal?: string; // The value of sort field for above item
  fetch?: string; // Fetch first hit message
  searchId?: string; // The ID of owning search folder (if any)
  conds?: any[]; // The list of search conditions (<code><SearchCalendarResourcesRequest></code>)
  attrs?: string[]; // The list of attributes to return (<code><SearchCalendarResourcesRequest></code>)
  field?: string; // The field to search within (instead of default)
  soapInfo?: ZmSearchSoapInfoParams; // The object with method, namespace, response, and additional attribute fields for creating soap doc
  response?: {}; // The canned JSON response (no request will be made)
  folders?: string[]; // The list of folders for autocomplete
  allowableTaskStatus?: string[]; // The list of task status types to return (assuming one of the values for "types" is "task")
  accountName?: string; // The account name to run this search against
  idsOnly?: boolean; // Response returns item IDs only
  inDumpster?: boolean; // Search in the dumpster
  origin?: string; // Indicates what initiated the search
  isEmpty?: boolean; // Return empty response without sending a request
}

export interface ZmSearchSoapInfoParams {
  method: string;
  response: string;
  namespace: string;
  additional: {[key: string]: any};
}
