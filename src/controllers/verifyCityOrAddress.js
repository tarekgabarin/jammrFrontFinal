
function verifyCityOrAddress(inputAddress, inputCity, inputProvince) {

    inputAddress = formatStrings(inputAddress);

    inputCity = formatStrings(inputCity);

    inputProvince = formatStrings(inputProvince);

    console.log('verifyCityOrAddress is running');

    const apiString = `https://maps.googleapis.com/maps/api/geocode/json?address=+${inputAddress}, +${inputCity}, +${inputProvince}, +CA&key=AIzaSyCZGDHMtmb2WAoZG1VukVSumsjz9kNGJOw`;

    console.log(apiString);

    axios.get(apiString)

        .then(response => {

            console.log(response);

            if (response.data["status"] === 'OK') {

                return true

            }
            else if (response.data["status"] === 'ZERO_RESULTS') {


                return false
            }


        })


        .catch(err => {

            if (err) throw err;

        });

}

module.exports = verifyCityOrAddress;