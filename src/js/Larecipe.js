import { createApp } from 'vue'
import LaRecipeComponents from "./components";

export default class LaRecipe {
  constructor() {
    this.bootingCallbacks = [];
  }

  booting(callback) {
    this.bootingCallbacks.push(callback);
  }

  init() {
    this.app = createApp({
      data() {
        return {
          sidebar: typeof Storage !== "undefined" &&
          localStorage.getItem("larecipeSidebar") !== null ? localStorage.getItem("larecipeSidebar") == "true" : false
        }
      },
      watch: {
        sidebar: function() {
          localStorage.setItem("larecipeSidebar", this.sidebar);
        }
      },
      mounted() {
        document.getElementById("documentation").addEventListener("click", () => {
          if (window.matchMedia("(max-width: 960px)").matches) {
            this.sidebar = false;
          }
        });
      }
    });

    return this;
  }

  setup() {
    this.app.use(LaRecipeComponents);

    this.app.config.compilerOptions.delimiters = [{ replace: () => "(?!x)x" }];

    return this;
  }

  boot() {
      this.bootingCallbacks.forEach(callback => callback(this.app));

      this.bootingCallbacks = [];

      return this;
  }

  mount() {
    this.app.mount('#app');

    return this;
  }

  run() {
    this.init()
        .setup()
        .boot()
        .mount();
  }
}
