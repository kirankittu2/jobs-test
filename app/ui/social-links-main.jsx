"use client";

import Image from "next/image";
// import facebook from "@/public/facebook.svg";
// import twitter from "@/public/twitter.svg";
// import linkedin from "@/public/linkedin.svg";
import Link from "next/link";

export default function SocialLinksMain() {
  return (
    <div data-option="up" className="social-links animate animate-hidden">
      <div>
        <Link href="https://www.facebook.com/qcentrio.2023">
          <Image fill src="" alt="" />
        </Link>
      </div>
      <div>
        <Link href="https://twitter.com/qcentrio">
          <Image fill src="" alt="" />
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/company/qcentrio/">
          <Image fill src="" alt="" />
        </Link>
      </div>
    </div>
  );
}
