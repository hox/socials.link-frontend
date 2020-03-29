<template>
    <div class="landing-container">
        <div class="max-width">
            <div class="container">
                <div class="signup-container">
                    <div class="tp-auth">
                        <a href="#" class="tp-anchor"
                            ><img src="@/assets/auth_buttons/g_signin@2x.png" class="tp-button"
                        /></a>
                    </div>
                    <div class="auth-spacer">OR</div>
                    <form class="basic-auth">
                        <div class="signup-textfield blue">
                            <input type="text" required />
                            <label data-content="Email">Email</label>
                        </div>
                        <div class="signup-textfield blue">
                            <input type="text" required />
                            <label data-content="Username">Username</label>
                        </div>
                        <div class="signup-textfield blue">
                            <input type="password" required />
                            <label data-content="Password">Password</label>
                        </div>
                        <div class="signup-textfield red">
                            <input type="password" required />
                            <label data-content="Repeat Password">Repeat Password</label>
                        </div>
                        <button class="signup-submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignupContent"
    };
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .signup-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;
        height: 600px;
        background: #000000;
        border-radius: 25px;
    }

    .basic-auth {
        width: 70%;
        padding-top: 20px;
    }

    .signup-textfield {
        height: 4rem;
        width: 100%;
        margin: 0 auto;
    }

    .signup-submit {
        width: 180px;
        height: 40px;
        display: block;
        margin: 20px 0 20px 0;
        border: none;
        background: $mint;
        color: $text;
        border-radius: 1px;
        font-weight: 700;
    }

    .signup-textfield input {
        background: none;
        border: none;
        display: block;
        font-size: 1rem;
        padding: 0.25rem 0.1rem;
        width: 100%;
        border-bottom: 2px solid #fff;
        color: #ffffff;
    }
    .signup-textfield input:focus {
        outline: none;
    }
    .signup-textfield label {
        display: inline-block;
        font-size: 0;
        pointer-events: none;
        position: relative;
        font-family: $title-font;
        width: 100%;
        color: #ffffff;
    }
    .signup-textfield label::before {
        content: attr(data-content);
        position: relative;
        transition: all 0.2s ease;
        will-change: font-size, top;
    }
    .signup-textfield label::after {
        bottom: 0.9rem;
        content: "";
        height: 0.3rem;
        left: 50%;
        position: absolute;
        transition: all 0.2s ease;
        width: 0;
        will-change: width, left;
    }
    .signup-textfield label::before,
    .signup-textfield input[required]:focus ~ label::before {
        font-size: 0.75rem;
        top: -3.25rem;
    }
    .signup-textfield input:focus ~ label::after {
        left: 0%;
        width: 100%;
    }
    .signup-textfield input:invalid ~ label::before {
        font-size: 1rem;
        top: -2rem;
    }

    .signup-link {
        font-family: $title-font;
        font-weight: 400;
        font-size: 14px;
        margin-top: -12px;
    }

    a {
        color: $mint;
        display: block;
    }

    .auth-spacer {
        color: $mint;
        width: 70%;
        font-size: 12px;
        font-family: $title-font;
        margin: 0 auto;
        padding-bottom: 10px;
    }

    .tp-auth {
        width: 70%;
        padding-bottom: 1.3rem;
    }

    .tp-button {
        width: 185px;
        margin-left: -2px;
        display: block;
    }

    .tp-anchor {
        width: 80px;
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
