import { useState } from "react";
import styles from "./Signup.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import howCodeRankWorkImg from "../../../assets/howCodeRankWorksImg";

const howCodeRankWork = [
  {
    imgUrl: "/src/assets/howCodeRankWorksImg/Illustration.svg",
    head: "Sign Up & Connect Your Profiles",
    head2: "Create your codeRank account and link your coding profiles.",
  },
  {
    imgUrl: "/src/assets/howCodeRankWorksImg/Group 3.svg",
    head: "Analyze & Test Your Skills",
    head2: "Evaluate your activities, contributions, and rankings.",
  },
  {
    imgUrl: "/src/assets/howCodeRankWorksImg/22378351_6600678 1.svg",
    head: "Get your CodeRank",
    head2: "Receive a unified rating and a shareable profile page.",
  },
];

const Signup = () => {
  const [form, setForm] = useState({ fullname: "", phone: "", college: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handlePhoneChange = (value) => {
  //   setForm({ ...form, phone: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <div className={styles.signupDiv}>
        <div className={styles.mainContainer}>
          <div className={styles.detailContainer}>
            <div className={styles.detailPartOne}>
              <h1>One Page.</h1>
              <h1>All Your Code Profiles.</h1>
              <h1>YourUltimate Rank.</h1>
            </div>
            <p>
              Integrate your GitHub, LeetCode, Codeforces, and more to get a
              comprehensive rating of your coding skills.
            </p>
          </div>
          <div className={styles.formDiv}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={form.fullname}
                onChange={handleChange}
                required
              />

              {/* Phone Number with Country Code
              <label className="block mt-4 text-sm font-medium text-gray-700">Phone Number</label>
              <PhoneInput
                country={"in"}
                value={form.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                }}
                containerStyle={{ width: "100%" }}
                className={styles.phoneInput}
              /> */}
              {/* Phone Number */}
              <label>Phone Number</label>
              <div className="phone-input">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={form.phone}
                  placeholder="Enter your 10-digit number"
                  onChange={(value) => setForm({ ...form, phone: value })}
                />
              </div>
              <p className={styles.phoneText}>
                We have a strict no-spam policy and will only contact you
                regarding your application.
              </p>

              <label>College Name</label>
              <input
                type="text"
                name="college"
                placeholder="Enter your college name"
                value={form.college}
                onChange={handleChange}
                required
              />
              <button className={styles.formButton} type="submit">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.howCodeRankWorkDiv}>
        <h1>How CodeRank Works</h1>
        <div className={styles.detail_container}>
          {howCodeRankWork.map((item, index) => (
            <div key={index} className={styles.eachContainer}>
              <img src={item.imgUrl} />
              <div className={styles.textContainer}>
                <p>{item.head}</p>
                <p>{item.head2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Signup;
