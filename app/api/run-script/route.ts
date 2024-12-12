import { RunOpts } from "@gptscript-ai/gptscript";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    const {story,pages,path}= await request.json();
     
    //Example CLI Command : gptscript ./story-book.gpt --story "A robot and a human become friends" --pages 5 --path ./stories
    const opts:RunOpts={
        disableCache:true,
        input:`--story ${story} --pages ${pages} --path${path}`,
    }
}