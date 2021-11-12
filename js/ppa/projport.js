const Responsibilities = { template: // &#39; for apostrophy
'<div><p><strong style="color:#EA2A2E;">Project Analyst Responsibilities</strong></p><ul><li>Under the guidance of Senior Manager, Portfolio Strategy, help ensure team&#39;s <span style="color:red">project intake</span>, <span style="color:red">assignment</span>, and <span style="color:red">reporting processes</span> execute in an accurate and efficient manner.</li><li>Coordinate with project requestors and other key stakeholders to <span style="color:red">document project needs / support requirements and next steps</span>.</li><li>Perform <span style="color:red">portfolio maintenance and health checks</span> and <span style="color:red">report inconsistencies / areas needing attention</span>.</li><li>Collaborate with key stakeholders to <span style="color:red">identify and improve templates and processes</span> related to portfolio management function.</li></ul></div>'
}

const Qual = { template:
'<div><p><strong style="color:#EA2A2E;">Project Analyst Qualifications</strong></p><ul><li>Bachelor&#39;s Degree</li><li>2 years of project control, analysis, and/or project management experience</li><li>Understanding of the project lifecycle</li><li>Appreciation for the user experience</li><li>High level of professionalism</li><li>Technical aptitude and breadth of knowledge of the technical lexicon</li><li>Excellent interpersonal and communications skills with the ability to communicate effectively with all levels of staff</li><li>Strong drive for results and attention to detail</li><li>Moderate experience/skill level with MS Excel and SharePoint</li></ul></div>'
}

const Competency = { template:
'<div><p><b>Competencies</b></p><p><strong style="color:#EA2A2E;">Summary</strong></p><p>Intermediate understanding of web development (HTML, CSS). Basic understanding of JavaScript, Vuejs, PHP and <a href="https://github.com/michaeltra" target="_blank">Github</a>.</p><p>Jira (Atlassian: issue tracking and product development).</p><p>Microsoft Office: Excel, Outlook, PowerShell, SharePoint, Visio, and basic understanding of SQL using SQL Server Management Studio.</p><p>Techsmith SnagIt.</p><br><p><b>Education/Certifications/Awards</b><p><strong style="color:#EA2A2E;">Summary</strong></p><p>Certified Scrum Master (CSM ID 754974 | Scrum Alliance expires March 2024). Agile and Scrum Training (Wells Fargo) and Scrum Master Training (Keyot).</p><p>ITIL V3 Foundations Certification (Association of Project Managers Group).</p><p>Certified Associate in Project Management [CAPM | Project Management Institute (PMI)].</p><p>Planning, Gathering and Communicating Requirements (Wells Fargo).</p><p>Project Management PMBOK 5th & 6th Edition (Wells Fargo). Project Management Exam Prep PMBOK 4th Edition (Ameriprise Financial).</p><p>SharePoint site administration (Ameriprise Financial and Wells Fargo).</p><p>Team Excellence Award winner for Windows OS Conversation and Reportable Data projects (Wells Fargo).</p></div>'
}

const Transparency = { template:
'<div><p><b>From</b>  <a href="https://www.scrum.org/resources/blog/three-pillars-empiricism-scrum">Scrum.org</a></p><p>This means presenting the facts as is. All people involved &#8211 the customer, the CEO, individual contributors &#8211 are transparent in their day-to-day dealings with others. They all trust each other, and they have the courage to keep each other abreast of good news as well as bad news. Everyone strives and collectively collaborates for the common organizational objective, and no one has any hidden agenda.</p></div>'
}

const Inspect = { template:
'<div><p><b>From</b> <a href="https://www.scrum.org/resources/blog/three-pillars-empiricism-scrum">Scrum.org</a></p><p>Inspection in this context is not an inspection by an inspector or an auditor but an inspection by everyone on the Scrum Team. The inspection can be done for the product, processes, people aspects, practices, and continuous improvements. For example, the team openly and transparently shows the product at the end of each Sprint to the customer in order to gather valuable feedback. If the customer changes the requirements during inspection, the team does not complain but rather adapts by using this as an opportunity to collaborate with the customer to clarify the requirements and test out the new hypothesis.</p></div>'
}

const Adapt = { template:
'<div><p><b>From</b> <a href="https://www.scrum.org/resources/blog/three-pillars-empiricism-scrum">Scrum.org</a></p><p>Adaptation in this context is about continuous improvement, the ability to adapt based on the results of the inspection. Everyone in the organization must ask this question regularly: Are we better off than yesterday? For profit-based organizations, the value is represented in terms of profit. The adaptation should eventually relay back to one of the reasons for adapting Agile&#8211;for example, faster time to market, increased return on investment through value- based delivery, reduced total cost of ownership through enhanced software quality, and improved customer and employee satisfaction.</p></div>'
}

const Prince = { template:
'<div><p><b>From</b> <a href="http://www.scrummanifesto.org/" target="_blank">Scrummanifesto.org</a></p><ol><li>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li><li>Welcome changing requirements, even late in development. Agile processes harness change for the customer&#39;s competitive advantage.</li><li>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li><li>Business people and developers must work together daily throughout the project.</li><li>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li><li>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li><li>Working software is the primary measure of progress.</li><li>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li><li>Continuous attention to technical excellence and good design enhances agility.</li><li>Simplicity is the art of maximizing the amount of work not done is essential.</li><li>The best architectures, requirements, and designs emerge from self&#8211;organizing teams.</li><li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li></ol></div>'
}

const routes = [
  { path: '/responsibilities', component: Responsibilities },
  { path: '/qualifications', component: Qual },
  { path: '/competencies', component: Competency },
  { path: '/transparency', component: Transparency },
  { path: '/inspection', component: Inspect },
  { path: '/adaptation', component: Adapt },
  { path: '/principles', component: Prince },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app-3')
