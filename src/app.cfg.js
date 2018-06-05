
/**
 * App config file 
 * this is initial idea
 */
 export const cfg={
  menuItems:[{
    link:'#1', label:"Menu item 1", faIco:"fas fa-home"
  },{
    link:'#2', label:"Menu item 2", faIco:"fab fa-affiliatetheme"
  },{
    link:'#3', label:"Menu item 3", faIco:"fas fa-allergies"
  }],
  //HERO section
  hero:{
    title:'Outdoor',
    subtitle:'The place full of joy',
    cta:{      
      label:'Click here for the magic',
      link:'#'
    },
    logo:{
      img:'img/logo-white.png'
    } 
  },
  about:{
    title:'It is all about CSS animations',
    articles:[{
      img:'img/nat-1-large.jpg',
      link:'#',
      title:'Title article 1', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    },{
      img:'img/nat-2-large.jpg',
      link:'#',
      title:'Title article 2', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    },{
      img:'img/nat-3-large.jpg',
      link:'#',
      title:'Title article 3', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    }]
  },
  //supports 4 features
  features:[{
    faIco: 'fas fa-american-sign-language-interpreting',
    link:'',
    title: 'Title of item 1',
    body:`
    Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
    ` 
  },{
    faIco: 'fas fa-anchor',
    link:'',
    title: 'Title of item 2',
    body:`
    Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
    ` 
  },{
    faIco: 'fab fa-vuejs',
    link:'',
    title: 'Title of item 3',
    body:`
    Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
    ` 
  },{
    faIco: 'fab fa-angular',
    link:'',
    title: 'Title of item 4',
    body:`
    Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
    `
  }],
  //it supports 3 cards
  cardsPage:{
    title:'Amazing offerings!',
    cards:[{
      front:{
        title: 'Check the back side!',
        list:[
          'List item 1', 'List item 2',
          'This is third item', 'This is point 4',
          'Lastone of top 5 points'
        ]
      },
      back:{
        btn:{
          faIco: 'fas fa-home',
          link:'#',
          label:'Get it here now!'
        },
        title:'now for',
        body:'$499'
      }     
    },{
      front:{
        title: 'Check the back side!',
        list:[
          'List item 1', 'List item 2',
          'This is third item', 'This is point 4',
          'Lastone of top 5 points'
        ]
      },
      back:{
        btn:{
          faIco: 'fas fa-home',
          link:'#',
          label:'Get it here now!'
        },
        title:'now for',
        body:'$899'
      }     
    },{
      front:{
        title: 'Check the back side!',
        list:[
          'List item 1', 'List item 2',
          'This is third item', 'This is point 4',
          'Lastone of top 5 points'
        ]
      },
      back:{
        btn:{
          faIco: 'fas fa-home',
          link:'#',
          label:'Get it here now!'
        },
        title:'now for',
        body:'$999'
      }     
    }]
  },
  storiesPage:{
    title:'Unforgetable stories!!!',
    bgVideo:[
      { src:'img/video.mp4', type:'video/mp4' },
      { src:'img/video.webm', type:'video/webm'}
    ],
    stories:[{
      img:'img/nat-3.jpg',
      user: 'Kevin van Bacon',
      title:'It was amazing!',
      body:`
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      `
    },{
      img:'img/nat-4.jpg',
      user: 'George de Clouney',
      title:'It was like a dream come true!',
      body:`
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      Lorem ipsum dolor sit amet, consectet-uer adipiscing elit. Aenean commodo ligula eget dolor.
      `
    }]
  },
  subscribeForm:{
    title:'Subscribe to our newsletter!',
    submit:{
      label:'Subscribe now!',
      eventId:'onSubmit'
    },
    items:[{
      id:"name",
      type: "text",
      label: 'Your name',
      value: null,
      required: true 
    },{
      id:"email",
      type: "email",
      label: 'Your email',
      value: null,
      required: true 
    },{
      id:"tour_type",
      type: "radio",
      label: 'Your age',
      required: false,
      value:'Weekly news',
      options:['Weekly news', 'Monthly news']
    }]
  },
  footer:{
    links:[{
      url: '#1',
      label:"This is link 1"
    },{
      url: '#2',
      label:"link 2"
    },{
      url: '#3',
      label:"link 3"
    },{
      url: '#4',
      label:"And link 4"
    }],
    copyright:`
      Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for personal and commercial use, but NOT to claim it as your own design.
    `
  }
  
};