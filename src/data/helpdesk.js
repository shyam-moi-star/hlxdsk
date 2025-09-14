import { LayoutDashboard, Ticket, Users, BarChart3, Settings, Shield, UserCheck, Wrench } from "@/lib/icons";

export const tickets = [
  {
    id: "TKT-001",
    title: "Network Connectivity Issue",
    description: "Users unable to access company network from building A",
    letterRef: "REF-2024-001",
    priority: "High",
    status: "New",
    scheduledDate: "2024-01-15",
    ticketType: "Infrastructure",
    assignedTeam: "Network Team",
    assignedTo: "John Smith",
    createdBy: "Admin User",
    createdDate: "2024-01-10",
    attachments: ["network_log.txt", "error_screenshot.png"],
    lastUpdate: "2 hours ago"
  },
  {
    id: "TKT-002",
    title: "Software Installation Request",
    description: "Install Adobe Creative Suite on 5 workstations",
    letterRef: "",
    priority: "Medium",
    status: "Assigned",
    scheduledDate: "2024-01-16",
    ticketType: "Software",
    assignedTeam: "IT Support",
    assignedTo: "Sarah Johnson",
    createdBy: "Agent User",
    createdDate: "2024-01-11",
    attachments: ["software_specs.pdf"],
    lastUpdate: "1 day ago"
  },
  {
    id: "TKT-003",
    title: "Hardware Replacement",
    description: "Replace faulty printer in marketing department",
    letterRef: "REF-2024-003",
    priority: "Low",
    status: "In Progress",
    scheduledDate: "2024-01-17",
    ticketType: "Hardware",
    assignedTeam: "Hardware Team",
    assignedTo: "Mike Davis",
    createdBy: "Admin User",
    createdDate: "2024-01-12",
    attachments: ["printer_manual.pdf", "warranty.pdf"],
    lastUpdate: "3 hours ago"
  },
  {
    id: "TKT-004",
    title: "Email Server Maintenance",
    description: "Scheduled maintenance for email server upgrade",
    letterRef: "",
    priority: "High",
    status: "Completed",
    scheduledDate: "2024-01-13",
    ticketType: "Maintenance",
    assignedTeam: "Server Team",
    assignedTo: "Alex Wilson",
    createdBy: "Admin User",
    createdDate: "2024-01-08",
    attachments: ["maintenance_report.pdf"],
    lastUpdate: "2 days ago"
  }
];

export const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, roles: ["admin", "agent", "technician"] },
  { icon: Ticket, label: "Tickets", active: false, roles: ["admin", "agent", "technician"] },
  { icon: Users, label: "Users", active: false, roles: ["admin"] },
  { icon: BarChart3, label: "Reports", active: false, roles: ["admin", "agent"] },
  { icon: Settings, label: "Settings", active: false, roles: ["admin"] },
];

export const priorityColors = {
  "High": "bg-red-100 text-red-800 border-red-200",
  "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Low": "bg-green-100 text-green-800 border-green-200"
};

export const statusColors = {
  "New": "bg-blue-100 text-blue-800 border-blue-200",
  "Assigned": "bg-purple-100 text-purple-800 border-purple-200",
  "In Progress": "bg-orange-100 text-orange-800 border-orange-200",
  "Pending Review": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Completed": "bg-green-100 text-green-800 border-green-200",
  "Closed": "bg-gray-100 text-gray-800 border-gray-200"
};

export const roleIcons = {
  "admin": Shield,
  "agent": UserCheck,
  "technician": Wrench
};
