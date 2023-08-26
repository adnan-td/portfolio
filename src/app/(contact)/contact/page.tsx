"use client";

import React, { useEffect, useRef, useState } from "react";
import "./contact.style.scss";
import axios from "axios";
import { createContactMessage } from "@/graphql/mutations";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-screen min-h-screen flex justify-center items-start py-32">
      <ContactForm />
    </div>
  );
}

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
  interestedIn: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState<{ [key: string]: string }>();
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formFields.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formFields.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formFields.email)) {
      errors.email = "That email address looks a bit weird";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const validateNonEmpty = () => {
    const errors: { [key: string]: string } = {};

    if (formFields.email.length > 0 && !isValidEmail(formFields.email)) {
      errors.email = "That email address looks a bit weird";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = (await axios.post("/api/aws", {
          query: createContactMessage,
          variables: {
            input: {
              name: formFields.name,
              email: formFields.email,
              message: formFields.message,
            },
          },
        })) as any;
        if (response?.data?.data != null) {
          setHasSubmitted(true);
          resetFormFields();
          window.scrollTo(0, 0);
        }
      } catch (error) {
        setHasSubmitted(false);
        alert("Error occurred: " + error);
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center">
      <div className="w-[45%] flex flex-col gap-16 md:w-[65%] sm:[70%]">
        <div className="mb-5">
          <p className="text-6xl font-medium md:text-3xl">
            {hasSubmitted ? "Message was sent successfully!" : "Want to have a chat?!"}
          </p>
          <p className="text-6xl font-medium md:text-3xl">
            {hasSubmitted ? "Send another!" : "Contact here!"}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-24 w-full"
        >
          <FormInput
            type="text"
            label="Your name"
            name="name"
            error={errors?.name}
            validate={validateNonEmpty}
            value={formFields.name}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            label="Your email"
            name="email"
            error={errors?.email}
            validate={validateNonEmpty}
            value={formFields.email}
            onChange={handleChange}
          />
          <FormTextArea
            label="Message"
            name="message"
            value={formFields.message}
            onChange={handleChange}
          />
          <div className="w-full mb-28">
            <ContactBtn onClick={handleSubmit} text="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({
  type,
  label,
  value,
  name,
  error,
  validate,
  onChange,
}: {
  type: React.HTMLInputTypeAttribute;
  name: string;
  label: string;
  value: any;
  error: string;
  validate: any;
  onChange: React.ChangeEventHandler;
}) => {
  return (
    <div className="flex flex-col relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="floating_input w-full py-2 bg-transparent text-2xl"
        placeholder=" "
        onBlur={() => {
          validate();
        }}
      />
      <label className="floating_label absolute text-2xl">{label}</label>
      {error?.length !== 0 ? <p className="error_text absolute">{error}</p> : null}
    </div>
  );
};

const FormTextArea = ({
  label,
  value,
  name,
  onChange,
}: {
  name: string;
  label: string;
  value: any;
  onChange: React.ChangeEventHandler;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="flex flex-col relative w-full">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        name={name}
        className="floating_input w-full py-2 bg-transparent text-2xl resize-none"
        placeholder=" "
        rows={1}
        style={{ minHeight: "49px" }}
      />
      <label className="floating_label2 absolute text-2xl">{label}</label>
    </div>
  );
};

function ContactBtn({ onClick, text }: { onClick: React.MouseEventHandler; text: string }) {
  return (
    <button className="home-btn home-btn_more z-[1]" onClick={onClick}>
      <span className="home-btn_more-title">
        <span data-text={text}>{text}</span>
      </span>
      <span className="home-btn_more-ripple">
        <span></span>
      </span>
    </button>
  );
}

// const mutationMessage = gql`
//   mutation ($input: [ContactMessagesCreateInput!]!) {
//     createContactMessages(input: $input) {
//       contactMessages {
//         name
//         email
//         message
//       }
//     }
//   }
// `;

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
