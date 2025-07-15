import React from 'react';

const ClaimForm = () => (
  <section className='bg-[#2E4A7DAB] backdrop-blur-md rounded-2xl p-6 max-w-xl mx-auto text-white shadow-lg text-xs'>
    <h2 className='text-2xl font-semibold mb-6'>Claim Form</h2>
    <form className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-4 '>
        <input
          className='flex-1 input-style'
          placeholder='First Name *'
          required
        />
        <input
          className='flex-1 input-style'
          placeholder='Last Name *'
          required
        />
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <input
          className='flex-1 input-style'
          placeholder='Phone Number *'
          required
        />
        <input
          className='flex-1 input-style'
          placeholder='Email ID *'
          required
        />
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <input
          className='flex-1 input-style'
          placeholder='Date of birth *'
          required
        />
        <input
          className='flex-1 input-style'
          placeholder='Job Title*'
          required
        />
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <input
          className='flex-1 input-style'
          placeholder='Date of Diagnosis*'
          required
        />
        <select
          className='flex-1 input-style appearance-none text-black bg-transparent'
          required
          defaultValue=''
        >
          <option
            value=''
            disabled
          >
            Type of Diagnosis*
          </option>
          <option value='mesothelioma'>Mesothelioma</option>
          <option value='lung_cancer'>Lung Cancer</option>
          <option value='asbestosis'>Asbestosis</option>
          <option value='pleural_thickening'>Pleural Thickening</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <textarea
        className='input-style resize-none'
        placeholder='Tell us your story (optional)'
      ></textarea>
      <div className='flex items-start gap-2'>
        <input
          type='checkbox'
          required
          className='mt-1'
        />
        <span className='text-xs'>
          I agree to the{' '}
          <a
            href='#'
            className='underline'
          >
            privacy policy
          </a>{' '}
          and{' '}
          <a
            href='#'
            className='underline'
          >
            disclaimer
          </a>{' '}
          give my express written consent to be contacted regarding my case
          options. I understand that I may be contacted using automatic dialing
          equipment. Message and data rates may apply. My consent does not
          require purchase. This is Legal advertising.
        </span>
      </div>
      <div className='flex items-start gap-2'>
        <input
          type='checkbox'
          required
          className='mt-1 bg-transparent border-none '
        />
        <span className='text-xs'>
          Please check this box to verify you’re a person.
        </span>
      </div>
      <button className='w-full bg-yellow-100 text-blue-900 font-semibold py-2 rounded-lg mt-2 hover:bg-yellow-200 transition'>
        Start your claim now
      </button>
    </form>
  </section>
);

export default ClaimForm;
