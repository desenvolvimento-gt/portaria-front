import {
  Sidebar,
  Navbar,
  MainContent,
  CreateCardForm,
  CreateEventoForm,
} from 'components';

export function AdminPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-gray-200 ">
        <Sidebar />
        <MainContent>
          <CreateCardForm />
          <CreateEventoForm />
        </MainContent>
      </div>
    </>
  );
}
