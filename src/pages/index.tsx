import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';
import LeaderForm from '../components/forms/LeaderForm';
import About from '../components/About';
import Books from '../components/Books';

// import * as sectionBg from '../img/bg-61-img.jpg';
import * as sectionBg from '../img/bg-summit.jpg';
import * as sectionBgAlt from '../img/bg-mountain.jpg';

import * as icon01 from '../img/icon01.png';
import * as icon02 from '../img/icon02.png';
import * as icon03 from '../img/icon03.png';
import * as book01 from '../img/book01.png';
import * as book02 from '../img/book02.png';


interface State {
  style: {
    opacity: number;
  }
};
const DATA = {
  en: {
    hero: {
      title: 'EXO SUMMITS',
      description: () =>
        <>
          Are you an exponential organization?<br />
          Are you disrupting or being disrupted?<br />
          Are you future ready?'
        </>,
      btnLabel: 'Create your own Summit',
    },
    about: {
      title: 'TRANSFORM FOR THE FUTURE',
      description: () => 
        <>
          <p>OpenExO is a Global Transformation Ecosystem helping organizations, institutions and people to transform and unlock abundance</p>
          <p>Have access to disruptive thinking, exponential technology insights and industry leaders</p>
        </>,
      features: [
        {
          title: 'We do this by helping clients',
          description: () => 'Fortune 500 businesses, small and medium sized businesses, cities of one million or more citizens, inspired individuals and community leaders',
          image: icon01
        },
        {
          title: 'Connect with the right transformation services',
          description: () => 'Exponential Organizations (ExO) Sprints and On-Demand Services in the industry, technology or area of expertise you need',
          image: icon02
        },
        {
          title: 'And navigate  disruption',
          description: () => 'We kickstart and accelerate your ideas and initiatives with the help of the OpenExO Ecosystem, converting disruptive stress into disruptive opportunity',
          image: icon03
        }
      ]
    },
    books: {
      title: 'TRANSFORMATION AS A SERVICE',
      features: [
        {
          title: 'WHY do I need to transform?',
          image: book01
        },
        {
          title: 'HOW can I transform?',
          image: book02
        },
      ],
      button: {
        label: 'TRANSFORM WITH US',
        url: 'mailto:marketing@madtalks.com'
      }
    },
    about2: {
      features: [
        {
          description: () =>
            <>
              <p>ExO Summits inspires, educates and supports; leaders, intrapreneurs and entrepreneurs worldwide to get started with transformation journeys.</p>
              <p>Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. </p>
              <p>By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.</p>
              <p>Be the first to learn about upcoming summits or organize a summit yourself</p>
            </>,
          image: icon01
        },
      ]
    },
    form: {
      title: () => <>Organize a summit in your country</>,
      labels: {
        required: 'indicates required',
        email: 'Email Address',
        name: 'Name',
        location: 'Preferred Location of Summit',
        dates: 'Dates of the summit',
        description: 'Why would you like to host this summit?',
        linkedIn: 'LinkedIn URL',
        button: 'Create summit'
      },
      fields: {
        groups: [
          { id: 8192, hidden: true },
        ],
        groupTitle: 'I want to know about:',
      },
      messages: {
        success: 'Thanks for sending your summit info!',
        error: 'Please try it later, again.'
      }
    },
    footer: {
      main: { text: 'OpenExO', url: 'https://www.exolever.com/' },
      links: [
        { text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        { text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        { text: 'ExO Canvas', url: 'https://www.exocanvas.com/' },
      ],
      copyright: (year = new Date().getFullYear()) =>
        <>
          Building Exponential Organizations - OpenExO<sup>®</sup> {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
        </>
    }
  }
};
class IndexPage extends React.Component<any, State> {
  render() {
    return (

      <IndexLayout>
        <Page>
          <Hero
            title="ExO Summit"
            subtitle={DATA.en.hero.description()}
            backgroundImage={sectionBg}
            cta={{ text: DATA.en.hero.btnLabel, target: '#community' }}
          />

          <About
            title={DATA.en.about.title}
            description={DATA.en.about.description}
            content={DATA.en.about.features}
          />

          <Books
            title={DATA.en.books.title}
            content={DATA.en.books.features}
            button={DATA.en.books.button}
          />

          {/* <About
            content={DATA.en.about2.features}
          /> */}

          <LeaderForm
            formBg={sectionBgAlt}
            title={DATA.en.form.title()}
            labels={DATA.en.form.labels}
            fields={DATA.en.form.fields}
            messages={DATA.en.form.messages}
          />
          <Footer links={DATA.en.footer.links} copyright={DATA.en.footer.copyright} mainLogo={DATA.en.footer.main} />
        </Page>
        <style>
          {
            `body {
                transition: opacity ease 0.5s;
                opacity: 1;
              }`
          }
        </style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
