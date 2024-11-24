const ContactHeader = () => {
  return (
    <div className="static z-10 flex w-full flex-col items-center justify-center text-center">
      <h1
        className="font-neue text-4xl font-bold lg:text-[70px] lg:leading-[72px]"
        style={{
          background: "linear-gradient(91.06deg, #FF1CF7 2.26%, #00F0FF 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Contact Us
      </h1>
      <span className="w-full max-w-[780px] py-5 text-center text-[18px]">
        Reach Out to Us, Whether you have questions, feedback, or partnership
        inquiries, we're here to assist you. Contact CDL TOKEN today and let's
        explore the future of finance together
      </span>
      <div className="flex items-center gap-5">
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] border border-white/30 p-1 text-white hover:text-primary">
          {telegram}
        </button>
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] border border-white/30 p-1 text-white hover:text-primary">
          {twitter}
        </button>
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] border border-white/30 p-1 text-white hover:text-primary">
          {youtube}
        </button>
        <button className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] border border-white/30 p-1 text-white hover:text-primary">
          {discord}
        </button>
      </div>
    </div>
  );
};

const twitter = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
      fill="currentColor"
    />
  </svg>
);

const telegram = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.75 0.25C12.0312 0.25 15.5 3.71875 15.5 8C15.5 12.2812 12.0312 15.75 7.75 15.75C3.46875 15.75 0 12.2812 0 8C0 3.71875 3.46875 0.25 7.75 0.25ZM11.5312 5.5625C11.6562 5.0625 11.3438 4.84375 11 4.96875L3.53125 7.84375C3.03125 8.03125 3.03125 8.34375 3.4375 8.46875L5.34375 9.0625L9.78125 6.25C10 6.125 10.1875 6.21875 10.0312 6.34375L6.4375 9.59375L6.3125 11.5625C6.5 11.5625 6.59375 11.4688 6.6875 11.375L7.625 10.4688L9.5625 11.9062C9.9375 12.0938 10.1875 12 10.2812 11.5625L11.5312 5.5625Z"
      fill="currentColor"
    />
  </svg>
);

const youtube = (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.1562 1.90625C16.9688 1.15625 16.375 0.5625 15.6562 0.375C14.3125 0 9 0 9 0C9 0 3.65625 0 2.3125 0.375C1.59375 0.5625 1 1.15625 0.8125 1.90625C0.4375 3.21875 0.4375 6.03125 0.4375 6.03125C0.4375 6.03125 0.4375 8.8125 0.8125 10.1562C1 10.9062 1.59375 11.4688 2.3125 11.6562C3.65625 12 9 12 9 12C9 12 14.3125 12 15.6562 11.6562C16.375 11.4688 16.9688 10.9062 17.1562 10.1562C17.5312 8.8125 17.5312 6.03125 17.5312 6.03125C17.5312 6.03125 17.5312 3.21875 17.1562 1.90625ZM7.25 8.5625V3.5L11.6875 6.03125L7.25 8.5625Z"
      fill="currentColor"
    />
  </svg>
);

const discord = (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.28125 7.625C9.28125 7.125 8.90625 6.71875 8.46875 6.71875C8 6.71875 7.625 7.125 7.625 7.625C7.625 8.09375 8 8.5 8.46875 8.5C8.90625 8.5 9.28125 8.09375 9.28125 7.625ZM5.53125 6.71875C5.09375 6.71875 4.71875 7.125 4.71875 7.625C4.71875 8.09375 5.09375 8.5 5.53125 8.5C6 8.5 6.34375 8.09375 6.34375 7.625C6.375 7.125 6 6.71875 5.53125 6.71875ZM14 1.65625C14 0.75 13.25 0 12.3438 0H1.625C0.71875 0 0 0.75 0 1.65625V12.4688C0 13.4062 0.71875 14.125 1.625 14.125H10.6875L10.2812 12.6562C12.625 14.8125 11.9688 14.25 14 16V1.65625ZM11.7188 9.25C11.7188 9.25 11.0312 10.4062 9.25 10.4688C9.25 10.4688 8.96875 10.125 8.71875 9.8125C9.78125 9.53125 10.1875 8.875 10.1875 8.875C9.84375 9.09375 9.53125 9.21875 9.25 9.34375C7.53125 10.0625 5.625 9.8125 4.25 9.0625C4.25 9.03125 4.0625 8.9375 3.9375 8.84375C3.9375 8.84375 4.3125 9.5 5.34375 9.8125C5.09375 10.0938 4.8125 10.4688 4.8125 10.4688C3.03125 10.4062 2.375 9.25 2.375 9.25C2.375 6.65625 3.5 4.59375 3.5 4.59375C4.65625 3.71875 5.75 3.75 5.75 3.75L5.84375 3.84375C4.40625 4.25 3.75 4.875 3.75 4.875C3.75 4.875 3.90625 4.78125 4.21875 4.65625C6.0625 3.84375 8.28125 3.84375 10.1875 4.875C10.1875 4.875 9.5625 4.28125 8.1875 3.875L8.3125 3.75C8.3125 3.75 9.40625 3.71875 10.5625 4.59375C10.5625 4.59375 11.7188 6.65625 11.7188 9.25Z"
      fill="currentColor"
    />
  </svg>
);

export default ContactHeader;
