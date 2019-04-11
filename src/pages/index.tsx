import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';
import LeaderForm from '../components/forms/LeaderForm';
import About from '../components/About';
import Books from '../components/Books';
import Events from '../components/Events';
import Team from '../components/Team';
import Video from '../components/Video';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Ecosystem from '../components/Ecosystem';

import * as sectionBg from '../img/main-bg.jpg';
import * as sectionBgAlt from '../img/sub-bg.jpg';
import * as mapBgAlt from '../img/map-alt.jpg';
import * as contactBg from '../img/bg-contact.jpg';

import * as bg01 from '../img/bg01.jpg';
import * as bg02 from '../img/bg02.png';
import * as icon01 from '../img/icon01.png';
import * as icon02 from '../img/icon02.png';
import * as icon03 from '../img/icon03.png';
// import * as icon04 from '../img/icon04.png';
import * as book01 from '../img/book01.png';
import * as book02 from '../img/book02.png';
import * as emilie from '../img/coaches/emilie.png';
import * as evonne from '../img/coaches/evonne.png';
import * as francisco from '../img/coaches/francisco.png';
import * as luciana from '../img/coaches/luciana-pic.jpg';
import * as paul from '../img/coaches/paul.png';
import * as jaroslav from '../img/coaches/jaroslav.png';
import * as Salimi from '../img/Salimi.png';
import * as logo0 from '../img/logo/0.jpg';
import * as logo1 from '../img/logo/1.jpg';
import * as logo2 from '../img/logo/2.jpg';
import * as logo3 from '../img/logo/3.jpg';
import * as logo4 from '../img/logo/4.jpg';
import * as logo5 from '../img/logo/5.jpg';
import * as logo6 from '../img/logo/6.jpg';
import * as logo7 from '../img/logo/7.jpg';
import * as logo8 from '../img/logo/8.jpg';

