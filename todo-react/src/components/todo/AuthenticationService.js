class AuthenticationService{
    registerLoginSuccessful(username){
        console.log('Login Sucessful');
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLogged(){
        let user = sessionStorage.getItem("authenticatedUser");
        if(user === null) return false
                return true
    }

    fetchUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return '';
        }else{
            return user;
        }
    }
}
// eslint-disable-next-line
export default new AuthenticationService;
