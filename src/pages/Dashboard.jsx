import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");


  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
    { id: "metrics", label: "Metrics" },
    { id: "clients", label: "Clients" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8 p-15 width-screen">
            <div className="flex justify-evenly items-center gap-125 width-full">
              <div className="bg-white flex flex-col justify-center items-start gap-2.5">
                <p className="text-gray-600 font-inter text-md">OVERVIEW</p>
                <h1 className="text-3xl md:text-5xl font-bold font-manrope text-[#131B2E] mb-2">
                  Curated Insights
                </h1>
              </div>
              <div className="flex justify-center items-center gap-12">
                <img
                  src="/images/dashboard/icon1.png"
                  alt="icon"
                  className="w-12 h-12 p-4 bg-[#F2F3FF] rounded-xl object-cover"
                />
                <img
                  src="/images/dashboard/image2.jpg"
                  alt="image"
                  className="w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-10">
              <div className="flex flex-col gap-10 col-span-6 width-8/10 mt-2">
                <div className="p-8 flex flex-col gap-5 bg-[#F2F3FF] rounded-2xl w-8/10">
                  <div className="flex flex-col gap-2 w-7/10 ">
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#005A3C] text-[#005A3C] w-2 h-2 rounded-full text-sm font-semibold"></div>
                      <div className="text-[#005A3C] font-manrope text-sm">
                        IN PROGRESS
                      </div>
                    </div>
                    <div className="mt-1 text-4xl text-[#131B2E] font-bold">
                      Lumière Atelier
                    </div>
                    <div className="text-[#434656] text-sm">
                      Brand identity refinement and high-fidelity prototype
                      curation for luxury fashion house.
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <img
                      src="/images/dashboard/image4.jpg"
                      alt="image"
                      className="w-34 h-32 rounded-xl filter grayscale"
                    />
                    <img
                      src="/images/dashboard/image3.png"
                      alt="image"
                      className="w-72 h-32 col-start-2 rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="ml-10 p-12 bg-[#EAEDFF] w-8/11 rounded-2xl flex flex-col gap-8">
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[#434656] text-sm">COMPLETED</div>
                    <div className="text-2xl font-bold text-[#131B2E]">
                      Vertex Capital
                    </div>
                    <div className="text-[#434656] text-sm">
                      Full-stack digital presence overhaul for boutique
                      investment firm.
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-1">
                      <div className="text-2xl text-[#003EC7] font-bold">
                        4.2x
                      </div>
                      <div className="text-sm text-[#434656]">
                        ENGAGEMENT LIFT
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-2xl font-bold text-[#131B2E]">
                        Q3
                      </div>
                      <div className="text-sm text-[#434656]">DELIVERY</div>
                    </div>
                    <div className="text-md text-[#003EC7]">View Case</div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col mt-5">
                <div className="flex flex-col gap-6 bg-white shadow-lg rounded-2xl p-8">
                  <div className="flex justify-between items-center">
                    <div className="text-[#131B2E] text-2xl">Growth Velocity</div>
                    <div className="text-[#434656] text-md">This Month</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-end">
                      <div className="text-5xl font-bold text-[#131B2E] pr-2">124k</div>
                      <div className="text[#005A3C] font-semibold bg-[#005A3C1A] px-4 py-2 text-xs rounded-sm">+14%</div>
                    </div>
                    <div className="text-[#005A3C] text">Unique impressions across active campaigns.</div>
                  </div>
                  <div className="flex justify-between items-end h-32 gap-2">
                    <div className="bg-[#EAEDFF] w-full h-2/5 rounded-md"></div>
                    <div className="bg-[#EAEDFF] w-full h-7/10 rounded-md"></div>
                    <div className="bg-[#EAEDFF] w-full h-1/2 rounded-md"></div>
                    <div className="bg-[#EAEDFF] w-full h-8/10 rounded-md"></div>
                    <div className="bg-[#003EC7CC] w-full h-full rounded-md"></div>
                    <div className="bg-[#EAEDFF] w-full h-6/10 rounded-md"></div>
                  </div>
                </div>
                <div className="flex flex-col mt-10 gap-8">
                  <div className="text-[#131B2E] text-lg font-bold">
                    Recent Activity
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-5 items-center">
                      <div className="p-1.5 rounded-full border-3 border-[#003EC7]"><div className="w-2 h-2 border-2 border-blue bg-[#003EC7] rounded-full"></div></div>
                      <div>
                        <div className="text-sm text-[#131B2E] font-bold">
                          Elena R. uploaded new assets for Lumière
                        </div>
                        <div className="text-xs">
                          2 hours ago
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div className="p-1.5 rounded-full border-3 border-[#C3C5D9]"><div className="w-2 h-2 border-2 border-[#C3C5D9] bg-[#C3C5D9] rounded-full"></div></div>
                      <div>
                        <div className="text-sm text-[#131B2E] font-semibold">
                          Client feedback received on Phase 2
                        </div>
                        <div className="text-xs">
                          Yesterday, 14:30
                        </div>
                      </div>
                    </div>
                   <div className="flex gap-5 items-center">
                      <div className="p-1.5 rounded-full border-3 border-[#C3C5D9]"><div className="w-2 h-2 border-2 border-[#C3C5D9] bg-[#C3C5D9] rounded-full"></div></div>
                      <div>
                        <div className="text-sm text-[#131B2E] font-semibold">
                          Milestone Vertex Launch completed
                        </div>
                        <div className="text-xs">
                          Oct 12
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-8 width-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-auto">
              <h2 className="text-3xl font-bold font-manrope text-[#131B2E] mt-10 mb-4">
                Projects
              </h2>
              <p className="text-gray-600 font-inter text-lg mb-6">
                Manage and track your ongoing projects
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Project Alpha
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Digital marketing campaign for TechCorp
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 75%</span>
                    <span>Due: Dec 15</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Brand Refresh
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Planning
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete brand identity overhaul
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 25%</span>
                    <span>Due: Jan 20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Social Media
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Content creation and management
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 90%</span>
                    <span>Due: Dec 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Website Redesign
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Review
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete website overhaul for client
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 100%</span>
                    <span>Due: Dec 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Project Alpha
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Digital marketing campaign for TechCorp
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 75%</span>
                    <span>Due: Dec 15</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Brand Refresh
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Planning
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete brand identity overhaul
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 25%</span>
                    <span>Due: Jan 20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Social Media
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Content creation and management
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 90%</span>
                    <span>Due: Dec 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Website Redesign
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Review
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete website overhaul for client
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 100%</span>
                    <span>Due: Dec 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Website Redesign
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Review
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete website overhaul for client
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 100%</span>
                    <span>Due: Dec 5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Project Alpha
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Digital marketing campaign for TechCorp
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 75%</span>
                    <span>Due: Dec 15</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                      Brand Refresh
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Planning
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Complete brand identity overhaul
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress: 25%</span>
                    <span>Due: Jan 20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[#003EC7] h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "metrics":
        return (
          <div className="space-y-8 w-screen ">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-screen">
              <h2 className="text-3xl font-bold font-manrope text-[#131B2E] mb-6">
                Performance Metrics
              </h2>
              <p className="text-gray-600 font-inter text-lg mb-6">
                Track your success and analyze performance data
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-[#FAF8FF] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#131B2E] font-manrope mb-2">
                    1,247
                  </div>
                  <p className="text-gray-600 font-inter">Total Views</p>
                  <span className="text-green-600 text-sm font-semibold">
                    +12.5%
                  </span>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#131B2E] font-manrope mb-2">
                    89
                  </div>
                  <p className="text-gray-600 font-inter">Conversions</p>
                  <span className="text-green-600 text-sm font-semibold">
                    +8.2%
                  </span>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#131B2E] font-manrope mb-2">
                    4.8
                  </div>
                  <p className="text-gray-600 font-inter">Avg Rating</p>
                  <span className="text-green-600 text-sm font-semibold">
                    +0.3
                  </span>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#131B2E] font-manrope mb-2">
                    $12.4K
                  </div>
                  <p className="text-gray-600 font-inter">Revenue</p>
                  <span className="text-green-600 text-sm font-semibold">
                    +15.7%
                  </span>
                </div>
              </div>

              <div className="bg-[#FAF8FF] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#131B2E] font-manrope mb-4">
                  Monthly Trends
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Website Traffic
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Lead Generation
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">90%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Client Satisfaction
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">96%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF8FF] rounded-xl p-6 mt-4">
                <h3 className="text-xl font-bold text-[#131B2E] font-manrope mb-4">
                  Yearly Trends
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Website Traffic
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Lead Generation
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">72%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-inter">
                      Client Satisfaction
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#003EC7] h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "clients":
        return (
          <div className="space-y-8 w-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold font-manrope text-[#131B2E] mb-6">
                Client Management
              </h2>
              <p className="text-gray-600 font-inter text-lg mb-6">
                Manage your client relationships and communications
              </p>

              <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#003EC7] rounded-full flex items-center justify-center text-white font-bold">
                        TC
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          TechCorp Inc.
                        </h3>
                        <p className="text-gray-600 font-inter">
                          techcorp@example.com
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Digital marketing and brand strategy client
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 2 days ago</span>
                    <span>Next meeting: Dec 18</span>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center text-white font-bold">
                        GS
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          Global Solutions
                        </h3>
                        <p className="text-gray-600 font-inter">
                          contact@globalsolutions.com
                        </p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Website redesign and SEO optimization
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 1 week ago</span>
                    <span>Next meeting: Jan 5</span>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#003EC7] rounded-full flex items-center justify-center text-white font-bold">
                        IM
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          Innovate Media
                        </h3>
                        <p className="text-gray-600 font-inter">
                          hello@innovatemedia.co
                        </p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Social media management and content creation
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 3 days ago</span>
                    <span>Next meeting: Dec 22</span>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#003EC7] rounded-full flex items-center justify-center text-white font-bold">
                        TC
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          TechCorp Inc.
                        </h3>
                        <p className="text-gray-600 font-inter">
                          techcorp@example.com
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Digital marketing and brand strategy client
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 2 days ago</span>
                    <span>Next meeting: Dec 18</span>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center text-white font-bold">
                        GS
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          Global Solutions
                        </h3>
                        <p className="text-gray-600 font-inter">
                          contact@globalsolutions.com
                        </p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Website redesign and SEO optimization
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 1 week ago</span>
                    <span>Next meeting: Jan 5</span>
                  </div>
                </div>

                <div className="bg-[#FAF8FF] rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#003EC7] rounded-full flex items-center justify-center text-white font-bold">
                        IM
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#131B2E] font-manrope">
                          Innovate Media
                        </h3>
                        <p className="text-gray-600 font-inter">
                          hello@innovatemedia.co
                        </p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter mb-4">
                    Social media management and content creation
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Last contact: 6 days ago</span>
                    <span>Next meeting: Sep 22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-linear-to-b from-white to-[#FAF8FF] flex h-screen">
        <div className="flex flex-col w-1/5 justify-items-start h-full bg-[#FAF8FF] p-6">
          <div className="flex items-center gap-4 mb-12">
            <img
              src="/images/dashboard/image1.jpg"
              alt="iamge"
              className=" bg-[#003EC7] w-12 h-12 rounded-[15px] object-cover"
            />
            <div>
              <div className="text-xl font-bold text-[#131B2E] font-manrope">
                Precision OS
              </div>
              <div className="text-sm text-gray-600 font-inter">
                Digital Curator Mode
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mb-6 bg-linear-to-r from-[#003EC7] to-[#0052FF] rounded-2xl gap-2 cursor-pointer">
            <img
              src="/images/dashboard/icon.jpg"
              alt="image"
              className="w-auto h-3 text-white object-cover"
            />
            <div className=" text-white font-semibold py-4">New Project</div>
          </div>

          <div className="p-6 mb-45 w-full">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-start space-x-2 px-2 py-3 rounded-sm font-semibold transition-colors font-manrope ${
                    activeTab === tab.id
                      ? "bg-[#FAF8FF80] text-[#003EC7] border-[#003EC7] border-l-3 w-full"
                      : "bg-[#FAF8FF] text-[#131B2E] hover:bg-[#EAEDFF] w-full"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-18 w-full">
            <button
              onClick={() => navigate("/")}
              className="flex-1  text-[#131B2EB2] font-semibold py-2 rounded-xl transition-opacity font-manrope"
            >
              Support
            </button>
            <button
              onClick={async () => {
                await signOut();
                navigate("/login");
              }}
              className="flex-1 text-[#131B2EB2] font-semibold py-2 rounded-xl hover:opacity-90 transition-opacity font-manrope"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex w-4/5 items-center h-full bg-[#FFFFF]">
          {renderTabContent()}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
