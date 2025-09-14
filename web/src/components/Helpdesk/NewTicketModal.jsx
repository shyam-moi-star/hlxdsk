import { XCircle, Upload } from "@/lib/icons";

export function NewTicketModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-4/5 max-w-3xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#E4E9F2]">
          <h2 className="text-xl font-bold text-[#2A2E45]">Create New Ticket</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F7F9FC] rounded"
          >
            <XCircle className="w-6 h-6 text-[#6F7689]" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Title *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
                  placeholder="Enter ticket title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Description *</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
                  placeholder="Describe the issue or request"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Letter Reference Number</label>
                <input
                  type="text"
                  className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
                  placeholder="REF-2024-XXX (Optional)"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Priority *</label>
                <select className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]">
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Ticket Type *</label>
                <select className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]">
                  <option value="">Select Type</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="software">Software</option>
                  <option value="hardware">Hardware</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="support">Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Scheduled Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2A2E45] mb-2">Assign To Team</label>
                <select className="w-full p-3 border border-[#E4E9F2] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#1570FF]">
                  <option value="">Select Team</option>
                  <option value="network">Network Team</option>
                  <option value="it-support">IT Support</option>
                  <option value="hardware">Hardware Team</option>
                  <option value="server">Server Team</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-[#2A2E45] mb-2">Attachments</label>
            <div className="border-2 border-dashed border-[#E4E9F2] rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-[#8A8FA6] mx-auto mb-2" />
              <p className="text-sm text-[#8A8FA6]">
                Drag and drop files here, or <span className="text-[#1570FF] cursor-pointer">browse</span>
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-[#E4E9F2]">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-[#E4E9F2] text-[#6F7689] rounded hover:bg-[#F7F9FC]"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-[#1570FF] text-white rounded hover:bg-[#0F5FE6]">
              Create Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
