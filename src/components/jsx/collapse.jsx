import React, { useState } from 'react';
import '../css/collapse.css';

function Collapse({ title, content, variant }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);
  const chevronClass = `fa-solid fa-chevron-down ${isOpen ? 'rotate' : ''}`;
  const contentClass = `collapse-content ${isOpen ? 'visible' : 'hidden'}`;
  const containerClass = `collapse-container${variant === 'about' ? ' about' : ''}`;

  return (
    <div className={containerClass}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <p className="collapse-title">{title}</p>
        <i className={chevronClass}></i>
      </div>

      <div className={contentClass}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
