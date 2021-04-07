const apiKey = 'VZO7T5AS2HeHyEyj-EK6_BfrDu_NHF_4DsAV8wDH8DXUvzHKTL7SnYg1lFV-I3P_2Vd6Al56dC5TR_Pb3Bgz7iaUUizT_DPkzHV2SZBaTJLHp1cyXBQIPQCE8whuYHYx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors.bridged.cc/https://api.yelp.com/v3/businesses/search?term=${term}&location=sanfrancisco&sort_by=${sortBy}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
