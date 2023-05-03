import { useState } from 'react'
import isURL from 'validator/lib/isURL';
import appData from "../constants/data";
import Link from "next/link";

const Shorty = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [shortURL, setShortURL] = useState('')
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isURL(inputValue)) {
    postData(inputValue)

    } else {
      setIsValid(false)
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setIsValid(true)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortURL);
      setIsCopied(true); // set isCopied state to true
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };



  const postData = async (inputValue) => {
    const url = appData.shortenURL;
    const data = { url: inputValue};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setShortURL(json);
    } catch (error) {
      console.error(error);
      setShortURL("something wrong happened :(");
    }
  }

  return (
    <div>
      <div className="contact-container">
        <h1>Shorten your URL</h1>
          <form onSubmit={handleSubmit}>
          <label>
            Enter Url:
            <input className="input-url" type="text" value={inputValue} onChange={handleInputChange} />
          </label>
          <button className="input-url-submit" type="submit">Submit</button>
          {!isValid && <div className="error">Invalid URL</div>}

        </form>
          <button onClick={handleCopy} className="short-url" type="submit">
            {isCopied ? 'Copied!' : shortURL}
          </button>

      </div>

      <div className="skills-container">
          <h2>Made with</h2>
          <div className="grid-skills">
            <div className="skill-card node">
              <p>Node</p>
            </div>
            <div className="skill-card docker">
              <p>Prisma</p>
            </div>
          </div>
        </div>

    </div>
  )
}




export default Shorty;
