export interface userUploadProfileResponse{
    id : string,
    racfID: String,
    uploadProfileID: [{
        id: number,
        profile: String
    }]
    auth : string,
}