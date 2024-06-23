import React from "react";

function Summary({formData}) {
  return (
    <div className="summary">
      <p>
        <strong>Full Name:</strong> {formData.fullName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Survey Topic:</strong> {formData.surveyTopic}
      </p>

      {formData.surveyTopic === "Technology" && (
        <>
          <p>
            <strong>Favorite Programming Language:</strong>{" "}
            {formData.favoriteProgrammingLanguage}
          </p>
          <p>
            <strong>Years of Experience:</strong> {formData.yearsOfExperience}
          </p>
        </>
      )}

      {formData.surveyTopic === "Health" && (
        <>
          <p>
            <strong>Exercise Frequency:</strong> {formData.exerciseFrequency}
          </p>
          <p>
            <strong>Diet Preference:</strong> {formData.dietPreference}
          </p>
        </>
      )}

      {formData.surveyTopic === "Education" && (
        <>
          <p>
            <strong>Highest Qualification:</strong>{" "}
            {formData.highestQualification}
          </p>
          <p>
            <strong>Field of Study:</strong> {formData.fieldOfStudy}
          </p>
        </>
      )}

      <p>
        <strong>Feedback:</strong> {formData.feedback}
      </p>
    </div>
  );
}

export default Summary;
