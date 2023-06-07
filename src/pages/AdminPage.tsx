import {
  Sidebar,
  Navbar,
  MainContent,
  CreateCardForm,
  CreateEventoForm,
} from 'components';
import { ListAnnouncements } from 'components/Forms/ListAnnouncements';
import { useState } from 'react';

export function AdminPage() {
  const [showCreateAnnouncementForm, setShowCreateAnnouncementForm] =
    useState(false);
  const [showCreateEventoForm, setShowCreateEventoForm] = useState(false);
  const [showListAnnouncements, setShowListAnnouncements] = useState(false);

  const toggleCreateAnnouncementForm = () => {
    setShowCreateAnnouncementForm(true);
    setShowCreateEventoForm(false);
    setShowListAnnouncements(false);
  };

  const toggleCreateEventoForm = () => {
    setShowCreateEventoForm(true);
    setShowCreateAnnouncementForm(false);
    setShowListAnnouncements(false);
  };
  const toggleListAnnouncements = () => {
    setShowListAnnouncements(true);
    setShowCreateAnnouncementForm(false);
    setShowCreateEventoForm(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-gray-200 ">
        <Sidebar
          toggleCreateAnnouncementForm={toggleCreateAnnouncementForm}
          toggleCreateEventoForm={toggleCreateEventoForm}
          toggleListAnnouncements={toggleListAnnouncements}
        />
        <MainContent>
          {showCreateAnnouncementForm && <CreateCardForm />}
          {showCreateEventoForm && <CreateEventoForm />}
          {showListAnnouncements && <ListAnnouncements />}
        </MainContent>
      </div>
    </>
  );
}
