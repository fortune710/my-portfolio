import supabase from "../utils/supabase";

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}

/**
 * @typedef {Object} Project
 * @property {string} name 
 * @property {string} description
 * @property {string} image
 * @property {string} link
 * @property {string[]} technologies
 */

/**
 * @typedef {Object} Experience
 * @property {string} name 
 * @property {string} description
 * @property {string} company
 * @property {string} image
 * @property {string[]} links
 * @property {string} role
 * @property {number[]} technologies
 */

const useCreateProject = () => {

    /**
     * @param {Project} projectData
     */
    async function addNewProject(projectData) {
        const { name, description, image, link, technologies } = projectData;
        const projectId = generateUUID();

        const imageUrl = await supabase.storage.from("project_images").upload(`/images/${projectId}.png`, image, {
            upsert: false
        })
        console.log(imageUrl)
        return await supabase.from('projects').insert({
            id: projectId, name, description, link, image: imageUrl.data, technologies
        })
        return await Promise.all([
            await supabase.from('project_technologies').insert(technologies.map((tech) => 
                ({ project_id: projectId, technology_id: tech })
            ))
        ])
    }

    /**
     * 
     * @param {Experience} experienceData 
     */
    async function addNewExperience(experienceData) {
        return await supabase.from('experiences').insert({
            ...experienceData
        })
    }

    return {
        addNewProject,
        addNewExperience
    }
}

export default useCreateProject;