import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getProjects } from "@/services/projects";



export default async function EditProjectPage({ params }: {
    params: { id: string }
 }) {
    const projects = await getProjects();
    const project = projects.find(p => p.id === params.id);
    
    return (
        <form 
            className="px-4" 
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

        <Button>
            Submit
        </Button>
    </form>
    )
}