import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@anquest.com",
    description: "Send us your project details anytime.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91-9266140654",
    description: "Let's discuss your project directly.",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Orbit Plaza, Crossing Republik, Ghaziabad India, 201016",
    description: "Working with businesses across the globe.",
  },
];

function Contact() {
  return (
    <div className="overflow-hidden bg-[#F7FBFF] text-slate-900">

      {/* HERO */}
      <section className="relative px-6 pb-16 pt-36 sm:pt-40 lg:px-8 lg:pb-20">

        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />

        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Let's Connect
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              Let's build something

              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 bg-clip-text text-transparent">
                meaningful together.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Have an idea, a challenge or a project in mind? Tell us about
              it and let's explore how we can turn it into a useful digital
              solution.
            </p>

          </motion.div>

        </div>
      </section>


      {/* CONTACT AREA */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            {/* CONTACT DETAILS */}
            <div className="space-y-4">

              {contactDetails.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/10"
                  >

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-emerald-500 shadow-lg shadow-orange-500/20">
                        <Icon size={21} className="text-white" />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-slate-900">
                          {item.title}
                        </p>

                        <p className="mt-1 font-semibold text-pink-600">
                          {item.value}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>


            {/* RESPONSE CARD */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-5 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-pink-50 to-emerald-50 p-6"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Clock3 size={20} className="text-orange-600" />
                </div>

                <div>

                  <p className="text-sm font-bold text-slate-900">
                    Quick Response
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    We usually respond within 1 business day.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* VISUAL CARD */}
            <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-emerald-500 p-7 text-white">

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

              <div className="relative">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Start Something New
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Ideas become better
                  <span className="block text-white/80">
                    when shared.
                  </span>
                </h3>

                <div className="mt-7 flex items-center gap-3">

                  <div className="flex -space-x-2">

                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-pink-500 bg-gradient-to-br from-orange-400 via-pink-500 to-emerald-400 text-xs font-bold text-white"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                  <p className="text-xs text-white/70">
                    Ready to work with you
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-emerald-300/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-orange-900/10 sm:p-8 lg:p-10">

              <div className="mb-8">

                <div className="flex items-center gap-2">

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50">
                    <Send size={15} className="text-orange-600" />
                  </span>

                  <span className="text-sm font-bold text-orange-600">
                    Project Inquiry
                  </span>

                </div>

                <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                  Tell us about your project.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Fill in the details below and we'll get back to you with
                  the next steps.
                </p>

              </div>


              <form className="space-y-5">

                {/* NAME + EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                    />

                  </div>

                </div>


                {/* PHONE */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* COMPANY */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* SERVICE */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    What do you need?
                  </label>

                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>UI / UX Design</option>
                    <option>Cloud Solutions</option>
                    <option>Business Analytics</option>
                    <option>Digital Security</option>

                  </select>

                </div>


                {/* MESSAGE */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Tell us more
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your idea, goals or requirements..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-[#F7FBFF] px-4 py-3.5 text-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* SUBMIT */}
                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30"
                >

                  Send Project Inquiry

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:rotate-45"
                  />

                </button>


                <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">

                  <CheckCircle2
                    size={14}
                    className="text-emerald-500"
                  />

                  Your information stays private.

                </div>

              </form>

            </div>

          </motion.div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="px-6 pb-24 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-pink-500 to-emerald-500 px-6 py-14 text-center text-white shadow-2xl shadow-pink-500/20 sm:px-12"
        >

          <h2 className="text-3xl font-black sm:text-4xl">
            Your next big idea could start here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            No complicated process. Just a conversation about what you want
            to build.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
              Strategy
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
              Design
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
              Technology
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
              Growth
            </span>

          </div>

        </motion.div>

      </section>

    </div>
  );
}

export default Contact;