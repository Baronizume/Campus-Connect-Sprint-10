import { useState } from "react";

function Home() {
    const [selectedFeature, setSelectedFeature] = useState(null);

    const student = {
        name: "Alex",
        courses: 6,
        pendingAssignments: 4,
        newAnnouncements: 3,
    };

    const features = [
        {
            id: "courses",
            icon: "📚",
            title: "Courses",
            description: "View and manage your enrolled courses.",
            count: student.courses,
            label: "Courses Enrolled",
        },
        {
            id: "assignments",
            icon: "📝",
            title: "Assignments",
            description: "Keep track of your assignments and deadlines.",
            count: student.pendingAssignments,
            label: "Pending Assignments",
        },
        {
            id: "announcements",
            icon: "🔔",
            title: "Announcements",
            description: "Stay updated with important college announcements.",
            count: student.newAnnouncements,
            label: "New Announcements",
        },
    ];

    return (
        <div className="home-page">

            {/* Welcome Section */}
            <div className="hero">
                <h1>Welcome, {student.name}! 👋</h1>

                <p>
                    Manage your courses, assignments, and campus
                    announcements in one place.
                </p>
            </div>

            {/* Dynamic Statistics */}
            <div className="home-stats">

                <button
                    className="stat-card"
                    onClick={() => setSelectedFeature("courses")}
                >
                    <span>📚</span>
                    <h2>{student.courses}</h2>
                    <p>Courses</p>
                </button>

                <button
                    className="stat-card"
                    onClick={() => setSelectedFeature("assignments")}
                >
                    <span>📝</span>
                    <h2>{student.pendingAssignments}</h2>
                    <p>Pending Assignments</p>
                </button>

                <button
                    className="stat-card"
                    onClick={() => setSelectedFeature("announcements")}
                >
                    <span>🔔</span>
                    <h2>{student.newAnnouncements}</h2>
                    <p>New Announcements</p>
                </button>

            </div>

            {/* Clickable Features */}
            <div className="features">

                {features.map((feature) => (
                    <button
                        key={feature.id}
                        className={`feature-card ${selectedFeature === feature.id ? "selected" : ""
                            }`}
                        onClick={() => setSelectedFeature(feature.id)}
                    >
                        <h2>
                            {feature.icon} {feature.title}
                        </h2>

                        <p>{feature.description}</p>

                        <strong>
                            {feature.count} {feature.label}
                        </strong>
                    </button>
                ))}

            </div>

            {/* Selected Information */}
            {selectedFeature === "courses" && (
                <div className="home-details">
                    <h2>📚 Courses</h2>

                    <p>
                        You are enrolled in{" "}
                        <strong>{student.courses}</strong> courses.
                    </p>

                    <div className="detail-item">
                        <strong>Web Development</strong>
                        <span>Active</span>
                    </div>

                    <div className="detail-item">
                        <strong>Database Management</strong>
                        <span>Active</span>
                    </div>

                    <div className="detail-item">
                        <strong>Software Engineering</strong>
                        <span>Active</span>
                    </div>
                </div>
            )}

            {selectedFeature === "assignments" && (
                <div className="home-details">
                    <h2>📝 Assignments</h2>

                    <p>
                        You have{" "}
                        <strong>{student.pendingAssignments}</strong>{" "}
                        pending assignments.
                    </p>

                    <div className="detail-item">
                        <strong>React Project</strong>
                        <span>Due: September 12</span>
                    </div>

                    <div className="detail-item">
                        <strong>Database Project</strong>
                        <span>Due: September 15</span>
                    </div>

                    <div className="detail-item">
                        <strong>SE Documentation</strong>
                        <span>Due: September 18</span>
                    </div>
                </div>
            )}

            {selectedFeature === "announcements" && (
                <div className="home-details">
                    <h2>🔔 Announcements</h2>

                    <p>
                        You have{" "}
                        <strong>{student.newAnnouncements}</strong>{" "}
                        new announcements.
                    </p>

                    <div className="detail-item">
                        <strong>Campus Event</strong>
                        <span>New</span>
                    </div>

                    <div className="detail-item">
                        <strong>Exam Schedule</strong>
                        <span>Updated</span>
                    </div>

                    <div className="detail-item">
                        <strong>Library Update</strong>
                        <span>New</span>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Home;