import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  Search,
  MoreHorizontal,
  BarChart3,
} from "lucide-react";
import {
  Briefcase,
  Calendar,
  ClipboardList,
  Mail,
  DollarSign,
  TrendingUp,
  Megaphone,
  Funnel,
  ChevronRight,
} from "lucide-react";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Header from "./Header";
import card2 from "../img/card-2.png";
import card3 from "../img/card-3.png";
import card4 from "../img/card4.png";
import back1 from "../img/back-1.png";
import back2 from "../img/back-2.jpg";
// import shape1 from "../img/home-background.webp";

<style>
  {`
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(15px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}
`}
</style>


const tasks = [
  {
    title: "Optimize experience for mobile web",
    tag: "FEEDBACK",
    id: "NUC-335",
    tagColor: "bg-blue-500",
    avatars: [
      "https://i.pravatar.cc/40?img=1",
      "https://i.pravatar.cc/40?img=2",
      "https://i.pravatar.cc/40?img=3",
    ],
  },
  {
    title: "Bump version for new API",
    tag: "FORMS",
    id: "NUC-336",
    tagColor: "bg-purple-500",
    avatars: [
      "https://i.pravatar.cc/40?img=4",
      "https://i.pravatar.cc/40?img=5",
    ],
  },
];



const Home = () => {
  const [activeTab, setActiveTab] = useState("Software");

  const tabs = [
    "Software",
    "Marketing",
    "Design",
    "IT",
    "Operations",
  ];

  const features = {
    Software: [
      {
        title: "Prioritize high-impact work",
        desc: "Keep standups short and productive with clear views that break down complex projects.",
      },
      {
        title: "Stay informed with AI",
        desc: "Catch risks before they knock you off track with intelligent AI agents.",
      },
      {
        title: "Understand developer experience",
        desc: "Get performance insights from cycle time reports and burndown charts.",
      },
    ],
    Marketing: [
      {
        title: "Campaign Planning",
        desc: "Organize campaigns, content calendars, and launch schedules.",
      },
      {
        title: "Track Performance",
        desc: "Monitor engagement, conversions, and marketing KPIs.",
      },
      {
        title: "Collaboration",
        desc: "Keep stakeholders aligned across every project.",
      },
    ],
    Design: [
      {
        title: "Creative Workflow",
        desc: "Manage design requests and approvals efficiently.",
      },
      {
        title: "Asset Management",
        desc: "Store and organize design files in one place.",
      },
      {
        title: "Feedback Collection",
        desc: "Gather comments and revisions seamlessly.",
      },
    ],
    IT: [
      {
        title: "Incident Tracking",
        desc: "Monitor outages and system performance.",
      },
      {
        title: "Service Requests",
        desc: "Manage tickets and support operations.",
      },
      {
        title: "Security Monitoring",
        desc: "Track vulnerabilities and compliance issues.",
      },
    ],
    Operations: [
      {
        title: "Resource Planning",
        desc: "Allocate teams and resources efficiently.",
      },
      {
        title: "Workflow Automation",
        desc: "Automate repetitive operational tasks.",
      },
      {
        title: "Performance Reporting",
        desc: "Visualize team productivity and results.",
      },
    ],
  };


  const templates = [
    {
      icon: <Briefcase size={26} />,
      title: "Project Management",
      desc: "Manage activities for completing a business project.",
    },
    {
      icon: <Calendar size={26} />,
      title: "Event Planning",
      desc: "Perfect for teams planning their next event.",
    },
    {
      icon: <ClipboardList size={26} />,
      title: "Task Tracking",
      desc: "Organize tasks for a team or personal project.",
    },
    {
      icon: <Mail size={26} />,
      title: "Email Campaign",
      desc: "Plan and execute email marketing campaigns.",
    },
    {
      icon: <Megaphone size={26} />,
      title: "Campaign Management",
      desc: "Drive marketing campaigns from start to finish.",
    },
    {
      icon: <DollarSign size={26} />,
      title: "Budget Creation",
      desc: "Keep everyone aligned on budget planning.",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Performance Review",
      desc: "Track employee performance and feedback.",
    },
    {
      icon: <Funnel size={26} />,
      title: "Sales Pipeline",
      desc: "Monitor leads and customer conversions.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 font-sans">

      {/* ================= NAVBAR ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-5 relative overflow-hidden">

        {/* Background Shapes */}


        {/* ================= BACKGROUND SHAPES ================= */}

        {/* LEFT SHAPE */}
        <div className="absolute left-[-80px] top-20 z-0">

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-40"></div>

          {/* Image */}
          <img
            src={back1}
            alt="dashboard"
            className="relative w-64 md:w-80 ml-10 -rotate-6 rounded-xl shadow-xl opacity-50 animate-float"
          />
        </div>


        {/* ================= RIGHT AI IMAGE ================= */}
        <div className="absolute right-[-150px] top-24 hidden xl:block z-0">

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full"></div>

          {/* Image */}
          <img
            src={back2}
            alt="AI Task Management"
            className="w-[450px] h-auto rounded-3xl rotate-12 opacity-50 shadow-[0_20px_80px_rgba(0,0,0,0.15)] animate-float-slow"/>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
          Get to AI-Driven{" "}
          <span className="bg-rose-400/60 font-mono text-black px-3 py-1 rounded-lg shadow-sm">
            Task
          </span>{" "}
          <span className="bg-green-400/60 font-mono text-black px-3 py-1 rounded-lg shadow-sm">
            Management
          </span>{" "} &
          Productivity System
          {/* <br />
          with <span className="text-blue-600">Jira + Rovo</span> */}
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          AI-powered project management that removes the work around work.
        </p>

        {/* ================= AI CARD ================= */}
        <div className="mt-12 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-200">

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {[
              "Software development",
              "Product management",
              "Marketing",
              "Project management",
              "Design",
              "IT",
            ].map((item, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${item === "Project management"
                    ? "bg-blue-100 text-blue-600 shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input Text */}
          <div className="text-lg md:text-xl text-gray-800 text-center leading-relaxed">
            I'm working on{" "}
            <span className="text-blue-600 underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800">
              a new product
            </span>{" "}
            with the goal of{" "}
            <span className="text-blue-600 underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800">
              increasing revenue
            </span>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

            <span className="text-gray-400 text-sm">
              Uses AI. Verify results.
            </span>

            <div className="flex gap-4 items-center">
              <button className="text-gray-600 hover:text-blue-600 transition flex items-center gap-1">
                🔄 Shuffle
              </button>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-full 
              hover:bg-blue-700 hover:scale-105 transition shadow-md">
                Get started
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-xs mt-6 max-w-3xl mx-auto">
          By selecting "Get started," you agree to use of a feature that is
          subject to Atlassian's{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Acceptable Use Policy
          </span>.
        </p>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 md:px-10 bg-white">

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 h-[538px] overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400">

          {/* CARD 1 - SOFTWARE */}
          <div className="min-w-[320px] max-w-[320px] p-5 bg-white rounded-3xl shadow-sm border border-gray-200">

            {/* Top Label */}
            <span className="text-[10px] bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold tracking-wider">
              PROJECT AND TASK TRACKING
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">
              Software development
            </h2>

            {/* DARK INNER CARD */}
            <div className="mt-2 ml-4 -mb-5 -mr-5 rounded-l-lg bg-gradient-to-b from-[#1e222a] to-[#14161c] p-3 border border-gray-700/70 shadow-inner">

              {/* Header */}
              <p className="text-gray-400 text-[10px] tracking-[2px] mb-5 font-medium">
                IN PROGRESS
              </p>

              {/* Tasks */}
              <div className="space-y-4">

                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#2b313b] to-[#21252d] 
                     p-4 rounded-xl 
                     border border-gray-700/60 
                     hover:border-gray-500 
                     transition-all duration-300 
                     hover:shadow-lg"
                  >

                    {/* Title */}
                    <p className="text-gray-100 text-[14px] leading-relaxed font-medium">
                      {task.title}
                    </p>

                    {/* Tag */}
                    <span
                      className={`inline-block mt-3 text-[10px] px-2.5 py-[5px] 
                        rounded-md text-white font-semibold tracking-wide ${task.tagColor}`}
                    >
                      {task.tag}
                    </span>

                    {/* Divider */}
                    <div className="border-t border-gray-700/60 my-4"></div>

                    {/* Bottom Row */}
                    <div className="flex justify-between items-center">

                      {/* Checkbox + ID */}
                      <div className="flex items-center gap-2 text-gray-400 text-[11px]">
                        <input
                          type="checkbox"
                          className="accent-blue-500 w-4 h-4 cursor-pointer"
                        />
                        <span className="tracking-wide">{task.id}</span>
                      </div>

                      {/* Avatars */}
                      <div className="flex -space-x-2">
                        {task.avatars.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-7 h-7 rounded-full border-2 border-[#1e222a] object-cover 
                             hover:scale-110 hover:z-10 transition duration-200"
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* CARD 2 - Marketing */}
          <div className="min-w-[320px] max-w-[320px] p-5 bg-white rounded-3xl shadow-sm border border-gray-200">

            {/* Top Label */}
            <span className="text-[10px] bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold tracking-wider">
              PLAN AND LAUNCH CAMPAIGNS
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">
              Marketing
            </h2>

            {/* DARK INNER CARD */}
            <img src={card2} className="bg-white mt-12 ml-5" />
          </div>

          {/* CARD 3 - Project management */}
          <div className="min-w-[320px] max-w-[320px] p-5 bg-white rounded-3xl shadow-sm border border-gray-200">

            {/* Top Label */}
            <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
              TURN IDEAS INTO DELIVERY
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">Project management</h2>

            {/* DARK INNER CARD */}
            <img src={card3} className="bg-white mt-12 ml-5" />
          </div>

          {/* CARD 4 - IT */}
          <div className="min-w-[320px] max-w-[320px] p-5 bg-white rounded-3xl shadow-sm border border-gray-200">

            {/* Top Label */}
            <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
              MANAGE AND TRACK PROJECTS
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-4">IT</h2>

            {/* DARK INNER CARD */}
            <img src={card4} className="bg-white mt-12 ml-5" />
          </div>

        </div>

      </section>

      <section className="w-full bg-white py-24 px-5 lg:px-20">
        {/* Heading */}

        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            Flexible and powerful project management
            <br />
            for every team
          </h1>

          {/* Tabs */}

          <div className="flex flex-wrap justify-center gap-4 mt-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab
                    ? "bg-blue-100 text-blue-700 shadow-lg"
                    : "text-gray-500 hover:text-blue-600"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">
            {/* Left Side */}

            <div>
              <h2 className="text-5xl font-bold text-slate-800 mb-10">
                {activeTab} Teams
              </h2>

              <div className="space-y-10">
                {features[activeTab].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle
                      size={28}
                      className="text-green-500 mt-1 flex-shrink-0"
                    />

                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}

            <div className="relative">
              {/* Background Glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-3xl blur-lg opacity-40"></div>

              {/* Dashboard Card */}

              <div className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl overflow-hidden">
                {/* Header */}

                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-yellow-400"></div>

                    <h3 className="text-white text-2xl font-bold">
                      Mobile App
                    </h3>
                  </div>

                  <MoreHorizontal className="text-gray-400" />
                </div>

                {/* Search */}

                <div className="flex justify-between items-center mb-8">
                  <div className="bg-slate-800 rounded-lg px-4 py-3 flex items-center gap-2">
                    <Search className="text-gray-400" size={18} />
                  </div>

                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((user) => (
                      <div
                        key={user}
                        className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-r from-pink-500 to-purple-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Columns */}

                <div className="grid md:grid-cols-3 gap-5">
                  {/* To Do */}

                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-gray-300 font-semibold mb-4">
                      TO DO
                    </h4>

                    <div className="bg-slate-700 rounded-lg p-4 hover:scale-105 transition">
                      <p className="text-white">
                        Quick booking website improvements
                      </p>

                      <span className="inline-block mt-3 bg-blue-600 px-3 py-1 rounded text-xs text-white">
                        BILLING
                      </span>
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-gray-300 font-semibold mb-4">
                      IN PROGRESS
                    </h4>

                    <div className="bg-slate-700 rounded-lg p-4 hover:scale-105 transition">
                      <p className="text-white">
                        Streamline booking workflow
                      </p>

                      <span className="inline-block mt-3 bg-green-600 px-3 py-1 rounded text-xs text-white">
                        ACCOUNTS
                      </span>
                    </div>
                  </div>

                  {/* Done */}

                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-gray-300 font-semibold mb-4">
                      DONE
                    </h4>

                    <div className="bg-slate-700 rounded-lg p-4 hover:scale-105 transition">
                      <p className="text-white">
                        Billing system integration
                      </p>

                      <span className="inline-block mt-3 bg-purple-600 px-3 py-1 rounded text-xs text-white">
                        COMPLETED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}

                <div className="mt-10 bg-purple-700 rounded-2xl p-5 shadow-lg">
                  <h4 className="text-white font-bold text-lg">
                    Build Subscription Plan Modal
                  </h4>

                  <div className="flex items-center justify-between mt-4">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                      BILLING
                    </span>

                    <Users className="text-white" />
                  </div>
                </div>

                {/* Insights */}

                <div className="absolute top-6 right-20 bg-slate-800 p-3 rounded-xl">
                  <BarChart3 className="text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Main Section */}

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side Dashboard */}

            <div className="relative">

              {/* Background Shape */}

              <div className="absolute -top-8 -left-8 w-full h-full bg-lime-500 rounded-2xl"></div>

              <div className="relative bg-white rounded-2xl border-4 border-indigo-500 shadow-2xl overflow-hidden">

                {/* Top Cards */}

                <div className="grid grid-cols-4 gap-3 p-4 bg-white">

                  <div className="bg-gray-50 rounded-xl p-3">
                    <h4 className="text-green-600 font-bold text-xl">
                      12
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Done
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <h4 className="text-blue-600 font-bold text-xl">
                      10
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Updated
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <h4 className="text-purple-600 font-bold text-xl">
                      4
                    </h4>
                    <p className="text-gray-500 text-sm">
                      New
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <h4 className="text-red-500 font-bold text-xl">
                      3
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Due
                    </p>
                  </div>
                </div>

                {/* Dashboard */}

                <div className="grid md:grid-cols-2 gap-4 p-4">

                  {/* Progress */}

                  <div className="bg-white border rounded-xl p-5 shadow-sm">

                    <h3 className="font-semibold text-gray-700 mb-5">
                      Team Progress
                    </h3>

                    <div className="flex justify-center">
                      <div className="relative w-40 h-40">
                        <div className="absolute inset-0 rounded-full border-[18px] border-gray-200"></div>

                        <div
                          className="
                          absolute
                          inset-0
                          rounded-full
                          border-[18px]
                          border-blue-500
                          border-r-transparent
                          border-b-transparent
                          rotate-[120deg]
                        "
                        ></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div>
                            <h2 className="text-4xl font-bold text-blue-600">
                              33%
                            </h2>

                            <p className="text-gray-500 text-center">
                              Done
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Workload */}

                  <div className="bg-white border rounded-xl p-5 shadow-sm">

                    <h3 className="font-semibold text-gray-700 mb-6">
                      Team Workload
                    </h3>

                    {[
                      {
                        name: "Aman",
                        width: "80%",
                        color: "bg-green-400",
                      },
                      {
                        name: "Eva",
                        width: "60%",
                        color: "bg-yellow-400",
                      },
                      {
                        name: "Alana",
                        width: "50%",
                        color: "bg-orange-400",
                      },
                      {
                        name: "Jie",
                        width: "25%",
                        color: "bg-blue-400",
                      },
                    ].map((member, index) => (
                      <div
                        key={index}
                        className="mb-5"
                      >
                        <div className="flex justify-between text-sm mb-2">
                          <span>{member.name}</span>
                          <span>Tasks</span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full">
                          <div
                            className={`${member.color} h-3 rounded-full`}
                            style={{
                              width: member.width,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}

              <div className="absolute -bottom-12 left-10 w-24 h-24 bg-lime-300 rounded-full opacity-60"></div>

              <div className="absolute top-10 right-0 w-20 h-20 bg-lime-200 rounded-full opacity-50"></div>
            </div>

            {/* Right Side Content */}

            <div>

              <h2
                className="
                text-5xl
                lg:text-6xl
                font-bold
                text-[#172B4D]
                leading-tight
              "
              >
                Bring the big picture
                <br />
                into view
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-gray-600
                leading-relaxed
              "
              >
                Easily track your team's progress,
                priorities, and workload. Identify
                blockers, celebrate wins, and plan
                ahead so your team never misses a beat
                and projects always stay on track.
              </p>

              <div className="mt-12 grid gap-6">

                <div className="flex gap-4">
                  <BarChart3 className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Real-time Analytics
                    </h4>
                    <p className="text-gray-500">
                      Monitor project health instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="text-green-600" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Progress Tracking
                    </h4>
                    <p className="text-gray-500">
                      Stay informed on every milestone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="text-purple-600" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Team Collaboration
                    </h4>
                    <p className="text-gray-500">
                      Work together more efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="text-orange-500" />
                  <div>
                    <h4 className="font-bold text-lg">
                      Task Completion
                    </h4>
                    <p className="text-gray-500">
                      Deliver projects on time.
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="
                mt-10
                bg-blue-600
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-3
                hover:bg-blue-700
                transition
              "
              >
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}

            <div>

              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                Project Templates
              </span>

              <h2
                className="
                mt-6
                text-5xl
                lg:text-6xl
                font-bold
                text-[#172B4D]
                leading-tight
              "
              >
                Start with a
                <br />
                template
              </h2>

              <p
                className="
                mt-8
                text-xl
                text-gray-600
                leading-relaxed
                max-w-xl
              "
              >
                Choose from pre-built project management templates
                built for software, marketing, HR, finance teams,
                operations, and much more.
              </p>

              <button
                className="
                mt-10
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                flex
                items-center
                gap-3
              "
              >
                Browse Templates
                <ChevronRight size={20} />
              </button>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-6 mt-14">

                <div>
                  <h3 className="text-4xl font-bold text-blue-600">
                    250+
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Templates
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-purple-600">
                    50K+
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Teams
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-green-600">
                    99%
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Satisfaction
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT DASHBOARD */}

            <div className="relative">

              {/* Purple Glow */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-purple-500
                to-fuchsia-500
                rounded-3xl
                blur-xl
                opacity-30
              "
              />

              {/* Main Container */}

              <div
                className="
                relative
                bg-gradient-to-br
                from-purple-400
                via-purple-500
                to-fuchsia-500
                p-5
                rounded-3xl
                shadow-2xl
              "
              >
                <div className="bg-white rounded-2xl p-6">

                  <div className="grid grid-cols-2 gap-4">

                    {templates.map((item, index) => (
                      <div
                        key={index}
                        className="
                        group
                        bg-white
                        border
                        rounded-xl
                        p-4
                        hover:shadow-xl
                        transition-all
                        duration-300
                        cursor-pointer
                        hover:-translate-y-1
                      "
                      >
                        <div className="flex items-start gap-4">

                          <div
                            className="
                            w-12
                            h-12
                            rounded-lg
                            bg-blue-50
                            flex
                            items-center
                            justify-center
                            text-blue-600
                            group-hover:scale-110
                            transition
                          "
                          >
                            {item.icon}
                          </div>

                          <div className="flex-1">

                            <h3
                              className="
                              font-semibold
                              text-[#172B4D]
                              text-lg
                            "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                              text-gray-500
                              text-sm
                              mt-2
                              leading-relaxed
                            "
                            >
                              {item.desc}
                            </p>
                          </div>

                          <ChevronRight
                            size={18}
                            className="
                            text-gray-400
                            group-hover:text-blue-600
                          "
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Decorative Shapes */}

              <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-300 rounded-full opacity-30"></div>

              <div className="absolute -bottom-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-30"></div>

            </div>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              title: "Company",
              items: ["About", "Careers", "Blog"],
            },
            {
              title: "Product",
              items: ["Features", "Pricing", "Templates"],
            },
            {
              title: "Support",
              items: ["Help Center", "Contact", "Status"],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="text-white font-bold mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <span className="hover:scale-110 transition cursor-pointer">🌐</span>
              <span className="hover:scale-110 transition cursor-pointer">🐦</span>
              <span className="hover:scale-110 transition cursor-pointer">📸</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-500 text-sm">
          © 2026 AI Task Manager. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;