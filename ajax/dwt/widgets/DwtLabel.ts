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

import {DwtComposite, DwtCompositeParams} from "./DwtComposite";
import {DwtControl} from "./DwtControl";

export class DwtLabel extends DwtComposite {
  public static IMAGE_RIGHT: string;

  constructor(params: DwtLabelParams) {
    super(params);
  }

  public _createHtmlFromTemplate(templateId: string, data: {[key: string]: any}): void {
    DwtControl.prototype._createHtmlFromTemplate.call(this, templateId, data);
  }

  public setText(text: string): void {}

  public setImage(imageInfo: string): void {}

  public getImage(direction?: string): string {
    return undefined;
  }
}

export interface DwtLabelParams extends DwtCompositeParams {
  style?: string|number;
}
