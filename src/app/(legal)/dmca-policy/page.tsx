import React from 'react'

export const metadata = {
  title: 'DMCA Policy | AIToolbox',
  description: 'Digital Millennium Copyright Act (DMCA) Policy for AIToolbox',
}

const DMCAPolicyPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Digital Millennium Copyright Act (DMCA) Notice & Policy</h2>
        <p>
          AIToolbox respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&quot;DMCA&quot;), we will respond expeditiously to claims of copyright infringement committed using our service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Notification of Copyright Infringement</h2>
        <p>
          If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our service, please notify our designated copyright agent with the following information:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed.</li>
          <li>Identification of the copyrighted works claimed to have been infringed.</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material.</li>
          <li>Information reasonably sufficient to permit us to contact the complaining party, such as an address, telephone number, and, if available, an email address.</li>
          <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of the copyright that is allegedly infringed.</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">AI-Generated Content</h2>
        <p>
          AIToolbox provides AI tools that can generate various types of content including text, code, and images. Please note:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>AI-generated content may sometimes inadvertently resemble existing copyrighted material</li>
          <li>We do not claim ownership of AI-generated content created through our service</li>
          <li>Users are responsible for ensuring their use of AI-generated content complies with applicable copyright laws</li>
          <li>We will respond to valid DMCA notices related to AI-generated content that infringes on copyright</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Counter-Notification Procedures</h2>
        <p>
          If you believe your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner&apos;s agent, or pursuant to the law, to post and use the material, you may send a counter-notification containing the following information:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Your physical or electronic signature.</li>
          <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled.</li>
          <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
          <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided notification of the alleged infringement.</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Designated Copyright Agent</h2>
        <p>
          Our designated copyright agent to receive notifications and counter-notifications of claimed infringement can be reached at:
        </p>
        <p>
          <a href="mailto:dmca@aitoolbox.software" className="text-blue-600 hover:underline">dmca@aitoolbox.software</a>
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Repeat Infringers</h2>
        <p>
          It is our policy to terminate the user accounts of repeat infringers. A repeat infringer is a user who has been notified of infringing activity more than twice and/or has had their content removed from our service more than twice.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We reserve the right to update or modify this DMCA Policy at any time without prior notice. Your continued use of our service following any changes indicates your acceptance of the revised policy.
        </p>
      </div>
    </div>
  )
}

export default DMCAPolicyPage 