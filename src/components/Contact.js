import Header from "./Header";

const Contact = () => {
  return (
    <div className="p-4 w-[80%] mx-auto  mt-12">
      <div className="">
        <h2 className="font-bold text-lg my-4">Contact Us</h2>
        <form className="flex flex-col">
          <label htmlFor="name" className="font-bold my-2">
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="name"
            className="border border-gray-200 p-2 rounded-md"
            required
          />
          <label htmlFor="email" className="font-bold my-2">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email... "
            className="border border-gray-200 p-2 rounded-md"
            required
          />
          <label htmlFor="message" className="font-bold my-2">
            Your Message:{" "}
          </label>
          <textarea
            cols="50"
            rows="5"
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="border border-gray-200 p-2 rounded-md"
            required
          ></textarea>
          <input
            type="submit"
            id="submit"
            name="submit"
            value="Submit"
            className="border border-gray-200 p-2 rounded-md my-4 w-36 bg-blue-400 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
