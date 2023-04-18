import { Sidebar, Navbar, MainContent, CreateCardForm } from 'components';

export function CreateCardPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-2">
        <Sidebar />
        <MainContent>
          <CreateCardForm />
        </MainContent>
      </div>
    </>
  );
}
