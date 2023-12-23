import { Combobox } from '@headlessui/react';
import { useState } from 'react';
import supabase from '../utils/supabase';
import useCreateProject from '../hooks/useCreateProject';

export default function AddProjectsPage({ technologies }) {

    const { addNewProject } = useCreateProject();

    /**
     * @type {import('../hooks/useCreateProject').Experience}
     */
    const [newProject, setNewProject] = useState({
        name: "",
        description: "",
        role: "",
        company: "",
        link: "",
        technologies: []
    })

    const updateProject = (e) => {
        return setNewProject((oldProj) => ({
            ...oldProj,
            [e.target.name]: e.target.value
        }))
    }

    const addNewProjectLink = () => {
        return setNewProject((oldProj) => ({ ...oldProj, links }))
    }

    const createNewProject = async () => {
        try {
            await addNewProject(newProject);
            alert("Success")
        } catch {
            alert("Error")   
        }
    }

    return (
        <main className="w-screen grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <section className="w-full">
                <div className='flex flex-col justify-start'>
                    <label htmlFor="">Project Name</label>
                    <input 
                        name='name' 
                        placeholder='Enter a name' 
                        className="input input-bordered w-full max-w-xs text-zinc-800" 
                        onChange={updateProject}
                    />
                </div>

                <div className='flex flex-col justify-start'>
                    <label htmlFor="">Project Description</label>
                    <textarea 
                        name='description' 
                        className="textarea textarea-bordered w-full max-w-xs text-zinc-800" 
                        placeholder='Enter a name' 
                        onChange={updateProject}
                    />
                </div>

                <div className='flex flex-col justify-start'>
                    <label htmlFor="">Project Image</label>
                    <input 
                        type="file" 
                        className="file-input file-input-bordered text-zinc-800 w-full max-w-xs" 
                        onChange={(e) => setNewProject((oldProj) => ({ ...oldProj, image: e.target.files[0] }))}
                    />                
                </div>

                <div className='flex flex-col justify-start'>
                    <label htmlFor="">Project Link</label>
                    <input 
                        className="input input-bordered w-full max-w-xs text-zinc-800" 
                        name='link' 
                        placeholder='Enter a name' 
                        onChange={updateProject}
                    />
                </div>

                <div className='w-full'>
                    <p>Selected Technologies</p>
                    <div className='min-h-[25px]'>
                        {newProject.technologies.map((tech) => (
                            <p className='text-white'>{tech}</p>
                        ))}
                    </div>

                </div>

                
                <div className='flex flex-col justify-start'>
                    <label htmlFor="">Technologies</label>
                    <select 
                        value={technologies[0]} 
                        onChange={(e) => setNewProject((oldExp) => ({ 
                            ...oldExp, technologies: [...oldExp.technologies, e.target.value] })
                        )}
                        className='select select-bordered w-full max-w-xs text-zinc-800'
                    >
                        <option selected className='text-zinc-800'>Choose the Tech</option>
                        {technologies.map((tech) => (
                            <option className='bg-zinc-800 text-white' key={tech.id} value={tech.name}>
                                {tech.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={createNewProject} className="btn btn-primary">
                    Create Project
                </button>
            </section>


            <section>
            <div className='flex justify-between'>
                    <div className='w-full'>
                        <div className='flex flex-col justify-start'>
                            <label htmlFor="">Project Link</label>
                            <input className="input input-bordered w-full max-w-xs text-zinc-800" name='link' placeholder='Enter a name' />
                        </div>

                        <div>
                            {[].map((link) => (
                                <p>{link}</p>
                            ))}
                        </div>
                    </div>
                    <button>
                        Add New
                    </button>
                </div>
            </section>
        </main>
    )
}

export async function getServerSideProps() {
    const technologies = await supabase.from('technologies').select();

    return {
        props: {
            technologies: technologies.data
        }
    }
}