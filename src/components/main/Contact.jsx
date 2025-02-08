import { FaArrowUp } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="Contact" className="mx-auto w-11/12 py-12">
      <div className="space-y-8">
        <h3 className="section-heading">Let&apos;s Talk</h3>
        <div>
          <form onSubmit={handleSubmit} className="grid">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="w-full lg:col-span-2">
                <input
                  type="text"
                  className="w-full border-x-0 border-t-0 border-b-2 border-white bg-transparent"
                  placeholder="Name"
                />
              </div>
              <div className="w-full lg:col-span-2">
                <input
                  type="email"
                  className="w-full border-x-0 border-t-0 border-b-2 border-white bg-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-full lg:col-start-2 lg:col-end-4">
                <textarea
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
