/**
 * PORTFOLIO DATA CONFIGURATION
 * Hadiuz Zaman - AI/ML Developer Portfolio
 * 
 * Update this file to easily modify your profile, links, skills, projects, and education.
 */

export const personalInfo = {
  name: "Hadiuz Zaman",
  monogram: "HZ",
  title: "AI/ML Developer in Progress",
  tagline: "Building Intelligent Things.",
  bioShort: "Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning at Dayananda Sagar University. Focused on predictive modeling, intelligent software, and high-impact machine learning solutions.",
  currentStatus: "Open for Research & Collaborations",
  graduationYear: "2028",
  institution: "Dayananda Sagar University",
  degree: "B.Tech in Computer Science and Engineering (AI & ML)",
  location: "Bengaluru, India",
  email: "hadiuzzaman.dev@gmail.com", // Configurable email
  github: "https://github.com/HadiuzZaman122",
  linkedin: "https://www.linkedin.com/in/hadiuz-zaman/", // Configurable LinkedIn
  resumeUrl: "#", // Update with your resume PDF link when available
};

export const aboutData = {
  heading: "Curious by Nature. Building for the Future.",
  paragraphs: [
    "I am an undergraduate student pursuing a B.Tech in Computer Science & Engineering with an Artificial Intelligence and Machine Learning specialization at Dayananda Sagar University (Class of 2028).",
    "My technical journey revolves around understanding mathematical foundations of machine learning and transforming raw data into reliable predictive systems. I enjoy architecting intelligent applications that combine rigorous statistical learning with clean, responsive user interfaces.",
    "From training regression and decision tree models to engineering end-to-end interactive tools in Streamlit and React, I am constantly exploring the edge where algorithm meets practical execution."
  ],
  pillars: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Developing predictive algorithms, regression pipelines, and evaluating classification and tree-based models on real-world datasets.",
      icon: "Brain"
    },
    {
      id: "data-systems",
      title: "Predictive Analytics",
      description: "End-to-end exploratory data analysis, feature engineering, and extracting actionable patterns from historical datasets.",
      icon: "TrendingUp"
    },
    {
      id: "software-dev",
      title: "Software & Python",
      description: "Writing modular, maintainable Python code, building algorithmic workflows, and structuring robust developer pipelines.",
      icon: "Code2"
    },
    {
      id: "interactive-ui",
      title: "Interactive Interfaces",
      description: "Crafting intuitive web frontends with Streamlit and modern React to make complex ML models accessible and interactive.",
      icon: "Layout"
    }
  ]
};

export const projectsData = [
  {
    id: "energy-forecasting",
    title: "AI-Based Energy Consumption Forecasting",
    category: "Machine Learning & Analytics",
    featured: true,
    description: "An end-to-end predictive machine learning platform designed to forecast future energy consumption patterns utilizing historical time-series datasets. Implements multi-model benchmark evaluation across Linear Regression, Decision Trees, and Random Forest architectures to evaluate variance, residuals, and accuracy.",
    extendedDetails: {
      problemStatement: "Power grids and smart utilities require precise demand forecasts to mitigate brownouts, balance electrical loads, and minimize wasteful generation overhead.",
      pipeline: [
        "Historical dataset ingestion & datetime feature decomposition",
        "Handling outliers, scale normalization, and train-test partitioning",
        "Multi-model training: Linear Regression, Decision Tree Regressor, Random Forest Regressor",
        "Performance evaluation using MAE, MSE, RMSE, and R² Score metric matrices",
        "Deployment to an interactive Streamlit UI for ad-hoc parameter querying"
      ],
      modelsCompared: [
        { name: "Linear Regression", r2Score: "Baseline", strengths: "Interpretable linear coefficients, fast inference" },
        { name: "Decision Tree", r2Score: "Moderate", strengths: "Captures non-linear seasonality and threshold triggers" },
        { name: "Random Forest", r2Score: "Optimal", strengths: "Ensemble bagging reduces overfitting and stabilizes variance" }
      ]
    },
    tags: ["Python", "Machine Learning", "scikit-learn", "Streamlit", "Pandas", "Random Forest"],
    githubUrl: "https://github.com/HadiuzZaman122/AI-Based-Energy-consumption-forecasting-usin-ML",
    liveUrl: null, // Set when deployed online
    metrics: [
      { label: "Architecture", value: "Multi-Model Ensemble" },
      { label: "Core Library", value: "scikit-learn" },
      { label: "Interface", value: "Streamlit UI" },
      { label: "Status", value: "Completed & Documented" }
    ]
  },
  {
    id: "future-project-1",
    title: "Deep Vision & Neural Architectures",
    category: "Computer Vision / Deep Learning",
    featured: false,
    isPlaceholder: true,
    description: "Upcoming research project exploring neural network architectures for computer vision pattern recognition and edge detection. Model benchmarking and dataset curation currently in progress.",
    tags: ["Python", "PyTorch / TensorFlow", "Computer Vision", "Neural Networks"],
    githubUrl: "https://github.com/HadiuzZaman122",
    liveUrl: null,
    metrics: [
      { label: "Status", value: "In Pipeline" },
      { label: "Focus", value: "Image Analytics" }
    ]
  },
  {
    id: "future-project-2",
    title: "Intelligent Agent & NLP Pipeline",
    category: "Natural Language Processing",
    featured: false,
    isPlaceholder: true,
    description: "Upcoming experimentation with semantic search, token embedding spaces, and specialized language retrieval workflows.",
    tags: ["NLP", "Python", "Embeddings", "FastAPI"],
    githubUrl: "https://github.com/HadiuzZaman122",
    liveUrl: null,
    metrics: [
      { label: "Status", value: "Concept Stage" },
      { label: "Focus", value: "Semantic Intelligence" }
    ]
  }
];

