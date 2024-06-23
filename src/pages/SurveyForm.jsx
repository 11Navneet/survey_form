import React, { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";
import Summary from "./Summary";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    surveyTopic: "",
    favoriteProgrammingLanguage: "",
    yearsOfExperience: "",
    exerciseFrequency: "",
    dietPreference: "",
    highestQualification: "",
    fieldOfStudy: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { errors, validateForm } = useFormValidation(formData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      {!submitted ? <h2>Survey Form</h2> : <h2>Survey Summary</h2>}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-div">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInput}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="form-div">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-div">
            <label>Survey Topic</label>
            <select
              name="surveyTopic"
              value={formData.surveyTopic}
              onChange={handleInput}
            >
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && (
              <p className="error">{errors.surveyTopic}</p>
            )}
          </div>
          {formData.surveyTopic === "Technology" && (
            <>
              <div className="form-div">
                <label>Favorite Programming Language</label>
                <select
                  name="favoriteProgrammingLanguage"
                  value={formData.favoriteProgrammingLanguage}
                  onChange={handleInput}
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteProgrammingLanguage && (
                  <p className="error">{errors.favoriteProgrammingLanguage}</p>
                )}
              </div>

              <div className="form-div">
                <label>Years of Experience</label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInput}
                />
                {errors.yearsOfExperience && (
                  <p className="error">{errors.yearsOfExperience}</p>
                )}
              </div>
            </>
          )}

          {formData.surveyTopic === "Health" && (
            <>
              <div className="form-div">
                <label>Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleInput}
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && (
                  <p className="error">{errors.exerciseFrequency}</p>
                )}
              </div>

              <div className="form-div">
                <label>Diet Preference</label>
                <select
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleInput}
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && (
                  <p className="error">{errors.dietPreference}</p>
                )}
              </div>
            </>
          )}

          {formData.surveyTopic === "Education" && (
            <>
              <div className="form-div">
                <label>Highest Qualification</label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInput}
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && (
                  <p className="error">{errors.highestQualification}</p>
                )}
              </div>

              <div className="form-div">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInput}
                />
                {errors.fieldOfStudy && (
                  <p className="error">{errors.fieldOfStudy}</p>
                )}
              </div>
            </>
          )}

          <div className="form-div">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInput}
            />
            {errors.feedback && <p className="error">{errors.feedback}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <Summary formData={formData} />
      )}
    </div>
  );
};

export default SurveyForm;
