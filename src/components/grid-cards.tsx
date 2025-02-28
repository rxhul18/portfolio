import {
  AnimeLinkCard,
  DCStatus,
  GHStats,
  WakatimeStats,
  LinksCard,
  GHLink,
} from "@/components/cards";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
        <div className="col-span-3">
          <GHLink />
        </div>
        <div className="col-span-3">
          <GHStats />
        </div>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-3">
        <div className="flex flex-col col-span-6 md:col-span-4">
          <div className="flex gap-3">
            <div className="w-64">
              <AnimeLinkCard />
            </div>
            <div className="flex flex-col gap-3 w-full ">
              <LinksCard />
              <WakatimeStats />
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 md:ml-3 mt-3 md:mt-0">
          <div className="flex gap-3 ">
            <DCStatus />
          </div>
        </div>
      </div>
    </div>
  );
};
