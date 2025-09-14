import { Search, Bell, Settings, Plus } from "@/lib/icons";
import { roleIcons } from "@/data/helpdesk";

export function TopBar({ permissions, onNewTicket, userRole }) {
  const RoleIcon = roleIcons[userRole];

  return (
    <div className="h-14 bg-white border-b border-[#E4E9F2] flex items-center px-6">
      {/* Brand */}
      <div className="font-bold text-base text-[#2A2E45] mr-8">
        Helpdesk Pro
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[400px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8FA6]" />
          <input
            type="text"
            placeholder="Search tickets, users, or ticket numbers..."
            className="w-full h-8 pl-10 pr-12 border border-[#E4E9F2] rounded text-sm placeholder-[#B6BACE] focus:outline-none focus:ring-2 focus:ring-[#1570FF]"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[11px] text-[#8A8FA6]">
            ⌘K
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        <button className="w-8 h-8 bg-white border border-[#E4E9F2] rounded-full flex items-center justify-center hover:bg-[#EDF3FF] relative">
          <Bell className="w-4 h-4 text-[#6F7689]" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </button>
        <button className="w-8 h-8 bg-white border border-[#E4E9F2] rounded-full flex items-center justify-center hover:bg-[#EDF3FF]">
          <Settings className="w-4 h-4 text-[#6F7689]" />
        </button>
        {permissions.canCreate && (
          <button
            onClick={onNewTicket}
            className="px-4 h-8 bg-[#1570FF] text-white rounded text-sm font-semibold hover:bg-[#0F5FE6] flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Ticket</span>
          </button>
        )}
        <div className="w-8 h-8 bg-[#EDF3FF] rounded-full flex items-center justify-center text-[#1570FF] font-semibold text-sm">
          <RoleIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
