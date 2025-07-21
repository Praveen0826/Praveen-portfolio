import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contactus() {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ivcazjh',       // ✅ Replace with your actual Service ID
      'template_kbv1f7i',      // ✅ Replace with your Template ID
      form.current,
      'gqAjVaVO3GqbVdQ_q'       // ✅ Replace with your Public Key
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Try again.");
        console.error(error.text);
      }
    );
  };
  return (
<>
 
<div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0d1117' }}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[480px] max-w-xl p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#1f2937] transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Me</h2>

        <div className="space-y-5">
          {/* Input fields */}
          {["title", "name", "email", "message"].map((field, i) =>
            field !== "message" ? (
              <input
                key={i}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "title" ? "Subject" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              />
            ) : (
              <textarea
                key={i}
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
              ></textarea>
            )
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-lg transition-all duration-300 transform focus:outline-none"
          >
            🚀 Send Message
          </button>
        </div>
      </form>
    </div>
</>
  )
}

export default Contactus