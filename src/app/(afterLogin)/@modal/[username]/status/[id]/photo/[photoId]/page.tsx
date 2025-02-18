import { faker } from "@faker-js/faker";
import st from "./photoModal.module.css";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";
import ActionButtons from "@/app/(afterLogin)/_components/Post/ActionButtons";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";

const PhotoModal = () => {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className={st.container}>
      <PhotoModalCloseButton />
      <div className={st.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div
          className={st.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className={st.buttonZone}>
          <div className={st.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={st.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PhotoModal;
