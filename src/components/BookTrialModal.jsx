import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { GiTigerHead } from "react-icons/gi";
import { EMAILJS_CONFIG } from "../constants/emailjs";
import { BRAND } from "../constants/siteData";
import Modal from "./Modal";
import Button from "./Button";

const TIME_SLOTS = ["Morning (5:30 – 11:00 AM)", "Evening (4:00 – 10:00 PM)", "Flexible / Any Time"];

const initialForm = { name: "", phone: "", email: "", goal: "", timeSlot: TIME_SLOTS[0] };

export default function BookTrialModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = "Enter a valid 10-digit mobile number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm(initialForm);
      setErrors({});
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const messageBody = [
        `Phone: ${form.phone}`,
        `Email: ${form.email || "Not provided"}`,
        `Fitness Goal: ${form.goal || "Not specified"}`,
        `Preferred Time Slot: ${form.timeSlot}`,
      ].join("\n");

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.trialTemplateId,
        {
          to_name: BRAND.name,
          from_name: form.name,
          from_email: form.email || "Not provided",
          subject: `New Free Trial Booking — ${form.name}`,
          message: messageBody,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS trial booking error:", err);
      setStatus("error");
    }
  };

  return (
    <Modal open={open} onClose={handleClose} className="max-w-lg">
      {status === "success" ? (
        <div className="flex flex-col items-center py-6 text-center">
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-4xl text-primary"
          >
            <BsCheckCircleFill />
          </motion.span>
          <h3 className="font-display mt-5 text-2xl uppercase tracking-wide">Trial Booked!</h3>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Thanks {form.name.split(" ")[0]}! Our team will call you shortly at {form.phone} to
            confirm your free trial session.
          </p>
          <Button className="mt-6" onClick={handleClose}>
            Done
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-bg">
              <GiTigerHead className="text-xl" />
            </span>
            <div>
              <h3 className="font-display text-2xl uppercase tracking-wide">Book Your Free Trial</h3>
              <p className="text-xs text-muted">No commitment. Just show up and train.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={update("name")}
                className="w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-orange-400">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={update("phone")}
                className="w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors.phone && <p className="mt-1 text-xs text-orange-400">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={update("email")}
                className="w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-orange-400">{errors.email}</p>}
            </div>
            <input
              type="text"
              placeholder="Your Fitness Goal (e.g. Weight Loss)"
              value={form.goal}
              onChange={update("goal")}
              className="w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            <select
              value={form.timeSlot}
              onChange={update("timeSlot")}
              className="w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot} className="bg-card">
                  {slot}
                </option>
              ))}
            </select>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-xs text-orange-300">
                <BsExclamationCircleFill /> Something went wrong. Please try again or call us directly.
              </div>
            )}

            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    className="h-4 w-4 rounded-full border-2 border-bg border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                  Booking...
                </span>
              ) : (
                "Confirm Free Trial"
              )}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
}
