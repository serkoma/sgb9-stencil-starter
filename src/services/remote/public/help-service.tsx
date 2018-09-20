//import { LOCALSERVER } from '../../../global/allgemein';
import { RESTSERVER } from '../../../global/allgemein';

export interface HelpTag {
  _id: string,
  titel: string,
  text: string[]
}


export class HelpService {

	constructor() {
	}

	getHelp : any  = async (helpId: string): Promise<any> => {
		console.log(RESTSERVER + 'public/htmlhelp/' + helpId);
		return fetch( RESTSERVER + 'public/htmlhelp/' + helpId, {mode: 'cors'} )
		.then((response) => {
			console.log(response);
			if (response.status >= 200 && response.status < 300) {
        console.log("return Promise.resolve(response)");
        return Promise.resolve(response)
			  } else {
          console.log("return Promise.reject(new Error(response.statusText)");
          console.log(response.statusText);
          return Promise.reject(new Error(response.statusText))
			}
		})
		.then((response) => {
      console.log("return response.json()");
			return response.json()
		})
		.catch((err) => {
			console.error('An error occurred', err);
			return Promise.reject(err.message || err);
		});	
	}

}