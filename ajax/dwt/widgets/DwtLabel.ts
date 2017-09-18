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
import {DwtControl} from "./DwtControl";

export class DwtLabel extends DwtComposite {
  public static IMAGE_RIGHT: string;

  public static ALIGN_LEFT: number;

  constructor(params: DwtLabelParams) {
    super(params);
  }

  public _createHtmlFromTemplate(templateId: string, data: {[key: string]: any}): void {
    DwtControl.prototype._createHtmlFromTemplate.call(this, templateId, data);
  }

  public setText(text: string): void {}
  public getText(): string { return undefined; }

  public setImage(imageInfo: string): void {}

  public getImage(direction?: string): string {
    return undefined;
  }

  public setAlign(alignStyle: number): void {}
}

export interface DwtLabelParams extends DwtCompositeParams {
  style?: string|number;
}
