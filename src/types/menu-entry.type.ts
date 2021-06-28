export type MenuEntry = {
  title: string;
  path: string;
  subMenu?: MenuEntry[];
};
