import Link from "next/link";
import FooterEmail from "./footer-email";
import SocialLinksMain from "./social-links-main";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-column-container">
        <div className="footer-columns-holder">
          <div className="footer-column">
            <h2 className="footer-heading ">
              <Link
                data-option="strip-slide-up"
                className="animate strip-slide-up strip-slide-green"
                href="/insights">
                Insights
              </Link>
            </h2>
            <p className="footer-item ">
              <Link href="/insights?type=perspectives">Prespectives</Link>
            </p>
            <p className="footer-item ">
              <Link href="/insights?type=case-studytype=case-study">
                Case Studies
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/insights">Thought Leadership</Link>
            </p>
            <p className="footer-item ">
              <Link href="/insights">News</Link>
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="strip-slide-up"
              className="footer-heading animate strip-slide-up strip-slide-green">
              Company
            </h2>
            <p className="footer-item ">
              <Link href="/about-us">About Us</Link>
            </p>
            <p className="footer-item ">
              <Link href="/careers">Careers</Link>
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="strip-slide-up"
              className="footer-heading animate strip-slide-up strip-slide-green">
              Transformations
            </h2>
            <p className="footer-item ">
              <Link href="/offerings/business-value-enhancement-services">
                Business Value Enhancement
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/offerings/advisory-and-strategic-services">
                Advisory and Strategic Services
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/offerings/business-optimization-and-analytics-services">
                Business Optimization and Analytics
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/offerings/advanced-technology-solutions">
                Advanced Technology Solutions
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/offerings/cloud-infra-and-security-services">
                Cloud Infrastructure & Security
              </Link>
            </p>
            <p className="footer-item ">
              <Link href="/offerings/blockchain-advisory-and-offerings">
                Blockchain Services & Solutions
              </Link>
            </p>
          </div>
          <div className="footer-column">
            <h2
              data-option="strip-slide-up"
              className="footer-heading animate strip-slide-up strip-slide-green">
              Legal
            </h2>
            <p className="footer-item ">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </p>
            <p className="footer-item ">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p className="footer-item ">
              <Link href="/cookie-policy">Cookie Policy</Link>
            </p>
          </div>
        </div>
        <div>
          <div className="footer-form-column">
            <h2
              data-option="strip-slide-up"
              className="footer-form-heading animate strip-slide-up strip-slide-black">
              Stay ahead in a rapidly changing world.
            </h2>
            <p
              data-option="up"
              className="footer-form-sub-heading animate animate-hidden">
              Subscribe to our Insights, our monthly look at the critical issues
              facing global businesses.
            </p>

            <FooterEmail />
          </div>
        </div>
      </div>
      <SocialLinksMain />
    </footer>
  );
}
