"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import createProject from "@/app/actions/create-project";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function AdminPage(){

    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const handleForm = async (formData: FormData) => {
        try {
            await createProject(formData);
            formRef.current?.reset();
            toast({
                title: "Sucess",
                description: "Created Project Successfully",
            });
        } catch {
            toast({
                title: "Error",
                description: "Problem while creating project",
                variant: "destructive"
            });
        }
    }

    return (
        <main className="text-zinc-700 bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
            <form 
                className="px-4" 
                action={handleForm}
                ref={formRef}
            >
                <div>
                    <Label>Title</Label>
                    <Input name="title"/>
                </div>

                <div>
                    <Label>Description</Label>
                    <Textarea name="description"/>
                </div>
                <div>
                    <Label>Skills</Label>
                    <Textarea name="skills"/>
                    <span>Separate each skill with a comma</span>
                </div>
                <div>
                    <Label>Image</Label>
                    <Input type="file" accept="image/*" name="image"/>
                </div>
                <div>
                    <Label>Link To Project</Label>
                    <Input name="link"/>
                </div>
                <div>
                    <Label>Github URL</Label>
                    <Input name="github"/>
                </div>
                <div>
                    <Label>Project Logo</Label>
                    <Input type="file" accept="image/*" name="logo"/>
                </div>

                <div>
                    <Label>Project Year</Label>
                    <Input name="year"/>
                </div>

                <div>
                    <Label>Project Type</Label>
                    <Select name="type">
                        <SelectTrigger>
                            <SelectValue/>
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Web App">
                                Web App
                            </SelectItem>
                            <SelectItem value="Mobile App">
                                Mobile App
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button>
                    Submit
                </Button>
            </form>

        </main>
    )
}