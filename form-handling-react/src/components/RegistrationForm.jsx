import React, { useState } from "react";

const RegistrationForm = () => {
    // State variables for input fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for managing errors
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate inputs
        const newErrors = {};
        if (!username) newErrors.username = "Username is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";

        setErrors(newErrors);

        // Check if there are any errors
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Clear all errors
        setErrors({ username: "", email: "", password: "" });

        // Simulate form submission (you can replace this with an actual API call)
        console.log("Form Submitted:", { username, email, password });
        alert("Registration Successful!");

        // Clear input fields
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Username Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "grey",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
