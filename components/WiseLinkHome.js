import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { Mail, Phone, Star, Users, Info, HelpCircle } from "lucide-react";

export default function WiseLinkHome() {
  return (
    <div className="p-6 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">WiseLink Technology</h1>
        <p className="text-lg max-w-xl mx-auto">
          Friendly, patient, and reliable tech support for seniors in Saskatoon. We're here to make technology easy and stress-free.
        </p>
        <Button className="text-lg px-6 py-3">Schedule an Appointment</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><Info className="w-6 h-6" /> About Us</h2>
        <p className="max-w-3xl">
          At WiseLink Technology, our mission is to empower seniors to feel confident and independent with the digital tools of today.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Device Setup", "Wi-Fi Help", "Email & App Support", "Security & Privacy", "Smart Home Setup", "One-on-One Training"].map(service => (
            <Card key={service}>
              <CardContent className="p-4 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <p>"They helped me set up my new phone and explained everything so patiently. Thank you WiseLink!"</p>
              <div className="flex items-center gap-2 mt-2 text-yellow-500">
                <Star /><Star /><Star /><Star /><Star />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><HelpCircle className="w-6 h-6" /> FAQ</h2>
        <div className="space-y-3">
          <div><p className="font-semibold">Do you come to my home?</p><p>Yes! We serve seniors in Saskatoon.</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        <Card><CardContent className="p-4"><Calendar /></CardContent></Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 justify-center"><Users className="w-6 h-6" /> Contact Us</h2>
        <div className="flex justify-center gap-6">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> (306) 555-1234</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> help@wiselink.ca</div>
        </div>
      </section>
    </div>
  );
}
<placeholder for full component>
