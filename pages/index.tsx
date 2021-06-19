import { MainLayout } from "../components/MainLayout";
import { News } from "../modules/news/News";
import { searchNewsAction } from "../modules/news/newsSlice";
import { useSelector } from "react-redux";
import { newsSearchString } from "../modules/news/newsSelectors";

export default function Main() {
  const searchString = useSelector(newsSearchString);
  return (
    <MainLayout
      title={"News"}
      searchAction={searchNewsAction}
      searchString={searchString}
    >
      <News />
    </MainLayout>
  );
}
