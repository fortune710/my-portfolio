"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Project } from "@/services/projects";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import editProject from "@/app/actions/edit-project";


export const EditPageForm = ({ project }: {
    project: Project
}) => {

    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

    const handleForm = async (formData: FormData) => {
        try {
            await editProject(formData, project?.id);
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
    <form 
        className="px-4" 
        action={handleForm} 
        ref={formRef}
    >
        <div>
            <Label>Title</Label>
            <Input 
                defaultValue={project?.title!} 
                name="title"
            />
        </div>

        <div>
            <Label>Description</Label>
            <Textarea 
                defaultValue={project?.description!} 
                name="description"
            />
        </div>

        <div>
            <Label>Case Study</Label>
            <Textarea 
                defaultValue={project?.case_study!} 
                name="case_study"
            />
        </div>

        <div>
            <Label>Skills</Label>
            <Textarea 
                name="skills"
                defaultValue={project?.skills?.join(",")}
            />
            <span>Separate each skill with a comma</span>
        </div>
        <div>
            <Label>Image</Label>
            <Input 
                type="file" 
                accept="image/*" 
                name="image"
            />
        </div>
        <div>
            <Label>Link To Project</Label>
            <Input defaultValue={project?.link} name="link"/>
        </div>
        <div>
            <Label>Github URL</Label>
            <Input defaultValue={project?.github!} name="github"/>
        </div>
        <div>
            <Label>Project Logo</Label>
            <Input type="file" accept="image/*" name="logo"/>
        </div>

        <div>
            <Label>Project Year</Label>
            <Input defaultValue={project?.year!} name="year"/>
        </div>

        <div>
            <Label>Project Type</Label>
            <Select defaultValue={project?.type} name="type">
                <SelectTrigger>
                    <SelectValue 
                        defaultValue={project?.type} 
                        placeholder="Type of Project"
                    />
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
            <Input defaultChecked={project?.featured!} className="w-4 h-4" type="checkbox" name="featured"/>
            <Label>Featured Project</Label>
        </div>

        <div className="flex items-center gap-2">
            <Input defaultChecked={project?.in_development!} className="w-4 h-4" type="checkbox" name="in_development"/>
            <Label>In Development</Label>
        </div>


        <Button>
            Submit
        </Button>
    </form>
    )
}