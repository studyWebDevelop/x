import Home from "@/app/(afterLogin)/home/page";

interface PhotoProps {
  params: { username: string; id: string; photoId: string };
}

const Photo = async ({ params }: PhotoProps) => {
  const { username, id, photoId } = await params;

  console.log(username, id, photoId);

  return <Home />;
};

export default Photo;
