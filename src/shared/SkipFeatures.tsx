import { RouterLink } from "vue-router";
import { defineComponent, PropType } from "vue";
export const SkipFeatures = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      localStorage.setItem("skipFeatures", "yes");
    };
    return () => (
      <span onClick={onClick}>
        <RouterLink to="/start">跳过</RouterLink>
      </span>
    );
  },
});
