export const EmailTemplate = ({
  name,
  email,
  message,
  selectedOption,
  phoneNumber,
}) => (
  <div>
    <p>From: {name}</p>
    <p>Email: {email}</p>
    <p>PhoneNumber: {phoneNumber}</p>
    <p>Inquiry About: {selectedOption}</p>
    <br />
    <p className="mt-28">Message Body:</p>
    <p>{message}</p>
    <p className="mt-12">--</p>
    <p>
      This email was sent from a contact form on forcefinancecoin
      (https://www.forcefinancecoin.ca)
    </p>
  </div>
);
