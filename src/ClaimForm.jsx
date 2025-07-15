import React from 'react';

const INPUT_FIELDS = [
  { name: 'firstName', placeholder: 'First Name *' },
  { name: 'lastName', placeholder: 'Last Name *' },
  { name: 'phone', placeholder: 'Phone Number *' },
  { name: 'email', placeholder: 'Email ID *' },
  { name: 'dob', placeholder: 'Date of birth *' },
  { name: 'jobTitle', placeholder: 'Job Title*' },
  { name: 'diagnosisDate', placeholder: 'Date of Diagnosis*' },
];

const DIAGNOSIS_OPTIONS = [
  { value: 'mesothelioma', label: 'Mesothelioma' },
  { value: 'lung_cancer', label: 'Lung Cancer' },
  { value: 'asbestosis', label: 'Asbestosis' },
  { value: 'pleural_thickening', label: 'Pleural Thickening' },
  { value: 'other', label: 'Other' },
];

const ClaimForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className='bg-[#2E4A7DAB] backdrop-blur-md rounded-2xl p-6 max-w-xl mx-auto text-white shadow-lg text-xs'>
      <h2 className='text-2xl font-semibold mb-6'>Claim Form</h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        {[0, 2, 4, 6].map((startIdx) => (
          <div
            key={startIdx}
            className='flex flex-col md:flex-row gap-4'
          >
            {INPUT_FIELDS.slice(startIdx, startIdx + 2).map((field) => (
              <input
                key={field.name}
                name={field.name}
                className='flex-1 input-style'
                placeholder={field.placeholder}
                required
              />
            ))}
          </div>
        ))}

        <div className='flex flex-col md:flex-row gap-4'>
          <select
            className='flex-1 input-style appearance-none'
            required
            defaultValue=''
          >
            <option
              value=''
              disabled
            >
              Type of Diagnosis*
            </option>
            {DIAGNOSIS_OPTIONS.map(({ value, label }) => (
              <option
                key={value}
                value={value}
              >
                {label}
              </option>
            ))}
          </select>
        </div>

        <textarea
          className='input-style resize-none h-[42px] py-3'
          placeholder='Tell us your story (optional)'
        />

        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            required
            className='mt-1.5 min-w-[16px] h-[16px]'
          />
          <span className='text-xs leading-relaxed'>
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
            options. I understand that I may be contacted using automatic
            dialing equipment. Message and data rates may apply. My consent does
            not require purchase. This is Legal advertising.
          </span>
        </div>

        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            required
            className='mt-1.5 min-w-[16px] h-[16px]'
          />
          <span className='text-xs leading-relaxed'>
            Please check this box to verify you're a person.
          </span>
        </div>

        <button
          type='submit'
          className='w-full bg-yellow-100 text-blue-900 font-semibold py-2 rounded-lg mt-2 hover:bg-yellow-200 transition'
        >
          Start your claim now
        </button>
      </form>
    </section>
  );
};

export default ClaimForm;
