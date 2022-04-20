import axios from "axios";
import ICep from "../dto/cepInfo"

const cepService = {
    async getCep(cep: string): Promise<ICep | void> {
        try {
            const response = await axios.get(`http://localhost:8000/${cep}`, {});
            return response.data as ICep;
        } catch {
            throw new Error("CEP invalido!");
        }
    }
}

export default cepService;
