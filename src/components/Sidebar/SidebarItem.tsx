import { ISidebarItem } from 'interfaces';

export function SidebarItem({ children }: ISidebarItem) {
  return (
    <button className="flex items-center p-2 bg-gray-400 text-gray-900 rounded-lg ">
      <span className="flex whitespace-nowrap">{children}</span>
    </button>
  );
}
