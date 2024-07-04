const formsData = [
    {
      id: 1,
      data: {
        submitText: "Drop IN",
        title: "Idea Box",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "text", label: "College", name: "college"},
          { type: "tel", label: "Mobile Number", name: "mobile" },
          { type: "text", label: "Dept and Yr", name: "department&yr"},
          { type: "text", label: "Domain", name: "domain" },
          { type: "email", label: "Email", name: "email"},
          { type: "textarea", label: "Problem Statement", name: "problemstatement" },
          { type: "textarea", label: "Why Startup", name: "whystartup" },
          { type: "textarea", label: "Brief outline on your Startup Idea?", name: "briefoutlineonyourstartupidea" },
          { type: "text", label: "Attach Document (Drive Link)", name: "document" },
        ]
      }
    },
    {
      id: 2,
      data: {
        submitText: "Sumbit",
        title: "Know Your Valuation",
        fields: [
          { type: "text", label: "Name of the Startup", name: "startupname" },
          { type: "email", label: "Email", name: "email"},
          { type: "text", label: "Startup Domain", name: "startupdomain" },
          { type: "tel", label: "Mobile Number", name: "mobile" },
          { type: "select", label: "Is your Startup DPIIT Registered?", name: "registered", options: ["Yes", "No"] },
          { type: "select", label: "Type of Valuation", name: "typeofvaluation", options: ["pre-money valuation", "post-money valuation"] },
          { type: "text", label: "Attach Document (Drive Link)", name: "doc" },
        ]
      }
    },
    {
      id: 3,
      data: {
        submitText: "Sumbit",
        title: "Industry Support",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "email", label: "Email", name: "email"},
          { type: "text", label: "Organization", name: "organization" },
          { type: "tel", label: "Mobile Number", name: "mobile"},
          { type: "textarea", label: "Describe Your Problem Statement", name: "describeyourproblemstatement" },
          { type: "textarea", label: "What solution are you looking for?", name: "whatsolutionareyoulookingfor" },
          { type: "textarea", label: "Any other requirements?", name: "anyotherrequirements" },
          { type: "text", label: "Attach Document (Drive Link)", name: "attachdocument" },
        ]
      }
    },
    {
      id: 4,
      data: {
        submitText: "Sumbit",
        title: "Internships",
        fields: [
          { type: "text", label: "Name of the Applicant", name: "nameoftheapplicant" },
          { type: "email", label: "Email", name: "email"},
          { type: "tel", label: "Mobile Number", name: "mobile" },
          { type: "select", label: "Applicant Category", name: "applicantcategory", options: ["Student", "Individual", "Faculty"]},
          { type: "textarea", label: "Domain Interest", name: "domaininterest" },
          { type: "textarea", label: "Acquired Skills? Mention in brief", name: "skills" },
          { type: "textarea", label: "Internship Duration", name: "internshipduration" },
          { type: "text", label: "Submit your profile or bio (Drive Link)", name: "submityourprofileorbio" },
        ]
      }
    },
    {
      id: 5,
      data: {
        submitText: "Sumbit",
        title: "Skill Enhancement",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "tel", label: "Mobile Number", name: "mobile"},
          { type: "email", label: "Email", name: "email" },
          { type: "select", label: "Representing as?", name: "representing", options: ["Institution", "Individual", "Startup"]},
          { type: "text", label: "Name of the Organization", name: "organizationname" },
          { type: "text", label: "How long since inception?", name: "inception"},
          { type: "select", label: "Do you want to be onboarded as?", name: "onboard", options: ["Explorer", "Service Provider"] },
          { type: "select", label: "Duration of Hands-On Session", name: "session", options: ["1 Day", "3 Day", "1 Week", "1 Month"] },
          { type: "textarea", label: "Which field are you strong in?", name: "field" },
          { type: "textarea", label: "If Institute, What is the count of students interested in Hands-on Session", name: "count" },
        ]
      }
    },
    {
      id: 6,
      data: {
        submitText: "Sumbit",
        title: "Go-To-Market",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "text", label: "How many years since inception", name: "howmanyyearssinceinception" },
          { type: "select", label: "Type of Startups", name: "typesofstartups", options: ["Product Based", "Service Based"] },
          { type: "text", label: "GTM Experience in Other Countries? Mention if any", name: "gtmexperienceinothercountriesmentionifany" },
          { type: "text", label: "Upload Supporting Documents (Drive Link)", name: "document" },
          { type: "textarea", label: "What kind of support do you require from us specifically?", name: "description" },
        ]
      }
    },
    {
      id: 7,
      data: {
        submitText: "Sumbit",
        title: "Bose Series",
        fields: [
          { type: "text", label: "Name", name: "name" },
          { type: "text", label: "Mobile Number", name: "mobile" },
          { type: "text", label: "Email", name: "email" },
          { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual/Student", "Startup Aspirant" , "Faculty"] },
          { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "areyoupassionateinexploringthestartupecosystem", options: ["Yes", "No"] },
          { type: "text", label: "Upload your profile or bio? (Drive Link)", name: "document" },
        ]
      }
    },
        {
          id: 8,
          data: {
            submitText: "Sumbit",
            title: "COE's",
            fields: [
              { type: "text", label: "Name of the Institution / Startup / Industry", name: "nameoftheinstitution" },
              { type: "text", label: "Mobile Number", name: "mobilenumber" },
              { type: "email", label: "Email", name: "email" },
              { type: "text", label: "COE Domain", name: "coedomain" },
              { type: "textarea", label: "If you're an institution member, do you require establishing a new COE or revamping the existing one?", name: "institutiondescription" },
              { type: "textarea", label: "If you're a startup, do you have any experience in establishing a COE or plans to adapt your technology in institutions?", name: "startupdescription" },
              { type: "textarea", label: "If you're an industry member, why do you prefer establishing a COE in institutions?", name: "industrydescription" },
              { type: "text", label: "Submit Your Profile (Drive Link)", name: "document" },
              { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
              { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "exploringstartupecosystem", options: ["Yes", "No"] },
            ]
          }
        },
        {
          id: 9,
          data: {
            submitText: "Sumbit",
            title: "Admission Strategy",
            fields: [
              { type: "text", label: "Name of the institution", name: "nameoftheinstitution" },
              { type: "text", label: "Institution Category", name: "institutioncategory" },
              { type: "text", label: "How long since established the institution?", name: "howlongsinceestablishedtheinstitution" },
              { type: "tel", label: "Mobile Number", name: "mobilenumber" },
              { type: "email", label: "Email", name: "email" },
              { type: "text", label: "City", name: "city" },
              { type: "text", label: "Upload Supporting Institutional Documents (Drive Link)", name: "supportingdocuments" },
              { type: "textarea", label: "What kind of support do you require from us specifically?", name: "supportdescription" },
              { type: "text", label: "Submit Your Profile (Drive Link)", name: "profiledocument" },
              { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
              { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "exploringstartupecosystem", options: ["Yes", "No"] },
            ]
          }
        },
        {
          id: 10,
          data: {
            submitText: "Sumbit",
            title: "SAIN for Investor",
            fields: [
              { type: "text", label: "Name", name: "nameoftheInvestor", alignment: 'left' },
              { type: "tel", label: "Mobile Number", name: "mobilenumber", alignment: 'right' },
              { type: "email", label: "Email", name: "email", alignment: 'left' },
              { type: "text", label: "Organization", name: "org", alignment: 'right' },
              { type: "select", label: "Startup Stage", name: "startupstage", options: ["Seed Stage", "Early Stage", "Late Stage"], alignment: 'left' },
              { type: "text", label: "Your Portfolio", name: "portfolio", alignment: 'right' },
              { type: "text", label: "Interested Thrust Area?", name: "interestedthrustarea", alignment: 'left' },
              { type: "text", label: "Ticket Size", name: "ticketsize", alignment: 'right' },
              { type: "select", label: "Expected Return Type", name: "expectedreturntype", options: ["Equity", "Debt Financing"], alignment: 'center' },
            ]
          }
        },
        {
            id: 11,
            data: {
              submitText: "Sumbit",
              title: "SAIN for Startups",
              fields: [
                { type: "text", label: "Name", name: "name" },
                { type: "text", label: "Domain", name: "domain" },
                { type: "text", label: "College", name: "college"},
                { type: "email", label: "Email", name: "email"},
                { type: "tel", label: "Mobile Number", name: "mobile" },
                { type: "text", label: "Dept and Yr", name: "department&yr"},
                { type: "textarea", label: "Problem Statement", name: "problemstatement1" },
                { type: "textarea", label: "Why Startup", name: "whystartup1" },
                { type: "textarea", label: "Brief outline on your Startup Idea?", name: "briefoutlineonyourstartupidea" },
                { type: "text", label: "Attach Document (Drive Link)", name: "document1" },
              ]
            }
          },
          {
            id: 12,
            data: {
              submitText: "Sumbit",
              title: "Individual",
              fields: [
                { type: "text", label: "Name", name: "name" },
                { type: "text", label: "Department and Year", name: "departmentandyear" },
                { type: "text", label: "College", name: "college" },
                { type: "text", label: "Email", name: "email" },
                { type: "text", label: "Mobile Number", name: "mobilenumber" },
                { type: "text", label: "Domain", name: "domain" },
                { type: "textarea", label: "Problem Statement", name: "problemstatement" },
                { type: "textarea", label: "Why Startup", name: "whystartup" },
                { type: "textarea", label: "Brief Outline of Your Startup Idea", name: "startupidea" },
                { type: "textarea", label: "Upload Necessary Documents(Drive Link)", name: "supportingdocuments" }
              ]
            }
          },
          {
            id: 13,
            data: {
              submitText: "Sumbit",
              title: "Institute",
              fields: [
                { type: "text", label: "Name of the Institution", name: "nameoftheinstitution" },
                { type: "text", label: "Institution Category", name: "institutioncategory" },
                { type: "text", label: "How Long Since Established", name: "howlongsinceestablishment" },
                { type: "text", label: "Mobile Number", name: "mobilenumber" },
                { type: "text", label: "Email", name: "email" },
                { type: "text", label: "City", name: "city" },
                { type: "text", label: "Upload Supporting Documents(Drive Link)", name: "supportingdocuments" },
                { type: "textarea", label: "Specific Support Requirements", name: "supportrequirements" },
                { type: "text", label: "Submit Your Profile(Drive Link)", name: "profiledocument" },
                { type: "select", label: "What category do you belong to?", name: "category", options: ["Individual", "Student"] },
                { type: "select", label: "Are you passionate about exploring the startup ecosystem?", name: "passionateaboutstartupecosystem", options: ["Yes", "No"] },
              ]
            }
          },
          {
            id: 14,
            data: {
              submitText: "Sumbit",
              title: "Be A Mentor",
              fields: [
                { type: "email", label: "Email", name: "email" },
                { type: "text", label: "Name", name: "name" },
                { type: "tel", label: "Contact Number", name: "contactnumber" },
                { type: "text", label: "Location", name: "location" },
                { type: "text", label: "LinkedIn URL", name: "linkedin" },
                { type: "text", label: "Company Name", name: "companyname" },
                { 
                  type: "select", 
                  label: "Designation", 
                  name: "designation", 
                  options: [
                    "Agriculture & Agri tech",
                    "Software Technologies",
                    "Bio-Technology & Life Science",
                    "Education & Edutech",
                    "Healthcare & HealthTech",
                    "Information & Communication Technology (ICT)",
                    "IOT & Hardware Technology",
                    "Fintech & Finance",
                    "Manufacturing & Industrial",
                    "Fitness & Wellness",
                    "Entertainment & Media",
                    "Sector Agnostic",
                    "Fashion & Apparels",
                    "Food & Beverages"
                  ]
                },
                {
                  type: "select",
                  label: "Functional Expertise",
                  name: "functionalexpertize",
                  options: [
                    "Intellectual Property Rights",
                    "Business Strategy",
                    "Finance & Accounting",
                    "Adaptability and Resilience",
                    "Market Research and Analysis",
                    "Sales & Marketing",
                    "Human Resource & Talent Management",
                    "Leadership & Team Management",
                    "Product Development",
                    "Negotiation and Relationship Building",
                    "Networking & Business Development"
                  ]
                },
                { 
                  type: "select", 
                  label: "Are you willing to provide both technical and business/related guidance?", 
                  name: "willingness",
                  options: [
                    "Yes, I can offer both",
                    "I can primarily provide technical guidance",
                    "I can primarily provide business guidance"
                  ]
                },
                { 
                  type: "select", 
                  label: "Can you provide networking opportunities or make introductions to potential investors, partners, or customers?", 
                  name: "providenetworkingopportunities", 
                  options: [
                    "Yes, I have a strong network",
                    "I can make some relevant introductions",
                    "Networking is not my strong suit"
                  ]
                },
                { 
                  type: "select", 
                  label: "What is your preferred mode of mentoring?", 
                  name: "preferredmodeofmentoring", 
                  options: [
                    "Online session",
                    "Offline session",
                    "Both"
                  ]
                },
                { 
                  type: "select", 
                  label: "What is your preferred mentoring style?", 
                  name: "preferredmentoringstyle", 
                  options: [
                    "Hands-on involvement and guidance",
                    "Providing strategic advice and direction",
                    "Encouraging critical thinking",
                    "Connector" 
                  ]
                },
                { type: "text", label: "Any other support you can provide apart from this?", name: "anyothersupport" },
                { type: "text", label: "Any suggestions/feedback/expectations for Zero2billion", name: "anyotherexpectations" }
              ]
            }
          },
          {
            id: 15,
            data: {
              submitText: "Book Now",
              title: "Creative Space",
              fields: [
                { type: "text", label: "Name", name: "name", },
                { type: "tel", label: "Mobile Number", name: "mobile", },
                { type: "email", label: "Email", name: "email"},
                { type: "select", label: "Category", name: "category", options: ["Hot Desk", "Private Cabin","Private Office Space","Seat","Meeting Room","Multi-Utility Space","Event Space"] },
                { type: "select", label: "Who can join", name: "whocanjoin", options: ["Startups", "Freelancers", "Corporates/Enterprises", "SME's", "Researchers/Faculty" ]  },
                { type: "text", label: "Name of the Company", name: "nameofthecompany"},
                { type: "text", label: "Time Period", name: "timeperiod"},
                { type: "text", label: "Team Size", name: "teamsize", },
              ]
            }
          },       
        ];
export default formsData;
          
          
          
          
          
          
          
      