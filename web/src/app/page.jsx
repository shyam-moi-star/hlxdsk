"use client";

import { useHelpdeskDashboard } from "@/hooks/useHelpdeskDashboard";
import { Sidebar } from "@/components/Helpdesk/Sidebar";
import { TopBar } from "@/components/Helpdesk/TopBar";
import { PageHeader } from "@/components/Helpdesk/PageHeader";
import { QuickActionsBar } from "@/components/Helpdesk/QuickActionsBar";
import { TicketList } from "@/components/Helpdesk/TicketList";
import { Pagination } from "@/components/Helpdesk/Pagination";
import { TicketDetailModal } from "@/components/Helpdesk/TicketDetailModal";
import { NewTicketModal } from "@/components/Helpdesk/NewTicketModal";

export default function HelpdeskDashboard() {
  const {
    tickets,
    selectedTickets,
    viewMode,
    setViewMode,
    userRole,
    setUserRole,
    showTicketModal,
    setShowTicketModal,
    selectedTicket,
    setSelectedTicket,
    toggleTicketSelection,
    selectAll,
    permissions,
  } = useHelpdeskDashboard();

  return (
    <div className="flex h-screen bg-white font-inter">
      <Sidebar userRole={userRole} setUserRole={setUserRole} />

      <div className="flex-1 flex flex-col">
        <TopBar
          permissions={permissions}
          onNewTicket={() => setShowTicketModal(true)}
          userRole={userRole}
        />

        <div className="flex-1 p-6 overflow-auto">
          <PageHeader viewMode={viewMode} setViewMode={setViewMode} />
          
          <QuickActionsBar selectedCount={selectedTickets.size} permissions={permissions} />
          
          <TicketList
            tickets={tickets}
            selectedTickets={selectedTickets}
            onSelectAll={selectAll}
            onToggleSelection={toggleTicketSelection}
            onSelectTicket={setSelectedTicket}
            permissions={permissions}
          />

          <Pagination />
        </div>
      </div>

      <TicketDetailModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
        permissions={permissions}
        userRole={userRole}
      />

      <NewTicketModal
        show={showTicketModal}
        onClose={() => setShowTicketModal(false)}
      />
    </div>
  );
}
