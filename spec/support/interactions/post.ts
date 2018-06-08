import { Interaction, UsesAbilities } from '@serenity-js/core/lib/screenplay';
import { CallAnApi } from '../abilities/call_an_api';

export class Post implements Interaction {

    sendData = [{
        "deviceModel": "roku",
        "userIntent": "activationClientUserIntent.mvpdPicker"
    }]

    userInfo = [
        {
            "historicalMetadata":{"originalIssuedTimestamp":1525185629688,"originalGrantType":"user_name_password","originalVersion":2},            
            "tokenPropertyData":{"clientId":"88a4f3c6-f1de-42d7-8ef9-d3b00139ea6a","deviceSerialNumber":"e6bf56af-bd7b-40ae-9904-efdf78bbff13","permissions":[5,7,8],"countryCode":"US","productCode":"hboNow","deviceCode":"desktop","platformType":"desktop","serviceCode":"HBO","clientDeviceData":{"paymentProviderCode":"blackmarket"},"accountProviderCode":"hurley","userId":"fba9290e-a92a-4f4d-8338-089d2de575d9","affiliateCode":"HBO_OTT","parentalControls":{"ratingSystem":"US","movie":"NC-17","movieRestriction":1000,"tv":"TV-MA","tvRestriction":1000},"streamTrackingId":"fba9290e-a92a-4f4d-8338-089d2de575d9-hbo_ott","requiresAssetAuthz":false},
            "expirationMetadata":{"authzTimeoutMs":14400000,"authnTimeoutMs":31104000000,"authzExpirationUtc":1525219551780,"authnExpirationUtc":1556309151780},"currentMetadata":{"environment":"snp","version":2,"nonce":"09e62cab-2d1a-4c45-b820-2832eb6f578d","issuedTimestamp":1525205151780},"permissions":[5,7,8],"token_type":"access","environment":"snp","version":2
        }
    ]

    static resource = (resource: string) => new Post(resource);

    performAs(actor: UsesAbilities): PromiseLike<any> {
        return CallAnApi.as(actor).post(this.resource, {
            "deviceModel": "roku",
            "userIntent": "activationClientUserIntent.mvpdPicker"
        }, 
    );
    }

    constructor(private resource: string) { }

    toString = () => `{0} execute a POST on resource ${this.resource}`;
}
