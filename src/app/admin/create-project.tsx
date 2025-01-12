"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import createProject from "@/app/actions/create-project";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


export default function CreateProjectDialog({ children }: {
    children: React.ReactNode
}){

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
        } catch (err) {
            toast({
                title: "Error",
                description: "Problem while creating project",
                variant: "destructive"
            });
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                { children }
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>New Project</AlertDialogTitle>
                    <AlertDialogDescription>
                        Create a New Project
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <form 
                    action={handleForm}
                    ref={formRef}
                >
                    <div className="max-h-[45dvh] px-4 overflow-y-scroll space-y-3">
                        <div>
                            <Label>Title</Label>
                            <Input name="title"/>
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Textarea name="description"/>
                        </div>

                        <div>
                            <Label>Case Study</Label>
                            <Textarea name="case_study"/>
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

                        <div className="flex items-center gap-2">
                            <Input className="w-4 h-4" type="checkbox" name="featured"/>
                            <Label>Featured Project</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Input className="w-4 h-4" type="checkbox" name="in_development"/>
                            <Label>In Development</Label>
                        </div>
                    </div>

                    <AlertDialogFooter className="mt-3">
                        <AlertDialogCancel type="button">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction type="submit">
                            Submit
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </form>

            </AlertDialogContent>

        </AlertDialog>
    )
}