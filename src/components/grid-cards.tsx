import {
  AnimeLinkCard,
  GHStats,
  LinksCard,
} from "@/components/cards";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
        <div className="col-span-3">
          {/* <GHLink /> */}
          <div className="flex gap-2">
            <div className="w-72">
              <AnimeLinkCard />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <LinksCard />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <GHStats />
        </div>
      </div>
    </div>
  );
};
