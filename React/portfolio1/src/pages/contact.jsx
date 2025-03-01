import React from 'react';

const Contact = () => {
  return (
    <>
    <section id="contact" className="bg-blue-600 text-white h-screen pt-40 ">
      <h2 className="text-4xl font-semibold mb-6 flex justify-center ">Contact Me</h2>
      {/* <p className="text-lg mb-8">Feel free to get in touch with me through the form below</p> */}
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-white text-black rounded-lg" />
        </div>
        <div>
          <input type="email" placeholder="Your Email" className="w-full p-4  bg-white  text-black rounded-lg" />
        </div>
        <div>
          <textarea placeholder="Your Message" className="w-full p-4  text-black bg-white rounded-lg" rows="5"></textarea>
        </div>
        <div>
          <button className="bg-yellow-500 text-blue-600 px-8 py-3 ml-40 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </section>
    </>
  );
};

export default Contact;
