import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Prchan Tourism",
  description: "Privacy notice for Prchan Tourism sp. z o.o. describing how and why we might collect, store, use, and/or share your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto prose prose-gray">
        <h1 className="text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">PRIVACY NOTICE</h1>
        <p className="text-gray-500 mb-8">Last updated July 01, 2022</p>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            This privacy notice for Prchan Tourism sp. z o.o. (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;,), describes how and why we might collect, store, use, and/or share (&apos;process&apos;) your information when you use our services (&apos;Services&apos;), such as when you:
          </p>
          <p>
            Visit our website at https://prchan-tourism.com/, or any website of ours that links to this privacy notice
          </p>
          <p>
            Engage with us in other related ways, including any sales, marketing, or events
          </p>
          <p>
            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@prchan-tourism.com.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-4 uppercase">SUMMARY OF KEY POINTS</h2>
          <p>
            This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.
          </p>

          <p>
            <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Prchan Tourism sp. z o.o. and the Services, the choices you make, and the products and features you use. Click here to learn more.
          </p>

          <p>
            <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
          </p>

          <p>
            <strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.
          </p>

          <p>
            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.
          </p>

          <p>
            <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Click here to learn more.
          </p>

          <p>
            <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.
          </p>

          <p>
            <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.
          </p>

          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <p>
            Want to learn more about what Prchan Tourism sp. z o.o. does with any information we collect? Click here to review the notice in full.
          </p>
        </div>
      </div>
    </section>
  );
}
