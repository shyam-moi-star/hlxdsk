import { TicketListItem } from "@/components/Helpdesk/TicketListItem";

export function TicketList({ tickets, selectedTickets, onSelectAll, onToggleSelection, onSelectTicket, permissions }) {
  return (
    <div className="bg-white border border-[#E4E9F2] rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="bg-[#F7F9FC] border-b border-[#E4E9F2] px-6 py-3">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={selectedTickets.size === tickets.length && tickets.length > 0}
            onChange={onSelectAll}
            className="w-4 h-4 text-[#1570FF] rounded focus:ring-[#1570FF]"
          />
          <div className="flex-1 grid grid-cols-8 gap-4 text-xs font-semibold text-[#8A8FA6] uppercase tracking-wider">
            <div>Ticket #</div>
            <div className="col-span-2">Title & Description</div>
            <div>Priority</div>
            <div>Status</div>
            <div>Assigned To</div>
            <div>Due Date</div>
            <div>Actions</div>
          </div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-[#E4E9F2]">
        {tickets.map((ticket) => (
          <TicketListItem
            key={ticket.id}
            ticket={ticket}
            isSelected={selectedTickets.has(ticket.id)}
            onToggleSelection={onToggleSelection}
            onSelectTicket={onSelectTicket}
            permissions={permissions}
          />
        ))}
      </div>
    </div>
  );
}
