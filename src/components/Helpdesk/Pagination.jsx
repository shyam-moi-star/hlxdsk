export function Pagination() {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-[#8A8FA6]">
        Showing 1-4 of 47 tickets
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-[#E4E9F2] rounded text-sm hover:bg-[#F7F9FC] disabled:opacity-50" disabled>
          Previous
        </button>
        <button className="px-3 py-1 bg-[#1570FF] text-white rounded text-sm hover:bg-[#0F5FE6]">
          1
        </button>
        <button className="px-3 py-1 border border-[#E4E9F2] rounded text-sm hover:bg-[#F7F9FC]">
          2
        </button>
        <button className="px-3 py-1 border border-[#E4E9F2] rounded text-sm hover:bg-[#F7F9FC]">
          Next
        </button>
      </div>
    </div>
  );
}
