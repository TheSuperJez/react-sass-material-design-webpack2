import {post, get} from 'axios';

let path = 'http://localhost:1337/parse/classes/candidate',
	conf = {
		headers: {
			'X-Parse-Application-Id': 'app',
			'Content-Type': 'application/json'
		}
	}; 

class CandidateApi {
	
	static getAll() {
		return get(path, conf);
	}

	static saveCandidate(candidate) {
		return post(path, candidate, conf);
	} 
}

export default CandidateApi;
