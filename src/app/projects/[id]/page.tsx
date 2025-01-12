import { getProjectDetails } from "@/services/projects"
import Image from "next/image";

export default async function ProjectDetailPage({ params }: { params: any }) {
    const details = await getProjectDetails(params.id);

    return (
        <main>
            <div className="grid grid-cols-[1fr_2fr]">
                <div>
                    <Image 
                        src={details?.image!} 
                        alt={details?.title!} 
                        width={300} 
                        height={300}
                    />
                </div>

            </div>

        </main>
    )
}