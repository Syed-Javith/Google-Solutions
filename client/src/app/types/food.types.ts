export interface Food {
    _id: String,
    description: String,
    location: String,
    distributor: String
    isDelivered: Boolean,
    isBooked: Boolean,
    image: String
    foods: String
}
export interface User {
    username: String,
    email: String,
    mobileNumber: Number,
    pincode: String
    isAdmin: Boolean
    role: "G" | "D" | "V",
    token : String
}
export interface LoginUser {
    email: String,
    password: String
}
export interface RegisterUser{
    username: String,
    email: String,
    mobileNumber: Number,
    pincode: String,
    role: "G" | "D" | "V",
    password : String
}