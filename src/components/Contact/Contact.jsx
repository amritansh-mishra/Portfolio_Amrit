import React, { useState } from "react";
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



const Contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false); //message sent or not we determine 

  const sendEmail= (e) => {               //send button par click kru then page  relod na ho, instead msg gets send and i get notification      
    e.preventDefault();

    emailjs
    .sendForm(
     "service_l5lle4o",
     "template_ngn6la2",
     form.current,
     "g6TIxICZLo8vRs1Rx"
    )

    .then(
      () => {
        setIsSent(true);
        form.current.reset(); //send btn pr click krte hi form ka data clear ho jaega 
        toast.success("Message Sent Successfully",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        theme: "dark",

        });
      },
      (error) => {
       toast.error("errorr sending message",error)
       toast.error("Message Not Sent" ,{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true, 
        theme: "dark",
      });
      }
    );
  };





  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer/>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#fca311] mx-auto mt-1 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/** Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-white text-center text-xl font-semibold">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 mt-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className=" w-full p-2 rounded-md bg-[#201c36] text-white border border-gray-600 focus:outline-none focus:border-[#fca311]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className=" w-full p-2 rounded-md bg-[#201c36] text-white border border-gray-600 focus:outline-none focus:border-[#fca311]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className=" w-full p-2 rounded-md bg-[#201c36] text-white border border-gray-600 focus:outline-none focus:border-[#fca311]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className=" w-full p-3 rounded-md bg-[#201c36] text-white border border-gray-600 focus:outline-none focus:border-[#fca311]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