interface State {
  style: {
    opacity: number;
  }
};
const DATA = {
  en: {
    hero: {
      title: 'EXOSUMMITS DUBAI',
      description: () =>
        <>
          Are you an exponential organization?<br />
          Are you disrupting or being disrupted?<br />
          Are you future ready?'
        </>,
      btnLabel: 'Join the summit',
    },
    about: {
      title: 'TRANSFORM FOR THE FUTURE',
      description: () =>
        <>
          <a href="https://www.openexo.com" target="_blank">OpenExO</a> is a Global Transformation Ecosystem helping organizations, institutions and people to transform and unlock abundance<br />
          Have access to disruptive thinking, exponential technology insights and industry leaders
        </>,
      features: [
        {
          title: () => <>We do this <br />by helping clients</>,
          description: () => 'Fortune 500 businesses, small and medium sized businesses, cities of one million or more citizens, inspired individuals and community leaders',
          image: icon01
        },
        {
          title: () => <>Connect with the right<br />transformation services</>,
          description: () => 'Exponential Organizations (ExO) Sprints and On-Demand Services in the industry, technology or area of expertise you need',
          image: icon02
        },
        {
          title: () => <>And navigate<br />disruption</>,
          description: () =>
            <>
              We kickstart and accelerate your ideas and initiatives with the help of the <a href="https://www.openexo.com" target="_blank">OpenExO</a> Ecosystem, converting disruptive stress into disruptive opportunity
            </>,
          image: icon03
        }
      ]
    },
    books: {
      title: 'TRANSFORMATION AS A SERVICE',
      titleBg: bg02,
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
              ExO Summits inspires, educates and supports; leaders, intrapreneurs and entrepreneurs worldwide to get started with transformation journeys.<br />
              Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. <br />
              By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.<br />
              Be the first to learn about upcoming summits or organize a summit yourself
            </>,
        },
      ],
      button: {
        label: 'LEARN MORE',
        url: 'https://storage.googleapis.com/wzukusers/user-34745225/documents/5c987a606437dxmlkMHz/OpenExO%20Final.pdf'
      }
    },
    events: {
      title: 'Program',
      titleBg: bg01,
      image: icon01,
      items: [
        {
          title: () => <>20th April, 2019 <br /> ExO Summit Dubai</>,
          subtitle: 'Led by Salim Ismail',
          notes: 'Sessions include Keynote Speeches and Interactive Workshops Lunch & Refreshments are served',
          sessions: [
            {
              start: '08:00',
              end: '09:00',
              title: 'Registration and Networking Breakfast',
            },
            {
              start: '09:00',
              end: '10:00',
              title: 'Opening Remarks & Wakeup Keynote by Salim Ismail',
            },
            {
              start: '10:00',
              end: '12:00',
              title: 'Session 1: Core Initiatives',
            },
            {
              start: '12:00',
              end: '14:00',
              title: 'Session 2: Edge Initiatives',
            },
            {
              start: '15:00',
              end: '18:00',
              title: 'Session 3: Disruptive Business Model Development',
            },
            {
              start: '18:00',
              end: '19:00',
              title: 'Award Ceremony & Wrap-up by Salim Ismail',
            },
          ]
        },
        {
          title: () => <>19th April, 2019</>,
          sessionGroup: [
            {
              title: 'AM - Special 1-2-1 Meeting',
              subtitle: 'Exclusive to Pre-Approved Delegates Only',
              sessions: [
                'Salim Lsmail dedicates 1 hour to your company transformation, followed by a 2 hour personalised workshop with an Expert ExO coach',
                'This is an exclusive session, open to only 6 companies on a first-come first-serve basis, with a maximum of 5 delegates per company',
                'All requests to join this special session, must be made in advance to allocate appropriate time scheduling'
              ]
            },
            {
              title: 'PM - VIP Dinner Reception',
              subtitle: 'By Invitation Only',
              sessions: [
                {
                  start: '18:00',
                  end: '19:00',
                  title: 'Welcome Drinks & Networking',
                },
                {
                  start: '19:00',
                  end: '20:00',
                  title: 'Keynote by Salim Ismail & UAE Minister & Dignitaries',
                },
                {
                  start: '20:00',
                  end: '22:00',
                  title: 'Networking Dinner',
                },
              ]
            },
          ]
        },
        {
          title: () => <>18th April, 2019 <br /> OpenExO Launch</>,
          subtitle: 'Led by Invitation Only',
          sessions: [
            {
              start: '17:00',
              title: 'Launch of ExO Summit in the Middle East, Book-signing and Fireside chat between Futurist Tariq Querishy and Thought Leader Salim Ismail & followed by Live Debate with Industry Leaders and Global Organisations',
            },
          ]
        },
      ],
      button: {
        label: 'CONTACT US TO BE A PART OF ExO Summit Dubai',
        url: 'mailto:marketing@madtalks.com'
      }
    },
    video: {
      title: 'Salim\'s message is that "If you\'re not disrupting your own business or industry, then someone else already is."',
      image: Salimi,
      backgroundImage: bg02,
      button: {
        label: 'VIDEO: SALIM ISMAIL - TEDx',
        url: 'https://www.youtube.com/watch?v=mV0oKVOIGG4'
      }
    },
    form: {
      title: () => <>CONTACT</>,
      description: () => (<div className="rich-text-content common-rich-content-style has-content"><div><strong>G-02, DMC Building 5, Dubai Media City, P.O.Box # 502126, Dubai, UAE</strong></div><div><br/></div><div><strong>Phone: </strong>+971 55 229 7000</div><div><br/></div><div>If you have&nbsp;any questions, please do not hesitate to send us a message. We will&nbsp;reply within 24 hours.<br/></div><div><br/></div><div><br/></div></div>),
      labels: {
          required: 'indicates required',
        email: 'Email Address',
        name: 'Name',
        subject: `Subject`,
        phone: `Phone`,
        description: 'Would you like to be a part of OpenExO?',
        button: 'Submit'
      },
      fields: {
          groups: [
          {id: 8192, hidden: true },
      ],
      groupTitle: 'I want to know about:',
    },
      messages: {
          success: 'Thanks for sending your summit info!',
        error: 'Please try it later, again.'
      }
    },
    team: {
      title: 'The ExO Coaches',
      members: [
        {
          image: francisco,
          name: 'Francisco Palao',
          position: 'Vice-Chairman - OpenExO'
        },
        {
          image: jaroslav,
          name: 'Jaroslav Dokupil',
          position: 'CEO - OpenExO'
        },
        {
          image: emilie,
          name: 'Emilie Syndney-Smith',
          position: 'CEO - ExO Works'
        },
        {
          image: paul,
          name: 'Paul Epping',
          position: 'Master Disruptor - OpenExO'
        },
        {
          image: luciana,
          name: 'Luciana Ledesma',
          position: 'Head ExO Coach'
        },
        {
          image: evonne,
          name: 'Evonne Heyning',
          position: 'Director of Corporate Growth - OpenExO'
        },
      ]
    },
    ecosystem: {
      title: 'The OpenExO Ecosystem',
      description: () => <p className="text-white">The <a href="https://www.openexo.com" target="_blank">OpenExO</a> Ecosystem is a global transformation playground where 400+ exponential thought leaders, innovation coaches, disruption specialists, startup founders and tech industry gurus gather to solve strategic transformation challenges. We partner with ExO entities, accelerators, incubators, tech companies and technology specialists (artificial intelligence, blockchain, augmented & virtual reality, 3D printing, biotechnology, robotics, drones and more).</p>
    },
    partners: {
      title: `Dubai ExO Summit Partners & Sponsors`,
      sections: [{
        title: `Platinum Sponsor`,
        logos: [logo5]
        },
        {
          title: `Gold Sponsor`,
          logos: [logo8]
        },
        {
          title: `Strategic Partners`,
          logos: [logo1, logo2, logo3, logo4, logo6, logo7]
        }
      ]
    },
    footer: {
      main: {text: 'OpenExO', url: 'https://www.openexo.com/' },
      links: [
        {text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        {text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        {text: 'ExO Canvas', url: 'https://www.exocanvas.com/' },
      ],
      copyright: (year = new Date().getFullYear()) =>
        <>
          Building Exponential Organizations - <a href="https://www.openexo.com" target="_blank">OpenExO</a><sup>®</sup> {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
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
            title="ExO Summit Dubai"
            subtitle={DATA.en.hero.description()}
            backgroundImage={sectionBg}
            cta={{ text: DATA.en.hero.btnLabel, target: '#submit' }}
          />

          <About
            title={DATA.en.about.title}
            description={DATA.en.about.description}
            content={DATA.en.about.features}
          />

          <Books
            title={DATA.en.books.title}
            titleBg={DATA.en.books.titleBg}
            content={DATA.en.books.features}
            button={DATA.en.books.button}
          />

          <About
            content={DATA.en.about2.features}
          />

          <Video
            title={DATA.en.video.title}
            backgroundImage={DATA.en.video.backgroundImage}
            image={DATA.en.video.image}
            button={DATA.en.video.button}
          />

          <Team className="team-section" title={DATA.en.team.title} members={DATA.en.team.members}></Team>

          <Events
            titleBg={DATA.en.events.titleBg}
            button={DATA.en.events.button}
            content={DATA.en.events.items}
            title={DATA.en.events.title}
          />

          <Ecosystem title={DATA.en.ecosystem.title} description={DATA.en.ecosystem.description()} backgroundImage={mapBgAlt} />

          <Partners title={DATA.en.partners.title} sections={DATA.en.partners.sections} />

          <Services backgroundImage={sectionBgAlt} />
          <LeaderForm
              formBg={contactBg}
              title={DATA.en.form.title()}
              description={DATA.en.form.description()}
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
