"use client";

import Image from "next/image";
import Link from "next/link";
// import arrow from "@/public/blog-arrow.svg";
// import greenArrow from "@/public/discover-green-arrow.svg";
// import whatNew from "@/public/bi-andsql-analytics.png";
import { useEffect, useRef, useState } from "react";

export function MegaMenu({ setServiceHovered, servicesHovered }) {
  const [index, setIndex] = useState(0);
  const [subindex, setSubIndex] = useState(0);
  const [service, setService] = useState("Business Value Enhancement");
  const container = useRef(null);
  const links = [
    {
      column1: [
        {
          title: "Generative AI Solutions and Offerings",
          link: "/offerings/business-value-enhancement-services/generative-ai-solutions-and-offerings",
        },
        {
          title: "Artificial Intelligence / Machine Learning Offerings",
          link: "/offerings/business-value-enhancement-services/artificial-intelligence-machine-learning-offerings",
        },
      ],
      column2: [
        {
          title: "Robotic Process Automation Services",
          link: "/offerings/business-value-enhancement-services/robotic-process-automation-services",
        },
      ],
    },
    {
      column1: [
        {
          title: "ERP Solutions Support",
          link: "/offerings/advanced-technology-solutions/erp-solutions-support",
        },
        {
          title: "Comprehensive SAP Services",
          link: "/offerings/advanced-technology-solutions/comprehensive-sap-services",
        },
        {
          title: "Product Engineering Services",
          link: "/offerings/advanced-technology-solutions/product-engineering-services",
        },
      ],
      column2: [
        {
          title: "Custom Software / Application Development",
          link: "/offerings/advanced-technology-solutions/custom-software-application-development",
        },
        {
          title: "Internet of Things (IoT) Solutions",
          link: "/offerings/advanced-technology-solutions/internet-of-things-solutions",
        },
        {
          title: "Big Data Services and Solutions",
          link: "/offerings/advanced-technology-solutions/big-data-services-and-solutions",
        },
      ],
    },
    {
      column1: [
        {
          title: "EPIC Advisory Services",
          link: "/offerings/advisory-and-strategic-services/epic-advisory-services",
        },
        {
          title: "Oracle Cerner Advisory Services",
          link: "/offerings/advisory-and-strategic-services/oracle-cerner-advisory-services",
        },
        {
          title: "Audit and Assurance Services",
          link: "/offerings/advisory-and-strategic-services/audit-and-assurance-services",
        },
      ],
      column2: [
        {
          title: "Risk Advisory Services",
          link: "/offerings/advisory-and-strategic-services/risk-advisory-services",
        },
        {
          title: "Specialty Services",
          link: "/offerings/advisory-and-strategic-services/specialty-services",
        },
        // {
        //   title: "Mergers & Acquisitions Advisory",
        //   link: "/offerings/advisory-and-strategic-services/mergers-and-acquisitions-advisory-services",
        // },
      ],
    },
    {
      column1: [
        {
          title: "Data Analytics and Business Intelligence",
          link: "/offerings/business-optimization-and-analytics-services/data-analytics-and-business-intelligence",
        },
        {
          title: "Collaboration and Productivity Solutions",
          link: "/offerings/business-optimization-and-analytics-services/collaboration-and-productivity-solutions",
        },
      ],
      column2: [
        {
          title: "CRM System Solutions",
          link: "/offerings/business-optimization-and-analytics-services/crm-system-solutions",
        },
      ],
    },
    {
      column1: [
        {
          title: "Blockchain Strategy and Advisory",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-strategy-and-advisory",
        },
        {
          title: "Blockchain Solution Development",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-solution-development",
        },
      ],
      column2: [
        {
          title: "Blockchain Integration and Deployment",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-integration-and-deployment",
        },
        {
          title: "Blockchain Security and Compliance",
          link: "/offerings/blockchain-advisory-and-offerings/blockchain-security-and-compliance",
        },
      ],
    },
    {
      column1: [
        {
          title: "Cloud Infrastructure Services",
          link: "/offerings/cloud-infra-and-security-services/cloud-infrastructure-services",
        },
        {
          title: "Salesforce Services",
          link: "/offerings/cloud-infra-and-security-services/salesforce-services",
        },
        {
          title: "Azure Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/azure-services-and-offerings",
        },
        {
          title: "AWS Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/aws-services-and-offerings",
        },
      ],
      column2: [
        {
          title: "GCP Services and Offerings",
          link: "/offerings/cloud-infra-and-security-services/gcp-services-and-offerings",
        },
        {
          title: "Cybersecurity Solutions",
          link: "/offerings/cloud-infra-and-security-services/cybersecurity-solutions",
        },
        {
          title: "Continuous IT Support and Managed Services",
          link: "/offerings/cloud-infra-and-security-services/continuous-it-support-and-managed-services",
        },
        {
          title: "Offshore Development Centre (ODC) Services",
          link: "/offerings/cloud-infra-and-security-services/offshore-development-centre-services",
        },
      ],
    },
  ];

  const caseStudies = [
    {
      image: whatNew,
      title: "Automate Vehicle Aero Simulations: Faster Product Development",
      link: "/case-study/streamline-your-product-development-with-automated-vehicle-aerodynamics-simulations",
    },
    {
      image: whatNew,
      title: "Automate Vehicle Aero Simulations: Faster Product Development",
      link: "/case-study/streamline-your-product-development-with-automated-vehicle-aerodynamics-simulations",
    },
    {
      image: whatNew,
      title: "Enhancing Patient Care with BI and SQL Analytics",
      link: "/case-study/enhancing-patient-care-with-bi-and-sql-analytics",
    },
    {
      image: whatNew,
      title: "Automate Vehicle Aero Simulations: Faster Product Development",
      link: "/case-study/streamline-your-product-development-with-automated-vehicle-aerodynamics-simulations",
    },
    {
      image: whatNew,
      title:
        "Transforming Land Management in India’s Leading State with a Blockchain Platform",
      link: "/case-study/transforming-land-management-in-india-leading-state-with-a-blockchain-platform",
    },
    {
      image: whatNew,
      title: "Automate Vehicle Aero Simulations: Faster Product Development",
      link: "/case-study/streamline-your-product-development-with-automated-vehicle-aerodynamics-simulations",
    },
  ];

  const mainServices = [
    "Business Value Enhancement",
    "Advanced Technology Solutions",
    "Advisory and Strategic Services",
    "Business Optimization and Analytics",
    "Blockchain Services & Solutions",
    "Cloud Infrastructure & Security Services",
  ];

  const mainTitles = [
    {
      content:
        "Specializing in AI solutions to revolutionize and drive business growth.",
      link: "/offerings/business-value-enhancement-services",
    },
    {
      content:
        "Streamline operations, unlock data insights, and innovate with our end-to-end advanced technology solutions.",
      link: "/offerings/advanced-technology-solutions",
    },
    {
      content:
        "Navigate complexity, mitigate risk, and thrive with our tailored advisory and strategic services.",
      link: "/offerings/advisory-and-strategic-services",
    },
    {
      content:
        "Transform data into actionable insights for smarter decisions and a more efficient business.",
      link: "/offerings/business-optimization-and-analytics-services",
    },
    {
      content:
        "Securely navigate the future of transactions with our comprehensive blockchain strategy, development, and integration services",
      link: "/offerings/blockchain-advisory-and-offerings",
    },
    {
      content:
        "Empower your business with secure, scalable cloud solutions: Infrastructure, platforms, security, and ongoing support.",
      link: "/offerings/cloud-infra-and-security-services",
    },
  ];

  const industryLinks = [
    [
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Heavy Engineering",
        "Aerospace",
        "Travel & Transportation",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Energy",
        "Travel & Transportation",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Real Estate",
        "Travel & Transportation",
      ],
    ],
    [
      [
        "Healthcare",
        "Financial Services",
        "Manufacturing",
        "Retail",
        "Supply Chain and Logistics",
        "Hospitality",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Automotive",
        "Public Sector",
      ],
      [
        "Consumer Electronics",
        "Automotive",
        "Aerospace",
        "Medical Devices",
        "Telecom",
        "Servers/Storage",
      ],
      [
        "Healthcare",
        "Fintech",
        "Education",
        "Retail",
        "Logistics",
        "Hospitality",
      ],
      [
        "Automotive",
        "Smart Home & Building",
        "Agriculture",
        "Retail",
        "Healthcare",
        "Travel & Transportation",
      ],
      [
        "Healthcare",
        "Financial Services",
        "Manufacturing",
        "Retail",
        "Transportation",
        "Media and Entertainment",
      ],
    ],
    [
      ["Hospitals and Clinics", "Telemedicine", "Pharmacy Management"],
      ["Hospitals", "Clinics", "Specialty Care"],
      ["Healthcare", "Finance", "Manufacturing", "Retail", "Tech and IT"],
      [
        "Healthcare",
        "Finance and Banking",
        "E-Commerce",
        "Telecommunications",
        "Energy and Utilities",
        "Government and Public Services",
      ],
      [
        "Technology and Software",
        "E-Commerce",
        "Healthcare",
        "Finance and Banking",
        "Education Technology",
        "Automotive",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail and Consumer Goods",
        "Media and Entertainment",
        "Energy and Resources",
      ],
    ],
    [
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Energy",
        "Telecommunications",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Software Technology",
        "Education",
      ],
      ["Healthcare", "Finance", "Manufacturing", "Retail"],
    ],
    [
      [
        "Finance",
        "Supply Chain Management",
        "Retail and Consumer Goods",
        "Automotive",
        "Media and Entertainment",
        "Telecommunications",
      ],
      [
        "Financial Services",
        "Healthcare",
        "Supply Chain Management",
        "Energy",
        "Media and Entertainment",
        "Government",
      ],
      [
        "Finance",
        "Healthcare",
        "Supply Chain",
        "Government",
        "Retail",
        "Manufacturing",
      ],
      [
        "Fintech and Banking",
        "Healthcare",
        "Supply Chain",
        "Retail",
        "Real Estate",
        "Legal",
      ],
    ],
    [
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Education",
        "Government",
      ],
      [
        "Financial Services",
        "Healthcare",
        "Retail",
        "Government",
        "Automotive",
        "Telecommunications",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Education",
        "Automotive",
      ],
      [
        "Healthcare",
        "Finance",
        "E-Commerce",
        "Real Estate",
        "Education",
        "Government",
      ],
      [
        "Healthcare",
        "Finance",
        "Manufacturing",
        "Retail",
        "Media & Entertainment",
        "Automotive",
      ],
      [
        "Healthcare",
        "Finance",
        "Transportation",
        "Retail",
        "Hospitality",
        "Education",
      ],
      [
        "Healthcare",
        "Finance",
        "Logistics and Supply Chain",
        "Hospitality and Travel",
        "Legal Services",
        "Education",
      ],
      [
        "Software and Technology",
        "Healthcare",
        "Financial Services",
        "Telecommunications",
        "E-Commerce",
        "Entertainment & Media",
      ],
    ],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setServiceHovered((prevState) => prevState == false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setServiceHovered]);

  return (
    <div
      data-option="mega-menu-container"
      onClick={(e) => {
        if (e.target.getAttribute("data-option") == "mega-menu-container") {
          setServiceHovered(!servicesHovered);
        }
      }}
      ref={container}
      className="menu-menu-container">
      <div className="nav-options mega-menu">
        <div className="mega-menu-column mega-menu-column-1">
          <h2 className="mega-menu-heading">Our Offerings</h2>
          <div className="border border-[#F2F2F2]">
            <div
              data-index="0"
              className={`mega-menu-main-nav-link ${
                index == 0 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(0);
                setSubIndex(0);
              }}>
              Business Value Enhancement
              <span
                className={`chevron right ${
                  index == 0 ? "" : "active"
                }`}></span>
            </div>
            <div
              data-index="1"
              className={`mega-menu-main-nav-link ${
                index == 1 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(1);
                setSubIndex(0);
              }}>
              Advanced Technology Solutions
              <span
                className={`chevron right ${
                  index == 1 ? "" : "active"
                }`}></span>
            </div>
            <div
              data-index="2"
              className={`mega-menu-main-nav-link ${
                index == 2 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(2);
                setSubIndex(0);
              }}>
              Advisory and Strategic Services
              <span
                className={`chevron right ${
                  index == 2 ? "" : "active"
                }`}></span>
            </div>
            <div
              data-index="3"
              className={`mega-menu-main-nav-link ${
                index == 3 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(3);
                setSubIndex(0);
              }}>
              Business Optimization and Analytics
              <span
                className={`chevron right ${
                  index == 3 ? "" : "active"
                }`}></span>
            </div>
            <div
              data-index="4"
              className={`mega-menu-main-nav-link ${
                index == 4 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(4);
                setSubIndex(0);
              }}>
              Blockchain Services & Solutions
              <span
                className={`chevron right ${
                  index == 4 ? "" : "active"
                }`}></span>
            </div>
            <div
              data-index="5"
              className={`mega-menu-main-nav-link ${
                index == 5 ? "active" : ""
              }`}
              onClick={() => {
                setIndex(5);
                setSubIndex(0);
              }}>
              Cloud Infrastructure & Security Services
              <span
                className={`chevron right ${
                  index == 5 ? "" : "active"
                }`}></span>
            </div>
          </div>
        </div>
        <div className="mega-menu-column mega-menu-column-2 ">
          <h2 className="mega-menu-heading">{mainServices[index]}</h2>
          <div className="border-r border-b border-[#F2F2F2] h-full flex flex-col">
            <div className="mega-menu-content">
              <div>{mainTitles[index].content}</div>
              <div className="mega-menu-content-link">
                <Link href={mainTitles[index].link}>
                  <div>
                    Read More
                    <span className="mega-menu-arrow">
                      <Image fill src={greenArrow} alt="" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mega-menu-middle-columns-container">
              <div className="border-r border-[#F2F2F2]">
                {links[index].column1.map((link, i) => {
                  return (
                    <Link
                      onMouseOver={() => setSubIndex(i)}
                      key={i}
                      href={link.link}>
                      <div className="mega-menu-sub-nav-link">{link.title}</div>
                    </Link>
                  );
                })}
              </div>
              <div>
                {links[index].column2 &&
                  links[index].column2.map((link, i) => {
                    return (
                      <Link
                        onMouseOver={() =>
                          setSubIndex(i + links[index].column1.length)
                        }
                        key={i}
                        href={link.link}>
                        <div key={i} className="mega-menu-sub-nav-link">
                          {link.title}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="mega-menu-column">
          <h2 className="mega-menu-heading">Industries</h2>
          {industryLinks[index][subindex].map((item, i) => (
            <div className="industry-nav-item" key={i}>
              {item}
            </div>
          ))}
        </div>
        <div className="mega-menu-column mega-menu-column-3">
          <h2 className="mega-menu-heading ">What's New?</h2>
          <div className="what-new-col-container">
            <Image className="mb-[10px]" src={whatNew} alt="" />
            <div className="what-new-title">{caseStudies[index].title}</div>
            <Link className="w-fit mt-auto" href={caseStudies[index].link}>
              <div className="what-new-btn">
                Learn More
                <span className="mega-menu-arrow">
                  <Image fill src={arrow} alt="" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
