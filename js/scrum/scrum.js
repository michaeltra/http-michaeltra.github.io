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
}).$mount('#app')
