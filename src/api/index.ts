import {appConfig} from "../config";
import {ProjectApi} from "./project";


export const TalentAcquisitionApi = {
    project: new ProjectApi(appConfig.baseApiUrl)
}