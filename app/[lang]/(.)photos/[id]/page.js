import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import Notfound from "./not-found";

export default function PhotosPage({ params: { id, lang } }) {
  if (!id) {
    return <Notfound />;
  }
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
