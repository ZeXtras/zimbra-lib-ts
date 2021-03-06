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

export class ZmCsfeResult {

  public isZmCsfeResult: boolean = true;

  public _data: ZmCsfeResultData;
  public _isException: boolean;
  public _header: ZmCsfeResultHeader;

  constructor(data?: ZmCsfeResultData, isException?: boolean, header?: ZmCsfeResultHeader) {
    this.set(data, isException, header);
  }

  public toString(): string {
    return "ZmCsfeResult";
  }

  public set(data?: ZmCsfeResultData, isException?: boolean, header?: ZmCsfeResultHeader) {
    this._data = data;
    this._isException = (isException === true);
    this._header = header;
  }

  public getResponse(): ZmCsfeResultData {
    if (this._isException) {
      throw this._data;
    } else {
      return this._data;
    }
  }

}

export interface ZmCsfeResultData {
  [req: string]: any;
  response?: string|{};
}

export interface ZmCsfeResultHeader {

}

export interface ZmCsfeResultResponse {
  response?: {[key: string]: any};
}
