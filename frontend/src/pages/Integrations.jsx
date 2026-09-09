import React, { useMemo, useState } from "react";
import Header from "./Header";
import {
  Search,
  Plus,
  CheckCircle2,
  Settings2,
  ExternalLink,
  Zap,
  CalendarDays,
  MessageSquare,
  Github,
  HardDrive,
  Video,
  Layout,
  FileText,
  Users,
  RefreshCw,
} from "lucide-react";

const integrationsData = [
  {
    id: 1,
    name: "Google Calendar",
    description: "Sync meetings and deadlines with your task schedule.",
    category: "Productivity",
    icon: CalendarDays,
    connected: true,
  },
  {
    id: 2,
    name: "Slack",
    description: "Receive task notifications and collaborate with your team.",
    category: "Communication",
    icon: MessageSquare,
    connected: true,
  },
  {
    id: 3,
    name: "GitHub",
    description: "Connect repositories, issues and development tasks.",
    category: "Development",
    icon: Github,
    connected: true,
  },
  {
    id: 4,
    name: "Google Drive",
    description: "Attach and manage project documents directly from tasks.",
    category: "Storage",
    icon: HardDrive,
    connected: false,
  },
  {
    id: 5,
    name: "Microsoft Teams",
    description: "Connect team communication and task notifications.",
    category: "Communication",
    icon: Users,
    connected: false,
  },
  {
    id: 6,
    name: "Notion",
    description: "Sync notes, projects and documentation with your workspace.",
    category: "Productivity",
    icon: FileText,
    connected: false,
  },
  {
    id: 7,
    name: "Jira",
    description: "Synchronize issues, sprints and development workflows.",
    category: "Project Management",
    icon: Layout,
    connected: false,
  },
  {
    id: 8,
    name: "Trello",
    description: "Sync boards, cards and task progress automatically.",
    category: "Project Management",
    icon: Layout,
    connected: false,
  },
  {
    id: 9,
    name: "Zoom",
    description: "Connect meetings and automatically create meeting tasks.",
    category: "Meetings",
    icon: Video,
    connected: false,
  },
];

function IntegrationCard({ integration, onToggle }) {
  const Icon = integration.icon;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
          <Icon size={23} className="text-slate-800" />
        </div>

        {integration.connected && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <CheckCircle2 size={13} />
            Connected
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-base font-bold text-slate-900">
          {integration.name}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
          {integration.description}
        </p>

        <span className="mt-3 inline-block text-xs font-medium text-slate-400">
          {integration.category}
        </span>
      </div>

      {/* Action */}
      <div className="mt-5 flex items-center gap-2">
        {integration.connected ? (
          <>
            <button
              onClick={() => onToggle(integration.id)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Settings2 size={16} />
              Configure
            </button>

            <button
              title="Open integration"
              className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <ExternalLink size={17} />
            </button>
          </>
        ) : (
          <button
            onClick={() => onToggle(integration.id)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Plus size={17} />
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

export default function Integrations() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [integrations, setIntegrations] = useState(integrationsData);

  const filters = ["All", "Connected", "Available"];

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch =
        integration.name.toLowerCase().includes(search.toLowerCase()) ||
        integration.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        (filter === "Connected" && integration.connected) ||
        (filter === "Available" && !integration.connected);

      return matchesSearch && matchesFilter;
    });
  }, [integrations, search, filter]);

  const connectedCount = integrations.filter(
    (item) => item.connected
  ).length;

  const toggleConnection = (id) => {
    setIntegrations((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, connected: !item.connected }
          : item
      )
    );
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Zap size={20} className="text-white" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Integrations
            </h1>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Connect your favorite tools and automate your productivity
            workflow from one place.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
          <Plus size={18} />
          Add Integration
        </button>
      </div>

      {/* Integration Summary */}
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Total Integrations
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {integrations.length}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Connected
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {connectedCount}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Available
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {integrations.length - connectedCount}
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search integrations..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  filter === item
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Connected */}
      {filter === "All" && (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Connected Integrations
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage the services currently connected to your workspace.
              </p>
            </div>

            <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:block">
              {connectedCount} Active
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {integrations
              .filter((item) => item.connected)
              .map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onToggle={toggleConnection}
                />
              ))}
          </div>
        </section>
      )}

      {/* Available / Filtered */}
      <section className="mt-10">

        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            {filter === "Connected"
              ? "Connected Integrations"
              : "Available Integrations"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Expand your workflow with powerful productivity integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredIntegrations
            .filter(
              (item) =>
                filter !== "All" ||
                !item.connected
            )
            .map((integration) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onToggle={toggleConnection}
              />
            ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <Search
              size={30}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-4 font-semibold text-slate-800">
              No integrations found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try another search term or filter.
            </p>
          </div>
        )}
      </section>

      {/* Automation Banner */}
      <section className="mt-10 overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-sm sm:p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-white/10 p-3">
              <RefreshCw size={23} className="text-white" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Automate your workflow
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Automatically sync tasks, calendar events, messages,
                project updates and notifications across your connected
                applications.
              </p>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            <Zap size={17} />
            Create Automation
          </button>
        </div>
      </section>
    </div>
    </>
  );
}