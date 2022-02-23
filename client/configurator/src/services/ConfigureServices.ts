import http from "@/http-common";

class ConfigureDataService {
    get(): Promise<any> {
        return http.get("/hello");
    }
}

export default new ConfigureDataService();
