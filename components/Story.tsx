"use client";

import { useEffect,useState } from "react";
import { Story as StoryType } from "@/types/stories"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";
  
interface Props{
    story:StoryType
}
const Story = ({story}:Props)=> {
    const [api, setApi] = useState<CarouselApi>();
    const [current,setCurrent] = useState(0);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(!api) return;

        setCount(api.scrollSnapList().length);
        
    })
  return (
    <div>Story</div>
  )
}

export default Story