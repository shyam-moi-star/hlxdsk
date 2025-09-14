import { XCircle, FileText, Download, Upload } from "@/lib/icons";
import { priorityColors, statusColors } from "@/data/helpdesk";

export function TicketDetailModal({ ticket, onClose, permissions, userRole }) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-4/5 max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#E4E9F2]">
          <div>
            <h2 className="text-xl font-bold text-[#2A2E45]">{ticket.title}</h2>
            <p className="text-sm text-[#8A8FA6]">Ticket #{ticket.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F7F9FC] rounded"
          >
            <XCircle className="w-6 h-6 text-[#6F7689]" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold text-[#2A2E45] mb-2">Description</h3>
              <p className="text-[#6F7689]">{ticket.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2A2E45] mb-2">Attachments</h3>
              <div className="space-y-2">
                {ticket.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-[#F7F9FC] rounded border">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-[#6F7689]" />
                      <span className="text-sm text-[#2A2E45]">{file}</span>
                    </div>
                    <button className="p-1 hover:bg-[#EDF3FF] rounded">
                      <Download className="w-4 h-4 text-[#6F7689]" />
                    </button>
                  </div>
                ))}
              </div>
              
              {(permissions.canEdit || userRole === "technician") && (
                <button className="mt-3 px-4 py-2 border border-[#E4E9F2] rounded text-sm hover:bg-[#F7F9FC] flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Attachment</span>
                </button>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-[#2A2E45] mb-2">Comments & Updates</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#F7F9FC] rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-[#2A2E45]">Admin User</span>
                    <span className="text-xs text-[#8A8FA6]">2 hours ago</span>
                  </div>
                  <p className="text-sm text-[#6F7689]">Ticket created and assigned to network team for investigation.</p>
                </div>
              </div>
              <div className="mt-3">
                <textarea
                  placeholder="Add a comment..."
                  rows={3}
                  className="w-full p-3 border border-[#E4E9F2] rounded text-sm placeholder-[#B6BACE] focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
                />
                <button className="mt-2 px-4 py-2 bg-[#1570FF] text-white rounded text-sm hover:bg-[#0F5FE6]">
                  Add Comment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#2A2E45] mb-3">Ticket Details</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-[#8A8FA6] uppercase">Priority</label>
                  <div className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-medium text-[#8A8FA6] uppercase">Status</label>
                  <div className="mt-1">
                    {permissions.canEdit ? (
                      <select defaultValue={ticket.status.toLowerCase().replace(" ", "-")} className="w-full p-2 border border-[#E4E9F2] rounded text-sm">
                        <option value="new">New</option>
                        <option value="assigned">Assigned</option>
                        <option value="in-progress">In Progress</option>
                        <option value="pending-review">Pending Review</option>
                        <option value="completed">Completed</option>
                        <option value="closed">Closed</option>
                      </select>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[ticket.status]}`}>
                        {ticket.status}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#8A8FA6] uppercase">Assigned To</label>
                  <div className="mt-1 text-sm text-[#2A2E45]">{ticket.assignedTo}</div>
                  <div className="text-xs text-[#8A8FA6]">{ticket.assignedTeam}</div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#8A8FA6] uppercase">Scheduled Date</label>
                  <div className="mt-1 text-sm text-[#2A2E45]">{ticket.scheduledDate}</div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#8A8FA6] uppercase">Type</label>
                  <div className="mt-1 text-sm text-[#2A2E45]">{ticket.ticketType}</div>
                </div>

                {ticket.letterRef && (
                  <div>
                    <label className="text-xs font-medium text-[#8A8FA6] uppercase">Reference</label>
                    <div className="mt-1 text-sm text-[#2A2E45]">{ticket.letterRef}</div>
                  </div>
                )}
              </div>
            </div>

            {permissions.canEdit && (
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-[#1570FF] text-white rounded text-sm hover:bg-[#0F5FE6]">
                  Save Changes
                </button>
                <button className="w-full px-4 py-2 border border-[#E4E9F2] text-[#6F7689] rounded text-sm hover:bg-[#F7F9FC]">
                  Print Ticket
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
