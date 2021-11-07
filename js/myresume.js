const Responsibilities = { template:
'<div><p>Wells Fargo</p><br><p><strong style="color:#EA2A2E;">Summary:</strong> Implementation Consultant: serve as consultant to business teams impacted by policy, system and process changes. Acquire leadership support to implement changes amid competing enterprise priorities.</p><p>Identify system and business process impacts to execute strategies including tracking and delivery of technology products. Provide communication plans of upcoming changes and post production validation.</p><p>Coordinate end-user testing including obtaining and documentation of system navigation and access, test scripts and production issue resolution. Work with Scrum and business SMEs to remediate testing defects and determine interim solutions when necessary.</p><p>Design training and business adoption plans facilitate team orientation of systems.</p><p>SharePoint site administration support and content backup including document libraries and lists for multiple business lines. Content and access management and perform solutions consultation.</p><p>Perform Change Management process that includes: design of business request site, perform work intake to identify solutions, documentation of deliverables and progress status reporting, development of control plan to manage the change, obtain cross-functional impact for risk mitigation, consult product development teams for solution prioritization, implementation of change and project closure. Provide minimal viable solutions for complex business needs.</p><br><br>fun</div>'
}

const Accomp = { template:
'<div>Acoomplishments  details...</div>'
}

const routes = [
  { path: '/responsibilities', component: Responsibilities },
  { path: '/accomplishments', component: Accomp }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')
