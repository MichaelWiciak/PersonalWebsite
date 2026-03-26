import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SocialIcons from "../SocialIcons/SocialIcons";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify you are not a robot!");
      return;
    }

    if (
      form.current &&
      EMAILJS_SERVICE_ID &&
      EMAILJS_TEMPLATE_ID &&
      EMAILJS_PUBLIC_KEY
    ) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            form.current?.reset();
            setCaptchaVerified(false);
            alert("Message sent! I'll get back to you shortly.");
          },
          () => {
            alert("Failed to send message. Please try again.");
          },
        )
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <section
      id="contactPage"
      className="min-h-[calc(100vh-5rem)] w-full max-w-[60rem] mx-auto text-center flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Me</h1>
      <p className="text-base md:text-lg font-light mb-4 px-4">
        Please fill the form below to contact me
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="m-4 flex flex-col items-center justify-center w-[90vw] max-w-[60rem]"
      >
        <input
          type="text"
          placeholder="Your Name..."
          className="text-base w-full max-w-[40rem] mx-auto my-2 px-4 py-2 text-text-primary bg-surface border-none rounded-lg"
          name="your_name"
          required
        />
        <input
          type="email"
          placeholder="Your Email..."
          className="text-base w-full max-w-[40rem] mx-auto my-2 px-4 py-2 text-text-primary bg-surface border-none rounded-lg"
          name="your_email"
          required
        />
        <textarea
          placeholder="Your Message..."
          className="text-base w-full max-w-[40rem] mx-auto my-2 px-4 py-2 text-text-primary bg-surface border-none rounded-lg resize-none"
          rows={5}
          name="message"
          required
        />

        <div className="my-4">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY || ""}
            onChange={onCaptchaChange}
          />
        </div>

        <button
          type="submit"
          value="Send"
          className="bg-white text-background border-none rounded-lg mx-auto my-8 px-14 py-3 cursor-pointer opacity-100 transition-opacity duration-300 hover:opacity-90 disabled:opacity-10 disabled:cursor-not-allowed"
          disabled={!captchaVerified || isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>

      <SocialIcons size={32} gap={16} className="mb-4" />
    </section>
  );
};

export default Contact;
