import axios from 'axios';

const SearchImages  = async () => {

    try {

        const response = await axios.get('https://api.unsplash.com/search/photos', {

            headers: {

                Authorization: 'Client-ID B7eqJAuHTGhmM4i5m-eqcV2TfAWEXVQyQi-XnYrgdww'

            },

            params: {

                query: 'gatos'

            }

        });

        console.log(response.data.results);

        return response.data.results;

    } catch (error) {

        console.error('Error al realizar la solicitud:', error);

        throw error;

    }

};

export default SearchImages;

