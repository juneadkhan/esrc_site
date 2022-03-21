export const loadDOM = function (listOfJobs) {
    const $projectSection = $('#dribbble-shots');
  
    listOfJobs.forEach(project => {
      $projectSection.append(projectCard(project))
    });
  
  };
  
  export const projectCard = function(project) {
    return `
    
    <div class="dribbble-shot">
    

    <div class="grid grid-cols-2 gap-4">
    <div>
      <h4><a rel="noreferrer" target="_blank" href=${project.gitLink}>${project.name}</a></h4>
      <p>${project.description}</p>
      
      <ul class="flex items-center relative my-2" style="top: 2px;">
      <li class="mr-2">
      <a aria-label="GitHub" class="social-link-3" data-platform="github" href=${project.gitLink} target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: green">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#FCD6E9"/>
                  </svg>
      </a>
      </li>

      <li class="mr-2">
      <a aria-label="LinkedIn" class="social-link-3" data-platform="linkedin" href=${project.viewLink} target="_blank" rel="noreferrer">
      <svg class="svg-icon" viewBox="0 0 20 20">
      <path fill="none" d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
      <path fill="none" d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
    </svg>
      </a>
    </li>


      </ul>

                
      
    </div>

    <div>
    <a href=${project.viewLink}>
    <img src="${project.img}"  class="object-cover h-36 w-36 w-full">
    </a>
    </div>
  

    </div>



    </div>
    `
  }
  
  $(function () {
    loadDOM(projectData);
  });
  
  /*
  SEE DATA BELOW
  */
  
  const projectData = [
    {
    id: 1,
    name: "1. Online Form",
    description: "A website that lets you explore the world's best hidden crowdsourced photo spots using an interactive map based UI.",
    img: "https://www.webfx.com/wp-content/uploads/2021/10/google-forms.png",
    tag: "React, AWS",
    tagExtra: ", Mapbox",
    gitLink: "https://github.com/juneadkhan/Pixelpedia",
    viewLink: "https://pixelpediaio.com/"
  },
  {
    id: 2,
    name: "2. WhatsApp",
    description: "An iOS application that lets you enter the classes you took and then tracks and calculates your overall GPA.",
    img: "https://www.howtogeek.com/wp-content/uploads/2021/06/whatsapp-logo-hero.jpeg?height=200p&trim=2,2,2,2&crop=16:9",
    tag: "Swift, iOS",
    tagExtra: "",
    gitLink: "https://github.com/juneadkhan/GPACalculator",
    viewLink: "https://apps.apple.com/gb/app/gpace/id1534041246"

  },
  {
    id: 3,
    name: "3. Audio",
    description: "Recreation of the popular 2048 game using JavaScript and jQuery.",
    img: "https://ps.w.org/wp-call-button/assets/icon-256x256.png?rev=2133457",
    tag: "jQuery, JS",
    tagExtra: ", Bulma",
    gitLink: "https://github.com/juneadkhan/2048",
    viewLink: "https://juneadkhan.github.io/2048/"
  },
  {
    id: 4,
    name: "4. Email",
    description: "An easy to use declarative REPL for quick High-School Homework Calculations using Python, Google CoLab and Jupyter Notebook",
    img: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/23/posts/28195/image/gmail-vs-outlook-best-free-email-service-provider.jpg"
    , tag: "Python, Rgx",
    tagExtra: ", Colab",
    gitLink: "https://github.com/juneadkhan/Homework-REPL",
    viewLink: "https://colab.research.google.com/github/juneadkhan/Homework-REPL/blob/main/HomeworkREPL.ipynb"
    
  },
  {
    id: 5,
    name: "5. Postal",
    description: "Recreation of the popular 2048 game using JavaScript and jQuery.",
    img: "https://media.istockphoto.com/vectors/mailbox-icon-on-transparent-background-vector-id1283411603?k=20&m=1283411603&s=612x612&w=0&h=pPz48Ok9EuEPcNf77_VvYC0PyGefPqT0mYhw2B55pB8=",
    tag: "jQuery, JS",
    tagExtra: ", Bulma",
    gitLink: "https://github.com/juneadkhan/2048",
    viewLink: "https://juneadkhan.github.io/2048/"
  },
  ];