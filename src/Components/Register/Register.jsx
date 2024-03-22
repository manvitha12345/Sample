import React, { useState } from "react";
import "./Register.css";

function Register() {
  const initialValues = {
    userType: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    grade: "", // Extra field for student
    studentId: "", // Extra field for student
    experience: "", // Extra field for teacher
    licence: "", // Extra field for driver
    children: "", // Extra field for parent
    schoolName: "" // Extra field for admin
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    // Your validation logic here
    return {};
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>User Type</label>
            <select
              name="userType"
              value={formValues.userType}
              onChange={handleChange}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="bus_driver">Bus Driver</option>
            </select>
            <p>{formErrors.userType}</p>
          </div>

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
          </div>

          <div className="field">
            <label>Gender</label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p>{formErrors.gender}</p>
          </div>

          {/* Extra fields based on user type */}
          {formValues.userType === "student" && (
            <>
              <div className="field">
                <label>Grade</label>
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade"
                  value={formValues.grade}
                  onChange={handleChange}
                />
                <p>{formErrors.grade}</p>
              </div>

              <div className="field">
                <label>Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  placeholder="Student ID"
                  value={formValues.studentId}
                  onChange={handleChange}
                />
                <p>{formErrors.studentId}</p>
              </div>
            </>
          )}

          {formValues.userType === "teacher" && (
            <div className="field">
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={formValues.experience}
                onChange={handleChange}
              />
              <p>{formErrors.experience}</p>
            </div>
          )}

          {formValues.userType === "bus_driver" && (
            <div className="field">
              <label>Licence</label>
              <input
                type="text"
                name="licence"
                placeholder="Licence"
                value={formValues.licence}
                onChange={handleChange}
              />
              <p>{formErrors.licence}</p>
            </div>
          )}

          {formValues.userType === "parent" && (
            <div className="field">
              <label>Children</label>
              <input
                type="text"
                name="children"
                placeholder="Children"
                value={formValues.children}
                onChange={handleChange}
              />
              <p>{formErrors.children}</p>
            </div>
          )}

          {formValues.userType === "admin" && (
            <div className="field">
              <label>School Name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={formValues.schoolName}
                onChange={handleChange}
              />
              <p>{formErrors.schoolName}</p>
            </div>
          )}

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;