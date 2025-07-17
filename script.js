
document.getElementById("root").innerHTML = `
  <main>
    <header>
      <h1>Mission Clean</h1>
      <p><em>Cleaning for a Cause</em></p>
    </header>
    <section>
      <h2>Services</h2>
      <ul>
        <li>House Cleaning</li>
        <li>Yard Work</li>
        <li>General Chores</li>
      </ul>
    </section>
    <section>
      <h2>Areas We Serve</h2>
      <p>Newport Beach & Costa Mesa</p>
    </section>
    <section>
      <h2>Contact</h2>
      <p>Text us at: [Your Phone Number]</p>
    </section>
    <section>
      <h2>Donation Tracker</h2>
      <p><strong>Total Raised: $0</strong></p>
      <p>All proceeds go to Big Brothers Big Sisters of Orange County.</p>
    </section>
    <section>
      <h2>Book Our Services</h2>
      <form>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="text" placeholder="Your Address" required /><br />
        <input type="text" placeholder="Preferred Date & Time" required /><br />
        <input type="text" placeholder="What do you need help with?" required /><br />
        <button type="submit">Submit Booking</button>
      </form>
    </section>
    <section>
      <h2>Charity Spotlight</h2>
      <p><strong>Big Brothers Big Sisters of Orange County</strong></p>
      <p>
        Big Brothers Big Sisters helps children realize their potential and build their futures
        through mentoring relationships. Learn more at 
        <a href="https://www.ocbigs.org" target="_blank">ocbigs.org</a>.
      </p>
    </section>
  </main>
`;
