export interface ProjectContract {
    params: undefined;
    response: {
        "id": number,
        "name": string,
        "description": string,
        "tags": string[],
        "logo": string,
        "participants": number[]
    };
}