import { useState } from "react";
import { tickets as initialTickets } from "@/data/helpdesk";

export function useHelpdeskDashboard() {
  const [tickets] = useState(initialTickets);
  const [selectedTickets, setSelectedTickets] = useState(new Set());
  const [viewMode, setViewMode] = useState("list");
  const [userRole, setUserRole] = useState("admin"); // admin, agent, technician
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const toggleTicketSelection = (ticketId) => {
    const newSelected = new Set(selectedTickets);
    if (newSelected.has(ticketId)) {
      newSelected.delete(ticketId);
    } else {
      newSelected.add(ticketId);
    }
    setSelectedTickets(newSelected);
  };

  const selectAll = () => {
    if (selectedTickets.size === tickets.length) {
      setSelectedTickets(new Set());
    } else {
      setSelectedTickets(new Set(tickets.map((t) => t.id)));
    }
  };

  const getRolePermissions = () => {
    switch(userRole) {
      case "admin":
        return { canCreate: true, canEdit: true, canAssign: true, canDelete: true };
      case "agent":
        return { canCreate: true, canEdit: true, canAssign: true, canDelete: false };
      case "technician":
        return { canCreate: false, canEdit: false, canAssign: false, canDelete: false };
      default:
        return { canCreate: false, canEdit: false, canAssign: false, canDelete: false };
    }
  };

  const permissions = getRolePermissions();

  return {
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
  };
}
