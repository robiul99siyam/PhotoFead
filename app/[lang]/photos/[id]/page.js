import PhotoDetails from "@/components/PhotoDetails";

export default function PhotoPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
