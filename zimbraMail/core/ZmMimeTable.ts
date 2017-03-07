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

export class ZmMimeTable {

  public static APP_ZIMBRA_DOC: string;
  public static TEXT_HTML: "text/html";
  public static TEXT_PLAIN: "text/plain";

  public static _table: {[mime: string]: ZmMimeInfoData};

  // Advanced Documents for Briefcase
  public static IS_WEBDOC: {[mime: string]: boolean};
  public static LIBREOFFICE_MS_PPT: string;
  public static LIBREOFFICE_MS_EXCEL: string;
  public static LIBREOFFICE_MS_WORD: string;
  public static LIBREOFFICE_OPENXML_DOC: string;
  public static LIBREOFFICE_OPENXML_EXCEL: string;
  public static LIBREOFFICE_OPENXML_PPT: string;
  public static LIBREOFFICE_TEXT_PLAIN: string;
  public static LIBREOFFICE_LO_WORD: string;
  public static LIBREOFFICE_LO_EXCEL: string;
  public static LIBREOFFICE_LO_PPT: string;
  public static LIBREOFFICE_WRITER_6: string;
  public static LIBREOFFICE_CALC_6: string;
  public static LIBREOFFICE_IMPRESS_6: string;
  public static LIBREOFFICE_DRAW_6: string;
  public static LIBREOFFICE_LO_DRAWING: string;
  public static LIBREOFFICE_LO_CHART: string;
  public static LIBREOFFICE_WRITER_6_GLOBAL_DOC: string;
  public static LIBREOFFICE_LO_MASTER_WORD: string;
  public static LIBREOFFICE_WRITER_6_TEMPLATE: string;
  public static LIBREOFFICE_LO_HTML_DOC_TEMPLATE: string;
  public static LIBREOFFICE_CALC_6_TEMPLATE: string;
  public static LIBREOFFICE_LO_SPREADSHEET_TEMPLATE: string;
  public static LIBREOFFICE_IMPRESS_6_TEMPLATE: string;
  public static LIBREOFFICE_LO_PRESENTATION_TEMPLATE: string;
  public static LIBREOFFICE_DRAW_6_TEMPLATE: string;
  public static LIBREOFFICE_LO_DRAW_TEMPLATE: string;
  public static LIBREOFFICE_LO_DATABASE: string;
  public static LIBREOFFICE_LO_EXTENSION: string;
  public static LIBREOFFICE_MS_RTF_APP: string;
  public static LIBREOFFICE_MS_RTF_TEXT: string;
  public static LIBREOFFICE_LO_TEXT_TEMPLATE: string;
  public static LIBREOFFICE_LOTUS_WORD_PRO: string;
  public static LIBREOFFICE_SVG_XML: string;
  public static LIBREOFFICE_LO_TEXT_FLAT_XML: string;
  public static LIBREOFFICE_LO_SPREADSHEET_FLAT_XML: string;
  public static LIBREOFFICE_LO_PPT_FLAT_XML: string;
  public static LIBREOFFICE_LO_DRAWING_FLAT_XML: string;
  public static LIBREOFFICE_LO_TEXT_MASTER_TEMPLATE: string;
  public static LIBREOFFICE_MS_WORD_MACRO_ENABLED: string;
  public static LIBREOFFICE_MS_WORD_TEMPLATE_MACRO_ENABLED: string;
  public static LIBREOFFICE_MS_EXCEL_TEMPLATE: string;
  public static LIBREOFFICE_MS_EXCEL_TEMPLATE_MACRO_ENABLED: string;
  public static LIBREOFFICE_MS_EXCEL_BINARY: string;
  public static LIBREOFFICE_MS_EXCEL_MACRO_ENABLED: string;
  public static LIBREOFFICE_MS_WORD_TEMPLATE: string;
  public static LIBREOFFICE_OPENXML_PPT_MACRO_ENABLED: string;
  public static LIBREOFFICE_OPENXML_PPT_TEMPLATE: string;
  public static LIBREOFFICE_OPENXML_PPT_TEMPLATEML_MACRO_ENABLED: string;
  public static LIBREOFFICE_OPENXML_PPT_TEMPLATE_MACRO_ENABLED: string;
  public static LIBREOFFICE_PAGEMAKER: string;

  public static getInfo(mimeType: string): ZmMimeInfoData { return undefined; }
  public static isWebDoc(mimeType: string): boolean { return undefined; }
  public static isRenderable(mimetype: string): boolean { return undefined; }
  public static isMultiMedia(mimetype: string): boolean { return undefined; }
}

export interface ZmMimeInfoData {
  desc: string;
  image: string;
  imageLarge: string;
  query?: string;
}
