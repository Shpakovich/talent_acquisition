export abstract class BaseApi {
    protected constructor(readonly baseUrl: string) {
        this.init();
    }

    protected init() {
        void 0;
    }
}
