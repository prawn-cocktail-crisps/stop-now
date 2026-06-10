"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens in a counselling session?",
    a: "In a one to one video call, our counsellor will ask you about your specific circumstances and your current drinking habits. The counsellor will then talk to you about the beliefs that you hold about alcohol, and work with you to change those beliefs. The session generally takes a few hours, with breaks. At the end of the session you will be confident to live your life without drinking. You are free throughout the session to ask questions and the session will be tailored to your personal circumstances. The session is by video call and we ask that you call from a location where you will be free of distractions, no family, no phones, no interruption.",
  },
  {
    q: "How does the guarantee work?",
    a: "We guarantee that you will end the session as a confident non-drinker. You will see that drinking is a negative activity and understand that alcohol is detrimental to your health and wellbeing. We will explain how alcohol acts on the body to make you drink more. If you end the session convinced that you want to keep drinking alcohol then we will refund you in full. We can't hold your hand for the rest of your life but we can change what you believe about alcohol.",
  },
  {
    q: "Why do I drink and how can Stop Now change that?",
    a: "Drinking alcohol is part of our culture and reinforced as a positive activity by drinkers. Marketing by the alcohol industry is aided by the media who repeat the myths that we need alcohol to celebrate, to socialise and to relax. Alcohol is addictive and becomes more addictive the more we drink. Our counselling session will allow you to understand how the substance causes us to drink more. As the session progresses you will find that the desire to drink will be replaced by the desire to avoid it.",
  },
  {
    q: "What if I want to cut down?",
    a: "Drinking less alcohol is a good thing but because it is an addictive drug that causes drinkers to drink more, many drinkers that have made the decision to cut down find that over time their drinking escalates. At Stop Now we equip our clients with the belief that alcohol is a harmful substance, essentially a poison. At the end of the session you will be a confident non-drinker, and of the opinion that cutting down is not an option. Abstaining from alcohol is easy when you see it as a negative activity.",
  },
  {
    q: "Is there a follow-up?",
    a: "Once the session is over we email each client with a summary of the session including a reminder of the key points. Think of this as the unvarnished truth about alcohol. Most media commentary about alcohol is written by drinkers and promotes drinking. Our session, and our follow-up commentary is written by non-drinkers and will remind you why you shouldn't drink. Following the session we will ask you for feedback. We want each client to live a life free of alcohol, without difficulty. If you want to contact us to tell us how that's going please send us an email or a WhatsApp message.",
  },
  {
    q: "What if I am not in the UK?",
    a: "We work globally and can conduct sessions at most times of the day. Message us on WhatsApp to discuss timing. Our invoices can be paid in pounds, dollars or euros.",
  },
  {
    q: "How do I book?",
    a: "We use WhatsApp Business. Please message us on +44 7404 437994 and we will arrange a time to talk. Our sessions are conducted in English.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section section-alt">
      <div className="section-inner">
        <p className="eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>
        <div className="faq">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <span className={`faq-icon${open === i ? " open" : ""}`} aria-hidden="true">
                  +
                </span>
              </button>
              <div className={`faq-a${open === i ? " open" : ""}`}>
                <p className="faq-a-inner">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
