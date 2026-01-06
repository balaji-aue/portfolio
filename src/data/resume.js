const resume = {
  name: "Balaji Palanisamy",
  headline: "Associate Lead Software Engineer",
  contact: {
    phone: "+91-6382877741",
    email: "balaji.aue@gmail.com",
    location: "Chennai, INDIA",
    experience: "6 Years 8 Months"
  },
  summary: `Full-stack Software Engineer with 6+ years of experience developing scalable web applications and
microservices. Expertise in system design, secure authentication, performance optimization, and cloud-based
data integrations. Experienced in cross-cultural environments, driving innovation and achieving business goals.`,
  skills: [
    "Java", "Spring Boot", "Microservices", "RabbitMQ", "Redis", "MongoDB", "Kubernetes", "Docker", "Helm", "Collibra", "SQL", "Node.js", "React", "Express", "Snowflake", "GCP", "Cypress", "Mocha", "ElasticSearch", "CI/CD"
  ],
  experience: [
    {
      company: "BigID",
      role: "Associate Lead Software Engineer",
      date: "Feb 2024 - Nov 2025",
      projects: [
        {
          title: "BigID Collibra Integration",
          bullets: [
            "Exchanged scanned metadata between BigID and Collibra platforms.",
            "Migrated Spring Boot app to support multitenancy.",
            "Designed multithreading flow used in unified SDK for metadata exchange."
          ]
        },
        {
          title: "Data Insights Studio & Data Pipeline",
          bullets: [
            "Built ETL to transform BigID raw data to business standards for dashboards and reporting.",
            "Designed secure UI and backend flows for Snowflake OAuth2 & RSA key auth using ExpressJS and ReactJS.",
            "Optimized Snowflake and GCP BigQuery queries and improved Node/Nest applications processing large-scale data.",
            "Expanded integration tests in CI/CD using Cypress and Mocha.",
            "Improved Augment code AI tool integration with Jira and Confluence."
          ]
        }
      ]
    },
    {
      company: "Expleo",
      role: "Senior Software Engineer",
      date: "Apr 2022 - Jan 2024",
      projects: [
        {
          title: "BigID Collibra integration",
          bullets: [
            "Redesigned Java Spring Boot application to integrate evolving data sources and mapping to Collibra metadata standards.",
            "Enhanced tests using Loadmill and enabled Docker containerization with Helm for Kubernetes/OpenShift deployments."
          ]
        }
      ]
    },
    {
      company: "Lucid Technologies & Solutions",
      role: "Senior Developer",
      date: "Apr 2020 - Mar 2022",
      projects: [
        {
          title: "Relevancy Search",
          bullets: [
            "Implemented scalable search engine with Spring Boot using Collibra’s TVC queries and Elasticsearch for relevance-ranked asset search."
          ]
        }
      ]
    },
    {
      company: "Pickyourtrail",
      role: "Software Development Engineer I",
      date: "Dec 2018 - Apr 2020",
      projects: [
        {
          title: "Travel Itinerary App",
          bullets: [
            "Built end-to-end About Us page and UI features using React, Java Spring Boot, and MongoDB."
          ]
        }
      ]
    },
    {
      company: "Mountblue Technologies",
      role: "Software Development Engineer",
      date: "Aug 2018 - Nov 2018",
      projects: [
        {
          title: "Training & Deployment",
          bullets: [
            "Trained in HTML, CSS and Java and contributed to production deployments at Pickyourtrail."
          ]
        }
      ]
    },
    {
      company: "BizRuntime IT Services Pvt. Ltd",
      role: "Trainee Software Engineer",
      date: "Oct 2017 - Mar 2018",
      projects: [
        {
          title: "Interactive Map UI",
          bullets: [
            "Developed an interactive web application featuring map-based UI using Angular 2 and OpenLayers JS."
          ]
        }
      ]
    }
  ],
  education: {
    degree: "B.E. | Automobile Engineering",
    year: "2015",
    institute: "K.S.R College of Engineering - affiliate Anna University Chennai"
  },
  projects: [
    {
      title: "BigID Collibra Integration",
      desc: "Metadata exchange, multitenancy adaption, multithreading SDK flows.",
      tech: ["Java", "Spring Boot", "Multitenancy", "Collibra"]
    },
    {
      title: "Data Insights Studio & Pipeline",
      desc: "ETL & secure data flows for Snowflake with OAuth2 & RSA auth, query optimizations.",
      tech: ["Node.js", "Express", "React", "Snowflake"]
    },
    {
      title: "Relevancy Search",
      desc: "Scalable relevance-ranked search using Elasticsearch and Spring Boot.",
      tech: ["Spring Boot", "Elasticsearch"]
    }
  ]
};

export default resume;
