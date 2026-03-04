import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Contact Me"
          subtitle="I'd love to hear from you!"
        />
        <ContactForm />
      </div>
    </section>
  );
}
