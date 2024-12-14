import fs from "fs";
import path from "path"
import { Story } from "@/types/stories";

const storiesDirectory = path.join(process.cwd(), "public/stories");

//Access the public files and retrieve all the stories 
export function getAllStories():Stroy[] {
    if(!fs.existsSync(storiesDirectory)){
        return[];
    }

    const storyFolders = fs.readdirSync(storiesDirectory);

    const stories:Story[] = storyFolders.map(storyFolder =>{
        
    })

}

export const getStory = (story:string):stroy | undefined => {}