<template>
  <div id="app">
    <header>
      <form @submit.prevent="searchFor($event)">
        <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32"
             aria-hidden="true">
          <path fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <input type="text" v-model="request" placeholder="Search for …">
        <input type="submit" value="Search">
      </form>
    </header>
    <div class="container">
      <div v-for="(user, id) in users" :key="id">
        <div class="user">
          <p class="name" @click="showUserRepos($event)" :id="id">{{user.login}}</p>
          <div v-if="user.login === chosenUser" class="starred">
            <p>starred</p>
            <input type="number" @input="getStarred($event)" v-model="starred" min="0">
            <p>times</p>
          </div>
          <div class="type" v-if="user.login === chosenUser">
            <input type="radio" value="all" name="type" id="all" checked @click="showAll()">
            <label for="all">all</label>
            <input type="radio" value="forks" name="type" id="forks" @click="showForks()">
            <label for="forks">forks</label>
            <input type="radio" value="sourced" name="type" id="sources" @click="showSources()">
            <label for="sources">sources</label>
          </div>
          <p v-if="user.login === chosenUser" class="sort">Sort by:
            <span @click="sortName()">repo name</span>
            <span @click="sortStars()">stars count</span>
          </p>
        </div>
        <div class="reps" v-if="user.login === chosenUser">
          <div v-for="(rep, id) in userReps" :key="id" class="rep">
            <p class="rep-name">{{rep.name}}</p>
            <p v-if="rep.description">description: {{rep.description}}</p>
            <p>last update: {{updated_at}}</p>
            <p><svg aria-label="forks" class=" octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> {{rep.forks}}</p>
            <p><svg aria-label="stars" class="octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="oction-star" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> {{rep.stargazers_count}}</p>
            <p v-if="rep.language">{{rep.language}}</p>
          </div>
        </div>
        <button @click="incPage()" v-if="user.login === chosenUser" class="load">Load more</button>
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {},
  data() {
    return {
      request: "",
      users: [],
      userReps: [],
      reserveReps: [],
      chosenUser: '',
      starred: 0,
      typeAll: true,
      typeFork: false,
      typeSource: false,
      page: 1
    }
  },
  computed: {
    updated_at() {
      return this.userReps[this.userReps.length - 1].updated_at.split('T')[0]
    },
  },
  methods: {
    showAll(){
      this.userReps = []
      this.reserveReps.forEach(rep => {
        if (rep.stargazers_count >= this.starred) {
          this.userReps.push(rep)
        }
      })
    },
    showForks(){
      this.userReps = []
      this.reserveReps.forEach(rep => {
        if (rep.fork && rep.stargazers_count >= this.starred) {
          this.userReps.push(rep)
        }
      })
    },
    showSources(){
      this.userReps = []
      this.reserveReps.forEach(rep => {
        if (!rep.fork && rep.stargazers_count >= this.starred) {
          this.userReps.push(rep)
        }
      })
    },
    getStarred(e) {
      this.userReps = []
      this.reserveReps.forEach(rep => {
        if (this.typeSource === true){
          this.showSources()
        } else if (this.typeFork === true){
          this.showForks()
        } else  {
          this.showAll()
        }
      })
    },
    sortName() {
      this.userReps.sort(function (a, b) {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    },
    sortStars() {
      this.userReps.sort((a, b) => (b.stargazers_count > a.stargazers_count) ? 1 : -1);
    },
    async searchFor(e) {
      this.users = [];
      await fetch('https://api.github.com/search/users?q=' + this.request )
        .then(res => res.json())
        .then(res => res.items.forEach(user => this.users.push(user)))
    },
    async showUserRepos(e) {
      await fetch('https://api.github.com/users/' + e.target.innerText + '/repos?page=' + this.page + '&per_page=9')
        .then(res => res.json())
        .then(res => {
          this.page = 1;
          this.chosenUser = e.target.innerText
          this.userReps = []
          this.starred = 0;
          res.forEach(rep => this.userReps.push(rep))
          this.reserveReps = this.userReps
        })
    },
    async showMoreUserRepos() {
      await fetch('https://api.github.com/users/' + this.chosenUser + '/repos?page=' + this.page + '&per_page=9')
        .then(res => res.json())
        .then(res => {
          res.forEach(rep => this.userReps.push(rep))
          this.reserveReps = this.userReps
        })
    },
    incPage(){
      this.page++;
      this.showMoreUserRepos()
    }
  }
}
</script>

<style lang="scss">
  .rep-name{
    color: #0366d6;
    font-size: 16px;
    font-weight: 600;
  }
  .octicon {
    fill: #fff;
  }
  .container{
    width: 90%;
    margin: 50px auto;
  }

  #app {
    background: #fafbfc;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  * {
    margin: 0;
    padding: 0;
  }

  header {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    background-color: #24292e;
    color: hsla(0, 0%, 100%, .7);
    font-size: 14px;
    line-height: 1.5;
    padding: 16px;
    z-index: 32;
  }

  form, .type{
    display: flex;
    align-items: center;
  }
  .type{
    label{
      margin: 0 0px 0 10px;
    }
    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
      position: absolute;
      left: -9999px;
    }
    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: #666;
    }
    [type="radio"]:checked + label:before,
    [type="radio"]:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #ddd;
      border-radius: 100%;
      background: #fff;
    }
    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
      content: '';
      width: 12px;
      height: 12px;
      background: #F87DA9;
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    [type="radio"]:not(:checked) + label:after {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    [type="radio"]:checked + label:after {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
.load{
  margin: auto;
  display: block;
  background-color: #24292e;
  border: none;
  padding: 10px 15px;
  color: #6b6f72;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
  input[type="text"] {
    background-color: hsla(0, 0%, 100%, .125);
    border: 0;
    box-shadow: none;
    color: inherit;
    width: 273px;
    box-sizing: border-box;
    padding: 6px 8px;
    height: 28px;
    display: table-cell;
    margin-left: 16px;
    line-height: 20px;
    min-height: 28px;
  }

  input[type="submit"] {
    background-color: hsla(0, 0%, 100%, .325);
    border: none;
    padding: 6px 8px;
    height: 28px;
    cursor: pointer;
  }

  .user {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input[type="number"]{
      width: 55px;
      font-size: 14px;
      border-radius: 5px;
      padding: 2px;
      border: 1px solid #000;
      margin: 0 5px;
    }

    div {
      display: flex;
    }

    .name {
      color: #0366d6;
      font-weight: 600;
      font-size: 20px;
      cursor: pointer;
    }

    span {
      border-radius: 10px;
      background: #f1f8ff;
      padding: 2px 10px;
      cursor: pointer;
      &:hover{
        background: #def;
      }

      &:first-child {
        margin-right: 5px;
      }
    }
  }

  .reps {
    display: flex;
    flex-wrap: wrap;
    p{
      display: flex;
      align-items: center;
      svg{
        margin-right: 3px;
      }
    }

    .rep {
      width: 32%;
      margin-bottom: 2%;
      border: 1px solid #d1d5da;
      box-sizing: border-box;
      padding: 16px;
      border-radius: 3px;

      &:not(:nth-child(3n)) {
        margin-right: 2%;
      }
    }
  }
</style>
