import { FaArrowUp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
function Contact() {
  const form = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thanks for sending an email");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong!");
        },
      );
  };
  return (
    <section id="Contact" className="mx-auto w-11/12 py-12">
      <div className="space-y-8">
        <h3 className="section-heading">Let&apos;s Talk</h3>
        <div>
          <form ref={form} onSubmit={handleSubmit} className="grid">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="w-full lg:col-span-2">
                <input
                  required
                  name="from_name"
                  type="text"
                  className="w-full border-x-0 border-t-0 border-b-2 border-white bg-transparent"
                  placeholder="Name"
                />
              </div>
              <div className="w-full lg:col-span-2">
                <input
                  required
                  name="from_email"
                  type="email"
                  className="w-full border-x-0 border-t-0 border-b-2 border-white bg-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-full lg:col-start-2 lg:col-end-4">
                <textarea
                  required
                  name="message"
                  className="textarea min-h-64 w-full border border-white bg-black"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn mx-auto mt-10 max-w-xs transition-all duration-300 hover:-translate-y-2"
            >
              Submit
              <FaArrowUp className="rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
