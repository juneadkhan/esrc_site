export const loadDOM = function (listOfJobs) {
    const $workSection = $('#workSection');
  
    listOfJobs.forEach(job => {
      $workSection.append(workCard(job))
  });
  };
  
  export const workCard = function(job) {
    return `
    <div class="workCard mb-8 md:flex">
    <div class="md:w-1/3 mr-12 flex-none">
    <figure class="image mb-3 mr-5">
    <a href=${job.link} target="_blank"><img src=${job.img} alt="Placeholder image"></a>
  </figure>
      <p class="m-0 mt-1 leading-normal text-xl text-white opacity-50 font-bold">${job.jobTitle}</p>
      <p class="m-0 mt-1 leading-normal text-base text-white opacity-50">${job.dates}</p>
    </div>
    <div class="mt-2 md:mt-0 text-purpleLight">
      <p class="m-0 leading-normal text-xl"> ${job.bullet1}</p>

      <span class="text-xs font-semibold inline-block mt-4 py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style="background: #252222">
      ${job.tag}<span class="hidden sm:inline">${job.tagExtra} </span>
    </span>
 
    </div>
  </div>

      `
  }
  
  $(function () {
    loadDOM(workData);
  });
  
  /*
  SEE DATA BELOW
  */
  
  const workData = [
    {
    id: 1,
    companyName: "JP Morgan Chase & Co",
    jobTitle: "Software Engineer Intern",
    dates: "June 2021 to August 2021",
    location: "Bournemouth, UK",
    img: "https://jpmcsso.jpmorgan.com/sso/custom/web/components/APEX/images/Logo2008_JPMC_White.png",
    link: "https://www.jpmorganchase.com/",
    bullet1: "Automated certification checks in application approval process by modernizing manual workflow via REST APIs,reducing processing time by 1200% while improving governance procedures for audit.",
    bullet2: "",
    tag: 'ADFS, Kerebros, Python, ServiceNow, Architecture Governance',
    tagExtra: ''

  
    
  }, 
  {
    id: 2,
    companyName: "London School of Hygiene and Tropical Medicine",
    jobTitle: "Associate Research Consultant",
    dates: "February 2021 to Present",
    location: "London, UK",
    img: "https://www.lshtm.ac.uk/themes/custom/lshtm/images/logo-white.svg",
    link: "https://www.lshtm.ac.uk/",
    bullet1: "Lead author of paper identifying subgroups within the elderly population by implementing Latent Class and Descriptive Analyses on the largest and most detailed scientific studies of sexual health in the world",
    bullet2: "",
    tag: "SAS, Python, Latent Class Analysis",
    tagExtra: ', Excel, JMP'
  
  
  },
  {
    id: 3,
    companyName: "Google Cloud",
    jobTitle: "Cloud Data Analyst Programme",
    dates: "July 2020 to August 2020",
    location: "Remote, USA",
    img: "https://www.aptusdatalabs.com/wp-content/uploads/2020/10/1200px-Google_Cloud_Logo.svg.png",
    link: "https://cloud.google.com/",
    bullet1: "Developed a forecasting ML model to predict and suggest optimal cab fare for NYC taxi cabs using BigQueryML and training over a 76GB public taxi trip dataset and optimized using feature engineering",
    bullet2: "",
    tag: "SQL, Python, Google Cloud Platform",
    tagExtra: ', Machine Learning, BigQuery'
  },
  {
    id: 4,
    companyName: "The University of North Carolina at Chapel Hill",
    jobTitle: "Preventative Maintenance Technician",
    dates: "February 2020 to July 2020",
    location: "Chapel Hill, NC",
    img: "https://d1gntqhqj0rbcs.cloudfront.net/assets/111/whiteunclogo.png",
    link: "https://www.unc.edu/",
    bullet1: "Ensured proper functioning of IT equipment for all UNC Classrooms by completing maintenance on Software and Hardware",
    bullet2: "",
    tag: "Hardware, Tech Support",
    tagExtra: ''
  }
  ];