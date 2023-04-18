import { Sidebar, Card, Navbar, CardColumn, MainContent } from 'components';

export function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row gap-2">
        <Sidebar />
        <MainContent>
          <CardColumn />
          <CardColumn />
          <CardColumn />
        </MainContent>
      </div>
    </>
  );
}
