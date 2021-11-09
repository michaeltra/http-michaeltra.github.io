class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

const app = new Vue ({
  el: '#app',
  data: {
    search: '', //you can initialize search text
    postList : [
      new Post(
        'Wrike Success Planning',
        'https://www.wrike.com/use-cases/resource-management/',
        '', 'https://d3tvpxjako9ywy.cloudfront.net/content/themes/wrike/dist/img/raster/favicon/favicon.ico?av=fd0373bd39' //null = author
        
      ),
      new Post(
        'MavenLink Performance Management', 
        'https://start.mavenlink.com/resource-management-software/', 
        '',
        'https://go.mavenlink.com/hubfs/Mavenlink/favicon.ico'
      ),
      new Post(
        'Polaris Employee Planning', 
        'https://www.replicon.com/polaris-lp/resource-management/', 
        '', 
        'https://www.replicon.com/wp-assets/uploads/2020/10/Polaris-Favicon.svg'
      ),
      new Post(
        'Talent Acquisition', 
        'https://get.mosaicapp.com/resource-management-software', 
        '',
        'https://v.fastcdn.co/u/b3b3d188/58476192-0-Mosaic-Logo-Color.svg'
      ),
      new Post(
        'Career Development', 
        'https://monday.com/lp/resource/comparison/bundle/', 
        '', 
        'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png'
      ),
      new Post(
        'Compensation', 
        'https://info.gartnerdigitalmarkets.com/parallax-gdm-lp', 
        '',
        'https://v.fastcdn.co/u/e36f2c7e/58265452-0-Parallax-670x270-dar.png'
      ),
      new Post(
        'Resource Management', 
        'https://www.smartsheet.com/s/rm-resource-management-capterra', 
        '',
        'https://www.smartsheet.com/sites/default/files/2021-05/icon-honest-blue-execute.svg'
      ),
      new Post(
        'Float Reviews', 
        'https://www.float.com/', 
        '', 
        'images/float.webp'
      ),
      new Post(
        'Project Manager Insights', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        'images/PM.png'
      ),      
      new Post(
        'Training Academy', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        'images/PM.png'
      ),
      new Post(
        'Personal Details', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        'images/PM.png'
      ),
]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase()) //can change post.link or post.author etc
      })
    }
  }
})

class Postxx {
  constructor(titlexx, linkxx, authorxx, imgxx) {
    this.titlexx = titlexx;
    this.linkxx = linkxx;
    this.authorxx = authorxx;
    this.imgxx = imgxx;
  }
}

const appxx = new Vue ({
  el: '#appxx',
  data: {
    search: '', //you can initialize search text
    postListxx : [
      new Postxx(
        'Personal Information',
        'https://www.wrike.com/use-cases/resource-management/',
        '', '' 
        
      ),
      new Postxx(
        'Org Directory', 
        'https://start.mavenlink.com/resource-management-software/', 
        '',
        ''
      ),
      new Postxx(
        'Onboarding', 
        'https://www.replicon.com/polaris-lp/resource-management/', 
        '', 
        ''
      ),
      new Postxx(
        'Pay Vouchers', 
        'https://get.mosaicapp.com/resource-management-software', 
        '',
        ''
      ),
      new Postxx(
        'Absenses', 
        'https://monday.com/lp/resource/comparison/bundle/', 
        '', 
        ''
      ),
      new Postxx(
        'Career Performance', 
        'https://info.gartnerdigitalmarkets.com/parallax-gdm-lp', 
        '',
        ''
      ),
      new Postxx(
        'Learning', 
        'https://www.smartsheet.com/s/rm-resource-management-capterra', 
        '',
        ''
      ),
      new Postxx(
        'Benefits', 
        'https://www.float.com/', 
        '', 
        ''
      ),
      new Postxx(
        'Talent Profile', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        ''
      ),      
      new Postxx(
        'Feedback Requests', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        ''
      ),
      new Postxx(
        'Career Development', 
        'https://learn.projectmanager.com/pm/home-pricing', 
        '',
        ''
      ),
]
  },
  computed: {
    filteredList() {
      return this.postListxx.filter(postxx => {
        return postxx.titlexx.toLowerCase().includes(this.search.toLowerCase()) //can change post.link or post.author etc
      })
    }
  }
})
