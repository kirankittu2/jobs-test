"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Button from "./button";

export default function JobContact({ heading, subheading }) {
  const customFilename = useRef(null);
  const file = useRef(null);
  const [submitting, setSubmitting] = useState(true);
  const [error, setError] = useState(true);
  const router = useRouter();

  function updateFileName(e) {
    var fileName = e.target.files[0].name;
    customFilename.current.value = fileName;
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setSubmitting(false);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdTKMUpAAAAAOUf_fNbftCXwdXc5KLdgZov7P74", {
          action: "submit",
        })
        .then(async function (token) {
          formData.append("g-recaptcha-response", token);
          formData.append("resume", file.current.files[0]);
          const response = await careersMail(formData);
          setSubmitting(response.success);
          setError(response.success);
          if (response.success) {
            router.push("/thank-you");
          } else if (!response.success) {
            setSubmitting(true);
          }
        });
    });
  }

  return (
    <div className="contact-section balance-section">
      <h2
        data-option="strip-slide-up"
        className="contact-heading animate strip-slide-up strip-slide-black">
        {heading}
      </h2>
      <p
        data-option="up"
        className="section-content contact-sub-heading animate-hidden animate">
        {subheading}
      </p>
      {!error && <p className="form-error">Error Submitting Form</p>}
      <form onSubmit={onSubmit}>
        <div className="contact-column">
          <input
            data-option="up"
            name="first-name"
            type="text"
            className="animate-hidden animate"
            placeholder="First Name"
            required
          />
          <input
            data-option="up"
            name="last-name"
            type="text"
            className="animate-hidden animate"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact-column">
          <input
            data-option="up"
            name="email"
            type="email"
            className="animate-hidden animate"
            placeholder="Email Address"
            required
          />
          <label
            data-option="up"
            htmlFor="fileInput"
            className="custom-file-input animate animate-hidden">
            <input
              ref={file}
              type="file"
              id="fileInput"
              onChange={updateFileName}
            />
            <input
              ref={customFilename}
              type="text"
              placeholder="Resume / Portfolio Link"
              id="displayInput"
            />
          </label>
        </div>
        <textarea
          data-option="up"
          name="message"
          className="animate-hidden animate"
          placeholder="Your Message"
          rows="10"></textarea>
        <div className="contact-btn-container">
          <Button name={!submitting ? "Submitting..." : "Contact Us"} />
        </div>
      </form>
    </div>
  );
}
