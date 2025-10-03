import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Normally you would send formData to your backend here
    console.log("Form submitted:", formData);

    // Show success message
    setSuccess(true);

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });

    // Hide success after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {success && (
        <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded">
          Message sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
