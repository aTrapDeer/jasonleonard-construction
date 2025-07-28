export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-sm text-slate-500 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Jason Leonard
                Taylor Construction ("JLTC," "we," "us," or "our") regarding your use of our website, services, and any
                related applications or platforms (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Description of Services</h2>
              <p>JLTC provides construction services including but not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Residential construction and renovation</li>
                <li>Commercial construction and development</li>
                <li>Design-build services</li>
                <li>Project management and consultation</li>
                <li>General contracting services</li>
                <li>Construction-related consulting and advisory services</li>
              </ul>
              <p>
                Our website provides information about our services, allows you to request quotes, and facilitates
                communication between you and our team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">User Responsibilities</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Accurate Information</h3>
              <p>You agree to provide accurate, current, and complete information when:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Requesting quotes or consultations</li>
                <li>Filling out contact forms</li>
                <li>Communicating with our team</li>
                <li>Entering into contracts for services</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Prohibited Uses</h3>
              <p>You agree not to use our Services to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our Services</li>
                <li>Use our Services for any fraudulent or deceptive purposes</li>
                <li>Collect or harvest information about other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Quotes and Estimates</h2>
              <p>Quotes and estimates provided through our Services are preliminary and subject to change based on:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Site inspection and detailed project assessment</li>
                <li>Changes in project scope or specifications</li>
                <li>Material cost fluctuations</li>
                <li>Permit requirements and regulatory changes</li>
                <li>Unforeseen site conditions</li>
                <li>Timeline modifications</li>
              </ul>
              <p>
                All quotes are valid for 30 days unless otherwise specified. Final pricing will be established in a
                formal contract after detailed project assessment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contracts and Project Terms</h2>
              <p>Construction services are provided under separate written contracts that will include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Detailed project specifications and scope of work</li>
                <li>Timeline and milestone schedules</li>
                <li>Payment terms and schedule</li>
                <li>Change order procedures</li>
                <li>Warranty and guarantee provisions</li>
                <li>Insurance and liability terms</li>
              </ul>
              <p>
                These Terms of Service do not constitute a contract for construction services. All construction work is
                subject to separate contractual agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-slate-900 mb-4">Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of
                JLTC or our licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Reverse engineer any software or systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent
                to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Disclaimers and Limitations</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Availability</h3>
              <p>
                We strive to maintain continuous availability of our Services, but we do not guarantee uninterrupted
                access. Our Services may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Information Accuracy</h3>
              <p>
                While we make every effort to ensure the accuracy of information on our website, we do not warrant that
                all information is complete, current, or error-free. Project timelines, pricing, and specifications are
                subject to change.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Third-Party Content</h3>
              <p>
                Our website may contain links to third-party websites or reference third-party products or services. We
                are not responsible for the content, accuracy, or availability of external sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, JLTC shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of profits, data, or business
                opportunities, arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of or inability to use our Services</li>
                <li>Any errors or omissions in our content</li>
                <li>Any interruption or cessation of our Services</li>
                <li>Any defects, viruses, or harmful components</li>
                <li>Any loss or damage to your data or systems</li>
              </ul>
              <p>
                Our total liability for any claims arising from these Terms or your use of our Services shall not exceed
                the amount you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless JLTC, its officers, directors, employees, and agents
                from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your infringement of any third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our Services at any time, with or without
                notice, for any reason, including violation of these Terms.
              </p>
              <p>
                Upon termination, your right to use our Services will cease immediately, but the provisions of these
                Terms that by their nature should survive termination will remain in effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of British Columbia, Canada,
                without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms or your use of our Services will be resolved through binding
                arbitration in accordance with the rules of the British Columbia International Commercial Arbitration
                Centre, except that either party may seek injunctive relief in court for intellectual property
                violations or breaches of confidentiality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our
                Services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will
                continue in full force and effect. The unenforceable provision will be replaced with an enforceable
                provision that most closely reflects the original intent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any separate construction contracts, constitute the
                entire agreement between you and JLTC regarding your use of our Services and supersede all prior
                agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-slate-50 p-6 rounded-lg mt-4">
                <p>
                  <strong>Jason Leonard Taylor Construction</strong>
                </p>
                <p>
                  123 Construction Way
                  <br />
                  Builder City, BC 12345
                </p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: legal@jltconstruction.com</p>
              </div>
            </section>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-orange-800">
                <strong>Important:</strong> These Terms of Service apply to website usage and general inquiries. All
                construction services are subject to separate written contracts with specific terms, conditions, and
                warranties. Please consult with our team for project-specific agreements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
