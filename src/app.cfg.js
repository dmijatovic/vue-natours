
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
      link:'#section-tours'
    },
    logo:{
      img:'img/logo-white.png 1x, img/logo-green-2x.png 2x'
    } 
  },
  about:{
    title:'This is my about title',
    articles:[{
      img:'img/nat-1-large.jpg',
      link:'',
      title:'This is article 1', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    },{
      img:'img/nat-2-large.jpg',
      link:'',
      title:'This is article 2', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    },{
      img:'img/nat-3-large.jpg',
      link:'',
      title:'This is article 3', 
      body:`
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      `
    }]
  },
  //supports 4 features
  features:[{
    faIco: 'fas fa-american-sign-language-interpreting',
    link:'',
    title: 'This is title 1',
    body:`
    This is the body of this item
    ` 
  },{
    faIco: 'fas fa-anchor',
    link:'',
    title: 'This is title 2',
    body:`
    This is the body of this item
    ` 
  },{
    faIco: 'fab fa-vuejs',
    link:'',
    title: 'This is title 3',
    body:`
    This is the body of this item
    ` 
  },{
    faIco: 'fab fa-angular',
    link:'',
    title: 'This is title 4',
    body:`
    This is the body of this item
    ` 
  }],
  //it supports 3 cards
  cardsPage:{
    title:'Hover over me, please :-)',
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
    title:'All these nice stories!!!',
    bgVideo:[
      { src:'img/video.mp4', type:'video/mp4' },
      { src:'img/video.webm', type:'video/webm'}
    ],
    stories:[{
      img:'img/nat-3.jpg',
      user: 'First & Last name',
      title:'I just love this stuff :-)',
      body:`
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
      `
    },{
      img:'img/nat-4.jpg',
      user: 'Dusan Mijatovic',
      title:'This is not normal!',
      body:`
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
        Here comes the body of this nice story I just imagined.
      `
    }]
  },
  subscribeForm:{
    title:'Subscribe for our newsletter!',
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