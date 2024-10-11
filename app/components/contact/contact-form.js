"use client";

import styles from "./contact-form.module.css";
import submitForm from "../../../actions";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { SubmitButton } from "../ui/submit-button";

export function ContactForm() {
  const [formState, formAction] = useFormState(submitForm, "");
  const formRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // useEffect hook monitors the formState for changes. If the form submission is successful, it resets the form fields and sets the success message. The message is cleared after 10 seconds using a timer.
  useEffect(() => {
    if (formState?.success) {
      // Clear form fields
      if (formRef.current) {
        formRef.current.reset();
      }
      // Display success message
      setSubmitMessage(formState.message);
      // Clear message after 5 seconds
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);

      // Cleanup timer
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form 
      ref={formRef} 
      action={formAction} 
      className={styles.form}>
        <div className={styles.formGroupHalf}>
          <div className={styles.formGroup}>
            <label 
              htmlFor="name">
                Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
            {formState.errors?.name && <span>{formState.errors.name}</span>}
          </div>
        <div className={styles.formGroup}>
          <label 
            htmlFor="email">
              Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
          />
          {formState.errors?.email && <span>{formState.errors.email}</span>}
        </div>
      </div>
      <div className={styles.formGroup}>
        <label 
          htmlFor="message">
            Message
        </label>
        <textarea 
          id="message" 
          name="message" 
          rows="2" 
          required
        ></textarea>
        {formState.errors?.message && <span>{formState.errors.message}</span>}
      </div>
      <div className={styles.submitContainer}>
        <SubmitButton />
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </form>
  );
}
