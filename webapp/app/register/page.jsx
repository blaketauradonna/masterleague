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

        First Name:
        <input name="firstname" placeholder="First Name" required />
        <br /><br />

        Last Name:
        <input name="lastname" placeholder="Last Name" required />
        <br /><br />

        DUPR ID:
        <div className="tooltip">?
          <span className="tooltiptext">Optional for sign up, but mandatory for events. You may either enter your DUPR ID now, or before registering any events. https://dashboard.dupr.com/signup </span>
        </div>
        <input name="duprid" placeholder="DUPR ID" />
        <br /><br />

        Email:
        <input name="email" placeholder="Email" required />
        <br /><br />

        Singler Player Level:
        <select value={single_level} onChange={e => setSingleLevel(e.target.value)} required>
          <option value="" disabled>
            Single Player Levels
          </option>

          {levels.map(lv => (
            <option key={lv} value={lv}>
              {lv}
            </option>
          ))}
        </select>
        <br /><br />

        Double Player Level:
        <select value={double_level} onChange={e => setDoubleLevel(e.target.value)} required>
          <option value="" disabled>
            Double Player Levels
          </option>

          {levels.map(lv => (
            <option key={lv} value={lv}>
              {lv}
            </option>
          ))}
        </select>
        <br /><br />

        Sex:
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="" disabled>
            Select Gender
          </option>

          {genders.map(g => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <br /><br />


        City:
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="" disabled>
            Select City
          </option>

          {cities.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <br /><br />

        Club:
        <input type="text" name="club" id="club" />
        <br /><br />

        Date of Birth:
        <input type="date" name="birthdate" id="birthdate" />
        <br /><br />

        Password:
        <input name="password" type="password" placeholder="Password" required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
