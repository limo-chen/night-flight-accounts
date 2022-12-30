import { defineComponent, PropType } from "vue";
import { Icon, IconName } from "./Icon";
import s from "./FloatButton.module.scss";
export const FloatButton = defineComponent({
  //这样可以保证FloatButton接受的iconName一定跟icon的iconName是一样的
  props: {
    iconName: {
      type: String as PropType<IconName>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.iconName} class={s.icon} />
      </div>
    );
  },
});