export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming & Scripting",
      skills: [
        { name: "Python", level: "Primary Language", note: "Object-oriented, scripting, data manipulation, algorithm design" },
        { name: "JavaScript", level: "Frontend Logic", note: "ES6+, asynchronous APIs, interactive event handling" },
        { name: "HTML5 & CSS3", level: "UI Foundation", note: "Semantic structures, Flexbox, Grid, custom styling, animations" }
      ]
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      skills: [
        { name: "scikit-learn", level: "Modeling", note: "Supervised algorithms, regression, tree-based estimators" },
        { name: "Linear Regression", level: "Foundational ML", note: "Parametric trend estimation and coefficient evaluation" },
        { name: "Decision Trees & Random Forest", level: "Ensemble ML", note: "Non-linear partitioning and variance reduction via bagging" },
        { name: "Model Evaluation", level: "Performance Testing", note: "R² metrics, RMSE, MAE, residual distribution diagnostics" }
      ]
    },
    {
      id: "data-science",
      name: "Data Science & Visualization",
      skills: [
        { name: "Data Preprocessing", level: "Data Engineering", note: "Handling missing values, outlier detection, feature encoding" },
        { name: "Streamlit", level: "Rapid Deployment", note: "Building interactive data applications and dashboards" },
        { name: "Exploratory Data Analysis", level: "Analytical Insight", note: "Feature distributions, correlation heatmaps, data profiling" }
      ]
    },
    {
      id: "web-dev",
      name: "Web Development",
      skills: [
        { name: "React", level: "Component Architecture", note: "State management, modular UI composition, hooks" },
        { name: "Modern CSS & Responsive Design", level: "Visual Craft", note: "Adaptive layouts, glassmorphism, fluid typography, dark mode" },
        { name: "Framer Motion", level: "Motion Design", note: "Spring physics, viewport transitions, staggered reveals" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Environments",
      skills: [
        { name: "Git", level: "Version Control", note: "Branching workflows, commits, code versioning" },
        { name: "GitHub", level: "Collaboration", note: "Remote repository hosting, issues, documentation" },
        { name: "VS Code", level: "IDE", note: "Customized extensions, debugging, linting setup" },
        { name: "Jupyter Notebooks", level: "Interactive Analysis", note: "Iterative experimentation, documentation, charting" }
      ]
    }
  ]
};

export const educationJourney = [
  {
    period: "2024 — 2028 (Expected)",
    title: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "Dayananda Sagar University",
    location: "Bengaluru, India",
    status: "Currently Pursuing",
    highlight: "Core focus on Artificial Intelligence, Machine Learning algorithms, Data Structures, Discrete Mathematics, and Software Architecture.",
    tag: "Higher Education"
  },
  {
    period: "Pre-University / High School",
    title: "Science & Computer Foundations",
    institution: "Foundational Academic Journey",
    location: "India",
    status: "Completed",
    highlight: "Developed a deep interest in mathematics, logic, and early computer programming.",
    tag: "Milestone"
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about        - View concise developer summary\n  • status       - Current academic status & availability\n  • skills       - Summary of verified technical stack\n  • projects     - Inspect featured repository details\n  • contact      - Quick communication endpoints\n  • clear        - Clear the terminal screen\n  • matrix       - Activate Matrix digital stream\n  • secret       - Unlock developer easter egg!",
  about: "Hadiuz Zaman // B.Tech CSE (AI & ML) @ Dayananda Sagar University (2028).\nPassionate about machine learning models, predictive intelligence, and modern creative web interfaces.",
  status: "STATUS: Active Student Developer // Cohort 2028 // Seeking Research, Collaborative Open-Source, and Internship Opportunities.",
  skills: "STACK: Python, scikit-learn, Random Forest, Decision Trees, Streamlit, JavaScript, React, Git, GitHub.",
  projects: "FEATURED REPO: AI-Based Energy Consumption Forecasting\nURL: https://github.com/HadiuzZaman122/AI-Based-Energy-consumption-forecasting-usin-ML\nMulti-model ML pipeline predicting energy loads using historical data.",
  contact: "EMAIL: hadiuzzaman.dev@gmail.com\nGITHUB: https://github.com/HadiuzZaman122\nLINKEDIN: https://www.linkedin.com/in/hadiuz-zaman/"
};
