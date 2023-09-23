import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Footer.css";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Template by{" "}
        <a
          style={{ color: theme.tertiary }}
          href="https://github.com/hhhrrrttt222111/developer-portfolio"
        >
          hhhrrrttt222111
        </a>
      </p>
    </div>
  );
}

export default Footer;
