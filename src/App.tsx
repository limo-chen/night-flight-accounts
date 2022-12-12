import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./App.scss";

export const App = defineComponent({
  setup() {
    return () => (
      <div class="page">
        <RouterView />
        //链接展示的是welcome
      </div>
    );
  },
});
