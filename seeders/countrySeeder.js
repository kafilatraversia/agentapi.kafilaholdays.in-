const Country = require('./../models/Country');

const contryData = [
    {
        "countryCode": "AF",
        "country": "Afghanistan"
    },
    {
        "countryCode": "AX",
        "country": "Aland Islands"
    },
    {
        "countryCode": "AL",
        "country": "Albania"
    },
    {
        "countryCode": "DZ",
        "country": "Algeria"
    },
    {
        "countryCode": "AS",
        "country": "American Samoa"
    },
    {
        "countryCode": "AD",
        "country": "Andorra"
    },
    {
        "countryCode": "AO",
        "country": "Angola"
    },
    {
        "countryCode": "AI",
        "country": "Anguilla"
    },
    {
        "countryCode": "AQ",
        "country": "Antarctica"
    },
    {
        "countryCode": "AG",
        "country": "Antigua and Barbuda"
    },
    {
        "countryCode": "AR",
        "country": "Argentina"
    },
    {
        "countryCode": "AM",
        "country": "Armenia"
    },
    {
        "countryCode": "AW",
        "country": "Aruba"
    },
    {
        "countryCode": "AU",
        "country": "Australia"
    },
    {
        "countryCode": "AT",
        "country": "Austria"
    },
    {
        "countryCode": "AZ",
        "country": "Azerbaijan"
    },
    {
        "countryCode": "BS",
        "country": "Bahamas"
    },
    {
        "countryCode": "BH",
        "country": "Bahrain"
    },
    {
        "countryCode": "BD",
        "country": "Bangladesh"
    },
    {
        "countryCode": "BB",
        "country": "Barbados"
    },
    {
        "countryCode": "BY",
        "country": "Belarus"
    },
    {
        "countryCode": "BE",
        "country": "Belgium"
    },
    {
        "countryCode": "BZ",
        "country": "Belize"
    },
    {
        "countryCode": "BJ",
        "country": "Benin"
    },
    {
        "countryCode": "BM",
        "country": "Bermuda"
    },
    {
        "countryCode": "BT",
        "country": "Bhutan"
    },
    {
        "countryCode": "BO",
        "country": "Bolivia"
    },
    {
        "countryCode": "BQ",
        "country": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "countryCode": "BA",
        "country": "Bosnia and Herzegovina"
    },
    {
        "countryCode": "BW",
        "country": "Botswana"
    },
    {
        "countryCode": "BV",
        "country": "Bouvet Island"
    },
    {
        "countryCode": "BR",
        "country": "Brazil"
    },
    {
        "countryCode": "IO",
        "country": "British Indian Ocean Territory"
    },
    {
        "countryCode": "BN",
        "country": "Brunei Darussalam"
    },
    {
        "countryCode": "BG",
        "country": "Bulgaria"
    },
    {
        "countryCode": "BF",
        "country": "Burkina Faso"
    },
    {
        "countryCode": "BI",
        "country": "Burundi"
    },
    {
        "countryCode": "KH",
        "country": "Cambodia"
    },
    {
        "countryCode": "CM",
        "country": "Cameroon"
    },
    {
        "countryCode": "CA",
        "country": "Canada"
    },
    {
        "countryCode": "CV",
        "country": "Cape Verde"
    },
    {
        "countryCode": "KY",
        "country": "Cayman Islands"
    },
    {
        "countryCode": "CF",
        "country": "Central African Republic"
    },
    {
        "countryCode": "TD",
        "country": "Chad"
    },
    {
        "countryCode": "CL",
        "country": "Chile"
    },
    {
        "countryCode": "CN",
        "country": "China"
    },
    {
        "countryCode": "CX",
        "country": "Christmas Island"
    },
    {
        "countryCode": "CC",
        "country": "Cocos (Keeling) Islands"
    },
    {
        "countryCode": "CO",
        "country": "Colombia"
    },
    {
        "countryCode": "KM",
        "country": "Comoros"
    },
    {
        "countryCode": "CG",
        "country": "Congo"
    },
    {
        "countryCode": "CD",
        "country": "Congo, The Democratic Republic of the"
    },
    {
        "countryCode": "CK",
        "country": "Cook Islands"
    },
    {
        "countryCode": "CR",
        "country": "Costa Rica"
    },
    {
        "countryCode": "CI",
        "country": "Cote d'Ivoire"
    },
    {
        "countryCode": "HR",
        "country": "Croatia"
    },
    {
        "countryCode": "CU",
        "country": "Cuba"
    },
    {
        "countryCode": "CW",
        "country": "Curacao"
    },
    {
        "countryCode": "CY",
        "country": "Cyprus"
    },
    {
        "countryCode": "CZ",
        "country": "Czech Republic"
    },
    {
        "countryCode": "DK",
        "country": "Denmark"
    },
    {
        "countryCode": "DJ",
        "country": "Djibouti"
    },
    {
        "countryCode": "DM",
        "country": "Dominica"
    },
    {
        "countryCode": "DO",
        "country": "Dominican Republic"
    },
    {
        "countryCode": "EC",
        "country": "Ecuador"
    },
    {
        "countryCode": "EG",
        "country": "Egypt"
    },
    {
        "countryCode": "SV",
        "country": "El Salvador"
    },
    {
        "countryCode": "GQ",
        "country": "Equatorial Guinea"
    },
    {
        "countryCode": "ER",
        "country": "Eritrea"
    },
    {
        "countryCode": "EE",
        "country": "Estonia"
    },
    {
        "countryCode": "ET",
        "country": "Ethiopia"
    },
    {
        "countryCode": "FK",
        "country": "Falkland Islands (Malvinas)"
    },
    {
        "countryCode": "FO",
        "country": "Faroe Islands"
    },
    {
        "countryCode": "FJ",
        "country": "Fiji"
    },
    {
        "countryCode": "FI",
        "country": "Finland"
    },
    {
        "countryCode": "FR",
        "country": "France"
    },
    {
        "countryCode": "GF",
        "country": "French Guiana"
    },
    {
        "countryCode": "PF",
        "country": "French Polynesia"
    },
    {
        "countryCode": "TF",
        "country": "French Southern Territories"
    },
    {
        "countryCode": "GA",
        "country": "Gabon"
    },
    {
        "countryCode": "GM",
        "country": "Gambia"
    },
    {
        "countryCode": "GE",
        "country": "Georgia"
    },
    {
        "countryCode": "DE",
        "country": "Germany"
    },
    {
        "countryCode": "GH",
        "country": "Ghana"
    },
    {
        "countryCode": "GI",
        "country": "Gibraltar"
    },
    {
        "countryCode": "GR",
        "country": "Greece"
    },
    {
        "countryCode": "GL",
        "country": "Greenland"
    },
    {
        "countryCode": "GD",
        "country": "Grenada"
    },
    {
        "countryCode": "GP",
        "country": "Guadeloupe"
    },
    {
        "countryCode": "GU",
        "country": "Guam"
    },
    {
        "countryCode": "GT",
        "country": "Guatemala"
    },
    {
        "countryCode": "GG",
        "country": "Guernsey"
    },
    {
        "countryCode": "GN",
        "country": "Guinea"
    },
    {
        "countryCode": "GW",
        "country": "Guinea-Bissau"
    },
    {
        "countryCode": "GY",
        "country": "Guyana"
    },
    {
        "countryCode": "HT",
        "country": "Haiti"
    },
    {
        "countryCode": "HM",
        "country": "Heard Island and McDonald Islands"
    },
    {
        "countryCode": "VA",
        "country": "Holy See (Vatican City State)"
    },
    {
        "countryCode": "HN",
        "country": "Honduras"
    },
    {
        "countryCode": "HK",
        "country": "Hong Kong"
    },
    {
        "countryCode": "HU",
        "country": "Hungary"
    },
    {
        "countryCode": "IS",
        "country": "Iceland"
    },
    {
        "countryCode": "IN",
        "country": "India"
    },
    {
        "countryCode": "ID",
        "country": "Indonesia"
    },
    {
        "countryCode": "IR",
        "country": "Iran, Islamic Republic of"
    },
    {
        "countryCode": "IQ",
        "country": "Iraq"
    },
    {
        "countryCode": "IE",
        "country": "Ireland"
    },
    {
        "countryCode": "IM",
        "country": "Isle of Man"
    },
    {
        "countryCode": "IL",
        "country": "Israel"
    },
    {
        "countryCode": "IT",
        "country": "Italy"
    },
    {
        "countryCode": "JM",
        "country": "Jamaica"
    },
    {
        "countryCode": "JP",
        "country": "Japan"
    },
    {
        "countryCode": "JE",
        "country": "Jersey"
    },
    {
        "countryCode": "JO",
        "country": "Jordan"
    },
    {
        "countryCode": "KZ",
        "country": "Kazakhstan"
    },
    {
        "countryCode": "KE",
        "country": "Kenya"
    },
    {
        "countryCode": "KI",
        "country": "Kiribati"
    },
    {
        "countryCode": "KP",
        "country": "Korea, Democratic People's Republic of"
    },
    {
        "countryCode": "KR",
        "country": "Korea, Republic of"
    },
    {
        "countryCode": "KW",
        "country": "Kuwait"
    },
    {
        "countryCode": "KG",
        "country": "Kyrgyzstan"
    },
    {
        "countryCode": "LA",
        "country": "Lao People's Democratic Republic"
    },
    {
        "countryCode": "LV",
        "country": "Latvia"
    },
    {
        "countryCode": "LB",
        "country": "Lebanon"
    },
    {
        "countryCode": "LS",
        "country": "Lesotho"
    },
    {
        "countryCode": "LR",
        "country": "Liberia"
    },
    {
        "countryCode": "LY",
        "country": "Libya"
    },
    {
        "countryCode": "LI",
        "country": "Liechtenstein"
    },
    {
        "countryCode": "LT",
        "country": "Lithuania"
    },
    {
        "countryCode": "LU",
        "country": "Luxembourg"
    },
    {
        "countryCode": "MO",
        "country": "Macao"
    },
    {
        "countryCode": "MK",
        "country": "Macedonia, The Former Yugoslav Republic of"
    },
    {
        "countryCode": "MG",
        "country": "Madagascar"
    },
    {
        "countryCode": "MW",
        "country": "Malawi"
    },
    {
        "countryCode": "MY",
        "country": "Malaysia"
    },
    {
        "countryCode": "MV",
        "country": "Maldives"
    },
    {
        "countryCode": "ML",
        "country": "Mali"
    },
    {
        "countryCode": "MT",
        "country": "Malta"
    },
    {
        "countryCode": "MH",
        "country": "Marshall Islands"
    },
    {
        "countryCode": "MQ",
        "country": "Martinique"
    },
    {
        "countryCode": "MR",
        "country": "Mauritania"
    },
    {
        "countryCode": "MU",
        "country": "Mauritius"
    },
    {
        "countryCode": "YT",
        "country": "Mayotte"
    },
    {
        "countryCode": "MX",
        "country": "Mexico"
    },
    {
        "countryCode": "FM",
        "country": "Micronesia, Federated States of"
    },
    {
        "countryCode": "MD",
        "country": "Moldova, Republic of"
    },
    {
        "countryCode": "MC",
        "country": "Monaco"
    },
    {
        "countryCode": "MN",
        "country": "Mongolia"
    },
    {
        "countryCode": "ME",
        "country": "Montenegro"
    },
    {
        "countryCode": "MS",
        "country": "Montserrat"
    },
    {
        "countryCode": "MA",
        "country": "Morocco"
    },
    {
        "countryCode": "MZ",
        "country": "Mozambique"
    },
    {
        "countryCode": "MM",
        "country": "Myanmar"
    },
    {
        "countryCode": "NA",
        "country": "Namibia"
    },
    {
        "countryCode": "NR",
        "country": "Nauru"
    },
    {
        "countryCode": "NP",
        "country": "Nepal"
    },
    {
        "countryCode": "NL",
        "country": "Netherlands"
    },
    {
        "countryCode": "NC",
        "country": "New Caledonia"
    },
    {
        "countryCode": "NZ",
        "country": "New Zealand"
    },
    {
        "countryCode": "NI",
        "country": "Nicaragua"
    },
    {
        "countryCode": "NE",
        "country": "Niger"
    },
    {
        "countryCode": "NG",
        "country": "Nigeria"
    },
    {
        "countryCode": "NU",
        "country": "Niue"
    },
    {
        "countryCode": "NF",
        "country": "Norfolk Island"
    },
    {
        "countryCode": "MP",
        "country": "Northern Mariana Islands"
    },
    {
        "countryCode": "NO",
        "country": "Norway"
    },
    {
        "countryCode": "OM",
        "country": "Oman"
    },
    {
        "countryCode": "PK",
        "country": "Pakistan"
    },
    {
        "countryCode": "PW",
        "country": "Palau"
    },
    {
        "countryCode": "PS",
        "country": "Palestine, State of"
    },
    {
        "countryCode": "PA",
        "country": "Panama"
    },
    {
        "countryCode": "PG",
        "country": "Papua New Guinea"
    },
    {
        "countryCode": "PY",
        "country": "Paraguay"
    },
    {
        "countryCode": "PE",
        "country": "Peru"
    },
    {
        "countryCode": "PH",
        "country": "Philippines"
    },
    {
        "countryCode": "PN",
        "country": "Pitcairn"
    },
    {
        "countryCode": "PL",
        "country": "Poland"
    },
    {
        "countryCode": "PT",
        "country": "Portugal"
    },
    {
        "countryCode": "PR",
        "country": "Puerto Rico"
    },
    {
        "countryCode": "QA",
        "country": "Qatar"
    },
    {
        "countryCode": "RE",
        "country": "Reunion"
    },
    {
        "countryCode": "RO",
        "country": "Romania"
    },
    {
        "countryCode": "RU",
        "country": "Russian Federation"
    },
    {
        "countryCode": "RW",
        "country": "Rwanda"
    },
    {
        "countryCode": "BL",
        "country": "Saint Barthelemy"
    },
    {
        "countryCode": "SH",
        "country": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "countryCode": "KN",
        "country": "Saint Kitts and Nevis"
    },
    {
        "countryCode": "LC",
        "country": "Saint Lucia"
    },
    {
        "countryCode": "MF",
        "country": "Saint Martin (French part)"
    },
    {
        "countryCode": "PM",
        "country": "Saint Pierre and Miquelon"
    },
    {
        "countryCode": "VC",
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "countryCode": "WS",
        "country": "Samoa"
    },
    {
        "countryCode": "SM",
        "country": "San Marino"
    },
    {
        "countryCode": "ST",
        "country": "Sao Tome and Principe"
    },
    {
        "countryCode": "SA",
        "country": "Saudi Arabia"
    },
    {
        "countryCode": "SN",
        "country": "Senegal"
    },
    {
        "countryCode": "RS",
        "country": "Serbia"
    },
    {
        "countryCode": "SC",
        "country": "Seychelles"
    },
    {
        "countryCode": "SL",
        "country": "Sierra Leone"
    },
    {
        "countryCode": "SG",
        "country": "Singapore"
    },
    {
        "countryCode": "SX",
        "country": "Sint Maarten (Dutch part)"
    },
    {
        "countryCode": "SK",
        "country": "Slovakia"
    },
    {
        "countryCode": "SI",
        "country": "Slovenia"
    },
    {
        "countryCode": "SB",
        "country": "Solomon Islands"
    },
    {
        "countryCode": "SO",
        "country": "Somalia"
    },
    {
        "countryCode": "ZA",
        "country": "South Africa"
    },
    {
        "countryCode": "GS",
        "country": "South Georgia and the South Sandwich Islands"
    },
    {
        "countryCode": "SS",
        "country": "South Sudan"
    },
    {
        "countryCode": "ES",
        "country": "Spain"
    },
    {
        "countryCode": "LK",
        "country": "Sri Lanka"
    },
    {
        "countryCode": "SD",
        "country": "Sudan"
    },
    {
        "countryCode": "SR",
        "country": "Suricountry"
    },
    {
        "countryCode": "SJ",
        "country": "Svalbard and Jan Mayen"
    },
    {
        "countryCode": "SZ",
        "country": "Swaziland"
    },
    {
        "countryCode": "SE",
        "country": "Sweden"
    },
    {
        "countryCode": "CH",
        "country": "Switzerland"
    },
    {
        "countryCode": "SY",
        "country": "Syrian Arab Republic"
    },
    {
        "countryCode": "TW",
        "country": "Taiwan, Province of China"
    },
    {
        "countryCode": "TJ",
        "country": "Tajikistan"
    },
    {
        "countryCode": "TZ",
        "country": "Tanzania, United Republic of"
    },
    {
        "countryCode": "TH",
        "country": "Thailand"
    },
    {
        "countryCode": "TL",
        "country": "Timor-Leste"
    },
    {
        "countryCode": "TG",
        "country": "Togo"
    },
    {
        "countryCode": "TK",
        "country": "Tokelau"
    },
    {
        "countryCode": "TO",
        "country": "Tonga"
    },
    {
        "countryCode": "TT",
        "country": "Trinidad and Tobago"
    },
    {
        "countryCode": "TN",
        "country": "Tunisia"
    },
    {
        "countryCode": "TR",
        "country": "Turkey"
    },
    {
        "countryCode": "TM",
        "country": "Turkmenistan"
    },
    {
        "countryCode": "TC",
        "country": "Turks and Caicos Islands"
    },
    {
        "countryCode": "TV",
        "country": "Tuvalu"
    },
    {
        "countryCode": "UG",
        "country": "Uganda"
    },
    {
        "countryCode": "UA",
        "country": "Ukraine"
    },
    {
        "countryCode": "AE",
        "country": "United Arab Emirates"
    },
    {
        "countryCode": "GB",
        "country": "United Kingdom"
    },
    {
        "countryCode": "US",
        "country": "United States"
    },
    {
        "countryCode": "UM",
        "country": "United States Minor Outlying Islands"
    },
    {
        "countryCode": "UY",
        "country": "Uruguay"
    },
    {
        "countryCode": "UZ",
        "country": "Uzbekistan"
    },
    {
        "countryCode": "VU",
        "country": "Vanuatu"
    },
    {
        "countryCode": "VE",
        "country": "Venezuela, Bolivarian Republic of"
    },
    {
        "countryCode": "VN",
        "country": "Viet Nam"
    },
    {
        "countryCode": "VG",
        "country": "Virgin Islands, British"
    },
    {
        "countryCode": "VI",
        "country": "Virgin Islands, U.S."
    },
    {
        "countryCode": "WF",
        "country": "Wallis and Futuna"
    },
    {
        "countryCode": "EH",
        "country": "Western Sahara"
    },
    {
        "countryCode": "YE",
        "country": "Yemen"
    },
    {
        "countryCode": "ZM",
        "country": "Zambia"
    },
    {
        "countryCode": "ZW",
        "country": "Zimbabwe"
    }
]




const seedCountry = async () => {
    try {
        // Check if any country already exist
        const existing = await Country.find();

        if (existing.length === 0) {
            await Country.create(contryData);
            console.log('country table seeded successfully.');

        } else {
          //  console.log('country table already exists. Skipping seeding.');
        }
    } catch (err) {
        console.error('Error seeding country table:', err);
    }
};


module.exports = {
    seedCountry
};