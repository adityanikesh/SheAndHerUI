import { SubMenu } from './submenu';

export class Menu {
  name: string;
  url: string;
  icon: string;
  submenus: SubMenu[];
  hide: boolean;
  withSubMenu: boolean;
}
