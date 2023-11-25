interface ILoginState {
    username: string;
    password: string;
}

interface IUserProfile {
    user_profile: {
        id: number,
        user_id: number,
        fullname: string,
        country: string,
        address: string,
        is_freelance: boolean,
        phone_number: string,
        status: number,
        created_by: string,
        created_at: string,
        updated_by: string,
        updated_at: string,
        description: string,
        current_job: string,
        github_link: string,
        email_link: string
    }
}

interface ISocialMedia {
    social_media: {
        id: number,
        user_profile_id: number,
        title: string,
        link: string,
        status: number,
        created_by: string,
        created_at: string,
        updated_by: string,
        updated_at: string
    }[]
}

interface IHobby {
    hobby: {
        id: number,
        user_profile_id: number,
        title: string,
        description: string,
        sequence: number,
        status: number,
        created_by: string,
        created_at: string,
        updated_by: string,
        updated_at: string
    }[]
}

interface IExperience {
    experience: {
        id: number,
        user_profile_id: number,
        title: string,
        start_date: string,
        end_date: string,
        company_name: string,
        description: string,
        sequence: number,
        status: number,
        created_by: string,
        created_at: string,
        updated_by: string,
        updated_at: string
    }[]
}

interface IEducation {
    education: {
        id: number,
        user_profile_id: number,
        title: string,
        start_date: string,
        end_date: string,
        campus_name: string,
        description: string,
        sequence: number,
        status: number,
        created_by: string,
        created_at: string,
        updated_by: string,
        updated_at: string
    }[]
}
