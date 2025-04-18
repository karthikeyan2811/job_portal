var jobRequirement = [{
    "jobID":"ID432",
    "companyName":"Cognizant",
    "companyLogo":"https://assets.channelinsider.com/uploads/2022/02/CI.Profile.Cognizant.jpg",
    "openingRole":"Dot Net Developer",
    "skillSet":"C#, WebApi, MVC, EF Core",
    "jobDescription":"We are looking for a skilled and detail-oriented .NET Developer to join our development team. As a .NET Developer, you will be responsible for designing, coding, testing, and deploying web and/or desktop applications using the Microsoft .NET framework. You'll work closely with cross-functional teams to deliver robust, scalable, and high-performance solutions.",
    
},
{
    "jobID":"ID542",
    "companyName":"IBM",
    "companyLogo":"https://static.startuptalky.com/2021/04/ibm-logo-startuptalky.jpg",
    "openingRole":"Angular Developer",
    "skillSet":"Angular latest, HTML5, CSS3, Type Script, Java Script",
    "jobDescription":"We are seeking a skilled Angular Developer to join our front-end development team. The ideal candidate will be responsible for building dynamic, responsive web applications using Angular and related technologies. You will collaborate with designers, back-end developers, and product managers to deliver high-quality user experiences.",

},
{
    "jobID":"ID588",
    "companyName":"TCS",
    "companyLogo":"https://the420.in/wp-content/uploads/2025/04/TCS.jpg",
    "openingRole":"Java Developer",
    "skillSet":"Java, Springboot",
    "jobDescription":"We are seeking a talented and enthusiastic Java Developer to join our software development team. The ideal candidate will be responsible for developing, testing, and maintaining scalable Java applications that serve the needs of our clients and internal stakeholders. You will work in an agile environment and collaborate closely with cross-functional teams to deliver high-quality software solutions."
},
{
    "jobID":"ID783",
    "companyName":"Wipro",
    "companyLogo":"https://mms.businesswire.com/media/20241017796218/en/2275854/22/Wipro_Logo.jpg",
    "openingRole":"Python Developer",
    "skillSet":"Python, django",
    "jobDescription":"We are seeking a proactive and detail-oriented Python Developer to join our development team. As a Python Developer, you will be responsible for building robust back-end systems, automating tasks, integrating APIs, and developing scalable applications. You’ll collaborate with front-end developers, data teams, and product managers to build efficient, user-focused solutions.",
},
{
    "jobID":"ID799",
    "companyName":"HCL Tech",
    "companyLogo":"https://static.brandfinance.com/wp-content/uploads/2016/01/HCL-Logo.png",
    "openingRole":"Robatics Engineer",
    "skillSet":"Sensors, Motors and Drivers",
    "jobDescription":"We are looking for a talented and innovative Robotics Engineer to design, build, and maintain robotic systems and automation solutions. As a Robotics Engineer, you will work closely with interdisciplinary teams to create intelligent machines that can assist or replicate human actions across industries such as manufacturing, healthcare, logistics, and aerospace."
},
{
    "jobID":"ID492",
    "companyName":"Tech Mahindra",
    "companyLogo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj_YS7I2p1Gc27NfeBkdOnlcuW4sl_4VrzQ&s",
    "openingRole":"AI Developer",
    "skillSet":"Python, Machine Learning, Deep learning",
    "jobDescription":"We are looking for a highly skilled and innovative AI Engineer to join our technology team. As an AI Engineer, you will be responsible for designing, developing, and implementing intelligent systems that leverage machine learning, deep learning, and natural language processing. You will work closely with data scientists, software engineers, and business stakeholders to build AI-powered products and solutions that solve real-world problems."
}
]

function generateCards(jobs){

    let cards = `
        <div class="jobItems">            
            <p class="items">
                <img id="logo" height="100px" width="100px" src="${jobs.companyLogo}" alt="avt">
                <span class="details">
                    <span id="jobid">${jobs.jobID}</span>
                    <span style="font-weight: bold;" id="companyname">${jobs.companyName}</span>
                    <span id="role">${jobs.openingRole}</span>            
                    <span style="font-weight: bold;" id="skills">${jobs.skillSet}</span>
                </span>                
            </p>
            <p id="description">${jobs.jobDescription}</p>    
            <div class="buttons">
                <button id="apply">Apply</button>
                <button id="save">Save</button>                
            </div>
        </div>`

        return cards
}
var containedItems = document.getElementById("mainContainer")
function displayCards(){
    htmlString =""
    jobRequirement.forEach((jobData,index) => {
        htmlString += generateCards(jobData,index)
    })
    containedItems.innerHTML = htmlString
}
displayCards()