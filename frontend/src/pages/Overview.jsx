import Header from "./Header";
import React from "react";
import {
  CheckCircle2,
  Clock3,
  AlertCircle,
  ListTodo,
  Plus,
  ArrowUpRight,
  Sparkles,
  CalendarDays,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    value: "128",
    change: "+12%",
    icon: ListTodo,
  },
  {
    title: "Completed",
    value: "86",
    change: "+18%",
    icon: CheckCircle2,
  },
  {
    title: "Pending",
    value: "32",
    change: "-5%",
    icon: Clock3,
  },
  {
    title: "Overdue",
    value: "10",
    change: "-8%",
    icon: AlertCircle,
  },
];

const todayTasks = [
  {
    title: "Design Dashboard UI",
    priority: "High",
    completed: true,
  },
  {
    title: "Build REST API",
    priority: "High",
    completed: false,
  },
  {
    title: "Implement Authentication",
    priority: "Medium",
    completed: false,
  },
  {
    title: "Database Integration",
    priority: "Low",
    completed: false,
  },
];

const deadlines = [
  {
    title: "Project API Development",
    date: "Tomorrow",
    priority: "High",
  },
  {
    title: "Dashboard UI",
    date: "Sep 12",
    priority: "Medium",
  },
  {
    title: "Authentication Testing",
    date: "Sep 14",
    priority: "Low",
  },
];

const activities = [
  "Completed API Authentication task",
  "Created Dashboard UI task",
  "Updated Database Integration",
  "Added new Project Management task",
];

export default function Overview() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Productivity Dashboard
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Good morning, XYZ 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's your productivity overview for today.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
          <Plus size={18} />
          Create Task
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-slate-100 p-3">
                  <Icon size={21} className="text-slate-700" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-emerald-600">
                <ArrowUpRight size={14} />
                {item.change}
                <span className="text-slate-400">
                  from last week
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Analytics */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Productivity Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Productivity Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your productivity during the last 7 days
              </p>
            </div>

            <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This year</option>
            </select>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-8 flex h-64 items-end gap-3 border-b border-l border-slate-200 px-4 pb-0">
            {[45, 65, 52, 78, 60, 88, 72, 95, 82, 90, 76, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="group flex h-full flex-1 items-end"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-lg bg-slate-800 transition hover:bg-slate-600"
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-400">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-3">
              <Sparkles size={22} />
            </div>

            <div>
              <h2 className="font-bold">AI Productivity Assistant</h2>
              <p className="text-xs text-slate-400">
                Smart insights
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm leading-6 text-slate-300">
              Your productivity is
              <span className="font-bold text-white"> 18% higher </span>
              than last week.
            </p>

            <div className="mt-5 rounded-xl bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                AI Recommendation
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-200">
                Focus on your 3 high-priority tasks before starting new
                tasks. You have a strong completion rate today.
              </p>
            </div>

            <button className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              View AI Insights
            </button>
          </div>
        </div>
      </div>

      {/* Tasks + Deadlines */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Today's Tasks */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Today's Tasks
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Tasks that need your attention
              </p>
            </div>

            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900">
              View all
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {todayTasks.map((task) => (
              <div
                key={task.title}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                  className="h-4 w-4 accent-slate-900"
                />

                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-semibold ${
                      task.completed
                        ? "text-slate-400 line-through"
                        : "text-slate-800"
                    }`}
                  >
                    {task.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {task.priority} Priority
                  </p>
                </div>

                <ArrowUpRight size={17} className="text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-100 p-3">
              <CalendarDays size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Upcoming Deadlines
              </h2>
              <p className="text-sm text-slate-500">
                Keep track of important deadlines
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {deadlines.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.priority} priority
                  </p>
                </div>

                <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-slate-100 p-3">
            <Activity size={20} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="text-sm text-slate-500">
              Latest updates from your workspace
            </p>
          </div>
        </div>

        <div className="mt-5 divide-y divide-slate-100">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-4"
            >
              <div className="h-2 w-2 rounded-full bg-slate-900" />

              <p className="flex-1 text-sm text-slate-700">
                {activity}
              </p>

              <span className="text-xs text-slate-400">
                {index + 1}h ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
