const fetch = require('node-fetch');
const url="https://york.vertoengage.com/engage/api/api/cac-open-clinic/v1/appointments/Qs8skqfT6Bsz9riZhcoXFDElzgtKx5XRO_hg3sl6YTw="

const data ={
    "date":"2021-07-10T04:00:00.000Z",
    "time_slot":{
        "start":"14:20",
        "end":"14:30",
        "booked":6,
        "capacity":4,
        "startDateString":"2021-07-10T14:20:00-04:00",
        "endDateString":"2021-07-10T14:30:00-04:00"},
        "patient_first_name":"mark",
        "patient_last_name":"ma",
        "patient_sex":"Male",
        "patient_dob":"1982-06-17",
        "patient_address_one":"99 farmhouse ormsby cres",
        "patient_city":"Aurora",
        "patient_state_or_province":"ON",
        "patient_postal_code":"L4E0A8",
        "consent":true,
        "home_phone_number":"4163952782",
        "phone_number":"4163952781",
        "email":"mark.ma@live.ca",
        "slot_type":"PATIENT",
        "additional_people":"0",
        "extra_info":{
            "priority_group":"Second dose",
            "dose_selected":"Second",
            "support_person":"No"
        },
        "location_id":"GIP",
        "email_consent":true,
        "sms_consent":false,
        "id":"Qs8skqfT6Bsz9riZhcoXFDElzgtKx5XRO_hg3sl6YTw=",
        "key":"b53ad1ce-e1e6-48ba-a6d1-edcff5df87e3"
    }

    fetch(url, {
        body: JSON.stringify(data), 
        authority: "york.vertoengage.com",
        headers: {
          'content-type': 'application/json'
        },
        method: 'PATCH', 
      })
      .then(response => console.log(response.json()));
