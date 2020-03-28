<template>
    <div class="landing-container">
        <div class="max-width">
            <div class="container">
                <div class="login-container">
                    <form class="basic-auth">
                        <div class="login-textfield blue">
                            <input type="text" required />
                            <label data-content="Username / Email">Username / Email</label>
                        </div>

                        <div class="login-textfield red">
                            <input type="password" required />
                            <label data-content="Password">Password</label>
                            <div class="login-link">
                                <a href="/forgot">Forgot Password</a>
                            </div>
                        </div>
                        <button class="login-submit">Login</button>
                    </form>
                    <div class="auth-spacer"></div>
                    <div class="tp-auth">
                        <img src="@/assets/auth_buttons/g_signin_disabled@2x.png" class="tp-button" />
                    </div>
                </div>
                <div class="image-container">
                    <img src="@/assets/IMG/ios.svg" class="side-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingContent"
    };
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .login-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 600px;
        height: 600px;
        background: #000000;
        border-radius: 32px;
    }

    .basic-auth {
        width: 100%;
        padding-top: 80px;
    }

    .login-textfield {
        height: 4rem;
        padding-top: 2rem;
        width: 70%;
        margin: 0 auto;
    }

    .login-submit {
        width: 40%;
        display: block;
        margin: 20px auto 60px auto;
        height: 50px;
        border: none;
        background: #4143e0;
        color: #fff;
        border-radius: 5px;
    }

    .login-textfield input {
        background: none;
        border: none;
        display: block;
        font-size: 1rem;
        padding: 0.25rem 0.1rem;
        width: 100%;
        border-bottom: 2px solid #fff;
        color: #ffffff;
        font-weight: 600;
    }
    .login-textfield input:focus {
        outline: none;
    }
    .login-textfield label {
        display: inline-block;
        font-size: 0;
        pointer-events: none;
        position: relative;
        font-family: $title-font;
        font-weight: 700;
        width: 100%;
        color: #ffffff;
    }
    .login-textfield label::before {
        content: attr(data-content);
        position: relative;
        transition: all 0.2s ease;
        will-change: font-size, top;
    }
    .login-textfield label::after {
        bottom: 0.9rem;
        content: "";
        height: 0.3rem;
        left: 50%;
        position: absolute;
        transition: all 0.2s ease;
        width: 0;
        will-change: width, left;
    }
    .login-textfield label::before,
    .login-textfield input[required]:focus ~ label::before {
        font-size: 0.75rem;
        top: -3.25rem;
    }
    .login-textfield input:focus ~ label::after {
        left: 0%;
        width: 100%;
    }
    .login-textfield input:invalid ~ label::before {
        font-size: 1rem;
        top: -2rem;
    }

    .login-link {
        font-family: $title-font;
        font-weight: 400;
        font-size: 14px;
        margin-top: -12px;
    }

    a {
        color: #fff;
    }

    .auth-spacer {
        height: 2px;
        // border: 5px solid #111213;
        width: 70%;
        background: #111213;
    }

    .tp-button {
        width: 50%;
        margin: 20px auto;
        display: block;
        filter: invert(100%);
        padding-bottom: 40px;
    }

    .image-container {
        display: flex;
    }

    .side-image {
        border-radius: 16px;
        margin-top: -120px;
        margin-left: -475px;
    }

    @media only screen and (max-width: 900px) {
        #max-width-div {
            max-width: 70%;
        }

        #title {
            margin: 80px 0 120px 0;
        }

        #display {
            display: none;
        }
    }
</style>
