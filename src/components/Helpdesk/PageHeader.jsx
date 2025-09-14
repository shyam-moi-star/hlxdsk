import { List, Grid3X3 } from "@/lib/icons";

export function PageHeader({ viewMode, setViewMode }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-[#2A2E45]">Helpdesk Tickets</h1>
        <p className="text-sm text-[#8A8FA6] mt-1">Manage and track support tickets</p>
      </div>
      
      <div className="flex items-center space-x-3">
        {/* Priority Filter */}
        <select className="h-8 px-3 border border-[#E4E9F2] rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1570FF]">
          <option value="">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>

        {/* Status Filter */}
        <select className="h-8 px-3 border border-[#E4E9F2] rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1570FF]">
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="assigned">Assigned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        {/* View Toggle */}
        <div className="flex border border-[#E4E9F2] rounded">
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 text-sm ${
              viewMode === "list"
                ? "bg-[#1570FF] text-white"
                : "bg-white text-[#6F7689] hover:bg-[#F7F9FC]"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 text-sm border-l border-[#E4E9F2] ${
              viewMode === "grid"
                ? "bg-[#1570FF] text-white"
                : "bg-white text-[#6F7689] hover:bg-[#F7F9FC]"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
