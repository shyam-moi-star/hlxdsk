export function QuickActionsBar({ selectedCount, permissions }) {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-[#EDF3FF] border border-[#1570FF] rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#1570FF]">
          {selectedCount} ticket(s) selected
        </span>
        <div className="flex space-x-2">
          {permissions.canAssign && (
            <button className="px-3 py-1 bg-[#1570FF] text-white rounded text-sm hover:bg-[#0F5FE6]">
              Assign
            </button>
          )}
          {permissions.canEdit && (
            <button className="px-3 py-1 bg-white border border-[#1570FF] text-[#1570FF] rounded text-sm hover:bg-[#EDF3FF]">
              Update Status
            </button>
          )}
          <button className="px-3 py-1 bg-white border border-[#E4E9F2] text-[#6F7689] rounded text-sm hover:bg-[#F7F9FC]">
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
