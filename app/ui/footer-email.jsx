"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./button";

export default function FooterEmail() {
  const [submitting, setSubmitting] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(true);
  const [termsError, setTermsError] = useState(false);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (isChecked) {
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
            const response = await footerMail(formData);
            setSubmitting(response.success);
            setError(response.success);
            if (response.success) {
              router.push("/thank-you");
            } else if (!response.success) {
              setSubmitting(true);
            }
          });
      });
    } else {
      setTermsError(true);
    }
  }

  return (
    <>
      <div
        data-option="up"
        className="privacy-policy-check-text animate animate-hidden">
        <div className="footer-checkbox">
          <input
            type="checkbox"
            id="privacy-policy"
            checked={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)}
          />
          <label className="privacy-checkbox-text " htmlFor="privacy-policy">
            *I have read the&nbsp;
            <span>
              <Link className="" href="/privacy-policy">
                Privacy Policy
              </Link>
            </span>
            &nbsp;and agree to its terms.
          </label>
        </div>
      </div>
      <div
        data-option="up"
        className="lets-talk-container animate animate-hidden">
        {!error && <p className="form-error">Error Submitting Form</p>}
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            required
          />
          <div className="input-btn">
            <Button name={!submitting ? "Submitting..." : "Subscribe"} />
          </div>
        </form>
      </div>
      {termsError && (
        <p className="privacy-policy-check-error">
          Please check the privacy policy
        </p>
      )}
    </>
  );
}
