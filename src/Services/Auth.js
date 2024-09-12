import Path from "./Path";

export function AuthService() {
    userLogin: async (user) {
       try {
           const response = await Path.post("/login", ...user);
            if (response.status === 200) {
                console.log(response.data);

                return response.data;
            } else {
               return "unauthorized";
            }
           
       } catch (error) {
           console.log(error);
           return "unauthorized";
       }
    },
    userSignup: function(user) {
        try {
            const response = await Path.post("/signup", ...user);
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                return "unable to signup";
            }
        } catch (error) {
            return "unable to signup";
            console.log(error);
        }
    },
    userLogout: function() {
        return new Promise((resolve, reject) => {
            resolve(user);
        });
    },
    getUser: function() {
        return new Promise((resolve, reject) => {
            resolve({
                name: "Aarogya",
                email: "aarogya@gmail.com",
                phone: "9876543210",
                address: "123 Main Street, New York, NY 10012",
                avatar: "https://i.pravatar.cc/150?img=3",
            });
        });

    },



}

