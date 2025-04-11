import React from 'react';

function About() {
  return (
    <div style={{
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
      color: "#333333"
    }}>
      <h2 style={{
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "1.5rem",
        color: "#A31F34"
      }}>
        About CalcSprint
      </h2>

      <blockquote style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "1rem",
        margin: "1.5rem 0 2rem 1rem",
        fontStyle: "italic",
        color: "#555"
      }}>
        "You may delay, but time will not, and lost time is never found again."
        <footer style={{ marginTop: "0.5rem", fontStyle: "normal", color: "#777" }}>
          — Benjamin Franklin
        </footer>
      </blockquote>

      <div style={{
        background: "white",
        padding: "1.5rem 2rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        border: "1px solid #E5E7EB"
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          marginBottom: "1rem",
          marginTop: 0
        }}>
          The Problem
        </h3>

        <p style={{
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
            As I was going through the Course X core classes at MIT, I often found myself shockingly slow at solving basic math problems. Considering that I used to be able to solve these same types of problems extremely quickly in middle/high school, this was a bit of a wake up call regarding the deterioration of my mathematical skills. Too much Mathematica, not enough pencil and paper... This website is my attempt to reverse this trend.
        </p>

        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          marginBottom: "1rem",
          marginTop: 0
        }}>
          Train Your Mathematical Reflexes
        </h3>

        <p style={{
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
            The problems are designed to help you do the following: 
        </p>

        <ul style={{
          listStyleType: "disc",
          paddingLeft: "2rem",
          marginBottom: "1.5rem"
        }}>
          <li style={{ marginBottom: "0.5rem" }}>Build speed and pattern recognitions</li>
          <li style={{ marginBottom: "0.5rem" }}>Boost confidence with basic operations</li>
          <li style={{ marginBottom: "0.5rem" }}>Free up mental resources for tougher problems</li>
          <li style={{ marginBottom: "0.5rem" }}>Lower exam anxiety</li>
        </ul>

        <p style={{
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
            I think the value of this extends well beyond just using this for MIT classes. There is something to be said about having very quick mental math ability, and I think this is a way to help develop that.
        </p>

        <h3 style={{
          fontSize: "1.25rem",
          fontWeight: "500",
          marginBottom: "1rem",
          marginTop: "2rem"
        }}>
          Contributing to the Project
        </h3>

        <p style={{
          lineHeight: "1.6",
          marginBottom: "1rem"
        }}>
          If you have any suggestions for problems or feature requests, please let me know! You can reach me at <a href="mailto:mcox340@mit.edu">mcox340@mit.edu</a>. I don't necessarily have the time to keep this very up to date right now, but I'll try to add more problems as I can. You can also contribute to the project by submitting pull requests on <a href="https://github.com/mcox3406/calculus-practice">GitHub</a> (this is preferred).
        </p>
      </div>
    </div>
  );
}

export default About; 