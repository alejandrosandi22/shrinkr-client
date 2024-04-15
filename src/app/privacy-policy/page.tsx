import Footer from '@/components/home/footer/footer';
import { CLIENT_APP_URL } from '@/lib/constants';

export default function PrivacyPolicy() {
  return (
    <div>
      <div className='mx-auto w-full max-w-7xl px-4 py-24 lg:px-8'>
        <h1 className='mb-8 text-2xl font-semibold leading-none tracking-tight'>
          Privacy Policy
        </h1>
        <div>
          <p className='mb-4'>
            Your privacy is important to us. It is Shrinkr’s policy to respect
            your privacy regarding any information we may collect from you
            across our website, {CLIENT_APP_URL}, and other sites we own and
            operate.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>
            1. Information We Collect
          </h2>
          <h3 className='text-md mb-2 font-semibold'>Log Data</h3>
          <p className='mb-4'>
            When you visit our website, our servers may automatically log the
            standard data provided by your web browser. This data is considered
            “non-identifying information”, as it does not personally identify
            you on its own. It may include your computer’s Internet Protocol
            (IP) address, your browser type and version, the pages you visit,
            the time and date of your visit, the time spent on each page, and
            other details.
          </p>
          <h3 className='text-md mb-2 font-semibold'>Personal Information</h3>
          <p className='mb-4'>
            We may ask for personal information, such as your name, email
            address, and other contact details. This data is considered
            “identifying information”, as it can personally identify you. We
            only request personal information relevant to providing you with a
            service, and only use it to help provide or improve this service.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>
            2. How We Use Your Information
          </h2>
          <p className='mb-4'>
            We use the information we collect in various ways, including to:
          </p>
          <ul className='mb-4 list-disc pl-4'>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
          <h2 className='mb-4 text-lg font-semibold'>
            3. How We Share Your Information
          </h2>
          <p className='mb-4'>
            We may process or share data based on the following legal bases:
          </p>
          <ul className='mb-4 list-disc pl-4'>
            <li>
              Consent: We may process your data if you have given us specific
              consent to use your personal information for a specific purpose.
            </li>
            <li>
              Legitimate Interests: We may process your data when it is
              reasonably necessary to achieve our legitimate business interests.
            </li>
            <li>
              Performance of a Contract: Where we have entered into a contract
              with you, we may process your personal information to fulfill the
              terms of our contract.
            </li>
            <li>
              Legal Obligations: We may disclose your information where we are
              legally required to do so in order to comply with applicable law,
              governmental requests, a judicial proceeding, court order, or
              legal process, such as in response to a court order or a subpoena
              (including in response to public authorities to meet national
              security or law enforcement requirements).
            </li>
            <li>
              Vital Interests: We may disclose your information where we believe
              it is necessary to investigate, prevent, or take action regarding
              potential violations of our policies, suspected fraud, situations
              involving potential threats to the safety of any person and
              illegal activities, or as evidence in litigation in which we are
              involved.
            </li>
          </ul>
          <h2 className='mb-4 text-lg font-semibold'>4. Security</h2>
          <p className='mb-4'>
            We take reasonable precautions to protect your information. When you
            submit sensitive information via the website, your information is
            protected both online and offline.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>
            5. Links to Other Sites
          </h2>
          <p className='mb-4'>
            Our website may contain links to other sites that are not operated
            by us. If you click a third-party link, you will be directed to that
            third party’s site. We strongly advise you to review the Privacy
            Policy of every site you visit.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>6. Children’s Privacy</h2>
          <p className='mb-4'>
            Our Services do not address anyone under the age of 13. We do not
            knowingly collect personal identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to take necessary actions.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>
            7. Changes to This Privacy Policy
          </h2>
          <p className='mb-4'>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className='mb-4'>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2 className='mb-4 text-lg font-semibold'>8. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at{' '}
            <a href='mailto:support@shrinkr.com' className='text-blue-500'>
              support@shrinkr.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
