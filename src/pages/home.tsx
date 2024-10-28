import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <h1>Welcome to Volkswagen Digital Solutions</h1>
      <p>
        Welcome to the Volkswagen Digital Solutions family! We're thrilled to
        have you on board as part of our junior team. At VWDS, we believe in
        innovation, collaboration, and continuous learning. Here, you'll have
        the opportunity to grow, challenge yourself, and contribute to
        cutting-edge digital solutions that shape the future of mobility.
      </p>
      <p>
        As you embark on this exciting journey with us, you'll discover a
        supportive environment where your ideas are valued and your potential is
        nurtured. Feel free to explore, ask questions, and connect with your
        peers and mentors. Together, we’ll drive the digital transformation
        forward.
      </p>

      <h2>Find Us</h2>
      <p>
        Our main office is located in the heart of Lisbon, Portugal. Feel free
        to visit us at the address below or use the map to find directions.
      </p>

      <iframe
        title="Volkswagen Digital Solutions"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.2849008621474!2d-9.144665384651475!3d38.738497679742664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19336b4138375b%3A0x23b1440fbaf9d36a!2sVolkswagen%20Digital%20Solutions!5e0!3m2!1sen!2spt!4v1697311538125!5m2!1sen!2spt"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      />
    </div>
  );
};

export default Home;
