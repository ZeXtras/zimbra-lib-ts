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

import {ZmObjectManager} from "./ZmObjectManager";
export class ZmObjectHandler {

  constructor(typeName: string, className?: string) {}
  public getTypeName(): string { return undefined; }
  public match(content: string, startIndex: number): RegExpExecArray { return undefined; }
  public generateSpan(html: string[], idx: number, obj: any, spanId?: string, context?: string, options?: {}): number { return undefined; }
  public findObject(content: string, startIndex: number, objectMgr: ZmObjectManager): RegExpExecArray { return undefined; }
  public clicked(spanElement: HTMLElement, contentObjText: string, matchContext?: any, canvas?: any): void {}
  public getClassName(object: Object, context: Object, id: string): string { return undefined; }
  public getHoveredClassName(object: Object, context: Object, id: string): string { return undefined; }
  public getActiveClassName(object: Object, context: Object, id: string): string { return undefined; }

}
