import instance from "./instance";

const companyServices = {
    getCompanies: async () => {
        return await instance.get('/companies');
    }
}

export default companyServices;