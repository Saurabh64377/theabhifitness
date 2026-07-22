import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsClockFill,
} from "react-icons/bs";
import { EMAILJS_CONFIG } from "../constants/emailjs";
import { BRAND, PLANS } from "../constants/siteData";
import { usePlanSelection } from "../hooks/usePlanSelection";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const GOALS = ["Weight Loss", "Muscle Gain", "General Fitness", "Strength Training", "Body Transformation"];
const TIME_SLOTS = ["Morning (5:30 – 11:00 AM)", "Evening (4:00 – 10:00 PM)", "Flexible / Any Time"];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "Male",
  goal: GOALS[0],
  plan: "",
  timeSlot: TIME_SLOTS[0],
  message: "",
  consent: false,
};

export default function Contact() {
  const { selectedPlan } = usePlanSelection();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = "Enter a valid 10-digit mobile number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.age && (Number(form.age) < 10 || Number(form.age) > 90)) next.age = "Enter a valid age";
    if (!form.consent) next.consent = "Please accept to be contacted";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const messageBody = [
        `Phone: ${form.phone}`,
        `Email: ${form.email || "Not provided"}`,
        `Age: ${form.age || "Not provided"}`,
        `Gender: ${form.gender}`,
        `Fitness Goal: ${form.goal}`,
        `Preferred Plan: ${form.plan || selectedPlan || "Not specified"}`,
        `Preferred Time Slot: ${form.timeSlot}`,
        `Message: ${form.message || "—"}`,
      ].join("\n");

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplateId,
        {
          to_name: BRAND.name,
          from_name: form.name,
          from_email: form.email || "Not provided",
          subject: `New Membership Enquiry — ${form.name}`,
          message: messageBody,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS contact form error:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-bg/50 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-primary placeholder:text-white/30";

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your"
          highlight="Transformation Today"
          subtitle="Fill in your details and our team will call you within a few hours to get you started."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-8">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-card/60 p-7 sm:p-8">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide">Contact Information</h3>
                <p className="mt-2 text-sm text-muted">
                  Prefer to talk directly? Reach us through any of these channels.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BsGeoAltFill />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">Location</p>
                      <p className="mt-1 text-sm text-white/85">{BRAND.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BsTelephoneFill />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">Phone</p>
                      <a href={`tel:${BRAND.phoneRaw}`} className="mt-1 block text-sm text-white/85 hover:text-primary">
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BsEnvelopeFill />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">Email</p>
                      <a href={`mailto:${BRAND.email}`} className="mt-1 block text-sm text-white/85 hover:text-primary">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <BsClockFill />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">Hours</p>
                      {BRAND.hours.map((h) => (
                        <p key={h.day} className="mt-1 text-sm text-white/85">
                          {h.day}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button as="a" href={`tel:${BRAND.phoneRaw}`} variant="outline" className="flex-1">
                  Call Now
                </Button>
                <Button as="a" href={`https://wa.me/${BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" className="flex-1">
                  WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-card/60 p-7 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-4xl text-primary">
                    <BsCheckCircleFill />
                  </span>
                  <h3 className="font-display mt-5 text-2xl uppercase tracking-wide">Enquiry Sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Thank you for reaching out. Our team will contact you shortly to help you get
                    started.
                  </p>
                  <Button className="mt-6" onClick={() => setStatus("idle")}>
                    Send Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <input type="text" placeholder="Full Name *" value={form.name} onChange={update("name")} className={inputClass} />
                      {errors.name && <p className="mt-1 text-xs text-orange-400">{errors.name}</p>}
                    </div>
                    <div>
                      <input type="tel" placeholder="Mobile Number *" value={form.phone} onChange={update("phone")} className={inputClass} />
                      {errors.phone && <p className="mt-1 text-xs text-orange-400">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} className={inputClass} />
                      {errors.email && <p className="mt-1 text-xs text-orange-400">{errors.email}</p>}
                    </div>
                    <div>
                      <input type="number" placeholder="Age" value={form.age} onChange={update("age")} className={inputClass} />
                      {errors.age && <p className="mt-1 text-xs text-orange-400">{errors.age}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <select value={form.gender} onChange={update("gender")} className={inputClass}>
                      {["Male", "Female", "Other"].map((g) => (
                        <option key={g} value={g} className="bg-card">{g}</option>
                      ))}
                    </select>
                    <select value={form.goal} onChange={update("goal")} className={inputClass}>
                      {GOALS.map((g) => (
                        <option key={g} value={g} className="bg-card">{g}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <select value={form.plan || selectedPlan} onChange={update("plan")} className={inputClass}>
                      <option value="" className="bg-card">Preferred Membership Plan</option>
                      {PLANS.map((p) => (
                        <option key={p.name} value={p.name} className="bg-card">{p.name}</option>
                      ))}
                    </select>
                    <select value={form.timeSlot} onChange={update("timeSlot")} className={inputClass}>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot} className="bg-card">{slot}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    placeholder="Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    className={`${inputClass} resize-none`}
                  />

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 text-xs text-muted">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={update("consent")}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                      />
                      I agree to be contacted by {BRAND.name} via call, SMS, or WhatsApp regarding
                      my enquiry.
                    </label>
                    {errors.consent && <p className="mt-1 text-xs text-orange-400">{errors.consent}</p>}
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-xs text-orange-300">
                      <BsExclamationCircleFill /> Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="h-4 w-4 rounded-full border-2 border-bg border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
