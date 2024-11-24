import StayInformed from "@/components/StayInformed"
import ContactMain from "./_components/ContactMain"
import ContactFooter from "@/components/ContactFooter"

const ContactPage = () => {
  return (
    <div className="max-w-screen flex flex-col gap-10 overflow-hidden">
        <ContactMain />
        <ContactFooter />
        <StayInformed />
    </div>
  )
}

export default ContactPage