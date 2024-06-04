import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });

  const updateName = (e) => setFullName(e.target.value);
  const updateEmailAddress = (e) => setEmailAddress(e.target.value);
  const updateInterests = (e) =>
    setInterests({ ...interests, [e.target.id]: e.target.checked });

  const submitForm = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const displayForm = (
    <form title="signup" onSubmit={submitForm}>
      <h3>Newsletter Sign Up</h3>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          value={fullName}
          id="name"
          placeholder="name"
          onChange={updateName}
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email address: </label>
        <input
          type="text"
          value={emailAddress}
          id="email"
          placeholder="email address"
          onChange={updateEmailAddress}
        />
      </div>

      <div>
        <p>Select areas of interest:</p>
        <input
          type="checkbox"
          id="interest1"
          checked={interests.interest1}
          aria-checked={interests.interest1}
          onChange={updateInterests}
        />
        <label htmlFor="interest1">Interest 1</label>
        <input
          type="checkbox"
          id="interest2"
          checked={interests.interest2}
          aria-checked={interests.interest2}
          onChange={updateInterests}
        />
        <label htmlFor="interest2">Interest 2</label>
        <input
          type="checkbox"
          id="interest3"
          checked={interests.interest3}
          aria-checked={interests.interest3}
          onChange={updateInterests}
        />
        <label htmlFor="interest3">Interest 3</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const displayMessage = (
    <div>
      <p>Thanks {fullName}! You are signed up for these newsletters:</p>
      <ul>
        {interests.interest1 ? <li>Interest 1</li> : null}
        {interests.interest2 ? <li>Interest 2</li> : null}
        {interests.interest3 ? <li>Interest 3</li> : null}
      </ul>
    </div>
  );

  return (
    <main>
      <h1>Hi, I'm Winston</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Never underestimate Gotham City. People get mugged coming home from work
        every day of the week. Sometimes things just go bad. Ooh, you think
        darkness is your ally? You merely adopted the dark, I was born in it.
        Molded by it. I didn’t see the light until I was already a man. By then
        there was nothing to be but blinded. Theatricality and deception,
        powerful agents to the uninitiated. But we are initiated aren’t we,
        Bruce? Members of the League of Shadows. And you betrayed us. Your anger
        gives you great power. But if you Iet it, it will destroy you as it
        almost did me. The first time I stole so that I wouldn’t starve, yes. I
        lost many assumptions about the simple nature of right and wrong. And
        when I traveled I learned the fear before a crime and the thrill of
        success. But I never became one of them. I’m not sure you made it loud
        enough, sir. Bane was a member of the League of Shadows. And then he was
        excommunicated. And any man who is too extreme for Ra’s Al Ghul, is not
        to be trifled with.
      </p>
      {showMessage ? displayMessage : displayForm}

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;
