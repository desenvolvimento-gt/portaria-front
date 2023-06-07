import { SidebarItem } from 'components';
import { ISidebar } from 'interfaces';

export function Sidebar({
  toggleListAnnouncements,
  toggleCreateEventoForm,
  toggleCreateAnnouncementForm,
}: ISidebar) {
  return (
    <aside className="flex  gap-3 justify-start flex-col p-3 top-14  basis-1/6 h-[calc(100vh-72px)] bg-white m-2 rounded-lg">
      <SidebarItem onclick={toggleCreateAnnouncementForm}>
        Adicionar Registro
      </SidebarItem>
      <SidebarItem onclick={toggleListAnnouncements}>
        Listagem dos Registros
      </SidebarItem>
      <SidebarItem onclick={toggleCreateEventoForm}>
        Criar Evento Culto
      </SidebarItem>
      <hr className="w-full h-1 mx-auto bg-gray-300 rounded"></hr>
      <SidebarItem onclick={() => {}}>Tipo Culto-data culto</SidebarItem>
      <SidebarItem onclick={() => {}}>Tipo Culto-data culto</SidebarItem>
    </aside>
  );
}
