import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowElement(false), 3000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>{showElement ? <p>Your Message is sent successfully</p> : null}</div>
  );
};

const Contact = () => {
  const links = [
    {
      id: 1,
      title: "sasadevelopers9@gmail.com",
      href: "mailto:sasadevelopers9@gmail.com",
    },
  ];

  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbr9ixb",
        "template_hx6gkpg",
        form.current,
        "KnIurR_Y3cm-4DLdY",
      )
      .then(
        (res) => {
          console.log(res.text);
          showResult(true);
        },
        (err) => {
          console.error(err.text);
        },
      );

    e.target.reset();
  };

  return (
    <div className="w-full h-full select-none">
      <div className="bg-black h-[72px] md:px-4 px-6 absolute top-0 left-0 w-full"></div>

      <div className="grid max-w-screen-lg font-muli mx-auto px-4 py-28 md:grid-cols-2">
        {/* Left side: form */}
        <div>
          <h1 className="md:text-4xl sm:text-3xl font-bold text-2xl">
            Get In Touch
          </h1>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group my-5">
              <label>Name</label>
              <input
                placeholder="Enter your full name"
                className="border border-gray-500 text-lg rounded-md font-nunito focus:outline-none p-2 mt-3 w-full"
                type="text"
                name="user_name"
                required
              />
            </div>

            <div className="form-group my-5">
              <label>Email</label>
              <input
                placeholder="Enter your email id"
                type="email"
                className="border border-gray-500 text-lg rounded-md font-nunito focus:outline-none p-2 mt-3 w-full"
                name="email"
                required
              />
            </div>

            <div className="form-group my-5">
              <label>Phone Number</label>
              <input
                placeholder="Enter your Phone no."
                type="tel"
                className="border border-gray-500 text-lg rounded-md font-nunito focus:outline-none p-2 mt-3 w-full"
                name="phone"
                required
              />
            </div>

            <div className="form-group my-5">
              <label>Message</label>
              <textarea
                placeholder="Enter your Message"
                rows={10}
                name="message"
                className="border border-gray-500 p-2 text-lg rounded-md font-nunito mt-3 resize-none focus:outline-none w-full"
              />
            </div>

            <input
              type="submit"
              className="py-3 text-lg font-nunito bg-black w-[140px] rounded-md my-3 cursor-pointer font-medium text-center text-white"
              value="Send"
            />
          </form>

          <div className="status">{result ? <Result /> : null}</div>
        </div>

        {/* Right side: contact info */}
        <div className="text-gray-600 font-muli">
          <div className="w-full my-5 text-center">
            <h3 className="text-2xl font-bold">ADDRESS</h3>
            <p className="py-3 md:text-xl text-lg">
              Kuleshwor, <br /> Kathmandu Nepal
            </p>
          </div>

          <div className="w-full my-5 text-center">
            <h3 className="text-2xl font-bold">Email Us At</h3>
            <ul className="py-3 md:text-xl text-lg text-blue-300 hover:text-blue-400 duration-300">
              {links.map((item) => (
                <li key={item.id}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full my-5 text-center">
            <h3 className="text-2xl font-bold">CALL US</h3>
            <p className="py-3 md:text-xl text-lg">+977 9803180725</p>
            <p className="md:text-xl text-lg">+977 9841520000</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[200px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8100341064182!2d85.29579381438424!3d27.692265632762965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196e77d0bc9d%3A0x81d8f58a14104367!2sDesign%20Cube%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1661188295325!5m2!1sen!2snp"
          width="100%"
          height="100%"
          loading="lazy"
          title="Googlemap"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
