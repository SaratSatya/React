import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  // ✅ Copy password and show tooltip
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // ✅ Generate random password
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 relative">
      <h1 className="text-white text-center my-3 text-lg font-semibold">
        Password Generator
      </h1>

      {/* Password input and copy button */}
      <div className="flex shadow rounded-lg mb-4 relative z-10">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Password"
          readOnly
        />

        {/* Copy button + Tooltip */}
        <div className="relative flex items-center">
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-1 hover:bg-blue-800 transition-colors relative z-10"
          >
            Copy
          </button>

          {/* ✅ Tooltip above the card */}
          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-md transition-all duration-300 ease-in-out z-50
            ${copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-90'}`}
          >
            ✅ Copied!
            <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-green-500 rotate-45 -translate-x-1/2"></div>
          </div>
        </div>
      </div>

      {/* Controls - all aligned on one line */}
      <div className="flex items-center justify-between gap-x-6 flex-nowrap mt-4">
        {/* Length slider */}
        <div className="flex items-center gap-x-2 flex-shrink-0">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-36 accent-orange-500"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="length">Len: {length}</label>
        </div>

        {/* Numbers checkbox */}
        <div className="flex items-center gap-x-1 flex-shrink-0">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>
        </div>

        {/* Characters checkbox */}
        <div className="flex items-center gap-x-1 flex-shrink-0">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
