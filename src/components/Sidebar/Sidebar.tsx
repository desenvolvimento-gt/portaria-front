import { SidebarItem } from 'components';
import { useMediaQuery } from 'react-responsive';

export function Sidebar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return isTabletOrMobile ? (
    <></>
  ) : (
    <aside className="flex pr-2 gap-3 justify-start flex-col p-3 top-14  basis-1/6 h-[calc(100vh-56px)] bg-slate-200">
      <SidebarItem>Teste</SidebarItem>
      <SidebarItem>Teste</SidebarItem>
      <SidebarItem>Teste</SidebarItem>
    </aside>
  );
}
