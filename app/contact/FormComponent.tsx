"use client";
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const FormComponent: React.FC<> = () => {
    const [state, handleSubmit] = useForm("xeqyokrk");
    if (state.succeeded) {
        return <p>Thanks for message!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-text">
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className='border border-gray-400 bg-primary/30 rounded-md p-2 mt-3 mb-6'
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="Message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                rows={6}
                className='border border-gray-400 bg-primary/30 rounded-md p-2 mt-3'
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <div className='self-end'>
                <button type="submit" disabled={state.submitting}
                    className='border hover:bg-accent/10 rounded-lg p-2 t w-36 self-center mt-6'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default FormComponent