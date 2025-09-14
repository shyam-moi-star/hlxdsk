import { Paperclip, Eye, Edit3, MoreHorizontal } from "@/lib/icons";
import { priorityColors, statusColors } from "@/data/helpdesk";

export function TicketListItem({ ticket, isSelected, onToggleSelection, onSelectTicket, permissions }) {
  return (
    <div className="px-6 py-4 hover:bg-[#FAFBFD]">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelection(ticket.id)}
          className="w-4 h-4 text-[#1570FF] rounded focus:ring-[#1570FF]"
        />
        
        <div className="flex-1 grid grid-cols-8 gap-4 items-center">
          {/* Ticket Number */}
          <div>
            <div 
              className="font-semibold text-sm text-[#1570FF] cursor-pointer hover:underline"
              onClick={() => onSelectTicket(ticket)}
            >
              {ticket.id}
            </div>
            {ticket.letterRef && (
              <div className="text-xs text-[#8A8FA6]">{ticket.letterRef}</div>
            )}
          </div>

          {/* Title & Description */}
          <div className="col-span-2">
            <div className="font-semibold text-sm text-[#2A2E45] mb-1">{ticket.title}</div>
            <div className="text-xs text-[#8A8FA6] line-clamp-2">{ticket.description}</div>
            <div className="flex items-center mt-2 space-x-3">
              <span className="text-xs text-[#8A8FA6]">{ticket.ticketType}</span>
              {ticket.attachments.length > 0 && (
                <div className="flex items-center text-xs text-[#8A8FA6]">
                  <Paperclip className="w-3 h-3 mr-1" />
                  {ticket.attachments.length}
                </div>
              )}
            </div>
          </div>

          {/* Priority */}
          <div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[ticket.priority]}`}>
              {ticket.priority}
            </span>
          </div>

          {/* Status */}
          <div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[ticket.status]}`}>
              {ticket.status}
            </span>
          </div>

          {/* Assigned To */}
          <div>
            <div className="text-sm text-[#2A2E45]">{ticket.assignedTo}</div>
            <div className="text-xs text-[#8A8FA6]">{ticket.assignedTeam}</div>
          </div>

          {/* Due Date */}
          <div>
            <div className="text-sm text-[#2A2E45]">{ticket.scheduledDate}</div>
            <div className="text-xs text-[#8A8FA6]">{ticket.lastUpdate}</div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <button
              onClick={() => onSelectTicket(ticket)}
              className="p-1 hover:bg-[#EDF3FF] rounded"
              title="View Details"
            >
              <Eye className="w-4 h-4 text-[#6F7689]" />
            </button>
            {permissions.canEdit && (
              <button className="p-1 hover:bg-[#EDF3FF] rounded" title="Edit">
                <Edit3 className="w-4 h-4 text-[#6F7689]" />
              </button>
            )}
            <button className="p-1 hover:bg-[#EDF3FF] rounded" title="More Actions">
              <MoreHorizontal className="w-4 h-4 text-[#6F7689]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
