import React from "react";

const ClaimForm = () => (
  <section className="bg-blue-900/70 rounded-2xl p-6 max-w-xl mx-auto text-white shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Claim Form</h2>
    <form className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 ">
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="First Name *" required />
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Last Name *" required />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Phone Number *" required />
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Email ID *" required />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Date of birth *" required />
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Job Title*" required />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Date of Diagnosis*" required />
        <input className="flex-1 p-2 rounded bg-white/80 text-gray-900 w-full" placeholder="Type of Diagnosis*" required />
      </div>
      <textarea className="w-full p-2 rounded bg-white/80 text-gray-900" placeholder="Tell us your story (optional)" rows={3}></textarea>
      <div className="flex items-start gap-2">
        <input type="checkbox" required className="mt-1" />
        <span className="text-xs">I agree to the <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">disclaimer</a> ...</span>
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" required className="mt-1" />
        <span className="text-xs">Please check this box to verify you’re a person.</span>
      </div>
      <button className="w-full bg-yellow-100 text-blue-900 font-semibold py-2 rounded-lg mt-2 hover:bg-yellow-200 transition">Start your claim now</button>
    </form>
  </section>
);

export default ClaimForm;