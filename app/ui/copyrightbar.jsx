import Image from "next/image";
// import logo from "@/public/logo.svg";
import Link from "next/link";

export default function CopyrightBar() {
  return (
    <div className="copyright-section">
      <div className="copyright-text">
        Copyrights © 2024 <Link href="/">Qcentrio</Link>, All Rights Reserved.
      </div>
      <div className="flex justify-center main-logo-conatiner">
        <Image className="copy-right-logo" src="" alt="" />
      </div>
      {/* <div className="handcrafted">
        Handcrafted with ❤ by <a href="https://www.x-verity.com">X-Verity</a>
      </div> */}
      <div className="terms">
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
    </div>
  );
}
