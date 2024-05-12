import Link from "next/link";
import CopyrightBar from "../ui/copyrightbar";
import Footer from "../ui/footer";
import JobContact from "../ui/job-contact";
import NavBarContainer from "../ui/nav-bar-container";
import Button from "../ui/button";

export default function Job() {
  return (
    <div className="job-page">
      <div className="hero">
        <NavBarContainer />
      </div>
      <JobHead />
      <JobDescription />
      <div id="apply-now" className="job-page-contact-form">
        <JobContact
          heading="Step into Tomorrow with Qcentrio"
          subheading="Join forces with Qcentrio to redefine your industry. Let's collaborate to unlock growth drivers, accelerate innovation, and shape the future."
        />
      </div>
      <Footer />
      <CopyrightBar />
    </div>
  );
}

function JobHead() {
  return (
    <div className="job-head-section">
      <h1
        data-option="strip-slide-up"
        className="animate strip-slide-up strip-slide-black">
        HYPERION DEVELOPER
      </h1>
      <Link href="#apply-now">
        <Button name="Apply Now" />
      </Link>
    </div>
  );
}

function JobDescription() {
  return (
    <div className="job-description-section">
      <h2
        data-option="up"
        className="job-description-heading animate animate-hidden">
        JOB DESCRIPTION
      </h2>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Role:</th>
            <td>IT Infrastructure Services - Other</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>7 - 11 years</td>
          </tr>
          <tr>
            <th>Base Location:</th>
            <td>Remote</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>UG: B.Tech/B.E. in Any Specialization</td>
          </tr>
          <tr>
            <th>Mandatory Skill:</th>
            <td>
              Groovy Scripting, Business Rules, Python Scripting, Hyperion
              developer, SQL Scripting, Smartview, Hyperion Essbase, Coding
              Expect, Hyperion Planning, Hyperion Reporting
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="job-description-section-content">
        <li>
          Proven experience with Hyperion Planning version 11.X version or EPM
          Cloud
        </li>
        <li>
          Extensive experience in developing and maintaining Hyperion Planning
          and Essbase applications
        </li>
        <li>Strong understanding of ASO and BSO cube development</li>
        <li>Independently handle metadata build and security</li>
        <li>Expert level knowledge in writing business rules</li>
        <li>Knowledge of writing basic SQLs</li>
        <li>
          Experience with SmartView, web forms, financial reports, MDX queries
          and MXL scripting
        </li>
        <li>
          Experience with SmartView, web forms, financial reports, MDX queries
          and MXL scripting
        </li>
        <li>
          Deep functional and technical knowledge of financial systems and
          business processes, especially around planning, budgeting, forecasting
        </li>
        <li>
          Apply structure knowledge to solve problems, break down issues and
          identify solutions.
        </li>
        <li>
          Strong oral and written communication skills are essential for this
          role
        </li>
        <li>The ability to work independently and be proactive</li>
        <li>Knowledge of integration between external systems</li>
        <li>Analytical and assessment skills essential</li>
        <li>
          Proven experience in providing system support and direct contact with
          users to solve issues with business applications
        </li>
      </ul>
      <table data-option="up" className="animate animate-hidden">
        <tbody>
          <tr>
            <th>Industry Type:</th>
            <td>IT Services & Consulting</td>
          </tr>
          <tr>
            <th>Department:</th>
            <td>IT & Information Security</td>
          </tr>
          <tr>
            <th>Employment Type:</th>
            <td>Full Time, Permanent</td>
          </tr>
          <tr>
            <th>Role Category:</th>
            <td>IT Infrastructure Services</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
