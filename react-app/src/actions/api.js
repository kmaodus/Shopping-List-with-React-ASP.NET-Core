import axios from 'axios'
import { product } from '../reducers/product'

const baseUrl = "http://localhost:60528/api/"

export default {
	product(url = baseUrl + 'product/') {
		return {
			fetchAll: () => axios.get(url),
			fetchById: id => axios.get(url + id),
			create: newRecord => axios.post(url, newRecord),
			update: (id, updateRecord) => axios.put(url + id, updateRecord),
			delete: id => axios.delete(url + id)

		}
	}
}