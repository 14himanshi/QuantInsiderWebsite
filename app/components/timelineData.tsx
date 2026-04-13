export interface TimelineEvent {
  title: string;
  dates: string;
  description: React.ReactNode;
  images: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    title: "Valletta, Malta",
    dates: "30 Sep - 2 Oct 2026",
    description: (
      <>
        Quant Insider Fintech Partner for &quot;The 22nd Quantitative Finance Conference&quot;{" "}
        <a href="https://www.wbstraining.com/events/qfc/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/22nd-Quantitative/img01.png",
      "./eventsection/22nd-Quantitative/img02.png"
    ]
  },
  {
    title: "New York City",
    dates: "21 May 2026",
    description: (
      <>
        Quant Insider Fintech Partner for &quot;The 4th Women in Quantitative Finance Americas Conference (WQFA)&quot;{" "}
        <a href="https://www.wbstraining.com/events/wqfa/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/4th-women/img01.png",
      "./eventsection/4th-women/img02.png"
    ]
  },
  {
    title: "London",
    dates: "30 Apr 2026",
    description: (
      <>
        Quant Insider Fintech Partner for &quot;The 9th Women in Quantitative Finance Conference (WQF)&quot;{" "}
        <a href="https://www.wbstraining.com/events/london-wqf-conference/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/9th-women/img01.png",
      "./eventsection/9th-women/img02.png"
    ]
  },
  {
    title: "Quant Strats",
    dates: "14 - 15 Oct 2025",
    description: (
      <>
        Quant insider is Partner for Quant Strats Europe 2025{" "}
        <a href="https://www.alphaevents.com/events-quantstratsuk" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/Strats/img01.png",
      "./eventsection/Strats/img02.png"
    ]
  },
  {
    title: "Trading India 2025",
    dates: "24 Sep 2025",
    description: "Quant Insider was Supporting organisation for FOW - Trading India 2025 at The St. Regis Mumbai.",
    images: [
      "./eventsection/Fow/img01.png",
      "./eventsection/Fow/img02.png"
    ]
  },
  {
    title: "Cornell University",
    dates: "19 Sep 2025",
    description: (
      <>
        Quant Insider To Sponsor Cornell Financial Engineering Manhattan 2025 Future of Finance & Ai Conference{" "}
        <a href="https://www.rebellionresearch.com/quant-insider-to-sponsor-cornell-financial-engineering-manhattan-2025-future-of-finance-ai-conference" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/Cornell/img01.png",
      "./eventsection/Cornell/img02.png"
    ]
  },
  {
    title: "Palermo, Italy",
    dates: "24 - 26 Sep 2025",
    description: (
      <>
        Fintech Partner at The 21st Quantitative Finance Conference{" "}
        <a href="https://www.wbstraining.com/events/qfc/" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline">
          Visit Now
        </a>
      </>
    ),
    images: [
      "./eventsection/Palermo/img01.png",
      "./eventsection/Palermo/img02.png"
    ]
  },
  {
    title: "QuantVision",
    dates: "22nd May 2025",
    description: "Sponsor at QuantVision 2025: Fordham's Quantitative Conference & Data Summit, Fordham University, Gabelli School of Business, Lincoln Center Campus",
    images: [
      "./eventsection/QuantVision/img01.jpg",
      "./eventsection/QuantVision/img02.jpg"
    ]
  },
  {
    title: "IIQC",
    dates: "16th May 2025",
    description: "Education Partners at LAQSA Indian Institutional Quant Conference – Bengaluru Edition 2025",
    images: [
      "./eventsection/IIQC/img01.png",
      "./eventsection/IIQC/img02.png"
    ]
  },
  {
    title: "NIT Tirchy",
    dates: "29 - 30 March 2025",
    description: "2 days Workshop at NIT Trichy on Statistical Arbitrage and Quant finance careers",
    images: [
      "./eventsection/NITT/nit01.jpg",
      "./eventsection/NITT/nit02.jpg",
      "./eventsection/NITT/nit03.jpg",
      "./eventsection/NITT/nit04.jpg"
    ]
  },
  {
    title: "Columbia University",
    dates: "20 March 2025",
    description: "Quant Insider Sponsored Columbia Mathematics of Finance (MAFN) 2025 Future of Portfolio Management & Artificial Intelligence Conference.",
    images: [
      "./eventsection/CI/ci01.jpeg",
      "./eventsection/CI/ci02.jpeg",
      "./eventsection/CI/ci03.jpg",
      "./eventsection/CI/ci04.jpg"
    ]
  },
  {
    title: "IISc Bangalore",
    dates: "3rd March 2025",
    description: "Quant Finance career and Market Making competition at IISC bangalore",
    images: [
      "./eventsection/IISC/IISC01.jpg",
      "./eventsection/IISC/IISC03.jpg"
    ]
  },
  {
    title: "IIT Kharagpur",
    dates: "9 Jan - 21 Jan 2025",
    description: "Quant Insider conducted Quant Quest (Algo Trading competition) at Kshitij Fest 2025 IIT Kharaghpur",
    images: [
      "./eventsection/IITKGP/kgp1.jpeg",
      "./eventsection/IITKGP/kgp2.jpeg"
    ]
  },
  {
    title: "BITS Pilani",
    dates: "November 2024",
    description: "Workshop on \"Quant finance careers and Algo trading\" at BITS Pilani HYD.",
    images: [
      "./eventsection/BITS/bits1.jpg",
      "./eventsection/BITS/bits5.jpg",
      "./eventsection/BITS/bits3.jpg",
      "./eventsection/BITS/bits4.jpg"
    ]
  },
  {
    title: "ISM Dhanbad",
    dates: "October 2024",
    description: "Workshop on \"Introduction to quantitative finance\" at IIT Dhanbad.",
    images: [
      "./eventsection/ISMD/ism1.jpg",
      "./eventsection/ISMD/ism2.jpg",
      "./eventsection/ISMD/ism5.jpg",
      "./eventsection/ISMD/ism4.jpg"
    ]
  },
  {
    title: "CHRIST University",
    dates: "April & July 2024",
    description: "Panelist at Christ University. Workshop at Christ Univeristy Bangalore on \"Price Action Trading and technical analysis\".",
    images: [
      "./eventsection/CH/ch1.jpeg",
      "./eventsection/CH/ch2.jpeg",
      "./eventsection/CH/ch3.jpeg",
      "./eventsection/CH/ch4.jpeg"
    ]
  },
  {
    title: "IIT Delhi",
    dates: "March 2024",
    description: "Workshop at IIT Delhi on \"Career in Quantiative Finance\".",
    images: [
      "./eventsection/IITD/iitd1.jpg",
      "./eventsection/IITD/iitd2.jpg",
      "./eventsection/IITD/iitd5.jpg",
      "./eventsection/IITD/iitd4.jpg"
    ]
  },
  {
    title: "IIT Madras",
    dates: "February 2024",
    description: "Workshop at IIT Madras on Statistical Arbitrate.",
    images: [
      "./eventsection/IITM/iitm1.jpeg",
      "./eventsection/IITM/iitm2.JPG"
    ]
  },
  {
    title: "BSE",
    dates: "January 2024",
    description: "Guest speakers at Option symposium, gave a session on 0DTE options trading at Bombay stock exchange.",
    images: [
      "./eventsection/BSE/bse1.jpg",
      "./eventsection/BSE/bse2.jpg",
      "./eventsection/BSE/bse3.jpg",
      "./eventsection/BSE/bse4.jpg"
    ]
  }
];

