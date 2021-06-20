import { MainLayout } from "../../components/MainLayout";
import { Bookmarks } from "../../modules/bookmarks/Bookmarks";
import { searchBookmarksAction } from "../../modules/bookmarks/bookmarksSlice";
import { useSelector } from "react-redux";
import { bookmarksSearchString } from "../../modules/bookmarks/bookmarksSelectos";

export default function Main() {
  const searchString = useSelector(bookmarksSearchString);
  return (
    <MainLayout
      title={"Bookmarks"}
      searchAction={searchBookmarksAction}
      searchString={searchString}
    >
      <Bookmarks />
    </MainLayout>
  );
}
