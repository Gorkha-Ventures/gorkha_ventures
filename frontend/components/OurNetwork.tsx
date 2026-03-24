"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  company: string;
  category: string;
  bg: string;
  initials: string;
  image?: string;
}

const members: Member[] = [
  { 
    name: "Abimanyu Saxena",
    role: "Co-Founder",
    company: "Scaler",
    category: "mentor",
    image: "/mentors/abhimanyu.png",
    bg: "#3a5a8c", 
    initials: "AS" 
  },
  { 
    name: "Parminder Singh", 
    role: "Founder",
    company: "Redscope.AI",
    category: "mentor",
    image: "/mentors/Parminder.jpeg", 
    bg: "#b84040", 
    initials: "PS" 
  },
  { 
    name: "Gaurav Agrawal", 
    role: "Founder & CEO",
    company: "Ascendra Advisors",
    category: "mentor",
    image: "/mentors/gaurav.jpg",
    bg: "#4a4a4a", 
    initials: "GA" 
  },
  { 
    name: "Divya Tak", 
    role: "Founder",
    company: "Joyus Studio",
    category: "mentor",
    image: "/mentors/divya.jpg",
    bg: "#5a7a5a", 
    initials: "DT" 
  },
  { 
    name: "Preeti Kumbhaj", 
    role: "Co-Founder", 
    company: "Jaagr Mind",
    category: "mentor",
    image: "/mentors/Preeti.png",
    bg: "#7a4a8c", 
    initials: "PK" 
  },
  { 
    name: "Shubham Pandey", 
    role: "Founder", 
    company: "OneLeap",
    category: "mentor",
    image: "/mentors/shubhan.png",
    bg: "#7a4a8c", 
    initials: "SP" 
  },
  { 
    name: "Dhrupad Shrivastava", 
    role: "Founder", 
    company: "Dumpum",
    category: "mentor",
    image: "/mentors/Dhrupad.png",
    bg: "#7a4a8c", 
    initials: "DS" 
  },
  {
    name: "Dr Rajneesh Negi",
    role: "Founder & Director, PMT India",
    company: "Ganga Entrepreneurs Network",
    category: "mentor",
    image: "/mentors/Rajneesh.png",  
    bg: "#7a4a8c", 
    initials: "RN" 
  },
  {
    name: "Mudit Goyal",
    role: "Head of AI Product",
    company: "McFee",
    category: "mentor",
    image: "/mentors/mudit.png",
    bg: "#7a4a8c", 
    initials: "MG" 
  },
  {
    name: "Dr.Srishty P. Gajbhiye",
    role: "Chief Emotional Health Architect",
    company: "Jaagr Mind",
    category: "mentor",
    image: "/mentors/Shrishti.png",
    bg: "#7a4a8c", 
    initials: "SG" 
  },
  {
    name: "Jyoti Malhotra",
    role: "Co-Founder",
    company: "SoJo Marketing",
    category: "mentor",
    image: "/mentors/jyoti.png",
    bg: "#7a4a8c", 
    initials: "JM" 
  },
  {
    name: "Apurv Singh Baghel",
    role: "Group Manager",
    company: "NEC Corp",
    category: "mentor",
    image: "/mentors/Apoorv.png",
    bg: "#7a4a8c", 
    initials: "ASB" 
  },
  {
    name: "Saurabh Saxena",
    role: "Co-Founder",
    company: "Jaagr Mind",
    category: "mentor",
    image: "/mentors/Saurabh.png",
    bg: "#7a4a8c", 
    initials: "SS" 
  },
  {
    name: "Vibhu Rishi",
    role: "Seior Product Manager",
    company: "Mcfee",
    category: "mentor",
    image: "/mentors/vibhu.png",
    bg: "#7a4a8c", 
    initials: "VR" 
  },
  {
    name: "Rachna K",
    role: "Head CSR",
    company: "IDFC Firdt Bank",
    category: "mentor",
    image: "/mentors/Rachna.png",
    bg: "#7a4a8c", 
    initials: "RK" 
  },
  {
    name: "Bhavik Rasyara",
    role: "Managing Partner",
    company: "Pravah Capital",
    category: "investor",
    image: "/investors/Bhavik.png",
    bg: "#7a4a8c", 
    initials: "BR" 
  },
  {
    name: "Saurabh Bhatnagar",
    role: "Co-Founder",
    company: "Flexifunnel",
    category: "mentor",
    image: "/mentors/SB.png",
    bg: "#7a4a8c", 
    initials: "SB" 
  },
  {
    name: "Abhineet Kumar",
    role: "Co-Founder",
    company: "Rockethealth",
    category: "mentor",
    image: "/mentors/Abhineet.png",
    bg: "#7a4a8c", 
    initials: "AB" 
  },
  {
    name: "Bindu Reddy",
    role: "Investor",
    company: "Dexter Capital",
    category: "investor",
    image: "/investors/Bindu.png",
    bg: "#7a4a8c", 
    initials: "BR" 
  },
];

const CARDS_PER_VIEW = 6;
const AUTO_SLIDE_MS = 2800;
const SLIDE_DURATION_MS = 520;
const CARD_WIDTH = 220;
const CARD_GAP = 20;

function Card({ member }: { member: Member }) {
  return (
    <article className="our-network-card">
      <div className="our-network-card-image">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="220px"
            style={{ objectFit: "cover" }}
            className="our-network-card-photo"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 600,
              color: "#fff",
              background: member.bg,
            }}
          >
            {member.initials}
          </div>
        )}
      </div>
      <div className="our-network-card-footer">
        <h3 className="our-network-card-name">{member.name}</h3>
        <p className="our-network-card-role">{member.role}</p>
        <p className="our-network-card-company">{member.company}</p>
      </div>
    </article>
  );
}

export default function OurNetwork() {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (members.length <= CARDS_PER_VIEW || isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, AUTO_SLIDE_MS);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setStartIndex((current) => (current + 1) % members.length);
      setIsAnimating(false);
    }, SLIDE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  const visibleMembers = useMemo(() => {
    const currentWindow = Array.from({ length: CARDS_PER_VIEW }, (_, offset) => {
      return members[(startIndex + offset) % members.length];
    });

    if (!isAnimating) {
      return currentWindow;
    }

    const nextIncoming = members[(startIndex + CARDS_PER_VIEW) % members.length];
    return [...currentWindow, nextIncoming];
  }, [startIndex, isAnimating]);

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#0d0d0d",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "40px",
          fontWeight: 500,
          color: "white",
          letterSpacing: "-0.03em",
          margin: "0 0 10px",
        }}
      >
        Our Network
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "white",
          margin: "0 0 48px",
        }}
      >
        A Network That Opens Doors
      </p>

      <div
        style={{
          width: `${CARDS_PER_VIEW * CARD_WIDTH + (CARDS_PER_VIEW - 1) * CARD_GAP}px`,
          maxWidth: "100%",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            alignItems: "stretch",
            transform: isAnimating ? `translateX(-${CARD_WIDTH + CARD_GAP}px)` : "translateX(0)",
            transition: isAnimating
              ? `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
              : "none",
          }}
        >
          {visibleMembers.map((member, index) => (
            <div key={`${member.name}-${startIndex}-${index}`} style={{ flexShrink: 0 }}>
              <Card member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}