import React from 'react';
import { BsCalendarEvent } from 'react-icons/bs';

const INPUT_FIELDS = [
  { name: 'firstName', placeholder: 'First Name *', type: 'text' },
  { name: 'lastName', placeholder: 'Last Name *', type: 'text' },
  { name: 'phone', placeholder: 'Phone Number *', type: 'tel' },
  { name: 'email', placeholder: 'Email ID *', type: 'email' },
  { name: 'dob', placeholder: 'Date of birth *', type: 'date' },
  { name: 'jobTitle', placeholder: 'Job Title*', type: 'text' },
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
  };

  return (
    <section className='bg-[#2E4A7DAB] backdrop-blur-md rounded-2xl p-6 max-w-xl mx-auto text-white shadow-lg text-xs transition-layout'>
      <h2 className='text-2xl font-semibold mb-2 transition-input'>
        Claim Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-3 transition-form'
      >
        {[0, 2, 4].map((startIdx) => (
          <div
            key={startIdx}
            className='flex flex-col md:flex-row gap-4 transition-layout'
          >
            {INPUT_FIELDS.slice(startIdx, startIdx + 2).map((field) => (
              <div
                key={field.name}
                className='flex-1 relative transition-form'
              >
                <input
                  name={field.name}
                  type={field.type}
                  className={`input-style w-full transition-input ${
                    field.name === 'dob' ? 'pr-10' : ''
                  }`}
                  placeholder={field.placeholder}
                  required
                  onFocus={(e) => {
                    if (field.type === 'date') {
                      e.target.showPicker();
                    }
                  }}
                />
                {field.name === 'dob' && (
                  <BsCalendarEvent className='absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none transition-layout' />
                )}
              </div>
            ))}
          </div>
        ))}

        <div className='flex flex-col md:flex-row gap-4 transition-layout'>
          <div className='flex-1 relative transition-form'>
            <input
              name='diagnosisDate'
              type='date'
              className='input-style w-full pr-10 transition-input'
              placeholder='Date of Diagnosis*'
              required
              onFocus={(e) => e.target.showPicker()}
            />
            <BsCalendarEvent className='absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none transition-layout' />
          </div>
          <select
            className='flex-1 input-style appearance-none transition-input'
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
          className='input-style resize-none h-[42px] py-3 transition-input'
          placeholder='Tell us your story (optional)'
        />

        {/* Checkboxes with transitions */}
        <div className='flex items-start gap-3 transition-layout'>
          <input
            type='checkbox'
            required
            className='mt-1.5 min-w-[16px] h-[16px] transition-input'
          />
          <span className='text-xs leading-relaxed transition-input'>
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

        <button
          type='submit'
          className='w-full bg-yellow-100 text-blue-900 font-semibold py-2 rounded-lg mt-2 hover:bg-yellow-200 transition-all'
        >
          Start your claim now
        </button>
      </form>
    </section>
  );
};

export default ClaimForm;
