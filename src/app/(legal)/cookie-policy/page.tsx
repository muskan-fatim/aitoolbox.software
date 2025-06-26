import React from 'react'

export const metadata = {
  title: 'Cookie Policy | AIToolbox',
  description: 'Cookie Policy for AIToolbox - An open-source collection of AI tools',
}

const CookiePolicyPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. Cookies are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
        <p>
          AIToolbox uses a minimal amount of cookies to ensure the best user experience. We use cookies primarily for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Essential website functionality (such as remembering your settings)</li>
          <li>Anonymous analytics to help us understand how visitors use our website</li>
          <li>Improving the speed and security of the service</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
        <p>
          We use anonymous analytics cookies to help us understand how visitors interact with our website by collecting and reporting information anonymously.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
        <p>
          In some special cases, we also use cookies provided by trusted third parties. For example:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>This site may use Google Analytics to help us understand how users engage with the site</li>
          <li>We may use cookies related to Pollinations.AI&apos;s services to improve AI functionality</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience and prevent certain functionalities from working correctly.
        </p>
        <p>
          To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us:
        </p>
        <p>
          <a href="mailto:contact@aitoolbox.software" className="text-blue-600 hover:underline">contact@aitoolbox.software</a>
        </p>
      </div>
    </div>
  )
}

export default CookiePolicyPage 