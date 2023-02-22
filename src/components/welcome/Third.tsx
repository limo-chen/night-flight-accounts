import s from "./welcome.module.scss";
export const Third = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#chart"></use>
      </svg>
      <h2>
        云备份
        <br />
        再也不怕数据丢失
      </h2>
    </div>
  );
};
Third.displayName = "Third";
