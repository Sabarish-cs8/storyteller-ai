import g from "@/lib/gptScriptInstance";
import { RunOpts } from "@gptscript-ai/gptscript";
import { NextRequest } from "next/server";


const script = "app/api/run-script/story-book.gtp";

export async function POST(request:NextRequest){
    const {story,pages,path}= await request.json();
     
    //Example CLI Command : gptscript ./story-book.gpt --story "A robot and a human become friends" --pages 5 --path ./stories
    const opts:RunOpts={
        disableCache:true,
        input:`--story ${story} --pages ${pages} --path${path}`,
    };

    try {
        const encoder=new TextEncoder();
        const stream = new ReadableStream({
            async start(controller){
                try {
                    const run = await g.run(script,opts);
                } catch (error) {
                  controller.error(error)
                  console.error("Error:",error)                   
                }
            }
        })
    } catch (error) {
        return new Response(JSON.stringify({error:error}),{
            status:500,
        });
    }
}