import { getHashnodeArticles } from "@/utils/hashnode"
import Image from "next/image";

export default async function Blog() {
    const articles = await getHashnodeArticles();

    return (
        <div className="flex snap-x items-center pl-6 gap-4 overflow-x-auto w-full custom-scroll">
            {
                articles.slice(0, 4).map((article) => (
                    <div className="text-center snap-start flex-shrink-0 max-w-[300px]" key={article.id}>
                        <Image
                            src={article.coverImage.url}
                            alt={article.title}
                            width={275}
                            height={188}
                            className="rounded-[32px] object-cover w-[275px] h-[188px]"
                        />

                        <div className="mt-5">
                            <h1 className="uppercase text-[#757575] font-bold font-inter text-sm">
                                {article.title}
                            </h1>
                            <p className="font-semibold text-xl">
                                {article.subtitle}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}