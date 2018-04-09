import * as path from 'path';

const hadronRoot   = '/software/dp/Hadron';
/* tslint:disable:rule1 no-var-requires */
const automation   = require(path.join(hadronRoot, 'build_env/server/atlasserver/remoteplugins/automation/Automation'));
const autoUtils    = require(path.join(hadronRoot, 'build_env/server/atlasserver/remoteplugins/automation/autoUtils'));
const util         = require(path.join(hadronRoot, 'test/autoscripts/util'));

export function keyNameOf(key: string) {
    const keys = definitionsFrom(automation, autoUtils, util);

    for ( const candidate in keys ) {
        if ( keys.hasOwnProperty(candidate) && keys[ candidate ] === key ) {
            return candidate;
        }
    }

    return key;
}

function definitionsFrom(...potentialSources) {
    return potentialSources.concat({ Key: [] }).find(source => source && source.Key).Key;
}
