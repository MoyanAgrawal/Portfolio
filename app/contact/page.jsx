"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { info, services } from "@/constants/path";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [check, setCheck] = useState("");

  useEffect(() => {
    resetForm();
  }, []);
  function resetForm() {
    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      message: "",
    });
    setCheck("");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log("formdata", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setCheck("I have recieved your message will get back to you soon, Have a Happy Day!!");
      setTimeout(() => {
        window.location.reload();
      }, 4500);
    } else {
      setCheck("Failed to send message.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent ">Let's work together</h3>
              <p className="text-white/60">
                Welcome to Moyan World of Tech. Will be Happy to see you onboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstName"
                  placeholder="FirstName"
                  // value={formData?.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                  // require={true}
                />
                <Input
                  type="lastName"
                  placeholder="LastName"
                  // value={formData?.lastName}
                  name="lastName"
                  onChange={handleInputChange}
                  // require={true}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  // value={formData?.email}
                  name="email"
                  onChange={handleInputChange}
                  // require={true}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  // value={formData?.mobile}
                  name="mobile"
                  onChange={handleInputChange}
                  // require={true}
                />
              </div>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                onChange={handleInputChange}
              />

              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
              {check && <p className="text-accent">{check}</p>}
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-[15px] xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
