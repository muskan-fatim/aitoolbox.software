import React from 'react'

export const metadata = {
  title: 'Privacy Policy | AIToolbox',
  description: 'Privacy policy for AIToolbox - An open-source collection of AI tools',
}

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          AIToolbox (&apos;we&apos;, &apos;our&apos;, or &apos;us&apos;) is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Open Source Commitment</h2>
        <p>
          AIToolbox is an open-source project. Our source code is publicly available, which means anyone can inspect, modify, and enhance it. This transparency extends to how we handle your data.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection</h2>
        <p>
          <strong>We do not store your personal data.</strong> Our service is designed to process information locally in your browser whenever possible.
        </p>
        <p>
          When you use our tools that require AI capabilities, we utilize Pollinations.AI&apos;s API services to process your requests. The data you input (such as text for summarization, code for explanation, or prompts for image generation) is sent to Pollinations.AI&apos;s servers for processing, but we do not store this information on our servers.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          Our service relies on Pollinations.AI for API calls to provide AI functionality. When you use our tools, your requests are forwarded to Pollinations.AI for processing. Please refer to <a href="https://pollinations.ai/privacy" className="text-blue-600 hover:underline">Pollinations.AI&apos;s Privacy Policy</a> to understand how they handle your data.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Analytics and Cookies</h2>
        <p>
          We may use basic analytics tools to understand user behavior in aggregate. These tools collect anonymous information about how users interact with our site. This helps us improve our service but does not identify you personally.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p>
          Since we do not collect or store your personal data, there is no personal information for us to provide, correct, or delete. However, you always have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use our tools without creating an account</li>
          <li>Clear your browser&apos;s local storage and cookies</li>
          <li>Contact us with privacy concerns</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          <a href="mailto:contact@aitoolbox.software" className="text-blue-600 hover:underline">contact@aitoolbox.software</a>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage 