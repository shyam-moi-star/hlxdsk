import { navItems, roleIcons } from "@/data/helpdesk";

export function Sidebar({ userRole, setUserRole }) {
  const RoleIcon = roleIcons[userRole];
  
  return (
    <div className="w-60 bg-[#F7F9FC] flex flex-col">
      {/* User Card */}
      <div className="m-4 mb-6">
        <div className="bg-white rounded border border-[#E4E9F2] h-[72px] flex items-center px-4">
          <div className="w-8 h-8 bg-[#EDF3FF] rounded-full flex items-center justify-center text-[#1570FF] font-semibold text-sm">
            <RoleIcon className="w-4 h-4" />
          </div>
          <div className="ml-3 flex-1">
            <div className="font-semibold text-sm text-[#2A2E45] capitalize">
              {userRole} User
            </div>
            <div className="text-[11px] text-[#8A8FA6]">
              {userRole}@helpdesk.com
            </div>
          </div>
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="text-[11px] border border-[#E4E9F2] rounded px-2 py-1 bg-white"
          >
            <option value="admin">Admin</option>
            <option value="agent">Agent</option>
            <option value="technician">Technician</option>
          </select>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4">
        <div className="text-[11px] font-semibold text-[#8A8FA6] uppercase tracking-wider py-2">
          Navigate
        </div>
        <div className="space-y-1">
          {navItems.filter(item => item.roles.includes(userRole)).map((item, index) => (
            <div
              key={index}
              className={`h-9 flex items-center px-3 rounded cursor-pointer ${
                item.active
                  ? "bg-[#1570FF] text-white"
                  : "text-[#2A2E45] hover:bg-[#EDF3FF]"
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 bg-white rounded border border-[#E4E9F2] p-3">
          <div className="text-[11px] font-semibold text-[#8A8FA6] uppercase tracking-wider mb-3">
            Quick Stats
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#6F7689]">Open Tickets</span>
              <span className="text-sm font-semibold text-[#2A2E45]">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#6F7689]">In Progress</span>
              <span className="text-sm font-semibold text-[#2A2E45]">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#6F7689]">Overdue</span>
              <span className="text-sm font-semibold text-red-600">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <div className="text-[11px] text-[#8A8FA6] text-center">
          © 2024 Helpdesk System
        </div>
      </div>
    </div>
  );
}
