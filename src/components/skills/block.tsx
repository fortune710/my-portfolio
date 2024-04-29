import Image from "next/image";

interface SkillBlock {
    name: string;
    image: string;
    color: string;
    imageStyle?: string;
}

export default function SkillBlock({ name, image, imageStyle, color }: SkillBlock) {

    let backgroundColor = `bg-${color}`

    return (
        <div className={`${color} relative flex items-center justify-center rounded-lg w-full aspect-square`}>
            <Image 
                src={image} 
                alt={name} 
                width={60} 
                height={60} 
                className={imageStyle}
            />
        </div>
    )
}