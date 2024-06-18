import { useState } from "react";
import { RandomCharacter } from "./utils/RandomName";
import "./styles/index.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [interests, setInterests] = useState([
    { name: "Eating", checked: false },
    { name: "Sleeping", checked: false },
    { name: "Coding", checked: false },
    { name: "Tacos", checked: false },
  ]);

  const updateName = (e) => setFullName(e.target.value);
  const updateEmailAddress = (e) => setEmailAddress(e.target.value);

  const updateInterests = (index) => {
    setInterests(
      interests.map((interest, idx) => {
        if (idx === index) {
          return { ...interest, checked: !interest.checked };
        }
        return interest;
      })
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const displayForm = (
    <form className="my-8 w-full max-w-lg" onSubmit={submitForm}>
      <h3 className="text-2xl">Newsletter Sign Up</h3>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="username"
            onChange={updateName}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="Email"
            placeholder={emailAddress}
            onChange={updateEmailAddress}
          />
        </div>
      </div>
      <h4 className="text-xl">Select areas of interest:</h4>
      <div className="flex flex-wrap -mx-3 mb-2">
        {interests.map((interest, idx) => {
          return (
            <CheckBox
              key={interest.name}
              interest={interest.name}
              isChecked={interest.checked}
              checkHandler={() => updateInterests(idx)}
            />
          );
        })}
      </div>
      <button
        type="submit"
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );

  const displayMessage = (
    <div>
      <p className="text-2xl">
        Thanks {fullName}! You are signed up for these newsletters:
      </p>
      <ul>
        {interests.map((interest) => {
          return interest.checked ? (
            <li key={interest.name} className="w=full px-4 list-disc">
              {interest.name}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );

  return (
    <section className="flex items-center justify-center my-12">
      <header className="text-white mx-[28rem]">
        <h1 className="text-[3rem] py-12">Hi, I'm {RandomCharacter()}</h1>
        <div className="flex flex-row align-center">
          <img
            className="rounded-full h-64 w-64 object-cover"
            src="http://placebeard.it/1024"
            alt="My profile pic"
          />
          <div className="flex flex-col px-12 justify-center align-middle">
            <h2 className="text-[2rem] py-2">_About Me</h2>
            <p className="text-lg py-2">
              {"// get a small overview of who I am "}
            </p>
            <p className="text-lg">
              Never underestimate Gotham City. People get mugged coming home
              from work every day of the week. Sometimes things just go bad.
              Ooh, you think darkness is your ally? You merely adopted the dark,
              I was born in it. Molded by it. I didn’t see the light until I was
              already a man. By then there was nothing to be but blinded.
              Theatricality and deception, powerful agents to the uninitiated.
              But we are initiated aren’t we, Bruce? Members of the League of
              Shadows. And you betrayed us. Your anger gives you great power.
              But if you Iet it, it will destroy you as it almost did me. The
              first time I stole so that I wouldn’t starve, yes. I lost many
              assumptions about the simple nature of right and wrong. And when I
              traveled I learned the fear before a crime and the thrill of
              success. But I never became one of them. I’m not sure you made it
              loud enough, sir. Bane was a member of the League of Shadows. And
              then he was excommunicated. And any man who is too extreme for
              Ra’s Al Ghul, is not to be trifled with.
            </p>
            {showMessage ? displayMessage : displayForm}
            <div className="flex flex-row justify-between py-12">
              <a
                href="https://github.com/t0nylombardi"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/t0nylombardi"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default App;
