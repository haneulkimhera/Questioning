import axiosInstance from "../utils/axiosInstance";

export const signup = (username, password1, password2, email) => {
    return axiosInstance
        .post("/auth/register", {
            username,
            password: password1,
            email,
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post("/auth/login", { email, password });
        
        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);

        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
};

export const logout = () => {

    return axiosInstance
        .post("/auth/logout", {},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        .then((response) => {
            console.log("✅ 로그아웃 성공:", response.data);
            localStorage.removeItem("access_token");
            return response.data;
        })
        .catch((error) => {
            console.error("❌ 로그아웃 실패:", error.response ? error.response.data : error.message);
            throw error;
        });
};

export const getAllUsers = () => {
    return axiosInstance
        .get("/auth/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            console.error("❌ 사용자 목록을 불러오는 데 실패했습니다.", error);
            throw error;
        });
};


export const getUser = (userId) => {
    return axiosInstance
        .get(`/user/${userId}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};

export const getProfile = () => {
    return axiosInstance
        .get("/user/me")
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
};
