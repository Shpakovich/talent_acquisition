import {createEvent, createStore} from "effector";

interface Project {
    "id": number,
    "name": string,
    "description": string,
    "tags": string[],
    "logo": string,
    "dateStart": Date,
    "dateEnd": Date,
    "participants": number[]
}

const setProject = createEvent<Project[]>();
const $project = createStore<Project[]>([]).on(setProject, (store, projects)=> {
    console.debug('setProject', projects)
    return projects
});

export { $project, setProject };