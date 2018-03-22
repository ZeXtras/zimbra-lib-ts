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

import {AjxListener} from "../../ajax/events/AjxListener";

export class ZaOperation {
// types
  public static TYPE_BUTTON: number;
  public static TYPE_MENU: number;

// Operations
  public static NONE: number;		// no operations or menu items
  public static SEP: number;		// separator
  public static NEW: number;
  public static DELETE: number;
  public static REFRESH: number;
  public static EDIT: number;
  public static CHNG_PWD: number;
  public static CLOSE: number;
  public static SAVE: number;
  public static NEW_WIZARD: number;
  public static NEW_ALIAS: number;
  public static NEW_DL: number;
  public static NEW_RESOURCE: number;
  public static NEW_ADMIN: number;
  public static PAGE_FORWARD: number;
  public static PAGE_BACK: number;
  public static DUPLICATE: number;
  public static GAL_WIZARD: number;
  public static AUTH_WIZARD: number;
  public static AUTOPROV_WIZARD: number;
  public static VIEW_MAIL: number;
  public static MOVE_ALIAS: number;
  public static NEW_MENU: number;
  public static HELP: number;
  public static REINDEX_MAILBOX: number;
  public static LABEL: number;
  public static VIEW: number;
  public static SEARCH_ACCOUNTS: number;
  public static SEARCH_ALIASES: number;
  public static SEARCH_DLS: number;
  public static SEARCH_DOMAINS: number;
  public static SEARCH_RESOURCES: number;
  public static SEARCH_COSES: number;
  public static SEARCH_ALL: number;
  public static FLUSH: number;
  public static HOLD: number;
  public static REQUEUE: number;
  public static RELEASE: number;
  public static INIT_NOTEBOOK: number;
  public static CHECK_MX_RECORD: number;
  public static SEARCH_RESULT_COUNT: number;
  public static SEARCH_BY_ADDESS_TYPE: number;
  public static SEARCH_BY_DOMAIN: number;
  public static SEARCH_BY_SERVER: number;
  public static SEARCH_BY_BASIC: number;
  public static SEARCH_BY_REMOVE_ALL: number;
  public static SEARCH_BY_ADVANCED: number;
  public static SEARCH_BY_COS: number;
  public static DEPLOY_ZIMLET: number;
// public static ENABLE_ZIMLET: number;
// public static DISABLE_ZIMLET: number;
  public static CLOSE_TAB: number;
  public static CLOSE_OTHER_TAB: number;
  public static CLOSE_ALL_TAB: number;
  public static TOGGLE: number;
  public static DOWNLOAD_SERVER_CONFIG: number;
  public static DOWNLOAD_GLOBAL_CONFIG: number;
  public static VIEW_DOMAIN_ACCOUNTS: number;
  public static FLUSH_CACHE: number;
  public static MORE_ACTIONS: number;
  public static EXPIRE_SESSION: number;
  public static ADD_DOMAIN_ALIAS: number;
  public static INSTALL_DOMAIN_CERT: number;
  public static LOGOFF: number;
// For Appliance
  public static LEFT_BRACKET: number;
  public static RIGHT_BRACKET: number;

  public enabled: boolean;
  constructor(
    id: number,
    caption: string,
    tooltip: string,
    imgId: string,
    disImgId: string,
    lsnr: AjxListener,
    type?: number,
    menuOpList?: any,
    className?: string,
    labelId?: string,
  ) {}
}
