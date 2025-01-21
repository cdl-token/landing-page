export const UserEmailTemplate = ({name, selectedOption}) => (
  <div>
    <p>Subject: {selectedOption}</p>
    <p>Customer Name: Dear {name}</p>
    <br />
    <br />
    <p className="mt-28">Message Body:</p>
    <p>
      Thanks you for your interest in Crypto Data Live. One our support
      representative will contact you shortly.
    </p>
    <br />
    <p className="mt-12">--</p>
    <p>
      Regards
      <br />
      <br />
      Crypto Data Live <br />
      Defi Financial Solutions <br />
      Address: Laurier Ave w, 629, Ottawa, ON K1P 5J2, Canada
      <br />
      Mail: info@crptodata.live.com
    </p>
    <br />
    <br />
    <p>
      This email was sent from a contact form on crptodata.live
      (https://ico.cryptodata.live)
    </p>
  </div>
);
