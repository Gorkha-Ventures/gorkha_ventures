"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  bg: string;
  initials: string;
  image?: string;
}

const members: Member[] = [
  { 
    name: "Abimanyu Saxena",
    role: "Co-Founder, Scaler",
    image: "https://framerusercontent.com/images/6vQLKCrbJ5Zj4kEiUPzTSwWxmLQ.jpg?width=2268&height=4032",
    bg: "#3a5a8c", 
    initials: "AS" 
  },
  { 
    name: "Parminder Singh", 
    role: "Founder, Tempers AI",
    image: "https://framerusercontent.com/images/DCtW3lLtTM35ABrYoEuBt0qjC8.jpg?width=2268&height=4032", 
    bg: "#b84040", 
    initials: "PS" 
  },
  { 
    name: "Gaurav Agrawal", 
    role: "Founder & CEO, Ascendra Advisors", 
    image: "https://framerusercontent.com/images/0fGrCd9nA2HPeC5F3r48EEU0hw.jpg?width=2119&height=3867",
    bg: "#4a4a4a", 
    initials: "GA" 
  },
  { 
    name: "Divya Tak", 
    role: "Founder, Joyus Studio", 
    image: "https://framerusercontent.com/images/lJNh5UBNMKTUklAVu5xj6ZuJIU.jpeg?width=1402&height=1784",
    bg: "#5a7a5a", 
    initials: "DT" 
  },
  { 
    name: "Riya Mehta", 
    role: "CTO, Finnovate Labs", 
    image: "https://framerusercontent.com/images/UQE6L2hcUnKd7rRDY9L3OsycKo.jpg?width=2268&height=4032",
    bg: "#7a4a8c", 
    initials: "RM" 
  },
  { 
    name: "Arjun Kapoor", 
    role: "MD, Sequoia India", 
    image: "https://framerusercontent.com/images/6vQLKCrbJ5Zj4kEiUPzTSwWxmLQ.jpg?width=2268&height=4032",
    bg: "#3a6a6a", 
    initials: "AK" 
  },
  { 
    name: "Sneha Bose", 
    role: "CEO, GreenPath Ventures", 
    image: "https://framerusercontent.com/images/ZnmU6KfWeNClmiFBYmEYSfaD6k.jpg?width=2140&height=2611",
    bg: "#8c5a3a", 
    initials: "SB" 
  },
  { 
    name: "Vikram Nair", 
    role: "Partner, Lightspeed",
    image: "https://framerusercontent.com/images/OSU29EXIYnoRuF7xb9vx4RbgOQ.jpg?width=3024&height=2949", 
    bg: "#4a5a8c", 
    initials: "VN" 
  },
];

const CARDS_PER_VIEW = 6;
const AUTO_SLIDE_MS = 2800;
const SLIDE_DURATION_MS = 520;
const CARD_WIDTH = 200;
const CARD_GAP = 20;

function Card({ member }: { member: Member }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "200px",
        cursor: "pointer",
      }}
      className="group"
    >
      <div
        style={{
          width: "200px",
          height: "210px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
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
              transition: "transform 450ms cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
            className="group-hover:scale-105"
          >
            {member.initials}
          </div>
        )}

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "18px 14px 14px",
            background: "linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.52) 100%)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#ffffff",
              margin: "0 0 3px",
              letterSpacing: "-0.04em",
              lineHeight: "1.4",
            }}
          >
            {member.name}
          </h3>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: "1.4",
            }}
          >
            {member.role}
          </p>
        </div>
      </div>
    </div>
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