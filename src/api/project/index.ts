import { BaseApi } from '../BaseApi';
import {createRequest} from "../createRequest";
import {ApiMethod} from "../types";
import {ProjectContract} from "./contracts";

const API_BASE = 'project';

export class ProjectApi extends BaseApi {
    constructor(baseUrl: string) {
        super(`${baseUrl}${API_BASE}`);
    }

    init(): void {
        this.get = createRequest(this.baseUrl, 'GET');
        this.getById = createRequest(`${this.baseUrl}`, 'GET');
        this.create = createRequest(`${this.baseUrl}`, 'Post');
        this.update = createRequest(`${this.baseUrl}`, 'Put');
    }

    get!: ApiMethod<ProjectContract>;
    getById!: ApiMethod<any>;
    create!: ApiMethod<any>;
    update!: ApiMethod<any>;
}