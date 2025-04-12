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
          Purpose
        </h3>

        <p style={{
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
            Too much Mathematica, not enough pencil and paper... This website is my attempt to reverse this trend. You can use it to practice being quick at math problems—it's like <a href="https://arithmetic.zetamac.com">Zetamac</a>, but for more complex problems.
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