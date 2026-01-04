'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [message, setMessage] = useState('');

  // Player level state
  const [single_level, setSingleLevel] = useState("");
  const [double_level, setDoubleLevel] = useState("");
  const levels = ["2.00 - Novice", "2.25", "2.50", "2.75", "3.00 - Intermediate", "3.25", "3.50", "3.75", "4.00 - Advanced", "4.25", "4.50", "4.75", "5.00 - Expert", "5.25", "5.50", "5.75", "6.00 - Semi Pro"];

  const [gender, setGender] = useState("");
  const genders = ["Male", "Female"];

  const [city, setCity] = useState("");
  const cities = [ "Auckland" ];

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        single_level,
        double_level,
        gender,
        city,
        password: e.target.password.value,
      }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <br></br>

        First name
        <span className="required-indicator"></span>
        <input name="firstname" placeholder="First name" required />
        <br /><br />

        Last name
        <span className="required-indicator"></span>
        <input name="lastname" placeholder="Last name" required aria-required="true"/>

        <br /><br />

        DUPR ID
        <span className="required-indicator"></span>
        <br/>
        <a href="https://dashboard.dupr.com/signup">Get your DUPR ID</a>
        <div className="tooltip"> [ ? ]
          <span className="tooltiptext">Your DUPR ID can be found under your profile page at DUPR.com [hyperlink]. Registration required. </span>
        </div>
        <input name="duprid" placeholder="DUPR ID" required />
        <br /><br />

        Email
        <span className="required-indicator"></span>
        <input name="email" placeholder="Email address" required />
        <br /><br />

        Doubles player level
        <span className="required-indicator"></span>
        <select value={double_level} onChange={e => setDoubleLevel(e.target.value)} required>
          <option value="" disabled>
            Select
          </option>

          {levels.map(lv => (
            <option key={lv} value={lv}>
              {lv}
            </option>
          ))}
        </select>
        <br /><br />

        <button type="button" onClick={() => window.location.href = "https://usapickleball.org/skill-level/"}>Find your skill levels</button>
        <br /><br />

        Singles player level
        <span className="required-indicator"></span>
        <select value={single_level} onChange={e => setSingleLevel(e.target.value)} required>
          <option value="" disabled>
            Select
          </option>

          {levels.map(lv => (
            <option key={lv} value={lv}>
              {lv}
            </option>
          ))}
        </select>
        <br /><br />

        Sex
        <div className="tooltip"> [ ? ]
          <span className="tooltiptext">May be used for categories, etc. </span>
        </div>
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="" disabled>
            Select gender
          </option>

          {genders.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <br /><br />

        Date of birth
        <div className="tooltip"> [ ? ]
          <span className="tooltiptext">May be used for categories, etc. </span>
        </div>
        <input type="date" name="birthdate" id="birthdate" />
        <br /><br />

        Club (if any)
        <input type="text" name="club" id="club" />
        <br /><br />

        Town/city
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="" disabled>
            Select
          </option>

          {cities.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br /><br />

        Password
        <span className="required-indicator"></span>
        <input name="password" type="password" placeholder="Password" required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
