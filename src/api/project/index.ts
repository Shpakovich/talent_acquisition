import { BaseApi } from '../BaseApi';
import {createRequest} from "../createRequest";
import {ApiMethod} from "../types";
import {ProjectContract} from "./contracts";

const API_BASE = 'project';

export class ProjectApi extends BaseApi {
    constructor(baseUrl: string) {
        super(`${baseUrl}${API_BASE}`);
        // add request function
        this.get = createRequest(this.baseUrl, 'GET');
        this.getById = createRequest(`${this.baseUrl}`, 'GET');
        this.create = createRequest(`${this.baseUrl}`, 'POST');
        this.update = createRequest(`${this.baseUrl}`, 'PUT');
    }

    get!: ApiMethod<ProjectContract>;
    getById!: ApiMethod<any>;
    create!: ApiMethod<any>;
    update!: ApiMethod<any>;
}