import Image from "next/image";
import React from "react";

type Props = {};

const BetterBCAssessment = (props: Props) => {
  return (
    <div>
      <p>
        Better BC Assessment is a mobile app that helps you to find your
        property assessment value in British Columbia. It is a simple and easy
        to use app.
      </p>
      <div className="flex flex-row mt-8">
        <a
          href="https://play.google.com/store/apps/details?id=com.oxcode.betterbcassessment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/GooglePlay_Badge.png"
            alt="Download on Google Play"
            style={{ marginRight: "10px" }}
            width={170}
            height={50}
          />
        </a>

        <a
          href="https://apps.apple.com/ca/app/better-bc-assessment/id6504163154"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/App_Store_Badge.svg"
            alt="Download on the App Store"
            width={150}
            height={50}
          />
        </a>
      </div>
    </div>
  );
};

export default BetterBCAssessment;
