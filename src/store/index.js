import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myProfile: {
      name: 'MyName',
      img: 'https://w7.pngwing.com/pngs/455/105/png-transparent-anonymity-computer-icons-anonymous-user-anonymous-purple-violet-logo.png',
    },
    posts: [{
        userProfile: {
          name: 'testUser1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBQefIEoY9oK89qskeChJ78UnlUm-Xhi9Rw&usqp=CAU',
        },
        content: {
          img: 'https://data.ac-illust.com/data/thumbnails/21/219a9914d7dc99a281ada5aa726cfd30_t.jpeg',
          subject: '꽃',
          text: '꽃 그림'
        },
        like: ['like1', 'like2', 'like3', 'like4', 'like5'],
        comments: [{
            name: 'like1',
            text: '좋아요'
          },
          {
            name: 'comment1',
            text: '좋아요'
          },
        ]
      },
      {
        userProfile: {
          name: 'testUser1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBQefIEoY9oK89qskeChJ78UnlUm-Xhi9Rw&usqp=CAU',
        },
        content: {
          img: 'https://data.ac-illust.com/data/thumbnails/21/219a9914d7dc99a281ada5aa726cfd30_t.jpeg',
          subject: '꽃',
          text: '꽃 그림'
        },
        like: ['like1', 'like2', 'like3', 'like4', 'like5'],
        comments: [{
            name: 'like1',
            text: '좋아요'
          },
          {
            name: 'comment1',
            text: '좋아요'
          },
        ]
      }, {
        userProfile: {
          name: 'testUser1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBQefIEoY9oK89qskeChJ78UnlUm-Xhi9Rw&usqp=CAU',
        },
        content: {
          img: 'https://data.ac-illust.com/data/thumbnails/21/219a9914d7dc99a281ada5aa726cfd30_t.jpeg',
          subject: '꽃',
          text: '꽃 그림'
        },
        like: ['like1', 'like2', 'like3', 'like4', 'like5'],
        comments: [{
            name: 'like1',
            text: '좋아요'
          },
          {
            name: 'comment1',
            text: '좋아요'
          },
        ]
      }, {
        userProfile: {
          name: 'testUser1',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBQefIEoY9oK89qskeChJ78UnlUm-Xhi9Rw&usqp=CAU',
        },
        content: {
          img: 'https://data.ac-illust.com/data/thumbnails/21/219a9914d7dc99a281ada5aa726cfd30_t.jpeg',
          subject: '꽃',
          text: '꽃 그림'
        },
        like: ['like1', 'like2', 'like3', 'like4', 'like5'],
        comments: [{
            name: 'like1',
            text: '좋아요'
          },
          {
            name: 'comment1',
            text: '좋아요'
          },
        ]
      },

    ],
  },
  mutations: {},
  actions: {},
  modules: {}
});