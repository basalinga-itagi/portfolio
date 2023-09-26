import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import toast, { Toaster } from "react-hot-toast";
// import { CheckIcon } from "../../assets/checkIcon";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [ismessageSent, setIsMessageSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("hello this fromm email");
    setLoading(true);
    emailjs
      .sendForm(
        "service_hq1479o",
        "template_gyr4jjs",
        form.current,
        "Lq7C6Q8m_xZhuf_zV"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text == "OK") {
            setLoading(false);
            setIsMessageSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setIsMessageSent(false);
    }, 180000);
  }, [ismessageSent]);

  return (
    <div className="contact">
      <div className="card card0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <img
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
              alt="Conatct"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 my-10 card2 ">
            <div className="row contact-icon">
              <h3 className="">Contact With</h3>
              <span style={{ marginTop: -30 }}>
                <a
                  href="https://web.whatsapp.com/send?phone=8904452859"
                  target="_blank"
                >
                  <BsWhatsapp color="green" size={34} className="ms-2 mx-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/basalingappa-itagi-9ab071247"
                  target="_blank"
                >
                  <AiFillLinkedin
                    color="blue"
                    size={34}
                    className="ms-2 mx-4"
                  />
                </a>
              </span>
              {/*  */}
            </div>
            <div className="or-container">
              <div>-------------------</div>
              <small className="">OR</small>
              <div>------------------</div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row px-3">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  className="mb-3"
                />
              </div>
              <div className="row px-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  className="mb-3"
                />
              </div>
              <div className="row px-3">
                <textarea
                  type="text"
                  placeholder="Enter your Message"
                  name="message"
                  className="mb-3"
                />
              </div>

              <div className="row px-3 gx-5">
                <div class="col">
                  <button
                    className="before-send"
                    type="submit"
                    disabled={ismessageSent ? true : false}
                  >
                    {loading && (
                      <span
                        class="spinner-border text-danger"
                        style={{
                          width: "1rem",
                          height: "1rem",
                          marginRight: 4,
                        }}
                        role="status"
                      ></span>
                    )}
                    SEND MESSAGE
                  </button>
                </div>
                {ismessageSent && (
                  <div class="col">
                    <span
                      style={{
                        display: "flex",
                        // justifyContent: "space-around",
                        alignItems: "center",
                        background: "green",
                        padding: 14,
                        borderRadius: 4,
                        height: 20,
                      }}
                    >
                      <AiFillCheckCircle
                        size={20}
                        color={"white"}
                        style={{ marginBottom: 26 }}
                      />
                      message sent
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
