import Image from "next/image";


export default function Photo({photo}) {

    return (
        <>
            <Image src={photo.imageSrc} 
                    alt={""}
                    width={600} height={600}  
                    className="w-full object-cover aspect-square col-span-2"/> 
        </>
    )
}