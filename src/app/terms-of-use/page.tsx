"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-gray-800 leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-bold text-[#005FA1] mb-12 text-center">
          Terms, Policies & Conditions
        </h1>

        {/* Section 1: Shipping Policy */}
        <section id="shipping" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-[#00395c] mb-6 border-b-2 border-[#005FA1] pb-2">
            Shipping Policy
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Aadarana Trust</p>
              <p>
                Plot No. 84, NRI Colony,
                <br />
                Beside AMS MBA College Campus,
                <br />
                Kismathpur, Gandipet Mandal,
                <br />
                Rangareddy District, Hyderabad – 500086, Telangana, India
                <br />
                Email: aadarana2013@gmail.com | Phone: +91 95538 05112
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">1. Overview</h3>
              <p>
                Aadarana Trust does not typically engage in the sale or shipment of goods or products, as we are a non-profit charitable organization. However, from time to time, we may distribute physical items such as receipts, certificates of donation, promotional materials, or awareness kits to our donors, sponsors, or beneficiaries. This Shipping Policy outlines the procedures and timelines involved in such cases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Shipping Scope</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Donor Acknowledgment Kits (if opted for during donation).</li>
                <li>Receipts or Official Communication that require physical dispatch.</li>
                <li>Event Participation Kits for volunteers or campaign partners.</li>
                <li>Awareness Material for distribution during campaigns or drives.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Shipping Method & Carriers</h3>
              <p>
                All items will be dispatched through reliable courier partners or the Indian Postal Service, depending on the location, cost, and nature of the shipment. We reserve the right to choose the most suitable service provider for delivery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Shipping Charges</h3>
               <ul className="list-disc list-inside ml-4 space-y-1">
                <li>No shipping charges will be levied on donors for official correspondence (e.g., receipts).</li>
                <li>For any merchandise or awareness material (if applicable), shipping charges will be mentioned clearly at the time of request/registration.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Delivery Timeframes</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Within India: 7–14 working days from the date of dispatch.</li>
                <li>Remote Areas: May take additional 3–5 working days.</li>
                <li>International Deliveries: Currently not supported unless explicitly communicated.</li>
              </ul>
              <p className="mt-2">
                <strong>Note:</strong> Delivery timelines are approximate and may vary due to unforeseen circumstances such as postal delays, natural calamities, or administrative issues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">6. Tracking & Confirmation</h3>
              <p>If a tracking number is available, it will be shared with the recipient via email or SMS (if applicable). For queries regarding the status of a shipment, recipients may contact us using the contact information provided above.</p>
            </div>
             <div>
              <h3 className="text-xl font-semibold">7. Incorrect or Incomplete Address</h3>
              <p>Aadarana Trust shall not be responsible for failed deliveries due to incorrect or incomplete addresses provided by the recipient. In such cases, re-shipment may be considered at the discretion of the Trust and may incur additional charges.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">8. Lost or Damaged Items</h3>
              <p>In rare cases of loss or damage during transit, please notify us within 7 days of expected delivery. We will attempt to resend the items if deemed appropriate, at no additional cost.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">9. Changes to the Shipping Policy</h3>
              <p>We reserve the right to amend this Shipping Policy at any time. Changes will be updated on our website and effective immediately upon posting.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Terms and Conditions */}
        <section id="terms" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-[#00395c] mb-6 border-b-2 border-[#005FA1] pb-2">
                Terms and Conditions
            </h2>
            <div className="space-y-4">
                <p>The Aadarana TrustFoundation takes your privacy seriously and treats all financial information about any transaction you have with the Foundation as highly confidential. In addition, Aadarana Trust does not share e-mail addresses or phone numbers of any of our donors or constituents.</p>
                <p>The Foundation deeply values all contributions to sustain our mission. To protect the privacy of our donors and their special relationship with Smile always, we maintain the following policies:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>We may request personal information online, such as name, address, phone number, email address, and credit card number ONLY for the purposes of accepting donations to Aadarana Trust.</li>
                    <li>We will not release or use this information for any other purpose unless we have your consent.</li>
                    <li>We do not trade or sell your personal information with other organizations.</li>
                    <li>We offer donors the option to be recognized anonymously.</li>
                    <li>Donors may request, at any time, to not receive our solicitations.</li>
                    <li>Donors may request to not receive certain mailings, such as our newsletter.</li>
                    <li>We do not track, collect or distribute personal information entered by those who visit our website.</li>
                    <li>Personal information stored in The Aadarana Trust database is protected with a secured login with authentication, assignment of a unique ID to each person with computer access, regular pass code changes, and user IDs are deactivated or terminated as needed.</li>
                    <li>To assure that philanthropy merits the respect and trust of the general public, and that donors and prospective donors can have full confidence in the not-for-profit organizations and causes they are asked to support, we assure the following :</li>
                    <li>To be informed of the foundation's mission, of the way the foundation intends to use donated resources, and of its capacity to use donations effectively for their intended purposes</li>
                    <li>Donations contributed will be used to meet the cost of Programs & activities of the Organization. In case of any excess funds at the end of a relief service, the funds are directed towards feeding the children</li>
                    <li>To be informed of the identity of those serving on the foundation's governing board, and to expect the board to exercise prudent judgment in its responsibilities</li>
                    <li>To have access to the foundation's most recent financial statements</li>
                    <li>To receive appropriate acknowledgment and recognition</li>
                    <li>To be assured that information about their donations is handled with respect and with confidentiality to the extent provided by law</li>
                    <li>To expect that all relationships with individuals representing the foundation to the donor will be professional</li>
                    <li>To be informed whether those seeking donations are volunteers, employees of the organization or hired solicitors</li>
                    <li>To have the opportunity for their names to be deleted from mailing lists that the foundation may intend to share</li>
                    <li>To feel free to ask questions when making a donation and to receive prompt, truthful and forthright answers</li>
                </ul>
            </div>
        </section>

        {/* Section 3: Privacy Policy */}
        <section id="privacy" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-[#00395c] mb-6 border-b-2 border-[#005FA1] pb-2">
                Privacy Policy
            </h2>
            <div className="space-y-6">
              <p>This Website is owned and operated by Aadarana Trust. We recognize that visitors to our site may be concerned about the information they provide to us and how we treat that information. Aadarana Trust is committed to ensuring that your privacy is protected. This Privacy Policy addresses those concerns. This policy may be changed or updated from time to time. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 01/04/2025.</p>
              <p>If you have any questions about our Privacy Policy, you may contact us at:</p>
              <div className="pl-4 border-l-4 border-gray-200">
                  <p className="font-semibold">Aadarana Trust</p>
                  <p>Plot No. 84, NRI Colony, Beside AMS MBA College Campus<br />Kismathpur, Gandipet Mandal, Rangareddy District, Hyderabad – 500086, Telangana, India<br />Email: aadarana2013@gmail.com, Phone: +91 95538 05112</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  <p>Aadarana Trust uses its best efforts to respect the privacy of its online visitors. At our site, we do not collect personally identifiable information from individuals unless they provide it to us voluntarily and knowingly. This means we do not require you to register or provide information to us in order to view our website. Aadarana Trust only gathers personally identifiable data, such as names, addresses, zip/postal codes, e-mail addresses, etc., when voluntarily submitted by a visitor. For example, we ask for personal information on our online donation pages, and use this information to acknowledge receipt of your donation for tax purposes. Aadarana Trust does not sell or trade such information collected to third parties. We will not share personally identifiable information with third parties unless authorized by the person submitting the information or required by law.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Credit Card Information Security</h3>
                  <p>Aadarana Trust Payment Gateway to protect the security of your transaction and the confidentiality of your personal information. This makes it extremely difficult for anyone else to intercept the credit card information you send to us. Credit card information is not sold or traded to third parties. We will not share credit card information with third parties unless required by law.</p>
                  <p>If you still have concerns about the security of your credit card information, contributions may also be made by email: suddu@smilealways.org, or by sending personal checks or money orders to us.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Security</h3>
                  <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Donations</h3>
                  <p>We request information from the visitor on our donation form. A visitor must provide contact information (such as name, e-mail and mailing address) and payment information (such as credit card number and expiration date). This information is used for billing purposes and for sending receipt of the donation. If we have trouble processing a donation, the information is used by us to contact the visitor. If the visitor has given permission for the information's release, the visitor's name and contact information may be shared with carefully selected organizations and charities we feel our donors would want to know about. Where requested, we will provide information on larger donations to appropriate charities and donors for tax purposes. Financial and credit card information are NEVER released.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Opt-Out</h3>
                  <p>If you supply us with your postal address or e-mail address on-line you may receive periodic mailings from us with information on our programs and services. If you do not want to receive postal mail or e-mail from us in the future, please let us know by sending email to us at: info@smilealways.org or writing to us at the above address and telling us that you do not want to receive postal mail or e-mail from us. Some mailings are prepared well in advance, so please allow up to three months for your request to be properly reflected on our mailing lists.</p>
              </div>
               <div>
                  <h3 className="text-xl font-semibold">Cookies</h3>
                  <p>Visitors should be aware that non-personal information and data may be automatically collected by Aadarana Trust Website through the use of cookies. Cookies are small text files a Website can use to recognize repeat visitors, facilitate the visitor's ongoing access to and use of the site, and allow a site to track usage behavior and compile aggregate data that will allow content improvements. Cookies are not programs that come onto a visitor's system and damage files. Generally, cookies work by assigning a unique number to the visitor that has no meaning outside the assigning site. If a visitor does not want information collected through the use of cookies, there is a simple procedure in most browsers that allows the visitor to deny or accept the cookie feature. Aadarana Trust uses cookie technology only to obtain non-personal information from its online visitors in order to improve visitors' online experience and facilitate their visit within our site.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">External Links</h3>
                  <p>This website may contain links to other sites. Unless we expressly state otherwise, Aadarana Trust makes no representations whatsoever concerning the content of those sites. The fact that Aadarana Trust has provided a link to a site is not an endorsement, authorization, sponsorship, or affiliation with respect to such site, its owners, or its providers. There are risks associated with using any information, software, or products found on the Internet, and Aadarana Trust cautions you to make sure that you understand these risks before retrieving, using, relying upon, or purchasing anything via the Internet. In addition, we encourage our users to be aware when they leave our site to read the privacy statements of each and every website that collects personally identifiable information. These other sites may collect or solicit personal data or send their own cookies to your computer. Please be aware that Aadarana Trust is not responsible for the privacy practices of other websites. Please check the privacy statements of these other sites for more information about their policies on collection and use of personal information.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Notification of Changes</h3>
                  <p>If we decide to change our privacy policy, we will post those changes to this privacy statement so our visitors are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We will use information in accordance with the privacy policy under which the information was collected. If, however, we are going to use visitors' personally identifiable information in a manner significantly different from that stated at the time of collection we will notify visitors via e-mail and won't disclose this information unless express information is granted. However, if visitors have opted out of all communication with the site, or deleted/deactivated their account, then they will not be contacted, nor will their personal information be used in this new manner.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Sharing</h3>
                  <p>Legal Disclaimer Though we make a good faith effort to preserve visitor privacy, we may need to disclose personal information when required by law wherein we have a good-faith belief that such action is necessary to comply with a current judicial proceeding, a court order or legal process served on our website.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Interactive Features</h3>
                  <p>From time to time our site requests information from visitors via interactive features, such as surveys or quizzes. Participation in these features is completely voluntary and the visitor therefore has a choice whether or not to disclose this information. The requested information typically includes contact information (such as name and e-mail), and information on the visitor's interests. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site and providing pertinent information to participants. Visitors' personally identifiable information is not shared with third parties.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold">Referrals</h3>
                  <p>If a visitor elects to use our referral service for informing a friend about our site, we ask them for the friend's name and e-mail address. Aadarana Trust will automatically send the friend a one-time e-mail with an introduction to Aadarana Trust and an invitation to visit the site. The one-time e-mail will include the name of the person making the referral. Aadarana Trust stores this information for the sole purpose of sending this one-time e-mail and tracking the success of our referral program. The friend may contact Aadarana Trust at unsubscribe (aadarana2013@gmail.com) to request the removal of this information from our database.</p>
              </div>
            </div>
        </section>

        {/* Section 4: Donation Refund Policy */}
        <section id="refund" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-[#00395c] mb-6 border-b-2 border-[#005FA1] pb-2">
            Donation Refund Policy
          </h2>
          <div className="space-y-6">
            <p>
              Aadarana Trust follows a reliable refund policy to let our donors feel privileged about their association with us. We take utmost care about processing donations as per the mandates signed by our donors in the donor forms, both offline and online. But in case of an unlikely event of an erroneous deduction or If the Donor wants to cancel/deduct the donation, refund will not be possible.
            </p>
            <div>
              <h3 className="text-xl font-semibold">What information we collect</h3>
              <p>
                We use personal information collected from donors for the purposes of processing payments and communicating with donors about Aadarana Trust as well as conducting the fundraising and other operations of Aadarana Trust. This information may include name, amount donated, address, telephone number, donor comments, e-mail address, and any other personal information provided to us (“Donor Data”). For donations by check, Donor Data also includes the data visible on the check.
              </p>
              <p className="mt-2">
                <strong>Information from Payment Processors and Other Service Providers:</strong> Payment processors allow donors to give electronically using a payment services account, a credit card, or other payment method. These processors collect certain information from donors, and you should consult their privacy policies to determine their practices. To provide donors the best possible experience, we work with service providers and may share Donor Data and other information with, or have it transmitted through, them. Such service providers include, for example, collocation facilities and bandwidth providers as well as organizations that help non-profit organizations with fundraising.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How we use that information</h3>
              <p>
                Donor Data may be used for these kinds of purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Distributing receipts and thanking donors for donations</li>
                  <li>Informing donors about upcoming fundraising and other activities of Aadarana Trust</li>
                  <li>Internal analysis, such as research and analytics</li>
                  <li>Record keeping</li>
                  <li>Reporting to applicable government agencies as required by law</li>
                  <li>Surveys, metrics, and other analytical purposes</li>
                  <li>Other purposes related to the fundraising operations</li>
              </ul>
              <p className="mt-2">
                  Anonymous donor information may be used for promotional and fundraising activities. Comments that are provided by donors may be publicly published and may be used in promotional materials. We may use available information to supplement the Donor Data to improve the information we use to drive our fundraising efforts. We may allow donors the option to have their name publicly associated with their donation unless otherwise requested as part of the online donation process.
              </p>
              <p className="mt-2">
                  We use data gathered for payment processors and other service providers only for the purposes described in this policy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Contact us</h3>
              <p>
                  If you have questions about this Donor Privacy Policy or requests about the status and correctness of your donor data, please contact us.
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold">Security</h3>
              <p>
                  We are committed to protecting donor personal information from unauthorised access, alteration, disclosure, or destruction. Among other things, we undertake a range of security practices, including measures to help secure web access to sensitive data and undertake efforts to address security vulnerabilities for various tools and databases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Other Disclosures</h3>
              <p>
                  We may disclose information when required by law; when needed to protect our rights, privacy, safety, property, donors, or users; and when necessary to enforce our terms of service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Updates</h3>
              <p>
                  We may change the Donor Privacy Policy from time to time. Any and all changes will be reflected on this page. Substantive changes may also be announced through the standard mechanisms by which we communicate with our users and community. You should periodically check this page for any changes to the current policy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Retention</h3>
              <p>
                  We seek to retain donor-related information only as needed to fulfil the purposes described in this policy unless a longer retention period is required by law or regulations. For example, tax laws in the India may require the Foundation to keep contact information and contribution level of donors on file.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Rights</h3>
              <p>
                  You have certain rights with respect to the information we collect about you. Upon request, we will tell you what information we hold about you and correct any incorrect information. We will also make reasonable efforts to delete your information if you ask us to do so, unless we are otherwise required to keep it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}