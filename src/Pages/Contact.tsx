import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {

  	const [form, setForm] = useState({
		from_name: "",
		reply_to: "",
		message: "",
  	});

	const [sent, setSent] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		emailjs.init("MWmQ6qXJomtTyucmT"); 
	}, []);

  	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    	setForm({ ...form, [e.target.name]: e.target.value });
  	};

  	const handleSubmit = (e: React.FormEvent) => {
    	e.preventDefault();

    	if (!form.from_name || !form.reply_to || !form.message) {
      		setError("Please fill in all fields.");
      		return;
    	}

    	setError("");

    	emailjs
      		.send("service_d10us7h", "template_bz5jgpj", form)
      		.then(() => {
        		setSent(true);
        		setForm({ from_name: "", reply_to: "", message: "" });
      		})
      		.catch((err) => {
        	console.error("Failed to send message:", err);
        	setError("Something went wrong. Please try again later.");
      	});
  	};

  	return (

    	<div className="pb-14">

			<div>
				<h1 className="text-center text-4xl font-bold py-14">Contact Me</h1>
			</div>

			<div className="pl-[650px]">

				<form onSubmit={handleSubmit} action="" className="flex flex-col gap-20 w-80">

					<input className="border border-gray-300 p-2 rounded" type="text" name="from_name" placeholder="Your Name" value={form.from_name} onChange={handleChange} />
					<input className="border border-gray-300 p-2 rounded" type="email" name="reply_to" placeholder="Your Email" value={form.reply_to} onChange={handleChange} />
					<textarea className="border border-gray-300 p-2 rounded h-52" name="message" placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>

   					{error && <p className="text-red-500">{error}</p>}
					{sent && (
              			<p className="text-green-600 font-semibold text-center">
                ✅ 			Your message has been sent successfully!
              			</p>
            		)}

					<button type="submit" className="cursor-pointer hover:scale-110 rounded-full bg-blue-700 p-4 text-white not-visited">Send Message</button>

				</form>

			</div>
      	
    	</div>

  	)

}

export default Contact
