'use server'

import { revalidatePath } from "next/cache"

export async function refreshClient(path: string): Promise<void> {
    revalidatePath(path)
}