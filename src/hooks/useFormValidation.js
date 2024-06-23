import { useState } from "react";

const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.surveyTopic) {
      newErrors.surveyTopic = "Survey Topic is required";
    }

    if (formData.surveyTopic === "Technology") {
      if (!formData.favoriteProgrammingLanguage) {
        newErrors.favoriteProgrammingLanguage = "Favorite Programming Language is required";
      }
      if (!formData.yearsOfExperience) {
        newErrors.yearsOfExperience = "Years of Experience is required";
      } else if (isNaN(formData.yearsOfExperience) || formData.yearsOfExperience <= 0) {
        newErrors.yearsOfExperience = "Years of Experience must be a number greater than 0";
      }
    }

    if (formData.surveyTopic === "Health") {
      if (!formData.exerciseFrequency) {
        newErrors.exerciseFrequency = "Exercise Frequency is required";
      }
      if (!formData.dietPreference) {
        newErrors.dietPreference = "Diet Preference is required";
      }
    }

    if (formData.surveyTopic === "Education") {
      if (!formData.highestQualification) {
        newErrors.highestQualification = "Highest Qualification is required";
      }
      if (!formData.fieldOfStudy.trim()) {
        newErrors.fieldOfStudy = "Field of Study is required";
      }
    }

    if (!formData.feedback.trim() || formData.feedback.length < 50) {
      newErrors.feedback = "Feedback is required and must be at least 50 characters";
    }

    setErrors(newErrors);
    return newErrors;
  };

  return { errors, validateForm };
};

export default useFormValidation;
