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

export class AjxCallback {

  private obj: Object;
  private func: Function;
  private args: any[];

  public isAjxCallback: boolean = true;

  constructor(obj: Object, func: Function, args: any[] = []) {
    if (arguments.length === 0) return;

    this.obj = obj;
    this.func = func;
    this.args = args;
  }

  public run(...args: any[]): any {
    if (this.func) {
      return this.func.apply(this.obj || void 0, [].concat(this.args).concat(args));
    }
  }

  public toString(): string {
    return "AjxCallback";
  }

  public static simpleClosure(fcn: Function, obj: Object, ...args: any[]): Function {
    return void 0;
  }
}
