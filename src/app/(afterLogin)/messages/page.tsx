import Room from "./_components/Room";
import st from "./messages.module.css";

const Messages = () => {
  return (
    <main className={st.main}>
      <div className={st.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
};

export default Messages;
