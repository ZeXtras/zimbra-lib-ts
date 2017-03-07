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

export class AjxStringUtil {

  public static CRLF: string;
  public static CRLF2: string;

  public static clip(origString: string, pixelWidth: number, className?: string): string { return origString; }
  public static urlComponentEncode(extServerUrl: string|number|any): string { return undefined; }
  public static htmlDecode(str: string): string { return undefined; }
  public static convertToHtml(str: string, quotePrefix?: boolean, openTag?: string, closeTag?: string): string { return undefined; }
  public static convertHtml2Text(domRoot: string, convertor?: AjxStringUtilConvertHtml2TextConvertor, onlyOneNewLinePerP?: boolean): string { return undefined; }
  public static defangHtmlContent(html: string): string { return undefined; }
  public static htmlEncode(str: string, includeSpaces?: boolean): string { return undefined; }

  // New line to <br>
  public static nl2br(text: string): string { return undefined; }
}

export interface AjxStringUtilConvertHtml2TextConvertor {
  _before?(domRoot: HTMLElement): HTMLElement;
  _after?(domRoot: HTMLElement): HTMLElement;
}