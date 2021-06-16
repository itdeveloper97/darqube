import { MainLayout } from "../components/MainLayout";
import { News } from "../modules/news/News";

export default function Main() {
  return (
    <MainLayout>
      <News />
    </MainLayout>
  );
}
