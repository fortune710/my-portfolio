import { getHashnodeArticles } from "@/utils/hashnode"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock2 } from "lucide-react";

export default async function BlogPage() {
    const articles = await getHashnodeArticles();
    
    return (
        <main>
            <header className="py-7 px-9 max-md:px-4 font-jarkata bg-primary text-white flex items-center justify-between">
                <span className="flex items-baseline">
                    <Image
                        src="/fortune-logo.png"
                        alt="Fortune Logo"
                        width={25}
                        height={25}
                        className="w-[50px] h-[50px]"
                    />
                    <h2 className="font-bold text-3xl max-sm:hidden">ortune&apos;s Blog</h2>
                </span>
                
                <Link href="https://blog.fortunethedev.co" target="_blank">
                    <Button className="bg-black hover:bg-black font-semibold gap-2">
                        See All Posts
                        <ArrowRight/>
                    </Button>
                </Link>
            </header>
            <section className="w-3/5 max-md:w-full max-md:px-4 mx-auto mt-6 max-md:mt-7 pb-20">
                <Link className="w-full hover:brightness-110" href={articles[0].url}>
                    <Image
                        src={articles[0].coverImage.url}
                        alt={articles[0].title}
                        width={275}
                        height={188}
                        className="rounded-[32px] object-cover w-full h-[400px]"
                    />

                    <div className="mt-5">
                        <h1 className="uppercase text-[#757575] font-bold font-inter text-sm">
                            {articles[0].title}
                        </h1>
                        <p className="font-semibold text-xl text-white">
                            {articles[0]?.subtitle}
                        </p>

                        <h4 className="text-white font-inter flex gap-2 mt-1">
                            <Clock2/>
                            {articles[0].readTimeInMinutes} mins read
                        </h4>
                    </div>

                </Link>


                <div className="grid-cols-1 grid md:grid-cols-2 gap-5 max-md:gap-7 mt-6 max-md:mt-7">
                    {
                        articles.slice(1).map((article) => (
                            <Link className="w-full hover:brightness-110" key={article.id} href={article.url}>
                                <Image
                                    src={article.coverImage.url}
                                    alt={article.title}
                                    width={275}
                                    height={188}
                                    className="rounded-[32px] object-cover w-full h-[200px]"
                                />

                                <div className="mt-5">
                                    <h1 className="uppercase text-[#757575] font-bold font-inter text-sm">
                                        {article.title}
                                    </h1>
                                    <p className="font-semibold text-xl text-white">
                                        {article?.subtitle}
                                    </p>
                                    <h4 className="text-white font-inter flex gap-1 items-center text-sm">
                                        <Clock2 className="w-3 h-3"/>
                                        {article.readTimeInMinutes} mins read
                                    </h4>

                                </div>

                            </Link>
                        ))
                    }
                </div>

            </section>
        </main>
    )
}