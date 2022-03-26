export interface SidebarItem {
  title: string;
  path: string;
  section: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  selected: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconOpened?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconClosed?: any;
  subnav?: SidebarItem[];
}
