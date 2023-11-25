import { useEffect, useState } from "react"

const users = {
    user_profile: {
        id: 0,
        user_id: 0,
        fullname: '',
        country: '',
        address: '',
        is_freelance: false,
        phone_number: '',
        status: 0,
        created_by: '',
        created_at: '',
        updated_by: '',
        updated_at: '',
        description: '',
        current_job: '',
        github_link: '',
        email_link: ''
    },
    social_media: [{
        id: 0,
        user_profile_id: 0,
        title: '',
        link: '',
        status: 0,
        created_by: '',
        created_at: '',
        updated_by: '',
        updated_at: ''
    }],
    hobby: [{
        id: 0,
        user_profile_id: 0,
        title: '',
        description: '',
        sequence: 0,
        status: 0,
        created_by: '',
        created_at: '',
        updated_by: '',
        updated_at: ''
    }],
    experience: [{
        id: 0,
        user_profile_id: 0,
        title: '',
        start_date: '',
        end_date: '',
        company_name: '',
        description: '',
        sequence: 0,
        status: 0,
        created_by: '',
        created_at: '',
        updated_by: '',
        updated_at: ''
    }],
    education: [{
        id: 0,
        user_profile_id: 0,
        title: '',
        start_date: '',
        end_date: '',
        campus_name: '',
        description: '',
        sequence: 0,
        status: 0,
        created_by: '',
        created_at: '',
        updated_by: '',
        updated_at: ''
    }]
}

const API_URL = import.meta.env.VITE_APP_API_URL;
const search = window.location.search;
const params = new URLSearchParams(search);
const username = params.get('username');
console.log(username);

export function GetUserProfile() {
  const [user, setUserProfile] = useState(users);
  const GetUserProfile = async () => {
    try {
      // const token = localStorage.getItem('accessToken');
      // const username = localStorage.getItem('username');
      const response = await fetch(`${API_URL}/userprofile?username=${username}`, {
        method: 'GET',
        // headers: {
        //   'Authorization': 'Bearer ' + {token},
        // }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserProfile(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    GetUserProfile();
  }, []);

    return {
        user
    }
}

    