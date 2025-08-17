"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/css/Metrics.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MetricsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const metrics = document.querySelectorAll(".metric");

    gsap.from(metrics, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="metrics-cont">
      <h1>Success Metrics & Tangible Outcomes</h1>
      <div className="metrics">
        <div className="metric">
          <h3>1. Adoption & Integration of the Codified Culture Model</h3>
          <ul>
            <li>360 feedback assessment for all employees</li>
            <li>
              Performance evaluations and self-assessment tools (for leaders,
              managers, team members)
            </li>
            <li>New management training</li>
            <li>Annual review conversations</li>
          </ul>
        </div>
        <div className="metric">
          <h3>2. Behavioral Rollout</h3>
          <ul>
            <li>
              5+ organizational rituals anchored in leadership behaviors
              (retreat sessions, all-staff meetings, weekly behavior launches,
              manager training cohorts, OKR setting
            </li>
            <li>
              Ongoing monthly deep-dives into behaviors led by leadership team
            </li>
          </ul>
        </div>
        <div className="metric">
          <h3>3. Early Cultural Shifts</h3>
          <ul>
            <li>
              Clear adoption of leadership model language across functions
              (“Passion for our Mission”, “Straight Talk,” “Laser Focus,” etc.
            </li>
            <li>
              Increased employee engagement and understanding of mission and
              values via 360 Assessment and Leadership Storytelling sessions
            </li>
          </ul>
        </div>
      </div>
      <div className="other-metrics">
        <div className="other-metric">100% System integration</div>
        <div className="other-metric">5+ Culture rituals activated</div>
        <div className="other-metric">92% Uptake in Leadership Language</div>
        <div className="other-metric">Culture shifts within 90 days</div>
      </div>
    </div>
  );
};

export default MetricsSection;
