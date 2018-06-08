import {Ability, UsesAbilities} from '@serenity-js/core/lib/screenplay';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

/**
 * Call an Api is the ability to correspond with an Api by the npm package axios.
 */
export class CallAnApi implements Ability {

    private lastResponse: AxiosResponse;

    /**
     * ability to Call and api at a specific baseUrl
     * Timeout is set to 1s and headers Accept application/json and application/xml
     *
     * @param {string} baseURL
     * @returns {CallAnApi}
     */
    static at(baseURL: string) {
        const axiosInstance: AxiosInstance = axios.create({
            baseURL,
            timeout: 1000,
            headers: { 
                //Accept: 'application/json,application/xml,application/HT',
                'x-userinfo': '{ "historicalMetadata":{"originalIssuedTimestamp":1525185629688,"originalGrantType":"user_name_password","originalVersion":2}, "tokenPropertyData":{"clientId":"88a4f3c6-f1de-42d7-8ef9-d3b00139ea6a","deviceSerialNumber":"e6bf56af-bd7b-40ae-9904-efdf78bbff13","permissions":[5,7,8],"countryCode":"US","productCode":"hboNow","deviceCode":"desktop","platformType":"desktop","serviceCode":"HBO","clientDeviceData":{"paymentProviderCode":"blackmarket"},"accountProviderCode":"hurley","userId":"fba9290e-a92a-4f4d-8338-089d2de575d9","affiliateCode":"HBO_OTT","parentalControls":{"ratingSystem":"US","movie":"NC-17","movieRestriction":1000,"tv":"TV-MA","tvRestriction":1000},"streamTrackingId":"fba9290e-a92a-4f4d-8338-089d2de575d9-hbo_ott","requiresAssetAuthz":false}, "expirationMetadata":{"authzTimeoutMs":14400000,"authnTimeoutMs":31104000000,"authzExpirationUtc":1525219551780,"authnExpirationUtc":1556309151780},"currentMetadata":{"environment":"snp","version":2,"nonce":"09e62cab-2d1a-4c45-b820-2832eb6f578d","issuedTimestamp":1525205151780},"permissions":[5,7,8],"token_type":"access","environment":"snp","version":2 }' 
            },
        });
        return new CallAnApi(axiosInstance);
    }

    /**
     * Ability to Call an Api with a given axios instance.
     *
     * @param {AxiosInstance} axiosInstance
     * @returns {CallAnApi}
     */
    static using(axiosInstance: AxiosInstance) {
        return new CallAnApi(axiosInstance);
    }

    /**
     * Used to access the Actor's ability to CallAnApi from within the Interaction classes, such as GET or PUT
     *
     * @param actor
     * @return {CallAnApi}
     */
    static as(actor: UsesAbilities): CallAnApi {
        return actor.abilityTo(CallAnApi);
    }

    /**
     * Call the api method get on the url.
     * Every response will be resolved and put into the lastResponse.
     *
     * @param {string} url
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    get(url: string, config?: AxiosRequestConfig): PromiseLike<void> {
        return this.axiosInstance.get(url, config).then(
            fulfilled => Promise.resolve(this.lastResponse = fulfilled),
            rejected => Promise.resolve(this.lastResponse = rejected),
        );
    }

    /**
     * Call the api method post on the url.
     * Every response will be resolved and put into the lastResponse.
     *
     * @param {string} url
     * @param data
     * @param {AxiosRequestConfig} config
     * @returns {PromiseLike<void>}
     */
    post(url: string, data?: any, config?: AxiosRequestConfig): PromiseLike<void> {

        return this.axiosInstance.post(url, data, config).then(
            fulfilled => Promise.resolve(this.lastResponse = fulfilled),
            rejected => Promise.resolve(this.lastResponse = rejected),
        );
    }

    getLastResponse(): PromiseLike<AxiosResponse> {
        
        let p = Promise.resolve(this.lastResponse);
        
        p.then(value => console.log(value.request));

        return Promise.resolve(this.lastResponse);
    }

    constructor(private axiosInstance: AxiosInstance) {
    }
}
