import {
  Sidebar,
  Navbar,
  MainContent,
  CreateCardForm,
  CreateEventoForm,
} from 'components';

export function CreationPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-2">
        <Sidebar />
        <MainContent>
          <CreateCardForm />
          <CreateEventoForm />
        </MainContent>
      </div>
    </>
  );
}
