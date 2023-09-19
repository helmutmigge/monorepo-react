import {version, name} from '../../package.json'

type AppInfo = {
    version: string
    name: string
}

export const getAppInfo = ()=>{
    return {
        name: name,
        version: version
    } satisfies AppInfo
}


