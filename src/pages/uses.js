import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

const softwareContent = [
  {
    name: 'VS Code',
    description: 'Code editor',
    link: 'https://code.visualstudio.com/',
    subItem: {
      name: 'Theme',
      description: "SynthWave '84",
      link:
        'https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode',
    },
  },
  {
    name: 'Hyper',
    description: 'A colorful terminal with useful plugins',
    link: 'https://hyper.is/',
    subItem: {
      name: 'Shell',
      description: 'Oh My Zsh',
      link: 'https://ohmyz.sh/',
    },
  },
  {
    name: 'GitHub Desktop',
    description: 'A graphical user interface for Git repositories',
    link: 'https://desktop.github.com/',
  },
  {
    name: 'Droplr',
    description: 'A screenshot app that automatically creates a sharable link',
    link: 'https://droplr.com/',
  },
];

const hardwareContent = [
  {
    name: 'MacBook Pro "13',
    description: '2019, 2.4 GHz Quad-Core Intel i5, 16GB RAM',
    link: 'https://apple.com/',
  },
  {
    name: 'Apple Magic Keyboard and Trackpad',
    description:
      'Version 1 for both items as they come cheap but work very well',
    link: 'https://apple.com/',
  },
  {
    name: 'Nexstand',
    description: 'Laptop stand to save my neck',
    link: 'http://www.nexstand.com/',
  },
  {
    name: 'Anker 6-in-1 USB-C Adapter',
    description: 'HDMI, Ethernet, and USB-A adaptation',
    link: 'https://www.amazon.com/dp/B08C9HZ5YT/',
  },
];

export default function Uses() {
  return (
    <Layout>
      <SEO title="Daniel Uses" />
      <Row>
        <Col>
          <h1>What I Use</h1>
          <h2>as a frontend web developer &amp; designer</h2>
          <h3>Software</h3>
          {softwareContent.map(item => (
            <ul>
              <li>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>{' '}
                - {item.description}
                {item.subItem ? (
                  <ul>
                    <li>
                      {item.subItem.name} -
                      <a
                        href={item.subItem.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        &nbsp;{item.subItem.description}
                      </a>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Hardware</h3>
          {hardwareContent.map(item => (
            <ul>
              <li>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>{' '}
                - {item.description}
                {item.subItem ? (
                  <ul>
                    <li>
                      {item.subItem.name} -
                      <a
                        href={item.subItem.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        &nbsp;{item.subItem.description}
                      </a>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          ))}
        </Col>
      </Row>
    </Layout>
  );
}
