    // export const idCheck = (id) => {
    //     let emailreg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;
    
    //     return emailreg.test(id);
    // }
    
    // 닉네임 형식
    export const usernameCheck = (user_name) => {
        let Nickreg = /^[가-힣a-zA-Z]+$/
    return Nickreg.test(user_name);
    };
    
    // 비밀번호 체크
        export const pwdCheck = (pwd_check) => {
        let pwdreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,15}$/;
        return pwdreg.test(pwd_check);
        };
        
        export const titleCheck = (title) => {
        let titlereg = /^.{1,10}$/ ;
        return titlereg.test(title);
        };