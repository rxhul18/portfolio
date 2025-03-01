import { LanyardResponse } from "@/app/api/discord/route";
import fetcher from "@/lib/utils";
import { DiscordLogoIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import useSWR from "swr";
import { Spinner } from "@/components/spinner";
import Image, { StaticImageData } from "next/image";
import onlineGif from "@/assets/images/online.gif";
import offlineGif from "@/assets/images/offline.gif";
import idleGif from "@/assets/images/idle.gif";
import dndGif from "@/assets/images/dont-disturb.gif";

type ApiDiscordStatus = "online" | "dnd" | "idle" | "offline" | undefined;

const statusImages: { [key in "online" | "dnd" | "idle" | "offline"]: StaticImageData } = {
  online: onlineGif,
  offline: offlineGif,
  idle: idleGif,
  dnd: dndGif,
};

export const DCStatus = () => {
  const { data, isLoading, error } = useSWR<LanyardResponse>(
    "/api/discord",
    fetcher
  );
  
  // if (data) {
  //   console.log("API Response:", data);
  // }

  const getStatus = (status: ApiDiscordStatus) => {
    if (!status) return "Unknown Status";
    switch (status) {
      case "online":
        return "onchain 在";
      case "offline":
        return "offchain 離";
      case "idle":
        return "taking a nap";
      case "dnd":
        return "dont disturb";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="w-full h-36 text-white rounded-lg items-center flex justify-center overflow-hidden bg-[#F7F2F2] dark:bg-[#161616]">
      <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
        <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />

        {isLoading ? (
          <div className="flex flex-col items-center">
            <Spinner className="w-8 h-8 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
            <p className="text-xl font-semibold text-black dark:text-white mt-2">
              Syncing to chain...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
            <p className="text-xl font-semibold text-red-600 dark:text-red-400 mt-2">
              Disconnected fr chain!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex items-center text-xl font-semibold text-black dark:text-white">
              {data?.data?.discord_status && (
                <Image
                  src={statusImages[data.data.discord_status]}
                  alt={`${data.data.discord_status} image`}
                  className="w-5 h-5 mr-1"
                />
              )}
              {getStatus(data?.data?.discord_status)}
            </div>

            <div className="text-sm mt-2 text-black dark:text-white">
              @{data?.data?.discord_user?.username}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
