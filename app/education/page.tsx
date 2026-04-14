"use client";

import Card from '@/app/components/Card';
import GradualSpacing from '@/app/components/ui/gradual-spacing';
import React from 'react';

const Education = () => {
  const interview = [
    {
      path: "/education/interview/prep2.jpg",
      title: "Mock Interview",
      description: "Real Interview Simulation. Under Pressure Brilliance. Our sessions include a 50-minute mock interview where we simulate real interview conditions, followed by 10 minutes of reflection. Together, we'll evaluate how you performed and come up with actionable insights to take your game to next level.",
      link: "https://topmate.io/quant_insider/601274"
    }, {
      path: "/education/other/4.png",
      title: "Buy Side Mock Interview",
      description: "We offer a buy-side mock interview service to help you prepare for your interview with a buy-side firm. We will simulate a real interview experience, including a 50-minute mock interview and 10 minutes of reflection. We will then provide you with feedback on your performance and help you improve your chances of success.",
      link: "https://topmate.io/quant_insider/1998365"
    }
  ];

  const partnership = [
    {
      path: "/education/referral/tut1.png",
      title: "Algorithmic Trading Certificate (ATC)",
      description: "Level up your career: Understanding advanced trading strategies, Impact of Machine Learning and methods for research into new alpha sources. The ATC is a career-enhancing professional certificate, that can be taken worldwide.",
      link: "https://quantshub.com/content/algorithmic-trading-certificate-atc-practitioner%E2%80%99s-guide-self-paced-quant-insider"
    }, {
      path: "/education/referral/tut2.png",
      title: "Machine Learning in Finance",
      description: "Master the most in-demand skill-set of the world's top financial institutions with one of the most practical, comprehensive and affordable courses in Financial Machine Learning.15+ Real-World Practical Applications",
      link: "https://finmlcourse.thinkific.com/courses/ML?ref=58b791"
    }, {
      path: "/education/referral/tut3.png",
      title: "QUANTITATIVE Analyst Developer Strat",
      description: "This is the first of a kind course, an introduction to various quanty businesses and jobs in sell and buy sides, in consulting and in fintech. If you work or plan to work in trading or in portfolio management, this course will explain the organizational structures that are used by the business. ",
      link: "https://www.qaprofession.com/courses/qaprofession?ref=df02ec"
    }, {
      path: "/education/referral/tut4.png",
      title: "QUANTY FINANCIAL BUSINESSES JOBS",
      description: "This is the first of a kind course, an introduction to various quanty businesses and jobs in sell and buy sides, in consulting and in fintech. If you work or plan to work in trading or in portfolio management, this course will explain the organizational structures that are used by the business. ",
      link: "https://www.qaprofession.com/courses/quanty-jobs?ref=df02ec"
    }
  ];

  const masterClass = [
    {
      path: "/education/masterclass/class1.png",
      title: "Derivative Pricing by Somdip Datta",
      description: "Introducing Somdip Datta, ex-VP of Quant at Goldman Sachs New York, with 12+ years of experience in the Quantitative finance domain.Overview of Heston Model. Comparison of Pricing Models . Heston Model",
      link: "https://topmate.io/quant_insider/928130"
    }, {
      path: "/education/masterclass/class2.png",
      title: "Options Trading -Reinventing Delta Neutral",
      description: "Rajesh Sriwastava is a seasoned trader with over 22 years of experience in the Indian financial markets. Understanding Delta in Options Trading. Balancing Risk and Reward. Position Sizing and Adjustment Techniques. Enhanced Risk Management.",
      link: "https://topmate.io/quant_insider/1229288"
    }, {
      path: "/education/masterclass/class3.avif",
      title: "ML for Trading by Hariom Tatsat",
      description: "VP of Quant at Barclay Investment Bank NYC. Co-author of Machine Learning and Data Science Blueprints for Finance.Supervised Learning, NLP for Sentiment Analysis, Reinforcement Learning",
      link: "https://topmate.io/quant_insider/915028"
    }
  ];

  const otherPackages = [
    {
      path: "/education/other/1.png",
      title: "Resume Writing / Review",
      description: "Beat 99% of the applicants and let your resume take you to the interview table. You will learn to make tailored resume for Job Description, effective use of keywords, and bullet points to create an resume.",
      link: "https://topmate.io/quant_insider/587767"
    }, {
      path: "/education/other/2.png",
      title: "Quant Job Search Assistance",
      description: "Leverage research-backed tactics and frameworks to guarantee job search domination. Take command of your career trajectory! Within these 30 min sessions, we will assist you in developing a job search strategy.",
      link: "https://topmate.io/quant_insider/778644"
    }, {
      path: "/education/other/3.png",
      title: "1:1 Consultation",
      description: "Connect 1:1 with us over a video call to discuss anything you want to related to preparation for Quant profiles. Get your Queries Addressed. Personalized career growth plan, resources",
      link: "https://topmate.io/quant_insider/587766"
    }
  ];

  return (
    <>
      {/* Interview Prep */}
      <div className='px-5 sm:px-16 mt-10 sm:mt-14'>
        <GradualSpacing
          className="text-center text-2xl font-extrabold tracking-tighter text-black md:text-7xl font-serif"
          text="Quant Interview Preparation"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-4 mt-2 sm:mt-5">
          {interview.map((card, index) => (
            <div key={index} className="flex">
              <Card
                path={card.path}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Courses */}
      <div className='px-5 sm:px-16 mt-10 sm:mt-14'>
        <GradualSpacing
          className="text-center text-2xl font-extrabold tracking-tighter text-black md:text-7xl font-serif"
          text="Quantitative Finance Partnership Courses"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 sm:mt-5">
          {partnership.map((card, index) => (
            <div key={index} className="flex">
              <Card
                path={card.path}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Master Class */}
      <div className='px-5 sm:px-16 mt-10 sm:mt-16'>
        <GradualSpacing
          className="text-center text-2xl font-extrabold tracking-tighter text-black md:text-7xl font-serif"
          text="Quant Finance MasterClass"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 sm:mt-5">
          {masterClass.map((card, index) => (
            <div key={index} className="flex">
              <Card
                path={card.path}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Other Packages */}
      <div className='px-5 sm:px-16 mt-10 sm:mt-16 mb-10'>
        <GradualSpacing
          className="text-center text-2xl font-extrabold tracking-tighter text-black md:text-7xl font-serif"
          text="Quant Career Services & Mentorship"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 sm:mt-5">
          {otherPackages.map((card, index) => (
            <div key={index} className="flex">
              <Card
                path={card.path}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;

