"use client";
import { contactValidationSchema, initialContact } from '@/validation/Index';
import { useFormik } from 'formik';
import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import { BeatLoader } from 'react-spinners';
import { toFormikValidationSchema } from 'zod-formik-adapter';
const ContactSale = () => {
    const [loading, setLoading] = useState(false);
    const options = useMemo(() => countryList().getData(), [])

    const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm, setFieldValue } = useFormik({
        initialValues: initialContact,
        validationSchema: toFormikValidationSchema(contactValidationSchema),
        onSubmit: async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/contactUs', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                console.log("🚀 ~ ContactSale ~ response:", response)
                if (!response.ok) {
                    console.error('Error adding email to Google Sheets');
                }
                resetForm();
                setFieldValue('country', null); // Clear the country field
                setLoading(false);
            }
            catch (error) {
                console.error("Error during login:", error);
                setLoading(false);
            }
        }
    })

    console.log("🚀 ~ ContactSale ~ values:", values)
    return (
        <div className="p-6 sm:w-3/5 ">

            <h1 className="text-3xl mb-8 text-center">Contact Us</h1>
            <p className="mb-16 text-center text-unbold">If you experience any technical challenges or require assistance following your purchase, feel free to connect with our technical support.</p>
            <form onSubmit={handleSubmit}>

                <div className='sm:flex justify-between gap-14'>
                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> First Name</label>
                        <input type="text" id="first-name" name="first-name"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['first-name'] && touched['first-name'] && typeof errors['first-name'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['first-name']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Last Name</label>
                        <input type="text" id="last-name" name="last-name"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['last-name'] && touched['last-name'] && typeof errors['last-name'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['last-name']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                </div>
                <div className='sm:flex justify-between gap-14'>


                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="company" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Company</label>
                        <input type="text" id="company" name="company"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors.company && touched.company && typeof errors.company === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['company']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /></div>

                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Email</label>
                        <input type="email" id="email" name="email"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors.email && touched.email && typeof errors.email === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['email']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                </div>

                <div className='sm:flex justify-between gap-10'>


                    <div className="mb-4 sm:w-1/3">
                        <label htmlFor="mobile-phone" className="block text-sm font-medium text-[#848484]">Mobile Phone</label>
                        <input type="tel" id="mobile-phone" name="mobile-phone"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['mobile-phone'] && touched['mobile-phone'] && typeof errors['mobile-phone'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['mobile-phone']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />                        </div>

                    <div className="mb-4 sm:w-1/3">
                        <label htmlFor="country" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Country / Region</label>
                        <Select id="country" name="country" options={options}
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['country'] && touched['country'] && typeof errors['country'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10  focus:text-[#b8babc]`}
                            value={options.find(option => option.label === values.country) || null} // Display the correct option based on the label
                            onChange={(option) => setFieldValue('country', option ? option.label : '')} // Store only the label
                            onBlur={handleBlur}
                        >
                            {/* <option value="" disabled selected>Select an option</option>
                         <option value="India">India</option> */}
                        </Select>
                    </div>

                    <div className="mb-4 sm:w-1/3">
                        <label htmlFor="city" className="block text-sm font-medium text-[#848484]"> City</label>
                        <input type="text" id="city" name="city"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['city'] && touched['city'] && typeof errors['city'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['city']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />                        </div>

                </div>

                <div className="mb-10">
                    <p className="block text-xl font-unbold text-[#848484] my-6">
                        <span className='text-[#fa8481]'>*</span> Product Category
                    </p>
                    <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {['Interactive Flat Panel', 'Commercial Display', 'Unified Communication', 'LED Display', 'Accessories', 'Software', 'MTR Solutions', 'Others'].map((category) => (
                            <label
                                key={category}
                                className={`flex items-center ${errors['product-category'] && touched['product-category'] && typeof errors['product-category'] === "string" ? "text-red-500" : "text-[#848484]"}`}
                            >
                                <input
                                    type="checkbox"
                                    value={category}
                                    className="mr-2 border-gray-300 rounded"
                                    checked={(values['product-category']as string[])?.includes(category)}
                                    onChange={() => {
                                        if ((values['product-category']as string[])?.includes(category)) {
                                            setFieldValue(
                                                'product-category',
                                                values['product-category'].filter((item) => item !== category)
                                            );
                                        } else {
                                            setFieldValue(
                                                'product-category',
                                                [...(values['product-category'] || []), category]
                                            );
                                        }
                                    }}
                                    onBlur={handleBlur}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>



                <div className='sm:flex justify-between gap-14'>

                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="industry" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Industry </label>
                        <select
                            id="industry"
                            name="industry"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['industry'] && touched['industry'] && typeof errors['industry'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['industry']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="" disabled selected>Select an option</option>
                            <option value="education">Education</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="mb-4 sm:w-1/2">
                        <label htmlFor="account-category" className="block text-sm font-medium text-[#848484]"><span className='text-[#fa8481]'>*</span> Account Category</label>
                        <select id="account-category" name="account-category"
                            className={`mt-1 block w-full rounded-md shadow-sm border ${errors['account-category'] && touched['account-category'] && typeof errors['account-category'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}
                            value={values['account-category']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="" >Select an option</option>
                            <option value="distributor">Distributor</option>
                            <option value="reseller">Reseller</option>
                            <option value="enduser">End User</option>
                        </select>
                    </div>
                </div>
                <div className="my-8">
                    <label htmlFor="message" className="block text-xl font-unbold text-[#848484]">Message</label>
                    <textarea id="message" name="message"
                        className={`mt-1 resize-none h-36 block w-full rounded-md shadow-sm border ${errors['message'] && touched['message'] && typeof errors['message'] === "string" ? "border-red-500" : "border-[#b8babc]"}   bg-[#fdfdfd] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-[15px] pt-[5px] focus:text-[#b8babc]`}

                        //    className="mt-1 resize-none h-36 block w-full border border-[#b8babc] bg-[#fdfdfd] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-[15px] pt-[5px] focus:text-[#b8babc]"
                        value={values['message']}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                </div>


                <p className="text-xl font-unbold text-[#848484] my-8"><span className='text-[#fa8481]'>*</span> Subscription</p>
                <div className="mb-4 sm:flex sm:flex-row flex flex-col gap-2">
                    <div className="flex items-start sm:w-1/2">
                        <input
                            type="radio"
                            id="subscription-yes"
                            name="subscription"
                            value="yes"
                            className="mr-2 mt-1"
                            checked={values['subscription'] === "yes"}
                            onChange={handleChange}
                        />
                        <label htmlFor="subscription-yes" className={`text-sm ${errors['subscription'] && touched['subscription'] && typeof errors['subscription'] === "string" ? "text-red-500" : "text-[#848484]"}`}>
                            Yes, I would like to subscribe to the Ilead newsletter. (You are able to unsubscribe at any time)
                        </label>
                    </div>
                    <div className="flex items-start w-1/2">
                        <input
                            type="radio"
                            id="subscription-no"
                            name="subscription"
                            value="no"
                            className="mr-2 mt-1"
                            checked={values['subscription'] === "no"}
                            onChange={handleChange}
                        />
                        <label htmlFor="subscription-no" className={`text-sm ${errors['subscription'] && touched['subscription'] && typeof errors['subscription'] === "string" ? "text-red-500" : " text-[#848484]"}`}>
                            No, Thanks
                        </label>
                    </div>
                </div>


                <div className="my-8 flex justify-center">
                    <label htmlFor="privacy-policy" className={`flex items-center text-sm ${errors['privacy-policy'] && touched['privacy-policy'] && typeof errors['privacy-policy'] === "string" ? "text-red-500" : "text-[#848484]"}`}>
                        <input type="checkbox" id="privacy-policy" name="privacy-policy"
                            className="mr-2 leading-tight "
                            checked={values['privacy-policy']}
                            onChange={handleChange} />
                        I agree with ILEAD  Privacy Policy
                    </label>
                </div>

                <button type="submit" className="flex py-2 px-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-auto">
                    {loading ? <BeatLoader color="white" size={10} /> : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ContactSale;
