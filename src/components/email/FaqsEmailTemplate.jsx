export const EmailTemplate = ({ name, email, message, phoneNumber }) => (
  <div>
    <p>From: {name}</p>
    <p>Email: {email}</p>
    <p>PhoneNumber: {phoneNumber}</p>
    <br />
    <p className="mt-28">Message Body:</p>
    <p>{message}</p>
    <p className="mt-4">--</p>
    <p>
      This email was sent from a FAQs form on forcefinancecoin
      (https://www.forcefinancecoin.ca){" "}
    </p>
  </div>
);
