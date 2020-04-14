import React from 'react';
import { Link } from 'react-router-dom';

export const SkipToContent = () => {
  return (
    <Link tabIndex="1" className="skip-main" to="#maincontent">
      Skip to main content
    </Link>
  );
};
