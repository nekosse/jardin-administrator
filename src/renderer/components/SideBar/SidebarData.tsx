import { VscFilePdf } from 'react-icons/vsc';
import { FaHome } from 'react-icons/fa';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser } from 'react-icons/ai';

import { SidebarItem } from '../../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Acceuil',
    path: '/home',
    section: 'home',
    icon: <FaHome />,
    iconOpened: <AiFillCaretDown />,
    iconClosed: <AiFillCaretUp />,
    selected: true,
    subnav: [
      {
        title: 'Facturation tutelle',
        path: '/tutelle',
        icon: <AiOutlineUser />,
        selected: false,
        section: 'tutelle',
      },
    ],
  },
  {
    title: 'Facturation tutelle',
    path: '/tutelle',
    section: 'tutelle',
    icon: <VscFilePdf />,
    selected: false,
  },
];
