export interface userUploadProfileResponse{
    id : string,
    racfID: String,
    uploadProfiles: [{
        id: number,
        profile: String
    }]
    auth : string,
}