import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const artists = [
    {
      image: "https://i.scdn.co/image/ab6761610000e5ebc4c77549095c86acb4e77b37",
      name: "AC/DC"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000517422d7d6f8981c7a27bf68a382",
      name: "Tems"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5eb0203df702d0792712e78cf2e",
      name: "Asake"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d",
      name: "Dua Lipa",
    },
    {
      image: "https://i.scdn.co/image/ab676161000051740100fea4bd79ae2ce801be09",
      name: "Rema"
    },
    {
      image: "https://i.scdn.co/image/ab67616100005174f92e0161cf8a3744c222d6e3",
      name: "Royal Blood"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5eb4c220bb7c0ebd9dc7385ac76",
      name: "Bloody Civilian"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5eb2d405f4858ce3cd52d409c98",
      name: "Burna Boy"
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb",
      name: "Harry Styles"
    }

]

export default function MusicContainer() {
    return (
      <div className="space-y-10">
        <div className="w-full inline-flex flex-nowrap">
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <TooltipProvider>
                {
                    artists.map((artists) => (
                    <Tooltip key={artists.name}>
                        <TooltipTrigger asChild>
                          <div className="w-[460px] h-[300px] rounded-lg aspect-video cursor-custom">
                              <img className="w-[420px] border border-zinc-700 mx-auto object-cover overflow-hidden rounded-lg object-[top_0px_right_0] h-full" src={artists.image} alt={artists.name} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" sideOffset={10} className="bg-zinc-900 text-white border-zinc-700">
                          <p>{artists.name}</p>
                        </TooltipContent>
                    </Tooltip>
                    ))
                }
                </TooltipProvider>
            </div>

          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden>
            <TooltipProvider>
              {
                artists.map((artists) => (
                  <Tooltip key={artists.name}>
                    <TooltipTrigger>
                      <div className="w-[460px] h-[300px] rounded-lg aspect-video cursor-custom">
                        <img className="w-[420px] border border-zinc-700 mx-auto object-cover overflow-hidden rounded-lg object-[top_0px_right_0] h-full" src={artists.image} alt={artists.name} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={10} className="bg-zinc-900 text-white border-zinc-700">
                      <p>{artists.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))
              }
            </TooltipProvider>
          </div>
        </div>

        <p className="text-xl text-center font-medium">
          When I&apos;m on Spotify, you&apos;ll catch me listening to one of them :)
        </p>
      </div>
    )
}