import Announcement from "../_components/Announcement";
import Card from "../_components/Card";
import Dropdown from "../_components/Dropdown";

const DiscoverPage = async () => {
  const staticData = await fetch(
    `https://api.github.com/search/repositories?q=language:typescript`,
    { cache: "force-cache" }
  );
  const repo = await staticData.json();

  return (
    <>
      <Announcement />
      <div className="flex flex-col items-center">
        <div className="my-12">
          <Dropdown />
        </div>
        {repo && <Card data={repo.items[0]} />}
      </div>
    </>
  );
};
export default DiscoverPage;
