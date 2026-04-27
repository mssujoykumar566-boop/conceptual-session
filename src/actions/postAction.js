"use server";

import { addPost } from "@/database/postdb";
import { revalidatePath } from "next/cache";

  export const handlePostAction = async (formData) => {
        const title = formData.get("title");
        const description = formData.get("description");

        console.log({title,description});

        addPost({title,description});

        revalidatePath('/server-action')
    }