import { useState } from "react";

function Dashboard() {
    const [selectedSection, setSelectedSection] = useState(null);

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h1>Student Dashboard</h1>
                <p>Welcome back! Here's your campus overview.</p>
            </div>

            <div className="dashboard-cards">

                <button
                    className="dashboard-card blue"
                    onClick={() => setSelectedSection("courses")}
                >
                    <h2>📚</h2>
                    <h3>Courses</h3>
                    <p>6 Courses</p>
                </button>

                <button
                    className="dashboard-card purple"
                    onClick={() => setSelectedSection("assignments")}
                >
                    <h2>📝</h2>
                    <h3>Assignments</h3>
                    <p>4 Pending</p>
                </button>

                <button
                    className="dashboard-card green"
                    onClick={() => setSelectedSection("announcements")}
                >
                    <h2>🔔</h2>
                    <h3>Announcements</h3>
                    <p>3 New</p>
                </button>

            </div>

            {/* Selected Section */}
            {selectedSection === "courses" && (
                <div className="dashboard-box">
                    <h2>📚 Courses</h2>

                    <div className="course">
                        <strong>Web Development</strong>
                        <span>Active</span>
                    </div>

                    <div className="course">
                        <strong>Database Management</strong>
                        <span>Active</span>
                    </div>

                    <div className="course">
                        <strong>Software Engineering</strong>
                        <span>Active</span>
                    </div>
                </div>
            )}

            {selectedSection === "assignments" && (
                <div className="dashboard-box">
                    <h2>📝 Assignments</h2>

                    <div className="assignment">
                        <strong>React Project</strong>
                        <p>Due: September 12</p>
                    </div>

                    <div className="assignment">
                        <strong>Database Project</strong>
                        <p>Due: September 15</p>
                    </div>

                    <div className="assignment">
                        <strong>SE Documentation</strong>
                        <p>Due: September 18</p>
                    </div>
                </div>
            )}

            {selectedSection === "announcements" && (
                <div className="dashboard-box">
                    <h2>🔔 Announcements</h2>

                    <div className="announcement">
                        <strong>Campus Event</strong>
                        <p>Annual college event is coming soon.</p>
                    </div>

                    <div className="announcement">
                        <strong>Exam Schedule</strong>
                        <p>Check the updated examination schedule.</p>
                    </div>

                    <div className="announcement">
                        <strong>Library Update</strong>
                        <p>Library hours have been updated.</p>
                    </div>
                </div>
            )}

            {/* Existing Dashboard Content */}
            {!selectedSection && (
                <div className="dashboard-content">
                    <div className="dashboard-box">
                        <h2>Recent Courses</h2>

                        <div className="course">
                            <strong>Web Development</strong>
                            <span>Active</span>
                        </div>

                        <div className="course">
                            <strong>Database Management</strong>
                            <span>Active</span>
                        </div>

                        <div className="course">
                            <strong>Software Engineering</strong>
                            <span>Active</span>
                        </div>
                    </div>

                    <div className="dashboard-box">
                        <h2>Upcoming Assignments</h2>

                        <div className="assignment">
                            <strong>React Project</strong>
                            <p>Due: September 12</p>
                        </div>

                        <div className="assignment">
                            <strong>Database Project</strong>
                            <p>Due: September 15</p>
                        </div>

                        <div className="assignment">
                            <strong>SE Documentation</strong>
                            <p>Due: September 18</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;