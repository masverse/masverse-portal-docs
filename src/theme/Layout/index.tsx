import React, { useState } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import './stickyLink.css';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <Layout {...props} />

      <a
        href="https://chatgpt.com/g/g-68e4c6ad4aac8191af8bf724e40468b4-maschaingpt"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-link"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="pulse-ring"></div>
        <img
          src="/img/sticky-icon.png"
          alt="Sticky Icon"
          className="sticky-icon"
        />
        {showTooltip && (
          <div className="sticky-tooltip">
            Check out MasChainGPT
          </div>
        )}
      </a>
    </>
  );
}
