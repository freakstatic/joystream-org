import React from 'react';

import Link from '../../components/Link';

const privacyPolicyItems = [
  {
    title: '1. Agreement to the Policy',
    content: (
      <>
        By using any of Our Software, the User are accepting this Privacy Policy. If you are acting on behalf of another
        company or an employer, you must have the rights to act on their behalf. The Privacy Policy is not extended to
        any of our newsletters, where Users are bound by the{' '}
        <Link href="https://mailchimp.com/legal/privacy/">privacy policy</Link> of{' '}
        <Link href="https://mailchimp.com/">Mailchimp</Link>
        <br />‍<br />
        The Privacy Policy does not apply to any other third party services including, but not limited to, applications,
        websites, tools or software, even if accessible through links or guides in our Software.
      </>
    ),
  },
  {
    title: '2. Changes to Policy',
    content: `This Privacy Policy may be changed at the sole discretion of Company. If any material changes are made,
      the User will be notified in the Service that is used. Note that adding new products to be included in the term
      Software, e.g. a new User facing product replacing the App or a new tool for uploading Content, is not considered
      material as it will not affect Users unless they adopt the new product. Changing software names,
      terminology used in this Privacy Policy, and changing link locations are also examples of non-material changes.`,
  },
  {
    title: '3. Information Collected',
    content: (
      <>
        All data written to the Blockchain, is implicitly collected not only by Company, but also anyone else in the
        world that is running the Full Node locally, or accessed via the App or a third party. This includes, but is not
        limited to, Content hashes, Membership profile, Memo field, and any other way a User can record data on the
        Blockchain. ‍<br />
        <br />
        When using the <Link href="https://testnet.joystream.org/faucet">faucet</Link> subpage of the Website, Company
        will record the IP address behind every new request for tokens. This data will be deleted every 14 days.
      </>
    ),
  },
  {
    title: '',
    content: (
      <>
        Company uses <Link href="https://marketingplatform.google.com/about/analytics/">Google Analytics</Link>, with IP
        anonymization, to collect statistics on Website and the version of App hosted by us. All customisable data
        sharing settings are turned off to improve the privacy of Users. ‍<br />‍<br />
        <strong>Company will not sell your data for advertising, or other purposes.</strong>
      </>
    ),
  },
];

const cookiePolicyItems = [
  {
    title: '1. What are Cookies?',
    content: (
      <>
        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
        your web browser and allows the Service or a third-party to recognise you and make your next visit easier and
        the Service more useful to you. ‍<br />‍<br />
        Cookies can be persistent or session cookies.
      </>
    ),
  },
  {
    title: '2. How we use Cookies',
    content: (
      <>
        We use cookies for the following purposes our Service:
        <br />
        <br />
        <ul>
          <li>Provide Analytics</li>
          <li>Store preferences</li>
          <li>Persistant local storage of Keys and Membership.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Third-party Cookies',
    content: (
      <>
        In addition to our own cookies, we also use various third-party cookies to report usage statistics of the
        Service, deliver advertisements on and through the Service, and so on. They include:
        <br />
        <br />
        <ul>
          <li>
            <strong>Google Analytics</strong>
          </li>
          <li>
            <strong>Mailchimp</strong> (Only when signing up for any of our newsletters)
          </li>
          <li>
            <strong>Godaddy</strong>
          </li>
        </ul>
        <br />
        Please see Item 3. of the Privacy Policy for more information on the extent of these providers.
      </>
    ),
  },
  {
    title: 'Your Regarding Cookies',
    content: (
      <>
        If you would like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the
        help pages of your web browser.
        <br />‍<br />
        Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of
        the features we offer, you may not be able to store your preferences, and some of our pages might not display
        properly.
      </>
    ),
  },
];

export { privacyPolicyItems, cookiePolicyItems };
